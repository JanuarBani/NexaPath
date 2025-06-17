import KarirPresenter from './karir-presenter.js';

export default class KarirPage {
  #presenter = null;

  async render() {
    return `
    <div class="w-full min-h-screen px-2 md:px-3 lg:px-4 py-4 bg-white dark:bg-gray-900">
      <section class="neon-box w-full rounded-xl px-3 md:px-4 py-5 transition-colors duration-300">
        <header class="text-center mb-6">
          <h2 class="text-xl md:text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">
            Rekomendasi Karier & Jurusan
          </h2>
          <p class="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-snug max-w-xl mx-auto">
            Jawab pertanyaan berikut untuk mendapatkan rekomendasi karier berdasarkan minat dan nilai akademikmu.
            Pastikan mengisi data dengan benar agar hasil rekomendasi lebih akurat.
          </p>
        </header>

        <form id="recommendationForm" class="space-y-6 w-full max-w-3xl mx-auto">
          <!-- Usia -->
          <div>
            <label for="usia" class="block text-sm font-medium mb-1">Usia:</label>
            <input type="number" id="usia" name="usia" min="10" max="100" required
                   class="neon-input w-full p-2 rounded text-sm"
                   aria-describedby="usiaDesc" />
            <small id="usiaDesc" class="text-gray-500 dark:text-gray-400 text-xs">
              Masukkan usia kamu dalam tahun (misal: 17).
            </small>
          </div>

          <!-- Kecerdasan Majemuk -->
          <div>
            <h3 class="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Kecerdasan Majemuk (Skala 0 - 20)
            </h3>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-3 max-w-xl">
              Beri nilai pada setiap jenis kecerdasan sesuai kemampuan dan minatmu.
              Contoh: 0 (rendah) sampai 20 (tinggi).
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${this.renderMultipleIntelligences()}
            </div>
          </div>

          <!-- Nilai Akademik -->
          <div>
            <h3 class="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Nilai Akademik (Skala 0 - 100)
            </h3>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-3 max-w-xl">
              Masukkan nilai akademik kamu pada mata pelajaran terkait.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${this.renderAcademicScores()}
            </div>
          </div>

          <!-- Jam Belajar & Absensi -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label for="weekly_self_study_hours" class="block text-sm font-medium mb-1">
                Jam Belajar Mandiri per Minggu:
              </label>
              <input type="number" id="weekly_self_study_hours" name="weekly_self_study_hours" min="0" max="168" required
                     class="neon-input w-full p-2 rounded text-sm"
                     aria-describedby="studyHoursDesc" />
              <small id="studyHoursDesc" class="text-gray-500 dark:text-gray-400 text-xs">
                Masukkan total jam belajar mandiri per minggu (0-168 jam).
              </small>
            </div>
            <div>
              <label for="absence_days" class="block text-sm font-medium mb-1">
                Jumlah Hari Tidak Hadir:
              </label>
              <input type="number" id="absence_days" name="absence_days" min="0" max="365" required
                     class="neon-input w-full p-2 rounded text-sm"
                     aria-describedby="absenceDaysDesc" />
              <small id="absenceDaysDesc" class="text-gray-500 dark:text-gray-400 text-xs">
                Masukkan jumlah hari kamu tidak hadir dalam setahun.
              </small>
            </div>
          </div>

          <!-- Tombol Submit -->
          <div class="text-center mt-3">
            <button type="submit"
                    id="submitButton"
                    class="neon-btn px-4 py-2 text-sm font-semibold rounded-full">
              Dapatkan Rekomendasi
            </button>
          </div>
        </form>

        <!-- Hasil -->
        <div id="resultPage" class="hidden mt-8 text-center max-w-xl mx-auto">
          <h3 class="text-lg md:text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">
            Hasil Rekomendasi
          </h3>
          <div id="recommendationResult" class="text-sm md:text-base mb-5"></div>
          <div class="flex justify-center gap-4">
            <button id="editFormButton"
                    class="neon-btn px-4 py-2 text-sm font-semibold rounded-full bg-yellow-500 hover:bg-yellow-600">
              Edit Form
            </button>
            <button id="resetFormButton"
                    class="neon-btn px-4 py-2 text-sm font-semibold rounded-full bg-red-500 hover:bg-red-600">
              Isi Form Lagi
            </button>
          </div>
        </div>
      </section>
    </div>
  `;
  }

  async afterRender() {
    this.#presenter = new KarirPresenter({
      view: this,
    });
    this.#presenter.init();

    // Bind tombol Edit Form supaya bisa kembali ke form tanpa reset data
    const editFormButton = document.getElementById('editFormButton');
    const form = document.getElementById('recommendationForm');
    const resultPage = document.getElementById('resultPage');

    editFormButton.addEventListener('click', () => {
      resultPage.classList.add('hidden');
      form.classList.remove('hidden');
      // Tidak reset, data form tetap ada
    });

    // Bind tombol Reset Form (isi ulang dari awal)
    const resetFormButton = document.getElementById('resetFormButton');
    resetFormButton.addEventListener('click', () => {
      this.resetForm();
    });
  }

  renderMultipleIntelligences() {
    const types = [
      { name: 'Linguistic', label: 'Linguistik' },
      { name: 'Musical', label: 'Musikal' },
      { name: 'Bodily', label: 'Kinestetik' },
      { name: 'LogicalMathematical', label: 'Logis-Matematis' },
      { name: 'SpatialVisualization', label: 'Spasial-Visual' },
      { name: 'Interpersonal', label: 'Interpersonal' },
      { name: 'Intrapersonal', label: 'Intrapersonal' },
      { name: 'Naturalist', label: 'Naturalis' },
    ];
    return types
      .map(
        (t) => `
      <div>
        <label for="${t.name}" class="block mb-1">${t.label}</label>
        <input type="number" id="${t.name}" name="${t.name}" min="0" max="20" required class="neon-input w-full p-2 rounded" aria-describedby="${t.name}Desc">
        <small id="${t.name}Desc" class="text-gray-500 dark:text-gray-400 text-xs">
          Nilai kecerdasan ${t.label} dari 0 (rendah) sampai 20 (tinggi).
        </small>
      </div>
    `,
      )
      .join('');
  }

  renderAcademicScores() {
    const subjects = [
      { id: 'math_score', label: 'Matematika' },
      { id: 'physics_score', label: 'Fisika' },
      { id: 'biology_score', label: 'Biologi' },
      { id: 'english_score', label: 'Bahasa Inggris' },
      { id: 'history_score', label: 'Sejarah' },
      { id: 'chemistry_score', label: 'Kimia' },
      { id: 'geography_score', label: 'Geografi' },
    ];
    return subjects
      .map(
        (s) => `
      <div>
        <label for="${s.id}" class="block mb-1">${s.label}</label>
        <input type="number" id="${s.id}" name="${s.id}" min="0" max="100" required class="neon-input w-full p-2 rounded" aria-describedby="${s.id}Desc">
        <small id="${s.id}Desc" class="text-gray-500 dark:text-gray-400 text-xs">
          Masukkan nilai ${s.label} (0 sampai 100).
        </small>
      </div>
    `,
      )
      .join('');
  }

  showResult({ career, confidence }) {
    const form = document.getElementById('recommendationForm');
    const resultPage = document.getElementById('resultPage');
    const resultDiv = document.getElementById('recommendationResult');

    resultDiv.innerHTML = `
      <p class="mb-2">Karier yang direkomendasikan: <strong>${career}</strong></p>
      <p>Persentase kecocokan: <strong>${confidence}%</strong></p>
    `;

    form.classList.add('hidden');
    resultPage.classList.remove('hidden');
  }

  resetForm() {
    const form = document.getElementById('recommendationForm');
    const resultPage = document.getElementById('resultPage');
    const resultDiv = document.getElementById('recommendationResult');

    form.reset();
    form.classList.remove('hidden');
    resultPage.classList.add('hidden');
    resultDiv.innerHTML = '';
  }

  showError(message) {
    alert(message || 'Terjadi kesalahan.');
  }
}
