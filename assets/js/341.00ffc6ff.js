(self.webpackChunk=self.webpackChunk||[]).push([[341],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){return function(t){var n=p(t.components);return r.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42628:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O});var r=n(83117),a=n(67294),o=n(86010),l=n(23746);var i=n(87594),c=n.n(i);const s={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var u=n(85350),p=n(89521);const d=function(){var e=(0,p.useThemeConfig)().prism,t=(0,u.Z)().isDarkTheme,n=e.theme||s,r=e.darkTheme||n;return t?r:n};var f=n(95999);const m="codeBlockContainer_K1bP",g="codeBlockContent_hGly",y="codeBlockTitle_eoMF",A="codeBlock_23N8",h="copyButton_Ue-o",v="codeBlockLines_39YC";var b=/{([\d,-]+)}/,k=["js","jsBlock","jsx","python","html"],E={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},j=["highlight-next-line","highlight-start","highlight-end"],w=function(e){void 0===e&&(e=k);var t=e.map((function(e){var t=E[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+j.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function O(e){var t=e.children,n=e.className,i=e.metastring,s=e.title,u=(0,p.useThemeConfig)().prism,k=(0,a.useState)(!1),E=k[0],j=k[1],O=(0,a.useState)(!1),C=O[0],N=O[1];(0,a.useEffect)((function(){N(!0)}),[]);var P=(0,p.parseCodeBlockTitle)(i)||s,T=(0,a.useRef)(null),B=[],I=d(),L=Array.isArray(t)?t.join(""):t;if(i&&b.test(i)){var Z=i.match(b)[1];B=c()(Z).filter((function(e){return e>0}))}var x=null==n?void 0:n.split(" ").find((function(e){return e.startsWith("language-")})),M=null==x?void 0:x.replace(/language-/,"");!M&&u.defaultLanguage&&(M=u.defaultLanguage);var U=L.replace(/\n$/,"");if(0===B.length&&void 0!==M){for(var S,W="",z=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}}(M),F=L.replace(/\n$/,"").split("\n"),G=0;G<F.length;){var D=G+1,Y=F[G].match(z);if(null!==Y){switch(Y.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":W+=D+",";break;case"highlight-start":S=D;break;case"highlight-end":W+=S+"-"+(D-1)+","}F.splice(G,1)}else G+=1}B=c()(W),U=F.join("\n")}var R=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus()}(U),j(!0),setTimeout((function(){return j(!1)}),2e3)};return a.createElement(l.ZP,(0,r.Z)({},l.lG,{key:String(C),theme:I,code:U,language:M}),(function(e){var t=e.className,l=e.style,i=e.tokens,c=e.getLineProps,s=e.getTokenProps;return a.createElement("div",{className:(0,o.default)(m,null==n?void 0:n.replace(/language-[^ ]+/,""))},P&&a.createElement("div",{style:l,className:y},P),a.createElement("div",{className:(0,o.default)(g,M)},a.createElement("pre",{tabIndex:0,className:(0,o.default)(t,A,"thin-scrollbar"),style:l},a.createElement("code",{className:v},i.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=c({line:e,key:t});return B.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},s({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement("button",{ref:T,type:"button","aria-label":(0,f.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.default)(h,"clean-btn"),onClick:R},E?a.createElement(f.default,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(f.default,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},17642:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var r=n(83117),a=n(80102),o=n(67294),l=n(12859),i=n(39960),c=n(20625),s=n.n(c),u=n(86010),p=n(95999),d=n(89521);const f="anchorWithStickyNavbar_31ik",m="anchorWithHideOnScrollNavbar_3R7-";var g=["id"],y=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))};const A=function(e){return"h1"===e?y:(t=e,function(e){var n,l=e.id,i=(0,a.Z)(e,g),c=(0,d.useThemeConfig)().navbar.hideOnScroll;return l?o.createElement(t,(0,r.Z)({},i,{className:(0,u.default)("anchor",(n={},n[m]=c,n[f]=!c,n)),id:l}),i.children,o.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+l,title:(0,p.translate)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,i)});var t},h="details_1VDD";function v(e){var t=Object.assign({},e);return o.createElement(d.Details,(0,r.Z)({},t,{className:(0,u.default)("alert alert--info",h,t.className)}))}var b=["mdxType","originalType"];const k={head:function(e){var t=o.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,a.Z)(r,b));return o.createElement(e.props.originalType,l)}return e}(e)}));return o.createElement(l.Z,e,t)},code:function(e){var t=e.children;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement(s(),e):o.createElement("code",e)},a:function(e){return o.createElement(i.default,e)},pre:function(e){var t,n=e.children;return(0,o.isValidElement)(n)&&(0,o.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:o.createElement(s(),(0,o.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=o.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=o.createElement(o.Fragment,null,t.filter((function(e){return e!==n})));return o.createElement(v,(0,r.Z)({},e,{summary:n}),a)},h1:A("h1"),h2:A("h2"),h3:A("h3"),h4:A("h4"),h5:A("h5"),h6:A("h6")}},14732:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default="data:image/png;base64,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"},20625:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(67294)),o=r(n(42628)),l=r(n(52263)),i=r(n(72389)),c=n(44256),s=r(n(25510)),u=r(n(14732)),p=r(n(74071)),d=[{names:["fbsource","fbs"],project:"fbsource",canonicalName:"fbsource"},{names:["www"],project:"facebook-www",canonicalName:"www"}];t.default=function(e){var t,n,r,f,m,g,y,A,h=l.default().siteConfig,v=i.default(),b=o.default(e);if(!v)return b;if("string"!=typeof e.file)return b;if(c.isInternal()){if(!h.customFields)return b;var k=h.customFields,E=k.fbRepoName,j=k.ossRepoPath;if("string"!=typeof E)return b;t="string"==typeof j?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return e.startsWith("/")?e.slice(1):e})).map((function(e){return e.endsWith("/")?e.slice(0,e.length-1):e})).join("/")}(j,e.file):e.file;var w=d.find((function(e){return e.names.includes(E.toLowerCase())}));if(void 0===w)return b;n=function(e,t){var n=new URL("https://www.internalfb.com");return n.pathname="/code/"+e.canonicalName+"/"+t,n.toString()}(w,t),r=function(e,t){var n=new URL("https://www.internalfb.com/intern/nuclide/open/arc");return n.searchParams.append("project",e.project),n.searchParams.append("paths[0]",t),n.toString()}(w,t),f=function(e,t){if("fbsource"!==e.canonicalName||!t.startsWith("fbandroid"))return null;var n=new URL("fb-ide-opener://open");return n.searchParams.append("ide","intellij"),n.searchParams.append("filepath","/fbsource/"+t),n.toString()}(w,t)}else{if("string"!=typeof h.organizationName||"string"!=typeof h.projectName)return b;t=e.file,m=h.organizationName,g=h.projectName,y=e.file,(A=new URL("https://github.com")).pathname="/"+m+"/"+g+"/blob/master/"+y,n=A.toString(),r=null,f=null}var O=t.split("/"),C=O[O.length-1];return a.default.createElement("div",null,a.default.createElement("a",{href:n,title:"Browse entire file",target:"_blank",rel:"noreferrer",onClick:function(){return c.feedback.reportFeatureUsage({featureName:"browse-file",id:t})},className:p.default.CodeBlockFilenameTab},C),null!==r?a.default.createElement("a",{target:"_blank",rel:"noreferrer",href:r,onClick:function(){return c.feedback.reportFeatureUsage({featureName:"open-in-vscode",id:t})}},a.default.createElement("img",{style:{padding:"0 6px",height:"16px"},title:"Open in VSCode @ FB",src:s.default})):null,null!==f?a.default.createElement("a",{target:"_blank",rel:"noreferrer",href:f,onClick:function(){return c.feedback.reportFeatureUsage({featureName:"open-in-android-studio",id:t})}},a.default.createElement("img",{style:{padding:"0 6px",height:"16px"},title:"Open in Android Studio",src:u.default})):null,b)}},25510:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default="data:image/png;base64,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"},75854:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(17642)),o=n(44256),l=Object.assign(Object.assign({},a.default),{FbInternalOnly:o.FbInternalOnly,FBInternalOnly:o.FbInternalOnly,OssOnly:o.OssOnly,OSSOnly:o.OssOnly});t.default=l},74071:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={CodeBlockFilenameTab:"CodeBlockFilenameTab_2Kzc"}},87594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},23746:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>m,lG:()=>l});var r=n(87410);const a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var o=n(67294),l={Prism:r.default,theme:a};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=c({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=c({},n,{backgroundColor:null}),a};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const m=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=c({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?c({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=c({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?c({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var d=void 0,f=t[l],m=n[l][o];if("string"==typeof m?(f=l>0?f:["plain"],d=m):(f=p(f,m.type),m.alias&&(f=p(f,m.alias)),d=m.content),"string"==typeof d){var g=d.split(s),y=g.length;i.push({types:f,content:g[0]});for(var A=1;A<y;A++)u(i),c.push(i=[]),i.push({types:f,content:g[A]})}else l++,t.push(f),n.push(d),r.push(0),a.push(d.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return u(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component)}}]);