import{r as C,F as L,G as P,H as D,z as N,I as W,E as k,M as B}from"./vue.esm-bundler-CoXWIl4n.js";import{V as E}from"./VContainer-CbGB1Tvg.js";import{V as O}from"./VPagination-BkrZ0dfa.js";/* empty css              */import"./locale-DOv4BzRv.js";import"./elevation-DkJfjdNP.js";import"./loader-DChbZvSt.js";import"./location-DtgXVZia.js";import"./icons-C9r_7UFu.js";import"./VProgressLinear-DTy1bjZi.js";import"./resizeObserver-DhfBULCF.js";import"./router-DY6Hexty.js";import"./display-BsvpeBmF.js";import"./VBtn-Czbn-Y0x.js";import"./position-CHZW_SWx.js";import"./index-DYSt8sZT.js";import"./VProgressCircular-D9Z4yWyc.js";const q={class:"text-caption text-center mt-2 text-medium-emphasis"},S={__name:"VPaginationWrapper",props:{length:Number,totalVisible:Number,modelValue:Number,rounded:String,variant:String,density:String,color:String,activeColor:String,disabled:Boolean,showFirstLast:Boolean},setup(s){const n=s,i=C(n.modelValue??1);return(I,l)=>(D(),L(E,null,{default:P(()=>[N(O,k({modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=_=>i.value=_)},n,{"show-first-last-page":n.showFirstLast}),null,16,["modelValue","show-first-last-page"]),W("p",q,"Página atual: "+B(i.value),1)]),_:1}))}};S.__docgenInfo={exportName:"default",displayName:"VPaginationWrapper",description:"",tags:{},props:[{name:"length",type:{name:"number"}},{name:"totalVisible",type:{name:"number"}},{name:"modelValue",type:{name:"number"}},{name:"rounded",type:{name:"string"}},{name:"variant",type:{name:"string"}},{name:"density",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"activeColor",type:{name:"string"}},{name:"disabled",type:{name:"boolean"}},{name:"showFirstLast",type:{name:"boolean"}}],sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/components/VPaginationWrapper.vue"]};const ae={parameters:{docs:{source:{transform:s=>s.replace(/VPaginationWrapper/g,"v-pagination")}}},title:"Componentes/Pagination",component:S,tags:["autodocs"],argTypes:{length:{control:{type:"range",min:1,max:20}},totalVisible:{control:{type:"range",min:1,max:10}},modelValue:{control:{type:"range",min:1,max:20}},rounded:{control:"select",options:["0","sm","md","lg","circle","pill"]},variant:{control:"select",options:["text","flat","elevated","tonal","outlined"]},density:{control:"select",options:["default","comfortable","compact"]},color:{control:"color"},activeColor:{control:"color"},disabled:{control:"boolean"},showFirstLast:{control:"boolean",description:"Exibe botões de primeira/última página"}}},e={args:{length:10,modelValue:1,rounded:"md",variant:"text",density:"default",totalVisible:7,disabled:!1,showFirstLast:!1}},a={args:{...e.args,rounded:"circle"}},t={args:{...e.args,variant:"outlined"}},r={args:{...e.args,showFirstLast:!0,length:20}},o={args:{...e.args,density:"compact"}};var m,p,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rounded: 'circle'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,b,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var V,h,v;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showFirstLast: true,
    length: 20
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,w,F;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    density: 'compact'
  }
}`,...(F=(w=o.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const te=["Default","Circular","Outlined","WithFirstLast","Compact"];export{a as Circular,o as Compact,e as Default,t as Outlined,r as WithFirstLast,te as __namedExportsOrder,ae as default};
