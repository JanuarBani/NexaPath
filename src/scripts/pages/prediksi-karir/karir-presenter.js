import { predictCareer } from './src/fe/src/scripts/data/api.js';

export default class KarirPresenter {
  #view;

  constructor({ view }) {
    this.#view = view;
  }

  init() {
    const form = document.getElementById('recommendationForm');
    const resetBtn = document.getElementById('resetFormButton');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      const data = {
        'Linguistic': +formData.get('Linguistic'),
        'Musical': +formData.get('Musical'),
        'Bodily': +formData.get('Bodily'),
        'Logical - Mathematical': +formData.get('LogicalMathematical'),
        'Spatial-Visualization': +formData.get('SpatialVisualization'),
        'Interpersonal': +formData.get('Interpersonal'),
        'Intrapersonal': +formData.get('Intrapersonal'),
        'Naturalist': +formData.get('Naturalist'),
        'math_score': +formData.get('math_score'),
        'physics_score': +formData.get('physics_score'),
        'biology_score': +formData.get('biology_score'),
        'english_score': +formData.get('english_score'),
        'history_score': +formData.get('history_score'),
        'chemistry_score': +formData.get('chemistry_score'),
        'geography_score': +formData.get('geography_score'),
        'weekly_self_study_hours': +formData.get('weekly_self_study_hours'),
        'absence_days': +formData.get('absence_days'),
      };

      try {
        const result = await predictCareer(data);
        console.log(result);
        this.#view.showResult({
          career: result.predicted_job || 'Tidak diketahui',
          confidence: (result.confidence * 100).toFixed(1),
        });
      } catch (error) {
        console.error(error);
        this.#view.showError('Gagal memproses prediksi. Coba lagi.');
      }
    });

    resetBtn.addEventListener('click', () => {
      this.#view.resetForm();
    });
  }
}
