(this.webpackJsonphabari=this.webpackJsonphabari||[]).push([[0],{16:function(e,s,t){},30:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),n=t(18),i=t.n(n),l=(t(16),t(5)),r=t(3),o=t(2),j=t(15),d=t(0),b=a.a.createContext(),h=function(e){var s=e.children,t=Object(c.useState)(!1),a=Object(j.a)(t,2),n=a[0],i=a[1],l=Object(c.useState)(!1),r=Object(j.a)(l,2),o=r[0],h=r[1];return Object(d.jsx)(b.Provider,{value:{isSidebarOpen:n,isAnswer:o,setIsAnswer:h,openSidebar:function(){i(!0)},closeSidebar:function(){i(!1)}},children:s})},m=function(){return Object(c.useContext)(b)},u=function(){var e=m().openSidebar;return Object(d.jsx)("header",{className:"top",children:Object(d.jsxs)("div",{className:"head",children:[Object(d.jsx)("button",{className:"sidebar-toggle",onClick:e,children:Object(d.jsx)(o.a,{})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"logo",src:"https://habari-static-assets.s3.amazonaws.com/merchant_home/img/logo.png",alt:""})})]})})},x=function(){var e=m(),s=e.isSidebarOpen,t=e.closeSidebar;return Object(d.jsx)("aside",{className:"".concat(s?"sidebar show-sidebar":"sidebar"),children:Object(d.jsxs)("div",{className:"sidebar-main",children:[Object(d.jsx)("button",{className:"close-btn",onClick:t,children:Object(d.jsx)(o.h,{})}),Object(d.jsxs)("div",{className:"combine",children:[Object(d.jsxs)("ul",{className:"links",children:[Object(d.jsx)("li",{className:"link",children:Object(d.jsx)(l.b,{to:"Explore-Habari",children:"Explore Habari"})}),Object(d.jsx)("li",{className:"link",children:Object(d.jsx)(l.b,{to:"FAQ",children:"FAQ"})}),Object(d.jsx)("li",{className:"link",children:Object(d.jsx)(l.b,{to:"Users-Guide",children:"User's Guide"})})]}),Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)("input",{type:"text",placeholder:"User Name*"}),Object(d.jsx)("h2",{className:"forget",children:Object(d.jsx)(l.b,{to:"/",children:"Forgot Username?"})})]}),Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)("input",{type:"text",placeholder:"Password*"}),Object(d.jsx)("h2",{className:"forget",children:Object(d.jsx)(l.b,{to:"/",children:"Forgot Password?"})})]}),Object(d.jsxs)("div",{className:"bttn",children:[Object(d.jsx)("button",{type:"button",className:"btn",children:"Login"}),Object(d.jsx)("button",{type:"button",className:"btn",children:"SignUp"})]})]})]})})},O=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"africa",children:[Object(d.jsx)("h1",{style:{color:"white"},children:Object(d.jsx)("b",{children:"ONE AFRICA."})}),Object(d.jsx)("h1",{style:{color:"orangered"},children:Object(d.jsx)("b",{children:"ONE APP"})}),Object(d.jsx)("button",{className:"play",children:Object(d.jsx)(o.f,{})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"register",children:"Register as a merchant"})})]})})},p=[{id:1,image:"https://habari-static-assets.s3.amazonaws.com/merchant_home/img/venue-gallery/1.jpg"},{id:2,image:"https://habari-static-assets.s3.amazonaws.com/merchant_home/img/venue-gallery/2.jpg"},{id:3,image:"https://habari-static-assets.s3.amazonaws.com/merchant_home/img/venue-gallery/3.jpg"},{id:4,image:"https://habari-static-assets.s3.amazonaws.com/merchant_home/img/venue-gallery/4.jpg"},{id:5,image:"https://habari-static-assets.s3.amazonaws.com/merchant_home/img/venue-gallery/5.jpg"},{id:6,image:"https://habari-static-assets.s3.amazonaws.com/merchant_home/img/venue-gallery/6.jpg"},{id:7,image:"https://habari-static-assets.s3.amazonaws.com/merchant_home/img/venue-gallery/7.jpg"},{id:8,image:"https://habari-static-assets.s3.amazonaws.com/merchant_home/img/venue-gallery/8.jpg"}],g=function(){return Object(d.jsxs)("section",{className:"habari-pic",children:[Object(d.jsx)("div",{className:"explore",children:Object(d.jsx)("h2",{children:Object(d.jsx)("b",{children:"EXPLORE HABARI"})})}),Object(d.jsx)("div",{className:"underline"}),p.map((function(e){var s=e.id,t=e.image;return Object(d.jsx)("div",{className:"pictures",children:Object(d.jsx)("img",{className:"pic",src:t,alt:""})},s)}))]})},N=[{id:1,icon:Object(d.jsx)(o.g,{}),icon1:Object(d.jsx)(o.e,{}),question:"Can i open a merchant account using my user login details?",answer:"Absolutely, once you have created a user account, you can use the login details to sign into the merchant panel. However, you will need to update your business details."},{id:2,icon:Object(d.jsx)(o.g,{}),icon1:Object(d.jsx)(o.e,{}),question:"Do i need to upload any documents to set up my account?",answer:"If you are an individual, you do not need to upload any document. However, if you are a registered business owner, you will need to enter your Registration Number (RC) and Tax Indentification Number."},{id:3,icon:Object(d.jsx)(o.g,{}),icon1:Object(d.jsx)(o.e,{}),question:"Can i offer products, services, and content at the same time?",answer:"Definetely! You can sell your products on Habari, upload content, and also provide vendor services at the same time."},{id:4,icon:Object(d.jsx)(o.g,{}),icon1:Object(d.jsx)(o.e,{}),question:"Will Habari charge me for registeration as a merchant?",answer:"No registration is free"}],v=function(){var e=m(),s=e.isAnswer,t=e.setIsAnswer;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"faq",children:"FAQ"}),Object(d.jsx)("div",{className:"underline"})]}),N.map((function(e){var c=e.id,a=e.icon,n=e.icon1,i=e.question,l=e.answer;return console.log(c),Object(d.jsxs)("div",{className:"contain",children:[Object(d.jsxs)("div",{className:"que-btn",children:[Object(d.jsx)("h6",{className:"que",children:Object(d.jsx)("b",{children:i})}),Object(d.jsx)("button",{className:"icon",onClick:function(){return t(!s)},children:s?n:a})]}),s&&Object(d.jsx)("p",{children:l})]},c)}))]})},w=[{id:1,title:"Manage Your Orders",content:"Review orders generated on your storefront.",download:"Download"},{id:2,title:"Upload Your Products-Single",content:"List, view and edit products listed on your storefront.",download:"Download"},{id:3,title:"Upload Your Products-Bulk",content:"List, view and edit products listed on your storefront.",download:"Download"},{id:4,title:"Understand Your Dashboard",content:"Your store performance in a nutshell.",download:"Download"},{id:5,title:"Create & Edit Coupons",content:"Create discount to grow sales.",download:"Download"},{id:6,title:"Manage Your Shipping",content:"Customize your shipping options.",download:"Download"},{id:7,title:"Manage Your Wallet",content:"Track funds as it moves in and out of your wallet.",download:"Download"},{id:8,title:"Manage Your Returns",content:"Review and process request for product refunds.",download:"Download"},{id:9,title:"Upload Your Content",content:"Create, manage and edit various content on your channel.",download:"Download"}],y=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{className:"user-title",children:"USER'S GUIDE"}),Object(d.jsx)("div",{className:"underline"}),w.map((function(e){var s=e.id,t=e.title,c=e.content,a=e.download;return Object(d.jsxs)("div",{className:"user-box",children:[Object(d.jsx)("h5",{children:t}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("button",{children:a})]},s)}))]})},f=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"sign-up",children:[Object(d.jsx)("h2",{className:"signup-header",children:"SIGN UP"}),Object(d.jsx)("div",{className:"underline"}),Object(d.jsxs)("div",{className:"sign-input",children:[Object(d.jsx)("p",{className:"create",children:"Create your account"}),Object(d.jsx)("input",{className:"sign",type:"text",placeholder:"First Name*"}),Object(d.jsx)("input",{className:"sign",type:"text",placeholder:"Last Name*"}),Object(d.jsx)("input",{className:"sign",type:"text",placeholder:"User Name*"}),Object(d.jsx)("input",{className:"sign",type:"text",placeholder:"Telophone"}),Object(d.jsx)("input",{className:"sign",type:"text",placeholder:"Email"}),Object(d.jsx)("input",{className:"sign",type:"text",placeholder:"Birth Date*"}),Object(d.jsxs)("div",{className:"gender-sign",children:[Object(d.jsxs)("div",{className:"male-female",children:[Object(d.jsx)("p",{className:"gender",children:"Gender*"}),Object(d.jsx)("button",{className:"male",children:"Male"}),Object(d.jsx)("button",{className:"female",children:"Female"})]}),Object(d.jsx)("input",{className:"sign",type:"text",placeholder:"Password"})]})]}),Object(d.jsx)("button",{className:"btn",children:"Sign Up"})]})})},k=function(){return Object(d.jsxs)("footer",{className:"end",children:[Object(d.jsxs)("div",{className:"end-first",children:[Object(d.jsxs)("div",{className:"para",children:[Object(d.jsx)("p",{children:"On Habari, find a large catalogue of local and international songs, thousands of products at incredible prices."}),Object(d.jsx)("p",{children:"Re-connect with old and new friends with more valuable ways to share, support or celebrate them. Have a personal wallet that can be used to send money, pay bills, buy airtime or save towards a big goal."})]}),Object(d.jsxs)("div",{className:"modules",children:[Object(d.jsx)("h5",{children:"HABARI MODULES"}),Object(d.jsx)("div",{className:"line"}),Object(d.jsxs)("ul",{className:"module-link",children:[Object(d.jsxs)("li",{className:"module-links",children:[Object(d.jsx)(o.c,{})," Play"]}),Object(d.jsxs)("li",{className:"module-links",children:[Object(d.jsx)(o.c,{})," Shop"]}),Object(d.jsxs)("li",{className:"module-links",children:[Object(d.jsx)(o.c,{})," Pay"]}),Object(d.jsxs)("li",{className:"module-links",children:[Object(d.jsx)(o.c,{})," Events"]}),Object(d.jsxs)("li",{className:"module-links",children:[Object(d.jsx)(o.c,{})," Chats"]})]})]})]}),Object(d.jsxs)("div",{className:"end-second",children:[Object(d.jsxs)("div",{className:"useful-links",children:[Object(d.jsx)("h5",{children:"USEFUL LINKS"}),Object(d.jsx)("div",{className:"line"}),Object(d.jsxs)("ul",{className:"module-link",children:[Object(d.jsx)("li",{className:"module-links",children:Object(d.jsxs)(l.b,{to:"/",children:[Object(d.jsx)(o.c,{})," Returns & Refunds"]})}),Object(d.jsx)("li",{className:"module-links",children:Object(d.jsxs)(l.b,{to:"/",children:[Object(d.jsx)(o.c,{})," Shipping"]})}),Object(d.jsx)("li",{className:"module-links",children:Object(d.jsxs)(l.b,{to:"/",children:[Object(d.jsx)(o.c,{})," Terms and Conditions"]})}),Object(d.jsx)("li",{className:"module-links",children:Object(d.jsxs)(l.b,{to:"/",children:[Object(d.jsx)(o.c,{})," User's FAQ"]})}),Object(d.jsx)("li",{className:"module-links",children:Object(d.jsxs)(l.b,{to:"/",children:[Object(d.jsx)(o.c,{})," Privacy policy"]})})]})]}),Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsx)("h5",{children:"CONTACT US"}),Object(d.jsx)("div",{className:"line"}),Object(d.jsx)("div",{children:"Lagos, Nigeria"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Phone:"})," +2348157891175"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Phone:"})," +2349058690714"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Email:"})," care@habarigt.com"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Email:"})," support@habarigt.com"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:[Object(d.jsx)(o.i,{}),"  ",Object(d.jsx)(o.b,{})," ",Object(d.jsx)(o.d,{})," ",Object(d.jsx)(o.d,{})]})]})]})]})};var S=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.a,{children:Object(d.jsxs)(r.a,{path:"/",children:[Object(d.jsx)(u,{}),Object(d.jsx)(x,{}),Object(d.jsx)(O,{}),Object(d.jsx)(g,{}),Object(d.jsx)(v,{}),Object(d.jsx)(y,{}),Object(d.jsx)(f,{}),Object(d.jsx)(k,{})]})})})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(h,{children:Object(d.jsx)(S,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.709b6623.chunk.js.map