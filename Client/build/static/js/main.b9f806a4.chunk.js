(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(19),r=n.n(a),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))},o=n(6),j=n(7),l=n(9),d=n(8),h=n(13),b=n(2),p=n(21),u=(n(26),n(1)),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.type,n=void 0===t?"":t,i=e.to,c=void 0===i?"":i,a=e.children,r=void 0===a?"":a,s=e.className,o=void 0===s?"":s,j=e.style,l=void 0===j?{}:j;Object(p.a)(e,["type","to","children","className","style"]);return"Link"===n?Object(u.jsx)(h.b,{to:c,style:l,className:o,children:r}):Object(u.jsx)("button",{style:l,children:r})}}]),n}(i.Component),v=(n(36),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"Navbar",children:Object(u.jsxs)("div",{style:{height:"100%",display:"inline-block"},children:[Object(u.jsx)("div",{id:"web-name",style:{float:"left",padding:"10px",height:"100%",margin:"auto"},children:Object(u.jsx)("a",{className:"bold",style:{textDecoration:"none"},href:"/",children:"Prill.Tech"})}),Object(u.jsx)("div",{})]})})}}]),n}(i.Component)),x=(n(37),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{id:"hero-img",className:""}),Object(u.jsx)("div",{id:"hero-container",style:{position:"relative",zIndex:10,width:"100%"},children:Object(u.jsxs)("div",{style:{width:"50%",paddingTop:"70px"},children:[Object(u.jsx)("h1",{className:"",children:"Prill.Tech"}),Object(u.jsx)(O,{type:"Link",to:"/testpage",style:{width:"400px"},children:"Click to go to TestPage"})]})})]})}}]),n}(i.Component)),f=(n(38),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(x,{})})}}]),n}(i.Component)),y=n(14),m=n.n(y),g=function(e){return Object(u.jsx)(m.a,{setup:function(t,n){t.createCanvas(e.width,e.height).parent(n),t.pixelDensity(1)},draw:function(t){var n=e.width,i=e.height;t.loadPixels();for(var c=0;c<n;c++)for(var a=0;a<i;a++){for(var r=t.map(c,0,n,-2,.5),s=t.map(a,0,i,-1.2,1.2),o=r,j=s,l=0;l<100;){var d=2*r*s;if((r=r*r-s*s+o)*r+(s=d+j)*s>16)break;l++}var h=t.map(l,0,100,0,1);h=t.map(t.sqrt(h),0,1,0,255),100==l&&(h=0);var b=4*(c+a*n);t.pixels[b+0]=h,t.pixels[b+1]=0,t.pixels[b+2]=0,t.pixels[b+3]=255}t.updatePixels()}})},k=(n(39),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"test-page-container",className:"App",children:Object(u.jsxs)("div",{id:"test-svg container",children:[Object(u.jsx)("div",{style:{float:"center",width:"100%",height:"700px",backgroundColor:"black"},children:Object(u.jsx)(g,{width:900,height:700})}),Object(u.jsxs)("div",{style:{float:"center"},children:["This is the test page.",Object(u.jsx)("br",{}),Object(u.jsx)(O,{type:"Link",to:"/",style:{width:"400px"},children:"Click to go to Homepage"})]})]})})}}]),n}(i.Component)),C=(n(40),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"App",children:[Object(u.jsx)("div",{id:"Navbar-Container",children:Object(u.jsx)(v,{})}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)(b.a,{path:"/",exact:!0,component:f}),Object(u.jsx)(b.a,{path:"/testpage",component:k})]})]})}}]),n}(i.Component));n(41);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),s()}},[[42,1,2]]]);
//# sourceMappingURL=main.b9f806a4.chunk.js.map