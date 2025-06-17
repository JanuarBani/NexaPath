if (!self.define) {
  let e,
    i = {};
  const s = (s, n) => (
    (s = new URL(s + '.js', n).href),
    i[s] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const a = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (i[a]) return;
    let o = {};
    const r = (e) => s(e, a),
      d = { module: { uri: a }, exports: o, require: r };
    i[a] = Promise.all(n.map((e) => d[e] || r(e))).then((e) => (c(...e), o));
  };
}
define(['./workbox-b833909e'], function (e) {
  'use strict';
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: 'assets/index-Bhli6KCt.css', revision: null },
        { url: 'assets/index-DBat_ccW.js', revision: null },
        { url: 'index.html', revision: '5cef9f1054ab5b19e5e05c733e2e1b42' },
        { url: 'registerSW.js', revision: '1872c500de691dce40960bb85481de07' },
        { url: 'favicon.png', revision: '738a1acc16f604958f8d1828caf7bc0a' },
        { url: 'images/icons/add-x192.png', revision: '746d24348cfb904a349bb8bbeff5c407' },
        { url: 'images/icons/add-x512.png', revision: '737ec290471f789e58b8e1e10cd45789' },
        { url: 'images/icons/bookmark-x192.png', revision: 'ed90b65db47d46edc6b6c476d88ed0ec' },
        { url: 'images/icons/bookmark-x512.png', revision: '405929716762e708c6a309d74f86cd3e' },
        { url: 'images/icons/icon-x144.png', revision: '7620c0b5d761d87557ac9d953110149d' },
        { url: 'images/icons/icon-x192.png', revision: 'f9a53f892e4e78a6a9029c7f7964d707' },
        { url: 'images/icons/icon-x48.png', revision: '64e19602514e4ab5b056e4d14fcbf784' },
        { url: 'images/icons/icon-x512.png', revision: '96db8052367fe066b1a45e7f19154395' },
        { url: 'images/icons/icon-x72.png', revision: '86f46ceb587cdc3eff8873af5066abd7' },
        { url: 'images/icons/icon-x96.png', revision: '9be2a14f4ed00375ebfbc366797f3edc' },
        {
          url: 'images/icons/maskable-icon-x128.png',
          revision: 'bd2d5c068180adb417a724d09a1f9b18',
        },
        {
          url: 'images/icons/maskable-icon-x192.png',
          revision: '3dee6cf44ec2d43fcfe0029d4e2d5ecc',
        },
        {
          url: 'images/icons/maskable-icon-x384.png',
          revision: '48b86060c8a83885c306774b1a718e7b',
        },
        { url: 'images/icons/maskable-icon-x48.png', revision: 'b31b16e52598fb8c83d9b12eeb485c16' },
        {
          url: 'images/icons/maskable-icon-x512.png',
          revision: 'd4572ceb2b840f4a134b6d6c116333a4',
        },
        { url: 'images/icons/maskable-icon-x72.png', revision: 'd4ddafd6d83dc5fba843311973e1da02' },
        { url: 'images/icons/maskable-icon-x96.png', revision: '9733bf3167d55e92900040209e32ca14' },
        {
          url: 'images/screenshots/NexaPath_001.png',
          revision: '5ac84b868a08bbc346a44bec743701b4',
        },
        {
          url: 'images/screenshots/NexaPath_002.png',
          revision: 'e16a9d563ad80388767ee165b21addd8',
        },
        {
          url: 'images/screenshots/NexaPath_003.png',
          revision: 'b798512745c9baa92ea671f65618e833',
        },
        {
          url: 'images/screenshots/NexaPath_004.png',
          revision: '9bc02dc6cd5cc37336a5e90e7a5fc35a',
        },
        {
          url: 'images/screenshots/NexaPath_005.png',
          revision: '5ad845630831aa37d66c0533f26de05f',
        },
        {
          url: 'images/screenshots/NexaPath_006.png',
          revision: '97e5594b6a3172b9149324cc3546265b',
        },
        { url: 'manifest.webmanifest', revision: '71b2494a6d6e6b47c3b15e44181dc4d2' },
      ],
      {},
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html'))),
    e.registerRoute(
      /^https:\/\/cdn\.tailwindcss\.com/,
      new e.CacheFirst({
        cacheName: 'tailwind-cache',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 10, maxAgeSeconds: 604800 }),
          new e.CacheableResponsePlugin({ statuses: [0, 200] }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/cdnjs\.cloudflare\.com/,
      new e.CacheFirst({
        cacheName: 'font-awesome-cache',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 10, maxAgeSeconds: 604800 }),
          new e.CacheableResponsePlugin({ statuses: [0, 200] }),
        ],
      }),
      'GET',
    );
});
//# sourceMappingURL=sw.js.map
