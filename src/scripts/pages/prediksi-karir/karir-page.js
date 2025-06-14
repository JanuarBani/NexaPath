import KarirPresenter from './karir-presenter';

export default class KarirPage {
  #presenter = null;

  async render() {
    return `
    <div class="w-full min-h-screen px-2 md:px-3 lg:px-4 py-4 bg-white dark:bg-gray-900">
      <section class="neon-box w-full rounded-xl px-3 md:px-4 py-5 transition-colors duration-300">
        <header class="text-center mb-4">
          <h2 class="text-xl md:text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">
            Rekomendasi Karier & Jurusan
          </h2>
          <p class="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-snug">
            Jawab pertanyaan berikut untuk mendapatkan rekomendasi karier berdasarkan minat dan nilai akademikmu.
          </p>
        </header>

        <form id="recommendationForm" class="space-y-4 w-full">
          <!-- Usia -->
          <div>
            <label for="usia" class="block text-sm font-medium mb-1">Usia:</label>
            <input type="number" id="usia" name="usia" required
                   class="neon-input w-full p-2 rounded text-sm" />
          </div>

          <!-- Kecerdasan Majemuk -->
          <div>
            <h3 class="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Kecerdasan Majemuk (0 - 20)
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${this.renderMultipleIntelligences()}
            </div>
          </div>

          <!-- Nilai Akademik -->
          <div>
            <h3 class="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Nilai Akademik (0 - 100)
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${this.renderAcademicScores()}
            </div>
          </div>

          <!-- Jam Belajar & Absensi -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label for="weekly_self_study_hours" class="block text-sm mb-1">
                Jam Belajar Mandiri per Minggu:
              </label>
              <input type="number" id="weekly_self_study_hours" name="weekly_self_study_hours" required
                     class="neon-input w-full p-2 rounded text-sm" />
            </div>
            <div>
              <label for="absence_days" class="block text-sm mb-1">
                Jumlah Hari Tidak Hadir:
              </label>
              <input type="number" id="absence_days" name="absence_days" required
                     class="neon-input w-full p-2 rounded text-sm" />
            </div>
          </div>

          <!-- Tombol Submit -->
          <div class="text-center mt-3">
            <button type="submit"
                    class="neon-btn px-4 py-2 text-sm font-semibold rounded-full">
              Dapatkan Rekomendasi
            </button>
          </div>
        </form>

        <!-- Hasil -->
        <div id="resultPage" class="hidden mt-8 text-center">
          <h3 class="text-lg md:text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">
            Hasil Rekomendasi
          </h3>
          <div id="recommendationResult" class="text-sm md:text-base mb-3"></div>
          <button id="resetFormButton"
                  class="neon-btn px-4 py-2 text-sm font-semibold rounded-full">
            Isi Form Lagi
          </button>
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
        <input type="number" id="${t.name}" name="${t.name}" min="0" max="20" required class="neon-input w-full p-2 rounded">
      </div>
    `,
      )
      .join('');
  }

  renderAcademicScores() {
    const subjects = [
      'math_score',
      'physics_score',
      'biology_score',
      'english_score',
      'history_score',
      'chemistry_score',
      'geography_score',
    ];
    return subjects
      .map(
        (s) => `
      <div>
        <label for="${s}" class="block mb-1">${s.replace('_', ' ').toUpperCase()}</label>
        <input type="number" id="${s}" name="${s}" min="0" max="100" required class="neon-input w-full p-2 rounded">
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
