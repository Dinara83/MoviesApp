"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[952],{8952:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(5861),a=n(9439),s=n(7757),i=n.n(s),c=n(2791),u=n(7689),o=n(1087),l=n(9126),d=n(9983),v="movie-details-list_buttonBack__jW5IG",p="movie-details-list_btnBack__gpXOf",f="movie-details-list_wrapperDetailsList__Ic8y1",h="movie-details-list_image__V3YeD",m="movie-details-list_description__EbTDp",x="movie-details-list_additional__eq9Y4",_="movie-details-list_text__5f7DQ",g="movie-details-list_list__csM5y",j="movie-details-list_infoAddit__14L83",w=n(184),b=function(e){var t,n,r=e.movie,a=(0,u.s0)(),s=(null===(t=(0,u.TH)().state)||void 0===t?void 0:t.from)||"/";return(0,w.jsxs)("div",{children:[(0,w.jsx)("div",{className:v,children:(0,w.jsxs)("button",{className:p,onClick:function(){return a(s)},type:"submit",children:[(0,w.jsx)(d.Pd.Provider,{value:{color:"black",size:12},children:(0,w.jsx)(l.And,{})}),"Go back"]})}),(0,w.jsxs)("div",{className:f,children:[(0,w.jsx)("div",{children:(0,w.jsx)("img",{className:h,src:"https://image.tmdb.org/t/p/w300".concat(r.poster_path),alt:r.title,width:200})}),(0,w.jsxs)("div",{className:m,children:[(0,w.jsxs)("h2",{children:[null===r||void 0===r?void 0:r.original_title," (",new Date(r.release_date).getFullYear(),")"]}),(0,w.jsxs)("p",{children:["User Score: ",Math.round(10*r.vote_average),"%"]}),(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:null===r||void 0===r?void 0:r.overview}),(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("p",{children:null===r||void 0===r||null===(n=r.genres)||void 0===n?void 0:n.map((function(e){return e.name})).join(", ")})]})]}),(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)("h2",{className:_,children:"Additional information"}),(0,w.jsxs)("ul",{className:g,children:[(0,w.jsx)(o.rU,{to:"cast",state:{from:s},children:(0,w.jsx)("li",{className:j,children:"Cast"})}),(0,w.jsx)(o.rU,{to:"reviews",state:{from:s},children:(0,w.jsx)("li",{className:j,children:"Reviews"})})]}),(0,w.jsx)("hr",{}),(0,w.jsx)(u.j3,{})]})]})};b.defaultProps={movie:[]};var k=b,y=n(9830),N=n(2089),U=function(){var e=(0,c.useState)({}),t=(0,a.Z)(e,2),n=t[0],s=t[1],o=(0,c.useState)(!1),l=(0,a.Z)(o,2),d=l[0],v=l[1],p=(0,c.useState)(null),f=(0,a.Z)(p,2),h=f[0],m=f[1],x=(0,u.UO)().id;return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,N.wn)(x);case 4:t=e.sent,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m(e.t0.message);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[x,v,m]),(0,w.jsxs)("div",{children:[d&&(0,w.jsx)(y.a,{}),(0,w.jsx)(k,{movie:n}),h&&(0,w.jsx)("p",{children:"...Posts load failed"})]})}},2089:function(e,t,n){n.d(t,{Di:function(){return o},J2:function(){return l},XT:function(){return c},lC:function(){return d},wn:function(){return u}});var r=n(5861),a=n(7757),s=n.n(a),i=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9fae0fdf266213c68361ca578a95b948"}}),c=function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,i.get("/trending/movie/day",{params:{page:t,language:"en-US"}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t),{params:{language:"en-US"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"),{params:{language:"en-US"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,i.get("/movie/".concat(t,"/reviews"),{params:{language:"en-US",page:n}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,i.get("/search/movie",{params:{query:t,language:"en-US",page:n,include_adult:!1}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=952.ca75a520.chunk.js.map