"use strict";(self.webpackChunknp_test=self.webpackChunknp_test||[]).push([[754],{6432:function(e,t,n){n.d(t,{C5:function(){return l},Zl:function(){return p},QG:function(){return x}});var r=n(4165),a=n(5861),s=n(1243),i={BASE_URL:"https://api.novaposhta.ua/v2.0/json",KEY:"6de779f238efba7722245783c629122b"},o=n(8348),c=s.Z.create({baseURL:i.BASE_URL});function l(e){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.post("TrackingDocument/getStatusDocuments",{apiKey:i.KEY,modelName:"TrackingDocument",calledMethod:"getStatusDocuments",methodProperties:{Documents:[{DocumentNumber:t}]}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),o.Am.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u043f\u0438\u0442\u0443:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.post("Address/getWarehouses",{apiKey:i.KEY,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityName:t}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),o.Am.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u043f\u0438\u0442\u0443:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e,t,n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.post("Address/getWarehouses",{apiKey:i.KEY,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityName:t,Limit:a,Page:n}});case 3:return s=e.sent,e.abrupt("return",s.data);case 7:throw e.prev=7,e.t0=e.catch(0),o.Am.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u043f\u0438\u0442\u0443:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},7754:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(4165),a=n(5861),s=n(9439),i=n(2791),o=n(5984),c=n(9434),l=n(8348),u=n(6432),p=n(9216),d=n(890),x=n(9504),h=n(4554),m=n(184),f=(0,m.jsx)(h.Z,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"\u2022"}),Z=function(e){var t=e.resultInfo;return(0,m.jsxs)(h.Z,{component:"div",sx:{maxWidth:"500px",mt:"25px",minHeight:"360px"},children:[(0,m.jsxs)(d.Z,{sx:{fontSize:18},variant:"subtitle1",children:["\u0421\u0442\u0430\u0442\u0443\u0441: ",(0,m.jsx)("span",{style:{color:"green"},children:t[0].Status})]}),(0,m.jsxs)(x.Z,{sx:{backgroundColor:"#ff3d3b",mt:"25px"},children:[(0,m.jsx)(d.Z,{variant:"h5",component:"div"}),(0,m.jsxs)(d.Z,{sx:{mb:1.5},color:"text.secondary",children:["\u041c\u0456\u0441\u0442\u043e \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043d\u0438\u043a:",f,t[0].CitySender,f]}),(0,m.jsxs)(d.Z,{variant:"body2",children:["\u0410\u0434\u0440\u0435\u0441\u0430 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f: ",t[0].WarehouseSender]}),""!==t[0].RecipientDateTime?(0,m.jsxs)(d.Z,{variant:"body2",children:["\u0427\u0430\u0441 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f: ",t[0].ActualDeliveryDate]}):null]}),(0,m.jsxs)(x.Z,{sx:{backgroundColor:"#ff3d3b",mt:"25px"},children:[(0,m.jsx)(d.Z,{variant:"h5",component:"div"}),(0,m.jsxs)(d.Z,{sx:{mb:1.5},color:"text.secondary",children:["\u041c\u0456\u0441\u0442\u043e \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f: ",f,t[0].CityRecipient,f]}),(0,m.jsxs)(d.Z,{variant:"body2",children:["\u0410\u0434\u0440\u0435\u0441\u0430 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f: ",t[0].WarehouseRecipient]}),""!==t[0].RecipientDateTime?(0,m.jsx)(d.Z,{variant:"body2",children:(0,m.jsxs)("p",{children:["\u0427\u0430\u0441 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f: ",t[0].RecipientDateTime]})}):null]})]})},v=n(2167),j=n(2359),g=n(5193),b=n(266),w=n(8641),y=n(3400),C=n(6151),k=n(6208),_=n(7247),P=n(3717),S=n(493),A=n(1889),D=n(4852),N=n(653),R=n(3044),T=n(6259),E=function(e){var t=e.handleItemClick,n=e.handleClose,r=(0,c.v9)((function(e){return e.ttn.value})),a=(0,c.I0)(),s=(0,g.Z)("(max-width: 1199px)"),i=(0,g.Z)("(max-width: 525px)");return(0,m.jsx)(h.Z,{component:"div",sx:{pl:"25px",pr:"25px",maxHeight:"80vh",overflowY:"auto"},children:(0,m.jsx)(S.Z,{sx:{margin:"-20px"},children:(0,m.jsx)(A.ZP,{container:!0,spacing:2,sx:s?{flexDirection:"column"}:{},children:r?r.map((function(e){return(0,m.jsx)(A.ZP,{item:!0,xs:s?12:6,children:(0,m.jsxs)(D.ZP,{sx:i?{margin:" 10px 0",padding:"10px 0",backgroundColor:"#ff3d3b",width:"260px"}:{margin:"15px",padding:"20px",backgroundColor:"#ff3d3b",width:"280px"},children:[(0,m.jsx)(N.Z,{children:(0,m.jsx)(R.Z,{sx:{mr:"25px"},children:(0,m.jsx)(P.Z,{})})}),(0,m.jsx)(T.Z,{primary:e.ttn,onClick:function(){t(e.ttn),n()},sx:{cursor:"pointer"}}),(0,m.jsx)(y.Z,{"aria-label":"delete",onClick:function(){return a((0,p.lp)(e.id))},children:(0,m.jsx)(_.Z,{})})]},e.id)},e.id)})):null})})})},I=function(){var e=(0,i.useState)(""),t=(0,s.Z)(e,2),n=t[0],d=t[1],x=i.useState(null),f=(0,s.Z)(x,2),_=f[0],P=f[1],S=(0,i.useState)(!1),A=(0,s.Z)(S,2),D=A[0],N=A[1],R=(0,i.useState)([]),T=(0,s.Z)(R,2),I=T[0],K=T[1],W=(0,c.v9)((function(e){return e.ttn.value})),L=(0,c.I0)(),Y=(0,g.Z)("(max-width: 524px)"),B=(0,g.Z)("(max-width: 899px)"),H=function(e){d(e)};(0,i.useEffect)((function(){if(function(e){return/^[0-9]+$/.test(e)&&(11===e.length||14===e.length)}(n.toString())){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.C5)(n);case 3:(t=e.sent).data.length>0?(K(t.data),L((0,p.fR)({id:(0,o.x0)(),ttn:n}))):l.Am.error("\u041d\u0435 \u043c\u0430\u0454 \u0442\u0430\u043a\u043e\u0439 \u043f\u043e\u0441\u0438\u043b\u043a\u0438"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l.Am.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u043f\u0438\u0442\u0443");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[n,L]);var M=Boolean(_),U=function(){P(null)};return(0,m.jsx)(h.Z,{component:"section",sx:{pt:"24px",pb:"24px"},children:(0,m.jsx)(b.Z,{fixed:!0,children:(0,m.jsxs)(h.Z,{component:"div",sx:{display:"flex",position:"relative"},children:[(0,m.jsxs)(h.Z,{component:"div",className:Y?"homePage__wrapper":"",children:[(0,m.jsxs)(h.Z,{component:"div",className:"homePage__input--img",sx:Y?{width:"288px",height:"200px"}:{width:"500px",height:"300px"},children:[(0,m.jsx)(w.Z,{id:"standard-basic",label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440",variant:"standard",value:n,onChange:function(e){var t=e.target.value;/^\d*$/.test(t)?(N(!1),d(t)):N(!0)},error:D,helperText:D?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b":"",className:"homePage__input",sx:Y?{left:"40%",width:"150px"}:{left:"30%"},inputProps:{pattern:"[0-9]*"}}),(0,m.jsx)(y.Z,{sx:Y?{position:"absolute",top:"54%",left:"63%",transform:"translate(-50%, -50%)"}:{position:"absolute",top:"53%",left:"50%",transform:"translate(-50%, -50%)"},children:(0,m.jsx)(v.Z,{})})]}),(0,m.jsx)("div",{children:0!==I.length?(0,m.jsx)(Z,{resultInfo:I}):(0,m.jsx)(h.Z,{component:"div",sx:{minHeight:"360px"}})})]}),B?(0,m.jsxs)(h.Z,{component:"div",className:"homePage__wrapper__listTtn",children:[(0,m.jsx)(C.Z,{"aria-controls":M?"fade-menu":void 0,"aria-haspopup":"true",onClick:function(e){P(e.currentTarget)},variant:"contained",startIcon:(0,m.jsx)(j.Z,{}),className:"homePage__button--listTtn"}),(0,m.jsx)(k.Z,{id:"menu",anchorEl:_,open:Boolean(_),onClose:U,children:0!==W.length?(0,m.jsx)(E,{handleItemClick:H,handleClose:U}):(0,m.jsx)(h.Z,{component:"div",className:"homePage__mobList",children:"\u0429\u0435 \u043d\u0435 \u043c\u0430\u0454 \u043f\u043e\u0441\u0438\u043b\u043e\u043a"})})]}):(0,m.jsx)(E,{handleItemClick:H,handleClose:U})]})})})}}}]);
//# sourceMappingURL=754.e7609786.chunk.js.map