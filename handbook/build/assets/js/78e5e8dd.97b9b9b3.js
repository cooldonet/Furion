(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5713],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(k,p(p({ref:n},c),{},{components:t})):a.createElement(k,p({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,p=new Array(r);p[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var s=2;s<r;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},833:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=t(4034),i=t(9973),r=(t(7294),t(3905)),p={id:"appstartup",title:"3. \u5e94\u7528\u542f\u52a8 Startup",sidebar_label:"3. \u5e94\u7528\u542f\u52a8 Startup"},o=void 0,l={unversionedId:"appstartup",id:"appstartup",isDocsHomePage:!1,title:"3. \u5e94\u7528\u542f\u52a8 Startup",description:"3.1 Startup \u7c7b",source:"@site/docs/appstartup.mdx",sourceDirName:".",slug:"/appstartup",permalink:"/furion/docs/appstartup",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/appstartup.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1622685129,formattedLastUpdatedAt:"6/3/2021",frontMatter:{id:"appstartup",title:"3. \u5e94\u7528\u542f\u52a8 Startup",sidebar_label:"3. \u5e94\u7528\u542f\u52a8 Startup"},sidebar:"docs",previous:{title:"2.4 \u795e\u5947\u7684 Inject",permalink:"/furion/docs/inject"},next:{title:"4.1 \u914d\u7f6e",permalink:"/furion/docs/configuration"}},s=[{value:"3.1 <code>Startup</code> \u7c7b",id:"31-startup-\u7c7b",children:[{value:"3.1.1 <code>Startup</code> \u4e24\u4e2a\u91cd\u8981\u65b9\u6cd5",id:"311-startup-\u4e24\u4e2a\u91cd\u8981\u65b9\u6cd5",children:[]}]},{value:"3.2 <code>AppStartup</code>",id:"32-appstartup",children:[{value:"3.2.1 \u5982\u4f55\u914d\u7f6e <code>AppStartup</code>",id:"321-\u5982\u4f55\u914d\u7f6e-appstartup",children:[]},{value:"3.2.2 <code>AppStartup</code> \u7ea6\u5b9a",id:"322-appstartup-\u7ea6\u5b9a",children:[]},{value:"3.2.3 <code>AppStartup</code> \u914d\u7f6e\u987a\u5e8f",id:"323-appstartup-\u914d\u7f6e\u987a\u5e8f",children:[]},{value:"3.2.4 <code>AppStartup</code> \u65b9\u6cd5\u8c03\u7528\u987a\u5e8f",id:"324-appstartup-\u65b9\u6cd5\u8c03\u7528\u987a\u5e8f",children:[]}]},{value:"3.3 <code>Startup</code> \u914d\u7f6e\u6700\u4f73\u5b9e\u8df5",id:"33-startup-\u914d\u7f6e\u6700\u4f73\u5b9e\u8df5",children:[]},{value:"3.4 \u6784\u9020\u51fd\u6570\u6ce8\u5165\u8bf4\u660e",id:"34-\u6784\u9020\u51fd\u6570\u6ce8\u5165\u8bf4\u660e",children:[]},{value:"3.5 \u5173\u4e8e <code>appsettings.json</code>",id:"35-\u5173\u4e8e-appsettingsjson",children:[]},{value:"3.6 \u795e\u5947\u7684 <code>Inject()</code>",id:"36-\u795e\u5947\u7684-inject",children:[]},{value:"3.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"37-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],c={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"31-startup-\u7c7b"},"3.1 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Startup")," \u7c7b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," \u7c7b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u9ed8\u8ba4\u8c03\u7528\u7684\u7c7b\uff0c\u8be5\u7c7b\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," \u4e2d\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'{19} title="Furion.Web.Entry\\Program.cs"',"{19}":!0,title:'"Furion.Web.Entry\\Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\nnamespace Furion.Web.Entry\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args)\n        {\n            return Host.CreateDefaultBuilder(args)\n                .ConfigureWebHostDefaults(webBuilder =>\n                {\n                    webBuilder\n                        .Inject()\n                        .UseStartup<Startup>();\n                });\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"311-startup-\u4e24\u4e2a\u91cd\u8981\u65b9\u6cd5"},"3.1.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Startup")," \u4e24\u4e2a\u91cd\u8981\u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," \u9ed8\u8ba4\u6709\u4e24\u4e2a\u91cd\u8981\u7684\u65b9\u6cd5:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ConfigureServices"),"\uff1a\u914d\u7f6e\u5e94\u7528\u6240\u9700\u670d\u52a1\uff0c\u5728\u8be5\u65b9\u6cd5\u4e2d\u53ef\u4ee5\u6dfb\u52a0\u5e94\u7528\u6240\u9700\u8981\u7684\u529f\u80fd\u6216\u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Configure"),"\uff1a\u914d\u7f6e\u5e94\u7528\u8bf7\u6c42\u5904\u7406\u7ba1\u9053")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'{9,13} title="Furion.Web.Entry\\Startup.cs"',"{9,13}":!0,title:'"Furion.Web.Entry\\Startup.cs"'},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.Web.Entry\n{\n    public class Startup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u4e0d\u6253\u7b97\u8be6\u7ec6\u8bb2 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," \u7c7b\u7684\u5177\u4f53\u529f\u80fd\u548c\u4f5c\u7528\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/startup?view=aspnetcore-3.1"},"ASP.NET Core - Startup \u7c7b")," \u7ae0\u8282\u3002"))),(0,r.kt)("h2",{id:"32-appstartup"},"3.2 ",(0,r.kt)("inlineCode",{parentName:"h2"},"AppStartup")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u63d0\u4f9b\u4e86\u66f4\u4e3a\u7075\u6d3b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," \u7c7b\u914d\u7f6e\u65b9\u5f0f\uff0c\u65e0\u9700\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web \u542f\u7528\u5c42")," \u4e2d\u914d\u7f6e\uff0c\u53ef\u5c06\u914d\u7f6e\u653e\u5230\u4efb\u4f55\u9879\u76ee\u5c42\u3002"),(0,r.kt)("p",null,"\u53ef\u80fd\u4f1a\u6709\u8bfb\u8005\u6709\u7591\u95ee\uff0c\u4e3a\u4ec0\u4e48\u8981\u591a\u6b64\u4e00\u4e3e\u5462\uff1f\u539f\u56e0\u6709\u51e0\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Startup")," \u7c7b\u9ed8\u8ba4\u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"Web \u5e94\u7528\u5c42")," \u7ed1\u5b9a\u5728\u4e00\u8d77\uff0c\u8fd9\u6837\u5c31\u4f1a\u5bfc\u81f4\u5982\u679c\u6211\u521b\u5efa\u4e86\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Web \u5e94\u7528\u5c42"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Startup")," \u53c8\u8981\u91cd\u65b0\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u968f\u7740\u4e1a\u52a1\u7684\u589e\u957f\uff0c\u9700\u8981\u96c6\u6210\u8d8a\u6765\u8d8a\u591a\u7684\u7b2c\u4e09\u65b9\u670d\u52a1\uff0c\u8fd9\u65f6\u5019 ",(0,r.kt)("inlineCode",{parentName:"li"},"Startup")," \u7c7b\u5c31\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u81c3\u80bf\uff0c\u96be\u4ee5\u7ef4\u62a4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Startup")," \u7c7b\u65e0\u6cd5\u4e0e\u5176\u4ed6\u9879\u76ee\u7c7b\u578b\u8fdb\u884c\u5171\u7528")),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86\u66f4\u52a0\u7075\u6d3b\u7684\u914d\u7f6e\u65b9\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup"),"\u3002"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u7684\u6d3e\u751f\u7c7b\u6240\u5728\u7684\u9879\u76ee\u5c42\u6ca1\u6709\u88ab\u542f\u52a8\u5c42\u76f4\u63a5\u6216\u95f4\u63a5\u6dfb\u52a0\u5f15\u7528\uff0c\u90a3\u4e48\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u5c31\u4f1a\u88ab\u5ffd\u7565\uff0c\u4e5f\u5c31\u662f\u4e0d\u4f1a\u81ea\u52a8\u8f7d\u5165\u6ce8\u518c\u3002"))),(0,r.kt)("h3",{id:"321-\u5982\u4f55\u914d\u7f6e-appstartup"},"3.2.1 \u5982\u4f55\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"h3"},"AppStartup")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u662f\u4e00\u4e2a\u62bd\u8c61\u7684\u7a7a\u7c7b\uff0c\u6ca1\u6709\u4efb\u4f55\u5b9a\u4e49\u6210\u5458\u3002\u6b63\u662f\u56e0\u4e3a\u8fd9\u6837\uff0c\u624d\u63d0\u4f9b\u66f4\u52a0\u7075\u6d3b\u7684\u914d\u7f6e\u65b9\u5f0f\u3002"),(0,r.kt)("h3",{id:"322-appstartup-\u7ea6\u5b9a"},"3.2.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"AppStartup")," \u7ea6\u5b9a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u6d3e\u751f\u7c7b\u53ea\u6709\u4e24\u4e2a\u5c0f\u7ea6\u5b9a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u516c\u5f00\u3001\u975e\u9759\u6001\u3001\u8fd4\u56de\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"void")," \u4e14\u65b9\u6cd5\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"IServiceCollection")," \u7c7b\u578b\uff0c\u90a3\u4e48\u4ed6\u5c31\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfigureServices")," \u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u516c\u5f00\u3001\u975e\u9759\u6001\u3001\u8fd4\u56de\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"void")," \u4e14\u65b9\u6cd5\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"IApplicationBuilder")," \u7c7b\u578b\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"IWebHostEnvironment")," \u7c7b\u578b\uff0c\u90a3\u4e48\u4ed6\u5c31\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Configure")," \u65b9\u6cd5")),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u7531\u7684\u7f16\u5199\u65b9\u6cd5\uff0c\u53ea\u8981\u9075\u5faa\u7ea6\u5b9a\u5373\u53ef\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{5,7,12,18,23}","{5,7,12,18,23}":!0},"using Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.EntityFramework.Core\n{\n    public class MyStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddDataValidation();\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            app.UseSwagger();\n        }\n\n        // \u53ef\u4ee5\u968f\u610f\u5b9a\u4e49\u540d\u5b57\u548c\u65b9\u6cd5\n        public void XXXXName(IServiceCollection services)\n        {\n        }\n\n        // \u53ef\u4ee5\u968f\u610f\u5b9a\u4e49\u540d\u5b57\u548c\u65b9\u6cd5\n        public void ZZZName(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"323-appstartup-\u914d\u7f6e\u987a\u5e8f"},"3.2.3 ",(0,r.kt)("inlineCode",{parentName:"h3"},"AppStartup")," \u914d\u7f6e\u987a\u5e8f"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u914d\u7f6e\u987a\u5e8f\u7531\u6240\u5728\u7a0b\u5e8f\u96c6\u7684\u540d\u79f0\u8fdb\u884c\u6b63\u5e8f\u8c03\u7528\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u914d\u7f6e\u6267\u884c\u987a\u5e8f\uff0c\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u6d3e\u751f\u7c7b\u4e2d\u8d34 ",(0,r.kt)("inlineCode",{parentName:"p"},"[AppStartup(order)]")," \u7279\u6027\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"order")," \u6570\u503c\u8d8a\u5927\uff0c\u8d8a\u5728\u524d\u9762\u8c03\u7528\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{5}","{5}":!0},"using Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppStartup(10)]\n    public class FirstStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n        }\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{5}","{5}":!0},"using Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppStartup(9)]\n    public class SecondStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n        }\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FirstStartup")," \u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"SecondStartup")," \u4e4b\u524d\u8c03\u7528\u3002"),(0,r.kt)("h3",{id:"324-appstartup-\u65b9\u6cd5\u8c03\u7528\u987a\u5e8f"},"3.2.4 ",(0,r.kt)("inlineCode",{parentName:"h3"},"AppStartup")," \u65b9\u6cd5\u8c03\u7528\u987a\u5e8f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u65b9\u6cd5\u8c03\u7528\u987a\u5e8f\u548c\u65b9\u6cd5\u7684\u4e66\u5199\u5148\u540e\u6709\u5173\uff0c\u8d8a\u5728\u524d\u9762\u7684\u65b9\u6cd5\u8d8a\u5148\u8c03\u7528\u3002"),(0,r.kt)("h2",{id:"33-startup-\u914d\u7f6e\u6700\u4f73\u5b9e\u8df5"},"3.3 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Startup")," \u914d\u7f6e\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("p",null,"\u5efa\u8bae ",(0,r.kt)("inlineCode",{parentName:"p"},"Web")," \u542f\u52a8\u5c42\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4fdd\u6301\u4e3a\u7a7a\u65b9\u6cd5\u4f53\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Furion.Web.Entry\\Startup.cs"',title:'"Furion.Web.Entry\\Startup.cs"'},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.Web.Entry\n{\n    public class Startup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u5c06\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web \u5e94\u7528\u5c42")," \u914d\u7f6e\u8fc1\u79fb\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion.Web.Core.Startup.cs")," \u4e2d\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Furion.Web.Core\\Startup.cs"',title:'"Furion.Web.Core\\Startup.cs"'},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace Furion.Web.Core\n{\n    [AppStartup(800)]\n    public sealed class FurWebCoreStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddCorsAccessor();\n\n            services.AddControllers().AddInject();\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            if (env.IsDevelopment())\n            {\n                app.UseDeveloperExceptionPage();\n            }\n\n            app.UseHttpsRedirection();\n\n            app.UseRouting();\n\n            app.UseCorsAccessor();\n\n            app.UseAuthentication();\n            app.UseAuthorization();\n\n            app.UseInject();\n\n            app.UseEndpoints(endpoints =>\n            {\n                endpoints.MapControllers();\n            });\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u8fd9\u6837\uff0c\u540e\u7eed\u66f4\u6362 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web \u5e94\u7528\u5c42")," \u4e5f\u65e0\u9700\u91cd\u65b0\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")),(0,r.kt)("h2",{id:"34-\u6784\u9020\u51fd\u6570\u6ce8\u5165\u8bf4\u660e"},"3.4 \u6784\u9020\u51fd\u6570\u6ce8\u5165\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u7684\u6d3e\u751f\u7c7b\u5e76\u672a\u63d0\u4f9b\u4f9d\u8d56\u6ce8\u5165\u7684\u529f\u80fd\uff0c\u4e5f\u5373\u662f\u65e0\u6cd5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u8fdb\u884c\u6ce8\u5165\u670d\u52a1\u3002\u539f\u56e0\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u662f\u4e2a\u7a7a\u7c7b\uff0c\u76ee\u7684\u662f\u7528\u6765\u67e5\u627e ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," \u7684\u3002"),(0,r.kt)("p",null,"\u90a3\u5982\u4f55\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e00\u6837\u4f7f\u7528\u670d\u52a1\u5462\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"IConfiguration")," \u5b9e\u4f8b\uff1a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"App.Configuration")),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u6790\u670d\u52a1\uff1a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"App.GetService<TService>()")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"app.ApplicationServices.GetService<TService>()"))),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"h5"},"Configure")," \u65b9\u6cd5\u6ce8\u5165")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure")," \u65b9\u6cd5\u63d0\u4f9b\u4e86\u53c2\u6570\u89e3\u6790\u6ce8\u5165\u529f\u80fd\uff0c\u4e5f\u5c31\u662f\u53ea\u8981\u5728\u65b9\u6cd5\u4e2d\u58f0\u660e\u63a5\u53e3\u53c2\u6570\u5373\u53ef\u81ea\u52a8\u6ce8\u5165\uff0c\u5982\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1,2}","{1,2}":!0},"// app \u548c env \u4f1a\u81ea\u52a8\u6ce8\u5165\npublic void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n{\n}\n")))),(0,r.kt)("h2",{id:"35-\u5173\u4e8e-appsettingsjson"},"3.5 \u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"h2"},"appsettings.json")),(0,r.kt)("p",null,"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u914d\u7f6e\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u4e2d\u914d\u7f6e\uff0c\u4f46\u662f\u8fd9\u6837\u7684\u65b9\u5f0f\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u914d\u7f6e\u4e00\u6837\u7684\u9053\u7406\uff0c\u4e00\u65e6\u6211\u4eec\u66f4\u6362\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web \u5e94\u7528\u5c42"),"\uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u53c8\u8981\u91cd\u65b0\u914d\u7f6e\u4e00\u6b21\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u66f4\u52a0\u7075\u6d3b\u7684\u65b9\u5f0f\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u53ea\u9700\u8981\u5728\u4efb\u4f55\u9879\u76ee\u5c42\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"strong"},".json")," \u6587\u4ef6\u5373\u53ef\u3002",(0,r.kt)("inlineCode",{parentName:"strong"},"Furion")," \u6846\u67b6\u6700\u540e\u4f1a\u81ea\u52a8\u5408\u5e76\u6240\u6709\u5206\u6563\u7684\u914d\u7f6e\u6587\u4ef6\u3002")),(0,r.kt)("p",null,"\u5982\u6211\u4eec\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion.EntityFramework.Core")," \u5c42\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"dbsettings.json")," \u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Furion.EntityFramework.Core\\dbsettings.json"',title:'"Furion.EntityFramework.Core\\dbsettings.json"'},'{\n  "ConnectionStrings": {\n    "DbConnectionString": "Server=localhost;Database=Furion;User=sa;Password=000000;MultipleActiveResultSets=True;",\n    "Sqlite3ConnectionString": "Data Source=./Furion.db"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65e0\u9700\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"appsettings.json")," \u4e2d\u914d\u7f6e"),"\uff0c\u4e0b\u9762\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u9ed8\u8ba4\u4ee3\u7801:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Information",\n      "Microsoft.EntityFrameworkCore": "Information"\n    }\n  },\n  "AllowedHosts": "*"\n}\n')),(0,r.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u628a\u914d\u7f6e\u6587\u4ef6\u5206\u6563\u5728\u4e0d\u540c\u9879\u76ee\u5c42\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5171\u7528\u548c\u5171\u4eab\u4e86\u3002"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u7279\u522b\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5176\u4ed6\u5c42\u7684\u914d\u7f6e\u6587\u4ef6\u4e0d\u80fd\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u547d\u540d\uff0c\u4f1a\u5bfc\u81f4\u8986\u76d6\u542f\u52a8\u5c42\u7684\u914d\u7f6e\u3002"),(0,r.kt)("p",{parentName:"div"},"\u53e6\u5916\uff0c\u5728\u5176\u4ed6\u5c42\u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"*.json")," \u6587\u4ef6\u5fc5\u987b\u8bbe\u7f6e\u6587\u4ef6\u5c5e\u6027\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"\u59cb\u7ec8\u590d\u5236\u6216\u8f83\u65b0\u590d\u5236"),"\u3002"))),(0,r.kt)("h2",{id:"36-\u795e\u5947\u7684-inject"},"3.6 \u795e\u5947\u7684 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Inject()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Inject()")," \u65b9\u6cd5\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u7684\u6700\u5c0f\u4fb5\u5165\u5f0f\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8ba9\u4efb\u4f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," Web \u9879\u76ee\u77ac\u95f4\u652f\u6301\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u7279\u6027\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u4e86\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web \u9879\u76ee"),"\uff0c\u53ea\u9700\u8981\u4e09\u4e2a\u6b65\u9aa4\u5373\u53ef\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"Furion.Web.Core")," \u9879\u76ee\u5f15\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Program.cs")," \u4e2d\u8c03\u7528\u5373\u53ef"),(0,r.kt)("li",{parentName:"ul"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u4ee3\u7801\u8fc1\u79fb\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"Furion.Web.Core")," \u9879\u76ee\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u4e2d")),(0,r.kt)("p",null,"\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'{18} title="Furion.Web.Entry\\Program.cs"',"{18}":!0,title:'"Furion.Web.Entry\\Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\nnamespace Furion.Web.Entry\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args)\n        {\n            return Host.CreateDefaultBuilder(args)\n                .ConfigureWebHostDefaults(webBuilder =>\n                {\n                    webBuilder.Inject()\n                              .UseStartup<Startup>();\n                });\n        }\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Furion.Web.Entry\\Startup.cs"',title:'"Furion.Web.Entry\\Startup.cs"'},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.Web.Entry\n{\n    public class Startup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n        }\n    }\n}\n")),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,r.kt)("inlineCode",{parentName:"h5"},"Startup.cs")," \u4ee3\u7801\u8fc1\u79fb")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u53ea\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure")," \u65b9\u6cd5\u4ee3\u7801\u8fc1\u79fb\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion.Web.Core.Startup.cs")," \u4e2d\u5373\u53ef\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u4e24\u4e2a\u65b9\u6cd5\u7559\u7a7a\u5373\u53ef\u3002"))),(0,r.kt)("p",null,"\u975e\u5e38\u7b80\u5355\u5427\u3002\u6211\u4eec\u540e\u7eed\u521b\u5efa\u4efb\u4f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"MVC"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"RazorPages"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Blazor")," \u9879\u76ee\u53ea\u9700\u8981\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion.Web.Core")," \u5f15\u7528\u548c\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Inject()")," \u5373\u53ef\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"Inject")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/docs/inject"},"2.4 \u795e\u5947\u7684 Inject")," \u7ae0\u8282\u3002"))),(0,r.kt)("h2",{id:"37-\u53cd\u9988\u4e0e\u5efa\u8bae"},"3.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}u.isMDXComponent=!0}}]);