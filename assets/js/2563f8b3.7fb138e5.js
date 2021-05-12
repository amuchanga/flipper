(self.webpackChunk=self.webpackChunk||[]).push([[9046],{3905:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>u,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),c=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=c(r),d=a,f=y["".concat(o,".").concat(d)]||y[d]||s[d]||i;return r?t.createElement(f,p(p({ref:n},u),{},{components:r})):t.createElement(f,p({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=y;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=r[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6403:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>p,metadata:()=>l,toc:()=>o,default:()=>u});var t=r(4034),a=r(9973),i=(r(7294),r(3905)),p={id:"leak-canary-2-plugin",title:"LeakCanary 2 Setup",sidebar_label:"LeakCanary 2"},l={unversionedId:"setup/leak-canary-2-plugin",id:"setup/leak-canary-2-plugin",isDocsHomePage:!1,title:"LeakCanary 2 Setup",description:"Ensure that you already have an explicit dependency in your application's",source:"@site/../docs/setup/leak-canary-2-plugin.mdx",sourceDirName:"setup",slug:"/setup/leak-canary-2-plugin",permalink:"/docs/setup/leak-canary-2-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/leak-canary-2-plugin.mdx",version:"current",sidebar_label:"LeakCanary 2",frontMatter:{id:"leak-canary-2-plugin",title:"LeakCanary 2 Setup",sidebar_label:"LeakCanary 2"},sidebar:"setup",previous:{title:"LeakCanary Setup",permalink:"/docs/setup/leak-canary-plugin"},next:{title:"Crash Reporter Setup",permalink:"/docs/setup/crash-reporter-plugin"}},o=[],c={toc:o};function u(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ensure that you already have an explicit dependency in your application's\n",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," including the plugin dependency, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-leakcanary2-plugin:0.88.0'\n  debugImplementation 'com.squareup.leakcanary:leakcanary-android:2.6'\n}\n")),(0,i.kt)("p",null,"Update your the ",(0,i.kt)("inlineCode",{parentName:"p"},"onCreate")," method in you ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," to add the LeakCanary2 plugin to Flipper and the Flipper listener to LeakCanary"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},"import com.facebook.flipper.plugins.leakcanary2.FlipperLeakListener\nimport com.facebook.flipper.plugins.leakcanary2.LeakCanary2FlipperPlugin\n\n...\n\n  override fun onCreate() {\n    super.onCreate()\n    setupFlipper()\n\n    /*\n    set the flipper listener in leak canary config\n    */\n    LeakCanary.config = LeakCanary.config.copy(\n        onHeapAnalyzedListener = FlipperLeakListener()\n    )\n\n    SoLoader.init(this, false)\n\n    if (BuildConfig.DEBUG && FlipperUtils.shouldEnableFlipper(this)) {\n      val client = AndroidFlipperClient.getInstance(this)\n      /*\n      add leak canary plugin to flipper\n      */\n      client.addPlugin(LeakCanary2FlipperPlugin())\n      client.start()\n    }\n  }\n")),(0,i.kt)("p",null,"That's it!"))}u.isMDXComponent=!0}}]);