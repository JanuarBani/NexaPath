import { precache } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';
import CONFIG from './config';

// ✅ Hanya gunakan `precache()` untuk InjectManifest
precache(self.__WB_MANIFEST);

// 📦 Google Fonts
registerRoute(
  ({ url }) =>
    url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts',
    plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })],
  }),
);

// 📦 Font Awesome dan CDN
registerRoute(
  ({ url }) => url.origin === 'https://cdnjs.cloudflare.com' || url.href.includes('fontawesome'),
  new CacheFirst({
    cacheName: 'fontawesome-cdn',
    plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })],
  }),
);

// 📦 UI Avatars
registerRoute(
  ({ url }) => url.origin === 'https://ui-avatars.com',
  new CacheFirst({
    cacheName: 'avatars-api',
    plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })],
  }),
);

// 🔄 API: Data JSON atau lainnya (bukan gambar)
registerRoute(
  ({ request, url }) => {
    const apiOrigin = new URL(CONFIG.BASE_URL).origin;
    return url.origin === apiOrigin && request.destination !== 'image';
  },
  new NetworkFirst({
    cacheName: 'story-api-data',
    plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })],
  }),
);
