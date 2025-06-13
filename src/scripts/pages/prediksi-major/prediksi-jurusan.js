import { predictMajor } from '../../data/api.js';


export default class JurusanPage {
  async render() {
    return `
    <div id="jurusan-section" class="w-full flex flex-col space-y-10 px-6 md:px-12 lg:px-20 py-16">
      <section class="neon-box bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12">
        <header class="mb-10 text-center">
          <h2 class=" text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">Prediksi Jurusan Kuliah</h2>
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
            <h4 class=" font-semibold text-blue-700 dark:text-blue-300">Nilai TPS (Tes Potensi Skolastik)</h4>
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
            <h4 class=" font-semibold text-blue-700 dark:text-blue-300">Nilai TKA (Tes Kemampuan Akademik)</h4>
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
          <h3 class=" text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Hasil Prediksi Jurusan</h3>
          <div id="predictionResult"></div>
          <button type="button" id="resetFormButton" class="neon-btn mt-4 rounded px-4 py-2">Isi Form Lagi</button>
        </div>
      </section>
    </div>
  `;
  }

  async afterRender() {
    setupTKAInputHandler();
    setupFormSubmission();
  }
}

function setupTKAInputHandler() {
  const kelompokSelect = document.getElementById('kelompok_ujian');
  const tkaSection = document.getElementById('tkaSection');

  const saintekFields = [
    { name: 'mat', placeholder: 'Matematika' },
    { name: 'fis', placeholder: 'Fisika' },
    { name: 'kim', placeholder: 'Kimia' },
    { name: 'bio', placeholder: 'Biologi' },
  ];

  const soshumFields = [
    { name: 'mat', placeholder: 'Matematika' },
    { name: 'geo', placeholder: 'Geografi' },
    { name: 'sej', placeholder: 'Sejarah' },
    { name: 'sos', placeholder: 'Sosiologi' },
    { name: 'eko', placeholder: 'Ekonomi' },
  ];

  kelompokSelect.addEventListener('change', () => {
    const selected = kelompokSelect.value;
    let fields = [];

    if (selected === 'saintek') fields = saintekFields;
    else if (selected === 'soshum') fields = soshumFields;

    tkaSection.innerHTML = fields
      .map(
        (f) => `
          <div>
            <label class="block text-sm text-gray-800 dark:text-gray-100 mb-1">${f.placeholder}</label>
            <input type="number" name="${f.name}" placeholder="${f.placeholder}" required
              class="neon-input p-2 rounded w-full">
          </div>
        `,
      )
      .join('');
  });
}

async function setupFormSubmission() {
  const form = document.getElementById('predictionForm');
  const resultPage = document.getElementById('resultPage');
  const resultContainer = document.getElementById('predictionResult');
  const resetButton = document.getElementById('resetFormButton');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const nama = formData.get('nama');
    const kelompok = formData.get('kelompok_ujian');

    if (!['saintek', 'soshum'].includes(kelompok)) {
      alert('Pilih kelompok ujian yang valid.');
      return;
    }

    // TPS (wajib)
    const scores = {
      score_kpu: parseFloat(formData.get('kpu')),
      score_kua: parseFloat(formData.get('kua')),
      score_ppu: parseFloat(formData.get('ppu')),
      score_kmb: parseFloat(formData.get('kmb')),
    };

    // TKA (sesuai kelompok)
    if (kelompok === 'saintek') {
      scores.score_mat_tka = parseFloat(formData.get('mat'));
      scores.score_fis = parseFloat(formData.get('fis'));
      scores.score_kim = parseFloat(formData.get('kim'));
      scores.score_bio = parseFloat(formData.get('bio'));
    } else {
      scores.score_mat_tka = parseFloat(formData.get('mat'));
      scores.score_geo = parseFloat(formData.get('geo'));
      scores.score_sej = parseFloat(formData.get('sej'));
      scores.score_sos = parseFloat(formData.get('sos'));
      scores.score_eko = parseFloat(formData.get('eko'));
    }

    // Validasi angka
    const allValid = Object.values(scores).every((v) => typeof v === 'number' && !isNaN(v));
    if (!allValid) {
      alert('Pastikan semua nilai telah diisi dan berupa angka.');
      return;
    }

    const testType = kelompok === 'saintek' ? 'science' : 'humanities';

    try {
      const result = await predictMajor({ scores, test_type: testType });

      resultContainer.innerHTML = `
        <p>Nama: <strong>${nama}</strong></p>
        <p>Kelompok Ujian: <strong>${kelompok}</strong></p>
        <p><strong>Rekomendasi Jurusan:</strong> ${result.recommendation}</p>
        <p><strong>Confidence:</strong> ${(result.confidence * 100).toFixed(2)}%</p>
      `;

      form.classList.add('hidden');
      resultPage.classList.remove('hidden');
    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan saat memproses prediksi: ' + err.message);
    }
  });

  resetButton.addEventListener('click', () => {
    form.reset();
    document.getElementById('tkaSection').innerHTML = '';
    form.classList.remove('hidden');
    resultPage.classList.add('hidden');
  });
}
