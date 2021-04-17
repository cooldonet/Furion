(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{197:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(206)),c={id:"encryption",title:"20. \u6570\u636e\u52a0\u89e3\u5bc6",sidebar_label:"20. \u6570\u636e\u52a0\u89e3\u5bc6"},o={unversionedId:"encryption",id:"encryption",isDocsHomePage:!1,title:"20. \u6570\u636e\u52a0\u89e3\u5bc6",description:"20.1 \u6570\u636e\u52a0\u89e3\u5bc6",source:"@site/docs/encryption.mdx",slug:"/encryption",permalink:"/docs/encryption",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/encryption.mdx",version:"current",lastUpdatedBy:"sourcehome",lastUpdatedAt:1618583481,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"20. \u6570\u636e\u52a0\u89e3\u5bc6",sidebar:"docs",previous:{title:"19. \u8fdc\u7a0b\u8bf7\u6c42",permalink:"/docs/http"},next:{title:"21. \u5168\u7403\u5316\u548c\u672c\u5730\u5316",permalink:"/docs/local-language"}},d=[{value:"20.1 \u6570\u636e\u52a0\u89e3\u5bc6",id:"201-\u6570\u636e\u52a0\u89e3\u5bc6",children:[]},{value:"20.2 \u5185\u7f6e\u52a0\u5bc6\u7b97\u6cd5",id:"202-\u5185\u7f6e\u52a0\u5bc6\u7b97\u6cd5",children:[]},{value:"20.3 \u52a0\u89e3\u5bc6\u4f7f\u7528",id:"203-\u52a0\u89e3\u5bc6\u4f7f\u7528",children:[{value:"20.3.1 <code>MD5</code> \u52a0\u5bc6",id:"2031-md5-\u52a0\u5bc6",children:[]},{value:"20.3.2 <code>DESC</code> \u52a0\u89e3\u5bc6",id:"2032-desc-\u52a0\u89e3\u5bc6",children:[]},{value:"20.3.3 <code>AES</code> \u52a0\u89e3\u5bc6",id:"2033-aes-\u52a0\u89e3\u5bc6",children:[]},{value:"20.3.4 <code>JWT</code> \u52a0\u89e3\u5bc6",id:"2034-jwt-\u52a0\u89e3\u5bc6",children:[]},{value:"20.3.5 <code>PBKDF2</code> \u52a0\u5bc6",id:"2035-pbkdf2-\u52a0\u5bc6",children:[]}]},{value:"20.4 \u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f",id:"204-\u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f",children:[]},{value:"20.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"205-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],s={toc:d};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"201-\u6570\u636e\u52a0\u89e3\u5bc6"},"20.1 \u6570\u636e\u52a0\u89e3\u5bc6"),Object(i.b)("p",null,"\u7531\u4e8e\u73b0\u5728\u7684\u4e92\u8054\u7f51\u8d8a\u5177\u53d1\u8fbe\uff0c\u6570\u636e\u6210\u4e3a\u4e86\u6211\u4eec\u751f\u6d3b\u7684\u4e00\u90e8\u5206\uff0c\u5f53\u7136\u4e5f\u5e26\u6765\u4e86\u5f88\u591a\u6570\u636e\u5b89\u5168\u6027\u7684\u95ee\u9898\uff0c\u6bd4\u5982\u7528\u6237\u5bc6\u7801\u660e\u6587\u5b58\u50a8\uff0c\u7528\u6237\u4fe1\u606f\u660e\u6587\u5b58\u5728\u5728\u6d4f\u89c8\u5668 ",Object(i.b)("inlineCode",{parentName:"p"},"cookies")," \u4e2d\u7b49\u7b49\u4e0d\u5b89\u5168\u64cd\u4f5c\u3002"),Object(i.b)("p",null,"\u6240\u4ee5\uff0c\u5bf9\u6570\u636e\u7684\u52a0\u89e3\u5bc6\u662f\u7cfb\u7edf\u5f00\u53d1\u5fc5\u8981\u7684\u73af\u8282\u3002"),Object(i.b)("h2",{id:"202-\u5185\u7f6e\u52a0\u5bc6\u7b97\u6cd5"},"20.2 \u5185\u7f6e\u52a0\u5bc6\u7b97\u6cd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MD5")," \u52a0\u5bc6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DESC")," \u52a0\u89e3\u5bc6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AES")," \u52a0\u89e3\u5bc6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JWT")," \u52a0\u89e3\u5bc6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PBKDF2")," \u52a0\u5bc6")),Object(i.b)("h2",{id:"203-\u52a0\u89e3\u5bc6\u4f7f\u7528"},"20.3 \u52a0\u89e3\u5bc6\u4f7f\u7528"),Object(i.b)("h3",{id:"2031-md5-\u52a0\u5bc6"},"20.3.1 ",Object(i.b)("inlineCode",{parentName:"h3"},"MD5")," \u52a0\u5bc6"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'// \u6d4b\u8bd5 MD5 \u52a0\u5bc6\uff0c\u6bd4\u8f83\nvar md5Hash = MD5Encryption.Encrypt("\u767e\u5c0f\u50e7");  // \u52a0\u5bc6\nvar isEqual = MD5Encryption.Compare("\u767e\u5c0f\u50e7", md5Hash); // \u6bd4\u8f83\nreturn (md5Hash, isEqual);\n')),Object(i.b)("h3",{id:"2032-desc-\u52a0\u89e3\u5bc6"},"20.3.2 ",Object(i.b)("inlineCode",{parentName:"h3"},"DESC")," \u52a0\u89e3\u5bc6"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'// \u6d4b\u8bd5 DESC \u52a0\u89e3\u5bc6\nvar descHash = DESCEncryption.Encrypt("\u767e\u5c0f\u50e7", "Furion"); // \u52a0\u5bc6\nvar str = DESCEncryption.Decrypt(descHash, "Furion");  // \u89e3\u5bc6\nreturn (descHash, str);\n')),Object(i.b)("h3",{id:"2033-aes-\u52a0\u89e3\u5bc6"},"20.3.3 ",Object(i.b)("inlineCode",{parentName:"h3"},"AES")," \u52a0\u89e3\u5bc6"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'// \u6d4b\u8bd5 AES \u52a0\u89e3\u5bc6\nvar key = Guid.NewGuid().ToString("N"); // \u5bc6\u94a5\uff0c\u957f\u5ea6\u5fc5\u987b\u4e3a24\u4f4d\u621632\u4f4d\n\nvar aesHash = AESEncryption.Encrypt("\u767e\u5c0f\u50e7", key); // \u52a0\u5bc6\nvar str2 = AESEncryption.Decrypt(aesHash, key); // \u89e3\u5bc6\nreturn (aesHash, str2);\n')),Object(i.b)("h3",{id:"2034-jwt-\u52a0\u89e3\u5bc6"},"20.3.4 ",Object(i.b)("inlineCode",{parentName:"h3"},"JWT")," \u52a0\u89e3\u5bc6"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'var token = JWTEncryption.Encrypt(new Dictionary<string, object>()  // \u52a0\u5bc6\n            {\n                { "UserId", user.Id },\n                { "Account",user.Account }\n            });\n\nvar tokenData = JWTEncryption.ReadJwtToken("\u4f60\u7684token");  // \u89e3\u5bc6\n\nvar (isValid, tokenData) = JWTEncryption.Validate("\u4f60\u7684token"); // \u9a8c\u8bc1token\u6709\u6548\u671f\n')),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"JWTEncryption")," \u52a0\u89e3\u5bc6\u5e76\u672a\u5305\u542b\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u9700\u8981\u5b89\u88c5 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion.Extras.Authentication.JwtBearer")," \u62d3\u5c55\u5305\u3002"))),Object(i.b)("h3",{id:"2035-pbkdf2-\u52a0\u5bc6"},"20.3.5 ",Object(i.b)("inlineCode",{parentName:"h3"},"PBKDF2")," \u52a0\u5bc6"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'// \u6d4b\u8bd5 PBKDF2 \u52a0\u5bc6\uff0c\u6bd4\u8f83\nvar basestring = PBKDF2Encryption.Encrypt("\u767e\u5c0f\u50e7");  // \u52a0\u5bc6\nvar isEqual = PBKDF2Encryption.Compare("\u767e\u5c0f\u50e7", basestring); // \u6bd4\u8f83\n')),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u652f\u6301\u9009\u62e9\u66f4\u591a\u53c2\u6570")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"PBKDF2")," \u8fd8\u53ef\u4ee5\u914d\u7f6e\u66f4\u591a\u53c2\u6570\uff1a"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Startup.cs")," \u4e2d\u6ce8\u518c\u670d\u52a1")),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-cs"},"services.AddPBKDF2EncryptionOptions();\n")),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"appsettings.json")," \u914d\u7f6e\uff1a")),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "PBKDF2EncryptionSettings": {\n    "InitialIterationCount": 110, // \u521d\u59cb\u8fed\u4ee3\u6b21\u6570\u7d2f\u52a0\u503c\n    "KeyDerivation": "HMACSHA256", // \u52a0\u5bc6\u7b97\u6cd5\u89c4\u5219  KeyDerivationPrf.HMACSHA256\n    "NumBytesRequested": 64 // \u6d3e\u751f\u5bc6\u94a5\u7684\u957f\u5ea6 (\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d) 512 / 8\n  }\n}\n')),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"KeyDerivation")," \u53ef\u9009\u503c\u6709\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"HMACSHA1"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"HMACSHA256"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"HMACSHA512"))))),Object(i.b)("h2",{id:"204-\u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f"},"20.4 \u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f\u8fdb\u884c ",Object(i.b)("inlineCode",{parentName:"p"},"MD5\u52a0\u5bc6\u3001AES/DESC\u52a0\u89e3\u5bc6"),"\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'using Furion.DataEncryption.Extensions;\n\n// MD5 \u52a0\u5bc6\nvar s = "Furion".ToMD5Encrypt();\nvar b = "Furion".ToMD5Compare(s);   // \u6bd4\u8f83\n\n// AES\u52a0\u89e3\u5bc6\nvar s = "Furion".ToAESEncrypt("sfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdfdfdfd");\nvar str = s.ToToAESDecrypt("sfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdfdfdfd");\n\n// DESC \u52a0\u89e3\u5bc6\nvar s = "Furion".ToDESCEncrypt("sfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdfdfdfd");\nvar str = s.ToDESCDecrypt("sfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdfdfdfd");\n\n// PBKDF2 \u52a0\u5bc6\nvar s = "Furion".ToPBKDF2Encrypt();\nvar b = "Furion".ToPBKDF2Compare(s);   // \u6bd4\u8f83\n')),Object(i.b)("h2",{id:"205-\u53cd\u9988\u4e0e\u5efa\u8bae"},"20.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(i.b)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}p.isMDXComponent=!0},206:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,u=b["".concat(c,".").concat(m)]||b[m]||l[m]||i;return t?r.a.createElement(u,o(o({ref:n},s),{},{components:t})):r.a.createElement(u,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);