var F=t=>{throw TypeError(t)};var P=(t,e,a)=>e.has(t)||F("Cannot "+a);var d=(t,e,a)=>(P(t,e,"read from private field"),a?a.call(t):e.get(t)),m=(t,e,a)=>e.has(t)?F("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),g=(t,e,a,n)=>(P(t,e,"write to private field"),n?n.call(t,a):e.set(t,a),a),M=(t,e,a)=>(P(t,e,"access private method"),a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();class N{static async getTrendingCareersByIndustry(){return[{industry:"Teknologi",careers:[{name:"Software Engineer",description:"Mengembangkan perangkat lunak dan aplikasi.",image:"/images/software-engineer.jpg"},{name:"UI/UX Designer",description:"Merancang antarmuka pengguna yang menarik dan mudah digunakan.",image:"/images/ui-ux-designer.jpg"},{name:"Data Scientist",description:"Menganalisis data untuk mendukung pengambilan keputusan.",image:"/images/data-scientist.jpg"}]},{industry:"Kesehatan",careers:[{name:"Perawat",description:"Memberikan perawatan medis dan dukungan kepada pasien.",image:"/images/perawat.jpg"},{name:"Dokter Umum",description:"Mendiagnosa dan mengobati berbagai kondisi kesehatan umum.",image:"/images/dokter-umum.jpg"}]},{industry:"Keuangan",careers:[{name:"Analis Keuangan",description:"Menganalisis kondisi keuangan perusahaan atau individu.",image:"/images/analis-keuangan.jpg"},{name:"Akuntan",description:"Mencatat dan menyusun laporan keuangan.",image:"/images/akuntan.jpg"}]}]}}class H{static async getMajors(){return[{name:"Teknik Informatika",description:"Belajar tentang pemrograman, sistem komputer, dan pengembangan perangkat lunak.",image:"/images/teknik-informatika.jpg"},{name:"Kedokteran",description:"Mempelajari ilmu kesehatan dan cara menangani pasien.",image:"/images/kedokteran.jpg"},{name:"Desain Komunikasi Visual",description:"Menggabungkan seni dan teknologi untuk menyampaikan pesan visual.",image:"/images/dkv.jpg"},{name:"Psikologi",description:"Mempelajari perilaku manusia dan proses mental.",image:"/images/psikologi.jpg"},{name:"Akuntansi",description:"Mempelajari pencatatan dan pelaporan keuangan.",image:"/images/akuntansi.jpg"},{name:"Hukum",description:"Mempelajari sistem hukum dan penerapannya dalam masyarakat.",image:"/images/hukum.jpg"},{name:"Manajemen",description:"Belajar cara mengelola organisasi dan sumber daya secara efektif.",image:"/images/manajemen.jpg"},{name:"Ilmu Komunikasi",description:"Mempelajari cara berkomunikasi secara efektif dalam berbagai konteks.",image:"/images/ilmu-komunikasi.jpg"},{name:"Farmasi",description:"Mempelajari obat-obatan dan cara penggunaannya.",image:"/images/farmasi.jpg"},{name:"Teknik Elektro",description:"Belajar tentang sistem kelistrikan dan teknologi elektronik.",image:"/images/teknik-elektro.jpg"}]}}var u;class C{constructor({view:e}){m(this,u);g(this,u,e)}async init(){await this.loadCareer()}async loadCareer(){try{d(this,u).showLoading();const e=await N.getTrendingCareersByIndustry();d(this,u).populateCareerList(e)}catch(e){console.error("loadCareer error:",e),d(this,u).populateMajorListError("Gagal memuat daftar karier.")}finally{d(this,u).hideLoading()}}async loadMajor(){try{d(this,u).showLoading();const e=await H.getMajors();d(this,u).populateMajorList(e)}catch(e){console.error("loadMajor error:",e),d(this,u).populateMajorListError("Gagal memuat daftar jurusan.")}finally{d(this,u).hideLoading()}}}u=new WeakMap;var b;class D{constructor(){m(this,b,null)}async render(){return`
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
          <a href="#/prediksi-karier" class="neon-btn inline-block mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full transition">
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

      <a href="#/prediksi-jurusan"
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
  `}async afterRender(){try{this.showLoading(),g(this,b,new C({view:this})),await d(this,b).init(),this.setupNavListeners()}catch(e){console.error("afterRender: error saat inisialisasi:",e),this.showError("Gagal memuat data awal. Silakan coba lagi nanti.")}finally{this.hideLoading()}typeof I=="function"?I():console.warn("setupScrollAnimation() tidak ditemukan.")}setupNavListeners(){const e=document.getElementById("careerNav"),a=document.getElementById("majorNav");e&&e.addEventListener("click",()=>{this.setActiveTab("careerNav"),d(this,b).loadCareer()}),a&&a.addEventListener("click",()=>{this.setActiveTab("majorNav"),d(this,b).loadMajor()})}setActiveTab(e){document.querySelectorAll(".nav-btn").forEach(i=>{i.classList.remove("text-blue-600","border-blue-600"),i.classList.add("text-gray-700","dark:text-gray-300","border-transparent")});const n=document.getElementById(e);n&&(n.classList.add("text-blue-600","border-blue-600"),n.classList.remove("text-gray-700","dark:text-gray-300","border-transparent"))}showLoading(){const e=document.getElementById("content-loading-container");e&&(e.innerHTML=`
        <div class="flex justify-center items-center h-16">
          <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      `)}hideLoading(){const e=document.getElementById("content-loading-container");e&&(e.innerHTML="")}showError(e){const a=document.getElementById("content");a&&(a.innerHTML=`<p class="text-red-600 font-semibold">${e}</p>`)}populateCareerList(e){const a=document.getElementById("content");if(a){if(!Array.isArray(e)||e.length===0){a.innerHTML='<p class="text-gray-500 dark:text-gray-400 italic text-center mt-6">Belum ada data karier.</p>';return}a.innerHTML=e.map(({industry:n,careers:i})=>`
  <section class="mb-10 p-4 md:p-6 rounded-2xl bg-white dark:bg-gray-800 shadow transition-colors duration-300">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white inline-block border-b-4 border-blue-600 pb-1 mb-5">
      ${n}
    </h2>

    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      ${i.map(({name:r,description:l,image:o})=>`
        <li class="neon-box bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-4 shadow-sm transform transition duration-300 hover:shadow-lg hover:scale-105 cursor-pointer text-center flex flex-col items-center">
          <img src="${o}" alt="${r}" class="w-24 sm:w-28 md:w-32 aspect-square object-cover rounded-xl mb-4 shadow-sm transition-transform duration-300" />
          <h3 class="text-blue-700 dark:text-blue-400 font-semibold text-lg mb-1">${r}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">${l}</p>
        </li>
      `).join("")}
    </ul>
  </section>
`).join("")}}populateMajorList(e){const a=document.getElementById("content");if(a){if(!Array.isArray(e)||e.length===0){a.innerHTML='<p class="text-gray-500 dark:text-gray-400 italic text-center mt-6">Belum ada data jurusan.</p>';return}a.innerHTML=`
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center inline-block border-b-4 border-blue-600 pb-1 mb-6">
    Daftar Jurusan Populer
  </h2>

  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
    ${e.map(({name:n,description:i,image:r})=>`
      <li class="neon-box group bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-4 shadow-sm hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600 transition duration-300 cursor-pointer flex flex-col items-center text-center">
        <img src="${r}" alt="${n}" class="w-24 sm:w-28 md:w-32 aspect-square object-cover rounded-xl mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300" />
        <h3 class="text-gray-900 dark:text-white font-semibold text-lg mb-1">${n}</h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">${i}</p>
      </li>
    `).join("")}
  </ul>
`}}populateMajorListError(e){const a=document.getElementById("content");a&&(a.innerHTML=`
        <p class="text-red-600 font-semibold">Gagal memuat jurusan: ${e}</p>
      `)}}b=new WeakMap;const R=[{image:"/images/htl.png",name:"HTML5",description:"Bahasa markup standar untuk membuat struktur halaman web secara semantik dan responsif."},{image:"/images/css.png",name:"CSS3",description:"Bahasa untuk mendesain dan mengatur tampilan halaman web dengan berbagai efek dan layout modern."},{image:"/images/js.png",name:"JavaScript",description:"Bahasa pemrograman yang membuat halaman web interaktif dan dinamis di sisi klien."},{image:"/images/tailwind.png",name:"Tailwind CSS",description:"Framework CSS utility-first yang cepat dan mudah untuk membangun UI yang responsif dan modern."},{image:"/images/node.png",name:"Node.js",description:"Runtime JavaScript yang berjalan di server untuk membangun backend dan API yang scalable."},{image:"/images/vite.png",name:"Vite",description:"Build tool modern yang cepat untuk pengembangan front-end berbasis modul ES."},{image:"/images/tsjs.png",name:"TensorFlow.js",description:"Library machine learning yang memungkinkan model ML dijalankan langsung di browser menggunakan JavaScript."},{image:"/images/machinelearning.png",name:"Machine Learning",description:"Teknologi yang memungkinkan komputer belajar dari data untuk membuat prediksi dan keputusan otomatis."},{image:"/images/python.png",name:"Python",description:"Bahasa pemrograman serbaguna yang populer dalam data science, backend development, dan machine learning."}];class J{async render(){return`
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
          ${R.map(({image:e,name:a,description:n})=>{const i=`desc-${a.replace(/\s+/g,"-").toLowerCase()}`;return`
              <div class="relative group flex flex-col items-center space-y-1 cursor-pointer text-center w-24"
                   tabindex="0" aria-describedby="${i}">
                <img src="${e}" alt="${a} logo" class="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
                <span class="font-medium text-xs">${a}</span>
                <div id="${i}" role="tooltip" aria-hidden="true"
                     class="absolute bottom-full mb-3 w-52 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-xs p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-50">
                  ${n}
                </div>
              </div>`}).join("")}
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
  `}async afterRender(){I()}}class A{async render(){return`
      <div class="container my-5 text-center">
        <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 60vh;">
          <h1 class="display-1 fw-bold text-danger animate__animated animate__bounce">
            404
          </h1>
          <h2 class="mb-3">Halaman Tidak Ditemukan</h2>
          <p class="lead mb-4">Maaf, alamat yang Anda tuju tidak tersedia.</p>
          <a href="#/" class="btn btn-primary btn-lg shadow animate__animated animate__fadeInUp">
            <i class="fas fa-home me-2"></i> Kembali ke Beranda
          </a>
        </div>
      </div>
    `}async afterRender(){}}async function q(t){try{const e=await fetch("https://hapi-backend.vercel.app/api/prediksi",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});if(!e.ok){const a=await e.json();throw new Error(a.error||`HTTP error! status: ${e.status}`)}return console.log(t),await e.json()}catch(e){throw console.error("API Error!",e),e}}async function U(t){const e=await fetch("https://hapi-backend.vercel.app/api/prediksi-jurusan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){const n=await e.text();throw new Error(`HTTP error ${e.status}: ${n}`)}const a=await e.json();if(console.log("Response API predictMajor:",a),!a||typeof a!="object"||!a.recommendations)throw new Error("Invalid response format from API");if(!Array.isArray(a.recommendations))throw new Error("Recommendations should be an array");if(a.recommendations.length===0)throw new Error("No recommendations found");return a}class O{async render(){return`
      <div class="max-w-4xl mx-auto px-4 py-12">
        <div class="neon-box rounded-xl p-8">
          <h2 class="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-4 text-center">Rekomendasi Karier & Jurusan</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-8 text-center">
            Jawab pertanyaan berikut untuk mendapatkan rekomendasi karier berdasarkan minat dan nilai akademikmu.
          </p>

          <form id="recommendationForm" class="space-y-6">
            <div>
              <label for="usia" class="block font-medium mb-1">Usia:</label>
              <input type="number" id="usia" name="usia" required class="neon-input w-full p-2 rounded">
            </div>

            <div>
              <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Kecerdasan Majemuk (0 - 20)</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${this.renderMultipleIntelligences()}
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Nilai Akademik (0 - 100)</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${this.renderAcademicScores()}
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="weekly_self_study_hours" class="block mb-1">Jam Belajar Mandiri per Minggu:</label>
                <input type="number" id="weekly_self_study_hours" name="weekly_self_study_hours" required class="neon-input w-full p-2 rounded">
              </div>
              <div>
                <label for="absence_days" class="block mb-1">Jumlah Hari Tidak Hadir:</label>
                <input type="number" id="absence_days" name="absence_days" required class="neon-input w-full p-2 rounded">
              </div>
            </div>

            <div class="text-center mt-6">
              <button type="submit" class="neon-btn px-6 py-2 rounded font-semibold">Dapatkan Rekomendasi</button>
            </div>
          </form>

          <div id="resultPage" class="hidden mt-10 text-center">
            <h3 class="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Hasil Rekomendasi</h3>
            <div id="recommendationResult" class="text-lg mb-4"></div>
            <button id="resetFormButton" class="neon-btn px-6 py-2 rounded font-semibold">Isi Form Lagi</button>
          </div>
        </div>
      </div>
    `}renderMultipleIntelligences(){return[{name:"Linguistic",label:"Linguistik"},{name:"Musical",label:"Musikal"},{name:"Bodily",label:"Kinestetik"},{name:"LogicalMathematical",label:"Logis-Matematis"},{name:"SpatialVisualization",label:"Spasial-Visual"},{name:"Interpersonal",label:"Interpersonal"},{name:"Intrapersonal",label:"Intrapersonal"},{name:"Naturalist",label:"Naturalis"}].map(a=>`
        <div>
          <label for="${a.name}" class="block mb-1">${a.label}</label>
          <input type="number" id="${a.name}" name="${a.name}" min="0" max="20" required class="neon-input w-full p-2 rounded">
        </div>
      `).join("")}renderAcademicScores(){return["math_score","physics_score","biology_score","english_score","history_score","chemistry_score","geography_score"].map(a=>`
        <div>
          <label for="${a}" class="block mb-1">${a.replace("_"," ").toUpperCase()}</label>
          <input type="number" id="${a}" name="${a}" min="0" max="100" required class="neon-input w-full p-2 rounded">
        </div>
      `).join("")}async afterRender(){const e=document.getElementById("recommendationForm"),a=document.getElementById("resultPage"),n=document.getElementById("recommendationResult"),i=document.getElementById("resetFormButton");e.addEventListener("submit",async r=>{r.preventDefault();const l={Linguistic:parseFloat(e.Linguistic.value),Musical:parseFloat(e.Musical.value),Bodily:parseFloat(e.Bodily.value),"Logical - Mathematical":parseFloat(e.LogicalMathematical.value),"Spatial-Visualization":parseFloat(e.SpatialVisualization.value),Interpersonal:parseFloat(e.Interpersonal.value),Intrapersonal:parseFloat(e.Intrapersonal.value),Naturalist:parseFloat(e.Naturalist.value),math_score:parseFloat(e.math_score.value),physics_score:parseFloat(e.physics_score.value),biology_score:parseFloat(e.biology_score.value),english_score:parseFloat(e.english_score.value),history_score:parseFloat(e.history_score.value),chemistry_score:parseFloat(e.chemistry_score.value),geography_score:parseFloat(e.geography_score.value),weekly_self_study_hours:parseFloat(e.weekly_self_study_hours.value),absence_days:parseFloat(e.absence_days.value)};try{const o=await q(l),s=o.predicted_job||"Tidak diketahui",h=(o.confidence*100).toFixed(1);n.innerHTML=`
          <p class="mb-2">Karier yang direkomendasikan: <strong>${s}</strong></p>
          <p>Persentase kecocokan: <strong>${h}%</strong></p>
        `,e.classList.add("hidden"),a.classList.remove("hidden")}catch(o){console.error(o),alert("Gagal memproses prediksi. Coba lagi.")}}),i.addEventListener("click",()=>{e.reset(),e.classList.remove("hidden"),a.classList.add("hidden"),n.innerHTML=""})}}class V{async render(){return`
    <div id="jurusan-section" class="w-full flex justify-center px-4 md:px-8 lg:px-12 py-16 bg-white dark:bg-gray-900">
      <div class="w-full max-w-screen-xl">
        <section class="neon-box bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 lg:p-12 shadow">
          <header class="mb-10 text-center">
            <h2 class="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">Prediksi Jurusan Kuliah</h2>
            <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Isi data berikut untuk mendapatkan rekomendasi jurusan yang sesuai dengan minat dan kemampuan Anda.
            </p>
          </header>

          <form id="predictionForm" class="max-w-4xl mx-auto space-y-6">
            <!-- Nama -->
            <div>
              <label for="nama" class="block text-gray-800 dark:text-gray-100 font-medium">Nama Lengkap</label>
              <input type="text" id="nama" name="nama" placeholder="Contoh: Risna Dwi" required
                class="neon-input w-full rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            </div>

            <!-- Kelompok Ujian -->
            <div>
              <label for="kelompok_ujian" class="block text-gray-800 dark:text-gray-100 font-medium">Kelompok Ujian</label>
              <select id="kelompok_ujian" name="kelompok_ujian" required
                class="neon-select w-full rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                <option value="">Pilih Kelompok</option>
                <option value="saintek">Saintek</option>
                <option value="soshum">Soshum</option>
              </select>
            </div>

            <!-- TPS -->
            <div>
              <h4 class="font-semibold text-blue-700 dark:text-blue-300">Nilai TPS (Tes Potensi Skolastik)</h4>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Wajib diisi oleh semua peserta.</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                  <label class="block text-sm text-gray-800 dark:text-gray-100 mb-1">Penalaran Umum (KPU)</label>
                  <input type="number" name="kpu" placeholder="Contoh: 85" required class="neon-input p-2 rounded w-full">
                </div>
                <div>
                  <label class="block text-sm text-gray-800 dark:text-gray-100 mb-1">Kemampuan Kuantitatif (KUA)</label>
                  <input type="number" name="kua" placeholder="Contoh: 80" required class="neon-input p-2 rounded w-full">
                </div>
                <div>
                  <label class="block text-sm text-gray-800 dark:text-gray-100 mb-1">Pemahaman Umum (PPU)</label>
                  <input type="number" name="ppu" placeholder="Contoh: 78" required class="neon-input p-2 rounded w-full">
                </div>
                <div>
                  <label class="block text-sm text-gray-800 dark:text-gray-100 mb-1">Membaca & Menulis (KMB)</label>
                  <input type="number" name="kmb" placeholder="Contoh: 82" required class="neon-input p-2 rounded w-full">
                </div>
              </div>
            </div>

            <!-- TKA -->
            <div>
              <h4 class="font-semibold text-blue-700 dark:text-blue-300">Nilai TKA (Tes Kemampuan Akademik)</h4>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Muncul sesuai kelompok ujian.</p>
              <div id="tkaSection" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <!-- Dinamis berdasarkan kelompok -->
              </div>
            </div>

            <!-- Submit -->
            <div class="text-center pt-4">
              <button type="submit" class="neon-btn rounded px-6 py-2">Dapatkan Prediksi</button>
            </div>
          </form>

          <!-- Hasil -->
          <div id="resultPage" class="hidden max-w-4xl mx-auto mt-10 p-6 neon-box rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <h3 class="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Hasil Prediksi Jurusan</h3>
            <div id="predictionResult"></div>
            <button type="button" id="resetFormButton" class="neon-btn mt-4 rounded px-4 py-2">Isi Form Lagi</button>
          </div>
        </section>
      </div>
    </div>
  `}async afterRender(){G(),W()}}function G(){const t=document.getElementById("kelompok_ujian"),e=document.getElementById("tkaSection"),a=[{name:"mat",placeholder:"Matematika"},{name:"fis",placeholder:"Fisika"},{name:"kim",placeholder:"Kimia"},{name:"bio",placeholder:"Biologi"}],n=[{name:"mat",placeholder:"Matematika"},{name:"geo",placeholder:"Geografi"},{name:"sej",placeholder:"Sejarah"},{name:"sos",placeholder:"Sosiologi"},{name:"eko",placeholder:"Ekonomi"}];t.addEventListener("change",()=>{const i=t.value;let r=[];i==="saintek"?r=a:i==="soshum"&&(r=n),e.innerHTML=r.map(l=>`
          <div>
            <label class="block text-sm text-gray-800 dark:text-gray-100 mb-1">${l.placeholder}</label>
            <input type="number" name="${l.name}" placeholder="${l.placeholder}" required
              class="neon-input p-2 rounded w-full">
          </div>
        `).join("")})}async function W(){const t=document.getElementById("predictionForm"),e=document.getElementById("resultPage"),a=document.getElementById("predictionResult"),n=document.getElementById("resetFormButton");t.addEventListener("submit",async i=>{i.preventDefault();const r=new FormData(t),l=r.get("nama"),o=r.get("kelompok_ujian");if(!["saintek","soshum"].includes(o)){alert("Pilih kelompok ujian yang valid.");return}const s={score_kpu:parseFloat(r.get("kpu")),score_kua:parseFloat(r.get("kua")),score_ppu:parseFloat(r.get("ppu")),score_kmb:parseFloat(r.get("kmb"))};if(o==="saintek"?(s.score_mat_tka=parseFloat(r.get("mat")),s.score_fis=parseFloat(r.get("fis")),s.score_kim=parseFloat(r.get("kim")),s.score_bio=parseFloat(r.get("bio"))):(s.score_mat_tka=parseFloat(r.get("mat")),s.score_geo=parseFloat(r.get("geo")),s.score_sej=parseFloat(r.get("sej")),s.score_sos=parseFloat(r.get("sos")),s.score_eko=parseFloat(r.get("eko"))),!Object.values(s).every(c=>typeof c=="number"&&!isNaN(c))){alert("Pastikan semua nilai telah diisi dan berupa angka.");return}const w=o==="saintek"?"science":"humanities";try{const c=await U({scores:s,test_type:w});if(console.log("Result dari API:",c),!c||!Array.isArray(c.recommendations)){alert("Data rekomendasi jurusan tidak tersedia atau formatnya salah.");return}const j=c.recommendations.map((p,E)=>`
  <li class="mb-4 p-3 border rounded shadow-sm">
    <strong>${E+1}. ${p.major_name}</strong> di <em>${p.university_name}</em><br>
    <div class="w-full bg-gray-200 rounded-full h-4 mt-1 mb-2">
      <div 
        class="bg-blue-600 h-4 rounded-full transition-all duration-500" 
        style="width: ${(p.prob_pass*100).toFixed(2)}%"
        aria-valuenow="${(p.prob_pass*100).toFixed(2)}" 
        aria-valuemin="0" aria-valuemax="100"
      ></div>
    </div>
    <small>Peluang Lolos: <strong>${(p.prob_pass*100).toFixed(2)}%</strong> | Kapasitas: <strong>${p.utbk_capacity}</strong></small>
  </li>
`).join("");a.innerHTML=`
  <p>Nama: <strong>${l}</strong></p>
  <p>Kelompok Ujian: <strong>${o}</strong></p>
  <h4 class="mt-4 font-semibold text-blue-700 dark:text-blue-300">Rekomendasi Jurusan:</h4>
  <ul class="list-none ml-0 mt-2 p-0">${j}</ul>
`,t.classList.add("hidden"),e.classList.remove("hidden")}catch(c){console.error(c),alert("Terjadi kesalahan saat memproses prediksi: "+c.message)}}),n.addEventListener("click",()=>{t.reset(),document.getElementById("tkaSection").innerHTML="",t.classList.remove("hidden"),e.classList.add("hidden")})}const z={"/":()=>new D,"/about":()=>new J,"/karier":()=>new O,"/jurusan":()=>new V,"*":()=>new A};function X(t){const e=t.split("/");return{resource:e[1]||null,id:e[2]||null}}function Y(t){let e="";return t.resource&&(e=e.concat(`/${t.resource}`)),t.id&&(e=e.concat("/:id")),e||"/"}function Q(){return location.hash.replace("#","")||"/"}function Z(){const t=Q(),e=X(t);return Y(e)}function ee(t,e){t.addEventListener("click",a=>{a.preventDefault(),e.hasAttribute("tabindex")||e.setAttribute("tabindex","-1"),e.focus(),e.scrollIntoView({behavior:"smooth"})})}function ae({skipTransition:t=!1,updateDOM:e}){if(t||!document.startViewTransition||document.visibilityState!=="visible"){const n=Promise.resolve().then(()=>{e()});return{ready:Promise.resolve().catch(()=>{}),updateCallbackDone:n,finished:n.catch(()=>{})}}const a=document.startViewTransition(()=>{e()});return a.ready.catch(n=>{n.name!=="AbortError"&&console.error("Error in transition.ready:",n)}),a.ready.then(()=>{const n=document.querySelector(".active");n&&n.classList.add("fade-out")}),a.finished.then(()=>{const n=document.querySelector(".active");n&&n.classList.add("fade-in")}).catch(n=>{n.name!=="AbortError"&&console.error("Error during transition.finished:",n)}),a}function K(){return"serviceWorker"in navigator}async function te(){if(!K()){console.warn("Service Worker API tidak didukung oleh browser.");return}}var k,L,x,y,f,v,_;class ne{constructor({content:e,skipLinkButton:a}){m(this,v);m(this,k);m(this,L);m(this,x,null);m(this,y,!1);m(this,f,null);g(this,k,e),g(this,L,a),ee(d(this,L),d(this,k))}async renderPage(){var e;if(!d(this,y)){g(this,y,!0);try{const a=Z(),n=z[a];let i;if(!n||typeof n!="function"?i=new A:i=n(),(e=d(this,x))!=null&&e.destroy&&d(this,x).destroy(),g(this,x,i),i===null)return;if(typeof i.render!="function"){d(this,k).innerHTML='<p class="text-danger">Halaman tidak valid.</p>';return}const r=await i.render(),l=document.querySelector(".active");l&&(l.classList.add("inactive"),l.classList.remove("active"));const o=ae({updateDOM:()=>{d(this,k).innerHTML=r,d(this,f)&&d(this,f).disconnect(),g(this,f,I());const s=document.querySelector(".page");s&&(s.classList.add("active"),s.classList.remove("inactive"))}});o.ready.catch(s=>{s.name!=="AbortError"&&console.error("Transition Ready Error:",s)});try{await o.updateCallbackDone,scrollTo({top:0,behavior:"instant"}),i.afterRender(),K()&&await M(this,v,_).call(this)}catch(s){s.name!=="AbortError"&&console.error("Transition Done Error:",s)}}catch(a){console.error("Render Page Error:",a)}finally{g(this,y,!1)}}}}k=new WeakMap,L=new WeakMap,x=new WeakMap,y=new WeakMap,f=new WeakMap,v=new WeakSet,_=async function(){let e=document.getElementById("subscribe-button");if(!e||!e.parentNode)return;const a=await isCurrentPushSubscriptionAvailable(),n=e.cloneNode(!0);e.parentNode.replaceChild(n,e),e=n,a?(e.classList.remove("btn-warning","text-dark"),e.classList.add("btn-secondary","text-white"),e.innerHTML='<i class="fas fa-bell-slash"></i> Subscribed',e.addEventListener("click",async()=>{await unsubscribe(),await M(this,v,_).call(this)})):(e.classList.remove("btn-secondary","text-white"),e.classList.add("btn-warning","text-white"),e.innerHTML='<i class="fas fa-bell"></i> Subscribe',e.addEventListener("click",async()=>{await subscribe(),await M(this,v,_).call(this)}))};function $(t=!1){const e=t?"block py-2 px-4 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300":"py-2 px-4 rounded hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300";return`
    <div class="w-full ${t?"":"max-w-screen-xl mx-auto px-4"}">
      <ul class="${t?"flex flex-col gap-2 mt-4":"hidden lg:flex lg:flex-row gap-6 mt-0"}">
        <li><a href="#/" class="${e}">Beranda</a></li>
        <li><a href="#/karier" class="${e}">Prediksi Karier</a></li>
        <li><a href="#/jurusan" class="${e}">Prediksi Jurusan</a></li>
        <li><a href="#/about" class="${e}">Tentang</a></li>
      </ul>
    </div>
  `}document.addEventListener("DOMContentLoaded",async()=>{const t=document.getElementById("main-navbar"),e=document.getElementById("mobile-links");e&&(e.innerHTML=$(!0)),t&&(t.innerHTML=$(!1));const a=document.querySelector("#main-content"),n=document.getElementById("skip-link");if(!a||!n){a||console.error("Elemen 'main-content' tidak ditemukan di DOM."),n||console.error("Elemen 'skip-link' tidak ditemukan di DOM.");return}const i=document.getElementById("drawer-button"),r=document.getElementById("mobile-drawer"),l=document.getElementById("drawer-close"),o=document.getElementById("drawer-overlay");function s(){r&&r.classList.add("-translate-x-full"),o&&o.classList.add("hidden")}i==null||i.addEventListener("click",()=>{r&&r.classList.remove("-translate-x-full"),o&&o.classList.remove("hidden")}),l==null||l.addEventListener("click",s),o==null||o.addEventListener("click",s);const h=document.getElementById("theme-toggle"),w=document.getElementById("icon-sun"),c=document.getElementById("icon-moon");function j(S){!w||!c||(S?(w.classList.remove("hidden"),c.classList.add("hidden")):(w.classList.add("hidden"),c.classList.remove("hidden")))}localStorage.getItem("theme")==="dark"?(document.documentElement.classList.add("dark"),j(!0)):(document.documentElement.classList.remove("dark"),j(!1)),h==null||h.addEventListener("click",()=>{const B=document.documentElement.classList.toggle("dark");localStorage.setItem("theme",B?"dark":"light"),j(B)});const E=new ne({content:a,skipLinkButton:n});await te(),await E.renderPage(),window.addEventListener("hashchange",async()=>{await E.renderPage()});const T=document.querySelector("header");T&&window.addEventListener("scroll",()=>{T.classList.toggle("scrolled",window.scrollY>10)})});function I(){const t=new IntersectionObserver((e,a)=>{e.forEach(n=>{n.isIntersecting&&(n.target.classList.add("animate-slide-up"),n.target.classList.remove("opacity-0"),a.unobserve(n.target))})},{threshold:.15});return document.querySelectorAll('[data-animate="slide-up"]:not(.animate-slide-up)').forEach(e=>{t.observe(e)}),t}
//# sourceMappingURL=index-DBat_ccW.js.map
