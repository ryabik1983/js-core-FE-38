// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/module-8.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  id: '1',
  image: 'https://images.pexels.com/photos/3024453/pexels-photo-3024453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'Thousands',
  text: ' Thousands of good, calm, bourgeois faces thronged the windows, the doors, the dormer windows, the roofs, gazing at the palace, gazing at the populace, and asking nothing more; for many Parisians content themselves with the spectacle of the spectators, and a wall behind which something is going on becomes at once, for us, a very curious thing indeed.',
  button: 'read more'
}, {
  id: '2',
  image: 'https://images.pexels.com/photos/7005932/pexels-photo-7005932.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'The personage',
  text: 'The personage, but little reassured, and trembling in every limb, advanced to the edge of the marble table with a vast amount of bows, which, in proportion as he drew nearer, more and more resembled genuflections.',
  button: 'read more'
}, {
  id: '3',
  image: 'https://images.pexels.com/photos/3457336/pexels-photo-3457336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'Old crone',
  text: '“Peace, old crone,” said a tall, grave person, stopping up his nose on the side towards the fishwife; “a mass had to be founded. Would you wish the king to fall ill again?”',
  button: 'read more'
}, {
  id: '4',
  image: 'https://images.pexels.com/photos/1420016/pexels-photo-1420016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'Fine singers!',
  text: '“Fine singers!” replied the other, “with voices even more pointed than their caps! Before founding a mass for Monsieur Saint John, the king should have inquired whether Monsieur Saint John likes Latin droned out in a Provençal accent.”',
  button: 'read more'
}, {
  id: '5',
  image: 'https://images.pexels.com/photos/7499780/pexels-photo-7499780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'By the mercy',
  text: '“By the mercy of the devil,” retorted Joannes Frollo, “these four hours and more; and I hope that they will be reckoned to my credit in purgatory. I heard the eight singers of the King of Sicily intone the first verse of seven o’clock mass in the Sainte-Chapelle.”',
  button: 'read more'
}, {
  id: '6',
  image: 'https://images.pexels.com/photos/8091469/pexels-photo-8091469.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'Upon my soul',
  text: ' “Upon my soul, so it’s you, ‘Joannes Frollo de Molendino!’” cried one of them, to a sort of little, light-haired imp, with a well-favored and malign countenance, clinging to the acanthus leaves of a capital; “you are well named John of the Mill, for your two arms and your two legs have the air of four wings fluttering on the breeze. How long have you been here?”',
  button: 'read more'
}, {
  id: '7',
  image: 'https://images.pexels.com/photos/2253897/pexels-photo-2253897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'The piece',
  text: 'The piece was only to begin with the twelfth stroke of the great palace clock sounding midday. It was very late, no doubt, for a theatrical representation, but they had been obliged to fix the hour to suit the convenience of the ambassadors.',
  button: 'read more'
}, {
  id: '8',
  image: 'https://images.pexels.com/photos/5486845/pexels-photo-5486845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'Four',
  text: 'Four of the bailiff of the palace’s sergeants, perfunctory guardians of all the pleasures of the people, on days of festival as well as on days of execution, stood at the four corners of the marble table.',
  button: 'read more'
}, {
  id: '9',
  image: 'https://images.pexels.com/photos/2266105/pexels-photo-2266105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: '',
  text: '',
  button: 'read more'
}, {
  id: '10',
  image: 'https://images.pexels.com/photos/5945754/pexels-photo-5945754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'In the middle',
  text: 'In the middle of the hall, opposite the great door, a platform of gold brocade, placed against the wall, a special entrance to which had been effected through a window in the corridor of the gold chamber, had been erected for the Flemish emissaries and the other great personages invited to the presentation of the mystery play.',
  button: 'read more'
}, {
  id: '11',
  image: 'https://images.pexels.com/photos/6633978/pexels-photo-6633978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'Reader picture',
  text: 'Let the reader picture to himself now, this immense, oblong hall, illuminated by the pallid light of a January day, invaded by a motley and noisy throng which drifts along the walls, and eddies round the seven pillars, and he will have a confused idea of the whole effect of the picture, whose curious details we shall make an effort to indicate with more precision.',
  button: 'read more'
}, {
  id: '12',
  image: 'https://images.pexels.com/photos/6800551/pexels-photo-6800551.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'With the reader’s',
  text: '  With the With the reader’, we will endeavor to retrace in thought, the impression which he would have experienced in company with us on crossing the threshold of that grand hall, in the midst of that tumultuous crowd in surcoats, short, sleeveless jackets, and doublets.',
  button: 'read more'
}, {
  id: '13',
  image: 'https://images.pexels.com/photos/1054018/pexels-photo-1054018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'If it could',
  text: 'If it could be granted to us, the men of 1830, to mingle in thought with those Parisians of the fifteenth century, and to enter with them, jostled, elbowed, pulled about, into that immense hall of the palace, which was so cramped on that sixth of January, 1482, \the spectacle would not be devoid of either interest or charm, and we should have about us only things that were so old that they would seem new.',
  button: 'read more'
}];
exports.default = _default;
},{}],"references/refs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _defineProperty({
  form: document.querySelector('.form'),
  propagation: document.querySelector('.propagation'),
  articleProp: document.getElementById('article-prop'),
  articleList: document.getElementById('article-list'),
  myBtn: document.getElementById('myBtn'),
  // module-8 practice
  // list
  list: document.getElementById('list'),
  // modal
  modal: document.querySelector('.backDrop'),
  // close button
  closeBtn: document.getElementById('closeModal'),
  modalContent: document.querySelector('.content')
}, "form", document.getElementById('form'));

exports.default = _default;
},{}],"practice/module-8.js":[function(require,module,exports) {
"use strict";

var _module = _interopRequireDefault(require("../data/module-8.js"));

var _refs = _interopRequireDefault(require("../references/refs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var list = _refs.default.list,
    modal = _refs.default.modal,
    closeBtn = _refs.default.closeBtn,
    modalContent = _refs.default.modalContent; // console.log(list, modal, form)
// ШАБЛОН РАЗМЕТКИ

var item = "\n        <li class=\"item\">\n          <div class=\"imgWrapper\">\n            <img src=\"https://images.pexels.com/photos/3024453/pexels-photo-3024453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\" alt=\"img\" />\n          </div>\n          <div class=\"cardInfo\">\n            <h3 class=\"title\">Thousands</h3>\n            <p class=\"text\">\n              Thousands of good, calm, bourgeois faces thronged the windows, the\n              doors, the dormer windows, the roofs, gazing at the palace, gazing\n              at the populace, and asking nothing more; for many Parisians\n              content themselves with the spectacle of the spectators, and a\n              wall behind which something is going on becomes at once, for us, a\n              very curious thing indeed.\n            </p>\n            <button class=\"link\" type=\"button\">open here</button>\n          </div>\n        </li> \n"; // ФУНКЦИЯ СОЗДАНИЯ РАЗМЕТКИ

function createItems(array) {
  return array.map(function (elem) {
    var image = elem.image,
        _elem$title = elem.title,
        title = _elem$title === void 0 ? 'TITLE' : _elem$title,
        text = elem.text,
        button = elem.button,
        id = elem.id; // console.log(image, title, text, button)

    return "\n        <li class=\"item\">\n          <div class=\"imgWrapper\">\n            <img src=".concat(image, " alt=").concat(title, " />\n          </div>\n          <div class=\"cardInfo\">\n            <h3 class=\"title\">").concat(title, "</h3>\n            <p class=\"text\">").concat(text, "</p>\n            <button id=").concat(id, " class=\"link\" type=\"button\">").concat(button, "</button>\n          </div>\n        </li>");
  }).join('');
} // вызываем createItems, передаем данные и джоиним


var markup = createItems(_module.default); // console.log(markup)
// ВСТРАИВАНИЕ СОЗДАННОЙ РАЗМЕТКИ

list.insertAdjacentHTML('afterbegin', markup); // СОЗДАЕМ НАБЛЮДАТЕЛЯ
// 1 - создаем экземпляр Observer

var options = {
  root: list,
  // относительно кого проверяем видимость элемента
  rootMargin: '0px',
  // внешние отступы root, поэтому
  // задаем с -
  threshold: 0.5 // на сколько проверяемый элемент должен
  // попасть в зону видимости root

};
var observer = new IntersectionObserver(callback, options);

function callback(entries) {
  entries.forEach(function (entry) {
    entry.isIntersecting ? entry.target.classList.add('observe') : entry.target.classList.remove('observe');
  });
} // 2 - получаем массив элементов items, к которым применим Observer (...list.children)


var items = _toConsumableArray(list.children); // 3 - вызываем экземпляр наблюдателя на каждом элементе списка


items.forEach(function (item) {
  return observer.observe(item);
}); // ДОБАВЛЯЕМ ОТКРЫТИЕ МОДАЛЬНОГО ОКНА

function showElement(element) {
  element.classList.remove('isHidden');
}

function hideElement(element) {
  element.classList.add('isHidden');
}

list.addEventListener('click', function (e) {
  var condition = e.target.nodeName === 'BUTTON';

  if (condition) {
    // modal.classList.remove('isHidden')
    showElement(modal);
    var modalImage = document.createElement('img');

    var link = _module.default.find(function (object) {
      return object.id === e.target.id;
    }).image;

    modalImage.setAttribute('src', link);
    console.log(modalImage);
    modalContent.append(modalImage);
  }
}); // Закрываем модальное окно
//  по бекдропу

modal.addEventListener('click', closeModalByClick);

function closeModalByClick(e) {
  if (e.target.classList.contains('closeModal')) {
    hideElement(modal);
  }
} //  по Escape ArrowLeft ArrowRight


window.addEventListener('keydown', closeModalByKey);

function closeModalByKey(e) {
  if (e.code === 'Escape' || e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
    hideElement(modal);
  }
} //  по кнопке Х


closeBtn.addEventListener('click', closeModalByClick); // зачищаем слушателя

if (!modal.classList.contains('isHidden')) {
  window.removeEventListener('keydown', closeModalByKey);
  modal.removeEventListener('click', closeModalByClick);
}
},{"../data/module-8.js":"data/module-8.js","../references/refs.js":"references/refs.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51935" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","practice/module-8.js"], null)
//# sourceMappingURL=/module-8.26a607b9.js.map