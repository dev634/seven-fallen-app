(this["webpackJsonpseven-fallen-app"]=this["webpackJsonpseven-fallen-app"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(2),a=c(29),r=c.n(a),i=(c(41),c(3)),l=(c(42),function(e){var t=e.classes;return Object(s.jsx)("footer",{className:t,children:e.children})}),o=c(13),u=c(9),d=c(6),j=c(21),m=c(16),b=c(17),h=(c(43),c(5));var p=function(e){var t=e.classes,c={item__1:!1,item__2:!1,item__3:!1,item__4:!1},a=Object(n.useState)(c),r=Object(i.a)(a,2),l=r[0],p=r[1],x=(Object(h.f)(),function(e){e.persist();var t=e.currentTarget.id;p(c),p((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(o.a)({},t,!0))}))});return Object(n.useEffect)((function(){p({item__2:!0})}),[]),Object(s.jsx)("nav",{className:t,children:Object(s.jsxs)("ul",{className:"menu",children:[Object(s.jsx)("div",{className:"menu__bubble"}),Object(s.jsx)("li",{id:"item__1",className:l.item__1?"menu__item move-up":"menu__item",onClick:x,children:Object(s.jsx)(d.b,{className:"menu__link",to:"/profile",children:Object(s.jsx)(j.b,{className:"menu__icon"})})}),Object(s.jsx)("li",{id:"item__2",className:l.item__2?"menu__item move-up":"menu__item",onClick:x,children:Object(s.jsx)(d.b,{id:"item__2",className:"menu__link",to:"/decks",children:Object(s.jsx)(j.a,{className:"menu__icon"})})}),Object(s.jsx)("li",{id:"item__3",className:l.item__3?"menu__item move-up":"menu__item",onClick:x,children:Object(s.jsx)(d.b,{className:"menu__link",to:"/cards",children:Object(s.jsx)(m.c,{className:"menu__icon"})})}),Object(s.jsx)("li",{id:"item__4",className:l.item__4?"menu__item move-up":"menu__item",onClick:x,children:Object(s.jsx)(d.b,{className:"menu__link",to:"/gamers",children:Object(s.jsx)(b.a,{className:"menu__icon"})})})]})})};var x=function(e){var t=e.pages;return Object(s.jsx)(h.c,{children:t.map((function(e,t){var c,n,a;return Object(s.jsx)(h.a,{exact:null!==(c=e.exact)&&void 0!==c?c:e.exact,strict:null!==(n=e.strict)&&void 0!==n?n:e.strict,path:null!==(a=e.path)&&void 0!==a?a:e.path,component:e.component},t)}))})},O=function(e){var t=e.classes,c=e.bgcolor,n=e.color,a=e.size,r=e.onClick,i=e.text;return Object(s.jsx)("button",{type:"button",className:t||"btn",style:{backgroundColor:c,color:n,width:a},onClick:r,children:i})},f=function(){return Object(s.jsx)("h2",{className:"form--separator",children:Object(s.jsx)("span",{className:"form--separator-text",children:"ou"})})},_=function(e){var t=Object(h.f)(),c=function(e,c){e.preventDefault(),t.push(c)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O,{classes:"btn",text:"Connexion",onClick:function(e){return c(e,"/login")}}),Object(s.jsx)(f,{}),Object(s.jsx)(O,{classes:"btn",text:"Subscribe",onClick:function(e){return c(e,"/subscribe")}})]})},v=c(4),g=c.n(v),k=c(8);function N(){return C.apply(this,arguments)}function C(){return(C=Object(k.a)(g.a.mark((function e(){var t,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",credentials:"include"},e.next=3,fetch("https://test-seven.site/api/decks",t);case 3:return c=e.sent,e.next=6,c.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(k.a)(g.a.mark((function e(t){var c,s,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",credentials:"include",body:t},e.next=3,fetch("https://test-seven.site/api/decks/add",c);case 3:return s=e.sent,n=s.json(),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return P.apply(this,arguments)}function P(){return(P=Object(k.a)(g.a.mark((function e(t){var c,s,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"DELETE",credentials:"include"},e.next=3,fetch("https://test-seven.site/api/decks/delete/".concat(t),c);case 3:if(!(s=e.sent).ok){e.next=9;break}return e.next=7,s.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){var t=e.message,c=e.classes,a=e.errorClass,r=e.flash,l=e.successClass,o=e.timing,u=e.handleFlash,d=Object(n.useState)(c),j=Object(i.a)(d,2),m=j[0],b=j[1],h="";return Object(n.useEffect)((function(){!1===r&&(b(c+" "+a),setTimeout((function(){h=c.replace(a,""),b(h)}),o||1e3)),!0===r&&(b(c+" "+l),setTimeout((function(){h=c.replace(l,""),b(h)}),o||1e3)),u(null)}),[r]),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("p",{className:m,children:t})})},E=function(e){return Object(s.jsx)(d.b,{className:"add__button",to:e.to,children:Object(s.jsx)(m.a,{})})},D=function(e){var t=e.classes;return Object(s.jsx)("ul",{className:t,children:e.children})},R=(c(50),c(14)),T=c(31),B=function(e){var t=e.id,c=e.title,n=e.total_ec,a=e.description,r=e.num_cards,i=(e.listState,e.listStateSetter),l=e.handleFlash,o=e.deleteStateSetter,u=function(){var e=Object(k.a)(g.a.mark((function e(){var c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:return c=e.sent,e.next=5,N();case 5:s=e.sent,200===c.code?l(!0):200!==c.code?l(!1):l(null),200===s.code?i(s):(console.log(s),i([])),o(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)("li",{className:"deck__block",children:[Object(s.jsxs)("div",{className:"deck__inner--left",children:[Object(s.jsx)("h3",{className:"deck__title",children:c}),Object(s.jsx)("p",{className:"deck__infos",children:a}),Object(s.jsxs)("div",{className:"deck__total",children:["Total : ",r]})]}),Object(s.jsxs)("div",{className:"deck__inner--right",children:[Object(s.jsxs)("div",{className:"inner__right--text",children:[Object(s.jsx)("h3",{className:"deck__ec--title",children:"Ec :"}),Object(s.jsx)("span",{className:"deck__ec--value",children:n})]}),Object(s.jsxs)("div",{className:"inner__right--actions",children:[Object(s.jsx)("div",{className:"action",onClick:function(e){return function(e,t,c){e.preventDefault(),u()}(e)},children:Object(s.jsx)(R.a,{})}),Object(s.jsx)(d.b,{className:"action",to:"/deck/".concat(c),children:Object(s.jsx)(T.a,{})})]})]})]},t)},L=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),l=Object(i.a)(r,2),o=l[0],u=l[1],d=Object(n.useState)({}),j=Object(i.a)(d,2),m=j[0],b=j[1],h=function(e){u(e)},p=function(e){b(e)};return Object(n.useEffect)(Object(k.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,console.log(t.code),a(t);case 5:case"end":return e.stop()}}),e)}))),[]),c.message.length>0&&200===c.code?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(D,{classes:"layout layout__1",children:c.message.map((function(e){return Object(s.jsx)(B,{id:e.id,title:e.deck_name,description:e.description,num_cards:e.num_cards,total_ec:e.total_ec,listState:c,listStateSetter:a,deleteState:m,deleteStateSetter:p,handleFlash:h})}))}),Object(s.jsx)(S,{classes:"message__flash",errorClass:"message__flash-error",successClass:"message__flash-done",message:m.message?m.message:"flash message",timing:750,flash:o,handleFlash:h}),Object(s.jsx)(E,{to:"/decks/new-deck"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"deck__list",children:Object(s.jsx)("p",{className:"deck__list--empty",children:"Your deck list is empty"})}),Object(s.jsx)(E,{to:"/decks/new-deck"})]})},I=(c(51),function(e){var t=e.classes,c=e.name,n=e.id,a=e.text,r=e.checked,i=e.onChange;return Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("input",{id:c,className:t,type:"checkbox",name:c,onChange:i,checked:r}),Object(s.jsx)("label",{className:"form__label",htmlFor:n,children:a})]})}),A=Object(n.createContext)(),M=function(e){var t=e.id,c=e.url,n=e.alt,a=e.mode,r=e.onChange;return Object(s.jsxs)("li",{className:"card__container",onChange:r,children:[Object(s.jsx)("img",{className:"card__image",src:c,alt:n}),"edit"===a?Object(s.jsx)(I,{id:t,classes:"card__checkbox"}):""]})},U=c.p+"static/media/merrlyn.a1bb939c.jpg",G=function(e){return Object(s.jsx)("header",{className:"header",children:e.children})},V=(c(52),function(e){return Object(s.jsx)("main",{id:"main",className:e.classes,children:e.children})}),K=function(e){var t=[{id:0,url:U,alt:"Ceci est une carte"},{id:1,url:U,alt:"Ceci est une carte"},{id:2,url:U,alt:"Ceci est une carte"},{id:3,url:U,alt:"Ceci est une carte"},{id:4,url:U,alt:"Ceci est une carte"},{id:5,url:U,alt:"Ceci est une carte"},{id:6,url:U,alt:"Ceci est une carte"},{id:7,url:U,alt:"Ceci est une carte"},{id:8,url:U,alt:"Ceci est une carte"},{id:9,url:U,alt:"Ceci est une carte"},{id:10,url:U,alt:"Ceci est une carte"},{id:11,url:U,alt:"Ceci est une carte"},{id:12,url:U,alt:"Ceci est une carte"},{id:13,url:U,alt:"Ceci est une carte"},{id:14,url:U,alt:"Ceci est une carte"},{id:15,url:U,alt:"Ceci est une carte"},{id:16,url:U,alt:"Ceci est une carte"},{id:17,url:U,alt:"Ceci est une carte"},{id:18,url:U,alt:"Ceci est une carte"},{id:19,url:U,alt:"Ceci est une carte"}];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(G,{classes:"header",children:Object(s.jsx)("h1",{children:e.location.pathname.slice(1)})}),Object(s.jsxs)(V,{classes:"page",children:[Object(s.jsx)(D,{classes:"layout layout__3 mb-5",children:t.map((function(e){return Object(s.jsx)(M,{url:e.url,alt:e.alt},e.id)}))}),Object(s.jsx)(E,{to:"/cards/from"})]})]})},z=(c(53),function(){var e=Object(n.useState)({contact:{id:228,gender:"M",username:"Pablo1803",firstname:"Pablo",lastname:"Escobar",email:"plata.o.plomo@stayalive.fr"},coordinates:{city:"Medelin",country:"Colombie"}}),t=Object(i.a)(e,2),c=t[0];t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(G,{classes:"header",children:Object(s.jsx)("h1",{children:"Profile"})}),Object(s.jsx)(V,{classes:"page",children:Object(s.jsx)("div",{className:"page--container",children:Object(s.jsxs)("form",{className:"form",children:[Object(s.jsxs)("div",{className:"profile__heading",children:[Object(s.jsx)(b.b,{className:"profile__avatar"}),Object(s.jsx)("h4",{className:"profile__username",children:c.contact.username}),Object(s.jsx)("p",{className:"profile__userid",children:c.contact.id})]}),Object(s.jsxs)("div",{className:"form--section",children:[Object(s.jsx)("h4",{className:"form__section--title",children:"Contact"}),Object(s.jsx)("div",{className:"form__radio--group",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"form__radio--button",children:[Object(s.jsx)("label",{className:"form__radio--label",htmlFor:"gender",children:"F"}),Object(s.jsx)("input",{className:"form--radio",type:"radio",name:"gender",id:"gender",value:"F"})]}),Object(s.jsxs)("div",{className:"form__radio--button",children:[Object(s.jsx)("label",{className:"form__radio--label",htmlFor:"gender",children:"M"}),Object(s.jsx)("input",{className:"form--radio",type:"radio",name:"gender",id:"gender",value:"M"})]}),Object(s.jsxs)("div",{className:"form__radio--button",children:[Object(s.jsx)("label",{className:"form__radio--label",htmlFor:"gender",children:"Autre"}),Object(s.jsx)("input",{className:"form--radio",type:"radio",name:"gender",id:"gender",value:"M"})]})]})}),Object(s.jsx)("input",{type:"text",className:"form--input",placeholder:"firstname",disabled:!0,value:c.contact.firstname}),Object(s.jsx)("input",{type:"text",className:"form--input",placeholder:"lastname",disabled:!0,value:c.contact.lastname}),Object(s.jsx)("input",{type:"email",className:"form--input",placeholder:"email",disabled:!0,value:c.contact.email})]}),Object(s.jsxs)("div",{className:"form--section",children:[Object(s.jsx)("h4",{className:"form__section--title",children:"Coordinates"}),Object(s.jsx)("input",{type:"text",className:"form--input",placeholder:"city",disabled:!0,value:c.coordinates.city}),Object(s.jsx)("input",{type:"text",className:"form--input",placeholder:"country",disabled:!0,value:c.coordinates.country})]}),Object(s.jsxs)("div",{className:"form--section",children:[Object(s.jsx)("h4",{className:"form__section--title",children:"Pr\xe9ferences"}),Object(s.jsx)("input",{type:"text",className:"form--input",placeholder:"username",disabled:!0}),Object(s.jsx)("input",{type:"text",className:"form--input",placeholder:"username",disabled:!0}),Object(s.jsx)("input",{type:"text",className:"form--input",placeholder:"username",disabled:!0}),Object(s.jsx)("input",{type:"text",className:"form--input",placeholder:"username",disabled:!0})]}),Object(s.jsx)(O,{classes:"btn",text:"update",onClick:function(){}})]})})})]})}),H=(c(54),function(e){return Object(s.jsx)(b.b,{className:e.classes})}),J=function(e){var t=e.content;return Object(s.jsxs)("li",{className:"user__block",children:[Object(s.jsxs)("div",{className:"user__heading",children:[t.img?Object(s.jsx)("img",{src:t.img,alt:"user avatar"}):Object(s.jsx)(H,{classes:"user__default--icon"}),t.title?Object(s.jsx)("h4",{children:t.title}):""]}),Object(s.jsxs)("div",{className:"user__body",children:[t.id?Object(s.jsxs)("p",{children:["ID : ",t.id]}):"",t.location?Object(s.jsx)("p",{children:t.location}):"",t.deck_num?Object(s.jsxs)("p",{children:["Decks : ",t.deck_num]}):""]})]},t.id)},q=function(e){var t=r;e.onChange||(e.onChange=function(){}),e.onBlur||(e.onBlur=function(){});var c=e.classes,n=e.placeholder,a=e.onChange,r=e.text,i=e.onBlur;return Object(s.jsx)("input",{className:c,type:"text",placeholder:n,onBlur:function(e){e.preventDefault(),i(e)},onChange:function(e){e.preventDefault(),a(e)},value:t})},Y=function(e){var t=e.classes,c=e.inputClasses,n=e.iconClasses,a=e.onChange,r=e.onClick,i=e.placeholder,l=e.text;return Object(s.jsxs)("div",{className:t,onClick:r,children:[Object(s.jsx)(q,{classes:c,placeholder:i,onChange:a,value:l}),Object(s.jsx)(R.d,{className:n})]})},Q=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(G,{classes:"header",children:Object(s.jsx)("h1",{children:"Gamers"})}),Object(s.jsxs)(V,{classes:"page",children:[Object(s.jsx)(D,{classes:"layout layout__3 mb-4",children:[{id:"0",title:"Pablo",location:"Paris FR",deck_num:25},{id:1,title:"Pablo",location:"Paris FR",deck_num:25},{id:2,title:"Pablo",location:"Paris FR",deck_num:25},{id:3,title:"Pablo",location:"Paris FR",deck_num:25},{id:4,title:"Pablo",location:"Paris FR",deck_num:25},{id:5,title:"Pablo",location:"Paris FR",deck_num:25},{id:6,title:"Pablo",location:"Paris FR",deck_num:25},{id:7,title:"Pablo",location:"Paris FR",deck_num:25},{id:8,title:"Pablo",location:"Paris FR",deck_num:25},{id:9,title:"Pablo",location:"Paris FR",deck_num:25},{id:10,title:"Pablo",location:"Paris FR",deck_num:25},{id:11,title:"Pablo",location:"Paris FR",deck_num:25},{id:12,title:"Pablo",location:"Paris FR",deck_num:25},{id:13,title:"Pablo",location:"Paris FR",deck_num:25},{id:14,title:"Pablo",location:"Paris FR",deck_num:25},{id:15,title:"Pablo",location:"Paris FR",deck_num:25}].map((function(e){return Object(s.jsx)(J,{content:e},e.id)}))}),Object(s.jsx)(Y,{classes:"search__bar",inputClasses:"search__bar--input",iconClasses:"search__bar--icon",onChange:function(e){a(e.target.value)},text:c,placeholder:"Search ..."})]})]})};var W=function(){return Object(s.jsx)("h1",{className:"title",children:"404 - Not found"})},X=(c(55),c(56),function(e){e.onClick;return Object(s.jsx)("a",{style:{backgroundColor:e.bgcolor},href:e.url,className:"btn btn__social",children:e.children})}),Z=c(34),$=c(33),ee=Object(n.createContext)(),te=c(32);c.n(te).a.config();var ce=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),a=c[0],r=c[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),u=o[0],d=o[1],j=Object(h.f)(),m=function(e){r(e.target.value)},b=function(e){d(e.target.value)};return Object(s.jsx)(ee.Consumer,{children:function(e){return Object(s.jsxs)("form",{className:"form",onSubmit:function(t){return e.setLogin(t,j.push)},children:[Object(s.jsxs)("div",{className:"form--section",children:[Object(s.jsx)("h2",{className:"form--title",children:"Login"}),Object(s.jsx)("input",{className:"form--input",id:"email",name:"email",type:"text",placeholder:"Enter your username ...",onChange:m,onBlur:m,value:a}),Object(s.jsx)("input",{id:"password",className:"form--input",name:"password",type:"password",placeholder:"Enter your password ...",onChange:b,onBlur:b,value:u})]}),Object(s.jsx)("button",{className:"btn",type:"submit",children:"Envoyer"}),Object(s.jsx)(f,{}),Object(s.jsxs)("ul",{className:"social__icons--list",children:[Object(s.jsx)("li",{children:Object(s.jsxs)(X,{bgcolor:"#395693",url:"https://test-seven.site/api/auth/facebook",children:[Object(s.jsx)($.a,{className:"icons facebook__icon"}),Object(s.jsx)("span",{className:"btn__social--text",children:"Login facebook"})]})}),Object(s.jsx)("li",{children:Object(s.jsxs)(X,{bgcolor:"#F7F7F7",url:"https://test-seven.site/api/auth/google",children:[Object(s.jsx)(Z.a,{className:"icons google__icon"}),Object(s.jsx)("span",{className:"btn__social--text",children:"Login Google"})]})})]})]})}})},se=(c(59),function(){var e=Object(h.g)();return console.log(e),Object(s.jsx)("div",{children:Object(s.jsxs)("h1",{className:"deck__setting--title",children:[e.name," settings page"]})})}),ne=function(e){var t=e.children;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(V,{classes:"page",children:t instanceof Array?t.map((function(e,t){return e})):""})})},ae=function(e){e.onClick||(e.onClick=function(){});var t=e.text,c=e.url,n=e.classes,a=e.onClick,r=e.timing,i=Object(h.f)(),l=function(){var e=Object(k.a)(g.a.mark((function e(t){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a(t);case 3:s=e.sent,setTimeout((function(){!0===s&&i.push(c)}),r||1e3);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)("button",{className:n||"btn",onClick:l,children:t})},re=function(e){var t=Object(n.useState)({deck_name:"",visibility:!0}),c=Object(i.a)(t,2),a=c[0],r=c[1],l=Object(n.useState)(!0),o=Object(i.a)(l,2),d=o[0],j=o[1],m=Object(n.useState)({}),b=Object(i.a)(m,2),h=b[0],p=b[1],x=Object(n.useState)(null),O=Object(i.a)(x,2),f=O[0],_=O[1],v=function(){var e=Object(k.a)(g.a.mark((function e(t){var c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(c=new FormData).append("deck_name",a.deck_name),c.append("visibility",a.visibility),e.next=6,y(c);case 6:if(200!==(s=e.sent).code){e.next=13;break}return _(!0),p(s),e.abrupt("return",!0);case 13:if(200===s.code){e.next=19;break}return _(!1),p(s),e.abrupt("return",!1);case 19:return _(null),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(ne,{children:[Object(s.jsx)("form",{className:"form",children:Object(s.jsxs)("div",{className:"form--section",children:[Object(s.jsx)("h4",{className:"form__section--title",children:"Informations"}),Object(s.jsx)(q,{classes:!0===d?"form--input bad__input":"form--input good__input",placeholder:"Nom du deck",onChange:function(e){r(Object(u.a)(Object(u.a)({},a),{},{deck_name:e.target.value})),e.target.value.length>0?j(!1):j(!0)},onBlur:function(e){r(Object(u.a)(Object(u.a)({},a),{},{deck_name:e.target.value})),e.target.value.length>0?j(!1):j(!0)},value:a.deck_name}),Object(s.jsx)(I,{id:"visible",name:"visibility",classes:"form__checkbox",text:"public",onChange:function(e){r(Object(u.a)(Object(u.a)({},a),{},{visibility:e.target.checked}))},checked:a.visibility}),Object(s.jsx)(S,{classes:"message__flash",errorClass:"message__flash-error",successClass:"message__flash-done",message:h.message?h.message:"flash message",flash:f,timing:750,handleFlash:function(e){_(e)}})]})}),Object(s.jsxs)("div",{className:"buttons__block",children:[Object(s.jsx)(ae,{text:"Create",url:"/decks/new-deck/create",onClick:v,timing:1e3}),Object(s.jsx)(ae,{text:"Import",url:"/decks/new-deck/import"}),Object(s.jsx)(ae,{text:"Back",url:"/decks"})]})]})})};function ie(e,t){switch(t.type){case"STARTER_DECK":return{choice:"/cards/from/starter"};case"INDIVIDUAL":return{choice:"/cards/from/individual"};case"BACK":return{choice:"/cards"};default:return e}}var le=function(e){var t=Object(n.useReducer)(ie,{choice:"/cards/from"}),c=Object(i.a)(t,2),a=c[0],r=c[1],l=function(e,t){e.preventDefault(),r({type:t})};return Object(n.useEffect)((function(){e.history.push(a.choice)}),[a]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(G,{children:Object(s.jsx)("h1",{children:"Choice :"})}),Object(s.jsxs)(V,{children:[Object(s.jsxs)("div",{className:"block",children:[Object(s.jsx)(O,{classes:"btn",text:"Starter Deck",onClick:function(e){return l(e,"STARTER_DECK")}}),Object(s.jsx)(O,{classes:"btn",text:"Individual Card",onClick:function(e){return l(e,"INDIVIDUAL")}})]}),Object(s.jsx)(O,{classes:"btn",text:"cancel",onClick:function(e){return l(e,"BACK")}})]})]})};c(60);var oe=function(){var e=Object(n.useState)({email:"",username:""}),t=Object(i.a)(e,2),c=t[0],a=t[1],r=function(e){e.preventDefault(),a(Object(u.a)(Object(u.a)({},c),{},Object(o.a)({},e.target.name,e.target.value)))},l=function(e){e.preventDefault(),a(Object(u.a)(Object(u.a)({},c),{},Object(o.a)({},e.target.name,e.target.value)))};return Object(s.jsxs)("form",{className:"form",children:[Object(s.jsx)("h2",{className:"form--title",children:"Inscription :"}),Object(s.jsx)("input",{id:"email",className:"subscribe__form--input",name:"email",type:"email",placeholder:"Taper votre email ...",onBlur:function(e){return l(e)},onChange:function(e){return r(e)},value:c.email}),Object(s.jsx)("input",{id:"username",className:"subscribe__form--input",name:"username",type:"username",placeholder:"Tapez votre username ",onBlur:function(e){return l(e)},onChange:function(e){return r(e)},value:c.username}),Object(s.jsx)("button",{className:"btn btn-success",type:"submit",onClick:function(e){return function(e){e.preventDefault();var t=new FormData;Object.keys(c).map((function(e,s){return t.append(e,c[e])}))}(e)},children:"Valider"})]})},ue=function(e){var t=e.title,c=e.infos,n=e.EC;e.mode;return Object(s.jsxs)("li",{className:"deck__block",children:[Object(s.jsxs)("div",{className:"deck__inner--left",children:[Object(s.jsx)("h3",{className:"deck__title",children:t}),Object(s.jsx)("p",{className:"deck__infos",children:c})]}),Object(s.jsxs)("div",{className:"deck__inner--right",children:[Object(s.jsxs)("div",{className:"inner__right--text",children:[Object(s.jsx)("h3",{className:"deck__ec--title",children:"EC :"}),Object(s.jsx)("span",{className:"deck__ec--value",children:n})]}),Object(s.jsxs)("div",{className:"inner__right--actions",children:[Object(s.jsx)("div",{className:"action",children:Object(s.jsx)(R.b,{})}),Object(s.jsx)(d.b,{className:"action",to:"/cards",children:Object(s.jsx)(R.c,{})})]})]})]})},de=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(G,{children:Object(s.jsx)("h1",{children:"Starter Decks"})}),Object(s.jsxs)(V,{classes:"page",children:[Object(s.jsx)(D,{classes:"layout layout__1 mb-4",children:[{id:0,title:"Dummy",infos:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto laborum cupiditate velit fuga.",EC:250,cards_num:64},{id:2,title:"Beginner",infos:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto laborum cupiditate velit fuga.",EC:250,cards_num:64},{id:3,title:"Low Mid",infos:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto laborum cupiditate velit fuga.",EC:250,cards_num:64},{id:4,title:"Hig Mid",infos:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto laborum cupiditate velit fuga.",EC:250,cards_num:64},{id:5,title:"The cream of the crop",infos:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto laborum cupiditate velit fuga.",EC:250,cards_num:64}].map((function(e,t){return Object(s.jsx)(ue,{title:e.title,infos:e.infos,EC:e.EC},t)}))}),Object(s.jsx)(O,{classes:"btn",text:"cancel",onClick:e.history.goBack})]})]})},je=c(26),me=c.p+"static/media/framus.28ad3f9b.jpg",be=function(e){var t=[{id:0,url:me,alt:"Ceci est une carte",selected:!1},{id:1,url:me,alt:"Ceci est une carte",selected:!1},{id:2,url:me,alt:"Ceci est une carte",selected:!1},{id:3,url:me,alt:"Ceci est une carte",selected:!1},{id:4,url:me,alt:"Ceci est une carte",selected:!1},{id:5,url:me,alt:"Ceci est une carte",selected:!1},{id:6,url:me,alt:"Ceci est une carte",selected:!1},{id:7,url:me,alt:"Ceci est une carte",selected:!1},{id:8,url:me,alt:"Ceci est une carte",selected:!1},{id:9,url:me,alt:"Ceci est une carte",selected:!1},{id:10,url:me,alt:"Ceci est une carte",selected:!1}],c=Object(n.useState)(t),a=Object(i.a)(c,2),r=a[0],l=a[1];return Object(s.jsxs)(A.Provider,{value:[r,l],children:[Object(s.jsx)(G,{classes:"header",children:Object(s.jsx)("h1",{children:e.location.pathname.split("/").pop()})}),Object(s.jsxs)(V,{classes:"page",children:[Object(s.jsx)(D,{classes:"layout layout__3 ".concat(r.some((function(e){return e.selected}))?"mb-1":"mb-4"),children:r.map((function(e){return Object(s.jsx)(M,{id:e.id,url:e.url,alt:e.alt,mode:"edit",onChange:function(t){return function(e,t){l((function(c){var s=Object(je.a)(c);return s[t].selected=e.target.checked,console.log(s),Object(je.a)(s)}))}(t,e.id)}},e.id)}))}),r.some((function(e){return e.selected}))?Object(s.jsx)(O,{classes:"btn",text:"add"}):"",Object(s.jsx)(O,{classes:"btn",text:"cancel",onClick:function(t){t.preventDefault(),e.history.goBack()}})]})]})},he=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(ne,{children:[Object(s.jsx)("h1",{children:"Options :"}),Object(s.jsxs)("div",{className:"block",children:[Object(s.jsx)(ae,{text:"create",url:"/decks/new-deck/create"}),Object(s.jsx)(ae,{text:"import",url:"/decks/new-deck/import"})]}),Object(s.jsx)(ae,{text:"back",url:"/decks"})]})})},pe=c(35),xe=function(e){var t=e.text,c=e.title,n=e.target,a=e.target_id,r=e.classes;return Object(s.jsxs)("div",{id:a,className:r||"dropdown__draw",children:[Object(s.jsx)("a",{className:"dropdown__link",href:n,children:c}),Object(s.jsxs)("div",{className:"dropdown__body",children:[t?Object(s.jsx)("p",{className:"dropdown__content",children:t}):"",Object(s.jsxs)("div",{className:"dropdown__cta--box",children:[Object(s.jsx)(pe.a,{className:"dropdown__icon"}),Object(s.jsx)(m.b,{className:"dropdown__icon"})]})]})]})},Oe=function(e){var t=e.classes,c=e.datas;return Object(s.jsx)("div",{className:t||"dropdown__menu",children:c.map((function(e){return Object(s.jsx)(xe,{classes:"dropdown__draw",text:e.content,title:e.title,target_id:e.target_id,target:e.target},e.id)}))})},fe=function(){return Object(s.jsxs)(ne,{children:[Object(s.jsx)(Oe,{classes:"dropdown__menu mb-6",datas:[{id:0,title:"EDEN 0/3",target:"#item__1",target_id:"item__1",content:"Divinit\xe9 0/1 Archange 0/1 Temple 0/1"},{id:1,title:"REGISTRE 0/10",target:"#item__2",target_id:"item__2",content:"Adorateurs 0/10"},{id:2,title:"LIVRE SACRE 0/50 +",target:"#item__3",target_id:"item__3",content:"Anges 0 Golems 0 Miracles 0 Equipments 0"}]}),Object(s.jsx)(O,{text:"Valider"})]})},_e=function(){},ve=function(){var e=.01*window.innerHeight;return Object(s.jsx)(s.Fragment,{children:window.addEventListener("load",(function(t){document.documentElement.style.setProperty("--vh","".concat(e,"px"))}))})};var ge=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],r=[{exact:!0,path:"/",component:_},{strict:!0,path:"/login",component:ce},{strict:!0,path:"/subscribe",component:oe},{strict:!0,path:"/profile",component:z},{exact:!0,strict:!0,path:"/decks",component:L},{exact:!0,strict:!0,path:"/decks/new-deck",component:re},{exact:!0,strict:!0,path:"/decks/new-deck/build",component:he},{exact:!0,strict:!0,path:"/decks/new-deck/create",component:fe},{exact:!0,strict:!0,path:"/decks/new-deck/import",component:_e},{exact:!0,strict:!0,path:"/cards",component:K},{exact:!0,strict:!0,path:"/cards/from",component:le},{strict:!0,path:"/cards/from/starter",component:de},{strict:!0,path:"/cards/from/individual",component:be},{strict:!0,path:"/deck/:name",component:se},{strict:!0,path:"/gamers",component:Q},{component:W}];return Object(s.jsxs)(ee.Provider,{value:{pages:r,login:c,setLogin:function(e,t){e.preventDefault(),t("/decks"),a(!0)}},children:[Object(s.jsx)(ve,{}),Object(s.jsxs)(d.a,{basename:"/",children:[Object(s.jsx)(x,{pages:r,state:c,login:function(){return a(!1)}}),Object(s.jsx)(l,{classes:c?"footer":"footer h-0",children:Object(s.jsx)(p,{classes:c?"navbar":"navbar move-down fade-out",logged:c})})]})]})};r.a.render(Object(s.jsx)(ge,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.b210e1c4.chunk.js.map