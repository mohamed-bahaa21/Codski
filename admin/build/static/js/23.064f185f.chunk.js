(this["webpackJsonphorizon-admin-portal"]=this["webpackJsonphorizon-admin-portal"]||[]).push([[23],{631:function(e,a,t){"use strict";var s=t(632),i=t(1),c=t(630);t(637);c.a.initializeApp({apiKey:"AIzaSyCY6qtpw2i46AkPKvTeDy5iAVyaxJhoLoI",authDomain:"horizon-28ad8.firebaseapp.com",projectId:"horizon-28ad8",storageBucket:"horizon-28ad8.appspot.com",messagingSenderId:"533324209164",appId:"1:533324209164:web:39aadbbdd96501a872a229",measurementId:"G-GLCDCLKPEN"});var l=c.a.storage(),n=t(626),r=t(627),o=t.n(r),h=t(628),j=t.n(h),b=t(629),d=t(21);a.a=function(){var e=Object(i.useState)(null),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(i.useState)(""),h=Object(s.a)(r,2),_=h[0],g=h[1],p=Object(i.useState)(0),O=Object(s.a)(p,2),x=O[0],u=O[1],m=Object(i.useState)("false"),f=Object(s.a)(m,2),y=f[0],C=f[1],v=Object(i.useState)(!0),S=Object(s.a)(v,2),k=S[0],w=S[1],I=Object(i.useState)("false"),D=Object(s.a)(I,2),L=D[0],N=D[1],U=Object(i.useState)(!1),T=Object(s.a)(U,2),z=T[0],H=T[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(n.f,{className:"btn-primary",onClick:function(){H(!z)},children:"Upload Image"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(n.o,{show:z,children:Object(d.jsx)(n.g,{className:"mt-3",children:Object(d.jsxs)(n.h,{children:[Object(d.jsxs)(n.g,{style:{width:"50vw"},children:["true"===y?Object(d.jsxs)("div",{children:[Object(d.jsxs)(n.a,{width:"1",color:"success",children:[Object(d.jsx)("strong",{children:"Uploaded"})," Successfully..."]}),Object(d.jsx)(j.a,{duration:3e3,children:"Uploaded Successfully..."})]}):Object(d.jsx)("p",{}),Object(d.jsxs)(n.h,{children:[Object(d.jsx)(n.m,{children:"Upload Image"}),Object(d.jsxs)(n.O,{children:[Object(d.jsx)(n.U,{className:"mb-3",children:Object(d.jsx)(n.V,{value:x})}),Object(d.jsx)("progress",{value:x,max:"100"})]}),Object(d.jsxs)(n.O,{children:[Object(d.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&(c(e.target.files[0]),w(!1))}}),Object(d.jsx)(n.f,{color:"secondary",onClick:function(){var e=new Date,a=e.getDate(),s=e.getMonth()+1,i=e.getFullYear(),c=(new Date).getTime();"".concat(a).concat(s).concat(i,"T").concat(c);C("false"),l.ref("images/".concat(t.name)).put(t).on("state_changed",(function(e){var a=Math.round(e.bytesTransferred/e.totalBytes*100);u(a)}),(function(e){console.log(e)}),(function(){l.ref("images").child(t.name).getDownloadURL().then((function(e){g(e),console.log("image: ",t),console.log("URL: "+e);var a={url:e};o.a.post("".concat(b.a,"/api/postImgToGallery"),a).then((function(e){return console.log(e)})),C("true"),w(!0)}))}))},disabled:k,children:"Upload"}),Object(d.jsxs)(n.l,{children:[Object(d.jsx)("strong",{children:" Image URL: "}),_]})]}),Object(d.jsxs)(n.O,{children:["true"===L?Object(d.jsx)("div",{children:Object(d.jsx)(j.a,{duration:2e3,children:"Copied To Clipboard..."})}):Object(d.jsx)("p",{}),Object(d.jsx)(n.f,{color:"secondary",onClick:function(){N("false"),navigator.clipboard.writeText(_),console.log(_),N("true")},children:"Copy Image URL to Clipboard"})]})]})]}),Object(d.jsx)("img",{className:"uploadedImg",src:_||"http://via.placeholder.com/300",alt:"firebase-image"})]})})})]})}},810:function(e,a,t){"use strict";t.r(a);var s=t(162),i=t(157),c=t(158),l=t(161),n=t(160),r=t(159),o=t(1),h=t(626),j=t(631),b=t(627),d=t.n(b),_=t(628),g=t.n(_),p=t(629),O=t(21),x=function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(i.a)(this,t),(s=a.call(this,e)).state={visible:!1,activeKey:0,edited:!1,submitClass:"disabled",submitDisable:!0,image:"...",url:"...",progress:"...",li3_section_display:!0,li3_header:"...",li3_desc:"...",li3_img:"...",li3_parag_1:"...",li3_parag_2:"...",li3_parag_3:"...",li3_parag_4:"...",li3_parag_5:"...",li3_parag_6:"..."},s.onChange=s.onChange.bind(Object(l.a)(s)),s.toggleCheckbox=s.toggleCheckbox.bind(Object(l.a)(s)),s.onSubmit=s.onSubmit.bind(Object(l.a)(s)),s}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("".concat(p.a,"/api/getLensInfo3")).then((function(a){var t=a.data,s=t.li3_section_display,i=t.li3_header,c=t.li3_desc,l=t.li3_img,n=t.li3_parag_1,r=t.li3_parag_2,o=t.li3_parag_3,h=t.li3_parag_4,j=t.li3_parag_5,b=t.li3_parag_6;e.setState({li3_section_display:s,li3_header:i,li3_desc:c,li3_img:l,li3_parag_1:n,li3_parag_2:r,li3_parag_3:o,li3_parag_4:h,li3_parag_5:j,li3_parag_6:b})})).catch((function(e){console.log(e)}))}},{key:"onChange",value:function(e){var a,t=e.target.value;console.log(t),this.setState((a={},Object(s.a)(a,e.target.name,t),Object(s.a)(a,"submitClass","primary"),Object(s.a)(a,"submitDisable",!1),Object(s.a)(a,"edited",!1),a))}},{key:"onSubmit",value:function(e){e.preventDefault();var a={li3_section_display:this.state.li3_section_display,li3_header:this.state.li3_header,li3_desc:this.state.li3_desc,li3_img:this.state.li3_img,li3_parag_1:this.state.li3_parag_1,li3_parag_2:this.state.li3_parag_2,li3_parag_3:this.state.li3_parag_3,li3_parag_4:this.state.li3_parag_4,li3_parag_5:this.state.li3_parag_5,li3_parag_6:this.state.li3_parag_6};d.a.post("".concat(p.a,"/api/postLensInfo3"),a).then((function(e){return console.log(e)})),this.setState({edited:!0,submitClass:"disabled",submitDisable:!0})}},{key:"toggleCheckbox",value:function(e){e.preventDefault(),this.setState({li3_section_display:!this.state.li3_section_display,submitClass:"primary",submitDisable:!1,edited:!1})}},{key:"render",value:function(){return Object(O.jsxs)(h.W,{children:[!0===this.state.edited?Object(O.jsxs)("div",{children:[Object(O.jsx)(g.a,{duration:3e3}),Object(O.jsx)(h.ib,{children:Object(O.jsx)(h.hb,{show:!0,autohide:1e3,fade:!0,header:"CToast fixed component",children:Object(O.jsxs)(h.a,{width:"1",color:"success",dismissible:"".concat(!0),children:[Object(O.jsx)("strong",{children:"Updated"})," Successfully..."]})},this.state.fixedToasts)})]}):Object(O.jsx)("p",{}),Object(O.jsx)(h.n,{xs:"12",children:Object(O.jsxs)(h.y,{onSubmit:this.onSubmit,children:[Object(O.jsx)(h.z,{children:Object(O.jsx)("a",{class:"show_design_link",href:"#",role:"button",onClick:this.toggleCheckbox,children:Object(O.jsxs)("label",{class:"show_design",children:[Object(O.jsx)("input",{class:"label__checkbox",id:"show_design",name:"show_design",type:"checkbox",checked:this.state.li3_section_display,readOnly:!0}),Object(O.jsx)("span",{class:"label__text",children:Object(O.jsx)("span",{class:"label__check",children:Object(O.jsx)("i",{class:"fa fa-check icon"})})}),Object(O.jsx)("label",{class:"show_design_label",htmlFor:"show_design",children:"Show Section"})]})})}),Object(O.jsxs)(h.z,{children:[Object(O.jsx)("h6",{children:this.state.li3_header}),Object(O.jsx)(h.H,{type:"text",id:"li3_header",name:"li3_header",placeholder:"li3_header",value:this.state.li3_header,onChange:this.onChange}),Object(O.jsx)("br",{}),Object(O.jsx)(h.H,{type:"text",id:"li3_desc",name:"li3_desc",placeholder:"li3_desc",value:this.state.li3_desc,onChange:this.onChange}),Object(O.jsx)("br",{}),Object(O.jsxs)(h.I,{className:"mb-3",children:[Object(O.jsx)(h.L,{id:"basic-addon3",children:"Paste Image URL"}),Object(O.jsx)(h.H,{type:"text",id:"li3_img",name:"li3_img",placeholder:"li3_img",value:this.state.li3_img,onChange:this.onChange})]}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("h6",{className:"badgeee",children:"Top Left Parag"}),Object(O.jsx)(h.H,{type:"text",id:"li3_parag_1",name:"li3_parag_1",placeholder:"li3_parag_1",value:this.state.li3_parag_1,onChange:this.onChange}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("h6",{className:"badgeee",children:"Top Right Parag"}),Object(O.jsx)(h.H,{type:"text",id:"li3_parag_2",name:"li3_parag_2",placeholder:"li3_parag_2",value:this.state.li3_parag_2,onChange:this.onChange}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("h6",{className:"badgeee",children:"Left Parag"}),Object(O.jsx)(h.H,{type:"text",id:"li3_parag_3",name:"li3_parag_3",placeholder:"li3_parag_3",value:this.state.li3_parag_3,onChange:this.onChange}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("h6",{className:"badgeee",children:"Right Parag"}),Object(O.jsx)(h.H,{type:"text",id:"li3_parag_4",name:"li3_parag_4",placeholder:"li3_parag_4",value:this.state.li3_parag_4,onChange:this.onChange}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("h6",{className:"badgeee",children:"Bottom Left Parag"}),Object(O.jsx)(h.H,{type:"text",id:"li3_parag_5",name:"li3_parag_5",placeholder:"li3_parag_5",value:this.state.li3_parag_5,onChange:this.onChange}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("h6",{className:"badgeee",children:"Bottom Right Parag"}),Object(O.jsx)(h.H,{type:"text",id:"li3_parag_6",name:"li3_parag_6",placeholder:"li3_parag_6",value:this.state.li3_parag_6,onChange:this.onChange})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("br",{}),Object(O.jsx)(h.z,{children:Object(O.jsx)(h.H,{type:"submit",id:"submit",name:"submit",placeholder:"submit",className:"bg-".concat(this.state.submitClass," text-white bold"),value:"SUBMIT",disabled:this.state.submitDisable})})]})}),Object(O.jsx)(j.a,{})]})}}]),t}(o.Component);a.default=x}}]);
//# sourceMappingURL=23.064f185f.chunk.js.map