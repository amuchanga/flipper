(self.webpackChunk=self.webpackChunk||[]).push([[6614],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>g});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(t),g=a,v=s["".concat(l,".").concat(g)]||s[g]||u[g]||r;return t?i.createElement(v,o(o({ref:n},c),{},{components:t})):i.createElement(v,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9067:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,metadata:()=>p,toc:()=>l,default:()=>g});var i=t(4034),a=t(9973),r=(t(7294),t(3905)),o={id:"navigation-plugin",title:"Navigation Plugin Setup",sidebar_label:"Navigation"},p={unversionedId:"setup/navigation-plugin",id:"setup/navigation-plugin",isDocsHomePage:!1,title:"Navigation Plugin Setup",description:"Adding the plugin using Buck",source:"@site/../docs/setup/navigation-plugin.mdx",sourceDirName:"setup",slug:"/setup/navigation-plugin",permalink:"/docs/setup/navigation-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/navigation-plugin.mdx",version:"current",sidebar_label:"Navigation",frontMatter:{id:"navigation-plugin",title:"Navigation Plugin Setup",sidebar_label:"Navigation"},sidebar:"setup",previous:{title:"Layout Inspector Setup",permalink:"/docs/setup/layout-plugin"},next:{title:"Network Setup",permalink:"/docs/setup/network-plugin"}},l=[{value:"Adding the plugin using Buck",id:"adding-the-plugin-using-buck",children:[]},{value:"Adding the plugin to non-buck-based apps",id:"adding-the-plugin-to-non-buck-based-apps",children:[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}]}],d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)}},c=d("FbInternalOnly"),u=d("FbNavigationPluginSetup"),s={toc:l};function g(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"FbInternalOnly"},(0,r.kt)("h2",{id:"adding-the-plugin-using-buck"},"Adding the plugin using Buck"),(0,r.kt)(u,{mdxType:"FbNavigationPluginSetup"}),(0,r.kt)("h2",{id:"adding-the-plugin-to-non-buck-based-apps"},"Adding the plugin to non-buck-based apps")),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("p",null,"First, add the plugin to your Flipper client instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.android.AndroidFlipperClient;\nimport com.facebook.flipper.plugins.navigation.NavigationFlipperPlugin;\n\nfinal FlipperClient client = AndroidFlipperClient.getInstance(this);\nclient.addPlugin(NavigationFlipperPlugin.getInstance());\n")),(0,r.kt)("p",null,"Navigation events in the app can then be recorded by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"sendNavigationEvent")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NavigationFlipperPlugin")," instance from anywhere in the app. This allows for the Navigation Plugin to be integrated into existing navigation frameworks."),(0,r.kt)("h4",{id:"using-android-deep-links"},"Using Android Deep Links"),(0,r.kt)("p",null,"The Navigation Plugin can be used with built in ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/training/app-links/deep-linking"},"deep links for Android"),"."),(0,r.kt)("p",null,"To deep link to an activity, edit the AndroidManifest.xml and add the intent filter for the given activity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<intent-filter>\n  <action android:name="android.intent.action.VIEW" />\n  <category android:name="android.intent.category.DEFAULT" />\n  <category android:name="android.intent.category.BROWSABLE" />\n  <data android:scheme="flipper" android:host="deep_link_activity" />\n</intent-filter>\n')),(0,r.kt)("p",null,"This will allow the user to jump to ",(0,r.kt)("inlineCode",{parentName:"p"},"flipper://deep_link_activity")," within Flipper."),(0,r.kt)("p",null,"To log that navigation event in  flipper, we can send the navigation event in the Activity's ",(0,r.kt)("inlineCode",{parentName:"p"},"onCreate")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class DeepLinkActivity extends AppCompatActivity {\n  @Override\n  protected void onCreate(final Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    NavigationFlipperPlugin.getInstance().sendNavigationEvent("flipper://deep_link_activity/");\n    ...\n')),(0,r.kt)("h4",{id:"third-party-solutions"},"Third Party Solutions"),(0,r.kt)("p",null,"The Navigation Plugin can easily be integrated into a third party navigation framework."),(0,r.kt)("h5",{id:"airbnb-deep-link-dispatch"},"AirBnB Deep Link Dispatch"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbnb/DeepLinkDispatch"},"Deep Link Dispatch")," will work out of the box with Flipper for navigating to links, including support for url parameters. To add logging, simply add a BroadcastReceiver to your app that is called on any incoming deep links."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class DeepLinkReceiver extends BroadcastReceiver {\n  private static final String TAG = "DeepLinkReceiver";\n\n  @Override public void onReceive(Context context, Intent intent) {\n    String deepLinkUri = intent.getStringExtra(DeepLinkHandler.EXTRA_URI);\n    if (intent.getBooleanExtra(DeepLinkHandler.EXTRA_SUCCESSFUL, false)) {\n      NavigationFlipperPlugin.getInstance().sendNavigationEvent(deepLinkUri);\n    }\n  }\n}\n\npublic class DeepLinkApplication extends Application {\n  @Override public void onCreate() {\n    super.onCreate();\n    IntentFilter intentFilter = new IntentFilter(DeepLinkHandler.ACTION);\n    LocalBroadcastManager.getInstance(this).registerReceiver(new DeepLinkReceiver(), intentFilter);\n  }\n}\n')),(0,r.kt)("h3",{id:"ios"},"iOS"),(0,r.kt)("p",null,"iOS support is coming soon."))}g.isMDXComponent=!0}}]);