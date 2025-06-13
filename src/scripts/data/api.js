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

/**
 * Fungsi untuk memanggil API prediksi jurusan
 * @param {number[]} inputArray - Array 8 angka sesuai fitur skor UTBK
 * @returns {Promise<{ error: boolean, recommendation: string, confidence: number }>}
 */
export async function predictMajor(data) {
  const response = await fetch('http://localhost:5000/api/prediksi-jurusan', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HTTP error ${response.status}: ${text}`);
  }

  const result = await response.json();

  return result;
}




