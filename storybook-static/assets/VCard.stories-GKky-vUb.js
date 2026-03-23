import{F as O,G as e,E as P,H as W,z as t,J as o,M as m}from"./vue.esm-bundler-DSqJOKOX.js";import{V as G,a as L,b as q,c as z,d as D}from"./VCard-DaPSMDcm.js";import{V as u}from"./VBtn-4dnDFtsC.js";import"./locale-BuBliKgJ.js";import"./createSimpleFunctional-ZD8-r5no.js";import"./loader-4FBtdHTB.js";import"./location-CSRDuqq2.js";import"./icons-Bk6vLq9M.js";import"./VProgressLinear-BIyNwrfI.js";import"./VAvatar-DFlZdbAx.js";import"./elevation-Df6_XeYc.js";import"./router-CXd2XRR3.js";import"./transition-BLUfLyNs.js";import"./index-BqYOu1Ej.js";import"./position-DQVCYz_Y.js";import"./index-BdeCh59e.js";import"./VProgressCircular-BLWui2Sh.js";import"./resizeObserver-ov779OwB.js";const F={__name:"VCardWrapper",props:{variant:String,color:String,elevation:[Number,String],rounded:String,width:String,loading:Boolean,title:String,subtitle:String,text:String},setup(H){const a=H;return(I,n)=>(W(),O(G,P(a,{color:a.color||void 0}),{default:e(()=>[t(L,null,{default:e(()=>[o(m(a.title),1)]),_:1}),t(q,null,{default:e(()=>[o(m(a.subtitle),1)]),_:1}),t(z,null,{default:e(()=>[o(m(a.text),1)]),_:1}),t(D,null,{default:e(()=>[t(u,{color:"primary",variant:"text"},{default:e(()=>n[0]||(n[0]=[o("Ação Primária")])),_:1}),t(u,{variant:"text"},{default:e(()=>n[1]||(n[1]=[o("Cancelar")])),_:1})]),_:1})]),_:1},16,["color"]))}};F.__docgenInfo={exportName:"default",displayName:"VCardWrapper",description:"",tags:{},props:[{name:"variant",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"elevation",type:{name:"number|string"}},{name:"rounded",type:{name:"string"}},{name:"width",type:{name:"string"}},{name:"loading",type:{name:"boolean"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"}},{name:"text",type:{name:"string"}}],sourceFiles:["/Users/leonardo/PGE/docker_prod/compose_quati/storybook-tmp/src/stories/components/VCardWrapper.vue"]};const ie={title:"Componentes/Card",component:F,tags:["autodocs"],argTypes:{variant:{control:"select",options:["elevated","flat","tonal","outlined","text"]},color:{control:"select",options:["","primary","secondary","success","error","warning","info"]},elevation:{control:{type:"range",min:0,max:24}},rounded:{control:"select",options:["0","sm","md","lg","xl","pill"]},title:{control:"text"},subtitle:{control:"text"},text:{control:"text"},width:{control:"text",description:"Ex: 400 ou 100%"},loading:{control:"boolean"}}},r={title:"Título do Card",subtitle:"Subtítulo",text:"Este é o conteúdo principal do card.",variant:"elevated",color:"",elevation:2,rounded:"md",loading:!1,width:"380"},s={args:{...r}},i={args:{...r,variant:"outlined",elevation:0}},l={args:{...r,variant:"tonal",color:"primary",elevation:0}},p={args:{...r,variant:"flat",elevation:0}},c={args:{...r,loading:!0}},d={args:{...r,elevation:12}};var g,v,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,f,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'outlined',
    elevation: 0
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,_,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'tonal',
    color: 'primary',
    elevation: 0
  }
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var V,A,E;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'flat',
    elevation: 0
  }
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var T,w,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    loading: true
  }
}`,...(N=(w=c.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var h,k,B;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    elevation: 12
  }
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const le=["Elevated","Outlined","Tonal","Flat","Loading","HighElevation"];export{s as Elevated,p as Flat,d as HighElevation,c as Loading,i as Outlined,l as Tonal,le as __namedExportsOrder,ie as default};
