(this["webpackJsonpmy-sample-1"]=this["webpackJsonpmy-sample-1"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(4),u=n.n(s),o=(n(9),n(2));n(10);var r=n(0);var l=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)([]),u=Object(o.a)(s,2),l=u[0],j=u[1],a=Object(c.useState)(!1),h=Object(o.a)(a,2),b=h[0],f=h[1],O=!0;return Object(c.useEffect)((function(){if(!l.length||b)return fetch("http://localhost:3333/list").then((function(t){return t.json()})).then((function(t){O&&j(t)})),function(){return O=!1}}),[b,l]),Object(c.useEffect)((function(){b&&setTimeout((function(){O&&f(!1)}),1e3)}),[b]),Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)("h1",{children:"My Grocery lsit"}),Object(r.jsx)("ul",{children:l.map((function(t){return Object(r.jsx)("li",{children:t.item},t.id)}))}),b&&Object(r.jsx)("h2",{children:"Submitted Successfully"}),Object(r.jsxs)("form",{onSubmit:function(t){var e;t.preventDefault(),(e=n,fetch("http://localhost:3333/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:e})}).then((function(t){return t.json()}))).then((function(){i(""),f(!0)}))},children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("p",{children:"New Item"}),Object(r.jsx)("input",{type:"text",onChange:function(t){i(t.target.value),console.log(n)},value:n})]}),Object(r.jsx)("button",{type:"submit",children:"Submit"})]})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,u=e.getTTFB;n(t),c(t),i(t),s(t),u(t)}))};u.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root")),j()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.52dcaec6.chunk.js.map