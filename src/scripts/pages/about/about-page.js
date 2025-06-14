import { setupScrollAnimation } from '../../index.js';

// Data teknologi
const techStack = [
  {
    image: '/images/htl.png',
    name: 'HTML5',
    description:
      'Bahasa markup standar untuk membuat struktur halaman web secara semantik dan responsif.',
  },
  {
    image: '/images/css.png',
    name: 'CSS3',
    description:
      'Bahasa untuk mendesain dan mengatur tampilan halaman web dengan berbagai efek dan layout modern.',
  },
  {
    image: '/images/js.png',
    name: 'JavaScript',
    description:
      'Bahasa pemrograman yang membuat halaman web interaktif dan dinamis di sisi klien.',
  },
  {
    image: '/images/tailwind.png',
    name: 'Tailwind CSS',
    description:
      'Framework CSS utility-first yang cepat dan mudah untuk membangun UI yang responsif dan modern.',
  },
  {
    image: '/images/node.png',
    name: 'Node.js',
    description:
      'Runtime JavaScript yang berjalan di server untuk membangun backend dan API yang scalable.',
  },
  {
    image: '/images/vite.png',
    name: 'Vite',
    description: 'Build tool modern yang cepat untuk pengembangan front-end berbasis modul ES.',
  },
  {
    image: '/images/tsjs.png',
    name: 'TensorFlow.js',
    description:
      'Library machine learning yang memungkinkan model ML dijalankan langsung di browser menggunakan JavaScript.',
  },
  {
    image: '/images/machinelearning.png',
    name: 'Machine Learning',
    description:
      'Teknologi yang memungkinkan komputer belajar dari data untuk membuat prediksi dan keputusan otomatis.',
  },
  {
    image: '/images/python.png',
    name: 'Python',
    description:
      'Bahasa pemrograman serbaguna yang populer dalam data science, backend development, dan machine learning.',
  },
];

export default class AboutPage {
  async render() {
    return `
    <div id="about-section" class="w-full min-h-screen px-4 md:px-6 lg:px-12 py-8 md:py-12 bg-white dark:bg-gray-900 flex flex-col space-y-12">

      <!-- Deskripsi Website -->
      <section aria-labelledby="about-heading"
               class="neon-box bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-10 px-6 md:px-10 rounded-3xl max-w-6xl mx-auto text-center opacity-0 will-change-transform transition-all" data-animate="slide-up">
        <h2 id="about-heading" class="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 tracking-tight">
          NexaPath – Temukan Jurusan & Karier Impianmu
        </h2>
        <p class="text-gray-700 dark:text-gray-200 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          Temukan jurusan dan karier sesuai <strong>minat, bakat, dan kepribadian</strong> kamu. Prediksi cepat & akurat dengan teknologi AI.
        </p>
      </section>

      <!-- Teknologi yang Digunakan -->
      <section aria-labelledby="techstack-heading"
               class="neon-box bg-gray-50 dark:bg-gray-800 py-8 px-6 md:px-10 rounded-3xl max-w-6xl mx-auto shadow opacity-0 will-change-transform transition-all" data-animate="slide-up">
        <h3 id="techstack-heading" class="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">
          Teknologi yang Digunakan
        </h3>
        <div class="flex flex-wrap justify-center gap-6 text-gray-700 dark:text-gray-300">
          ${techStack
            .map(({ image, name, description }) => {
              const safeId = `desc-${name.replace(/\s+/g, '-').toLowerCase()}`;
              return `
              <div class="relative group flex flex-col items-center space-y-1 cursor-pointer text-center w-24"
                   tabindex="0" aria-describedby="${safeId}">
                <img src="${image}" alt="${name} logo" class="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
                <span class="font-medium text-xs">${name}</span>
                <div id="${safeId}" role="tooltip" aria-hidden="true"
                     class="absolute bottom-full mb-3 w-52 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-xs p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-50">
                  ${description}
                </div>
              </div>`;
            })
            .join('')}
        </div>
      </section>

      <!-- Fitur Utama -->
      <section aria-labelledby="features-heading"
               class="neon-box bg-white dark:bg-gray-900 py-8 px-6 md:px-10 rounded-3xl max-w-6xl mx-auto shadow opacity-0 will-change-transform transition-all" data-animate="slide-up">
        <h3 id="features-heading" class="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">
          Fitur Utama
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 dark:text-gray-200">
          <div class="bg-blue-50 dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-md transition">
            <h4 class="font-semibold text-base mb-1">🎯 Prediksi Karier</h4>
            <p class="text-sm">Jalur karier terbaik berdasarkan minat, nilai, dan gaya kerja kamu.</p>
          </div>
          <div class="bg-blue-50 dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-md transition">
            <h4 class="font-semibold text-base mb-1">🎓 Rekomendasi Jurusan</h4>
            <p class="text-sm">Jurusan kuliah yang cocok dengan keahlian dan tujuan hidupmu.</p>
          </div>
          <div class="bg-blue-50 dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-md transition">
            <h4 class="font-semibold text-base mb-1">🤖 Teknologi AI</h4>
            <p class="text-sm">Prediksi real-time dengan TensorFlow.js langsung dari browser.</p>
          </div>
        </div>
      </section>

      <!-- Alasan Memilih -->
      <section aria-labelledby="goal-heading"
               class="neon-box bg-gray-100 dark:bg-gray-800 py-8 px-6 md:px-10 rounded-3xl max-w-6xl mx-auto opacity-0 will-change-transform transition-all" data-animate="slide-up">
        <h3 id="goal-heading" class="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4 text-center">
          Mengapa Memilih NexaPath?
        </h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm max-w-3xl mx-auto">
          <li>✅ Pilihan jurusan & karier yang lebih tepat dan personal.</li>
          <li>✅ Berdasarkan potensi diri & kepribadian pengguna.</li>
          <li>✅ Tanpa instalasi — cukup dari browser kamu.</li>
        </ul>
      </section>

      <!-- Capaian -->
      <section aria-labelledby="stats-heading"
               class="neon-box bg-blue-50 dark:bg-gray-900 py-8 px-6 md:px-10 rounded-3xl max-w-6xl mx-auto text-center opacity-0 will-change-transform transition-all" data-animate="slide-up">
        <h3 id="stats-heading" class="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          Dampak & Capaian
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-blue-800 dark:text-blue-300 text-base font-semibold">
          <div>
            <div class="text-3xl font-bold">10K+</div>
            <div>Pengguna Terbantu</div>
          </div>
          <div>
            <div class="text-3xl font-bold">95%</div>
            <div>Tingkat Kepuasan</div>
          </div>
          <div>
            <div class="text-3xl font-bold">500+</div>
            <div>Prediksi Akurat</div>
          </div>
        </div>
      </section>

      <!-- Gambar -->
      <section aria-label="Ilustrasi Karier"
               class="neon-box max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 opacity-0 will-change-transform" data-animate="slide-up">
        <img src="/images/karir.jpg" alt="Karier Impian" class="w-full h-auto object-cover" />
      </section>

      <!-- CTA -->
      <section class="text-center py-8 opacity-0 will-change-transform transition-all" data-animate="slide-up">
        <a href="#/karier"
           class="neon-btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
          🎯 Coba Prediksi Kariermu Sekarang
        </a>
      </section>
    </div>
  `;
  }

  async afterRender() {
    setupScrollAnimation();
  }
}
