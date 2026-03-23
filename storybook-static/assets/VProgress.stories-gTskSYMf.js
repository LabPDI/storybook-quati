import{F as z,G as t,H as i,I as P,z as l,E as c,K as C,L as D,M as H}from"./vue.esm-bundler-DSqJOKOX.js";import{V as k}from"./VContainer-CiWSNlM7.js";import{V as E}from"./VProgressCircular-BLWui2Sh.js";import{V as I}from"./VProgressLinear-BIyNwrfI.js";/* empty css              */import"./locale-BuBliKgJ.js";import"./location-CSRDuqq2.js";import"./resizeObserver-ov779OwB.js";const L={class:"d-flex align-center gap-6 mb-6",style:{gap:"32px"}},W={key:0,class:"text-caption"},w={__name:"VProgressWrapper",props:{color:String,value:Number,bufferValue:Number,size:[Number,String],width:[Number,String],linearHeight:[Number,String],indeterminate:Boolean,rounded:Boolean,striped:Boolean,stream:Boolean},setup(B){const r=B;return(F,G)=>(i(),z(k,null,{default:t(()=>[P("div",L,[l(E,c(r,{"model-value":r.value}),{default:t(()=>[r.indeterminate?D("",!0):(i(),C("span",W,H(r.value),1))]),_:1},16,["model-value"])]),l(I,c(r,{"model-value":r.value,height:r.linearHeight}),null,16,["model-value","height"])]),_:1}))}};w.__docgenInfo={exportName:"default",displayName:"VProgressWrapper",description:"",tags:{},props:[{name:"color",type:{name:"string"}},{name:"value",type:{name:"number"}},{name:"bufferValue",type:{name:"number"}},{name:"size",type:{name:"number|string"}},{name:"width",type:{name:"number|string"}},{name:"linearHeight",type:{name:"number|string"}},{name:"indeterminate",type:{name:"boolean"}},{name:"rounded",type:{name:"boolean"}},{name:"striped",type:{name:"boolean"}},{name:"stream",type:{name:"boolean"}}],sourceFiles:["/Users/leonardo/PGE/docker_prod/compose_quati/storybook-tmp/src/stories/components/VProgressWrapper.vue"]};const J={title:"Componentes/Progress",component:w,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","error","warning","info"]},value:{control:{type:"range",min:0,max:100},description:"Valor (0-100)"},bufferValue:{control:{type:"range",min:0,max:100},description:"Buffer da barra linear"},size:{control:{type:"range",min:24,max:128},description:"Tamanho do circular"},width:{control:{type:"range",min:1,max:16},description:"Espessura do circular"},linearHeight:{control:{type:"range",min:4,max:32},description:"Altura da barra linear"},indeterminate:{control:"boolean"},rounded:{control:"boolean"},striped:{control:"boolean"},stream:{control:"boolean"}}},e={args:{color:"primary",value:65,bufferValue:80,size:56,width:5,linearHeight:8,indeterminate:!1,rounded:!0,striped:!1,stream:!1}},a={args:{...e.args,indeterminate:!0}},n={args:{...e.args,color:"success",value:100}},o={args:{...e.args,striped:!0,value:72}},s={args:{...e.args,size:100,width:10,value:80,color:"secondary"}};var m,u,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    value: 65,
    bufferValue: 80,
    size: 56,
    width: 5,
    linearHeight: 8,
    indeterminate: false,
    rounded: true,
    striped: false,
    stream: false
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,g,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    indeterminate: true
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,y,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'success',
    value: 100
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,V,_;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    striped: true,
    value: 72
  }
}`,...(_=(V=o.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var S,x,N;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 100,
    width: 10,
    value: 80,
    color: 'secondary'
  }
}`,...(N=(x=s.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const Q=["Default","Indeterminate","Success","Striped","LargeCircular"];export{e as Default,a as Indeterminate,s as LargeCircular,o as Striped,n as Success,Q as __namedExportsOrder,J as default};
