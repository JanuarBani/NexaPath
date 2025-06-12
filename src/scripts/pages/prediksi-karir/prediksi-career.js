import { predictCareer } from '../../data/api.js';

export default class KarirPage {
  async render() {
    return `
    <div id="career-major-section" class="w-full flex flex-col space-y-10 px-6 md:px-12 lg:px-20 py-16">
      <section aria-labelledby="form-section-heading"
               class="neon-box bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-8 md:p-12 transition-colors duration-500">
        <header class="mb-10 text-center">
          <h2 id="form-section-heading" class="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
            Rekomendasi Karier & Jurusan
          </h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Jawab pertanyaan berikut untuk mendapatkan rekomendasi berdasarkan minat, bakat, dan preferensi kamu.
          </p>
        </header>

        <div id="formSection" class="w-full">
          <div id="formContainer" class="step-container max-w-4xl mx-auto">
            <form id="recommendationForm" autocomplete="off">
              <div id="step1" class="form-step active">
                <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Data Diri</h3>
                <div class="input-group mb-4">
                  <label for="usia" class="text-gray-800 dark:text-gray-100">Usia</label>
                  <input type="number" id="usia" name="usia" required
                         class="neon-input w-full border rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  <div class="error-message hidden text-red-500 text-sm" id="error-usia"></div>
                </div>
                <button type="button" class="next-step neon-btn bg-blue-600 text-white px-4 py-2 rounded float-right">
                  Lanjut
                </button>
              </div>

              <div id="step2" class="form-step hidden">
                <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Kecerdasan Majemuk</h3>
                ${[
                  { name: 'Linguistic', label: 'Linguistik' },
                  { name: 'Musical', label: 'Musikal' },
                  { name: 'Bodily', label: 'Kinestetik' },
                  { name: 'LogicalMathematical', label: 'Logis-Matematis' },
                  { name: 'SpatialVisualization', label: 'Spasial-Visual' },
                  { name: 'Interpersonal', label: 'Interpersonal' },
                  { name: 'Intrapersonal', label: 'Intrapersonal' },
                  { name: 'Naturalist', label: 'Naturalis' },
                ]
                  .map(
                    ({ name, label }) => `
                  <div class="input-group mb-4">
                    <label for="${name}" class="text-gray-800 dark:text-gray-100">${label}</label>
                    <input type="number" id="${name}" name="${name}" required
                           class="neon-input w-full border rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                    <div class="error-message hidden text-red-500 text-sm" id="error-${name}"></div>
                  </div>
                `,
                  )
                  .join('')}
                <div class="flex justify-between">
                  <button type="button" class="prev-step neon-btn bg-gray-400 text-white px-4 py-2 rounded">Kembali</button>
                  <button type="button" class="next-step neon-btn bg-blue-600 text-white px-4 py-2 rounded">Lanjut</button>
                </div>
              </div>

              <div id="step3" class="form-step hidden">
                <h3 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Nilai Akademik</h3>
                ${[
                  'math_score',
                  'physics_score',
                  'biology_score',
                  'english_score',
                  'history_score',
                  'chemistry_score',
                  'geography_score',
                ]
                  .map(
                    (name) => `
                  <div class="input-group mb-4">
                    <label for="${name}" class="text-gray-800 dark:text-gray-100">${name.replace('_', ' ').toUpperCase()}</label>
                    <input type="number" id="${name}" name="${name}" required
                           class="neon-input w-full border rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                    <div class="error-message hidden text-red-500 text-sm" id="error-${name}"></div>
                  </div>
                `,
                  )
                  .join('')}
                <div class="input-group mb-4">
                  <label for="weekly_self_study_hours" class="text-gray-800 dark:text-gray-100">Jam Belajar Mandiri</label>
                  <input type="number" id="weekly_self_study_hours" name="weekly_self_study_hours" required
                         class="neon-input w-full border rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  <div class="error-message hidden text-red-500 text-sm" id="error-weekly_self_study_hours"></div>
                </div>
                <div class="input-group mb-4">
                  <label for="absence_days" class="text-gray-800 dark:text-gray-100">Jumlah Hari Tidak Hadir</label>
                  <input type="number" id="absence_days" name="absence_days" required
                         class="neon-input w-full border rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  <div class="error-message hidden text-red-500 text-sm" id="error-absence_days"></div>
                </div>
                <div class="flex justify-between">
                  <button type="button" class="prev-step neon-btn bg-gray-400 text-white px-4 py-2 rounded">Kembali</button>
                  <button type="submit" class="neon-btn bg-blue-600 text-white px-4 py-2 rounded">
                    Dapatkan Rekomendasi
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div id="resultPage" class="hidden max-w-4xl mx-auto mt-10 p-6 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"> 
  <h3 class="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Hasil Rekomendasi</h3>
  
  <div id="recommendationResult"></div>

  <!-- Tombol Simpan -->
  <button 
    type="button" 
    id="savePredictionButton" 
    class="neon-btn mt-4 mr-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400">
    Simpan Hasil Prediksi
  </button>

  <!-- Tombol Reset -->
  <button 
    type="button" 
    id="resetFormButton" 
    class="neon-btn mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
    Isi Form Lagi
  </button>
</div>

        </div>
      </section>
    </div>
  `;
  }

  async afterRender() {
    setupStepNavigation();
    setupFormSubmission();

    // Pasang event listener untuk tombol Simpan Hasil Prediksi
    const saveBtn = document.getElementById('savePredictionButton');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        this.renderSaveButton();
      });
    }
  }

  renderSaveButton() {
    alert('Fitur simpan laporan akan segera hadir!');
  }
}

function setupFormSubmission() {
  const numberInputs = document.querySelectorAll('input[type="number"][required]');

  numberInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      const value = e.target.value.trim();
      const errorDiv = document.getElementById(`error-${e.target.name}`);

      const isAcademicScore = [
        'history_score',
        'chemistry_score',
        'geography_score',
        'math_score',
        'physics_score',
        'biology_score',
        'english_score',
      ].includes(e.target.name);
      const minValue = 0;
      const maxValue = isAcademicScore ? 100 : 20;
      const errorMessage = isAcademicScore
        ? 'Masukkan nilai antara 0-100'
        : 'Masukkan nilai antara 0-20';

      if (value === '' || isNaN(value) || value < minValue || value > maxValue) {
        input.classList.add('border-red-500');
        if (errorDiv) {
          errorDiv.textContent = errorMessage;
          errorDiv.classList.remove('hidden');
        }
      } else {
        input.classList.remove('border-red-500');
        if (errorDiv) {
          errorDiv.classList.add('hidden');
        }
      }
    });
  });

  const form = document.getElementById('recommendationForm');
  const resultPage = document.getElementById('resultPage');
  const recommendationResult = document.getElementById('recommendationResult');
  const resetFormButton = document.getElementById('resetFormButton');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll('input[type="number"][required]');
    let isValid = true;

    inputs.forEach((input) => {
      const value = input.value.trim();
      const isAcademicScore = [
        'history_score',
        'chemistry_score',
        'geography_score',
        'math_score',
        'physics_score',
        'biology_score',
        'english_score',
      ].includes(input.name);
      const minValue = 0;
      const maxValue = isAcademicScore ? 100 : 20;
      const errorMessage = isAcademicScore
        ? 'Masukkan nilai antara 0-100'
        : 'Masukkan nilai antara 0-20';

      if (value === '' || isNaN(value) || value < minValue || value > maxValue) {
        input.classList.add('border-red-500');
        const errorDiv = document.getElementById(`error-${input.name}`);
        if (errorDiv) {
          errorDiv.textContent = errorMessage;
          errorDiv.classList.remove('hidden');
        }
        isValid = false;
      } else {
        input.classList.remove('border-red-500');
        const errorDiv = document.getElementById(`error-${input.name}`);
        if (errorDiv) {
          errorDiv.classList.add('hidden');
        }
      }
    });

    if (!isValid) return;

    // Buat objek input sesuai field backend Flask
    const formData = {
      'Linguistic': parseFloat(form.Linguistic.value),
      'Musical': parseFloat(form.Musical.value),
      'Bodily': parseFloat(form.Bodily.value),
      'Logical - Mathematical': parseFloat(form.LogicalMathematical.value),
      'Spatial-Visualization': parseFloat(form.SpatialVisualization.value),
      'Interpersonal': parseFloat(form.Interpersonal.value),
      'Naturalist': parseFloat(form.Naturalist.value),

      'math_score': parseFloat(form.math_score.value),
      'physics_score': parseFloat(form.physics_score.value),
      'biology_score': parseFloat(form.biology_score.value),
      'english_score': parseFloat(form.english_score.value),
      'history_score': parseFloat(form.history_score.value),
      'chemistry_score': parseFloat(form.chemistry_score.value),
      'geography_score': parseFloat(form.geography_score.value),

      'weekly_self_study_hours': parseFloat(form.weekly_self_study_hours.value),
      'absence_days': parseFloat(form.absence_days.value),
    };

    try {
      const result = await predictCareer(formData);

      // Tampilkan hasil rekomendasi
      form.classList.add('hidden');
      resultPage.classList.remove('hidden');

      const prediction = [result.confidence]; // Dummy single prediction if needed
      const topProfession = result.predicted_job || 'Tidak diketahui';

      recommendationResult.innerHTML = `
        <div class="p-4 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div class="flex justify-between items-center">
            <h4 class="text-xl font-semibold text-blue-700 dark:text-blue-300">${topProfession}</h4>
            <span class="text-sm font-medium text-blue-600 dark:text-blue-400">${(result.confidence * 100).toFixed(1)}% Kecocokan</span>
          </div>
        </div>
      `;
    } catch (error) {
      console.error('Prediction error:', error);
      alert('Terjadi kesalahan saat memproses prediksi: ' + error.message);
    }
  });

  resetFormButton.addEventListener('click', () => {
    form.reset();
    form.classList.remove('hidden');
    resultPage.classList.add('hidden');
    recommendationResult.innerHTML = '';
  });
}

function setupStepNavigation() {
  const nextButtons = document.querySelectorAll('.next-step');
  const prevButtons = document.querySelectorAll('.prev-step');
  const steps = document.querySelectorAll('.form-step');
  const progressSteps = document.querySelectorAll('.progress-step');

  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle('hidden', i !== index);
      step.classList.toggle('active', i === index);
    });
    progressSteps.forEach((step, i) => {
      step.classList.toggle('active', i === index);
    });
  }

  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  prevButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  showStep(currentStep);
}
