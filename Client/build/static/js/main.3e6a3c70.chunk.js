(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(19),r=n.n(a),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))},s=n(4),d=n(5),j=n(7),l=n(6),h=n(13),p=n(2),b=n(21),u=(n(26),n(1)),O=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.type,n=void 0===t?"":t,i=e.to,c=void 0===i?"":i,a=e.children,r=void 0===a?"":a,o=e.className,s=void 0===o?"":o,d=e.style,j=void 0===d?{}:d;Object(b.a)(e,["type","to","children","className","style"]);return"Link"===n?Object(u.jsx)(h.b,{to:c,style:j,className:s,children:r}):Object(u.jsx)("button",{style:j,children:r})}}]),n}(i.Component),x=(n(36),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"Navbar",children:Object(u.jsxs)("div",{style:{height:"100%",display:"inline-block"},children:[Object(u.jsx)("div",{id:"web-name",style:{float:"left",paddingTop:"10px",height:"100%",margin:"auto"},children:Object(u.jsx)("a",{className:"bold",style:{textDecoration:"none",paddingLeft:"20px"},href:"/",children:"Prill.Tech"})}),Object(u.jsx)("div",{})]})})}}]),n}(i.Component)),v=n(14),f=n.n(v),y=function(e){var t,n,i,c,a=e.width,r=e.height;function o(e,t){return t*e*(1-e)}return Object(u.jsx)(f.a,{setup:function(e,i){var o=e.createCanvas(a,r);o.position(0,61),o.style("z-index","-1"),c=e.createGraphics(a,r),n=2/a,t=2},draw:function(e){e.background(255),c.stroke(1,25);for(var s=0;s<14;++s){i=.5;for(var d=500;d<1e3;++d)i=o(i,t),d>500&&c.point(e.map(t,2,4,0,a),e.map(i,0,1,r,0));if((t+=n)>4){e.noLoop();break}}c.style("z-index","-1"),e.image(c,0,0)},windowResized:function(e){c.remove(),a=document.body.clientWidth;var i=e.createCanvas(a,r);i.position(0,61),i.style("z-index","-1"),c=e.createGraphics(a,r),n=2/a,t=2,e.loop(),e.draw()}})},g=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(y,{width:document.body.clientWidth,height:700})})},m=(n(37),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"hero-container",style:{paddingTop:"3px",zIndex:10,width:"100%",background:""},children:[Object(u.jsxs)("div",{className:"float-left",style:{width:"50%",paddingTop:"70px",textAlign:"center"},children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Change is the only constant."})}),Object(u.jsx)(O,{type:"Link",to:"/testpage",style:{width:"400px"},children:"Click to go to TestPage"}),Object(u.jsx)("br",{}),Object(u.jsx)(O,{type:"Link",to:"/blog/mandelbrot-set",style:{width:"400px"},children:"Click to go to Mandelbrot Set"})]}),Object(u.jsx)("div",{className:"",style:{height:"900px"},children:Object(u.jsx)(g,{width:document.body.clientWidth,height:900})})]})})}}]),n}(i.Component)),k=(n(38),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"",children:Object(u.jsx)(m,{})})}}]),n}(i.Component)),w=function(e){return Object(u.jsx)(f.a,{setup:function(t,n){t.createCanvas(e.width,e.height).parent(n),t.pixelDensity(1),t.noLoop(),console.log("Setting up Mandelbrot Set")},draw:function(t){var n=e.width,i=e.height;t.loadPixels();for(var c=0;c<n;c++)for(var a=0;a<i;a++){for(var r=t.map(c,0,n,-2,.5),o=t.map(a,0,i,-1.2,1.2),s=r,d=o,j=0;j<100;){var l=2*r*o;if((r=r*r-o*o+s)*r+(o=l+d)*o>16)break;j++}var h=t.map(j,0,100,0,.75);h=t.map(t.sqrt(h),0,.5,0,255),100==j&&(h=0);var p=4*(c+a*n);t.pixels[p+0]=h,t.pixels[p+1]=0,t.pixels[p+2]=255,t.pixels[p+3]=255}t.updatePixels()}})},C=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"test-page-container",className:"App",children:Object(u.jsxs)("div",{id:"test-svg container",children:[Object(u.jsx)("div",{style:{float:"center",width:"100%",height:"700px"},children:Object(u.jsx)(w,{width:900,height:700})}),Object(u.jsxs)("div",{style:{float:"center"},children:["This is the test page.",Object(u.jsx)("br",{}),Object(u.jsx)(O,{type:"Link",to:"/",style:{width:"400px"},children:"Click to go to Homepage"})]})]})})}}]),n}(i.Component),N=(n(39),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"test-page-container",className:"App",children:Object(u.jsxs)("div",{id:"test-svg container",children:[Object(u.jsx)("div",{style:{float:"center",width:"100%",height:"900px",paddingTop:"10px"},children:Object(u.jsx)(w,{width:900,height:900})}),Object(u.jsxs)("div",{style:{float:"center"},children:["This is the test page.",Object(u.jsx)("br",{}),Object(u.jsx)(O,{type:"Link",to:"/",style:{width:"400px"},children:"Click to go to Homepage"})]})]})})}}]),n}(i.Component)),L=(n(40),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"App",children:[Object(u.jsx)("div",{id:"Navbar-Container",children:Object(u.jsx)(x,{})}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)(p.a,{path:"/",exact:!0,component:k}),Object(u.jsx)(p.a,{path:"/".concat("blog","/mandelbrot-set"),component:C}),Object(u.jsx)(p.a,{path:"/testpage",component:N})]})]})}}]),n}(i.Component));n(41);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),o()}},[[42,1,2]]]);
//# sourceMappingURL=main.3e6a3c70.chunk.js.map