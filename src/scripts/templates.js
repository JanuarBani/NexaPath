export function generateNavLinksTemplate(isMobile = false) {
  const linkClass = isMobile
    ? 'block py-2 px-4 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300'
    : 'py-2 px-4 rounded hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300';

  return `
    <ul class="${isMobile ? 'flex flex-col' : 'hidden lg:flex lg:flex-row'} gap-2 lg:gap-6 mt-4 lg:mt-0">
      <li><a href="#/" class="${linkClass}">Beranda</a></li>
      <li><a href="#/karier" class="${linkClass}">Prediksi Karier</a></li>
      <li><a href="#/jurusan" class="${linkClass}">Prediksi Jurusan</a></li>
      <li><a href="#/about" class="${linkClass}">Tentang</a></li>
    </ul>
  `;
}
