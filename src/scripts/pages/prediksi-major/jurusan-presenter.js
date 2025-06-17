import { predictMajor } from '../../data/api.js';

export default class JurusanPresenter {
  #view;

  constructor({ view }) {
    this.#view = view;
  }

  init() {
    // Setup dynamic TKA input based on kelompok
    this.#view.bindKelompokChange((kelompok) => this.handleKelompokChange(kelompok));

    // Setup form submission
    this.#view.bindFormSubmit(() => this.handleFormSubmit());

    // Setup reset button
    this.#view.bindReset(() => this.handleReset());
  }

  handleKelompokChange(kelompok) {
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

    if (kelompok === 'saintek') {
      this.#view.renderTKAFields(saintekFields);
    } else if (kelompok === 'soshum') {
      this.#view.renderTKAFields(soshumFields);
    } else {
      this.#view.renderTKAFields([]);
    }
  }

  async handleFormSubmit() {
    const data = this.#view.getFormData();

    if (!['saintek', 'soshum'].includes(data.kelompok)) {
      this.#view.showError('Pilih kelompok ujian yang valid.');
      return;
    }

    // Validasi nilai angka
    const scores = {
      score_kpu: parseFloat(data.tpsScores.kpu),
      score_kua: parseFloat(data.tpsScores.kua),
      score_ppu: parseFloat(data.tpsScores.ppu),
      score_kmb: parseFloat(data.tpsScores.kmb),
    };

    if (data.kelompok === 'saintek') {
      scores.score_mat_tka = parseFloat(data.tkaScores.mat);
      scores.score_fis = parseFloat(data.tkaScores.fis);
      scores.score_kim = parseFloat(data.tkaScores.kim);
      scores.score_bio = parseFloat(data.tkaScores.bio);
    } else {
      scores.score_mat_tka = parseFloat(data.tkaScores.mat);
      scores.score_geo = parseFloat(data.tkaScores.geo);
      scores.score_sej = parseFloat(data.tkaScores.sej);
      scores.score_sos = parseFloat(data.tkaScores.sos);
      scores.score_eko = parseFloat(data.tkaScores.eko);
    }

    const allValid = Object.values(scores).every((v) => typeof v === 'number' && !isNaN(v));

    if (!allValid) {
      this.#view.showError('Pastikan semua nilai telah diisi dan berupa angka.');
      return;
    }

    const testType = data.kelompok === 'saintek' ? 'science' : 'humanities';

    try {
      const result = await predictMajor({ scores, test_type: testType });

      if (!result || !Array.isArray(result.recommendations)) {
        this.#view.showError('Data rekomendasi jurusan tidak tersedia atau formatnya salah.');
        return;
      }

      this.#view.showResult(data.nama, data.kelompok, result.recommendations);
    } catch (error) {
      this.#view.showError('Terjadi kesalahan saat memproses prediksi: ' + error.message);
    }
  }

  handleReset() {
    this.#view.resetForm();
  }
}
