import{F as w,G as r,H as z,I as C,z as t,E as l,J as i}from"./vue.esm-bundler-CoXWIl4n.js";import{V as I}from"./VContainer-CbGB1Tvg.js";import{V as m}from"./VBadge-CtSpCF3d.js";import{V as T}from"./loader-DChbZvSt.js";import{V as q}from"./VAvatar-djWgq1y8.js";import{V as F}from"./VBtn-Czbn-Y0x.js";/* empty css              */import"./locale-DOv4BzRv.js";import"./location-DtgXVZia.js";import"./icons-C9r_7UFu.js";import"./transition-C5vaQ_9E.js";import"./VProgressLinear-DTy1bjZi.js";import"./elevation-DkJfjdNP.js";import"./router-DY6Hexty.js";import"./index-CdyaCy9i.js";import"./position-CHZW_SWx.js";import"./index-DYSt8sZT.js";import"./VProgressCircular-D9Z4yWyc.js";import"./resizeObserver-DhfBULCF.js";const L={class:"d-flex align-center gap-8",style:{gap:"48px"}},W={__name:"VBadgeWrapper",props:{color:String,content:String,dot:Boolean,floating:Boolean,overlap:Boolean,bordered:Boolean,location:String},setup(p){const o=p;return(A,a)=>(z(),w(I,null,{default:r(()=>[C("div",L,[t(m,l(o,{content:o.dot?void 0:o.content}),{default:r(()=>[t(T,{icon:"mdi-bell",size:"x-large"})]),_:1},16,["content"]),t(m,l(o,{content:o.dot?void 0:o.content}),{default:r(()=>[t(q,{color:"primary",size:"large"},{default:r(()=>a[0]||(a[0]=[i("USR")])),_:1})]),_:1},16,["content"]),t(m,l(o,{content:o.dot?void 0:o.content}),{default:r(()=>[t(F,{variant:"outlined",color:"primary"},{default:r(()=>a[1]||(a[1]=[i("Notificações")])),_:1})]),_:1},16,["content"])])]),_:1}))}};W.__docgenInfo={exportName:"default",displayName:"VBadgeWrapper",description:"",tags:{},props:[{name:"color",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"dot",type:{name:"boolean"}},{name:"floating",type:{name:"boolean"}},{name:"overlap",type:{name:"boolean"}},{name:"bordered",type:{name:"boolean"}},{name:"location",type:{name:"string"}}],sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/components/VBadgeWrapper.vue"]};const to={parameters:{docs:{source:{transform:p=>p.replace(/VBadgeWrapper/g,"v-badge")}}},title:"Componentes/Badge",component:W,tags:["autodocs"],argTypes:{color:{control:"select",options:["error","success","warning","info","primary","secondary"]},content:{control:"text",description:"Texto/número dentro do badge"},dot:{control:"boolean",description:"Exibe como ponto (sem conteúdo)"},floating:{control:"boolean"},overlap:{control:"boolean"},bordered:{control:"boolean"},location:{control:"select",options:["top end","top start","bottom end","bottom start"]}}},e={args:{color:"error",content:"5",dot:!1,floating:!1,overlap:!0,bordered:!1,location:"top end"}},n={args:{...e.args,dot:!0,color:"success"}},s={args:{...e.args,content:"99+"}},c={args:{...e.args,bordered:!0}},d={args:{...e.args,location:"bottom end",color:"success",dot:!0}};var u,g,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: 'error',
    content: '5',
    dot: false,
    floating: false,
    overlap: true,
    bordered: false,
    location: 'top end'
  }
}`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,B,V;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dot: true,
    color: 'success'
  }
}`,...(V=(B=n.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var y,_,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    content: '99+'
  }
}`,...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var v,S,D;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bordered: true
  }
}`,...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var N,k,E;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    location: 'bottom end',
    color: 'success',
    dot: true
  }
}`,...(E=(k=d.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const ao=["Default","Dot","Large","Bordered","BottomEnd"];export{c as Bordered,d as BottomEnd,e as Default,n as Dot,s as Large,ao as __namedExportsOrder,to as default};
