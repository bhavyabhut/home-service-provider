"use strict";(self.webpackChunkhome_service_provider_client=self.webpackChunkhome_service_provider_client||[]).push([[754],{7873:function(e,t,n){n(72791);var a=n(47528),r=n(63605),f=n(91523),c=n(80184),d=[{title:"Name",dataIndex:"first_name",render:function(e,t){return(0,c.jsx)(f.rU,{to:"student/".concat(t._id),children:"".concat(e," ").concat(t.last_name)})}},{title:"Email",dataIndex:"email",render:function(e,t){return(0,c.jsx)(f.rU,{to:"student/".concat(t._id),children:e})}},{title:"Skills",dataIndex:"skills",render:function(e){return e.split(",").map((function(e){var t=e.charCodeAt(0)+e.charCodeAt(e.length-1);return(0,c.jsx)(a.Z,{style:{color:"black"},color:r.C[t%11],children:e})}))}},{title:"Year of batch",dataIndex:"year_of_batch"},{title:"Web",dataIndex:"web"},{title:"Phone",dataIndex:"phone1"}];t.Z=d},62754:function(e,t,n){n.r(t);var a=n(29439),r=n(72791),f=n(48374),c=n(36771),d=n(7873),i=n(46848),o=n(80184);t.default=function(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],l=(0,r.useState)(!1),s=(0,a.Z)(l,2),h=s[0],b=s[1];return(0,r.useEffect)((function(){b(!0),fetch(i.Z.students).then((function(e){e.json().then((function(e){u(e.data),b(!1)}))}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.Z,{title:"Students"}),(0,o.jsx)(c.Z,{loading:h,columns:d.Z,bordered:!0,rowKey:function(e){return e._id},dataSource:n,pagination:!0,scroll:{x:1300}})]})}},63605:function(e,t,n){n.d(t,{Z:function(){return a}});var a=["#0088FE","#00C49F","#FFBB28","#FF8042","#fe0033","#005fc4","#cb8c02","#a7a09b","#9652ba","#d603e5","#57ff28","#08cdef"];t.C=["#ffa39e","#ffbb96","#ffd591","#ffe58f","#fffb8f","#eaff8f","#b7eb8f","#87e8de","#91d5ff","#adc6ff","#d3adf7","#ffadd2"]}}]);
//# sourceMappingURL=754.6f7fceca.chunk.js.map