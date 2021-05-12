(self.webpackChunk=self.webpackChunk||[]).push([[486],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,g=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>i})},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>o,Z:()=>a});var n=r(2263),i=r(3919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,s=void 0!==a&&a,l=o.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(s)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+u:u}(o,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8864:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,metadata:()=>l,toc:()=>c,default:()=>p});var n=r(4034),i=r(9973),o=(r(7294),r(3905)),a=r(4996),s={id:"logs-plugin",title:"Logs"},l={unversionedId:"features/logs-plugin",id:"features/logs-plugin",isDocsHomePage:!1,title:"Logs",description:"The Logs plugin shows device logs without any additional setup. This is a device plugin, meaning that it is not tied to any specific app and there is no additional setup needed to see the logs.",source:"@site/../docs/features/logs-plugin.mdx",sourceDirName:"features",slug:"/features/logs-plugin",permalink:"/docs/features/logs-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/logs-plugin.mdx",version:"current",frontMatter:{id:"logs-plugin",title:"Logs"},sidebar:"features",previous:{title:"Features",permalink:"/docs/features/index"},next:{title:"Layout Inspector",permalink:"/docs/features/layout-plugin"}},c=[{value:"Filtering",id:"filtering",children:[]},{value:"Expression watcher",id:"expression-watcher",children:[]}],u={toc:c};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Logs plugin shows device logs without any additional setup. This is a device plugin, meaning that it is not tied to any specific app and there is no additional setup needed to see the logs."),(0,o.kt)("img",{alt:"Logs plugin",src:(0,a.Z)("img/logs.png")}),(0,o.kt)("h2",{id:"filtering"},"Filtering"),(0,o.kt)("p",null,"The search bar can be used to search for logs and filter for certain types. From the context menu on the table headers you can show more infos like timestamp, PID or TID. Click on a tag, PID or TID in the table to filter only for logs with the same value."),(0,o.kt)("h2",{id:"expression-watcher"},"Expression watcher"),(0,o.kt)("p",null,"The expression watcher in the sidebar can be used to watch for certain logs to happen and count how often they occur. An expression can be a simple string, or a regular expression which is matched against the logs."),(0,o.kt)("p",null,"When the notify checkbox is enabled, Flipper will send notifications once the log is happening. This lets you know when the watcher triggered, even if Flipper is in the background."))}p.isMDXComponent=!0}}]);