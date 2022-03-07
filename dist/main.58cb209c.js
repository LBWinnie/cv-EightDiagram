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
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#html');
var style = document.querySelector('#style'); //通过css选择器找到元素

var string = "/*Hi\uFF0C\u6211\u662F\u5C0F\u5C81\n *\u5728\u8FD9\u5148\u653E\u4E00\u4E2Adiv\n **/\n#div1{\n    border: 2px solid black;\n    width:200px;\n    height:200px;\n}\n/*\u63A5\u4E0B\u6765\u6211\u8981\u628A\u8FD9\u4E2Adiv\u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n *\u9996\u5148\uFF0C\u628Adiv\u53D8\u6210\u4E00\u4E2A\u5706\u5708\n **/\n #div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n/*\u516B\u5366\u56FE\u6709\u9634\u9633\u4E24\u7EA7\n *\u4E00\u9ED1\u4E00\u767D\n **/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) \n    0%, rgba(255,255,255,1) \n    50%, rgba(0,0,0,1) \n    50%, rgba(0,0,0,1) \n    100%);\n}\n/*\u52A0\u70B9\u4E1C\u897F\u8BA9\u516B\u5366\u56FE\u770B\u8D77\u6765\u66F4\u201C\u516B\u5366\u201D\n **/\n#div1::before{\n    width:100px;\n    height:100px;\n    top:0;\n    left:50%;\n    transform: translateX(-50%);\n    background:#fff;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) \n    0%, rgba(0,0,0,1) \n    15%, rgba(255,255,255,1) \n    15%, rgba(255,255,255,1) \n    100%);\n}\n#div1::after{\n    width:100px;\n    height:100px;\n    bottom:0;\n    left:50%;\n    transform: translateX(-50%);\n    background:#000;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) \n    0%, rgba(255,255,255,1) \n    15%, rgba(0,0,0,1) \n    15%, rgba(0,0,0,1) \n    100%);\n}\n";
var string2 = ""; //string = string.replace(/\n/g,"<br>");
//正则表达式将所有回车变为<br>
//string[0].charCodeAt()可得到一个字符的Unicode编码

var n = 0;

var step = function step() {
  setTimeout(function () {
    //如果不是回车就打出原文   
    if (string[n] === '\n') {
      string2 += '<br>';
    } else if (string[n] === ' ') {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);

    if (n < string.length - 1) {
      //如果n不是最后一个就继续
      n += 1;
      step();
    }
  }, 50);
};

step();
style.innerHTML = "\nbody{\n    color:red;\n}\n";
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.58cb209c.js.map