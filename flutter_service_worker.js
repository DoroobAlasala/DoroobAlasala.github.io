'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "95ccdc33968f6571fb5fb370d7e631ee",
"assets/assets/buldings1.png": "ea4a3530fe84d7283b21452c8763ab53",
"assets/assets/bus.jpg": "47f352a148498b7a2a6045397ebe5ff8",
"assets/assets/busIcon.png": "0189829fa726c815254b8a43abd79ff6",
"assets/assets/call.png": "893d70f4c947aa3a84c743f7c7ad1117",
"assets/assets/callW.png": "a9bee0ad8adb863e880a1a4be47b9c73",
"assets/assets/championship.jpg": "b6c4364c51e3e5d449942890657d3408",
"assets/assets/class.png": "88f55e9c446f7c15c866e2b6e987ef46",
"assets/assets/class1.png": "e80459cc6d36a6662b258b38cebf3a00",
"assets/assets/class2.jpg": "07e2619287b293857b071466c1484b19",
"assets/assets/computerLab.jpg": "1b146aa4f06570e319c44c15cc55110a",
"assets/assets/DAMS-logo-rem.png": "e318a0e037f686b2057aebe88be35036",
"assets/assets/DAMS-logo.jpg": "f4cf1ce2974d80d91286c94932f5131a",
"assets/assets/DAMS.png": "9809006128c06690a564f0e1d435be55",
"assets/assets/discount-for-student.png": "590ea08df77398029186fd3b7c8a2608",
"assets/assets/excellence.png": "287ac529da2297de81fe0a5c19caed8f",
"assets/assets/fb.png": "1ffcb08b91d949d6198b89884f9ad782",
"assets/assets/fbW.png": "beb60e0db8d059bbf6e9288db394fdf1",
"assets/assets/finalExam.jpg": "c10a139e1a503858dcf3cd560591131c",
"assets/assets/firstActiv.png": "4192a1c185a74c849a54ec0c978d0994",
"assets/assets/FirstGrade.png": "6b3dedf62cdc50159c2037693efba447",
"assets/assets/fonts/NotoKufiArabic.ttf": "b5a2a5381faae9fb3ae14ea66e9ec937",
"assets/assets/founding_year_of_establishment.png": "9c415926227b396c50da68dabf083057",
"assets/assets/graduation-hat.png": "1f847e2407a86bc92db9263348f652c2",
"assets/assets/HighBoy1.png": "35617cbd1697fb204c9d9db755abab35",
"assets/assets/HighBoy2.png": "aa37ff3bcf447ad806d2c27c489421e5",
"assets/assets/HighBoy3.png": "e722713b4aed68b258a42f75a18771c3",
"assets/assets/HighBoy4.png": "7dacdb7fca54fb0a3c96a60f0f9258a2",
"assets/assets/HighBoy5.png": "dab7755bd180632f0af9f84ba9e11be6",
"assets/assets/HighBoy6.png": "5635f61891794aa328f801a99ffaa321",
"assets/assets/hr.jpeg": "3efb77c3703e9f2f4670e7f11b79f286",
"assets/assets/insta.png": "aa245b453a4fbc9659d539bdd590a274",
"assets/assets/instaW.png": "e16bfe7a1362d446cd0c7be5ca64820f",
"assets/assets/job.jpg": "c44b053400fc93df0e1cc6ca828b5228",
"assets/assets/kg.jpg": "04a99e67c50a8b8efba2e71decb82f7d",
"assets/assets/kind1.JPG": "04a99e67c50a8b8efba2e71decb82f7d",
"assets/assets/kind2.JPG": "73a0fee84731a1bbc5f5400a31b2a204",
"assets/assets/kind3.JPG": "19e4f625f5d9646bf1fd5fbdd5972f59",
"assets/assets/kind4.JPG": "c142cda70da65a9a7788348c84b6bd16",
"assets/assets/kind5.JPG": "749925c84dee5092f2f06ddbd86f64af",
"assets/assets/kindergartenIcon.png": "99aed50526765e2fa03ca56b1c4653a8",
"assets/assets/kindergartenStad.jpg": "6a084e111cfa9788b4c1a2b46348b468",
"assets/assets/lab-chemistry-science-computer.png": "67d8e10424ef0cf810a2b5bd87142e32",
"assets/assets/lab.jpg": "469a53e3706140b93fecb7362ac4b798",
"assets/assets/law-lg.jpg": "8b2c0f46c2b7eae4d02c6672d0daa42c",
"assets/assets/lib1.jpg": "15cafad3402e396743865560c3780b0c",
"assets/assets/lib2.jpg": "3381698b9163d3cf1c02d46629a7edc0",
"assets/assets/library.png": "1691d7e8545fe0db575df5162a10d22b",
"assets/assets/library1.jpg": "239fa7f636a77787a1fc8a332e254470",
"assets/assets/library2.jpg": "eb1556674781a1681127a6ff33d34d9b",
"assets/assets/location.png": "f4a81c42ed9134bd86798f5664553fae",
"assets/assets/locationW.png": "42d47be030002cf14e0890034f390683",
"assets/assets/maleStad.jpg": "9af555d1e6f4b5468ab476e17451655d",
"assets/assets/mission.png": "7670c109ba852a663347a1e755f22654",
"assets/assets/mixed1.png": "969cba91f0d213c54fde81a5704db211",
"assets/assets/mixed2.png": "cb86002dcdc4d02c0de78e69ae1adbe4",
"assets/assets/mixed3.png": "e80459cc6d36a6662b258b38cebf3a00",
"assets/assets/mixed4.png": "5b98be5f33d708860781375aa9b4a9c7",
"assets/assets/mixed5.png": "240646ccd8cddabff70156a5f3a858f8",
"assets/assets/mixed6.png": "4ffa116731f706ac8d3e239aa048ed39",
"assets/assets/mixStad.jpg": "9937979b68bae7ee176159fd864da164",
"assets/assets/Parents.jpg": "35707ee26d36de60d501698e22c362be",
"assets/assets/premiums.png": "f7a1fcf5237b584385b13c7e4ac6b2d2",
"assets/assets/quraan.jpg": "6b60c95b570839f1f618f41e168157b2",
"assets/assets/reception.jpg": "55fba9fc92f2a576029acb6b4bd19a06",
"assets/assets/rooms.png": "428cf2276e6b3d792ce9c79fe2b1ebd6",
"assets/assets/rsz_1discount-for-student.png": "b07698dc3353df3303a3ca1041754f94",
"assets/assets/rsz_2male.png": "d908410faf736ddfb3e2e0548c95d87c",
"assets/assets/rsz_discount-for-student.png": "7c77cef642225438fb62c910a35f5888",
"assets/assets/rsz_female.png": "97ab8f2731d3dc81a5a6e25d70ad5d88",
"assets/assets/rsz_grants.png": "1321be02329ae2a95377486c14f172af",
"assets/assets/rsz_quran.png": "45e43ed75d415169fed303891a62c060",
"assets/assets/rsz_scholarshipdgree.png": "ff53f49903b325e853bfd83c2496c4fc",
"assets/assets/school.png": "ef0656187437e92cbdf36c280261d3ba",
"assets/assets/schoolBulding3.png": "5e5efb74b7b6e63b4f451df6db10368a",
"assets/assets/SciencesLab1.png": "ee6084343973ea0adba35f499c5dfccc",
"assets/assets/SciencesLab2.png": "584d00b045112547eeb954674bd0302e",
"assets/assets/search.png": "9fd1cdf1e2146312ae46db1f9a6310ac",
"assets/assets/searchW.png": "07c33ad8ab2511aa75ab793ef1b07bbf",
"assets/assets/stad.jpg": "e0bd939b00231a87845a98c4a4b38289",
"assets/assets/stad1.jpg": "4add1ac9084b2abecd9d923947fc2508",
"assets/assets/stad2.jpg": "9a7db6f5dd9b568a5287394a7c8288bf",
"assets/assets/stage.jpg": "1d49ae650e51992cf3665b5e4f5ebe5a",
"assets/assets/stage1.jpg": "b7c62a85f9d947fdc59c7005e1302f3d",
"assets/assets/stage2.png": "059d8a1040e4e09d5526192c5f472406",
"assets/assets/stage3.png": "4293eaae76d6cfba6d7073a41d54ffe0",
"assets/assets/stud1.png": "2a23314c588e4fb3604a52af921cea59",
"assets/assets/tech3.png": "adaa853de8fa92aa0f2c657bf6b4ad65",
"assets/assets/vision.png": "080a4873d47f32f9033a1e1c37b42d45",
"assets/assets/youTube.png": "56a9c0edc7930d096177570b69e80569",
"assets/assets/youTubeW.png": "63ba0106f335d9b0e9ed92c4fd2a80ae",
"assets/FontManifest.json": "9f990c6a916b98edcc992cec71ae9b72",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "621411d3406388b7adfa29d5d5b40dad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aa352367113558de3d3db0f966fa6983",
"/": "aa352367113558de3d3db0f966fa6983",
"main.dart.js": "9a98e8797f7f8234edf45f972acfa5f7",
"manifest.json": "adf6b341c9a528cc63569b6c1ea6dd1a",
"version.json": "236fc53a60190d52f04789be61ffda1d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
