(this["webpackJsonphorizon-admin-portal"]=this["webpackJsonphorizon-admin-portal"]||[]).push([[16],{631:function(e,t,a){"use strict";var s=a(632),c=a(1),n=a(630);a(637);n.a.initializeApp({apiKey:"AIzaSyCY6qtpw2i46AkPKvTeDy5iAVyaxJhoLoI",authDomain:"horizon-28ad8.firebaseapp.com",projectId:"horizon-28ad8",storageBucket:"horizon-28ad8.appspot.com",messagingSenderId:"533324209164",appId:"1:533324209164:web:39aadbbdd96501a872a229",measurementId:"G-GLCDCLKPEN"});var i=n.a.storage(),o=a(626),r=a(627),l=a.n(r),h=a(628),d=a.n(h),j=a(629),b=a(21);t.a=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),h=Object(s.a)(r,2),_=h[0],g=h[1],u=Object(c.useState)(0),O=Object(s.a)(u,2),x=O[0],m=O[1],p=Object(c.useState)("false"),f=Object(s.a)(p,2),v=f[0],k=f[1],C=Object(c.useState)(!0),y=Object(s.a)(C,2),w=y[0],S=y[1],D=Object(c.useState)("false"),z=Object(s.a)(D,2),N=z[0],I=z[1],L=Object(c.useState)(!1),U=Object(s.a)(L,2),H=U[0],T=U[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(o.f,{className:"btn-primary",onClick:function(){T(!H)},children:"Upload Image"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(o.o,{show:H,children:Object(b.jsx)(o.g,{className:"mt-3",children:Object(b.jsxs)(o.h,{children:[Object(b.jsxs)(o.g,{style:{width:"50vw"},children:["true"===v?Object(b.jsxs)("div",{children:[Object(b.jsxs)(o.a,{width:"1",color:"success",children:[Object(b.jsx)("strong",{children:"Uploaded"})," Successfully..."]}),Object(b.jsx)(d.a,{duration:3e3,children:"Uploaded Successfully..."})]}):Object(b.jsx)("p",{}),Object(b.jsxs)(o.h,{children:[Object(b.jsx)(o.m,{children:"Upload Image"}),Object(b.jsxs)(o.O,{children:[Object(b.jsx)(o.U,{className:"mb-3",children:Object(b.jsx)(o.V,{value:x})}),Object(b.jsx)("progress",{value:x,max:"100"})]}),Object(b.jsxs)(o.O,{children:[Object(b.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&(n(e.target.files[0]),S(!1))}}),Object(b.jsx)(o.f,{color:"secondary",onClick:function(){var e=new Date,t=e.getDate(),s=e.getMonth()+1,c=e.getFullYear(),n=(new Date).getTime();"".concat(t).concat(s).concat(c,"T").concat(n);k("false"),i.ref("images/".concat(a.name)).put(a).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);m(t)}),(function(e){console.log(e)}),(function(){i.ref("images").child(a.name).getDownloadURL().then((function(e){g(e),console.log("image: ",a),console.log("URL: "+e);var t={url:e};l.a.post("".concat(j.a,"/api/postImgToGallery"),t).then((function(e){return console.log(e)})),k("true"),S(!0)}))}))},disabled:w,children:"Upload"}),Object(b.jsxs)(o.l,{children:[Object(b.jsx)("strong",{children:" Image URL: "}),_]})]}),Object(b.jsxs)(o.O,{children:["true"===N?Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{duration:2e3,children:"Copied To Clipboard..."})}):Object(b.jsx)("p",{}),Object(b.jsx)(o.f,{color:"secondary",onClick:function(){I("false"),navigator.clipboard.writeText(_),console.log(_),I("true")},children:"Copy Image URL to Clipboard"})]})]})]}),Object(b.jsx)("img",{className:"uploadedImg",src:_||"http://via.placeholder.com/300",alt:"firebase-image"})]})})})]})}},634:function(e,t,a){},635:function(e,t,a){"use strict";var s=a(632),c=a(1),n=a(21);var i=function(e){return Object(n.jsx)("svg",{className:e.className,height:e.height,width:e.width,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(n.jsx)("path",{fill:e.fill,d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})})};a(634);t.a=function(e){var t=Object(c.useState)(""),a=Object(s.a)(t,2),o=a[0],r=a[1],l=Object(c.useState)("0px"),h=Object(s.a)(l,2),d=h[0],j=h[1],b=Object(c.useState)("accordion__icon"),_=Object(s.a)(b,2),g=_[0],u=_[1],O=Object(c.useRef)(null);return Object(n.jsxs)("div",{className:"accordion__section",children:[Object(n.jsxs)("button",{type:"button",className:"accordion ".concat(o),onClick:function(){r(""===o?"active":""),j("active"===o?"0px":"".concat(O.current.scrollHeight,"px")),u("active"===o?"accordion__icon":"accordion__icon rotate")},children:[Object(n.jsx)("p",{className:"accordion__title",children:e.title}),Object(n.jsx)(i,{className:"".concat(g),width:10,fill:"#777"})]}),Object(n.jsx)("div",{ref:O,style:{maxHeight:"".concat(d)},className:"accordion__content",children:Object(n.jsx)("div",{className:"accordion__text",children:e.content})})]})}},806:function(e,t,a){"use strict";a.r(t);var s=a(162),c=a(157),n=a(158),i=a(161),o=a(160),r=a(159),l=a(1),h=a(626),d=a(635),j=a(628),b=a.n(j),_=(a(631),a(627)),g=a.n(_),u=a(629),O=a(21),x=(a(654),function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={activeKey:0,edited:!1,submitClass:"disabled",submitDisable:!0,csrfToken:"",hero_section_display:!0,name:"...",hero_parag_1:"...",hero_header_1:"...",hero_parag_2:"...",hero_link_1_name:"...",hero_link_1_href:"...",design_state:!0,design_img:"...",showLenses:!1},s.onChange=s.onChange.bind(Object(i.a)(s)),s.toggleCheckbox=s.toggleCheckbox.bind(Object(i.a)(s)),s.onSubmit=s.onSubmit.bind(Object(i.a)(s)),s}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat(u.a,"/api/getHeroData")).then((function(t){console.log("===================================="),console.log("server: ",u.a),console.log(t),console.log("====================================");var a=t.data,s=a.name,c=a.hero_parag_1,n=a.hero_header_1,i=a.hero_parag_2,o=a.hero_link_1_name,r=a.hero_link_1_href,l=a.design_state,h=a.design_img;e.setState({name:s,hero_parag_1:c,hero_header_1:n,hero_parag_2:i,hero_link_1_name:o,hero_link_1_href:r,design_state:l,design_img:h})})).catch((function(e){console.log(e)}))}},{key:"onChange",value:function(e){var t,a=e.target,c=a.name,n=a.value;this.setState((t={},Object(s.a)(t,c,n),Object(s.a)(t,"submitClass","primary"),Object(s.a)(t,"submitDisable",!1),Object(s.a)(t,"edited",!1),t))}},{key:"toggleCheckbox",value:function(e){e.preventDefault(),this.setState({design_state:!this.state.design_state,submitClass:"primary",submitDisable:!1,edited:!1})}},{key:"onSubmit",value:function(e){if(e.preventDefault(),!this.state.submitDisable){var t={name:this.state.name,hero_parag_1:this.state.hero_parag_1,hero_header_1:this.state.hero_header_1,hero_parag_2:this.state.hero_parag_2,hero_link_1_name:this.state.hero_link_1_name,hero_link_1_href:this.state.hero_link_1_href,design_state:this.state.design_state,design_img:this.state.design_img};g.a.post("".concat(u.a,"/api/postHeroData"),t).then((function(e){return console.log(e)})),this.setState({edited:!0,submitClass:"disabled",submitDisable:!0})}}},{key:"render",value:function(){return Object(O.jsxs)(h.W,{children:[!0===this.state.edited?Object(O.jsxs)("div",{children:[Object(O.jsx)(b.a,{duration:3e3}),Object(O.jsx)(h.ib,{children:Object(O.jsx)(h.hb,{show:!0,autohide:1e3,fade:!0,header:"CToast fixed component",children:Object(O.jsxs)(h.a,{width:"1",color:"success",dismissible:"".concat(!0),children:[Object(O.jsx)("strong",{children:"Updated"})," Successfully..."]})},this.state.fixedToasts)})]}):Object(O.jsx)("p",{}),Object(O.jsx)(h.n,{xs:"12",children:Object(O.jsxs)(h.y,{onSubmit:this.onSubmit,children:[Object(O.jsxs)(h.z,{children:[Object(O.jsx)("h6",{children:this.state.name}),Object(O.jsx)(h.H,{type:"text",id:"name",name:"name",placeholder:"name",value:this.state.name,onChange:this.onChange}),Object(O.jsx)(h.A,{className:"help-block",children:"Please enter name"})]}),Object(O.jsx)(d.a,{title:"Content",content:Object(O.jsxs)("div",{children:[Object(O.jsx)(h.z,{children:Object(O.jsx)(h.H,{type:"text",id:"hero_parag_1",name:"hero_parag_1",placeholder:"hero_parag_1",value:this.state.hero_parag_1,onChange:this.onChange})}),Object(O.jsx)(h.z,{children:Object(O.jsx)(h.H,{type:"text",id:"hero_header_1",name:"hero_header_1",placeholder:"hero_header_1",value:this.state.hero_header_1,onChange:this.onChange})}),Object(O.jsx)(h.z,{children:Object(O.jsx)(h.gb,{type:"text",id:"hero_parag_2",name:"hero_parag_2",placeholder:"hero_parag_2",value:this.state.hero_parag_2,onChange:this.onChange})}),Object(O.jsx)(h.z,{children:Object(O.jsx)(h.H,{type:"text",id:"hero_link_1_name",name:"hero_link_1_name",placeholder:"hero_link_1_name",value:this.state.hero_link_1_name,onChange:this.onChange})}),Object(O.jsx)(h.z,{children:Object(O.jsx)(h.I,{className:"mb-3",children:Object(O.jsx)(h.H,{type:"text",id:"hero_link_1_href",name:"hero_link_1_href",placeholder:"hero_link_1_href",value:this.state.hero_link_1_href,onChange:this.onChange})})})]})}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("br",{}),Object(O.jsx)(d.a,{title:"Design",content:Object(O.jsxs)("div",{children:[Object(O.jsx)(h.z,{children:Object(O.jsx)("a",{class:"show_design_link",href:"#",role:"button",onClick:this.toggleCheckbox,children:Object(O.jsxs)("label",{class:"show_design",children:[Object(O.jsx)("input",{class:"label__checkbox",id:"show_design",name:"show_design",type:"checkbox",checked:this.state.design_state,readOnly:!0}),Object(O.jsx)("span",{class:"label__text",children:Object(O.jsx)("span",{class:"label__check",children:Object(O.jsx)("i",{class:"fa fa-check icon"})})}),Object(O.jsx)("label",{class:"show_design_label",htmlFor:"show_design",children:"Show Lenses Design"})]})})}),Object(O.jsx)(h.z,{children:Object(O.jsx)(h.H,{type:"text",id:"design_img",name:"design_img",placeholder:"design_img",value:this.state.design_img,onChange:this.onChange,disabled:this.state.design_state})})]})}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("br",{}),Object(O.jsx)(h.z,{children:Object(O.jsx)(h.H,{type:"submit",id:"submit",name:"submit",placeholder:"submit",className:"bg-".concat(this.state.submitClass," text-white bold"),value:"SUBMIT",disabled:this.state.submitDisable})})]})})]})}}]),a}(l.Component));t.default=x}}]);
//# sourceMappingURL=16.3831b44b.chunk.js.map