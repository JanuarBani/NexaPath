import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import NotFoundPage from '../pages/not-found/not-found-page';
import KarirPage from '../pages/prediksi-karir/prediksi-career';
import JurusanPage from '../pages/prediksi-major/prediksi-jurusan';

const routes = {
  '/': () => new HomePage(),
  '/about': () => new AboutPage(),
  '/karier': () => new KarirPage(),
  '/jurusan': () => new JurusanPage(),
  '*': () => new NotFoundPage(),
};

export default routes;
