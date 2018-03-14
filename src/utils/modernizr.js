/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-dataview-directory-filereader-inputtypes-typedarrays-xhrresponsetype-xhrresponsetypearraybuffer-xhrresponsetypejson-xhrresponsetypetext-setclasses !*/
!function(e,t,n){function s(e,t){return typeof e===t}function a(){var e,t,n,a,r,i,f;for(var p in l)if(l.hasOwnProperty(p)){if(e=[],t=l[p],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=s(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)i=e[r],f=i.split("."),1===f.length?Modernizr[f[0]]=a:(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=a),o.push((a?"":"no-")+f.join("-"))}}function r(e){var t=p.className,n=Modernizr._config.classPrefix||"";if(u&&(t=t.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(s,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),u?p.className.baseVal=t:p.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):u?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var o=[],l=[],f={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){l.push({name:e,fn:t,options:n})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var p=t.documentElement,u="svg"===p.nodeName.toLowerCase();Modernizr.addTest("dataview","undefined"!=typeof DataView&&"getFloat64"in DataView.prototype),Modernizr.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader)),Modernizr.addTest("typedarrays","ArrayBuffer"in e),Modernizr.addTest("xhrresponsetype",function(){if("undefined"==typeof XMLHttpRequest)return!1;var e=new XMLHttpRequest;return e.open("get","/",!0),"response"in e}());var d=i("input"),c="search tel url email datetime date month week time datetime-local number range color".split(" "),y={};Modernizr.inputtypes=function(e){for(var s,a,r,i=e.length,o="1)",l=0;i>l;l++)d.setAttribute("type",s=e[l]),r="text"!==d.type&&"style"in d,r&&(d.value=o,d.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&d.style.WebkitAppearance!==n?(p.appendChild(d),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(d,null).WebkitAppearance&&0!==d.offsetHeight,p.removeChild(d)):/^(search|tel)$/.test(s)||(r=/^(url|email)$/.test(s)?d.checkValidity&&d.checkValidity()===!1:d.value!=o)),y[e[l]]=!!r;return y}(c);var m=function(e){if("undefined"==typeof XMLHttpRequest)return!1;var t=new XMLHttpRequest;t.open("get","/",!0);try{t.responseType=e}catch(n){return!1}return"response"in t&&t.responseType==e};Modernizr.addTest("xhrresponsetypearraybuffer",m("arraybuffer")),Modernizr.addTest("xhrresponsetypejson",m("json")),Modernizr.addTest("xhrresponsetypetext",m("text"));var h="Moz O ms Webkit",g=f._config.usePrefixes?h.toLowerCase().split(" "):[];f._domPrefixes=g,Modernizr.addTest("fileinputdirectory",function(){var e=i("input"),t="directory";if(e.type="file",t in e)return!0;for(var n=0,s=g.length;s>n;n++)if(g[n]+t in e)return!0;return!1}),a(),r(o),delete f.addTest,delete f.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);