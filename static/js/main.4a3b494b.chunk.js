(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],Array(18).concat([function(t,e,c){},,,,,,function(t,e,c){},function(t,e,c){},,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),a=c(15),s=c.n(a),i=(c(24),c(7)),u=c(2),o=(c(25),c(4)),l=c(3),d=c(0),j=function(){var t=Object(l.c)((function(t){return t.cartProducts.cartProducts})),e=Object(n.useState)(0),c=Object(o.a)(e,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){var e=t.reduce((function(t,e){return t+e.count}),0);a((function(t){return e}))}),[t]),0===r?null:Object(d.jsx)("input",{className:"header__total-count",readOnly:!0,value:r<100?r:"99+",type:"text"})},b=function(){var t=Object(l.c)((function(t){return t.products.products})),e=Object(n.useState)(0),c=Object(o.a)(e,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){var e=0;t.forEach((function(t){!0===t.favourite&&e++})),a((function(t){return e}))}),[t]),0===r?null:Object(d.jsx)("input",{className:"header__total-count",readOnly:!0,value:r<100?r:"99+",type:"text"})},f=c.p+"static/media/heart.1978922e.svg",p=c.p+"static/media/cart.47495f61.svg",O=function(t){return Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)("div",{className:"header__container",children:[Object(d.jsx)("div",{className:"header__logo",children:Object(d.jsx)(i.b,{className:"header__logo-link",to:"/",children:"FakeStore"})}),t.children,Object(d.jsxs)("ul",{className:"header__menu-list",children:[Object(d.jsxs)("li",{className:"header__list-item",children:[Object(d.jsx)(i.c,{className:function(t){return"header__link"+(t?"":" header__link--active")},to:"/favourite",children:Object(d.jsx)("img",{src:f,alt:"favourite"})}),Object(d.jsx)(b,{})]}),Object(d.jsxs)("li",{className:"header__list-item",children:[Object(d.jsx)(i.c,{className:function(t){return"header__link"+(t?"":" header__link--active")},to:"/cart",children:Object(d.jsx)("img",{src:p,alt:"cart"})}),Object(d.jsx)(j,{})]})]})]})})},m=(c(18),c(8)),h=c.n(m),_=c(10),x=function(){var t="https://fakestoreapi.com",e=Object(l.c)((function(t){return t.products.products})),c=function(){var t=function(){var t=Object(_.a)(h.a.mark((function t(e){var c,n,r,a,s,i=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=i.length>1&&void 0!==i[1]?i[1]:"GET",n=i.length>2&&void 0!==i[2]?i[2]:null,r=i.length>3&&void 0!==i[3]?i[3]:{"Content-Type":"application/json"},t.prev=3,t.next=6,fetch(e,{method:c,body:n,headers:r});case 6:if((a=t.sent).ok){t.next=9;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(a.status));case 9:return t.next=11,a.json();case 11:return s=t.sent,t.abrupt("return",s);case 15:throw t.prev=15,t.t0=t.catch(3),t.t0;case 18:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(e){return t.apply(this,arguments)}}();return{request:t}}(),n=c.request,r=function(){var c=Object(_.a)(h.a.mark((function c(){var r,a;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r=0===e.length?8:4,c.next=3,n("".concat(t,"/products?limit=").concat(e.length+r));case 3:return a=c.sent,c.abrupt("return",s(a));case 5:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),a=function(){var e=Object(_.a)(h.a.mark((function e(c){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(t,"/products/").concat(c));case 2:return(r=e.sent).favourite=!1,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(t){return t.slice(e.length,t.length).map((function(t){return t.favourite=!1,t}))};return{getProducts:r,getSingleProduct:a}},g=(c(34),c(35),function(t){var e=t.value,c=Object(n.useState)(0),r=Object(o.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){!function(){var t=e/.05;s((function(e){return t}))}()}),[e]),Object(d.jsxs)("div",{className:"rating",children:[Object(d.jsxs)("div",{className:"rating__body",children:[Object(d.jsx)("div",{className:"rating__active",style:{width:"".concat(a,"%")}}),Object(d.jsxs)("div",{className:"rating__items",children:[Object(d.jsx)("input",{className:"rating__item",type:"radio",value:"1",name:"rating"}),Object(d.jsx)("input",{className:"rating__item",type:"radio",value:"2",name:"rating"}),Object(d.jsx)("input",{className:"rating__item",type:"radio",value:"3",name:"rating"}),Object(d.jsx)("input",{className:"rating__item",type:"radio",value:"4",name:"rating"}),Object(d.jsx)("input",{className:"rating__item",type:"radio",value:"5",name:"rating"})]})]}),Object(d.jsx)("div",{className:"rating__value",children:e})]})}),v=Object(n.memo)(g),N=function(t){var e=t.onToggleFavourite,c=t.id,n=Object(l.c)((function(t){return t.products.products.find((function(t){return t.id===c})).favourite}))?"product__button product__button--active":"product__button";return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{className:n,onClick:function(t){return e(t,c)},children:Object(d.jsx)("svg",{className:"product__button-img--favourite",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"})})})})},y=Object(n.memo)(N),P=c(14),w=c(9),C=c(11),k=Object(C.b)("product/fetchProducts",function(){var t=Object(_.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S=Object(C.c)({name:"products",initialState:{products:[],filterValue:"",loadingStatus:"idle"},reducers:{toggleFavouriteProduct:function(t,e){t.products=t.products.map((function(t){return t.id===e.payload?Object(w.a)(Object(w.a)({},t),{},{favourite:!t.favourite}):t}))},filterProducts:function(t,e){t.filterValue=e.payload}},extraReducers:function(t){t.addCase(k.pending,(function(t){t.loadingStatus="loading"})).addCase(k.fulfilled,(function(t,e){t.loadingStatus="idle",t.products=[].concat(Object(P.a)(t.products),Object(P.a)(e.payload))})).addCase(k.rejected,(function(t){t.loadingStatus="error"})).addDefaultCase((function(){}))}}),F=S.reducer,E=S.actions,T=E.toggleFavouriteProduct,A=E.filterProducts,V=F,z=Object(C.c)({name:"cartProducts",initialState:{cartProducts:[],promoArr:["123_ddd","hello_worls","oleg"]},reducers:{addProductToCart:{reducer:function(t,e){t.cartProducts=[].concat(Object(P.a)(t.cartProducts),[e.payload])},prepare:function(t){return{payload:Object(w.a)(Object(w.a)({},t),{},{count:1})}}},deleteProductFromCart:function(t,e){t.cartProducts=t.cartProducts.filter((function(t){return t.id!==e.payload}))},deleteAllProductsFromCart:function(t){t.cartProducts=[]},changeProductCount:function(t,e){t.cartProducts=t.cartProducts.map((function(t){var c=e.payload,n=c.id,r=c.count;return t.id===n?Object(w.a)(Object(w.a)({},t),{},{count:r}):t}))}}}),M=z.reducer,D=z.actions,I=M,$=D.addProductToCart,q=D.deleteProductFromCart,B=D.deleteAllProductsFromCart,L=D.changeProductCount,W=function(t){var e=t.product,c=e.id,r=e.title,a=e.price,s=e.image,u=e.rating,o=Object(l.b)(),j=Object(l.c)((function(t){return t.cartProducts.cartProducts})),b=Object(n.useCallback)((function(t,e){t.preventDefault(),o(T(e))}),[]);return Object(d.jsx)("li",{className:"product-list__item",children:Object(d.jsxs)(i.b,{to:"/product/".concat(c),className:"product",children:[Object(d.jsxs)("div",{className:"product__img-block",children:[Object(d.jsx)("img",{className:"product__img",src:s,alt:r}),Object(d.jsx)("div",{className:"product__rate",children:Object(d.jsx)(v,{value:u.rate})})]}),Object(d.jsx)("span",{className:"product__title",children:function(t,e){if(t.length<e)return t;var c=t.slice(0,e)+"...";return" "===c[19]?c.slice(0,e-1)+"...":c}(r,20)}),Object(d.jsx)("span",{className:"product__descr"}),Object(d.jsxs)("span",{className:"product__price",children:[a," $"]}),Object(d.jsxs)("div",{className:"product__buttons",children:[Object(d.jsx)(y,{onToggleFavourite:b,id:c}),Object(d.jsx)("button",{className:"product__button",onClick:function(t){return function(t,e){t.preventDefault();var n=j.find((function(t){return t.id===c}));if(n){if(100===n.count)return;o(L({id:c,count:n.count+1}))}else o($(e))}(t,e)},children:Object(d.jsx)("svg",{className:"product__button-img--cart",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M10.975 8l.025-.5c0-.517-.067-1.018-.181-1.5h5.993l-.564 2h-5.273zm-2.475 10c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-10.428l-.455-1.083c-.323.049-.653.083-.99.083-.407 0-.805-.042-1.191-.114l1.306 3.114h13.239l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-4.5-10.5c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"})})})]})]})})},J=(c(36),function(t){var e=t.myClass;return Object(d.jsx)("div",{className:e||"",children:Object(d.jsx)("div",{className:"loadingio-spinner-dual-ring-ycd50ghcpnm",children:Object(d.jsxs)("div",{className:"ldio-sjhf7eoq5i",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})})]})})})}),R=(c(37),c.p+"static/media/error.26c4250f.jpg"),Y=function(){return Object(d.jsxs)("div",{className:"error-message",children:[Object(d.jsx)("img",{className:"error-message__img",src:R,alt:"error"}),Object(d.jsxs)("p",{className:"error-message__text",children:["Something is wrong...",Object(d.jsx)("br",{}),"Please try again"]})]})},G=(c(38),function(t){var e=t.filterValue;if(!e)return t.children;var c=r.a.Children.map(t.children,(function(t){if(-1!==t.props.title.toLowerCase().indexOf(e.toLowerCase()))return t}));return console.log(c),Object(d.jsx)(d.Fragment,{children:0!==c.length?c:Object(d.jsx)("span",{className:"filter__span",children:"Nothing found for your request"})})}),K=function(){var t=Object(l.b)(),e=x().getProducts,c=Object(l.c)((function(t){return t.products.products})),r=Object(l.c)((function(t){return t.products.loadingStatus})),a=Object(l.c)((function(t){return t.products.filterValue})),s=Object(n.useState)(!1),i=Object(o.a)(s,2),u=i[0],j=i[1];Object(n.useEffect)((function(){0===c.length&&b()}),[]),Object(n.useEffect)((function(){20===c.length&&j(!0)}),[c.length]);var b=function(){"loading"!==r&&t(k(e))},f=Object(n.useMemo)((function(){return function(t){return t.map((function(t){return Object(d.jsx)(W,{product:t},t.id)}))}(c)}),[c]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"product-list",children:Object(d.jsx)(G,{filterValue:a,children:f})}),Object(d.jsxs)("div",{className:"product-list__wrapper",children:["loading"===r?Object(d.jsx)(J,{myClass:"product-list__spinner"}):null,"error"===r?Object(d.jsx)(Y,{}):null,Object(d.jsx)("button",{disabled:u,className:u?"product-list__button product-list__button--disable":"product-list__button",onClick:function(){return b()},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"})]})]})},U=c.p+"static/media/search.a9f70789.svg",H=(c(39),function(){var t=Object(l.b)(),e=Object(n.useState)(""),c=Object(o.a)(e,2),r=c[0],a=c[1];Object(n.useEffect)((function(){return function(){s("")}}),[]);var s=function(e){t(A(e))};return Object(d.jsxs)("div",{className:"search-products",children:[Object(d.jsx)("input",{className:"search-products__input",value:r,onChange:function(t){return a((function(e){return t.target.value}))},onKeyPress:function(e){return function(e){13!==e.ketCode&&"Enter"!==e.key||t(A(r))}(e)},placeholder:"find product"}),Object(d.jsx)("button",{className:"search-products__button",onClick:function(){return s(r)},children:Object(d.jsx)("img",{className:"search-products__img",src:U,alt:"search"})})]})}),Q=(c(40),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{children:Object(d.jsx)(H,{})}),Object(d.jsx)("div",{className:"main-page",children:Object(d.jsx)("div",{className:"main-page__container",children:Object(d.jsx)(K,{})})})]})}),X=(c(41),function(t){var e=t.product,c=t.onAddToCart,n=t.onToggleFavourite,r=e.image,a=e.rating,s=e.title,i=e.description,u=e.price,o=e.category;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsx)("div",{className:"product-page",children:Object(d.jsxs)("div",{className:"product-page__container",children:[Object(d.jsx)("div",{className:"product-page__img-block",children:Object(d.jsx)("img",{className:"product-page__img",src:r,alt:"ffrfrg"})}),Object(d.jsxs)("div",{className:"product-page__content",children:[Object(d.jsx)("div",{className:"product-page__rate",children:Object(d.jsx)(v,{value:a.rate})}),Object(d.jsx)("h4",{className:"product-page__title",children:s}),Object(d.jsxs)("span",{className:"product-page__price",children:[u," $"]}),Object(d.jsx)("p",{className:"product-page__descr",children:i}),Object(d.jsxs)("span",{className:"product-page__category",children:["category: ",Object(d.jsx)("span",{className:"product-page__category--bold",children:o})]}),Object(d.jsxs)("div",{className:"btns-block",children:[Object(d.jsx)("button",{className:"btn",onClick:function(){return c(e)},children:"Add to cart"}),Object(d.jsx)("button",{className:"btn",onClick:function(){return n(e)},children:"Add to favourite"})]})]})]})})]})}),Z=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.products.products})),c=Object(l.c)((function(t){return t.cartProducts.cartProducts})),r=Object(u.g)().productId,a=Object(n.useState)(null),s=Object(o.a)(a,2),i=s[0],j=s[1],b=x().getSingleProduct;Object(n.useEffect)((function(){f()}),[]);var f=function(){var t=new Promise((function(t,c){var n=e.find((function(t){return t.id==r}));"undefined"===n||null===n?c("product dosn't exist in store"):t(n)})),c=new Promise((function(t){b().then((function(e){return t(e)})).catch((function(t){return console.log(t)}))}));Promise.any([t,c]).then((function(t){return j((function(e){return t}))})).catch((function(t){return console.log(t)}))},p=Object(n.useCallback)((function(e){var n=c.find((function(t){return t.id===e.id}));if(n){if(100===n.count)return;t(L({id:n.id,count:n.count+1}))}else t($(e))}),[c]),O=Object(n.useCallback)((function(e){t(T(e.id))}),[]);return Object(d.jsx)("div",{children:i?Object(d.jsx)(X,{product:i,onToggleFavourite:O,onAddToCart:p}):Object(d.jsx)(J,{myClass:"center"})})},tt=(c(42),c.p+"static/media/empty-box.7ec5aa8d.jpg"),et=function(){return Object(d.jsxs)("div",{className:"favourite-list__empty",children:[Object(d.jsx)("img",{className:"favourite-list__img",src:tt,alt:"empty box"}),Object(d.jsx)("p",{className:"favourite-list__text",children:"You have not added any product to your favorites yet."})]})},ct=function(){var t=Object(l.c)((function(t){return t.products.products})),e=Object(l.c)((function(t){return t.products.filterValue})),c=Object(n.useMemo)((function(){return function(t){return t.filter((function(t){if(t.favourite)return t})).map((function(t){return Object(d.jsx)(W,{product:t},t.id)}))}(t)}),[t]);return 0===c.length?Object(d.jsx)(et,{}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:"product-list",children:Object(d.jsx)(G,{filterValue:e,children:c})})})},nt=(c(43),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{children:Object(d.jsx)(H,{})}),Object(d.jsx)("div",{className:"favourite-page__container",children:Object(d.jsx)(ct,{})})]})}),rt=(c(44),function(t){var e=t.count,c=t.onCalcInputValue;return Object(d.jsxs)("div",{className:"product-input",children:[Object(d.jsx)("input",{className:"product-input__input",type:"number",min:"0",max:"100",readOnly:!0,value:e}),Object(d.jsxs)("b",{className:"product-input__plus",onClick:function(){return c(1)},children:[Object(d.jsx)("i",{className:"product-input__plus-item-1"}),Object(d.jsx)("i",{className:"product-input__plus-item-2"})]}),Object(d.jsx)("b",{className:"product-input__minus",onClick:function(){return c(-1)},children:Object(d.jsx)("i",{className:"product-input__minus-item-1"})})]})}),at=Object(n.memo)(rt,(function(t,e){return t.count===e.count})),st=function(t){var e=t.title,c=t.price,r=t.id,a=t.onDelete,s=Object(l.b)(),i=Object(l.c)((function(t){return t.cartProducts.cartProducts.find((function(t){return t.id===r})).count})),u=Object(n.useCallback)((function(t){0===i&&-1===t||100===i&&1===t||s(L({id:r,count:i+t}))}),[]);return Object(d.jsxs)("tr",{className:0!==i?"cart__table-row":"cart__table-row cart__table-row--empty",children:[Object(d.jsx)("td",{className:"cart__table-column",children:e}),Object(d.jsxs)("td",{className:"cart__table-column",children:[c," $"]}),Object(d.jsx)("td",{className:"cart__table-column",children:Object(d.jsx)("div",{className:"cart__table-input-block",children:Object(d.jsx)(at,{onCalcInputValue:u,count:i})})}),Object(d.jsx)("td",{className:"cart__table-column",children:Object(d.jsx)("button",{className:"cart__table-button-delete",onClick:function(){return a(r)}})})]})},it=function(){return Object(d.jsx)("tr",{className:"cart__table--empty",children:Object(d.jsx)("td",{children:"Your cart is empty. Please select a product to buy"})})},ut=Object(n.memo)(it),ot=c(49),lt=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.cartProducts.cartProducts})),c=0===e.length,r=Object(n.useCallback)((function(e){t(q(e))}),[]);return Object(d.jsxs)("table",{className:"cart__table",children:[Object(d.jsx)("thead",{className:"cart__table-head",children:Object(d.jsxs)("tr",{className:"cart__table-row",children:[Object(d.jsx)("td",{className:"cart__table-column",children:"Name:"}),Object(d.jsx)("td",{className:"cart__table-column",children:"Price:"}),Object(d.jsx)("td",{className:"cart__table-column",children:"Amount:"}),Object(d.jsx)("td",{className:"cart__table-column"})]})}),Object(d.jsxs)("tbody",{className:"cart__table-body",children:[e.map((function(t){var e=t.title,c=t.count,n=t.price,a=t.id;return Object(d.jsx)(st,{onDelete:r,title:e,count:c,price:n,id:a},Object(ot.a)())})),c?Object(d.jsx)(ut,{}):null]})]})},dt=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.cartProducts.cartProducts})),c=Object(l.c)((function(t){return t.cartProducts.promoArr})),r=Object(n.useState)(0),a=Object(o.a)(r,2),s=a[0],i=a[1],u=Object(n.useState)(0),j=Object(o.a)(u,2),b=j[0],f=j[1],p=Object(n.useState)(""),O=Object(o.a)(p,2),m=O[0],h=O[1],_=Object(n.useState)(1),x=Object(o.a)(_,2),g=x[0],v=x[1],N=Object(n.useState)(!1),y=Object(o.a)(N,2),P=y[0],w=y[1];Object(n.useEffect)((function(){var t=e.reduce((function(t,e){return t+e.price*e.count}),0);i((function(e){return Math.ceil(t*g*100)/100}))}),[e,g]),Object(n.useEffect)((function(){var t=e.reduce((function(t,e){return t+e.count}),0);f((function(e){return t}))}),[e]),Object(n.useEffect)((function(){e.length>0?w(!1):w(!0)}),[e.length]);return Object(d.jsxs)("div",{className:"cart__sidebar",children:[Object(d.jsx)("h4",{className:"cart__sidebar-title",children:"Total:"}),Object(d.jsxs)("span",{className:"cart__sidebar-total",children:["Price: ",s," $"]}),Object(d.jsxs)("span",{className:"cart__sidebar-total",children:["Total goods: ",b]}),Object(d.jsx)("input",{className:"cart__sidebar-input",placeholder:"Promo code",value:m,onChange:function(t){return function(t){var e=t.target.value;h((function(t){return e})),c.forEach((function(t){v(e===t?.9:1)}))}(t)}}),Object(d.jsx)("button",{onClick:function(){return t(B()),void h((function(t){return""}))},disabled:P,className:P?"cart__sidebar-button cart__sidebar-button--disable":"cart__sidebar-button",children:"Checkout"})]})},jt=(c(45),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)("div",{className:"cart",children:[Object(d.jsx)(lt,{}),Object(d.jsx)(dt,{})]})]})}),bt=c.p+"static/media/error404.27dfa202.png",ft=(c(46),function(){return Object(d.jsx)("div",{className:"page404",children:Object(d.jsxs)("div",{className:"page404__container",children:[Object(d.jsx)("img",{className:"page404__img",src:bt,alt:"error"}),Object(d.jsxs)("div",{className:"page404__column",children:[Object(d.jsx)("h2",{className:"page404__title",children:"Page not found"}),Object(d.jsxs)("p",{className:"page404__text",children:["We're sorry, but it lools like the page you're looking for isn't here. Try retyping the URL or returning to ",Object(d.jsx)(i.b,{className:"page404__link",to:"/",children:"Main page"})]})]})]})})}),pt=function(){return Object(d.jsx)(i.a,{children:Object(d.jsx)("div",{className:"app",children:Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/favourite",element:Object(d.jsx)(nt,{})}),Object(d.jsx)(u.a,{path:"/cart",element:Object(d.jsx)(jt,{})}),Object(d.jsx)(u.a,{path:"/product/:productId",element:Object(d.jsx)(Z,{})}),Object(d.jsx)(u.a,{path:"/",element:Object(d.jsx)(Q,{})}),Object(d.jsx)(u.a,{path:"*",element:Object(d.jsx)(ft,{})})]})})})},Ot=Object(C.a)({reducer:{products:V,cartProducts:I},middleware:function(t){return t()},devTools:!1});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(l.a,{store:Ot,children:Object(d.jsx)(pt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}]),[[47,1,2]]]);
//# sourceMappingURL=main.4a3b494b.chunk.js.map