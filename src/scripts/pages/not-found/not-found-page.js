export default class NotFoundPage {
  async render() {
    return `
      <div class="container mx-auto my-12 px-4 text-center">
        <div class="flex flex-col items-center justify-center min-h-[60vh] animate-fadeIn">
          <h1 class="text-9xl font-extrabold text-red-600 mb-4 animate-bounce">
            404
          </h1>
          <h2 class="text-2xl font-semibold mb-3 animate-fadeIn delay-200">Halaman Tidak Ditemukan</h2>
          <p class="text-lg text-gray-600 mb-6 animate-fadeIn delay-300">Maaf, alamat yang Anda tuju tidak tersedia.</p>
          <a href="#/" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105 animate-fadeIn delay-500">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 20v-6h4v6h5v-8h3L10 0 2 12h3v8z"/>
            </svg>
            Kembali ke Beranda
          </a>
        </div>
      </div>
    `;
  }

  async afterRender() {
    // Tidak ada logika tambahan untuk halaman 404.
  }
}
