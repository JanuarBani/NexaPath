export default class JurusanPage {
  #presenter = null;

  async render() {
    return `
      <div id="jurusan-section" class="w-full flex justify-center px-4 md:px-8 lg:px-12 py-16 bg-white dark:bg-gray-900">
        <div class="w-full max-w-screen-xl">
          <section class="neon-box bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 lg:p-12 shadow">
            <header class="mb-10 text-center">
              <h2 class="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">Prediksi Jurusan Kuliah</h2>
              <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                Jawab pertanyaan berikut untuk mendapatkan prediksi jurusan berdasarkan nilai TPS & TKA-mu.
              </p>
              <ul class="list-disc list-inside mt-4 text-left max-w-md mx-auto text-gray-700 dark:text-gray-300 text-sm">
                <li>Isi nama lengkap</li>
                <li>Pilih kelompok ujian (Saintek atau Soshum)</li>
                <li>Masukkan nilai TPS (0–100)</li>
                <li>Masukkan nilai TKA sesuai kelompok ujian</li>
              </ul>
            </header>

            <form id="predictionForm" class="max-w-4xl mx-auto space-y-6">
              <!-- Nama -->
              <div>
                <label for="nama" class="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-100">Nama Lengkap</label>
                <input type="text" id="nama" name="nama" required
                  placeholder="Contoh: Rizky Ananda"
                  class="neon-input w-full p-2 rounded text-sm">
              </div>

              <!-- Kelompok Ujian -->
              <div>
                <label for="kelompok_ujian" class="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-100">Kelompok Ujian</label>
                <select id="kelompok_ujian" name="kelompok_ujian" required
                  class="neon-select w-full p-2 rounded text-sm">
                  <option value="">Pilih Kelompok</option>
                  <option value="saintek">Saintek</option>
                  <option value="soshum">Soshum</option>
                </select>
              </div>

              <!-- TPS -->
              <div>
                <h4 class="font-semibold text-blue-700 dark:text-blue-300">Nilai TPS (Tes Potensi Skolastik)</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Skala nilai 0 – 100. Wajib diisi semua peserta.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  ${this.renderTPSFields()}
                </div>
              </div>

              <!-- TKA -->
              <div>
                <h4 class="font-semibold text-blue-700 dark:text-blue-300">Nilai TKA (Tes Kemampuan Akademik)</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Muncul berdasarkan pilihan kelompok ujian.</p>
                <div id="tkaSection" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
              </div>

              <!-- Submit -->
              <div class="text-center pt-4">
                <button type="submit" id="submitButton" class="neon-btn rounded px-6 py-2">
                  Dapatkan Prediksi
                </button>
              </div>
            </form>

            <!-- Hasil -->
            <div id="resultPage" class="hidden max-w-4xl mx-auto mt-10 p-6 neon-box rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <h3 class="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Hasil Prediksi Jurusan</h3>
              <div id="predictionResult"></div>
              <div class="flex flex-wrap gap-3 mt-4">
                <button id="editFormButton" class="neon-btn px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded">Edit Form</button>
                <button id="resetFormButton" class="neon-btn px-4 py-2 bg-red-500 hover:bg-red-600 rounded">Isi Form Lagi</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }

  async afterRender() {
    this.#presenter = new (await import('./jurusan-presenter.js')).default({ view: this });
    this.#presenter.init();

    // Event: Edit hasil
    document.getElementById('editFormButton')?.addEventListener('click', () => {
      document.getElementById('resultPage').classList.add('hidden');
      document.getElementById('predictionForm').classList.remove('hidden');
    });
  }

  renderTPSFields() {
    const fields = [
      { name: 'kpu', label: 'Penalaran Umum (KPU)' },
      { name: 'kua', label: 'Kemampuan Kuantitatif (KUA)' },
      { name: 'ppu', label: 'Pemahaman Umum (PPU)' },
      { name: 'kmb', label: 'Membaca & Menulis (KMB)' },
    ];
    return fields
      .map(
        (f) => `
      <div>
        <label class="block mb-1">${f.label}</label>
        <input type="number" name="${f.name}" min="0" max="1000" required
          placeholder="Contoh: 750"
          class="neon-input w-full p-2 rounded text-sm">
        <small class="text-gray-500 dark:text-gray-400 text-xs">Nilai antara 0 – 1000</small>
      </div>
    `,
      )
      .join('');
  }

  renderTKAFields(fields) {
    const tkaSection = document.getElementById('tkaSection');
    tkaSection.innerHTML = fields
      .map(
        (f) => `
    <div>
      <label class="block mb-1">${f.placeholder}</label>
      <input type="number" name="${f.name}" min="0" max="1000" required
        placeholder="Contoh: 720"
        class="neon-input w-full p-2 rounded text-sm">
      <small class="text-gray-500 dark:text-gray-400 text-xs">Nilai antara 0 – 1000</small>
    </div>
  `,
      )
      .join('');
  }

  bindKelompokChange(handler) {
    document.getElementById('kelompok_ujian').addEventListener('change', (e) => {
      handler(e.target.value);
    });
  }

  bindFormSubmit(handler) {
    const form = document.getElementById('predictionForm');
    const submitButton = document.getElementById('submitButton');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Validasi angka 0–1000
      const valid = [...form.querySelectorAll('input[type="number"]')].every((input) => {
        const val = Number(input.value);
        return val >= 0 && val <= 1000;
      });

      if (!valid) {
        this.showError('Pastikan semua nilai berada di antara 0 hingga 1000.');
        return;
      }

      submitButton.disabled = true;
      submitButton.innerHTML = `<svg class="w-5 h-5 mr-2 animate-spin text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg> Processing…`;

      try {
        await handler();
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Dapatkan Prediksi';
      }
    });
  }

  bindReset(handler) {
    document.getElementById('resetFormButton').addEventListener('click', () => {
      handler();
    });
  }

  getFormData() {
    const form = document.getElementById('predictionForm');
    const formData = new FormData(form);

    return {
      nama: formData.get('nama'),
      kelompok: formData.get('kelompok_ujian'),
      tpsScores: {
        kpu: formData.get('kpu'),
        kua: formData.get('kua'),
        ppu: formData.get('ppu'),
        kmb: formData.get('kmb'),
      },
      tkaScores: [...document.querySelectorAll('#tkaSection input')].reduce((acc, input) => {
        acc[input.name] = input.value;
        return acc;
      }, {}),
    };
  }

  showResult(nama, kelompok, recommendations) {
    const form = document.getElementById('predictionForm');
    const resultPage = document.getElementById('resultPage');
    const resultContainer = document.getElementById('predictionResult');

    resultContainer.innerHTML = `
      <p>Nama: <strong>${nama}</strong></p>
      <p>Kelompok Ujian: <strong>${kelompok}</strong></p>
      <h4 class="mt-4 font-semibold text-blue-700 dark:text-blue-300">Rekomendasi Jurusan:</h4>
      <ul class="list-none mt-2 space-y-3">
        ${recommendations
          .slice(0, 5)
          .map(
            (r, i) => `
          <li class="p-3 border rounded shadow-sm">
            <strong>${i + 1}. ${r.major_name}</strong> di <em>${r.university_name}</em><br>
            <div class="w-full bg-gray-200 rounded-full h-4 mt-2 mb-1">
              <div class="bg-blue-600 h-4 rounded-full" style="width: ${(r.prob_pass * 100).toFixed(2)}%"></div>
            </div>
            <small>Peluang Lolos: <strong>${(r.prob_pass * 100).toFixed(2)}%</strong> | Kapasitas: <strong>${r.utbk_capacity}</strong></small>
          </li>
        `,
          )
          .join('')}
      </ul>
    `;

    form.classList.add('hidden');
    resultPage.classList.remove('hidden');
  }

  resetForm() {
    const form = document.getElementById('predictionForm');
    const resultPage = document.getElementById('resultPage');
    const tkaSection = document.getElementById('tkaSection');

    form.reset();
    tkaSection.innerHTML = '';
    form.classList.remove('hidden');
    resultPage.classList.add('hidden');
  }

  showError(message) {
    alert(message || 'Terjadi kesalahan.');
  }
}
