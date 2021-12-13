"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3021],{3905:function(e,n,r){r.d(n,{Zo:function(){return i},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},i=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,u=e.originalType,d=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),l=c(r),m=a,N=l["".concat(d,".").concat(m)]||l[m]||p[m]||u;return r?t.createElement(N,s(s({ref:n},i),{},{components:r})):t.createElement(N,s({ref:n},i))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=r.length,s=new Array(u);s[0]=l;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<u;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4036:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return i},default:function(){return l}});var t=r(3117),a=r(102),u=(r(7294),r(3905)),s=["components"],o={id:"dbcontext-add-or-update",title:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c",sidebar_label:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c"},d=void 0,c={unversionedId:"dbcontext-add-or-update",id:"dbcontext-add-or-update",title:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c",description:"\u4ee5\u4e0b\u5185\u5bb9\u5728 Furion 2.5.1 + \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002\u6b64\u64cd\u4f5c\u8ba9\u5f88\u591a\u4e0d\u4e86\u89e3 EFCore \u7684\u5f00\u53d1\u8005\u4ea7\u751f\u4e86\u5f88\u5927\u7684\u8bef\u89e3\uff0c\u4e0d\u77e5\u4f55\u65f6\u65b0\u589e\u6216\u4f55\u65f6\u66f4\u65b0\uff0c\u6545\u79fb\u9664\u6b64\u529f\u80fd\u3002",source:"@site/docs/dbcontext-add-or-update.mdx",sourceDirName:".",slug:"/dbcontext-add-or-update",permalink:"/furion/docs/dbcontext-add-or-update",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/dbcontext-add-or-update.mdx",tags:[],version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1621175636,formattedLastUpdatedAt:"5/16/2021",frontMatter:{id:"dbcontext-add-or-update",title:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c",sidebar_label:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.6 \u66f4\u65b0\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-update"},next:{title:"9.8 \u5220\u9664\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-delete"}},i=[{value:"9.7.1 \u65b0\u589e\u6216\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"971-\u65b0\u589e\u6216\u66f4\u65b0\u4e0d\u7acb\u5373\u63d0\u4ea4",children:[],level:2},{value:"9.7.2 \u65b0\u589e\u6216\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"972-\u65b0\u589e\u6216\u66f4\u65b0\u7acb\u5373\u63d0\u4ea4",children:[],level:2},{value:"9.7.3 \u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"973-\u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4",children:[],level:2},{value:"9.7.4 \u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"974-\u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\u7acb\u5373\u63d0\u4ea4",children:[],level:2},{value:"9.7.5 \u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"975-\u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4",children:[],level:2},{value:"9.7.6 \u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"976-\u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\u7acb\u5373\u63d0\u4ea4",children:[],level:2},{value:"9.7.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"977-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[],level:2}],p={toc:i};function l(e){var n=e.components,r=(0,a.Z)(e,s);return(0,u.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,u.kt)("div",{parentName:"div",className:"admonition-heading"},(0,u.kt)("h5",{parentName:"div"},(0,u.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,u.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,u.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u529f\u80fd\u79fb\u9664\u58f0\u660e")),(0,u.kt)("div",{parentName:"div",className:"admonition-content"},(0,u.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u5728 ",(0,u.kt)("inlineCode",{parentName:"p"},"Furion 2.5.1 +")," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002\u6b64\u64cd\u4f5c\u8ba9\u5f88\u591a\u4e0d\u4e86\u89e3 ",(0,u.kt)("inlineCode",{parentName:"p"},"EFCore")," \u7684\u5f00\u53d1\u8005\u4ea7\u751f\u4e86\u5f88\u5927\u7684\u8bef\u89e3\uff0c\u4e0d\u77e5\u4f55\u65f6\u65b0\u589e\u6216\u4f55\u65f6\u66f4\u65b0\uff0c\u6545\u79fb\u9664\u6b64\u529f\u80fd\u3002"))),(0,u.kt)("h2",{id:"971-\u65b0\u589e\u6216\u66f4\u65b0\u4e0d\u7acb\u5373\u63d0\u4ea4"},"9.7.1 \u65b0\u589e\u6216\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertOrUpdate(user);\n\n// \u793a\u4f8b\u4e8c\nuser.InsertOrUpdate();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertOrUpdateAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.InsertOrUpdateAsync();\n")),(0,u.kt)("h2",{id:"972-\u65b0\u589e\u6216\u66f4\u65b0\u7acb\u5373\u63d0\u4ea4"},"9.7.2 \u65b0\u589e\u6216\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertOrUpdateNow(user);\n\n// \u793a\u4f8b\u4e8c\nuser.InsertOrUpdateNow();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertOrUpdateNowAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.InsertOrUpdateNowAsync();\n")),(0,u.kt)("h2",{id:"973-\u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4"},"9.7.3 \u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cs"},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertOrUpdateInclude(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nrepository.InsertOrUpdateInclude(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nrepository.InsertOrUpdateInclude(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nrepository.InsertOrUpdateInclude(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.InsertOrUpdateInclude(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nuser.InsertOrUpdateInclude("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nuser.InsertOrUpdateInclude(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nuser.InsertOrUpdateInclude(new[] {"Age", "Name"});\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertOrUpdateIncludeAsync(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nawait repository.InsertOrUpdateIncludeAsync(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nawait repository.InsertOrUpdateIncludeAsync(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nawait repository.InsertOrUpdateIncludeAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.InsertOrUpdateIncludeAsync(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nawait user.InsertOrUpdateIncludeAsync("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nawait user.InsertOrUpdateIncludeAsync(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nawait user.InsertOrUpdateIncludeAsync(new[] {"Age", "Name"});\n')),(0,u.kt)("h2",{id:"974-\u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\u7acb\u5373\u63d0\u4ea4"},"9.7.4 \u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cs"},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertOrUpdateIncludeNow(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nrepository.InsertOrUpdateIncludeNow(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nrepository.InsertOrUpdateIncludeNow(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nrepository.InsertOrUpdateIncludeNow(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.InsertOrUpdateIncludeNow(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nuser.InsertOrUpdateIncludeNow("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nuser.InsertOrUpdateIncludeNow(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nuser.InsertOrUpdateIncludeNow(new[] {"Age", "Name"});\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertOrUpdateIncludeNowAsync(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nawait repository.InsertOrUpdateIncludeNowAsync(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nawait repository.InsertOrUpdateIncludeNowAsync(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nawait repository.InsertOrUpdateIncludeNowAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.InsertOrUpdateIncludeNowAsync(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nawait user.InsertOrUpdateIncludeNowAsync("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nawait user.InsertOrUpdateIncludeNowAsync(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nawait user.InsertOrUpdateIncludeNowAsync(new[] {"Age", "Name"});\n')),(0,u.kt)("h2",{id:"975-\u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4"},"9.7.5 \u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cs"},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertOrUpdateExclude(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nrepository.InsertOrUpdateExclude(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nrepository.InsertOrUpdateExclude(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nrepository.InsertOrUpdateExclude(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.InsertOrUpdateExclude(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nuser.InsertOrUpdateExclude("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nuser.InsertOrUpdateExclude(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nuser.InsertOrUpdateExclude(new[] {"Age", "Name"});\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertOrUpdateExcludeAsync(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nawait repository.InsertOrUpdateExcludeAsync(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nawait repository.InsertOrUpdateExcludeAsync(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nawait repository.InsertOrUpdateExcludeAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.InsertOrUpdateExcludeAsync(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nawait user.InsertOrUpdateExcludeAsync("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nawait user.InsertOrUpdateExcludeAsync(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nawait user.InsertOrUpdateExcludeAsync(new[] {"Age", "Name"});\n')),(0,u.kt)("h2",{id:"976-\u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\u7acb\u5373\u63d0\u4ea4"},"9.7.6 \u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cs"},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertOrUpdateExcludeNow(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nrepository.InsertOrUpdateExcludeNow(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nrepository.InsertOrUpdateExcludeNow(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nrepository.InsertOrUpdateExcludeNow(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.InsertOrUpdateExcludeNow(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nuser.InsertOrUpdateExcludeNow("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nuser.InsertOrUpdateExcludeNow(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nuser.InsertOrUpdateExcludeNow(new[] {"Age", "Name"});\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertOrUpdateExcludeNowAsync(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nawait repository.InsertOrUpdateExcludeNowAsync(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nawait repository.InsertOrUpdateExcludeNowAsync(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nawait repository.InsertOrUpdateExcludeNowAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.InsertOrUpdateExcludeNowAsync(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nawait user.InsertOrUpdateExcludeNowAsync("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nawait user.InsertOrUpdateExcludeNowAsync(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nawait user.InsertOrUpdateExcludeNowAsync(new[] {"Age", "Name"});\n')),(0,u.kt)("h2",{id:"977-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.7.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,u.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,u.kt)("div",{parentName:"div",className:"admonition-heading"},(0,u.kt)("h5",{parentName:"div"},(0,u.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,u.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,u.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,u.kt)("div",{parentName:"div",className:"admonition-content"},(0,u.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,u.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}l.isMDXComponent=!0}}]);