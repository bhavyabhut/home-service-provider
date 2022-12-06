"use strict";(self.webpackChunkhome_service_provider_client=self.webpackChunkhome_service_provider_client||[]).push([[149],{69149:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var n=a(1413),r=a(29439),o=a(72791),c=a(2409),l=a(74327),i=a(62996),s=a(25581),d=a(23707),h=a(91333),u=a(64880),g=a(91523),f=a(77154),m=a(98272),p=a(73956),v=a(80351),y=a(46848),Z=a(74569),x=a.n(Z),C=a(91065),b=a(80184),j=function(e){var t=c.Z.useForm(),a=(0,r.Z)(t,1)[0],Z=(0,o.useContext)(C.k),j=Z.data,w=Z.dispatch,k=(0,o.useState)({loader:!1,error:!1}),E=(0,r.Z)(k,2),N=E[0],S=E[1],O=(0,u.k6)();(0,o.useEffect)((function(){var t=function(){var e=localStorage.getItem("auth-token"),t=localStorage.getItem("user_id");return e&&t?e+t:null}();x().get(y.Z.auth,{headers:{"auth-token":t}}).then((function(t){if(!0===t.data.success){w({type:"LOGIN_SUCCESS"});var a=t.data.data.isMerchant;a||(a=!1),w({type:"SET_MERCHANT",isMerchant:a});var n="/home-services/allCategories?category=all&state=all&city=&name=";e.location&&e.location.state&&e.location.state.data&&(n=e.location.state.data.pathname+e.location.state.data.search),O.push(n)}}))}),[]);return(0,o.useEffect)((function(){N.error&&(l.Z.open({message:"Wrong Credentials",type:"error"}),S((0,n.Z)((0,n.Z)({},N),{},{error:!1})))}),[N.error]),(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:"signin",children:[(0,b.jsxs)("div",{className:"signin-form",children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",position:"relative",right:"1rem"},children:[(0,b.jsx)(v.Z,{})," ",(0,b.jsx)("h1",{className:"title",children:"HomeServices"})]}),(0,b.jsx)("h2",{className:"welcomeBack",children:"Welcome back"}),(0,b.jsx)("p",{class:"loginIntoAccount",children:"Please log into your account"}),(0,b.jsxs)("div",{children:[(0,b.jsxs)(c.Z,{form:a,layout:"vertical",children:[(0,b.jsx)(c.Z.Item,{label:"Email",name:"email",children:(0,b.jsx)(i.Z,{placeholder:"johndoe@gmail.com"})}),(0,b.jsx)(c.Z.Item,{name:"password",label:"Password",children:(0,b.jsx)(i.Z.Password,{placeholder:"password",iconRender:function(e){return e?(0,b.jsx)(f.Z,{}):(0,b.jsx)(m.Z,{})}})}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.5rem",marginTop:"2rem"},children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(s.Z,{}),(0,b.jsx)("span",{className:"remeberMe",children:"Remember me"})]}),(0,b.jsx)("div",{children:(0,b.jsx)(g.rU,{style:{color:"rgb(0, 132, 137)"},to:"/forgot-password",children:"Forgot Password?"})})]}),(0,b.jsx)(c.Z.Item,{style:{width:"100%"},children:(0,b.jsx)(d.Z,{type:"primary",shape:"round",icon:(0,b.jsx)(p.Z,{}),style:{width:"100%",height:"2.5rem",backgroundColor:"rgb(0, 132, 137)",borderColor:"rgb(0, 132, 137)"},loading:N.loader,onClick:function(){console.log(j,"loginData"),S((0,n.Z)((0,n.Z)({},N),{},{loader:!0}));var e=a.getFieldsValue();console.log("sfdfd",a.getFieldsValue()),x().post(y.Z.login,e).then((function(e){if(e.status){w({type:"LOGIN_SUCCESS"});var t=e.data.data.isMerchant;t||(t=!1),w({type:"SET_MERCHANT",isMerchant:t}),console.log(j.categories.length,e),0===j.categories.length&&x().get(y.Z.categories).then((function(e){console.log("Login ni category no res",e),e.data.success&&w({type:"SET_CATEGORIES",payload:e.data.data})})).catch((function(e){return console.log(e)})),0===j.states.length&&x().get(y.Z.states).then((function(e){console.log("Login ni state no res",e),e.data.success&&w({type:"SET_STATES",payload:e.data.data})})).catch((function(e){return console.log(e)})),e.headers.auth&&function(e){var t=e.slice(0,Math.floor(e.length/2)),a=e.slice(Math.floor(e.length/2),e.length);localStorage.setItem("auth-token",t),localStorage.setItem("user_id",a)}(e.headers.auth),S((0,n.Z)((0,n.Z)({},N),{},{loader:!1})),O.push("/home-services/allCategories?category=all&state=all&city=&name=")}else S({error:!0,loader:!1})})).catch((function(e){S({error:!0,loader:!1})}))},children:"Login"})})]}),(0,b.jsx)(h.Z,{children:"Or login with"}),(0,b.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"1rem",rowGap:"1rem"},children:[(0,b.jsx)(d.Z,{type:"primary",children:"Facebook"}),(0,b.jsx)(d.Z,{style:{backgroundColor:"red"},type:"primary",children:"Instagram"}),(0,b.jsx)(d.Z,{style:{backgroundColor:"red"},type:"primary",children:"Google"}),(0,b.jsx)(d.Z,{type:"primary",children:"Github"})]}),(0,b.jsxs)("p",{style:{textAlign:"center",margin:"1.5rem 0",fontSize:"1rem",fontWeight:"700",color:"rgb(119, 119, 119)",fontFamily:"Loto"},children:["Don't Have an Account?",(0,b.jsx)(g.rU,{style:{color:"rgb(0, 132, 137)",marginLeft:"0.5rem"},to:"/signup",children:"Registration"})]})]})]}),(0,b.jsx)("div",{className:"signin-image-div"})]})})}},77154:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(1413),r=a(72791),o={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M81.8 537.8a60.3 60.3 0 010-51.5C176.6 286.5 319.8 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c-192.1 0-335.4-100.5-430.2-300.2z",fill:t}},{tag:"path",attrs:{d:"M512 258c-161.3 0-279.4 81.8-362.7 254C232.6 684.2 350.7 766 512 766c161.4 0 279.5-81.8 362.7-254C791.4 339.8 673.3 258 512 258zm-4 430c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z",fill:t}},{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258s279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z",fill:e}},{tag:"path",attrs:{d:"M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z",fill:e}}]}},name:"eye",theme:"twotone"},c=a(54291),l=function(e,t){return r.createElement(c.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:o}))};l.displayName="EyeTwoTone";var i=r.forwardRef(l)},73956:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(1413),r=a(72791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"unlock",theme:"outlined"},c=a(54291),l=function(e,t){return r.createElement(c.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:o}))};l.displayName="UnlockOutlined";var i=r.forwardRef(l)},91333:function(e,t,a){var n=a(87462),r=a(4942),o=a(81694),c=a.n(o),l=a(72791),i=a(71929),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.Z=function(e){var t,a=l.useContext(i.E_),o=a.getPrefixCls,d=a.direction,h=e.prefixCls,u=e.type,g=void 0===u?"horizontal":u,f=e.orientation,m=void 0===f?"center":f,p=e.orientationMargin,v=e.className,y=e.children,Z=e.dashed,x=e.plain,C=s(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),b=o("divider",h),j=m.length>0?"-".concat(m):m,w=!!y,k="left"===m&&null!=p,E="right"===m&&null!=p,N=c()(b,"".concat(b,"-").concat(g),(t={},(0,r.Z)(t,"".concat(b,"-with-text"),w),(0,r.Z)(t,"".concat(b,"-with-text").concat(j),w),(0,r.Z)(t,"".concat(b,"-dashed"),!!Z),(0,r.Z)(t,"".concat(b,"-plain"),!!x),(0,r.Z)(t,"".concat(b,"-rtl"),"rtl"===d),(0,r.Z)(t,"".concat(b,"-no-default-orientation-margin-left"),k),(0,r.Z)(t,"".concat(b,"-no-default-orientation-margin-right"),E),t),v),S=(0,n.Z)((0,n.Z)({},k&&{marginLeft:p}),E&&{marginRight:p});return l.createElement("div",(0,n.Z)({className:N},C,{role:"separator"}),y&&"vertical"!==g&&l.createElement("span",{className:"".concat(b,"-inner-text"),style:S},y))}},25581:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(87462),r=a(4942),o=a(77106),c=a(81694),l=a.n(c),i=a(29439),s=a(45987),d=a(72791),h=a(75179),u=a(11354),g=d.forwardRef((function(e,t){var a,n=e.prefixCls,o=void 0===n?"rc-switch":n,c=e.className,g=e.checked,f=e.defaultChecked,m=e.disabled,p=e.loadingIcon,v=e.checkedChildren,y=e.unCheckedChildren,Z=e.onClick,x=e.onChange,C=e.onKeyDown,b=(0,s.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=(0,h.Z)(!1,{value:g,defaultValue:f}),w=(0,i.Z)(j,2),k=w[0],E=w[1];function N(e,t){var a=k;return m||(E(a=e),null===x||void 0===x||x(a,t)),a}var S=l()(o,c,(a={},(0,r.Z)(a,"".concat(o,"-checked"),k),(0,r.Z)(a,"".concat(o,"-disabled"),m),a));return d.createElement("button",Object.assign({},b,{type:"button",role:"switch","aria-checked":k,disabled:m,className:S,ref:t,onKeyDown:function(e){e.which===u.Z.LEFT?N(!1,e):e.which===u.Z.RIGHT&&N(!0,e),null===C||void 0===C||C(e)},onClick:function(e){var t=N(!k,e);null===Z||void 0===Z||Z(t,e)}}),p,d.createElement("span",{className:"".concat(o,"-inner")},k?v:y))}));g.displayName="Switch";var f=g,m=a(71929),p=a(19125),v=a(1815),y=a(12833),Z=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},x=d.forwardRef((function(e,t){var a,c=e.prefixCls,i=e.size,s=e.disabled,h=e.loading,u=e.className,g=void 0===u?"":u,x=Z(e,["prefixCls","size","disabled","loading","className"]),C=d.useContext(m.E_),b=C.getPrefixCls,j=C.direction,w=d.useContext(v.Z),k=d.useContext(p.Z),E=(null!==s&&void 0!==s?s:k)||h,N=b("switch",c),S=d.createElement("div",{className:"".concat(N,"-handle")},h&&d.createElement(o.Z,{className:"".concat(N,"-loading-icon")})),O=l()((a={},(0,r.Z)(a,"".concat(N,"-small"),"small"===(i||w)),(0,r.Z)(a,"".concat(N,"-loading"),h),(0,r.Z)(a,"".concat(N,"-rtl"),"rtl"===j),a),g);return d.createElement(y.Z,{insertExtraNode:!0},d.createElement(f,(0,n.Z)({},x,{prefixCls:N,className:O,disabled:E,ref:t,loadingIcon:S})))}));x.__ANT_SWITCH=!0;var C=x}}]);
//# sourceMappingURL=149.da06d51e.chunk.js.map