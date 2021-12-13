"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9742],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return s}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=p(t),s=o,f=k["".concat(l,".").concat(s)]||k[s]||u[s]||a;return t?r.createElement(f,c(c({ref:n},d),{},{components:t})):r.createElement(f,c({ref:n},d))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=k;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8368:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),c=["components"],i={id:"jwt",title:"14. JWTEncryption \u9759\u6001\u7c7b",sidebar_label:"14. JWTEncryption \u9759\u6001\u7c7b"},l=void 0,p={unversionedId:"global/jwt",id:"global/jwt",title:"14. JWTEncryption \u9759\u6001\u7c7b",description:"14.1 \u751f\u6210 Token",source:"@site/docs/global/jwt.mdx",sourceDirName:"global",slug:"/global/jwt",permalink:"/furion/docs/global/jwt",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/global/jwt.mdx",tags:[],version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1626056819,formattedLastUpdatedAt:"7/12/2021",frontMatter:{id:"jwt",title:"14. JWTEncryption \u9759\u6001\u7c7b",sidebar_label:"14. JWTEncryption \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"13. FS \u9759\u6001\u7c7b",permalink:"/furion/docs/global/fs"}},d=[{value:"14.1 \u751f\u6210 <code>Token</code>",id:"141-\u751f\u6210-token",children:[],level:2},{value:"14.2 \u751f\u6210\u5237\u65b0 <code>Token</code>",id:"142-\u751f\u6210\u5237\u65b0-token",children:[],level:2},{value:"14.3 \u6839\u636e\u8fc7\u671f <code>Token</code> \u4ea4\u6362\u65b0 <code>Token</code>",id:"143-\u6839\u636e\u8fc7\u671f-token-\u4ea4\u6362\u65b0-token",children:[],level:2},{value:"14.4 \u6388\u6743\u5904\u7406\u7a0b\u5e8f\u81ea\u52a8\u5237\u65b0 <code>Token</code>",id:"144-\u6388\u6743\u5904\u7406\u7a0b\u5e8f\u81ea\u52a8\u5237\u65b0-token",children:[],level:2},{value:"14.5 \u9a8c\u8bc1 <code>Token</code> \u6709\u6548\u6027",id:"145-\u9a8c\u8bc1-token-\u6709\u6548\u6027",children:[],level:2},{value:"14.6 \u9a8c\u8bc1\u8bf7\u6c42\u4e2d <code>Token</code> \u6709\u6548\u6027",id:"146-\u9a8c\u8bc1\u8bf7\u6c42\u4e2d-token-\u6709\u6548\u6027",children:[],level:2},{value:"14.7 \u8bfb\u53d6 <code>Token</code> \u4fe1\u606f\uff08\u4e0d\u542b\u9a8c\u8bc1\uff09",id:"147-\u8bfb\u53d6-token-\u4fe1\u606f\u4e0d\u542b\u9a8c\u8bc1",children:[],level:2}],u={toc:d};function k(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"141-\u751f\u6210-token"},"14.1 \u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Token")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'// \u8bfb\u53d6\u914d\u7f6e\u4fe1\u606f\u751f\u6210 Token\nvar token = JWTEncryption.Encrypt(new Dictionary<string, object> { { "UserId", 1 }  });\n\n// \u914d\u7f6e Token \u8fc7\u671f\u65f6\u95f4\nvar token = JWTEncryption.Encrypt(new Dictionary<string, object> { { "UserId", 1 }  }, 20);\n\n// \u914d\u7f6e Token \u5bc6\u94a5\nvar token = JWTEncryption.Encrypt("monksoul@outlook.com", new Dictionary<string, object> { { "UserId", 1 }  });\n\n// \u914d\u7f6e\u7b97\u6cd5\nvar token = JWTEncryption.Encrypt("monksoul@outlook.com", new Dictionary<string, object> { { "UserId", 1 }  }, SecurityAlgorithms.HmacSha256);\n')),(0,a.kt)("h2",{id:"142-\u751f\u6210\u5237\u65b0-token"},"14.2 \u751f\u6210\u5237\u65b0 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Token")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var refreshToken = JWTEncryption.GenerateRefreshToken("token", 43200);\n')),(0,a.kt)("h2",{id:"143-\u6839\u636e\u8fc7\u671f-token-\u4ea4\u6362\u65b0-token"},"14.3 \u6839\u636e\u8fc7\u671f ",(0,a.kt)("inlineCode",{parentName:"h2"},"Token")," \u4ea4\u6362\u65b0 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Token")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var newToken = JWTEncryption.Exchange("\u8fc7\u671f token", "\u4e0e\u4e4b\u5339\u914d\u7684\u5237\u65b0 token", [\u65b0\u7684token\u8fc7\u671f\u65f6\u95f4], [\u5bb9\u9519\u503c]);\n')),(0,a.kt)("h2",{id:"144-\u6388\u6743\u5904\u7406\u7a0b\u5e8f\u81ea\u52a8\u5237\u65b0-token"},"14.4 \u6388\u6743\u5904\u7406\u7a0b\u5e8f\u81ea\u52a8\u5237\u65b0 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Token")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"JWTEncryption.AutoRefreshToken(context, httpContext);\n")),(0,a.kt)("h2",{id:"145-\u9a8c\u8bc1-token-\u6709\u6548\u6027"},"14.5 \u9a8c\u8bc1 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Token")," \u6709\u6548\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var (isVaild, tokenInfo) = JWTEncryption.Validate("token");\n')),(0,a.kt)("h2",{id:"146-\u9a8c\u8bc1\u8bf7\u6c42\u4e2d-token-\u6709\u6548\u6027"},"14.6 \u9a8c\u8bc1\u8bf7\u6c42\u4e2d ",(0,a.kt)("inlineCode",{parentName:"h2"},"Token")," \u6709\u6548\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var isValid = JWTEncryption.ValidateJwtBearerToken(httpContext, out tokenInfo);\n")),(0,a.kt)("h2",{id:"147-\u8bfb\u53d6-token-\u4fe1\u606f\u4e0d\u542b\u9a8c\u8bc1"},"14.7 \u8bfb\u53d6 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Token")," \u4fe1\u606f\uff08\u4e0d\u542b\u9a8c\u8bc1\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var tokenInfo = JWTEncryption.ReadJwtToken("token");\n')))}k.isMDXComponent=!0}}]);