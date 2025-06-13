import CONFIG from '../config';

export const VAPID_PUBLIC_KEY =
  'BCCs2eonMI-6H2ctvFaWg-UYdDv387Vno_bzUzALpB442r2lCnsHmtrx8biyPi_E-1fSGABK_Qs_GlvPoJJqxbk';

// Endpoints untuk berbagai aksi
const ENDPOINTS = {
  JURUSAN: `http://127.0.0.1:3000/recommend`,
};

// Frontend
export async function predictCareer(formData) {
  try {
    const response = await fetch('http://localhost:5000/api/prediksi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error!', error);
    throw error;
  }
}

export async function predictMajor(scores, testType) {
  try {
    const response = await fetch(ENDPOINTS.JURUSAN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        scores: scores, // Objek skor lengkap
        test_type: testType, // 'science' atau 'humanities'
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.message || 'Prediction error from server');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
