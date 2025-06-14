export function generateNavLinksTemplate(isMobile = false) {
  const linkClass = isMobile
    ? 'block py-2 px-4 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300'
    : 'py-2 px-4 rounded hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300';

  const ulClass = isMobile ? 'flex flex-col gap-2 mt-4' : 'hidden lg:flex lg:flex-row gap-6 mt-0';

  return `
    <div class="w-full ${!isMobile ? 'max-w-screen-xl mx-auto px-4' : ''}">
      <ul class="${ulClass}">
        <li><a href="#/" class="${linkClass}">Beranda</a></li>
        <li><a href="#/karier" class="${linkClass}">Prediksi Karier</a></li>
        <li><a href="#/jurusan" class="${linkClass}">Prediksi Jurusan</a></li>
        <li><a href="#/about" class="${linkClass}">Tentang</a></li>
      </ul>
    </div>
  `;
}
