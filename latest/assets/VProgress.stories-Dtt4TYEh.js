import{F as z,G as i,H as l,I as P,z as c,E as m,K as k,L as C,M as D}from"./vue.esm-bundler-CoXWIl4n.js";import{V as H}from"./VContainer-CbGB1Tvg.js";import{V as E}from"./VProgressCircular-D9Z4yWyc.js";import{V as I}from"./VProgressLinear-DTy1bjZi.js";/* empty css              */import"./locale-DOv4BzRv.js";import"./location-DtgXVZia.js";import"./resizeObserver-DhfBULCF.js";const L={class:"d-flex align-center gap-6 mb-6",style:{gap:"32px"}},W={key:0,class:"text-caption"},B={__name:"VProgressWrapper",props:{color:String,value:Number,bufferValue:Number,size:[Number,String],width:[Number,String],linearHeight:[Number,String],indeterminate:Boolean,rounded:Boolean,striped:Boolean,stream:Boolean},setup(t){const r=t;return(q,F)=>(l(),z(H,null,{default:i(()=>[P("div",L,[c(E,m(r,{"model-value":r.value}),{default:i(()=>[r.indeterminate?C("",!0):(l(),k("span",W,D(r.value),1))]),_:1},16,["model-value"])]),c(I,m(r,{"model-value":r.value,height:r.linearHeight}),null,16,["model-value","height"])]),_:1}))}};B.__docgenInfo={exportName:"default",displayName:"VProgressWrapper",description:"",tags:{},props:[{name:"color",type:{name:"string"}},{name:"value",type:{name:"number"}},{name:"bufferValue",type:{name:"number"}},{name:"size",type:{name:"number|string"}},{name:"width",type:{name:"number|string"}},{name:"linearHeight",type:{name:"number|string"}},{name:"indeterminate",type:{name:"boolean"}},{name:"rounded",type:{name:"boolean"}},{name:"striped",type:{name:"boolean"}},{name:"stream",type:{name:"boolean"}}],sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/components/VProgressWrapper.vue"]};const Q={parameters:{docs:{source:{transform:t=>t.replace(/VProgressWrapper/g,"v-progress-linear")}}},title:"Componentes/Progress",component:B,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","error","warning","info"]},value:{control:{type:"range",min:0,max:100},description:"Valor (0-100)"},bufferValue:{control:{type:"range",min:0,max:100},description:"Buffer da barra linear"},size:{control:{type:"range",min:24,max:128},description:"Tamanho do circular"},width:{control:{type:"range",min:1,max:16},description:"Espessura do circular"},linearHeight:{control:{type:"range",min:4,max:32},description:"Altura da barra linear"},indeterminate:{control:"boolean"},rounded:{control:"boolean"},striped:{control:"boolean"},stream:{control:"boolean"}}},e={args:{color:"primary",value:65,bufferValue:80,size:56,width:5,linearHeight:8,indeterminate:!1,rounded:!0,striped:!1,stream:!1}},a={args:{...e.args,indeterminate:!0}},o={args:{...e.args,color:"success",value:100}},n={args:{...e.args,striped:!0,value:72}},s={args:{...e.args,size:100,width:10,value:80,color:"secondary"}};var u,p,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,f,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    indeterminate: true
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,h,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'success',
    value: 100
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var V,_,S;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    striped: true,
    value: 72
  }
}`,...(S=(_=n.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var x,w,N;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 100,
    width: 10,
    value: 80,
    color: 'secondary'
  }
}`,...(N=(w=s.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const R=["Default","Indeterminate","Success","Striped","LargeCircular"];export{e as Default,a as Indeterminate,s as LargeCircular,n as Striped,o as Success,R as __namedExportsOrder,Q as default};
