"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5809],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8206:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"dbcontext-batch",title:"9.9 \u6279\u91cf\u64cd\u4f5c",sidebar_label:"9.9 \u6279\u91cf\u64cd\u4f5c"},c=void 0,s={unversionedId:"dbcontext-batch",id:"dbcontext-batch",title:"9.9 \u6279\u91cf\u64cd\u4f5c",description:"9.9.1 \u5173\u4e8e\u6279\u91cf\u64cd\u4f5c",source:"@site/docs/dbcontext-batch.mdx",sourceDirName:".",slug:"/dbcontext-batch",permalink:"/furion/docs/dbcontext-batch",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/dbcontext-batch.mdx",tags:[],version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1620382878,formattedLastUpdatedAt:"5/7/2021",frontMatter:{id:"dbcontext-batch",title:"9.9 \u6279\u91cf\u64cd\u4f5c",sidebar_label:"9.9 \u6279\u91cf\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.8 \u5220\u9664\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-delete"},next:{title:"9.10 \u67e5\u8be2\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-query"}},p=[{value:"9.9.1 \u5173\u4e8e\u6279\u91cf\u64cd\u4f5c",id:"991-\u5173\u4e8e\u6279\u91cf\u64cd\u4f5c",children:[],level:2},{value:"9.9.2 <code>Zack.EFCore.Batch</code> \u4f7f\u7528",id:"992-zackefcorebatch-\u4f7f\u7528",children:[{value:"9.9.2.1 \u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93 <code>Nuget</code> \u5305",id:"9921-\u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93-nuget-\u5305",children:[],level:3},{value:"9.9.2.2 \u6ce8\u518c\u5e76\u914d\u7f6e\u670d\u52a1",id:"9922-\u6ce8\u518c\u5e76\u914d\u7f6e\u670d\u52a1",children:[],level:3},{value:"9.9.2.3 \u57fa\u672c\u4f7f\u7528",id:"9923-\u57fa\u672c\u4f7f\u7528",children:[],level:3}],level:2},{value:"9.9.3 <code>EFCore.BulkExtensions</code> \u4f7f\u7528",id:"993-efcorebulkextensions-\u4f7f\u7528",children:[{value:"9.9.3.1 \u5e38\u89c1\u6279\u91cf\u64cd\u4f5c",id:"9931-\u5e38\u89c1\u6279\u91cf\u64cd\u4f5c",children:[],level:3},{value:"9.9.3.2 \u67e5\u8be2\u540e\u6279\u91cf\u64cd\u4f5c",id:"9932-\u67e5\u8be2\u540e\u6279\u91cf\u64cd\u4f5c",children:[],level:3},{value:"9.9.3.3 \u6279\u91cf\u64cd\u4f5c\u6027\u80fd",id:"9933-\u6279\u91cf\u64cd\u4f5c\u6027\u80fd",children:[],level:3}],level:2},{value:"9.9.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"994-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"991-\u5173\u4e8e\u6279\u91cf\u64cd\u4f5c"},"9.9.1 \u5173\u4e8e\u6279\u91cf\u64cd\u4f5c"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u53ea\u63d0\u4f9b\u5c0f\u6570\u636e\uff08100 \u6761 \u4ee5\u5185\uff09\u6279\u91cf\u6570\u636e\u64cd\u4f5c\uff0c\u5982\u679c\u9700\u8981\u66f4\u5927\u7684\u6570\u636e\u6279\u91cf\u5904\u7406\uff0c\u63a8\u8350\u4f7f\u7528\u7b2c\u4e09\u65b9\u5305 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yangzhongke/Zack.EFCore.Batch"},"Zack.EFCore.Batch"),"\uff0c\u652f\u6301\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u65e0\u7f1d\u8854\u63a5\u3002"),(0,i.kt)("h2",{id:"992-zackefcorebatch-\u4f7f\u7528"},"9.9.2 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Zack.EFCore.Batch")," \u4f7f\u7528"),(0,i.kt)("h3",{id:"9921-\u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93-nuget-\u5305"},"9.9.2.1 \u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Nuget")," \u5305"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MSSQL"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Zack.EFCore.Batch.MSSQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MySql"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Zack.EFCore.Batch.MySQL.Pomelo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Npgsql"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Zack.EFCore.Batch.Npgsql")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Oracle"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Zack.EFCore.Batch.Oracle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Sqlite"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Zack.EFCore.Batch.Sqlite"))),(0,i.kt)("h3",{id:"9922-\u6ce8\u518c\u5e76\u914d\u7f6e\u670d\u52a1"},"9.9.2.2 \u6ce8\u518c\u5e76\u914d\u7f6e\u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3,5}","{3,5}":!0},"services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<DefaultDbContext>(providerName: default, optionBuilder: opt =>\n    {\n        opt.UseBatchEF_Sqlite();    // SQlite \u6570\u636e\u5e93\u5305\n    });\n});\n")),(0,i.kt)("h3",{id:"9923-\u57fa\u672c\u4f7f\u7528"},"9.9.2.3 \u57fa\u672c\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// \u6279\u91cf\u66f4\u65b0\nawait repository.Context.BatchUpdate<Book>()\n    .Set(b => b.Price, b => b.Price + 3)\n    .Set(b => b.Title, b => s)\n    .Set(b => b.AuthorName,b=>b.Title.Substring(3,2)+b.AuthorName.ToUpper())\n    .Set(b => b.PubTime, b => DateTime.Now)\n    .Where(b => b.Id > n || b.AuthorName.StartsWith("Zack"))\n    .ExecuteAsync();\n\n// \u6279\u91cf\u5220\u9664\nawait repository.Context.DeleteRangeAsync<Book>(b => b.Price > n || b.AuthorName == "zack yang");\n')),(0,i.kt)("h2",{id:"993-efcorebulkextensions-\u4f7f\u7528"},"9.9.3 ",(0,i.kt)("inlineCode",{parentName:"h2"},"EFCore.BulkExtensions")," \u4f7f\u7528"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Nuget")," \u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"EFCore.BulkExtensions")," \u5305\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"9931-\u5e38\u89c1\u6279\u91cf\u64cd\u4f5c"},"9.9.3.1 \u5e38\u89c1\u6279\u91cf\u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// \u6279\u91cf\u63d2\u5165\nrepository.Context.BulkInsert(entitiesList);\nrepository.Context.BulkInsertAsync(entitiesList);\n\n// \u6279\u91cf\u66f4\u65b0\nrepository.Context.BulkUpdate(entitiesList);\nrepository.Context.BulkUpdateAsync(entitiesList);\n\n// \u6279\u91cf\u5220\u9664\nrepository.Context.BulkDelete(entitiesList);\nrepository.Context.BulkDeleteAsync(entitiesList);\n\n// \u6279\u91cf\u63d2\u5165\u6216\u66f4\u65b0\nrepository.Context.BulkInsertOrUpdate(entitiesList);\nrepository.Context.BulkInsertOrUpdateAsync(entitiesList);\n\n// \u6279\u91cf\u63d2\u5165\u6216\u66f4\u65b0\u6216\u5220\u9664\nrepository.Context.BulkInsertOrUpdateOrDelete(entitiesList);\nrepository.Context.BulkInsertOrUpdateOrDeleteAsync(entitiesList);\n\n// \u6279\u91cf\u8bfb\u53d6\u591a\u4e2a\u5b9e\u4f53\nrepository.Context.BulkRead(entitiesList);\nrepository.Context.BulkReadAsync(entitiesList);\n\n// \u6279\u91cf\u6e05\u7a7a\u8868\uff08\u614e\u7528\uff01\uff01\uff01\uff01\uff01\uff09\nrepository.Context.Truncate<Entity>();\nrepository.Context.TruncateAsync<Entity>();\n")),(0,i.kt)("h3",{id:"9932-\u67e5\u8be2\u540e\u6279\u91cf\u64cd\u4f5c"},"9.9.3.2 \u67e5\u8be2\u540e\u6279\u91cf\u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// \u6839\u636e\u6761\u4ef6\u6279\u91cf\u5220\u9664\nrepository.Where(a => a.ItemId >  500).BatchDelete();\nawait repository.Where(a => a.ItemId >  500).BatchDeleteAsync();\n\n// \u6839\u636e\u6761\u4ef6\u6279\u91cf\u66f4\u65b0\nrepository.Where(a => a.ItemId <= 500).BatchUpdate(a => new Item { Quantity = a.Quantity + 100 });\nrepository.Where(a => a.ItemId <= 500).BatchUpdate(new Item { Description = "Updated" });\nawait repository.Where(a => a.ItemId <= 500).BatchUpdateAsync(new Item { Description = "Updated" });\n\n// \u6279\u91cf\u66f4\u65b0\u6307\u5b9a\u5217\nvar updateColumns = new List<string> { nameof(Item.Quantity) };\nvar q = repository.Where(a => a.ItemId <= 500);\nint affected = q.BatchUpdate(new Item { Description = "Updated" }, updateColumns);\n')),(0,i.kt)("h3",{id:"9933-\u6279\u91cf\u64cd\u4f5c\u6027\u80fd"},"9.9.3.3 \u6279\u91cf\u64cd\u4f5c\u6027\u80fd"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operations\\Rows"),(0,i.kt)("th",{parentName:"tr",align:"right"},"100,000 EF"),(0,i.kt)("th",{parentName:"tr",align:"right"},"100,000 EFBulk"),(0,i.kt)("th",{parentName:"tr",align:"right"},"1,000,000 EFBulk"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Insert"),(0,i.kt)("td",{parentName:"tr",align:"right"},"38.98 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.10 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"17.99 s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Update"),(0,i.kt)("td",{parentName:"tr",align:"right"},"109.25 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"3.96 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"31.45 s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:"right"},"7.26 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.04 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"12.18 s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-----------------"),(0,i.kt)("td",{parentName:"tr",align:"right"},"------------"),(0,i.kt)("td",{parentName:"tr",align:"right"},"----------------"),(0,i.kt)("td",{parentName:"tr",align:"right"},"------------------")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Together")),(0,i.kt)("td",{parentName:"tr",align:"right"},"70.70 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"5.88 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"56.84 s")))),(0,i.kt)("h2",{id:"994-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.9.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"EFCore.BulkExtensions")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/borisdj/EFCore.BulkExtensions"},"EFCore.BulkExtensions \u5f00\u6e90\u4ed3\u5e93"),"\u3002"))))}u.isMDXComponent=!0}}]);