"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3089],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return g}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),m=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=m(a),g=n,d=p["".concat(c,".").concat(g)]||p[g]||u[g]||l;return a?r.createElement(d,i(i({ref:t},s),{},{components:a})):r.createElement(d,i({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8665:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(102),n=a(7294),l=a(6010),i=a(4446),o=a(9960),c="sidebar_2ahu",m="sidebarItemTitle_2hhb",s="sidebarItemList_2xAf",u="sidebarItem_2UVv",p="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",d=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:s},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:g},e.title))}))))}var f=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,o=e.children,c=(0,r.Z)(e,f),m=t&&t.items.length>0;return n.createElement(i.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},2754:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(7294),n=a(2263),l=a(8665),i=a(8561),o=a(9960),c=a(5999);var m=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(o.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(o.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},r.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},s=a(6681);var u=function(e){var t=e.metadata,a=e.items,o=e.sidebar,c=(0,n.Z)().siteConfig.title,u=t.blogDescription,p=t.blogTitle,g="/"===t.permalink?c:p;return r.createElement(l.Z,{title:g,description:u,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(m,{metadata:t}))}},8561:function(e,t,a){a.d(t,{Z:function(){return N}});var r=a(7294),n=a(6010),l=a(3905),i=a(5999),o=a(9960),c=a(4996),m=a(6681),s=a(1914),u=a(6753),p="blogPostTitle_GeHD",g="blogPostData_291c",d="blogPostDetailsFull_3kfx",v=a(62),f="image_1yU8";var b=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:f,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(o.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},h="authorCol_1R69";function E(e){var t=e.authors,a=e.assets;return 0===t.length?null:r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",h),key:t},r.createElement(b,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var N=function(e){var t,a,f,b,h=(f=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),N=(0,c.C)().withBaseUrl,_=e.children,y=e.frontMatter,Z=e.assets,P=e.metadata,k=e.truncated,O=e.isBlogPostPage,w=void 0!==O&&O,T=P.date,x=P.formattedDate,j=P.permalink,C=P.tags,M=P.readingTime,I=P.title,L=P.editUrl,U=P.authors,R=null!=(t=Z.image)?t:y.image,D=!w&&k,A=C.length>0;return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(b=w?"h1":"h2",r.createElement("header",null,r.createElement(b,{className:p,itemProp:"headline"},w?I:r.createElement(o.Z,{itemProp:"url",to:j},I)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:T,itemProp:"datePublished"},x),void 0!==M&&r.createElement(r.Fragment,null," \xb7 ",h(M))),r.createElement(E,{authors:U,assets:Z}))),R&&r.createElement("meta",{itemProp:"image",content:N(R,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:s.Z},_)),(A||k)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[d]=w,a))},A&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":D})},r.createElement(v.Z,{tags:C})),w&&L&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:L})),D&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":A})},r.createElement(o.Z,{to:P.permalink,"aria-label":"Read more about "+I},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),n=a(5999),l=a(3117),i=a(102),o=a(6010),c="iconEdit_2_ui",m=["className"];var s=function(e){var t=e.className,a=(0,i.Z)(e,m);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(6681);function p(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(s,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(6010),l=a(9960),i="tag_1Okp",o="tagRegular_3MiF",c="tagWithCount_1HU1";var m=function(e){var t,a=e.permalink,m=e.name,s=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[o]=!s,t[c]=s,t))},m,s&&r.createElement("span",null,s))}},62:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(6010),l=a(5999),i=a(7774),o="tags_2ga9",c="tag_11ep";function m(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:c},r.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);