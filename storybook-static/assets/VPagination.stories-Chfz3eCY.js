import{r as C,F as L,G as P,H as D,z as N,I as B,E as W,M as k}from"./vue.esm-bundler-DSqJOKOX.js";import{V as E}from"./VContainer-CiWSNlM7.js";import{V as O}from"./VPagination-CIj3cLse.js";/* empty css              */import"./locale-BuBliKgJ.js";import"./elevation-Df6_XeYc.js";import"./loader-4FBtdHTB.js";import"./location-CSRDuqq2.js";import"./icons-Bk6vLq9M.js";import"./VProgressLinear-BIyNwrfI.js";import"./resizeObserver-ov779OwB.js";import"./router-CXd2XRR3.js";import"./display-CEU3lcyN.js";import"./VBtn-4dnDFtsC.js";import"./position-DQVCYz_Y.js";import"./index-BdeCh59e.js";import"./VProgressCircular-BLWui2Sh.js";const G={class:"text-caption text-center mt-2 text-medium-emphasis"},F={__name:"VPaginationWrapper",props:{length:Number,totalVisible:Number,modelValue:Number,rounded:String,variant:String,density:String,color:String,activeColor:String,disabled:Boolean,showFirstLast:Boolean},setup(w){const s=w,n=C(s.modelValue??1);return(I,i)=>(D(),L(E,null,{default:P(()=>[N(O,W({modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=S=>n.value=S)},s,{"show-first-last-page":s.showFirstLast}),null,16,["modelValue","show-first-last-page"]),B("p",G,"Página atual: "+k(n.value),1)]),_:1}))}};F.__docgenInfo={exportName:"default",displayName:"VPaginationWrapper",description:"",tags:{},props:[{name:"length",type:{name:"number"}},{name:"totalVisible",type:{name:"number"}},{name:"modelValue",type:{name:"number"}},{name:"rounded",type:{name:"string"}},{name:"variant",type:{name:"string"}},{name:"density",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"activeColor",type:{name:"string"}},{name:"disabled",type:{name:"boolean"}},{name:"showFirstLast",type:{name:"boolean"}}],sourceFiles:["/Users/leonardo/PGE/docker_prod/compose_quati/storybook-tmp/src/stories/components/VPaginationWrapper.vue"]};const te={title:"Componentes/Pagination",component:F,tags:["autodocs"],argTypes:{length:{control:{type:"range",min:1,max:20}},totalVisible:{control:{type:"range",min:1,max:10}},modelValue:{control:{type:"range",min:1,max:20}},rounded:{control:"select",options:["0","sm","md","lg","circle","pill"]},variant:{control:"select",options:["text","flat","elevated","tonal","outlined"]},density:{control:"select",options:["default","comfortable","compact"]},color:{control:"color"},activeColor:{control:"color"},disabled:{control:"boolean"},showFirstLast:{control:"boolean",description:"Exibe botões de primeira/última página"}}},e={args:{length:10,modelValue:1,rounded:"md",variant:"text",density:"default",totalVisible:7,disabled:!1,showFirstLast:!1}},t={args:{...e.args,rounded:"circle"}},a={args:{...e.args,variant:"outlined"}},r={args:{...e.args,showFirstLast:!0,length:20}},o={args:{...e.args,density:"compact"}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    length: 10,
    modelValue: 1,
    rounded: 'md',
    variant: 'text',
    density: 'default',
    totalVisible: 7,
    disabled: false,
    showFirstLast: false
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rounded: 'circle'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,f,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined'
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,V,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showFirstLast: true,
    length: 20
  }
}`,...(h=(V=r.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var v,x,_;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    density: 'compact'
  }
}`,...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const ae=["Default","Circular","Outlined","WithFirstLast","Compact"];export{t as Circular,o as Compact,e as Default,a as Outlined,r as WithFirstLast,ae as __namedExportsOrder,te as default};
