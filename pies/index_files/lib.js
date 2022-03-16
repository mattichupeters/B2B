_telstra="object"==typeof _telstra?_telstra:{},_telstra.adlib=function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var i=n(1)(window.document),a=n(2)(i,window.document,window),r=n(3)(i,a,window.document),o=n(4)(i,a,window.location.search),s=n(5)(i,a),d=n(6)(i,a,window),l=n(7)(i,o,window.document),u=i.logger("TelstraAdLibrary.main");function c(){if(u("GPT ready? "+(window.googletag&&window.googletag.apiReady)),u("Targeting ready? "+o.loaded),u("Publisher ready? "+s.loaded),window.googletag&&window.googletag.apiReady&&o.loaded&&s.loaded){u("GPT ready, targeting ready, publisher-specific code ready.");var t=o();u("Page-level targeting values are: ",t);var n=o.exclusions();u("Category exclusions are: ",n),u("Calling GPT setup for site: "+e.exports.site+", area: "+e.exports.area),d.setupAds(e.exports.site,e.exports.area,t,n),u("Loading tracking pixels"),p(l.ads()),u("Loading tmframe ads"),l.findByClassName("tmframe",p),u("Final ad list is: ",l.ads()),window._telstra.after&&(u("Running after-GPT functions"),window._telstra.after.forEach((function(t){t(e.exports)}))),window._telstra.after={push:function(t){t(e.exports)}},window.addEventListener("resize",(function(){for(var e=document.getElementsByTagName("iframe"),t=0;t<e.length;t++)e[t].id.startsWith("google_ads_iframe_")&&e[t].contentWindow.postMessage({type:"resize"},"*")}))}}function g(e,t){for(var n="string"==typeof t?JSON.parse(t):t,i=Object.keys(n),a=0;a<i.length;a++)e[i[a]]=n[i[a]]}function f(e){try{if(e.data&&e.data.name&&(e.data.style||e.data.parentStyle||e.data.sibling||e.data.params)){var t=document.getElementById(e.data.name);if(e.data.style&&(g(t.style,e.data.style),u("New style applied for "+e.data.name+" using style: "+e.data.style)),e.data.parentStyle){var n=t.parentNode;g(n.style,e.data.parentStyle),u("New style applied for "+n.id+" using style: "+e.data.parentStyle)}if(e.data.sibling){var i=JSON.parse(e.data.sibling),a=document.getElementById(i.id);null===a&&((a=document.createElement("div")).id=i.id,t.parentNode.appendChild(a)),g(a.style,i.style),u("New style applied for "+i.id+" using style: "+i.style)}e.data.params&&(g(t,e.data.params),u("New Parameters applied to "+e.data.name+" using params: "+e.data.params))}}catch(e){u("Failed to apply style due to "+e)}}function p(t){d.displayAds(t,e.exports.site,e.exports.area)}n(10)(i,window),e.exports={ads:l,publisher:s,targeting:o,refresh:d.refresh,createAds:function(e){d.cleanupAdSlots(),l.findById(e,p)},debug:function(){i.display(console)}},u("Version 1.1.0"),r.ifNeeded((function(){l.defaultAds(),u("Looking for the page title");var t=window.document.title;t&&o("title",t),u("Looking for keywords");var n=window.document.querySelector("meta[name='keywords']");n&&n.getAttribute("content")&&n.getAttribute("content").split(",").forEach((function(e){o("keywords",e)}));window._telstra.before&&(u("Running before-GPT functions"),window._telstra.before.forEach((function(t){t(e.exports)}))),d.load(c),o.load(c),s.load(c),u("Adding in listener for safeFrame creatives"),window.addEventListener?window.addEventListener("message",f):window.attachEvent("onmessage",f)}))},function(e,t){var n=[],i=new Array(100).join(" ");e.exports=function(e,t){var a=(t=t||{now:function(){return(new Date).getTime()}}).now(),r=e&&e.getElementById("telstraAdCodeLogs");return{logger:function(e){return function(){r&&(r.innerHTML=r.innerHTML+"<br>["+(t.now()-a)+"]"+e+": "+Array.prototype.slice.call(arguments).join("")+"\n"),n.push([t.now(),e].concat(Array.prototype.slice.call(arguments)))}},display:function(e){n.forEach((function(t){var n,r=(n=t[0]-a+"ms",(i+n).slice(-10)),o=function(e,t){return(e+i).slice(0,t)}(t[1],30);e.log.apply(e,[r,o].concat(t.slice(2)))}))},records:function(){return n},clear:function(){n=[]}}}},function(e,t){e.exports=function(e,t,n){var i=e.logger("TelstraAdLibrary.loader");return{load:function(e,a,r){i("About to add a script tag to load "+e),"function"==typeof a&&(r=a,a=!1);var o,s,d=t.createElement("script");if(d.async=!0,a){i("Script requires a jsonp callback.");var l="string"==typeof a?a:"cb";e=e+(e.indexOf("?")>0?"&":"?")+l+"="+(o=r,s=n._telstra_cb__count||0,n["_telstra_cb_"+s]=function(e){o(null,e)},n._telstra_cb__count=s+1,"_telstra_cb_"+s),d.onerror=r}else r&&(i("Script does not need a jsonp callback, using onload."),d.onload=r,d.onreadystatechange=function(){i("onreadystatechange called with scriptTag.readyState = "+d.readyState),"loaded"==d.readyState&&r()},d.onerror=r);d.src=e,t.body.appendChild(d),i("Script tag added.")}}}},function(e,t){e.exports=function(e,t,n){for(var i=e.logger("TelstraAdLibrary.polyfill"),a=[{test:function(){return"forEach"in Array.prototype},feature:"Array.prototype.forEach"},{test:function(){return"map"in Array.prototype},feature:"Array.prototype.map"},{test:function(){return"includes"in Array.prototype},feature:"Array.prototype.includes"},{test:function(){return"keys"in Object},feature:"Object.keys"},{test:function(){return"getElementsByClassName"in n},feature:"document.getElementsByClassName"},{test:function(){return"bind"in Function.prototype},feature:"Function.prototype.bind"},{test:function(){return"filter"in Array.prototype},feature:"Array.prototype.filter"}],r=[],o=0;o<a.length;o++)a[o].test()||r.push(a[o].feature);return{ifNeeded:function(e){return i("Checking to see if we need to polyfill features"),r.length>0?(i("Polyfills needed: "+r.join(",")),t.load("https://polyfill.io/v2/polyfill.min.js?features="+r.join(",")+"&flags=always,gated","callback",e)):(i("No polyfills needed."),e())}}}},function(e,t,n){var i,a={},r=[];function o(e,t){var n=e.replace(/[^a-z0-9/:.]+/gi,"_");return t&&"area"===t.toLowerCase()||(n=n.replace(/\//g,"_")),t&&"ar"===t.toLowerCase()||(n=n.replace(/:/g,"_")),n=n.replace(/_+/g,"_").replace(/^_|_$|^\/|\/$/g,""),t&&"title"===t.toLowerCase()&&(n=n.replace(/_/g," ")),n}function s(e,t){if(e&&t){var n=a[e]||[];return n.push(o(t,e)),a[e]=n,void i("Setting targeting key: "+e+" to value: ",n)}return e?a[e]:Object.keys(a).map((function(e){return{key:e,value:a[e]}}))}function d(e){if(e&&o(e)){var t=o(e);i("Adding "+t+" to the exclusion list."),r.push(t)}}e.exports=function(e,t,n){var o;return i=e.logger("TelstraAdLibrary.targeting"),o="//medrx.telstra.com.au/online.php",a={},r=[],s.loaded=!1,s.load=function(e){!function(e){i("Checking query string {",e,"} for targeting values."),e&&e.substring(1).split("&").forEach((function(e){var t=e.split("=");2===t.length&&0===t[0].indexOf("tmaf_")&&t[1].length>0&&s(t[0].substring("tmaf_".length),t[1])}))}(n),i("Adding script tag to call CPT"),t.load(o,!0,function(t,n){return this.loaded=!0,i("Targeting script returned from CPT: ",n),function(e){if(e)for(var t=e.split(";"),n=0;n<t.length;n++){var a=t[n].split("=");2===a.length&&(i("Parsed: ",a),s(a[0],a[1]))}}(n),e(t)}.bind(this))},s.exclusions=function(){return r},s.exclude=d,s}},function(e,t,n){e.exports=function(e,t){var n,i,a=e.logger("TelstraAdLibrary.publisher");function r(e){i=e}return n="//medrx.telstra.com.au/tmaf/publisher/",r.load=function(e){function o(){a("Publisher-specific code loaded."),r.loaded=!0,e()}if(!i)return o();t.load(n+i+".js",o),a("Loading publisher-specific code from "+n+i+".js")},r.loaded=!1,r}},function(e,t){e.exports=function(e,t){var n=e.logger("TelstraAdLibrary.gpt");function i(e){return e?e.replace(/,/g,"").replace(/[^a-z0-9/]/gi,"_").replace(/_+/g,"_").replace(/^_|_$|^\/|\/$/g,""):e}return{load:function(e){n("Adding script tag to load GPT"),window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(e),t.load("//www.googletagservices.com/tag/js/gpt.js")},setupAds:function(e,t,a,r){if(e&&t){var o=window.googletag,s=i(t);o.cmd.push((function(){n("Setting page-level googletag values."),o.pubads().setTargeting("area",s),a.forEach((function(e){o.pubads().setTargeting(e.key,e.value)})),r.forEach((function(e){o.pubads().setCategoryExclusion(e)})),o.pubads().enableSingleRequest(),o.pubads().disableInitialLoad(),o.pubads().collapseEmptyDivs(),o.enableServices(),n("Page-level googletag calls finished (enableSingleRequest, etc)")})),o.cmd.push((function(){o.pubads().addEventListener("slotRenderEnded",(function(e){e.isEmpty||(document.getElementById(e.slot.getSlotElementId()).style.display="block")}))}))}else n("Site and area must be defined, skipping ad setup. Site was "+e+", area was "+t)},refresh:function(e,t){var n=window.googletag;if(e){var i="string"==typeof e?[e]:e;n.cmd.push((function(){var e=void 0!==t&&t.length>0;if(e)var a=n.sizeMapping().addSize([0,0],t).build();var r=[];n.pubads().getSlots().forEach((function(t){i.includes(t.getSlotElementId())&&(e&&t.defineSizeMapping(a),r.push(t))})),n.pubads().refresh(r)}))}else n.cmd.push((function(){n.pubads().refresh()}))},displayAds:function(e,t,a){var r=[],o=window.googletag,s=i(a);e.forEach((function(e){e.disabled?n("Adunit is disabled, ignoring."):(n("calling setupAdSlot on "+e.id),function(e,t,i){var a=i.adType?i.adType:t;n("Defining slot: /7414/"+e+"/"+a+" for adunit "+i.id);var r=window.googletag;r.cmd.push((function(){try{if(i.isOutOfPage())r.defineOutOfPageSlot("/7414/"+e+"/"+a,i.id).addService(r.pubads()),n("Out-of-page AdUnit "+i.id+" defined.");else{var t=i.isAbove();r.defineSlot("/7414/"+e+"/"+a,i.sizes,i.id).setTargeting("position",(t?"ABV":"BLW")+i.index).setTargeting("above",t?"true":"false").setTargeting("index",""+i.index).setTargeting("in_view",i.isInView()?"true":"false").addService(r.pubads())}}catch(e){throw n("Failed to define ad slot for id: "+i.id),e}}))}(t,s,e),o.cmd.push((function(){n("calling display on "+e.id),o.display(e.id)})),r.push(e.id))})),this.refresh(r)},cleanupAdSlots:function(){var e=window.googletag;e.cmd.push((function(){var t=[];e.pubads().getSlots().forEach((function(e){null==document.getElementById(e.getSlotElementId())&&t.push(e)})),n("Cleaning up "+t.length+" ad slots"),e.destroySlots(t)}))},formatAreaString:i}}},function(e,t,n){e.exports=function(e,t,i){var a=n(8)(e,n(9)),r=e.logger("TelstraAdLibrary.Ads"),o=[];function s(e,t,n){var i=new a(e),o=t.getElementsByTagName("body")[0];return n?o.insertBefore(i.div(t),o.firstChild):t.body.insertBefore(i.div(t),t.body.firstChild),r(e+" ad inserted."),i}function d(e,t,n){r("Creating ad using "+function(e){return(e.outerHTML||"").replace(/[<>]/gm," ")}(e));var o=null;(function(e){if(e._telstra.adlib){var t=e._telstra.adlib.fixedIndexWhitelist,n=e.location.pathname;if(t&&void 0!==t)for(var i=0;i<t.length;i++)if(n===t[i]||"/"!==t[i]&&n.startsWith(t[i]))return r("Enabled Fixed Ad Indexes as pathname ("+n+") matches or starts with "+t[i]),!0}return!1})(window)&&e.hasAttribute("ad-index")&&(o=parseInt(e.getAttribute("ad-index")));var s=new a(e.getAttribute("title"),o);e.getAttribute("adtype")&&(s.adType=e.getAttribute("adtype")),s.valid&&(t.push(s),e.parentNode.insertBefore(s.div(i),e),n.push(e))}function l(e){var t=[],n=[];r("Found "+e.length+" elements.");for(var i=0;i<e.length;i++){d(e.item?e.item(i):e[i],t,n)}return n.forEach((function(e){e.parentNode.removeChild(e)})),t}function u(){if(window._telstra.adlib){var e=window._telstra.adlib.urlBlacklist,t=window.location.pathname;if(e&&e.includes(t))return r("Blocked ad for "+t),!0}return!1}return{ads:function(){return o},findByClassName:function(e,t){if(r("Looking for elements with className: ",e),!u()){var n=l(i.getElementsByClassName(e));return o=o.concat(n),t(n),r("Found ads: ",n),n}},findById:function(e,t){var n="string"==typeof e?[e]:e;if(r("Looking for ads with ids: ",n),!u()){var a=[];n.forEach((function(e){var t=i.getElementById(e);t&&a.push(t)}));var s=l(a);return o=o.concat(s),t(s),s}},defaultAds:function(){t("device")&&/mobile/i.test(t("device")[0])?(r("Device is mobile, creating 2x1 default AdUnit"),o.push(s("2x1",i,!0))):(r("Creating 1x1 default AdUnit"),o.push(s("1x1",i,!0))),r("Creating out of page default AdUnit"),o.push(s("0x0",i,!0))},skin:function(){r("skin called"),u()||(t("device")&&/mobile/i.test(t("device")[0])?r("Device is a mobile so 4x1 ad will not be inserted."):(r("Device is not a mobile so 4x1 ad will be inserted."),o.push(s("4x1",i,!1))))},fireplace:function(){r("fireplace called"),u()||(t("device")&&/mobile/i.test(t("device")[0])?r("Device is a mobile so 5x1 ad will not be inserted."):(r("Device is not a mobile so 5x1 ad will be inserted."),o.push(s("5x1",i,!1))))}}}},function(e,t){e.exports=function(e,t){var n=e.logger("TelstraAdLibrary.AdUnit"),i={};function a(e,t){this.valid=!1,this.sizes=[],this.adType=null,this.parseSize(e),this.disabled=!1,this.indexOverride=t}function r(e){for(var t in e){var n=parseInt(e[t]);if(!isNaN(n)&&0!==n)return n}return 0}return a.prototype.parseSize=function(e){var t=this;e&&e.replace(" ","").split(",").forEach((function(e){if(/\d+x\d+/i.test(e)){var n=e.split(/x/i);n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10),t.sizes.push(n),t.width||(t.width=n[0],t.height=n[1],t.valid=!0)}}))},a.prototype.div=function(e){n("Creating div");var t,a,r="tmedia-ad-"+this.width+"-"+this.height,o=(t=this.sizes,a=t[0],t.forEach((function(e){e[1]<a[1]&&(a=e)})),a),s=e.getElementsByClassName(r).length;return n("Got element count of "+s+" for "+r),this.calculatedIndex=function(e){var t=-1,n=1;return e.forEach((function(e){e in i&&(n=i[e]+1),t<n&&(t=n),i[e]=n})),n}(this.sizes),null!=this.indexOverride&&void 0!==this.indexOverride?this.index=this.indexOverride:this.index=this.calculatedIndex,this.id=r+"-"+this.index+"-"+this.calculatedIndex,this.element=e.createElement("div"),n("Created element for div"),this.element.id=this.id,this.element.className=r,n("Set className"),this.height<=1?(this.element.style.width="0px",this.element.style.height="0px",n("Element hidden initially")):(this.element.style.minWidth=o[0]+"px",this.element.style.minHeight=o[1]+"px",this.element.style.display="none"),n("Div created."),this.element},a.prototype.isAbove=function(){var e=this.getBoundingBox();if(e.height>0){var i=t.getViewportHeight();return n("adunit "+this.id+" is above? "+i+" - "+e.top+" / "+e.height),(i-e.top)/e.height>.25}return!1},a.prototype.isInView=function(){var e=this.getBoundingBox();if(e.height>0){var i=(t.getViewportHeight()-e.top)/e.height>.25,a=(e.top+e.height)/e.height>.25;return n("adunit "+this.id+" is above bottom of screen? "+i+"isBelowTopOfScreen ? "+a),i&&a}return!1},a.prototype.getDimensions=function(){return{height:r([this.element.style.height,this.element.style.minHeight,this.element.height]),width:r([this.element.style.width,this.element.style.minWidth,this.element.width])}},a.prototype.getBoundingBox=function(){var e=this.element.parentNode.getBoundingClientRect(),t=this.getDimensions();return e.height=t.height,e.width=t.width,e},a.prototype.isOutOfPage=function(){return 0===this.width&&0===this.height},a}},function(e,t){e.exports={getViewportHeight:function(){return window.innerHeight}}},function(e,t){e.exports=function(e,t){var n=e.logger("TelstraAdLibrary.ChromeExtensionSupport"),i={TMAF_Request:function(){t._telstra.after.push((function(e){var n={type:"TMAF_Data",ads:{},targeting:{}},i=t.googletag.pubads();i.getSlots().forEach((function(e){var t=[];e.getSizes().forEach((function(e){t.push({w:e.getWidth(),h:e.getHeight()})})),n.ads[e.getSlotElementId()]={id:e.getSlotId().getId(),adUnitPath:e.getAdUnitPath(),outOfPage:e.getOutOfPage(),targeting:e.getTargetingMap(),response:e.getResponseInformation(),sizes:t}})),i.getTargetingKeys().forEach((function(e){n.targeting[e]=i.getTargeting(e)})),n.exclusions=e.targeting.exclusions(),t.postMessage(n,"*")}))},TMAF_Request_Debug:function(n){var i=t.document.getElementById(n.data.destination);i.innerHTML="",e.display({log:function(){var e=Array.prototype.slice.call(arguments);i.innerHTML+='<span class="time">'+e[0]+'</span> - <span class="label">'+e[1]+'</span> - <span class="message">'+e.slice(2).join(" ")+"</span><br>\n"}})},TMAF_Request_GPT_Console:function(){t.googletag.openConsole()}};t.addEventListener&&t.addEventListener("message",(function(e){e.data.type&&i[e.data.type]&&(n("Received a request for "+e.data.type),i[e.data.type](e))}))}}]);
//# sourceMappingURL=lib.map