// home-page.js
import HomePresenter from './home-presenter.js';
import { setupScrollAnimation } from '../../index.js'; // pastikan export-nya benar di index.js

export default class HomePage {
  #presenter = null;

  async render() {
    return `
<div id="career-major-section" class="w-full flex justify-center px-4 md:px-6 lg:px-8 py-8 bg-white dark:bg-gray-900">
  <div class="w-full max-w-screen-xl space-y-10">

    <!-- Section: Intro Career -->
    <section aria-labelledby="career-heading"
             data-animate="slide-up"
             class="neon-box bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-10 px-4 md:px-6 rounded-2xl transition-colors duration-500 opacity-0 will-change-transform">
      <div class="flex flex-col-reverse md:flex-row items-center gap-8">
        <div class="flex-1 text-center md:text-left">
          <header>
            <h2 id="career-heading" class="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4">
              Karier Impianmu
            </h2>
            <p class="text-gray-700 dark:text-gray-200 text-sm md:text-base mb-6 leading-relaxed">
              Temukan berbagai pilihan karier yang sesuai dengan <span class="font-medium text-blue-600 dark:text-blue-400">minat</span>,
              <span class="font-medium text-blue-600 dark:text-blue-400">bakat</span>, dan potensi terbaik dalam dirimu.
            </p>
          </header>
          <a href="#/karier" class="neon-btn inline-block mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full transition">
            <i class="fas fa-bullseye mr-2"></i> Prediksi Karier Kamu
          </a>
        </div>

        <div class="flex-1">
          <div class="neon-box overflow-hidden rounded-xl hover:scale-[1.03] transition" style="box-shadow: 0 0 10px rgba(37,99,235,0.4);">
            <img src="/images/karir.jpg" alt="Karier Impian" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Intro Jurusan -->
    <section aria-labelledby="major-heading"
             data-animate="slide-up"
             class="neon-box bg-gray-50 dark:bg-gray-700 py-10 px-4 rounded-2xl text-center transition-colors duration-300 opacity-0 will-change-transform">
      <header>
        <h2 id="major-heading" class="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400 mb-3">
          Pilih Jurusan Tepat
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-4">
          Dapatkan rekomendasi jurusan kuliah yang mendukung tujuan kariermu dan sesuai dengan kepribadian serta kemampuanmu.
        </p>
      </header>

      <div class="max-w-md mx-auto mb-4 rounded-xl overflow-hidden neon-box" style="box-shadow: 0 0 8px #2563eb;">
        <img src="/images/wisuda.jpg" alt="Pilih Jurusan" class="w-full h-auto object-cover" />
      </div>

      <a href="#/jurusan"
         class="neon-btn inline-block mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full transition">
        <i class="fas fa-graduation-cap mr-2"></i> Prediksi Jurusan Kamu
      </a>
    </section>

    <!-- Section: Navigasi dan Konten -->
    <section aria-label="Navigasi dan Hasil Rekomendasi"
             data-animate="slide-up"
             class="neon-box bg-gray-100 dark:bg-gray-900 py-10 px-2 md:px-4 rounded-2xl transition-colors duration-300 opacity-0 will-change-transform">
      <nav aria-label="Navigasi Tab Karier dan Jurusan"
           class="flex justify-center gap-4 text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6">
        <button id="careerNav"
                class="nav-btn text-blue-600 border-b-2 border-blue-600 pb-1 transition" aria-current="true">
          Career
        </button>
        <button id="majorNav"
                class="nav-btn hover:text-blue-600 hover:border-blue-600 pb-1 border-b-2 border-transparent transition">
          Jurusan
        </button>
      </nav>

      <div id="content-loading-container" class="mb-4" role="status" aria-live="polite"></div>
      <article id="content" class="space-y-10 animate-fadeIn min-h-[300px]" aria-live="polite"></article>
    </section>

  </div>
</div>
  `;
  }

  async afterRender() {
    try {
      this.showLoading();

      this.#presenter = new HomePresenter({ view: this });
      await this.#presenter.init();

      this.setupNavListeners();
    } catch (error) {
      console.error('afterRender: error saat inisialisasi:', error);
      this.showError('Gagal memuat data awal. Silakan coba lagi nanti.');
    } finally {
      this.hideLoading();
    }

    // Jalankan animasi scroll hanya jika fungsi tersedia
    if (typeof setupScrollAnimation === 'function') {
      setupScrollAnimation();
    } else {
      console.warn('setupScrollAnimation() tidak ditemukan.');
    }
  }

  setupNavListeners() {
    const careerBtn = document.getElementById('careerNav');
    const majorBtn = document.getElementById('majorNav');

    if (careerBtn) {
      careerBtn.addEventListener('click', () => {
        this.setActiveTab('careerNav');
        this.#presenter.loadCareer();
      });
    }

    if (majorBtn) {
      majorBtn.addEventListener('click', () => {
        this.setActiveTab('majorNav');
        this.#presenter.loadMajor();
      });
    }
  }

  setActiveTab(activeId) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach((btn) => {
      btn.classList.remove('text-blue-600', 'border-blue-600');
      btn.classList.add('text-gray-700', 'dark:text-gray-300', 'border-transparent');
    });

    const activeBtn = document.getElementById(activeId);
    if (activeBtn) {
      activeBtn.classList.add('text-blue-600', 'border-blue-600');
      activeBtn.classList.remove('text-gray-700', 'dark:text-gray-300', 'border-transparent');
    }
  }

  showLoading() {
    const container = document.getElementById('content-loading-container');
    if (container) {
      container.innerHTML = `
        <div class="flex justify-center items-center h-16">
          <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      `;
    }
  }

  hideLoading() {
    const container = document.getElementById('content-loading-container');
    if (container) container.innerHTML = '';
  }

  showError(message) {
    const container = document.getElementById('content');
    if (container) {
      container.innerHTML = `<p class="text-red-600 font-semibold">${message}</p>`;
    }
  }

  populateCareerList(groupedCareers) {
    const container = document.getElementById('content');
    if (!container) return;

    if (!Array.isArray(groupedCareers) || groupedCareers.length === 0) {
      container.innerHTML = `<p class="text-gray-500 dark:text-gray-400 italic text-center mt-6">Belum ada data karier.</p>`;
      return;
    }

    container.innerHTML = groupedCareers
      .map(
        ({ industry, careers }) => `
  <section class="mb-10 p-4 md:p-6 rounded-2xl bg-white dark:bg-gray-800 shadow transition-colors duration-300">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white inline-block border-b-4 border-blue-600 pb-1 mb-5">
      ${industry}
    </h2>

    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      ${careers
        .map(
          ({ name, description, image }) => `
        <li class="neon-box bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-4 shadow-sm transform transition duration-300 hover:shadow-lg hover:scale-105 cursor-pointer text-center flex flex-col items-center">
          <img src="${image}" alt="${name}" class="w-24 sm:w-28 md:w-32 aspect-square object-cover rounded-xl mb-4 shadow-sm transition-transform duration-300" />
          <h3 class="text-blue-700 dark:text-blue-400 font-semibold text-lg mb-1">${name}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">${description}</p>
        </li>
      `,
        )
        .join('')}
    </ul>
  </section>
`,
      )
      .join('');
  }

  populateMajorList(majors) {
    const container = document.getElementById('content');
    if (!container) return;

    if (!Array.isArray(majors) || majors.length === 0) {
      container.innerHTML = `<p class="text-gray-500 dark:text-gray-400 italic text-center mt-6">Belum ada data jurusan.</p>`;
      return;
    }

    container.innerHTML = `
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center inline-block border-b-4 border-blue-600 pb-1 mb-6">
    Daftar Jurusan Populer
  </h2>

  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
    ${majors
      .map(
        ({ name, description, image }) => `
      <li class="neon-box group bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-4 shadow-sm hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600 transition duration-300 cursor-pointer flex flex-col items-center text-center">
        <img src="${image}" alt="${name}" class="w-24 sm:w-28 md:w-32 aspect-square object-cover rounded-xl mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300" />
        <h3 class="text-gray-900 dark:text-white font-semibold text-lg mb-1">${name}</h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">${description}</p>
      </li>
    `,
      )
      .join('')}
  </ul>
`;
  }

  populateMajorListError(message) {
    const container = document.getElementById('content');
    if (container) {
      container.innerHTML = `
        <p class="text-red-600 font-semibold">Gagal memuat jurusan: ${message}</p>
      `;
    }
  }
}
