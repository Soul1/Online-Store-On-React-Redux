(this["webpackJsonpreact-shopping"]=this["webpackJsonpreact-shopping"]||[]).push([[0],{235:function(e,t,a){e.exports=a(508)},507:function(e,t,a){},508:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),i=a.n(c),l=a(22),o=(a(244),function(e){return{type:"SET_FILTER",payload:e}}),u=a(202),s=a(203),m=a(223),d=a(204),E=a(224),p=a(516),f=a(520),h=a(205),y=a.n(h),b=a(221),O=a(33),v=a(509),g=function(e){var t=e.title,a=e.author,n=e.image,c=e.price,i=e.addToCart,l=e.addedCount;return r.a.createElement(f.a,null,r.a.createElement(b.a,{src:n}),r.a.createElement(f.a.Content,null,r.a.createElement(f.a.Header,null,t),r.a.createElement(f.a.Meta,null,r.a.createElement("span",{className:"date"},a))),r.a.createElement(f.a.Content,{extra:!0},r.a.createElement("b",null,c),r.a.createElement(O.a,{name:"rub"})),r.a.createElement(v.a,{onClick:i.bind(void 0,e)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \xa0",l>0&&"(".concat(l,")")))},C=Object(l.b)((function(e,t){var a=e.cart,n=t.id;return{addedCount:a.items.reduce((function(e,t){return e+(t.id===n?1:0)}),0)}}),{addToCart:function(e){return{type:"ADD_BOOK_TO_CART",payload:e}},removeFromCart:function(e){return{type:"REMOVE_BOOK_FROM_CART",payload:e}}})(g),_=a(521),j=a(515),R=function(e){var t=e.setFilter,a=e.filterBy,n=e.searchQuery,c=e.setSearchQuery;return r.a.createElement(_.a,{secondary:!0},r.a.createElement(_.a.Item,{active:"all"===a,onClick:t.bind(void 0,"all")},"\u0412\u0441\u0435"),r.a.createElement(_.a.Item,{active:"price_low"===a,onClick:t.bind(void 0,"price_low")},"\u0426\u0435\u043d\u0430 (\u0434\u0435\u0448\u0435\u0432\u044b\u0435)"),r.a.createElement(_.a.Item,{active:"price_high"===a,onClick:t.bind(void 0,"price_high")},"\u0426\u0435\u043d\u0430 (\u0434\u043e\u0440\u043e\u0433\u0438\u0435)"),r.a.createElement(_.a.Item,{active:"author"===a,onClick:t.bind(void 0,"author")},"\u041f\u043e \u0430\u0432\u0442\u043e\u0440\u0443"),r.a.createElement(_.a.Menu,{position:"right"},r.a.createElement(_.a.Item,null,r.a.createElement(j.a,{icon:"search",onChange:function(e){return c(e.target.value)},value:n,placeholder:"\u041f\u043e\u0438\u0441\u043a..."}))))},k=Object(l.b)((function(e){return{filterBy:e.filter.filterBy}}),{setFilter:o,setSearchQuery:function(e){return{type:"SET_QUERY",payload:e}}})(R),T=a(519),B=a(518),w=function(e){var t=e.title,a=e.id,n=e.image,c=e.removeFromCart;return r.a.createElement(T.a,{selection:!0,divided:!0,verticalAlign:"middle"},r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Content,{floated:"right"},r.a.createElement(v.a,{onClick:c.bind(void 0,a),color:"red"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),r.a.createElement(b.a,{avatar:!0,src:n}),r.a.createElement(T.a.Content,null,t)))},I=function(e){var t=e.totalPrice,a=e.count,n=e.items;return r.a.createElement(_.a,null,r.a.createElement(_.a.Item,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u043d\u0438\u0433"),r.a.createElement(_.a.Menu,{position:"right"},r.a.createElement(_.a.Item,null,"\u0418\u0442\u043e\u0433\u043e: \xa0 ",r.a.createElement("b",null,t)," \xa0 Pyb."),r.a.createElement(B.a,{trigger:r.a.createElement(_.a.Item,{name:"help"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 (",r.a.createElement("b",null,a),")"),content:n.map((function(e){return r.a.createElement(w,e)})),on:"click",hideOnScroll:!0})))},S=a(219),F=a.n(S),A=Object(l.b)((function(e){var t=e.cart;return{totalPrice:t.items.reduce((function(e,t){return e+t.price}),0),count:t.items.length,items:F()(t.items,(function(e){return e.id}))}}))(I),M=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.setBooks;y.a.get("/books.json").then((function(t){var a=t.data;e(a)}))}},{key:"render",value:function(){var e=this.props,t=e.books,a=e.isReady;return r.a.createElement(p.a,null,r.a.createElement(A,null),r.a.createElement(k,null),r.a.createElement(f.a.Group,{itemsPerRow:4},a?t.map((function(e,t){return r.a.createElement(C,Object.assign({key:t},e))})):"Loading..."))}}]),t}(r.a.Component),Q=a(88),L=a.n(Q),K=function(e,t,a){return function(e,t){switch(t){case"price_high":return L()(e,"price","desc");case"price_low":return L()(e,"price","asc");case"author":return L()(e,"author","asc");case"all":default:return e}}(function(e,t){return e.filter((function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>=0||e.author.toLowerCase().indexOf(t.toLowerCase())>=0}))}(e,a),t)},D=Object(l.b)((function(e){var t=e.books,a=e.filter;return{books:t.items&&K(t.items,a.filterBy,a.searchQuery),isReady:t.isReady}}),{setBooks:function(e){return{type:"SET_BOOKS",payload:e}},setFilter:o})(M),x=(a(507),a(39)),P=a(220),Y=a.n(P),J=a(32),U={isReady:!1,items:null},V=a(222),G={items:[]},H={filterBy:"all",searchQuery:""},N=Object(x.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOOKS":return Object(J.a)({},e,{items:t.payload,isReady:!0});case"SET_IS_READY":return Object(J.a)({},e,{isReady:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BOOK_TO_CART":return Object(J.a)({},e,{items:[].concat(Object(V.a)(e.items),[t.payload])});case"REMOVE_BOOK_FROM_CART":return Object(J.a)({},e,{items:e.items.filter((function(e){return e.id!==t.payload}))});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return Object(J.a)({},e,{filterBy:t.payload});case"SET_QUERY":return Object(J.a)({},e,{searchQuery:t.payload});default:return e}}}),W=Object(x.d)(N,Object(x.a)(Y.a));i.a.render(r.a.createElement(l.a,{store:W},r.a.createElement(D,null)),document.getElementById("root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.c137ec15.chunk.js.map