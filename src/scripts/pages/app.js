import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';
import { isServiceWorkerAvailable, setupSkipToContent, transitionHelper } from '../utils';
import NotFoundPage from './not-found/not-found-page';
import { setupScrollAnimation } from '../index'; // pastikan ini diimport sesuai lokasi kamu

class App {
  #content;
  #skipLinkButton;
  #activePage = null;
  #isRendering = false; // Flag untuk menghindari render tumpang tindih
  #scrollObserver = null;

  constructor({ content, skipLinkButton }) {
    this.#content = content;
    this.#skipLinkButton = skipLinkButton;

    setupSkipToContent(this.#skipLinkButton, this.#content);
  }

  async #setupPushNotification() {
    let subscribeButton = document.getElementById('subscribe-button');

    if (!subscribeButton || !subscribeButton.parentNode) return;

    const isSubscribed = await isCurrentPushSubscriptionAvailable();

    const clonedButton = subscribeButton.cloneNode(true);
    subscribeButton.parentNode.replaceChild(clonedButton, subscribeButton);
    subscribeButton = clonedButton;

    if (isSubscribed) {
      subscribeButton.classList.remove('btn-warning', 'text-dark');
      subscribeButton.classList.add('btn-secondary', 'text-white');
      subscribeButton.innerHTML = `<i class="fas fa-bell-slash"></i> Subscribed`;

      subscribeButton.addEventListener('click', async () => {
        await unsubscribe();
        await this.#setupPushNotification();
      });
    } else {
      subscribeButton.classList.remove('btn-secondary', 'text-white');
      subscribeButton.classList.add('btn-warning', 'text-white');
      subscribeButton.innerHTML = `<i class="fas fa-bell"></i> Subscribe`;

      subscribeButton.addEventListener('click', async () => {
        await subscribe();
        await this.#setupPushNotification();
      });
    }
  }

  async renderPage() {
    if (this.#isRendering) return; // Cegah render jika masih proses render sebelumnya
    this.#isRendering = true;

    try {
      const url = getActiveRoute();
      const pageFactory = routes[url];

      let page;
      if (!pageFactory || typeof pageFactory !== 'function') {
        page = new NotFoundPage();
      } else {
        page = pageFactory();
      }

      if (this.#activePage?.destroy) {
        this.#activePage.destroy();
      }

      this.#activePage = page;

      if (page === null) {
        // Tidak render apa pun jika page null (misalnya karena redirect)
        return;
      }

      if (typeof page.render !== 'function') {
        this.#content.innerHTML = '<p class="text-danger">Halaman tidak valid.</p>';
        return;
      }

      const html = await page.render();

      const previousPage = document.querySelector('.active');
      if (previousPage) {
        previousPage.classList.add('inactive');
        previousPage.classList.remove('active');
      }

      const transition = transitionHelper({
        updateDOM: () => {
          this.#content.innerHTML = html;

          // Disconnect observer lama agar tidak tumpang tindih
          if (this.#scrollObserver) {
            this.#scrollObserver.disconnect();
          }

          // Setup observer baru untuk animasi scroll
          this.#scrollObserver = setupScrollAnimation();

          const newPage = document.querySelector('.page');
          if (newPage) {
            newPage.classList.add('active');
            newPage.classList.remove('inactive');
          }
        },
      });

      transition.ready.catch((error) => {
        if (error.name !== 'AbortError') {
          console.error('Transition Ready Error:', error);
        }
      });

      try {
        await transition.updateCallbackDone;
        scrollTo({ top: 0, behavior: 'instant' });
        page.afterRender();

        if (isServiceWorkerAvailable()) {
          await this.#setupPushNotification(); // dipanggil setelah DOM selesai
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Transition Done Error:', error);
        }
      }
    } catch (error) {
      console.error('Render Page Error:', error);
    } finally {
      this.#isRendering = false;
    }
  }
}

export default App;
