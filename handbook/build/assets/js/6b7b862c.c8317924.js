(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6366],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return p},kt:function(){return l}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),u=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),l=r,w=m["".concat(d,".").concat(l)]||m[l]||c[l]||s;return a?t.createElement(w,o(o({ref:n},p),{},{components:a})):t.createElement(w,o({ref:n},p))}));function l(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3893:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var t=a(4034),r=a(9973),s=(a(7294),a(3905)),o={id:"dbcontext-update",title:"9.6 \u66f4\u65b0\u64cd\u4f5c",sidebar_label:"9.6 \u66f4\u65b0\u64cd\u4f5c"},i=void 0,d={unversionedId:"dbcontext-update",id:"dbcontext-update",isDocsHomePage:!1,title:"9.6 \u66f4\u65b0\u64cd\u4f5c",description:"\u4ee5\u4e0b\u5185\u5bb9\u5305\u542b Exists \u5355\u8bcd\u7684\u5728 Furion 2.6.0 + \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002",source:"@site/docs/dbcontext-update.mdx",sourceDirName:".",slug:"/dbcontext-update",permalink:"/furion/docs/dbcontext-update",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/dbcontext-update.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1621221909,formattedLastUpdatedAt:"5/17/2021",frontMatter:{id:"dbcontext-update",title:"9.6 \u66f4\u65b0\u64cd\u4f5c",sidebar_label:"9.6 \u66f4\u65b0\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.5 \u65b0\u589e\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-add"},next:{title:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-add-or-update"}},u=[{value:"9.6.1 \u66f4\u65b0\u5168\u90e8\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"961-\u66f4\u65b0\u5168\u90e8\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.2 \u66f4\u65b0\u5168\u90e8\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"962-\u66f4\u65b0\u5168\u90e8\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.3 \u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"963-\u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.4 \u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"964-\u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.5 \u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"965-\u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.6 \u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"966-\u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.7 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"967-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.8 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"968-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.9 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"969-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.10 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"9610-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.11 \u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"9611-\u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.12 \u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"9612-\u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.13 \u66f4\u65b0\u591a\u6761\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"9613-\u66f4\u65b0\u591a\u6761\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.14 \u66f4\u65b0\u591a\u6761\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"9614-\u66f4\u65b0\u591a\u6761\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.6.15 \u5ffd\u7565\u7a7a\u503c\u66f4\u65b0",id:"9615-\u5ffd\u7565\u7a7a\u503c\u66f4\u65b0",children:[]},{value:"9.6.16 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9616-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],p={toc:u};function c(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u529f\u80fd\u79fb\u9664\u58f0\u660e")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u5305\u542b ",(0,s.kt)("inlineCode",{parentName:"p"},"Exists")," \u5355\u8bcd\u7684\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"Furion 2.6.0 +")," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002"))),(0,s.kt)("h2",{id:"961-\u66f4\u65b0\u5168\u90e8\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.1 \u66f4\u65b0\u5168\u90e8\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Update(user);\n\n// \u793a\u4f8b\u4e8c\nuser.Update();\n\n// \u793a\u4f8b\u4e09\nrepository.ChangeEntityState(user, EntityState.Modified);\n\n// \u793a\u4f8b\u56db\nrepository.Entities.Update(user);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.UpdateAsync();\n")),(0,s.kt)("h2",{id:"962-\u66f4\u65b0\u5168\u90e8\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.2 \u66f4\u65b0\u5168\u90e8\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateNow(user);\n\n// \u793a\u4f8b\u4e8c\nuser.UpdateNow();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateNowAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.UpdateNowAsync();\n")),(0,s.kt)("h2",{id:"963-\u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.3 \u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateInclude(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateInclude(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateInclude(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nuser.UpdateInclude(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.UpdateInclude(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nuser.UpdateInclude(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateIncludeAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateIncludeAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateIncludeAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nawait user.UpdateIncludeAsync(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.UpdateIncludeAsync(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nawait user.UpdateIncludeAsync(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n')),(0,s.kt)("h2",{id:"964-\u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.4 \u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateIncludeNow(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateIncludeNow(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateIncludeNow(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nuser.UpdateIncludeNow(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.UpdateIncludeNow(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nuser.UpdateInclude(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateIncludeNowAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateIncludeNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateIncludeNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nawait user.UpdateIncludeNowAsync(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.UpdateIncludeNowAsync(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nawait user.UpdateIncludeNowAsync(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n')),(0,s.kt)("h2",{id:"965-\u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.5 \u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateExclude(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateExclude(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateExclude(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nuser.UpdateExclude(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.UpdateExclude(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nuser.UpdateExclude(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateExcludeAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateExcludeAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateExcludeAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nawait user.UpdateExcludeAsync(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.UpdateExcludeAsync(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nawait user.UpdateExcludeAsync(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n')),(0,s.kt)("h2",{id:"966-\u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.6 \u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateExcludeNow(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateExcludeNow(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateExcludeNow(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nuser.UpdateExcludeNow(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.UpdateExcludeNow(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nuser.UpdateExcludeNow(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateExcludeNowAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateExcludeNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateExcludeNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nawait user.UpdateExcludeNowAsync(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.UpdateExcludeNowAsync(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nawait user.UpdateExcludeNowAsync(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n')),(0,s.kt)("h2",{id:"967-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.7 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateExists(user);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateExistsAsync(user);\n")),(0,s.kt)("h2",{id:"968-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.8 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateExistsNow(user);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateExistsNowAsync(user);\n")),(0,s.kt)("h2",{id:"969-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.9 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateIncludeExists(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateIncludeExists(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateIncludeExists(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateIncludeExistsAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateIncludeExistsAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateIncludeExistsAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n')),(0,s.kt)("h2",{id:"9610-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.10 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateIncludeExistsNow(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateIncludeExistsNow(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateIncludeExistsNow(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateIncludeExistsNowAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateIncludeExistsNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateIncludeExistsNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n')),(0,s.kt)("h2",{id:"9611-\u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.11 \u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateExcludeExists(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateExcludeExists(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateExcludeExists(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateExcludeExistsAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateExcludeExistsAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateExcludeExistsAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n')),(0,s.kt)("h2",{id:"9612-\u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.12 \u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateExcludeExistsNow(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateExcludeExistsNow(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateExcludeExistsNow(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateExcludeExistsNowAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateExcludeExistsNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateExcludeExistsNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n')),(0,s.kt)("h2",{id:"9613-\u66f4\u65b0\u591a\u6761\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.13 \u66f4\u65b0\u591a\u6761\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Update(user, user2);\n\n// \u793a\u4f8b\u4e8c\nrepository.Update(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nrepository.Update(new[] {user, user2 });\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateAsync(user, user2);\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateAsync(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateAsync(new[] {user, user2 });\n")),(0,s.kt)("h2",{id:"9614-\u66f4\u65b0\u591a\u6761\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.6.14 \u66f4\u65b0\u591a\u6761\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateNow(user, user2);\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateNow(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateNow(new[] {user, user2 });\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateNowAsync(user, user2);\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateNowAsync(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateNowAsync(new[] {user, user2 });\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u77e5\u8bc6")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u6240\u6709\u5e26 ",(0,s.kt)("inlineCode",{parentName:"p"},"Now")," \u7ed3\u5c3e\u7684\u8868\u793a\u7acb\u5373\u63d0\u4ea4\u5230\u6570\u636e\u5e93\uff0c\u4e5f\u5c31\u662f\u7acb\u5373\u8c03\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"SaveChanges")," \u6216 ",(0,s.kt)("inlineCode",{parentName:"p"},"SaveChangesAsync"),"\u3002"))),(0,s.kt)("h2",{id:"9615-\u5ffd\u7565\u7a7a\u503c\u66f4\u65b0"},"9.6.15 \u5ffd\u7565\u7a7a\u503c\u66f4\u65b0"),(0,s.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"EFCore")," \u66f4\u65b0\u4f1a\u66f4\u65b0\u5168\u90e8\u5217\uff08\u9664\u5b9e\u4f53\u8ddf\u8e2a\u65b9\u5f0f\u4ee5\u5916\uff09\uff0c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u5e0c\u671b ",(0,s.kt)("inlineCode",{parentName:"p"},"Null")," \u503c\u65e0\u9700\u66f4\u65b0\uff0c\u8fd9\u662f\u6211\u4eec\u53ea\u9700\u8981\u5728\u66f4\u65b0\u65f6\u5019\u914d\u7f6e ",(0,s.kt)("inlineCode",{parentName:"p"},"ignoreNullValues")," \u53c2\u6570\u5373\u53ef\uff0c\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"repository.Update(entity, ignoreNullValues: true);\n")),(0,s.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5168\u5c40\u914d\u7f6e\uff0c\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"AppDbContext")," \u7684\u6d3e\u751f\u7c7b\u7684\u6784\u9020\u51fd\u6570\u4e2d\u542f\u7528\u5373\u53ef\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{11}","{11}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString", DbProvider.Sqlite)]\n    public class DefaultDbContext : AppDbContext<DefaultDbContext>\n    {\n        public DefaultDbContext(DbContextOptions<DefaultDbContext> options) : base(options)\n        {\n            InsertOrUpdateIgnoreNullValues = true;\n        }\n    }\n}\n')),(0,s.kt)("h2",{id:"9616-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.6.16 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,s.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}c.isMDXComponent=!0}}]);