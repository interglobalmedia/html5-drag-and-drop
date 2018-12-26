// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"modules/dragDrop/dragDrop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDrop = handleDrop;
exports.handleDragStart = handleDragStart;
exports.handleDragEnd = handleDragEnd;
exports.handleDragOver = handleDragOver;
exports.handleDragEnter = handleDragEnter;
exports.handleDragLeave = handleDragLeave;
var dragSrcEl = null;
var cols = document.querySelectorAll('.drop-grid .drop-cell');

function handleDrop(e) {
  // this / e.target is current target element.
  if (e.stopPropagation) {
    // stops the browser from redirecting.
    e.stopPropagation();
  } // Don't do anything if dropping the same column we're dragging.


  if (dragSrcEl != e.target) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    var _ref = [e.target.innerHTML, dragSrcEl.innerHTML];
    dragSrcEl.innerHTML = _ref[0];
    e.target.innerHTML = _ref[1];
    e.target.innerHTML = e.DataTransfer.getData('text/html');
  }

  return false;
}

function handleDragStart(e) {
  // this/e.target is source node 
  dragSrcEl = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
}

function handleDragEnd(e) {
  // this/e.target is the source node.
  Array.from(cols).forEach(function (col) {
    return col.classList.remove('over');
  });
}

function handleDragOver(e) {
  if (e.preventDefault) {
    // Necessary. Allows us to drop.
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(e) {
  // this / e.target is previous target element.
  this.classList.remove('over');
}
},{}],"modules/dropBox/dropBox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropBox = dropBox;
var total = 0;

function dropBox() {
  total++;
  var dragDropBox = document.createElement('div');
  var dropGridDiv = document.querySelector('.drop-grid');
  dragDropBox.setAttribute('class', 'drop-cell');
  dragDropBox.setAttribute('id', total);
  dragDropBox.setAttribute('draggable', 'true');
  dragDropBox.getAttribute('class', 'drop-cell');
  dragDropBox.getAttribute('draggable', 'true');
  dragDropBox.getAttribute('id', total);
  dropGridDiv.appendChild(dragDropBox);
  var dragDropHeader = document.createElement('header');
  dragDropHeader.setAttribute('id', total);
  dragDropHeader.setAttribute('contenteditable', 'true');
  dragDropHeader.setAttribute('draggable', 'true');
  dragDropHeader.getAttribute('contenteditable', 'true');
  dragDropHeader.getAttribute('draggable', 'true');
  dragDropHeader.getAttribute('id', total);
  dragDropBox.appendChild(dragDropHeader);
  var headerList = document.querySelectorAll('header');

  for (var i = 0; i < headerList.length; i++) {
    headerList[i].innerHTML = "Header ".concat(i + 1);
  }

  var editablePara = document.createElement('p');
  editablePara.setAttribute('contenteditable', 'true');
  editablePara.setAttribute('draggable', 'true');
  editablePara.setAttribute('id', total);
  editablePara.setAttribute('class', 'content');
  editablePara.getAttribute('contenteditable', 'true');
  editablePara.getAttribute('class', 'content');
  editablePara.getAttribute('id', total);
  dragDropBox.appendChild(editablePara);
  var paraList = document.querySelectorAll('p');

  for (var _i = 0; _i < paraList.length; _i++) {
    paraList[_i].innerHTML = "Content ".concat(_i + 1);
  }

  var dragDropFooter = document.createElement('footer');
  dragDropFooter.setAttribute('id', total);
  dragDropFooter.setAttribute('class', 'drag-footer');
  dragDropFooter.setAttribute('draggable', 'true');
  dragDropFooter.setAttribute('contenteditable', 'true');
  dragDropFooter.getAttribute('contenteditable', 'true');
  dragDropFooter.getAttribute('draggable', 'true');
  dragDropFooter.getAttribute('class', 'drag-footer');
  dragDropBox.appendChild(dragDropFooter);
  var footerList = document.querySelectorAll('.drop-cell footer');

  for (var _i2 = 0; _i2 < footerList.length; _i2++) {
    footerList[_i2].innerHTML = "Footer ".concat(_i2 + 1);
  }
}
},{}],"modules/utils/helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = reset;

function reset() {
  window.location.reload(true);
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _dragDrop = require("./modules/dragDrop/dragDrop");

var _dropBox = require("./modules/dropBox/dropBox");

var _helpers = require("./modules/utils/helpers");

require("./styles.scss");

/* all event listeners related to drag and drop. have to be on the document because the dragDropBoxes are being creted dynamically and therefore don't initially exist in the DOM */
document.addEventListener('dragstart', _dragDrop.handleDragStart, false);
document.addEventListener('dragenter', _dragDrop.handleDragEnter, false);
document.addEventListener('dragover', _dragDrop.handleDragOver, false);
document.addEventListener('dragleave', _dragDrop.handleDragLeave, false);
document.addEventListener('drop', _dragDrop.handleDrop, false);
document.addEventListener('dragend', _dragDrop.handleDragEnd, false); // addBox button for creating a new dragDropBox

var addBox = document.getElementById('add-box');
addBox.addEventListener('click', _dropBox.dropBox, false); // reset button to clear everything

var submitBtn = document.querySelector('.reset');
submitBtn.addEventListener('click', _helpers.reset, false);
},{"./modules/dragDrop/dragDrop":"modules/dragDrop/dragDrop.js","./modules/dropBox/dropBox":"modules/dropBox/dropBox.js","./modules/utils/helpers":"modules/utils/helpers.js","./styles.scss":"styles.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60861" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.map