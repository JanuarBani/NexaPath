import CONFIG from '../config';

export const VAPID_PUBLIC_KEY =
  'BCCs2eonMI-6H2ctvFaWg-UYdDv387Vno_bzUzALpB442r2lCnsHmtrx8biyPi_E-1fSGABK_Qs_GlvPoJJqxbk';

// Frontend
export async function predictCareer(formData) {
  try {
    const response = await fetch('https://hapi-backend.vercel.app/api/prediksi', {
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
    console.log(formData);

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
  const response = await fetch('https://hapi-backend.vercel.app/api/prediksi-jurusan', {
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
  console.log('Response API predictMajor:', result);
  if (!result || typeof result !== 'object' || !result.recommendations) {
    throw new Error('Invalid response format from API');
  }
  if (!Array.isArray(result.recommendations)) {
    throw new Error('Recommendations should be an array');
  }
  if (result.recommendations.length === 0) {
    throw new Error('No recommendations found');
  }

  return result;
}
