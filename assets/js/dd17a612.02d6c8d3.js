(self.webpackChunk=self.webpackChunk||[]).push([[9922],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7294);const i=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7294),i=n(944),o=n(6010);const a="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,u=39;const s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,c=e.values,d=e.groupId,f=e.className,m=(0,i.Z)(),g=m.tabGroupChoices,k=m.setTabGroupChoices,b=(0,r.useState)(s),v=b[0],w=b[1],y=r.Children.toArray(e.children),h=[];if(null!=d){var N=g[d];null!=N&&N!==v&&c.some((function(e){return e.value===N}))&&w(N)}var O=function(e){var t=e.currentTarget,n=h.indexOf(t),r=c[n].value;w(r),null!=d&&(k(d,r),setTimeout((function(){var e,n,r,i,o,a,p,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,o=e.right,a=window,p=a.innerHeight,u=a.innerWidth,n>=0&&o<=u&&i<=p&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},P=function(e){var t,n;switch(e.keyCode){case u:var r=h.indexOf(e.target)+1;n=h[r]||h[0];break;case p:var i=h.indexOf(e.target)-1;n=h[i]||h[h.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},c.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",a,{"tabs__item--active":v===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:P,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294),i=n(9443);const o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9191:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,metadata:()=>u,toc:()=>s,default:()=>d});var r=n(4034),i=n(9973),o=(n(7294),n(3905)),a=n(1395),l=n(8215),p={id:"network-plugin",title:"Network Setup",sidebar_label:"Network"},u={unversionedId:"setup/network-plugin",id:"setup/network-plugin",isDocsHomePage:!1,title:"Network Setup",description:"To use the network plugin, you need to add the plugin to your Flipper client instance.",source:"@site/../docs/setup/network-plugin.mdx",sourceDirName:"setup",slug:"/setup/network-plugin",permalink:"/docs/setup/network-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/network-plugin.mdx",version:"current",sidebar_label:"Network",frontMatter:{id:"network-plugin",title:"Network Setup",sidebar_label:"Network"},sidebar:"setup",previous:{title:"Navigation Plugin Setup",permalink:"/docs/setup/navigation-plugin"},next:{title:"Databases Plugin Setup",permalink:"/docs/setup/databases-plugin"}},s=[{value:"Android",id:"android",children:[{value:"OkHttp Integration",id:"okhttp-integration",children:[]}]},{value:"iOS",id:"ios",children:[]}],c={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use the network plugin, you need to add the plugin to your Flipper client instance."),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("p",null,"The network plugin is shipped as a separate Maven artifact:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-network-plugin:0.88.0'\n}\n")),(0,o.kt)("p",null,"Once added to your dependencies, you can instantiate the plugin and add it to\nthe client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;\n\nNetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();\nclient.addPlugin(networkFlipperPlugin);\n")),(0,o.kt)("h3",{id:"okhttp-integration"},"OkHttp Integration"),(0,o.kt)("p",null,"If you are using the popular OkHttp library, you can use the Interceptors system to automatically hook into your existing stack."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;\n\nnew OkHttpClient.Builder()\n    .addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin))\n    .build();\n")),(0,o.kt)("p",null,"As interceptors can modify the request and response, add the Flipper interceptor after all others to get an accurate view of the network traffic."),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("p",null,"To enable network inspection, add the following pod to your Podfile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version\n")),(0,o.kt)("p",null,"Initialise the plugin in the following way:"),(0,o.kt)(a.Z,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n\n[[FlipperClient sharedClient] addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n\n"))),(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nclient?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n\n")))))}d.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i})}}]);