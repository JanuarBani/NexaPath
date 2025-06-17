export function generateNavLinksTemplate(isMobile = false) {
  const linkClass = isMobile
    ? 'block py-2 px-4 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200'
    : 'py-2 px-4 rounded hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200';

  const ulClass = isMobile ? 'flex flex-col gap-4 mt-4 px-4' : 'flex flex-row gap-4 mt-0 px-0';

  // Dropdown class untuk desktop menggunakan class "dropdown-menu"
  // Untuk mobile, dropdown collapsible dengan class "mobile-dropdown-menu"
  const dropdownClass = isMobile
    ? 'mobile-dropdown-menu max-h-0 overflow-hidden transition-[max-height] duration-300 bg-white/30 backdrop-blur-md shadow-lg rounded mt-2 py-2 w-full'
    : 'dropdown-menu';

  return `
    <ul class="${ulClass}">
      <li><a href="#/" class="${linkClass}">Beranda</a></li>
      <!-- Prediksi jadi link biasa tanpa dropdown -->
      <li><a href="#/karier" class="${linkClass}">Prediksi Karier</a></li>
      <li><a href="#/jurusan" class="${linkClass}">Prediksi Jurusan</a></li>

      <li><a href="#/about" class="${linkClass}">Tentang</a></li>
    </ul>
  `;
}

export function loadFrontendTemplate() {
  return `
    <!-- Load Font Awesome CDN for icons -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      rel="stylesheet"
    />

    <section class="max-w-3xl mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold mb-6 text-gray-700 dark:text-gray-200 leading-relaxed flex items-center gap-3">
        <i class="fas fa-laptop-code text-indigo-600 dark:text-indigo-400"></i>
        Dokumentasi Fitur Front-end
      </h2>
      <img src="../../public/images/frontend/frontend.jpg"
           alt="Ilustrasi Frontend"
           class="rounded-xl mb-6 shadow-md w-full object-cover max-h-96" />
      <p class="text-gray-700 dark:text-gray-200 text-sm md:text-base mb-6 leading-relaxed">
        Berikut adalah rangkuman keseluruhan kode dan fitur utama Front-end NexaPath:
      </p>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 flex items-center gap-2">
        <i class="fas fa-cogs text-indigo-500"></i> 1. Service Worker (Workbox)
      </h3>
      <ul class="list-disc list-inside ml-4 mb-6 text-gray-700 dark:text-gray-200 space-y-1">
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Precache aset dengan <code>precache(self.__WB_MANIFEST)</code> untuk PWA.</li>
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Strategi cache:
          <ul class="list-disc list-inside ml-6 space-y-1">
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i>Google Fonts, FontAwesome, UI Avatars menggunakan <code>CacheFirst</code>.</li>
            <li><i class="fas fa-check-circle text-green-500 mr-2"></i>API requests (non-gambar) menggunakan <code>NetworkFirst</code>.</li>
          </ul>
        </li>
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Gunakan <code>CacheableResponsePlugin</code> untuk cache response status 0 dan 200 saja.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 flex items-center gap-2">
        <i class="fas fa-file-code text-indigo-500"></i> 2. Struktur HTML Dasar
      </h3>
      <ul class="list-disc list-inside ml-4 mb-6 text-gray-700 dark:text-gray-200 space-y-1">
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Dokumen standar dengan <code>lang="id"</code> dan kelas <code>scroll-smooth</code>.</li>
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i><code>&lt;head&gt;</code> memuat meta, favicon, manifest, Tailwind (dark mode), FontAwesome, Google Fonts, dan script utama.</li>
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i><code>&lt;body&gt;</code> berisi link aksesibilitas, header (logo, navigasi, toggle tema, hamburger), drawer navigasi mobile, konten utama, footer, dan notifikasi offline.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 flex items-center gap-2">
        <i class="fas fa-file-alt text-indigo-500"></i> 3. package.json
      </h3>
      <ul class="list-disc list-inside ml-4 mb-6 text-gray-700 dark:text-gray-200 space-y-1">
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Nama aplikasi <code>nexapath</code>, versi 1.0.0.</li>
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Dependencies utama: React, TensorFlow.js, Leaflet, Workbox, Tailwind, Vite.</li>
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Skrip untuk dev, build, preview, dan prettier.</li>
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Minimal Node.js versi 16.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 flex items-center gap-2">
        <i class="fas fa-paint-brush text-indigo-500"></i> 4. Tailwind CSS Config
      </h3>
      <ul class="list-disc list-inside ml-4 mb-6 text-gray-700 dark:text-gray-200 space-y-1">
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Dark mode diaktifkan via kelas <code>class</code>.</li>
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Scan konten di <code>index.html</code> dan folder <code>src</code>.</li>
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Extend tema dengan warna utama & sekunder, font Knewave disetel di HTML.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 flex items-center gap-2">
        <i class="fas fa-tools text-indigo-500"></i> 5. Vite Config
      </h3>
      <ul class="list-disc list-inside ml-4 mb-6 text-gray-700 dark:text-gray-200 space-y-1">
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Base path <code>/</code>.</li>
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Plugin React dan PWA dengan manifest lengkap, runtime caching CDN, dan auto update PWA.</li>
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Server port 9000, buka browser otomatis, akses jaringan lokal.</li>
        <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Build output di <code>dist</code> dengan sourcemap aktif.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Kesimpulan Umum</h3>
      <p class="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
        Aplikasi React modern dengan PWA lengkap, caching optimal, tema gelap/terang, dan navigasi responsif. TensorFlow.js untuk AI prediksi langsung di browser. UI ramah aksesibilitas dan siap offline.
      </p>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Ringkasan Fitur Utama</h3>
      <ul class="list-disc list-inside ml-4 mb-6 text-gray-700 dark:text-gray-200 space-y-1">
        <li><strong>KarirPage & KarirPresenter (MVP):</strong> Form input user, prediksi karir dengan AI, tampilkan hasil dan error.</li>
        <li><strong>JurusanPage & JurusanPresenter (MVP):</strong> Form input jurusan, validasi, panggil API prediksi jurusan, tampilkan hasil.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 flex items-center gap-3">
        Fitur Unggulan
      </h3>
      <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-200 mb-12 space-y-1">
        <li><i class="fas fa-bullseye text-indigo-600 mr-2"></i> Prediksi Karier sesuai minat, nilai, gaya kerja.</li>
        <li><i class="fas fa-graduation-cap text-indigo-600 mr-2"></i> Rekomendasi Jurusan kuliah sesuai keahlian dan tujuan hidup.</li>
        <li><i class="fas fa-robot text-indigo-600 mr-2"></i> AI dengan TensorFlow.js untuk prediksi real-time di browser tanpa server tambahan.</li>
      </ul>
    </section>
  `;
}



export function loadBackendTemplate() {
  return `
    <!-- Load Font Awesome CDN for icons -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      rel="stylesheet"
    />

    <section class="max-w-3xl mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold mb-6 text-gray-700 dark:text-gray-200 leading-relaxed flex items-center gap-3">
        <i class="fas fa-boxes text-indigo-600 dark:text-indigo-400"></i>
        Dokumentasi Fitur Backend
      </h2>

      <section class="mb-6">
        <h3 class="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 leading-relaxed flex items-center gap-2">
          <i class="fas fa-server"></i> 1. Server Hapi dengan CORS Support
        </h3>
        <img src="../../public/images/backend/backend.jpg"
           alt="Ilustrasi Backend"
           class="rounded-xl mb-6 shadow-md w-full object-cover max-h-96" />
        <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-200 text-sm md:text-base mb-6 leading-relaxed space-y-1">
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Menjalankan server Hapi di <code>localhost:5000</code></li>
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Mengatur CORS agar hanya menerima request dari <code>http://localhost:9000</code></li>
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Mendukung cookies/credentials serta header khusus seperti <code>Authorization</code></li>
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Routes diatur melalui modul <code>routes</code></li>
        </ul>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 leading-relaxed flex items-center gap-2">
          <i class="fas fa-route"></i> 2. Routes API
        </h2>
        <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-200 text-sm md:text-base mb-6 leading-relaxed space-y-1">
          <li><strong>GET /</strong>: Mengecek server berjalan, mengembalikan pesan sederhana.</li>
          <li><strong>POST /api/prediksi</strong>: Prediksi karir berdasarkan fitur kognitif dan akademik.</li>
          <li><strong>POST /api/prediksi-jurusan</strong>: Prediksi jurusan berdasarkan skor UTBK.</li>
          <li><strong>Fallback *</strong>: Menangani route tidak ditemukan dengan response 404.</li>
        </ul>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 leading-relaxed flex items-center gap-2">
          <i class="fas fa-hand-pointer"></i> 3. Handler Prediksi Karir
        </h2>
        <p class="text-gray-700 dark:text-gray-200 text-sm md:text-base mb-2 leading-relaxed">
          Handler <code>prediksiCareerHandler</code> melakukan:
        </p>
        <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-200 text-sm md:text-base mb-6 leading-relaxed space-y-1">
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Validasi fitur input (jumlah dan tipe)</li>
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Memanggil service <code>predict</code> (FastAPI ML backend)</li>
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Mengembalikan hasil prediksi karir dan confidence</li>
        </ul>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 leading-relaxed flex items-center gap-2">
          <i class="fas fa-hand-holding-medical"></i> 4. Handler Prediksi Jurusan
        </h2>
        <p class="text-gray-700 dark:text-gray-200 text-sm md:text-base mb-2 leading-relaxed">
          Handler <code>prediksiJurusanHandler</code> menangani:
        </p>
        <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-200 text-sm md:text-base mb-6 leading-relaxed space-y-1">
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Validasi skor UTBK dan <code>test_type</code> (science/humanities)</li>
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Pemanggilan ke <code>recommendMajor</code> service (API eksternal)</li>
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Response berupa daftar jurusan dan confidence</li>
        </ul>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 leading-relaxed flex items-center gap-2">
          <i class="fas fa-cloud-upload-alt"></i> 5. Service <code>predict</code>
        </h2>
        <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-200 text-sm md:text-base mb-6 leading-relaxed space-y-1">
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Melakukan POST data ke API Machine Learning (FastAPI)</li>
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Mengembalikan prediksi pekerjaan dan tingkat confidence</li>
        </ul>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 leading-relaxed flex items-center gap-2">
          <i class="fas fa-cloud-download-alt"></i> 6. Service <code>recommendMajor</code>
        </h2>
        <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-200 text-sm md:text-base mb-6 leading-relaxed space-y-1">
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>POST skor UTBK ke API rekomendasi jurusan (Railway)</li>
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Mengembalikan daftar jurusan rekomendasi dan tingkat confidence</li>
        </ul>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200 leading-relaxed flex items-center gap-3">
          <i class="fas fa-puzzle-piece text-indigo-600 dark:text-indigo-400"></i> 🧩 Ringkasan Fitur Utama
        </h2>
        <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-200 text-sm md:text-base mb-6 leading-relaxed space-y-1">
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Backend API dengan Hapi.js</li>
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Validasi input ketat & error handling</li>
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Integrasi dengan API Machine Learning (FastAPI)</li>
          <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>CORS aman dan terbatas untuk frontend tertentu</li>
        </ul>
      </section>
    </section>
  `;
}


export function loadMachineLearningTemplate() {
  return `
    <!-- Load Font Awesome CDN for icons -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      rel="stylesheet"
    />

    <section class="max-w-3xl mx-auto px-6 py-10 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 class="text-4xl font-extrabold mb-8 text-gray-800 dark:text-gray-100 leading-snug flex items-center gap-3">
        <i class="fas fa-robot text-indigo-600 dark:text-indigo-400"></i>
        Dokumentasi Fitur Machine Learning
      </h2>
      <img 
        src="../../public/images/machine-learning.jpg"
        alt="Ilustrasi Machine Learning"
        class="rounded-xl mb-8 shadow-lg w-full object-cover max-h-96 mx-auto"
      />
      <p class="text-gray-700 dark:text-gray-300 text-base mb-8 leading-relaxed">
        Berikut penjelasan singkat tiap bagian dari kode yang kamu berikan:
      </p>
      <div class="space-y-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
        
        <section>
          <h3 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <i class="fas fa-download"></i> 1. Import dan Load Dataset
          </h3>
          <ul class="list-disc list-inside ml-6 space-y-1">
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i><code>pandas</code> dan <code>numpy</code> untuk manipulasi data.</li>
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Gabungkan dua dataset CSV secara horizontal menggunakan <code>pd.concat(axis=1)</code>.</li>
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Bersihkan kolom target <code>Job profession</code> dengan <code>.str.strip()</code> agar tidak ada spasi berlebih.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <i class="fas fa-cogs"></i> 2. Persiapan Fitur dan Target
          </h3>
          <ul class="list-disc list-inside ml-6 space-y-1">
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Pilih kolom fitur seperti kecerdasan majemuk dan nilai pelajaran.</li>
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i><code>X</code> diubah ke tipe float, atasi <code>NaN</code> dan <code>inf</code> dengan <code>fillna(0)</code> dan <code>replace</code>.</li>
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Target <code>y</code> berupa kategori pekerjaan.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <i class="fas fa-wrench"></i> 3. Preprocessing Data
          </h3>
          <ul class="list-disc list-inside ml-6 space-y-1">
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Normalisasi fitur menggunakan <code>StandardScaler</code>.</li>
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Encode target ke angka dengan <code>LabelEncoder</code> dan ubah ke one-hot encoding dengan <code>to_categorical</code>.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <i class="fas fa-code-branch"></i> 4. Split Data
          </h3>
          <ul class="list-disc list-inside ml-6 space-y-1">
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Bagi data menjadi training (80%) dan testing (20%).</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <i class="fas fa-project-diagram"></i> 5. Membangun Model Neural Network (Keras)
          </h3>
          <ul class="list-disc list-inside ml-6 space-y-1">
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Model <code>Sequential</code> dengan 2 hidden layer (64 neuron, ReLU).</li>
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Output layer menggunakan <code>softmax</code> untuk klasifikasi multi-kelas.</li>
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Compile dengan optimizer Adam dan loss <code>categorical_crossentropy</code>.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <i class="fas fa-play-circle"></i> 6. Training Model
          </h3>
          <ul class="list-disc list-inside ml-6 space-y-1">
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Latih model selama 30 epoch dengan batch size 16.</li>
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Gunakan validation split 20% dari data training.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <i class="fas fa-chart-line"></i> 7. Evaluasi Model
          </h3>
          <ul class="list-disc list-inside ml-6 space-y-1">
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Lakukan prediksi pada data test.</li>
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Cetak akurasi dan classification report.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <i class="fas fa-save"></i> 8. Menyimpan Model ke Format TensorFlow.js
          </h3>
          <ul class="list-disc list-inside ml-6 space-y-1">
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Simpan model agar bisa dipakai di aplikasi web dengan TensorFlow.js.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <i class="fas fa-server"></i> 9. Membuat API Flask
          </h3>
          <ul class="list-disc list-inside ml-6 space-y-1">
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Load model yang sudah dilatih (<code>model.h5</code>).</li>
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Load dan fit ulang scaler dan label encoder agar preprocessing konsisten.</li>
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Endpoint <code>/predict</code> menerima input JSON dan mengembalikan prediksi pekerjaan dan confidence.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <i class="fas fa-rocket"></i> 10. Deployment ke Railway
          </h3>
          <ul class="list-disc list-inside ml-6 space-y-1">
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Aplikasi Flask berjalan di port environment Railway.</li>
            <li><i class="fas fa-angle-right text-indigo-500 mr-2"></i>Endpoint siap dipanggil lewat URL deployment.</li>
          </ul>
        </section>
      </div>
    </section>
  `;
}

