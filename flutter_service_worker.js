'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7f53ae9c667a91dcb45dabe958f28652",
".git/config": "82a9f24404916e80156146811cdcb789",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e1b5ecb0e6a31a14488e1ae0adb3c2b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2141679adc6abe2756af2685d9dcf40a",
".git/logs/refs/heads/master": "2141679adc6abe2756af2685d9dcf40a",
".git/logs/refs/remotes/origin/master": "897cd735a4a3d3654e0422e7c9a41758",
".git/objects/06/26c911170a487410b0d7e990e7848aeacb2868": "22820e22b0ba8e0c14bddcbdfb2222bf",
".git/objects/09/02ae0b9e629217a76e76ee618cfc548d70769c": "0d7c1970a8185a4eb36818bd30d06ae7",
".git/objects/09/9c0e5d3dee716fe22edce5d83e81e2c915deac": "bc11ed032cd18e5f2ebb071fbd65b5d7",
".git/objects/10/6b9fea1379492932ac93e1b2ac51e9d3690624": "52f864d985c7c147566d07013f61fa23",
".git/objects/10/efea9a8c33e8be763c5d22e2515112952c3a5a": "ff6e387828c703810b6ab2991b4fd9de",
".git/objects/11/00666d2fe81a80a50ac2e7233de2a8240212a1": "c09e489007b5d71b9a075f76087881d7",
".git/objects/16/f8effe6fe1c29b1db95df8e64c7ff26f514120": "3cbef9c99fdf886a71d0e5fded6d5ae9",
".git/objects/17/e8cfe5285645376b82060b5a8a159c219b2388": "c0efe48f080e3a3af41d706206865938",
".git/objects/18/5198bce08a6cdd083511918a230313172b629a": "f9e66af838a8f8a1b7c00ab7747100e7",
".git/objects/19/70bb3858a19dca431ab86ee81b4b101d525ac4": "b939019b2951246e5051a9f074f08aaf",
".git/objects/21/9486867d1f31d2abe8cd6e1fdeb0bbeb2715fe": "0941b468732ab1dc0ab674e4d3a7f401",
".git/objects/24/c9831136d9e14987eb505fb80509a89c2569c5": "997d4a7385d95935275edc7442ff52d0",
".git/objects/26/113b80ad5babd11eb50eefa9611393aaa9c7fc": "c881921b06209b5ff89b681e40da53d4",
".git/objects/27/35872766f1a9e25d64a19946695ea3c779f9fd": "494b6dd078b6b91c16f76008d4d49b2b",
".git/objects/2c/e6dbd36ee5dda09ede1e1dd1cebc284d3cebfa": "da7f266f1394bd64720573b71498325c",
".git/objects/30/762f2e088f9f96299f0944d1f18bd3ddd2c84d": "bae79799d7413f63ee4c3853382650f4",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/5661d59c71c12caef31dd2d2733ad9a7ceaa59": "3de7270411a0d20dc27c16e58469109f",
".git/objects/40/5437b23cc93799383e522492c7a8eac4185abd": "1beb628fb933fcd2e00e4d773061eca8",
".git/objects/49/1a7da65a84babd5f5498cfade35fd5faaa874f": "4d0c9327b9c923918229376c40ab5a12",
".git/objects/4a/32aef824248112fd11e9eb26cbd7b639fbb38e": "f998045e5f0e347fe075321a10114dc2",
".git/objects/4e/66da2d12c97383b934fd9828ea291baa06318e": "af4e1d820ec40a5a1728730497764d31",
".git/objects/50/31258348fa22e0d06f5f02bbe76da4910e6883": "8baf9ee7a438922a19a056aeb539e991",
".git/objects/57/645667d57c86b4c4599a6fd44019d2c87d838c": "aaa6982c325f9761d9219e8290fffca0",
".git/objects/5c/4de22cd0b813fc8faf5823ff1f294d4743b6a4": "8b12593e619c87d9c96618fd580438d9",
".git/objects/5f/119c2c2a879ca47f439b4322d45e6cfe8beca3": "06c866dffd6b6f0bd5579ca4785a8ad9",
".git/objects/60/31c722061f03c9e3a98a19af1823904931f8cf": "2415b76582ccd867983ce5e2dc504667",
".git/objects/60/82d1a126e4812f9630790f6b3cebe3ee31e1f8": "18337537f3aac333ab6784740b8c5059",
".git/objects/63/fa94df3c55db2da10898cbf6a15bdb1eb21e11": "50db21f9bb066a05c12dfd38134e16eb",
".git/objects/67/daf47f62c868f127d45622c97c64c5c3982b0b": "b8f0c25eb28c96c636a1c86c104a2a01",
".git/objects/6d/d1f3ae3e66aa6b9d7532d879aa8810ca6d76f7": "955aaa2fed2880b291e1dc1845b0c0d9",
".git/objects/78/5aac85df34e5d23157bfedb10514ed411dfc26": "e0c7095446bcde9e5073c0c7893c1ab7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/ceb7df7b12d6159a8bbe3721605037d6036e46": "8d2d4f20683669f64e007c3d1a320318",
".git/objects/7e/c1a0869bd15204034fe6776a03d21aa74ebb7e": "d45f4ced1274545a34c4f2b7d6079be5",
".git/objects/80/d86bc071cea50fea3d17440f8dc0e3e9e133c9": "fb6772ecf2f097948712c44339f1ce93",
".git/objects/80/f4ab8ee73afb002836792408c705524e124bbf": "fbf532fd01f1c4a0e4e8d77f0fc120e9",
".git/objects/81/b492ef1dea34021218235aeb4a3be8483226b7": "ca5c5cde0acdc90316097fd5b45649f4",
".git/objects/82/325c44524c96dc36ec4f2edffba8198d3bd621": "32c1fe0de45dfe08827575965c192f0f",
".git/objects/83/57efef85ccaab87235733b6ec5270bd5371a73": "08667745595ff685a69210f17faebfa9",
".git/objects/85/b6c94aa4e3406639a8000a58d14d15c8b1ac95": "41ce5d98db87f42b1a194f78a1ea26cc",
".git/objects/85/fd157e61e64d241f1ff0fbefe312fbe811ab97": "166ef89d78db23035dafd2f7a794a6c4",
".git/objects/86/4b25b7fad3913d631bddcd749e0e89e2433b27": "1a646af798353607665c00439c363122",
".git/objects/86/b9b0f59933e0347abc780c7a10f8e6a2b6f03b": "2308f818836ab3fad322e79e07e12bcd",
".git/objects/86/ba18d853927c7659cc4c861f8d04a9b178313f": "dee3ae903449645e14d183f63d339f88",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/8c7628452d115a8afd045bf274aec97c48ec83": "2725f983e135ed33cdf1a4e793f4d873",
".git/objects/90/f837b87cf234aa4915ddf14f72ce5975c104fa": "a94fba9ba0a30f73fdca92d8f2537ef9",
".git/objects/95/c8b4ec4b933cbd3f86f0435fec10196153bc13": "7d750b2c044b66afad98b23b55d4c3a9",
".git/objects/95/dc05ecd8dd9cf0d88f9c80ebcc7e6cbdb86167": "18aa4a98fdf0cfada2ae1ffecada2855",
".git/objects/98/2eee660b30b6418c2c3728b4a04481d0ecc234": "cf65392d59a9041a1dd474e6927a1ea6",
".git/objects/99/a2dd1e448fca7beec5e790747ce47da90e0ba2": "0ab6edfc33a675df3878f6e334f8d161",
".git/objects/9e/86f848b249b42cef18be74655b16dcfc5fd0f9": "fef1c5f0c0a34caea3877b09f0e6ab58",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/973a862f7de4ada28f12138ae9b1321acad915": "3add064b13888555979e39710dd99040",
".git/objects/a7/dda8fdf0c72f8aeb2cc3f3f2d5d76be1692725": "19014911719ac1e9ac3c1d6d1b069cd1",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/03414772c02a9b3cf3296d7f5f8c97a6e91680": "f98bfb2b301a98bb1b00b6fc3ad9b89f",
".git/objects/b2/33ff0ab6da830ca1126b2f20469a9ee0275d23": "c5064c562cd854be13aa9e7c77f78f84",
".git/objects/ba/c27d9994fca22c99aca447fb047094f1eed8da": "f88a323416f8ee615a2d0afab10d1757",
".git/objects/bd/87ca269417948d20fd49586c4959ef2e867d90": "ad8b135950f377a78baafb490b556f76",
".git/objects/be/8e070a263eab2d9020661f1c41c69dfe45fb46": "d082d974c240d8a81a6b313cf2f5424f",
".git/objects/c3/87ecf5144f9578e1df530c9893157000c2764b": "84f19796c711d1670ae2578bbf37386a",
".git/objects/c7/4fced909827734b78b21946695d055d50810a7": "6573aacec7dd12b8ccc22f350c88e8a1",
".git/objects/c8/497f4d64c9c12d1c87dfb57ea8150008ce8bb4": "e574b9dda3ed8ecc662664a282102d81",
".git/objects/d2/b39b05e9b85730e554d9b4468515f7911e2270": "580006c6a310813c731724dffe152719",
".git/objects/d6/93a9a23037129883feba05d45d70140cd39c04": "d9f35610c196ee77e73c6c29ab095a4c",
".git/objects/d7/a6d614fe49518c849a70ac39905c88b782579a": "a41c933c05b5ff9d7ca116ced317a8e1",
".git/objects/d9/5e67306f590ade6b23acb163f4c8fbdbb29164": "085f6a211835f46ecc017c042d9933ab",
".git/objects/d9/eec7c6f0fd3fda33e3b8387f96a60e0133a69a": "542cbcf76f6e6b93ba479047206dfc2c",
".git/objects/df/7d66bce717ec5ca8de0dc22eb70335ca5cb227": "3a8c0b6cf7acf65d957af9ab6fdca33f",
".git/objects/df/9651808d93eb8ad2f72f63fe5f3afa4478d9e5": "364a7625979630e7ba4bebbe211c2885",
".git/objects/e4/64b8651c24f67a953b689bca30c03cd3d4e7f0": "71243f84d7544978b7c5a53070ce5ac3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/2e8f09c362f95e868b77349fa17e0675962642": "85b746cd77c532759b1ec48ce1c0660a",
".git/objects/ef/91b8d18e00633601cd51b80f087041df8e5716": "087b7fe5b18cdbf7020501bf5e0cbd5d",
".git/objects/f5/fe9f7d3eb5a6488cf14f9d6a66520fd4098f15": "1c3676f2d4fac5d0acb145ad548ad331",
".git/objects/f8/c989cf840e257073287788f5ff26f049ad8de0": "4bd5ff5c3a42ea82970cb4d54ea1873c",
".git/objects/fc/52501382fce88ab5369bf2733e1af43f44d203": "ccc69975347dde07f48a09ac1eac0949",
".git/objects/fd/c67413dcf9140c250228f36f42a4221ceed95e": "772fba3044852badf95556c5f66555d7",
".git/objects/fe/50f4346c876b910e411902e859bf0488e2385e": "49d5892ab72f8a725b2072d6fe9348f4",
".git/objects/ff/fdbe9f663d27a2492d5c191a48ee361833c122": "27b2ce5197cc487230cb59f1ea5a7e2c",
".git/refs/heads/master": "b1de23887f557ba30699e4e0e32e1985",
".git/refs/remotes/origin/master": "b1de23887f557ba30699e4e0e32e1985",
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
"favicon.png": "90b7dbe767a4bf6632527c12bfcb5f95",
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
"index.html": "a8dfb07fd70387728a239a50022bf2b0",
"/": "a8dfb07fd70387728a239a50022bf2b0",
"main.dart.js": "57478bc45e5e6a49963f1e3c5abb66ac",
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
