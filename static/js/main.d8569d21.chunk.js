(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{14:function(e,t,a){},19:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/avatar.34601718.svg"},36:function(e,t,a){e.exports=a(48)},45:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),o=a(10),i=a(6),m=a(28),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS_SUCCESSFUL":return t.productData;case"FETCH_PRODUCTS_FAILED":default:return e}},u=a(23),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENT":return[].concat(Object(u.a)(e),[t.commentData]);case"INITILIZE_FROM_LOCAL_STORAGE":return Object(u.a)(t.commentsInLocalStorage);default:return e}},p=Object(o.c)({products:s,comments:d}),E=(a(45),a(12)),f=a(9),h=a(29),g=a(30),v=a(34),b=a(31),O=a(35),N=a(17),j=a.n(N),C=function(e){return{type:"FETCH_PRODUCTS_SUCCESSFUL",productData:e}},S=function(e){return{type:"FETCH_PRODUCTS_FAILED",error:e}};function y(){return function(e){var t,a;return j.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.awrap(fetch("https://private-5815fe-recommendationsknip.apiary-mock.com/products"));case 3:return t=n.sent,n.next=6,j.a.awrap(t.json());case 6:a=n.sent,e(C(a)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),e(S(n.t0));case 13:case"end":return n.stop()}}),null,null,[[0,10]])}}a(14);var D=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(v.a)(this,Object(b.a)(t).call(this,e))).componentDidMount=function(){a.props.fetchDataAsync()},a.state={currency:{euro:"\u20ac",swissFranc:"CHF"}},a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=this.props.products;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"container-title"},"Product List"),t.map((function(t,a){return c.a.createElement(E.b,{to:"/product/"+t.id,key:a},c.a.createElement("div",{className:"product-item"},c.a.createElement("div",{className:"product-image-thumb"},c.a.createElement("img",{src:t.images[0].thumb,alt:t.title})),c.a.createElement("div",{className:"product-item-title"},t.title),c.a.createElement("div",{className:"product-item-price"},e.state.currency.euro," ",t.price)))})))}}]),t}(c.a.Component),I={fetchDataAsync:y},x=Object(i.b)((function(e){return{products:e.products}}),I)(D),_=a(11),k=(a(19),a(33)),L=a.n(k),T=(a(26),function(e){var t=e.comment,a=e.index;return c.a.createElement("div",{className:"comment-box",key:a},c.a.createElement("div",{className:"comment-author-section"},c.a.createElement("span",{className:"avatar-placeholder"},c.a.createElement("img",{src:L.a,alt:"Profile icon"})),c.a.createElement("div",{className:"comment-author"},t.author)),c.a.createElement("p",null,t.text))}),w=function(e){var t=e.id,a=Object(n.useState)(""),r=Object(_.a)(a,2),l=r[0],o=r[1],m=Object(n.useState)(""),s=Object(_.a)(m,2),u=s[0],d=s[1],p=Object(n.useState)({id:t,author:u,text:l}),E=Object(_.a)(p,2),f=E[0],h=E[1],g=Object(i.c)(),v=Object(i.d)((function(e){return e.comments})),b=Object(i.d)((function(e){return e.comments.filter((function(e){return e.id===t}))}));return Object(n.useEffect)((function(){h({id:t,author:u,text:l}),h({id:t,author:u,text:l})}),[t,u,l]),Object(n.useEffect)((function(){l.length&&u.length&&window.localStorage.setItem("allComments",JSON.stringify(v))}),[l,u,v]),Object(n.useEffect)((function(){if(window.localStorage.getItem("allComments")){var e=JSON.parse(window.localStorage.getItem("allComments"));console.log("commentsInLocalStorage"),console.log(e),g({type:"INITILIZE_FROM_LOCAL_STORAGE",commentsInLocalStorage:e})}}),[]),console.log("comments"),console.log(b),c.a.createElement("div",{className:"container comment"},c.a.createElement("div",{className:"product-heading"},c.a.createElement("div",{className:"comment-heading"},"Comments")),b.map((function(e,t){return c.a.createElement(T,{comment:e,index:t,key:t})})),c.a.createElement("hr",null),c.a.createElement("label",null,"Name"),c.a.createElement("input",{className:"comment-input author",value:u,type:"text",onChange:function(e){d(e.target.value)},placeholder:"Name"}),c.a.createElement("label",null,"Leave a comment"),c.a.createElement("input",{className:"comment-input text",value:l,type:"text",onChange:function(e){o(e.target.value)},placeholder:"Thoughts on this gadget?"}),c.a.createElement("button",{className:"send-comment",onClick:function(){l.length&&u.length&&g({type:"ADD_COMMENT",commentData:f})}},"Shoot it!"))},F=function(){var e=Object(f.f)(),t=Object(i.c)(),a=Object(n.useState)(""),r=Object(_.a)(a,2),l=r[0],o=r[1],m=Object(f.g)().id;m=Number(m);var s=Object(i.d)((function(e){return e.products.filter((function(e){return e.id===m}))})),u=Object(_.a)(s,1)[0];if(!u){var d=t(y());try{u=d.filter((function(e){return e.id===m}))}catch(p){}}return Object(n.useEffect)((function(){u&&o(u.images[0].original)}),[u]),u?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"heading"},c.a.createElement("div",{className:"go-back"},c.a.createElement("button",{onClick:function(){return e.goBack()},type:"button"},"\u27f5")),c.a.createElement("div",{className:"product-heading"},u.title),c.a.createElement("div",{className:"price"},"\u20ac"," ",u.price)),c.a.createElement("div",{className:"image-displayed"},c.a.createElement("img",{src:l,alt:"".concat(u.title)})),c.a.createElement("div",{className:"gallery"},u.images.map((function(e,t){return c.a.createElement("img",{key:t,src:e.thumb,className:l===e.original?"selected-image":null,onClick:function(){return o(e.original)},alt:"".concat(u.title," - ").concat(t)})}))),c.a.createElement("div",{className:"description"},c.a.createElement("h3",null,"Description"),c.a.createElement("p",null,u.description)),c.a.createElement("div",{className:"specification"},c.a.createElement("h3",null,"Specification"),c.a.createElement("p",null,u.specification))),c.a.createElement(w,{id:m})):c.a.createElement("div",{className:"container"})};var A=function(){return c.a.createElement(E.a,null,c.a.createElement(f.c,null,c.a.createElement(f.a,{path:"/product/:id",children:c.a.createElement(F,null)}),c.a.createElement(f.a,{path:"/"},c.a.createElement(x,null))))},R=Object(o.d)(p,Object(o.a)(m.a));l.a.render(c.a.createElement(i.a,{store:R},c.a.createElement(A,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.d8569d21.chunk.js.map