'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bfde20b196d307d53e387faa98cbe42e",
"assets/assets/fonts/Comfortaa/Comfortaa-Bold.ttf": "801965b0436842e843141a5a6c1e387f",
"assets/assets/fonts/Comfortaa/Comfortaa-Light.ttf": "929fd78b1498549427891f76ea0f1e51",
"assets/assets/fonts/Comfortaa/Comfortaa-Medium.ttf": "1c593a568b347510402764c6b8e93a37",
"assets/assets/fonts/Comfortaa/Comfortaa-Regular.ttf": "c2488bfda16e6a811f62414da90e51e4",
"assets/assets/fonts/Comfortaa/Comfortaa-SemiBold.ttf": "d905de658a9c1fe4f9d779ccb15c7433",
"assets/assets/images/baby.png": "3f2fa85c88e6c2692ada375796699ed8",
"assets/assets/images/beer.png": "0a89437fa504491f3b3d47e9f7587480",
"assets/assets/images/bg_appbar.png": "05f429ee59072e073b97eee15fb630a3",
"assets/assets/images/bread.png": "f79a48fed411573737bced95da93cebd",
"assets/assets/images/broccoli.png": "3ef174ff6ddb15c37f31c0d56e7a82f8",
"assets/assets/images/canned_food.png": "f52eb5d0b0b0e7b0b4a2e7217ac0df44",
"assets/assets/images/car.png": "6b50ce3eb274df67ab3cadba3cc66664",
"assets/assets/images/cash.png": "d05f4063bc53f289b3e71ee02d169a56",
"assets/assets/images/cherry_online_shopping.png": "c1fcaf611028c141da6e5dfafd434517",
"assets/assets/images/chicken.png": "3629b8c15b8f488868d38fb818ab962f",
"assets/assets/images/cleaning_spray.png": "c0cced84ae0a74d0c11850f6cfd717ce",
"assets/assets/images/corn.png": "343672f8f1bad83985b2b8c940286523",
"assets/assets/images/dairy_products.png": "0fed093894a55a14cfcf25803bc62fdb",
"assets/assets/images/dog.png": "96c79a528c22e1f7dcd1f67f7752367d",
"assets/assets/images/drink.png": "1918719618bd716c49fba42dc80d758b",
"assets/assets/images/fish.png": "90316c8cfdcdd539bb98dcc6662196bc",
"assets/assets/images/flame_purchase.png": "ad0d5ddc751e7f541ae95065bb4f1e6f",
"assets/assets/images/flour.png": "7fecdd5fbf51f68f392303cd2f9dedcb",
"assets/assets/images/food.png": "7c044554c4c6c44aa6d9d838d26a55d6",
"assets/assets/images/fridge.png": "f1b43f000c24e0ca219579e07fe8f195",
"assets/assets/images/frozen.png": "df365a1ac9aee571e8df8d4e415fe9e4",
"assets/assets/images/fruit.png": "e06b03179aa2d1f09c3ef0261be67629",
"assets/assets/images/logo.png": "2eaf97b36e075c1fe81cb6fb9b35e3b8",
"assets/assets/images/potato_chips.png": "85315fb49540164275720edc5b69e08e",
"assets/assets/images/shopping.png": "28afa860d915989a7fd3707c66c19c0f",
"assets/assets/images/shopping_basket.png": "41f78479da7b954f8e8a663d94b241f5",
"assets/assets/images/sirloin_steak.png": "b95da373395afa9a7b57293841cd4c4b",
"assets/assets/images/toilet_roll.png": "0045bf97981b74dbebd8fda1b5427003",
"assets/assets/images/tuna.png": "fb7c976c823905903b473494e034ec18",
"assets/assets/images/vegetables.png": "aee44acfd6ca23b4f1b51256190a72ec",
"assets/FontManifest.json": "c6ee94bffcf92da5cc64ecc341672b3e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b2b66f07ca82623635f57c19947d577b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/android-icon-144x144.png": "6876e7cd7aa0e2b2b9b81746353b65cc",
"icons/android-icon-192x192.png": "47a24174fe20ecbd275691a07be9d659",
"icons/android-icon-36x36.png": "dfea596b03c24513e49eec13e783ccfc",
"icons/android-icon-48x48.png": "243121b72da4d2edc4e242ac0b9bd581",
"icons/android-icon-72x72.png": "9d2ae08586d1c2dbec76a2e5e9ffa997",
"icons/android-icon-96x96.png": "363e3269cdb747dda56ecca754a860e6",
"icons/apple-icon-114x114.png": "6397dc8b067a6a3f31e566e94244b2bd",
"icons/apple-icon-120x120.png": "799bf2a0c785123566e766222695d127",
"icons/apple-icon-144x144.png": "6876e7cd7aa0e2b2b9b81746353b65cc",
"icons/apple-icon-152x152.png": "c1c795c7ecfbd08389a35cbf3550ce3e",
"icons/apple-icon-180x180.png": "0df345f991a5d615d44f7e9f40e15b09",
"icons/apple-icon-57x57.png": "358cd3a7df52d2a1fd96942cfe219a43",
"icons/apple-icon-60x60.png": "97772da07168054c67b99cecf54c8799",
"icons/apple-icon-72x72.png": "9d2ae08586d1c2dbec76a2e5e9ffa997",
"icons/apple-icon-76x76.png": "6788aad6d5cbe950f06393431fd46a25",
"icons/apple-icon.png": "c57b2277263e1e00425bdba8ad8cb9ac",
"icons/favicon-16x16.png": "90b7dbe767a4bf6632527c12bfcb5f95",
"icons/favicon-32x32.png": "f0354fe04b41c9142dd479c3aec59e2c",
"icons/favicon-96x96.png": "363e3269cdb747dda56ecca754a860e6",
"index.html": "1dd119c802cd3900f84e67760bc58f34",
"/": "1dd119c802cd3900f84e67760bc58f34",
"main.dart.js": "3e8d6bc80878f792aa5f90c14c135a38",
"manifest.json": "f85ad8c58a674c0d82dedca4bfdeb03f",
"version.json": "1d3d329e71ef65fa32d78bdaccded80c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
