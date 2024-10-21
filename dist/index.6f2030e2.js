// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9fffz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c99bce7d6f2030e2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"4Y2qN":[function(require,module,exports) {
var _indexTs = require("../static/index.ts");
var _dataTs = require("./static/data.ts");
const element = document.querySelector("#data-table");
new (0, _indexTs.StaticTable)(element, {
    option: {
        paginations: {
            limit: 15,
            page: 1
        }
    },
    columns: [
        {
            column: "#",
            key: "id",
            className: "w-12 text-center"
        },
        {
            column: "Name",
            key: "name",
            className: "w-1/2",
            sort: true
        },
        {
            column: "Departement",
            key: "departement",
            sort: true
        },
        {
            column: {
                th: "custom",
                td: (data)=>{
                    return `custom`;
                }
            },
            className: "w-fit py-1",
            sort: true
        }
    ],
    data: (0, _dataTs.data)
});

},{"../static/index.ts":"erPKl","./static/data.ts":"l0d63"}],"erPKl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StaticTable", ()=>StaticTable);
var _responseTs = require("../libs/response.ts");
var _tailwindMerge = require("tailwind-merge");
var _paginationTs = require("../libs/pagination.ts");
var _tableTs = require("../libs/table.ts");
const defaultOptionsClass = {
    thead: {
        tr: "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        th: "h-10 px-2 text-sm text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
    },
    tbody: {
        tr: "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        td: "p-2 text-sm align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
    }
};
class StaticTable extends (0, _tableTs.Table) {
    static{
        this.theadColumns = [];
    }
    constructor(element, params){
        super(element);
        this.useStaticData = (params)=>{
            // TODO: Apply Table Header
            this.loadingUI();
            /** Generate Pagination from data */ const searchParams = new URLSearchParams(window.location.search);
            //? case: Searched Data
            let items = searchParams.has("search") ? Array.from(params).filter((data)=>{
                return Object.keys(data).some((key)=>{
                    return data[key].toString().toLowerCase().includes(searchParams.get("search")?.toLowerCase() || "");
                });
            }) : params;
            const options = {
                //? Case: Default Params
                limit: "10",
                page: "1",
                sort: "asc",
                search: "",
                //? Case: Pass Params from Options
                ...this.options?.option?.paginations,
                //? Case: Last Updated URL Search Params
                ...Object.fromEntries(searchParams)
            };
            const data = (0, _responseTs.Response).success(items, items.length, options);
            /**
         * Set Data to Global
         */ this.data = data.result;
            this.pagination = data.pagination;
            this.init();
        };
        this.loadingUI = ()=>{
            // TODO: Apply Table Header
            this.renderThead();
            //? Generate Loading Rows
            const rows = Array.from({
                length: 10
            }).map((_, index)=>{
                return `<tr class="${defaultOptionsClass.tbody.tr}">
                    ${Array.from({
                    length: this.theadColumns.length
                }).map((_, i)=>{
                    return `
                            <td colspan="" class="p-2.5 py-4 text-xs text-center">
                                <div class="${i === 0 ? "bg-primary/20" : "bg-foreground/10"} animate-pulse h-3 rounded-md" style="width: ${Math.floor(Math.random() * 50) + 40}%"> </div>
                            </td>`;
                }).join("")}
                </tr>`;
            }).join("");
            // TODO: Render Loading UI
            return this.getTbody().innerHTML = rows;
        };
        this.renderThead = ()=>{
            const tHead = this.getThead();
            StaticTable.theadColumns = this.theadColumns;
            // TODO: Create Table Rows
            const row = document.createElement("tr");
            tHead.innerHTML = "";
            row.className = (0, _tailwindMerge.twMerge)(defaultOptionsClass.thead.tr, this.options.option?.type === "sticky" ? "sticky" : "normal");
            // TODO: Create Header Cells inside the Header Rows
            const cells = StaticTable.thCells();
            Array.from(cells).forEach((cell)=>row.appendChild(cell));
            return tHead.appendChild(row);
        };
        this.renderTBody = ()=>{
            const tBody = this.getTbody();
            tBody.innerHTML = "";
            StaticTable.theadColumns = this.theadColumns;
            this.data.forEach((data)=>{
                // TODO: Create New Rows
                const row = document.createElement("tr");
                row.className = defaultOptionsClass.tbody.tr;
                row.dataset.state = "unchecked";
                // TODO: Create New Cells inside the Rows
                const cells = StaticTable.cells(data);
                Array.from(cells).forEach((cell)=>row.appendChild(cell));
                tBody.appendChild(row);
            });
            return tBody;
        };
        this.searchItems = ()=>{
            const searchParams = new URLSearchParams(window.location.search);
            const selector = `[data-table-id="search-${this.element.id}"]`;
            const searches = document.querySelectorAll(selector);
            searches.forEach((search)=>{
                // Case: No Search Input Element
                if (!search) return null;
                search.value = searchParams.get("search") || "";
                search.addEventListener("input", (e)=>{
                    e.preventDefault();
                    const element = e.target;
                    searchParams.set("search", element.value);
                    //? Case: Input Reset page to 1
                    searchParams.set("page", "1");
                    // Push New URL than call useStaticData
                    history.pushState(null, "", `${window.location.pathname}?${searchParams.toString()}`);
                    this.useStaticData(this.options.data);
                });
            });
        };
        this.init = ()=>{
            // TODO: Render New Table Header
            this.renderThead();
            // TODO: Render Table Cells
            this.renderTBody();
            // TODO: Render Table page navigation
            const buttonGroups = document.querySelectorAll(`[data-table-id="group-${this.element.id}"]`);
            buttonGroups.forEach((buttonGroup)=>{
                new (0, _paginationTs.PageNavigation)(buttonGroup, {
                    buttons: {
                        items: this.pagination || [],
                        paginations: this.options.option.paginations
                    },
                    //? after click pages will apply new data
                    callback: ()=>this.useStaticData(this.options.data)
                });
            });
            // this.setPage()
            StaticTable.element = this.element;
        };
        StaticTable.options = this.options = params;
        this.theadColumns = this.options.columns || [];
        this.element = this.get();
        this.classNames = defaultOptionsClass;
        // Todo: Get Data
        this.useStaticData(this.options.data);
        this.searchItems();
    }
    static{
        this.thCells = ()=>StaticTable.theadColumns.map((column, i)=>{
                const th = document.createElement("th");
                th.className = (0, _tailwindMerge.twMerge)(defaultOptionsClass.thead.th, column.className);
                // TODO: Display the column name
                if (typeof column.column === "object" && "th" in column.column) // Case: Column is an object with a 'th' property
                th.innerHTML = (column.column.th || "").toString();
                else if (column.sort) // const sortByASC = (`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4"><path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`)
                // const sortByDESC = (`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`)
                th.innerHTML = `
                    <div class="flex items-center space-x-2">
                        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-sm -ml-3 h-8 data-[state=open]:bg-accent" type="button" id="radix-:rc5:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                            <span>${(column.column || "").toString()}</span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4">
                                <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>`;
                else // Case: Column is a string or number
                th.innerHTML = (column.column || "").toString();
                return th;
            });
    }
    static{
        this.cells = (data)=>StaticTable.theadColumns.map((column, i)=>{
                const td = document.createElement("td");
                td.className = (0, _tailwindMerge.twMerge)(defaultOptionsClass.tbody.td, column.className);
                // TODO: Display the cells name
                if (typeof column.column === "object" && typeof column.column.td === "function") // Case: Column is an object with a 'td' or 'td' function property
                td.innerHTML = column.column.td(data) || "";
                else // Case: Column is a string or number
                td.innerHTML = data[column.key] || "";
                return td;
            });
    }
}

},{"../libs/response.ts":"dYcev","tailwind-merge":"6LtbY","../libs/pagination.ts":"8biKC","../libs/table.ts":"AQ5fF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dYcev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Response", ()=>Response);
class Response {
    static{
        this.success = (data, total, request)=>{
            const { page, limit, search, sort, sortBy, isStatic = true } = request || {};
            /**
         *  Merge search params
        */ const currentURL = new URLSearchParams(window.location.search);
            const options = {
                ...request,
                ...Object.fromEntries(currentURL)
            };
            Object.keys(options).forEach((key)=>{
                if (typeof options[key] !== "object") currentURL.set(key, options[key]);
            });
            // history.pushState({}, "", `${window.location.pathname}?${currentURL.toString()}`);
            /**
         * Calulate total pages
        */ const totalPages = Math.ceil(Number(total) / Number(limit || 10));
            const offset = (Number(page) - 1) * Number(limit || 10);
            return {
                status: 200,
                success: true,
                total: total,
                result: isStatic ? data.slice(offset, offset + Number(limit || 10)) : data,
                pagination: {
                    total: total,
                    totalPages: totalPages,
                    currentPage: page,
                    query: {
                        page: page,
                        limit: limit,
                        search: search,
                        sortBy: sortBy,
                        sort: sort
                    },
                    buttons: {
                        /**
                     *  Check Previous button
                    */ prev: {
                            status: Number(page) > 1 ? true : false,
                            url: (()=>{
                                if (Number(page) > 1) currentURL.set("page", (Number(page) - 1).toString());
                                else currentURL.set("page", page.toString());
                                return currentURL.toString();
                            })()
                        },
                        /**
                     *  Generate page list items
                    */ items: this.filterPaginationButtons({
                            totalPages: totalPages,
                            currentPage: Number(page)
                        }),
                        /**
                     *  Check Next button
                    */ next: {
                            status: Number(page) < totalPages ? true : false,
                            url: (()=>{
                                if (Number(page) < totalPages) currentURL.set("page", (Number(page) + 1).toString());
                                else currentURL.set("page", page.toString());
                                return currentURL.toString();
                            })()
                        }
                    }
                }
            };
        };
    }
    static{
        this.filterPaginationButtons = (pagination)=>{
            const currentURL = new URLSearchParams(window.location.search);
            const buttons = [];
            const range = 1; // number of buttons to show before and after the current page
            if (pagination.totalPages <= range * 2 + 1) // if total pages is less than or equal to 7, show all buttons
            for(let i = 1; i <= pagination.totalPages; i++)buttons.push({
                label: `${i}`,
                url: (()=>{
                    currentURL.set("page", i.toString());
                    return currentURL.toString();
                })(),
                active: i === pagination.currentPage
            });
            else {
                // if total pages is greater than 7, show only a subset of buttons
                const start = Math.max(1, pagination.currentPage - range);
                const end = Math.min(pagination.totalPages, pagination.currentPage + range);
                if (start > 2) {
                    buttons.push({
                        label: `1`,
                        url: (()=>{
                            currentURL.set("page", "1");
                            return currentURL.toString();
                        })(),
                        active: false
                    });
                    if (start > 3) buttons.push({
                        label: `...`,
                        url: `#`,
                        active: false
                    });
                }
                for(let i = start; i <= end; i++)buttons.push({
                    label: `${i}`,
                    url: (()=>{
                        currentURL.set("page", i.toString());
                        return currentURL.toString();
                    })(),
                    active: i === pagination.currentPage
                });
                if (end < pagination.totalPages - 1) {
                    if (end < pagination.totalPages - 2) buttons.push({
                        label: `...`,
                        url: `#`,
                        active: false
                    });
                    buttons.push({
                        label: `${pagination.totalPages}`,
                        url: (()=>{
                            currentURL.set("page", pagination.totalPages.toString());
                            return currentURL.toString();
                        })(),
                        active: false
                    });
                }
            }
            return buttons;
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6LtbY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const CLASS_PART_SEPARATOR = "-";
const createClassGroupUtils = (config)=>{
    const classMap = createClassMap(config);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
    const getClassGroupId = (className)=>{
        const classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
        if (classParts[0] === "" && classParts.length !== 1) classParts.shift();
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier)=>{
        const conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) return [
            ...conflicts,
            ...conflictingClassGroupModifiers[classGroupId]
        ];
        return conflicts;
    };
    return {
        getClassGroupId,
        getConflictingClassGroupIds
    };
};
const getGroupRecursive = (classParts, classPartObject)=>{
    if (classParts.length === 0) return classPartObject.classGroupId;
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
    if (classGroupFromNextClassPart) return classGroupFromNextClassPart;
    if (classPartObject.validators.length === 0) return undefined;
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return classPartObject.validators.find(({ validator })=>validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className)=>{
    if (arbitraryPropertyRegex.test(className)) {
        const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
        const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(":"));
        if (property) // I use two dots here because one dot is used as prefix for class groups in plugins
        return "arbitrary.." + property;
    }
};
/**
 * Exported for testing only
 */ const createClassMap = (config)=>{
    const { theme, prefix } = config;
    const classMap = {
        nextPart: new Map(),
        validators: []
    };
    const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(([classGroupId, classGroup])=>{
        processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme)=>{
    classGroup.forEach((classDefinition)=>{
        if (typeof classDefinition === "string") {
            const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
            classPartObjectToEdit.classGroupId = classGroupId;
            return;
        }
        if (typeof classDefinition === "function") {
            if (isThemeGetter(classDefinition)) {
                processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
                return;
            }
            classPartObject.validators.push({
                validator: classDefinition,
                classGroupId
            });
            return;
        }
        Object.entries(classDefinition).forEach(([key, classGroup])=>{
            processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
        });
    });
};
const getPart = (classPartObject, path)=>{
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart)=>{
        if (!currentClassPartObject.nextPart.has(pathPart)) currentClassPartObject.nextPart.set(pathPart, {
            nextPart: new Map(),
            validators: []
        });
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
};
const isThemeGetter = (func)=>func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix)=>{
    if (!prefix) return classGroupEntries;
    return classGroupEntries.map(([classGroupId, classGroup])=>{
        const prefixedClassGroup = classGroup.map((classDefinition)=>{
            if (typeof classDefinition === "string") return prefix + classDefinition;
            if (typeof classDefinition === "object") return Object.fromEntries(Object.entries(classDefinition).map(([key, value])=>[
                    prefix + key,
                    value
                ]));
            return classDefinition;
        });
        return [
            classGroupId,
            prefixedClassGroup
        ];
    });
};
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = (maxCacheSize)=>{
    if (maxCacheSize < 1) return {
        get: ()=>undefined,
        set: ()=>{}
    };
    let cacheSize = 0;
    let cache = new Map();
    let previousCache = new Map();
    const update = (key, value)=>{
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = new Map();
        }
    };
    return {
        get (key) {
            let value = cache.get(key);
            if (value !== undefined) return value;
            if ((value = previousCache.get(key)) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set (key, value) {
            if (cache.has(key)) cache.set(key, value);
            else update(key, value);
        }
    };
};
const IMPORTANT_MODIFIER = "!";
const createParseClassName = (config)=>{
    const { separator, experimentalParseClassName } = config;
    const isSeparatorSingleCharacter = separator.length === 1;
    const firstSeparatorCharacter = separator[0];
    const separatorLength = separator.length;
    // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
    const parseClassName = (className)=>{
        const modifiers = [];
        let bracketDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        for(let index = 0; index < className.length; index++){
            let currentCharacter = className[index];
            if (bracketDepth === 0) {
                if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + separatorLength;
                    continue;
                }
                if (currentCharacter === "/") {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === "[") bracketDepth++;
            else if (currentCharacter === "]") bracketDepth--;
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
        const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return {
            modifiers,
            hasImportantModifier,
            baseClassName,
            maybePostfixModifierPosition
        };
    };
    if (experimentalParseClassName) return (className)=>experimentalParseClassName({
            className,
            parseClassName
        });
    return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ const sortModifiers = (modifiers)=>{
    if (modifiers.length <= 1) return modifiers;
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier)=>{
        const isArbitraryVariant = modifier[0] === "[";
        if (isArbitraryVariant) {
            sortedModifiers.push(...unsortedModifiers.sort(), modifier);
            unsortedModifiers = [];
        } else unsortedModifiers.push(modifier);
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
};
const createConfigUtils = (config)=>({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        ...createClassGroupUtils(config)
    });
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils)=>{
    const { parseClassName, getClassGroupId, getConflictingClassGroupIds } = configUtils;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = "";
    for(let index = classNames.length - 1; index >= 0; index -= 1){
        const originalClassName = classNames[index];
        const { modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
        let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? " " + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? " " + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        const variantModifier = sortModifiers(modifiers).join(":");
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.includes(classId)) continue;
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(let i = 0; i < conflictGroups.length; ++i){
            const group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        // Tailwind class not in conflict
        result = originalClassName + (result.length > 0 ? " " + result : result);
    }
    return result;
};
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ function twJoin() {
    let index = 0;
    let argument;
    let resolvedValue;
    let string = "";
    while(index < arguments.length){
        if (argument = arguments[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += " ");
                string += resolvedValue;
            }
        }
    }
    return string;
}
const toValue = (mix)=>{
    if (typeof mix === "string") return mix;
    let resolvedValue;
    let string = "";
    for(let k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += " ");
                string += resolvedValue;
            }
        }
    }
    return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent)=>createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
        const cachedResult = cacheGet(classList);
        if (cachedResult) return cachedResult;
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    }
    return function callTailwindMerge() {
        return functionToCall(twJoin.apply(null, arguments));
    };
}
const fromTheme = (key)=>{
    const themeGetter = (theme)=>theme[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/ new Set([
    "px",
    "full",
    "screen"
]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = (value)=>isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = (value)=>getIsArbitraryValue(value, "length", isLengthOnly);
const isNumber = (value)=>Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = (value)=>getIsArbitraryValue(value, "number", isNumber);
const isInteger = (value)=>Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value)=>value.endsWith("%") && isNumber(value.slice(0, -1));
const isArbitraryValue = (value)=>arbitraryValueRegex.test(value);
const isTshirtSize = (value)=>tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/ new Set([
    "length",
    "size",
    "percentage"
]);
const isArbitrarySize = (value)=>getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = (value)=>getIsArbitraryValue(value, "position", isNever);
const imageLabels = /*#__PURE__*/ new Set([
    "image",
    "url"
]);
const isArbitraryImage = (value)=>getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = (value)=>getIsArbitraryValue(value, "", isShadow);
const isAny = ()=>true;
const getIsArbitraryValue = (value, label, testValue)=>{
    const result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) return typeof label === "string" ? result[1] === label : label.has(result[1]);
        return testValue(result[2]);
    }
    return false;
};
const isLengthOnly = (value)=>// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = ()=>false;
const isShadow = (value)=>shadowRegex.test(value);
const isImage = (value)=>imageRegex.test(value);
const validators = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    isAny,
    isArbitraryImage,
    isArbitraryLength,
    isArbitraryNumber,
    isArbitraryPosition,
    isArbitraryShadow,
    isArbitrarySize,
    isArbitraryValue,
    isInteger,
    isLength,
    isNumber,
    isPercent,
    isTshirtSize
}, Symbol.toStringTag, {
    value: "Module"
});
const getDefaultConfig = ()=>{
    const colors = fromTheme("colors");
    const spacing = fromTheme("spacing");
    const blur = fromTheme("blur");
    const brightness = fromTheme("brightness");
    const borderColor = fromTheme("borderColor");
    const borderRadius = fromTheme("borderRadius");
    const borderSpacing = fromTheme("borderSpacing");
    const borderWidth = fromTheme("borderWidth");
    const contrast = fromTheme("contrast");
    const grayscale = fromTheme("grayscale");
    const hueRotate = fromTheme("hueRotate");
    const invert = fromTheme("invert");
    const gap = fromTheme("gap");
    const gradientColorStops = fromTheme("gradientColorStops");
    const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
    const inset = fromTheme("inset");
    const margin = fromTheme("margin");
    const opacity = fromTheme("opacity");
    const padding = fromTheme("padding");
    const saturate = fromTheme("saturate");
    const scale = fromTheme("scale");
    const sepia = fromTheme("sepia");
    const skew = fromTheme("skew");
    const space = fromTheme("space");
    const translate = fromTheme("translate");
    const getOverscroll = ()=>[
            "auto",
            "contain",
            "none"
        ];
    const getOverflow = ()=>[
            "auto",
            "hidden",
            "clip",
            "visible",
            "scroll"
        ];
    const getSpacingWithAutoAndArbitrary = ()=>[
            "auto",
            isArbitraryValue,
            spacing
        ];
    const getSpacingWithArbitrary = ()=>[
            isArbitraryValue,
            spacing
        ];
    const getLengthWithEmptyAndArbitrary = ()=>[
            "",
            isLength,
            isArbitraryLength
        ];
    const getNumberWithAutoAndArbitrary = ()=>[
            "auto",
            isNumber,
            isArbitraryValue
        ];
    const getPositions = ()=>[
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top"
        ];
    const getLineStyles = ()=>[
            "solid",
            "dashed",
            "dotted",
            "double",
            "none"
        ];
    const getBlendModes = ()=>[
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity"
        ];
    const getAlign = ()=>[
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch"
        ];
    const getZeroAndEmpty = ()=>[
            "",
            "0",
            isArbitraryValue
        ];
    const getBreaks = ()=>[
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column"
        ];
    const getNumberAndArbitrary = ()=>[
            isNumber,
            isArbitraryValue
        ];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [
                isAny
            ],
            spacing: [
                isLength,
                isArbitraryLength
            ],
            blur: [
                "none",
                "",
                isTshirtSize,
                isArbitraryValue
            ],
            brightness: getNumberAndArbitrary(),
            borderColor: [
                colors
            ],
            borderRadius: [
                "none",
                "",
                "full",
                isTshirtSize,
                isArbitraryValue
            ],
            borderSpacing: getSpacingWithArbitrary(),
            borderWidth: getLengthWithEmptyAndArbitrary(),
            contrast: getNumberAndArbitrary(),
            grayscale: getZeroAndEmpty(),
            hueRotate: getNumberAndArbitrary(),
            invert: getZeroAndEmpty(),
            gap: getSpacingWithArbitrary(),
            gradientColorStops: [
                colors
            ],
            gradientColorStopPositions: [
                isPercent,
                isArbitraryLength
            ],
            inset: getSpacingWithAutoAndArbitrary(),
            margin: getSpacingWithAutoAndArbitrary(),
            opacity: getNumberAndArbitrary(),
            padding: getSpacingWithArbitrary(),
            saturate: getNumberAndArbitrary(),
            scale: getNumberAndArbitrary(),
            sepia: getZeroAndEmpty(),
            skew: getNumberAndArbitrary(),
            space: getSpacingWithArbitrary(),
            translate: getSpacingWithArbitrary()
        },
        classGroups: {
            // Layout
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        "auto",
                        "square",
                        "video",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */ container: [
                "container"
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ "break-after": [
                {
                    "break-after": getBreaks()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ "break-before": [
                {
                    "break-before": getBreaks()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ "break-inside": [
                {
                    "break-inside": [
                        "auto",
                        "avoid",
                        "avoid-page",
                        "avoid-column"
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ "box-decoration": [
                {
                    "box-decoration": [
                        "slice",
                        "clone"
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        "border",
                        "content"
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden"
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        "right",
                        "left",
                        "none",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        "left",
                        "right",
                        "both",
                        "none",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                "isolate",
                "isolation-auto"
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ "object-fit": [
                {
                    object: [
                        "contain",
                        "cover",
                        "fill",
                        "none",
                        "scale-down"
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ "object-position": [
                {
                    object: [
                        ...getPositions(),
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: getOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ "overflow-x": [
                {
                    "overflow-x": getOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ "overflow-y": [
                {
                    "overflow-y": getOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ "overscroll-x": [
                {
                    "overscroll-x": getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ "overscroll-y": [
                {
                    "overscroll-y": getOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                "static",
                "fixed",
                "absolute",
                "relative",
                "sticky"
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: [
                        inset
                    ]
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ "inset-x": [
                {
                    "inset-x": [
                        inset
                    ]
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ "inset-y": [
                {
                    "inset-y": [
                        inset
                    ]
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: [
                        inset
                    ]
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: [
                        inset
                    ]
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: [
                        inset
                    ]
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: [
                        inset
                    ]
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: [
                        inset
                    ]
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: [
                        inset
                    ]
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                "visible",
                "invisible",
                "collapse"
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        "auto",
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            // Flexbox and Grid
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: getSpacingWithAutoAndArbitrary()
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ "flex-direction": [
                {
                    flex: [
                        "row",
                        "row-reverse",
                        "col",
                        "col-reverse"
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ "flex-wrap": [
                {
                    flex: [
                        "wrap",
                        "wrap-reverse",
                        "nowrap"
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        "1",
                        "auto",
                        "initial",
                        "none",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: getZeroAndEmpty()
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: getZeroAndEmpty()
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        "first",
                        "last",
                        "none",
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ "grid-cols": [
                {
                    "grid-cols": [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-start-end": [
                {
                    col: [
                        "auto",
                        {
                            span: [
                                "full",
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-start": [
                {
                    "col-start": getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-end": [
                {
                    "col-end": getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ "grid-rows": [
                {
                    "grid-rows": [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-start-end": [
                {
                    row: [
                        "auto",
                        {
                            span: [
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-start": [
                {
                    "row-start": getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-end": [
                {
                    "row-end": getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ "grid-flow": [
                {
                    "grid-flow": [
                        "row",
                        "col",
                        "dense",
                        "row-dense",
                        "col-dense"
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ "auto-cols": [
                {
                    "auto-cols": [
                        "auto",
                        "min",
                        "max",
                        "fr",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ "auto-rows": [
                {
                    "auto-rows": [
                        "auto",
                        "min",
                        "max",
                        "fr",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: [
                        gap
                    ]
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ "gap-x": [
                {
                    "gap-x": [
                        gap
                    ]
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ "gap-y": [
                {
                    "gap-y": [
                        gap
                    ]
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ "justify-content": [
                {
                    justify: [
                        "normal",
                        ...getAlign()
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ "justify-items": [
                {
                    "justify-items": [
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ "justify-self": [
                {
                    "justify-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ "align-content": [
                {
                    content: [
                        "normal",
                        ...getAlign(),
                        "baseline"
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ "align-items": [
                {
                    items: [
                        "start",
                        "end",
                        "center",
                        "baseline",
                        "stretch"
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ "align-self": [
                {
                    self: [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch",
                        "baseline"
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ "place-content": [
                {
                    "place-content": [
                        ...getAlign(),
                        "baseline"
                    ]
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ "place-items": [
                {
                    "place-items": [
                        "start",
                        "end",
                        "center",
                        "baseline",
                        "stretch"
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ "place-self": [
                {
                    "place-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: [
                        padding
                    ]
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: [
                        padding
                    ]
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: [
                        padding
                    ]
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: [
                        margin
                    ]
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: [
                        margin
                    ]
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: [
                        margin
                    ]
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */ "space-x": [
                {
                    "space-x": [
                        space
                    ]
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */ "space-x-reverse": [
                "space-x-reverse"
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */ "space-y": [
                {
                    "space-y": [
                        space
                    ]
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */ "space-y-reverse": [
                "space-y-reverse"
            ],
            // Sizing
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        "auto",
                        "min",
                        "max",
                        "fit",
                        "svw",
                        "lvw",
                        "dvw",
                        isArbitraryValue,
                        spacing
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ "min-w": [
                {
                    "min-w": [
                        isArbitraryValue,
                        spacing,
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ "max-w": [
                {
                    "max-w": [
                        isArbitraryValue,
                        spacing,
                        "none",
                        "full",
                        "min",
                        "max",
                        "fit",
                        "prose",
                        {
                            screen: [
                                isTshirtSize
                            ]
                        },
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        isArbitraryValue,
                        spacing,
                        "auto",
                        "min",
                        "max",
                        "fit",
                        "svh",
                        "lvh",
                        "dvh"
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ "min-h": [
                {
                    "min-h": [
                        isArbitraryValue,
                        spacing,
                        "min",
                        "max",
                        "fit",
                        "svh",
                        "lvh",
                        "dvh"
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ "max-h": [
                {
                    "max-h": [
                        isArbitraryValue,
                        spacing,
                        "min",
                        "max",
                        "fit",
                        "svh",
                        "lvh",
                        "dvh"
                    ]
                }
            ],
            /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */ size: [
                {
                    size: [
                        isArbitraryValue,
                        spacing,
                        "auto",
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            // Typography
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ "font-size": [
                {
                    text: [
                        "base",
                        isTshirtSize,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ "font-smoothing": [
                "antialiased",
                "subpixel-antialiased"
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ "font-style": [
                "italic",
                "not-italic"
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ "font-weight": [
                {
                    font: [
                        "thin",
                        "extralight",
                        "light",
                        "normal",
                        "medium",
                        "semibold",
                        "bold",
                        "extrabold",
                        "black",
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ "font-family": [
                {
                    font: [
                        isAny
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-normal": [
                "normal-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-ordinal": [
                "ordinal"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-slashed-zero": [
                "slashed-zero"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-figure": [
                "lining-nums",
                "oldstyle-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-spacing": [
                "proportional-nums",
                "tabular-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-fraction": [
                "diagonal-fractions",
                "stacked-fractons"
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        "tighter",
                        "tight",
                        "normal",
                        "wide",
                        "wider",
                        "widest",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ "line-clamp": [
                {
                    "line-clamp": [
                        "none",
                        isNumber,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        "none",
                        "tight",
                        "snug",
                        "normal",
                        "relaxed",
                        "loose",
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ "list-image": [
                {
                    "list-image": [
                        "none",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ "list-style-type": [
                {
                    list: [
                        "none",
                        "disc",
                        "decimal",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ "list-style-position": [
                {
                    list: [
                        "inside",
                        "outside"
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */ "placeholder-color": [
                {
                    placeholder: [
                        colors
                    ]
                }
            ],
            /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */ "placeholder-opacity": [
                {
                    "placeholder-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ "text-alignment": [
                {
                    text: [
                        "left",
                        "center",
                        "right",
                        "justify",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ "text-color": [
                {
                    text: [
                        colors
                    ]
                }
            ],
            /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */ "text-opacity": [
                {
                    "text-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline"
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ "text-decoration-style": [
                {
                    decoration: [
                        ...getLineStyles(),
                        "wavy"
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ "text-decoration-thickness": [
                {
                    decoration: [
                        "auto",
                        "from-font",
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ "underline-offset": [
                {
                    "underline-offset": [
                        "auto",
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ "text-decoration-color": [
                {
                    decoration: [
                        colors
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case"
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ "text-overflow": [
                "truncate",
                "text-ellipsis",
                "text-clip"
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ "text-wrap": [
                {
                    text: [
                        "wrap",
                        "nowrap",
                        "balance",
                        "pretty"
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: getSpacingWithArbitrary()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ "vertical-align": [
                {
                    align: [
                        "baseline",
                        "top",
                        "middle",
                        "bottom",
                        "text-top",
                        "text-bottom",
                        "sub",
                        "super",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        "normal",
                        "nowrap",
                        "pre",
                        "pre-line",
                        "pre-wrap",
                        "break-spaces"
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        "normal",
                        "words",
                        "all",
                        "keep"
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        "none",
                        "manual",
                        "auto"
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        "none",
                        isArbitraryValue
                    ]
                }
            ],
            // Backgrounds
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ "bg-attachment": [
                {
                    bg: [
                        "fixed",
                        "local",
                        "scroll"
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ "bg-clip": [
                {
                    "bg-clip": [
                        "border",
                        "padding",
                        "content",
                        "text"
                    ]
                }
            ],
            /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */ "bg-opacity": [
                {
                    "bg-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ "bg-origin": [
                {
                    "bg-origin": [
                        "border",
                        "padding",
                        "content"
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ "bg-position": [
                {
                    bg: [
                        ...getPositions(),
                        isArbitraryPosition
                    ]
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ "bg-repeat": [
                {
                    bg: [
                        "no-repeat",
                        {
                            repeat: [
                                "",
                                "x",
                                "y",
                                "round",
                                "space"
                            ]
                        }
                    ]
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ "bg-size": [
                {
                    bg: [
                        "auto",
                        "cover",
                        "contain",
                        isArbitrarySize
                    ]
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ "bg-image": [
                {
                    bg: [
                        "none",
                        {
                            "gradient-to": [
                                "t",
                                "tr",
                                "r",
                                "br",
                                "b",
                                "bl",
                                "l",
                                "tl"
                            ]
                        },
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ "bg-color": [
                {
                    bg: [
                        colors
                    ]
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-from-pos": [
                {
                    from: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-via-pos": [
                {
                    via: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-to-pos": [
                {
                    to: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-from": [
                {
                    from: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-via": [
                {
                    via: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-to": [
                {
                    to: [
                        gradientColorStops
                    ]
                }
            ],
            // Borders
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-s": [
                {
                    "rounded-s": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-e": [
                {
                    "rounded-e": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-t": [
                {
                    "rounded-t": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-r": [
                {
                    "rounded-r": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-b": [
                {
                    "rounded-b": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-l": [
                {
                    "rounded-l": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-ss": [
                {
                    "rounded-ss": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-se": [
                {
                    "rounded-se": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-ee": [
                {
                    "rounded-ee": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-es": [
                {
                    "rounded-es": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-tl": [
                {
                    "rounded-tl": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-tr": [
                {
                    "rounded-tr": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-br": [
                {
                    "rounded-br": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-bl": [
                {
                    "rounded-bl": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w": [
                {
                    border: [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-x": [
                {
                    "border-x": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-y": [
                {
                    "border-y": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-s": [
                {
                    "border-s": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-e": [
                {
                    "border-e": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-t": [
                {
                    "border-t": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-r": [
                {
                    "border-r": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-b": [
                {
                    "border-b": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-l": [
                {
                    "border-l": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */ "border-opacity": [
                {
                    "border-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ "border-style": [
                {
                    border: [
                        ...getLineStyles(),
                        "hidden"
                    ]
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */ "divide-x": [
                {
                    "divide-x": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ "divide-x-reverse": [
                "divide-x-reverse"
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */ "divide-y": [
                {
                    "divide-y": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ "divide-y-reverse": [
                "divide-y-reverse"
            ],
            /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */ "divide-opacity": [
                {
                    "divide-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */ "divide-style": [
                {
                    divide: getLineStyles()
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color": [
                {
                    border: [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-x": [
                {
                    "border-x": [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-y": [
                {
                    "border-y": [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-s": [
                {
                    "border-s": [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-e": [
                {
                    "border-e": [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-t": [
                {
                    "border-t": [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-r": [
                {
                    "border-r": [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-b": [
                {
                    "border-b": [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-l": [
                {
                    "border-l": [
                        borderColor
                    ]
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ "divide-color": [
                {
                    divide: [
                        borderColor
                    ]
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ "outline-style": [
                {
                    outline: [
                        "",
                        ...getLineStyles()
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ "outline-offset": [
                {
                    "outline-offset": [
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ "outline-w": [
                {
                    outline: [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ "outline-color": [
                {
                    outline: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */ "ring-w": [
                {
                    ring: getLengthWithEmptyAndArbitrary()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */ "ring-w-inset": [
                "ring-inset"
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */ "ring-color": [
                {
                    ring: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */ "ring-opacity": [
                {
                    "ring-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */ "ring-offset-w": [
                {
                    "ring-offset": [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */ "ring-offset-color": [
                {
                    "ring-offset": [
                        colors
                    ]
                }
            ],
            // Effects
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        "",
                        "inner",
                        "none",
                        isTshirtSize,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */ "shadow-color": [
                {
                    shadow: [
                        isAny
                    ]
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        opacity
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ "mix-blend": [
                {
                    "mix-blend": [
                        ...getBlendModes(),
                        "plus-lighter",
                        "plus-darker"
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ "bg-blend": [
                {
                    "bg-blend": getBlendModes()
                }
            ],
            // Filters
            /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        "",
                        "none"
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: [
                        blur
                    ]
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        brightness
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        contrast
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ "drop-shadow": [
                {
                    "drop-shadow": [
                        "",
                        "none",
                        isTshirtSize,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        grayscale
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ "hue-rotate": [
                {
                    "hue-rotate": [
                        hueRotate
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        invert
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        saturate
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        sepia
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ "backdrop-filter": [
                {
                    "backdrop-filter": [
                        "",
                        "none"
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ "backdrop-blur": [
                {
                    "backdrop-blur": [
                        blur
                    ]
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ "backdrop-brightness": [
                {
                    "backdrop-brightness": [
                        brightness
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ "backdrop-contrast": [
                {
                    "backdrop-contrast": [
                        contrast
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ "backdrop-grayscale": [
                {
                    "backdrop-grayscale": [
                        grayscale
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ "backdrop-hue-rotate": [
                {
                    "backdrop-hue-rotate": [
                        hueRotate
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ "backdrop-invert": [
                {
                    "backdrop-invert": [
                        invert
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ "backdrop-opacity": [
                {
                    "backdrop-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ "backdrop-saturate": [
                {
                    "backdrop-saturate": [
                        saturate
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ "backdrop-sepia": [
                {
                    "backdrop-sepia": [
                        sepia
                    ]
                }
            ],
            // Tables
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ "border-collapse": [
                {
                    border: [
                        "collapse",
                        "separate"
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing": [
                {
                    "border-spacing": [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing-x": [
                {
                    "border-spacing-x": [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing-y": [
                {
                    "border-spacing-y": [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ "table-layout": [
                {
                    table: [
                        "auto",
                        "fixed"
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        "top",
                        "bottom"
                    ]
                }
            ],
            // Transitions and Animation
            /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        "none",
                        "all",
                        "",
                        "colors",
                        "opacity",
                        "shadow",
                        "transform",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: getNumberAndArbitrary()
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        "linear",
                        "in",
                        "out",
                        "in-out",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: getNumberAndArbitrary()
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        "none",
                        "spin",
                        "ping",
                        "pulse",
                        "bounce",
                        isArbitraryValue
                    ]
                }
            ],
            // Transforms
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        "",
                        "gpu",
                        "none"
                    ]
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: [
                        scale
                    ]
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ "scale-x": [
                {
                    "scale-x": [
                        scale
                    ]
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ "scale-y": [
                {
                    "scale-y": [
                        scale
                    ]
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: [
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ "translate-x": [
                {
                    "translate-x": [
                        translate
                    ]
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ "translate-y": [
                {
                    "translate-y": [
                        translate
                    ]
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ "skew-x": [
                {
                    "skew-x": [
                        skew
                    ]
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ "skew-y": [
                {
                    "skew-y": [
                        skew
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ "transform-origin": [
                {
                    origin: [
                        "center",
                        "top",
                        "top-right",
                        "right",
                        "bottom-right",
                        "bottom",
                        "bottom-left",
                        "left",
                        "top-left",
                        isArbitraryValue
                    ]
                }
            ],
            // Interactivity
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: [
                        "auto",
                        colors
                    ]
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        "none",
                        "auto"
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        "auto",
                        "default",
                        "pointer",
                        "wait",
                        "text",
                        "move",
                        "help",
                        "not-allowed",
                        "none",
                        "context-menu",
                        "progress",
                        "cell",
                        "crosshair",
                        "vertical-text",
                        "alias",
                        "copy",
                        "no-drop",
                        "grab",
                        "grabbing",
                        "all-scroll",
                        "col-resize",
                        "row-resize",
                        "n-resize",
                        "e-resize",
                        "s-resize",
                        "w-resize",
                        "ne-resize",
                        "nw-resize",
                        "se-resize",
                        "sw-resize",
                        "ew-resize",
                        "ns-resize",
                        "nesw-resize",
                        "nwse-resize",
                        "zoom-in",
                        "zoom-out",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ "caret-color": [
                {
                    caret: [
                        colors
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ "pointer-events": [
                {
                    "pointer-events": [
                        "none",
                        "auto"
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        "none",
                        "y",
                        "x",
                        ""
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ "scroll-behavior": [
                {
                    scroll: [
                        "auto",
                        "smooth"
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-m": [
                {
                    "scroll-m": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mx": [
                {
                    "scroll-mx": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-my": [
                {
                    "scroll-my": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-ms": [
                {
                    "scroll-ms": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-me": [
                {
                    "scroll-me": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mt": [
                {
                    "scroll-mt": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mr": [
                {
                    "scroll-mr": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mb": [
                {
                    "scroll-mb": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-ml": [
                {
                    "scroll-ml": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-p": [
                {
                    "scroll-p": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-px": [
                {
                    "scroll-px": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-py": [
                {
                    "scroll-py": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-ps": [
                {
                    "scroll-ps": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pe": [
                {
                    "scroll-pe": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pt": [
                {
                    "scroll-pt": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pr": [
                {
                    "scroll-pr": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pb": [
                {
                    "scroll-pb": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pl": [
                {
                    "scroll-pl": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ "snap-align": [
                {
                    snap: [
                        "start",
                        "end",
                        "center",
                        "align-none"
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ "snap-stop": [
                {
                    snap: [
                        "normal",
                        "always"
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ "snap-type": [
                {
                    snap: [
                        "none",
                        "x",
                        "y",
                        "both"
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ "snap-strictness": [
                {
                    snap: [
                        "mandatory",
                        "proximity"
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        "auto",
                        "none",
                        "manipulation"
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ "touch-x": [
                {
                    "touch-pan": [
                        "x",
                        "left",
                        "right"
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ "touch-y": [
                {
                    "touch-pan": [
                        "y",
                        "up",
                        "down"
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ "touch-pz": [
                "touch-pinch-zoom"
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        "none",
                        "text",
                        "all",
                        "auto"
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ "will-change": [
                {
                    "will-change": [
                        "auto",
                        "scroll",
                        "contents",
                        "transform",
                        isArbitraryValue
                    ]
                }
            ],
            // SVG
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        colors,
                        "none"
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ "stroke-w": [
                {
                    stroke: [
                        isLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        colors,
                        "none"
                    ]
                }
            ],
            // Accessibility
            /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */ sr: [
                "sr-only",
                "not-sr-only"
            ],
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ "forced-color-adjust": [
                {
                    "forced-color-adjust": [
                        "auto",
                        "none"
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                "overflow-x",
                "overflow-y"
            ],
            overscroll: [
                "overscroll-x",
                "overscroll-y"
            ],
            inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left"
            ],
            "inset-x": [
                "right",
                "left"
            ],
            "inset-y": [
                "top",
                "bottom"
            ],
            flex: [
                "basis",
                "grow",
                "shrink"
            ],
            gap: [
                "gap-x",
                "gap-y"
            ],
            p: [
                "px",
                "py",
                "ps",
                "pe",
                "pt",
                "pr",
                "pb",
                "pl"
            ],
            px: [
                "pr",
                "pl"
            ],
            py: [
                "pt",
                "pb"
            ],
            m: [
                "mx",
                "my",
                "ms",
                "me",
                "mt",
                "mr",
                "mb",
                "ml"
            ],
            mx: [
                "mr",
                "ml"
            ],
            my: [
                "mt",
                "mb"
            ],
            size: [
                "w",
                "h"
            ],
            "font-size": [
                "leading"
            ],
            "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction"
            ],
            "fvn-ordinal": [
                "fvn-normal"
            ],
            "fvn-slashed-zero": [
                "fvn-normal"
            ],
            "fvn-figure": [
                "fvn-normal"
            ],
            "fvn-spacing": [
                "fvn-normal"
            ],
            "fvn-fraction": [
                "fvn-normal"
            ],
            "line-clamp": [
                "display",
                "overflow"
            ],
            rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-s": [
                "rounded-ss",
                "rounded-es"
            ],
            "rounded-e": [
                "rounded-se",
                "rounded-ee"
            ],
            "rounded-t": [
                "rounded-tl",
                "rounded-tr"
            ],
            "rounded-r": [
                "rounded-tr",
                "rounded-br"
            ],
            "rounded-b": [
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-l": [
                "rounded-tl",
                "rounded-bl"
            ],
            "border-spacing": [
                "border-spacing-x",
                "border-spacing-y"
            ],
            "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l"
            ],
            "border-w-x": [
                "border-w-r",
                "border-w-l"
            ],
            "border-w-y": [
                "border-w-t",
                "border-w-b"
            ],
            "border-color": [
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l"
            ],
            "border-color-x": [
                "border-color-r",
                "border-color-l"
            ],
            "border-color-y": [
                "border-color-t",
                "border-color-b"
            ],
            "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml"
            ],
            "scroll-mx": [
                "scroll-mr",
                "scroll-ml"
            ],
            "scroll-my": [
                "scroll-mt",
                "scroll-mb"
            ],
            "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl"
            ],
            "scroll-px": [
                "scroll-pr",
                "scroll-pl"
            ],
            "scroll-py": [
                "scroll-pt",
                "scroll-pb"
            ],
            touch: [
                "touch-x",
                "touch-y",
                "touch-pz"
            ],
            "touch-x": [
                "touch"
            ],
            "touch-y": [
                "touch"
            ],
            "touch-pz": [
                "touch"
            ]
        },
        conflictingClassGroupModifiers: {
            "font-size": [
                "leading"
            ]
        }
    };
};
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */ const mergeConfigs = (baseConfig, { cacheSize, prefix, separator, experimentalParseClassName, extend = {}, override = {} })=>{
    overrideProperty(baseConfig, "cacheSize", cacheSize);
    overrideProperty(baseConfig, "prefix", prefix);
    overrideProperty(baseConfig, "separator", separator);
    overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName);
    for(const configKey in override)overrideConfigProperties(baseConfig[configKey], override[configKey]);
    for(const key in extend)mergeConfigProperties(baseConfig[key], extend[key]);
    return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue)=>{
    if (overrideValue !== undefined) baseObject[overrideKey] = overrideValue;
};
const overrideConfigProperties = (baseObject, overrideObject)=>{
    if (overrideObject) for(const key in overrideObject)overrideProperty(baseObject, key, overrideObject[key]);
};
const mergeConfigProperties = (baseObject, mergeObject)=>{
    if (mergeObject) for(const key in mergeObject){
        const mergeValue = mergeObject[key];
        if (mergeValue !== undefined) baseObject[key] = (baseObject[key] || []).concat(mergeValue);
    }
};
const extendTailwindMerge = (configExtension, ...createConfig)=>typeof configExtension === "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(()=>mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
exports.createTailwindMerge = createTailwindMerge;
exports.extendTailwindMerge = extendTailwindMerge;
exports.fromTheme = fromTheme;
exports.getDefaultConfig = getDefaultConfig;
exports.mergeConfigs = mergeConfigs;
exports.twJoin = twJoin;
exports.twMerge = twMerge;
exports.validators = validators;

},{}],"8biKC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PageNavigation", ()=>PageNavigation);
var _tailwindMerge = require("tailwind-merge");
class PageNavigation {
    constructor(element, options){
        /**
     * ?Create Data and Page information
     *
     * @param currentPage {number}
     * @param totalPages {number}
     * @param limit {number}
     *
     * @example
     * <pagination-group-order data-table-id="info-data-table" class="flex items-center gap-1">
     *      <span class="text-sm"> Showing </span>
     *      <span class="p-1 text-sm">
     *          <span data-show-from="1">1</span>
     *          <span>to</span>
     *          <span data-show-to="10">10</span>
     *      </span>
     *      <span class="text-sm"> of <span data-show-total>0</span> entries </span>
     * </pagination-group-order>
    */ this.showDataInfo = (currentPage, totalPages, limit)=>{
            const selector = `[data-table-id="${this.element.dataset.tableId.replace("group", "info")}"]`;
            const informationElement = document.querySelector(selector);
            const fromItem = Number(currentPage) * Number(limit || 10) - Number(limit || 10) + 1;
            const toItem = Number(currentPage) * Number(limit || 10) <= totalPages ? Number(currentPage) * Number(limit || 10) : totalPages;
            if (!informationElement) return null;
            informationElement.innerHTML = "";
            // TODO: Create 'showing' <span>
            const showing = document.createElement("span");
            showing.className = "text-sm";
            showing.innerHTML = "Showing ";
            informationElement.appendChild(showing);
            // TODO: Create 'showing group' <span>
            const showingGroup = document.createElement("span");
            // TODO: Create 'current page' <span>
            const from = document.createElement("span");
            from.dataset.showFrom = fromItem.toString();
            from.innerHTML = fromItem.toString();
            showingGroup.appendChild(from);
            // TODO: Create 'to' <span>
            const to = document.createElement("span");
            to.innerHTML = " to ";
            showingGroup.appendChild(to);
            // TODO: Create 'total page' <span>
            const total = document.createElement("span");
            total.dataset.showTo = toItem.toString();
            total.innerHTML = toItem.toString();
            showingGroup.appendChild(total);
            showingGroup.className = "text-sm";
            // TODO: Create 'showing' <span>
            const info = document.createElement("span");
            info.className = "text-sm";
            info.innerHTML = `
            <span class="text-sm"> of <span data-show-total>${totalPages}</span> entries </span>
        `;
            informationElement.appendChild(showingGroup);
            return informationElement.appendChild(info);
        };
        /***
     * ?Create Link Navigation Button
     *
     * @example
     * <pagination-group-link data-table-id="data-table" class="...">
     *     <button data-setpage="1" class="..." disabled="" type="button">Previous</button>
     *     ...
     *     <button type="button" data-setpage="1" class="...">1</button>
     *     ...
     *     <button data-setpage="2" class="..." type="button">Next</button>
     * </pagination-group-link>
    */ this.LinkNavigation = (buttons)=>{
            this.element.innerHTML = "";
            // TODO: Create Previous button
            this.element.appendChild(PageNavigation.xButton(buttons.prev, {
                label: this.paginations.prevous.label,
                className: this.paginations.prevous.className
            }));
            // TODO: Create number list of buttons
            buttons.items.forEach((item)=>this.element.appendChild(PageNavigation.itemButton(item)));
            // TODO: Create Next button
            this.element.appendChild(PageNavigation.xButton(buttons.next, {
                label: this.paginations.next.label,
                className: this.paginations.next.className
            }));
        };
        this.init = ()=>{
            const { buttons, currentPage, query } = this.buttons.items;
            // Create Link Navigation Button
            this.LinkNavigation(buttons);
            // Create Showing Data information
            this.showDataInfo(currentPage, this.buttons.items.total, query.limit);
        };
        this.element = element;
        PageNavigation.callback = this.callback = options.callback;
        this.buttons = options.buttons;
        this.paginations = {
            prevous: {
                label: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`
            },
            next: {
                label: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`
            },
            ...this.buttons.paginations
        };
        this.init();
    }
    static{
        this.variants = (className)=>{
            return (0, _tailwindMerge.twMerge)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0", className);
        };
    }
    static{
        /***
     * ?Create Button Numbers
     *
     * @param item {Button}
     *
     * @example
     * <button data-setpage="1" class="..." disabled="" type="button">{label}</button>
    */ this.itemButton = (item)=>{
            const searchParams = new URLSearchParams(window.location.search);
            const button = document.createElement("button");
            button.type = "button";
            button.dataset.setpage = item.label;
            button.disabled = item.label === "...";
            button.className = this.variants(item.active ? "text-primary border-primary" : "");
            button.textContent = item.label;
            button.addEventListener("click", (e)=>{
                e.preventDefault();
                searchParams.set("page", item.label);
                history.pushState(null, "", `${window.location.pathname}?${searchParams.toString()}`);
                this.callback();
            });
            return button;
        };
    }
    static{
        /***
     * ?Create Previous and Next buttons
     *
     * @param item {XButton}
     * @param label {Previous, Next}
     *
     * @example
     * <button type="button" data-setpage="1" class="...">1</button>
    */ this.xButton = (item, options)=>{
            const searchParams = new URLSearchParams(item.url);
            const button = document.createElement("button");
            button.dataset.setpage = searchParams.get("page");
            button.className = this.variants();
            button.disabled = !item.status;
            button.innerHTML = options.label;
            // button.className = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
            button.type = "button";
            button.addEventListener("click", (e)=>{
                e.preventDefault();
                history.pushState(null, "", `${window.location.pathname}?${searchParams.toString()}`);
                this.callback();
            });
            return button;
        };
    }
}

},{"tailwind-merge":"6LtbY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"AQ5fF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Table", ()=>Table);
class Table {
    constructor(element){
        if (element) Table._element = this._element = element;
        return;
    }
    static get() {
        return this._element;
    }
    get() {
        return this._element || Table._element;
    }
    static getThead() {
        return this.get().querySelector("thead");
    }
    getThead() {
        return this.get().querySelector("thead");
    }
    static getTheadRowItems() {
        return this.getThead().querySelectorAll("tr > *");
    }
    getTheadRowItems() {
        return this.getThead().querySelectorAll("tr > *");
    }
    static getTbody() {
        return this.get().querySelector("tbody");
    }
    getTbody() {
        return this.get().querySelector("tbody");
    }
    static getTbodyRows() {
        return this.getTbody().querySelectorAll("tr");
    }
    getTbodyRows() {
        return this.getTbody().querySelectorAll("tr");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l0d63":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "data", ()=>data);
const data = [
    {
        id: "1",
        name: "Logan Lawrence",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "2",
        name: "Danny Ballard",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "3",
        name: "Mitchell Pierce",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "4",
        name: "Mabel Guzman",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "5",
        name: "Samuel Fox",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "6",
        name: "Travis Scott",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "7",
        name: "Jennie Vasquez",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "8",
        name: "Eleanor Holloway",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "9",
        name: "Minerva Campbell",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "10",
        name: "Lillian Fletcher",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "11",
        name: "Luis Stone",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "12",
        name: "Ellen Weber",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "13",
        name: "Todd Norton",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "14",
        name: "Alexander Fuller",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "15",
        name: "Fanny Ortiz",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "16",
        name: "Ollie Robinson",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "17",
        name: "Nora Glover",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "18",
        name: "Melvin Potter",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "19",
        name: "Samuel Floyd",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "20",
        name: "Mary Neal",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "21",
        name: "Alice Wright",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "22",
        name: "Eric Quinn",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "23",
        name: "Aaron Cain",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "24",
        name: "Raymond Flowers",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "25",
        name: "Nathaniel Underwood",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "26",
        name: "Sean Turner",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "27",
        name: "Leona Wade",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "28",
        name: "Addie Chavez",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "29",
        name: "Russell Gardner",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "30",
        name: "Lena Steele",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "31",
        name: "Pearl Lambert",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "32",
        name: "Roxie Cain",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "33",
        name: "Trevor Wolfe",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "34",
        name: "Callie Torres",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "35",
        name: "Lloyd King",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "36",
        name: "Jared Beck",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "37",
        name: "Martin Robinson",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "38",
        name: "Troy Stokes",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "39",
        name: "Seth Austin",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "40",
        name: "Lucy Lawrence",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "41",
        name: "Betty Bell",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "42",
        name: "Gabriel Watts",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "43",
        name: "Bessie Carroll",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "44",
        name: "Russell Craig",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "45",
        name: "Christina Blair",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "46",
        name: "Jon Brock",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "47",
        name: "Lola Watts",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "48",
        name: "Stella Horton",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "49",
        name: "Lela Salazar",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "50",
        name: "Alex Baker",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "51",
        name: "Adelaide Sanchez",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "52",
        name: "Sally Foster",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "53",
        name: "Sophie Frank",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "54",
        name: "Eric Douglas",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "55",
        name: "Lena Baker",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "56",
        name: "Maurice Black",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "57",
        name: "Bess Sims",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "58",
        name: "Linnie Valdez",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "59",
        name: "Cody Brewer",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "60",
        name: "Isabella Sandoval",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "61",
        name: "Iva Moreno",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "62",
        name: "Roy Gibson",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "63",
        name: "Thomas Mendez",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "64",
        name: "Mittie Dunn",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "65",
        name: "Virgie Harrington",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "66",
        name: "Steven Kelly",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "67",
        name: "Eric Gardner",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "68",
        name: "Beatrice Rodriquez",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "69",
        name: "Lester Barber",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "70",
        name: "Devin Hanson",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "71",
        name: "John Burns",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "72",
        name: "Ricky Fernandez",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "73",
        name: "Thomas Mendez",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "74",
        name: "Sara Sims",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "75",
        name: "Lenora Hardy",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "76",
        name: "Nancy Glover",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "77",
        name: "Elsie Lyons",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "78",
        name: "Jerome Webb",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "79",
        name: "Sally Holland",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "80",
        name: "Lois Ryan",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "81",
        name: "Brian Bowen",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "82",
        name: "Susan Hudson",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "83",
        name: "Rosalie Sutton",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "84",
        name: "Walter Hansen",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "85",
        name: "Tony Flores",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "86",
        name: "Bill Chambers",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "87",
        name: "Francisco Moreno",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "88",
        name: "Bess White",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "89",
        name: "Marvin Wilkerson",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "90",
        name: "Elizabeth Delgado",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "91",
        name: "Richard Watkins",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "92",
        name: "Dennis Francis",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "93",
        name: "Chase Goodman",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "94",
        name: "Chris Schmidt",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "95",
        name: "Rhoda Brady",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "96",
        name: "Maud Burns",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "97",
        name: "Andre Powell",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "98",
        name: "Katherine Walker",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "99",
        name: "Nelle Harvey",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "100",
        name: "Randall Phillips",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "101",
        name: "Maurice Hodges",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "102",
        name: "Lina Bates",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "103",
        name: "Lillie Ortega",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "104",
        name: "Wayne Dixon",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "105",
        name: "Florence McKinney",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "106",
        name: "Calvin Santiago",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "107",
        name: "Dylan Pittman",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "108",
        name: "Donald Marsh",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "109",
        name: "Marvin Lee",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "110",
        name: "Adrian Guerrero",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "111",
        name: "Connor Horton",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "112",
        name: "Alma Washington",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "113",
        name: "Leila Johnson",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "114",
        name: "Laura Olson",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "115",
        name: "Birdie Medina",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "116",
        name: "Gordon Osborne",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "117",
        name: "Marian Martin",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "118",
        name: "Lura Mendez",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "119",
        name: "Pauline Holmes",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "120",
        name: "Maria Richards",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "121",
        name: "Jonathan Paul",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "122",
        name: "Lloyd Goodwin",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "123",
        name: "Dennis Collier",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "124",
        name: "Andrew Hill",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "125",
        name: "Myra Thomas",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "126",
        name: "Philip Brock",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "127",
        name: "Virginia Padilla",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "128",
        name: "Earl Spencer",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "129",
        name: "Isaac Little",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "130",
        name: "John Pratt",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "131",
        name: "Ida Harrison",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "132",
        name: "Barbara Drake",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "133",
        name: "Cornelia Harmon",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "134",
        name: "Winnie Francis",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "135",
        name: "Mildred Stephens",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "136",
        name: "Joseph Ford",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "137",
        name: "Sallie May",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "138",
        name: "Virginia Cortez",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "139",
        name: "Tillie Jefferson",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "140",
        name: "Aaron Barnes",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "141",
        name: "Franklin Hall",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "142",
        name: "Cordelia Richards",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "143",
        name: "Milton Flores",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "144",
        name: "Ronnie Todd",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "145",
        name: "Aaron Garner",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "146",
        name: "Gussie Robbins",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "147",
        name: "Cynthia Vega",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "148",
        name: "Bessie McCarthy",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "149",
        name: "Alta Pittman",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "150",
        name: "Howard Christensen",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "151",
        name: "Cynthia Taylor",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "152",
        name: "Pauline Manning",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "153",
        name: "Kathryn Jensen",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "154",
        name: "Peter Powell",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "155",
        name: "Maggie Price",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "156",
        name: "Olive Simon",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "157",
        name: "Annie Price",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "158",
        name: "Isabelle Elliott",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "159",
        name: "Edwin Blair",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "160",
        name: "Isabel Brock",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "161",
        name: "Carl Vega",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "162",
        name: "Jim Coleman",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "163",
        name: "Essie Fuller",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "164",
        name: "Luis Blake",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "165",
        name: "Derrick Bush",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "166",
        name: "Rosalie Smith",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "167",
        name: "Alejandro Hammond",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "168",
        name: "Bess Cortez",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "169",
        name: "Leo Briggs",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "170",
        name: "Hattie Sutton",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "171",
        name: "Ronald Welch",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "172",
        name: "Clifford Todd",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "173",
        name: "Lucy Figueroa",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "174",
        name: "Leroy Webb",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "175",
        name: "May Rivera",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "176",
        name: "Lydia Patterson",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "177",
        name: "Abbie Clarke",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "178",
        name: "Victor Becker",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "179",
        name: "Steven Parker",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "180",
        name: "Dora Harris",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "181",
        name: "Barbara Wallace",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "182",
        name: "Walter Norris",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "183",
        name: "Charlie Roy",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "184",
        name: "Irene Frank",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "185",
        name: "Caleb Norris",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "186",
        name: "Maggie Lamb",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "187",
        name: "Anne Russell",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "188",
        name: "Abbie Potter",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "189",
        name: "Jeanette Bowen",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "190",
        name: "Micheal Francis",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "191",
        name: "Rose Glover",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "192",
        name: "Leah Clark",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "193",
        name: "Shawn Washington",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "194",
        name: "Marion Barker",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "195",
        name: "Joe Roberson",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "196",
        name: "Josephine McLaughlin",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "197",
        name: "Jennie Schmidt",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "198",
        name: "Jason Shelton",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "199",
        name: "Lena Morales",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "200",
        name: "Cory Garrett",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "201",
        name: "Jerome Stephens",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "202",
        name: "Peter Moreno",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    },
    {
        id: "203",
        name: "Ryan Price",
        departement: "ITD",
        img: "https://github.com/taylorotwell.png"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9fffz","4Y2qN"], "4Y2qN", "parcelRequire71c5")

//# sourceMappingURL=index.6f2030e2.js.map
