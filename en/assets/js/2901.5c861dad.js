(self.webpackChunkruyisdk=self.webpackChunkruyisdk||[]).push([[2901],{4651:(e,t,n)=>{"use strict";n.d(t,{A:()=>M});n(6540);var r=n(4164),s=n(7131),a=n(4848);function o(e){let{children:t,className:n}=e;return(0,a.jsx)("article",{className:n,children:t})}var i=n(8774);const l={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:o}=(0,s.e)(),{permalink:c,title:u}=n,d=o?"h1":"h2";return(0,a.jsx)(d,{className:(0,r.A)(l.title,t),children:o?u:(0,a.jsx)(i.A,{to:c,children:u})})}var u=n(1312),d=n(5846),m=n(6266);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,d.W)();return t=>{const n=Math.ceil(t);return e(n,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,a.jsx)(a.Fragment,{children:n(t)})}function f(e){let{date:t,formattedDate:n}=e;return(0,a.jsx)("time",{dateTime:t,children:n})}function p(){return(0,a.jsx)(a.Fragment,{children:" \xb7 "})}function v(e){let{className:t}=e;const{metadata:n}=(0,s.e)(),{date:o,readingTime:i}=n,l=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,a.jsxs)("div",{className:(0,r.A)(g.container,"margin-vert--md",t),children:[(0,a.jsx)(f,{date:o,formattedDate:(c=o,l.format(new Date(c)))}),void 0!==i&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{}),(0,a.jsx)(h,{readingTime:i})]})]});var c}function x(e){return e.href?(0,a.jsx)(i.A,{...e}):(0,a.jsx)(a.Fragment,{children:e.children})}function b(e){let{author:t,className:n}=e;const{name:s,title:o,url:i,imageURL:l,email:c}=t,u=i||c&&`mailto:${c}`||void 0;return(0,a.jsxs)("div",{className:(0,r.A)("avatar margin-bottom--sm",n),children:[l&&(0,a.jsx)(x,{href:u,className:"avatar__photo-link",children:(0,a.jsx)("img",{className:"avatar__photo",src:l,alt:s})}),s&&(0,a.jsxs)("div",{className:"avatar__intro",children:[(0,a.jsx)("div",{className:"avatar__name",children:(0,a.jsx)(x,{href:u,children:(0,a.jsx)("span",{children:s})})}),o&&(0,a.jsx)("small",{className:"avatar__subtitle",children:o})]})]})}const j={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:n},assets:o}=(0,s.e)();if(0===n.length)return null;const i=n.every((e=>{let{name:t}=e;return!t}));return(0,a.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",i?j.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,a.jsx)("div",{className:(0,r.A)(!i&&"col col--6",i?j.imageOnlyAuthorCol:j.authorCol),children:(0,a.jsx)(b,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})},t)))})}function y(){return(0,a.jsxs)("header",{children:[(0,a.jsx)(c,{}),(0,a.jsx)(v,{}),(0,a.jsx)(A,{})]})}var w=n(440),N=n(5533);function _(e){let{children:t,className:n}=e;const{isBlogPostPage:o}=(0,s.e)();return(0,a.jsx)("div",{id:o?w.blogPostContainerID:void 0,className:(0,r.A)("markdown",n),children:(0,a.jsx)(N.A,{children:t})})}var k=n(7559),C=n(4336),P=n(2053);function T(){return(0,a.jsx)("b",{children:(0,a.jsx)(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function I(e){const{blogPostTitle:t,...n}=e;return(0,a.jsx)(i.A,{"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,a.jsx)(T,{})})}function L(){const{metadata:e,isBlogPostPage:t}=(0,s.e)(),{tags:n,title:o,editUrl:i,hasTruncateMarker:l,lastUpdatedBy:c,lastUpdatedAt:u}=e,d=!t&&l,m=n.length>0;if(!(m||d||i))return null;if(t){const e=!!(i||u||c);return(0,a.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,a.jsx)("div",{className:(0,r.A)("row","margin-top--sm",k.G.blog.blogFooterEditMetaRow),children:(0,a.jsx)("div",{className:"col",children:(0,a.jsx)(P.A,{tags:n})})}),e&&(0,a.jsx)(C.A,{className:(0,r.A)("margin-top--sm",k.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:u,lastUpdatedBy:c})]})}return(0,a.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,a.jsx)("div",{className:(0,r.A)("col",{"col--9":d}),children:(0,a.jsx)(P.A,{tags:n})}),d&&(0,a.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":m}),children:(0,a.jsx)(I,{blogPostTitle:o,to:e.permalink})})]})}function M(e){let{children:t,className:n}=e;const i=function(){const{isBlogPostPage:e}=(0,s.e)();return e?void 0:"margin-bottom--xl"}();return(0,a.jsxs)(o,{className:(0,r.A)(i,n),children:[(0,a.jsx)(y,{}),(0,a.jsx)(_,{children:t}),(0,a.jsx)(L,{})]})}},8256:(e,t,n)=>{"use strict";n.d(t,{A:()=>v});var r=n(6540),s=n(4581),a=n(4164),o=n(8774),i=n(1312),l=n(6347),c=n(9169);function u(e){const{pathname:t}=(0,l.zy)();return(0,r.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,c.ys)(e.permalink,t))}(e,t)))),[e,t])}const d={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var m=n(4848);function g(e){let{sidebar:t}=e;const n=u(t.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,a.A)(d.sidebar,"thin-scrollbar"),"aria-label":(0,i.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,a.A)(d.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,m.jsx)("ul",{className:(0,a.A)(d.sidebarItemList,"clean-list"),children:n.map((e=>(0,m.jsx)("li",{className:d.sidebarItem,children:(0,m.jsx)(o.A,{isNavLink:!0,to:e.permalink,className:d.sidebarItemLink,activeClassName:d.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=n(5600);function f(e){let{sidebar:t}=e;const n=u(t.items);return(0,m.jsx)("ul",{className:"menu__list",children:n.map((e=>(0,m.jsx)("li",{className:"menu__list-item",children:(0,m.jsx)(o.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,m.jsx)(h.GX,{component:f,props:e})}function v(e){let{sidebar:t}=e;const n=(0,s.l)();return t?.items.length?"mobile"===n?(0,m.jsx)(p,{sidebar:t}):(0,m.jsx)(g,{sidebar:t}):null}},9022:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(6540);var r=n(4164),s=n(8774),a=n(4848);function o(e){const{permalink:t,title:n,subLabel:o,isNext:i}=e;return(0,a.jsxs)(s.A,{className:(0,r.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}},6133:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(6540);var r=n(4164),s=n(8774);const a={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var o=n(4848);function i(e){let{permalink:t,label:n,count:i,description:l}=e;return(0,o.jsxs)(s.A,{href:t,title:l,className:(0,r.A)(a.tag,i?a.tagWithCount:a.tagRegular),children:[n,i&&(0,o.jsx)("span",{children:i})]})}},2053:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});n(6540);var r=n(4164),s=n(1312),a=n(6133);const o={tags:"tags_jXut",tag:"tag_QGVx"};var i=n(4848);function l(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,r.A)(o.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:o.tag,children:(0,i.jsx)(a.A,{...e})},e.permalink)))})]})}},7131:(e,t,n)=>{"use strict";n.d(t,{e:()=>l,i:()=>i});var r=n(6540),s=n(9532),a=n(4848);const o=r.createContext(null);function i(e){let{children:t,content:n,isBlogPostPage:s=!1}=e;const i=function(e){let{content:t,isBlogPostPage:n}=e;return(0,r.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:s});return(0,a.jsx)(o.Provider,{value:i,children:t})}function l(){const e=(0,r.useContext)(o);if(null===e)throw new s.dV("BlogPostProvider");return e}},5846:(e,t,n)=>{"use strict";n.d(t,{W:()=>c});var r=n(6540),s=n(4586);const a=["zero","one","two","few","many","other"];function o(e){return a.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),a=n.pluralForms.indexOf(s);return r[Math.min(a,r.length-1)]}(n,t,e)}}},1729:(e,t,n)=>{var r=n(5149)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var o,i,l=t.prefix||"__jp",c=t.name||l+s++,u=t.param||"callback",d=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,g=document.getElementsByTagName("script")[0]||document.head;d&&(i=setTimeout((function(){h(),n&&n(new Error("Timeout"))}),d));function h(){o.parentNode&&o.parentNode.removeChild(o),window[c]=a,i&&clearTimeout(i)}return window[c]=function(e){r("jsonp got",e),h(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+m(c)).replace("?&","?"),r('jsonp req "%s"',e),(o=document.createElement("script")).src=e,g.parentNode.insertBefore(o,g),function(){window[c]&&h()}};var s=0;function a(){}},5149:(e,t,n)=>{function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(t=e.exports=n(1666)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var s=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(s++,"%c"===e&&(a=s))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},1666:(e,t,n)=>{var r;function s(e){function n(){if(n.enabled){var e=n,s=+new Date,a=s-(r||s);e.diff=a,e.prev=r,e.curr=s,r=s;for(var o=new Array(arguments.length),i=0;i<o.length;i++)o[i]=arguments[i];o[0]=t.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var l=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var s=t.formatters[r];if("function"==typeof s){var a=o[l];n=s.call(e,a),o.splice(l,1),l--}return n})),t.formatArgs.call(e,o),(n.log||t.log||console.log.bind(console)).apply(e,o)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=s.debug=s.default=s).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,s=0;s<r;s++)n[s]&&("-"===(e=n[s].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(4005),t.names=[],t.skips=[],t.formatters={}},4005:e=>{var t=1e3,n=60*t,r=60*n,s=24*r,a=365.25*s;function o(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,i){i=i||{};var l,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var o=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!o)return;var i=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*a;case"days":case"day":case"d":return i*s;case"hours":case"hour":case"hrs":case"hr":case"h":return i*r;case"minutes":case"minute":case"mins":case"min":case"m":return i*n;case"seconds":case"second":case"secs":case"sec":case"s":return i*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===c&&!1===isNaN(e))return i.long?o(l=e,s,"day")||o(l,r,"hour")||o(l,n,"minute")||o(l,t,"second")||l+" ms":function(e){if(e>=s)return Math.round(e/s)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);