import { setupScrollAnimation } from '../../index.js';

const techStack = [
  // sama seperti yang kamu kasih, gak saya ubah supaya tetap lengkap
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
    <div id="about-section" class="w-full min-h-screen px-4 md:px-6 lg:px-12 py-10 md:py-16 bg-white dark:bg-gray-900 flex flex-col space-y-16 max-w-7xl mx-auto">

      <!-- Intro & Vision -->
      <section aria-labelledby="about-heading" class="text-center neon-box bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-10 rounded-3xl opacity-0 will-change-transform transition-all" data-animate="slide-up">
        <h2 id="about-heading" class="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 tracking-tight leading-snug">
          NexaPath – Panduan Cerdas Menemukan Jurusan & Karier Impianmu
        </h2>
        <p class="text-gray-700 dark:text-gray-200 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
          Di dunia yang penuh pilihan, NexaPath hadir sebagai <strong>teman setia</strong> yang membantu kamu menemukan jalan terbaik berdasarkan <em>minat, bakat, dan kepribadian unik</em> kamu. Dengan teknologi <strong>Artificial Intelligence</strong> terkini, dapatkan prediksi cepat dan akurat yang membuka peluang sukses masa depanmu — langsung dari browser, tanpa ribet.
        </p>
      </section>

      <!-- Core Technologies -->
      <section aria-labelledby="techstack-heading" class="neon-box bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl shadow opacity-0 will-change-transform transition-all" data-animate="slide-up">
        <h3 id="techstack-heading" class="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-8 text-center">
          Teknologi Inti yang Menggerakkan NexaPath
        </h3>
        <div class="flex flex-wrap justify-center gap-8 text-gray-700 dark:text-gray-300">
          ${techStack
            .map(({ image, name, description }) => {
              const safeId = `desc-${name.replace(/\s+/g, '-').toLowerCase()}`;
              return `
              <div class="relative group flex flex-col items-center space-y-2 cursor-pointer text-center w-28"
                   tabindex="0" aria-describedby="${safeId}">
                <img src="${image}" alt="${name} logo" class="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300" />
                <span class="font-semibold text-sm">${name}</span>
                <div id="${safeId}" role="tooltip" aria-hidden="true"
                     class="absolute bottom-full mb-4 w-56 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-xs p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-50">
                  ${description}
                </div>
              </div>`;
            })
            .join('')}
        </div>
      </section>

      <!-- Key Features -->
      <section aria-labelledby="features-heading" class="neon-box bg-white dark:bg-gray-900 p-10 rounded-3xl shadow opacity-0 will-change-transform transition-all" data-animate="slide-up">
        <h3 id="features-heading" class="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-8 text-center">
          Fitur Unggulan yang Membuat NexaPath Berbeda
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 dark:text-gray-200">
          <div class="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 class="font-semibold text-lg mb-2 flex items-center gap-2">🎯 Prediksi Karier Akurat</h4>
            <p class="text-sm leading-relaxed">Jalur karier terbaik yang dipersonalisasi berdasarkan minat, nilai akademis, dan gaya kerja unikmu.</p>
          </div>
          <div class="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 class="font-semibold text-lg mb-2 flex items-center gap-2">🎓 Rekomendasi Jurusan Terarah</h4>
            <p class="text-sm leading-relaxed">Temukan jurusan kuliah yang paling sesuai dengan keahlian dan impian masa depanmu.</p>
          </div>
          <div class="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 class="font-semibold text-lg mb-2 flex items-center gap-2">🤖 AI Berbasis TensorFlow.js</h4>
            <p class="text-sm leading-relaxed">Prediksi real-time langsung di browser tanpa perlu koneksi server tambahan.</p>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section aria-labelledby="why-us-heading" class="neon-box bg-gray-100 dark:bg-gray-800 p-10 rounded-3xl max-w-4xl mx-auto opacity-0 will-change-transform transition-all" data-animate="slide-up">
        <h3 id="why-us-heading" class="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">
          Kenapa NexaPath Pilihan Terbaikmu?
        </h3>
        <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-base">
          <li>✅ Personalisasi mendalam berdasarkan potensi dan karakter unik pengguna.</li>
          <li>✅ Teknologi AI mutakhir yang terus diperbarui untuk hasil paling akurat.</li>
          <li>✅ Mudah diakses, tanpa perlu instalasi—langsung dari browser favoritmu.</li>
          <li>✅ Dukungan penuh untuk mode gelap dan pengalaman pengguna yang nyaman.</li>
        </ul>
      </section>

      <!-- Impact & Stats -->
      <section aria-labelledby="impact-heading" class="neon-box bg-blue-50 dark:bg-gray-900 p-10 rounded-3xl max-w-5xl mx-auto text-center opacity-0 will-change-transform transition-all" data-animate="slide-up">
        <h3 id="impact-heading" class="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-8">
          Dampak Nyata & Capaian Kami
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 text-blue-800 dark:text-blue-300 text-xl font-semibold">
          <div>
            <div class="text-4xl font-extrabold mb-1">10K+</div>
            <div>Pengguna Terbantu</div>
          </div>
          <div>
            <div class="text-4xl font-extrabold mb-1">95%</div>
            <div>Tingkat Kepuasan Pengguna</div>
          </div>
          <div>
            <div class="text-4xl font-extrabold mb-1">500+</div>
            <div>Prediksi Akurat</div>
          </div>
        </div>
      </section>

      <!-- Illustration -->
      <section aria-label="Ilustrasi Karier" class="neon-box max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 opacity-0 will-change-transform text-center py-12 opacity-0 will-change-transform transition-all" data-animate="slide-up">
        <img src="/images/karir.png" alt="Ilustrasi Karier Impian" class="w-full h-auto object-cover" />
        <a href="#/karier"
           class="neon-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl">
          🎯 Yuk, Coba Prediksi Kariermu Sekarang!
        </a>
      </section>

    </div>
    `;
  }

  async afterRender() {
    setupScrollAnimation();
  }
}
