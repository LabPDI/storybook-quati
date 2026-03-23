import{F as C,G as r,H as I,I as T,z as t,E as p,J as m}from"./vue.esm-bundler-DSqJOKOX.js";import{V as W}from"./VContainer-CiWSNlM7.js";import{V as l}from"./VBadge-DpLN1mpk.js";import{V as w}from"./loader-4FBtdHTB.js";import{V as F}from"./VAvatar-DFlZdbAx.js";import{V as G}from"./VBtn-4dnDFtsC.js";/* empty css              */import"./locale-BuBliKgJ.js";import"./location-CSRDuqq2.js";import"./icons-Bk6vLq9M.js";import"./transition-BLUfLyNs.js";import"./VProgressLinear-BIyNwrfI.js";import"./elevation-Df6_XeYc.js";import"./router-CXd2XRR3.js";import"./index-BqYOu1Ej.js";import"./position-DQVCYz_Y.js";import"./index-BdeCh59e.js";import"./VProgressCircular-BLWui2Sh.js";import"./resizeObserver-ov779OwB.js";const L={class:"d-flex align-center gap-8",style:{gap:"48px"}},k={__name:"VBadgeWrapper",props:{color:String,content:String,dot:Boolean,floating:Boolean,overlap:Boolean,bordered:Boolean,location:String},setup(z){const o=z;return(P,a)=>(I(),C(W,null,{default:r(()=>[T("div",L,[t(l,p(o,{content:o.dot?void 0:o.content}),{default:r(()=>[t(w,{icon:"mdi-bell",size:"x-large"})]),_:1},16,["content"]),t(l,p(o,{content:o.dot?void 0:o.content}),{default:r(()=>[t(F,{color:"primary",size:"large"},{default:r(()=>a[0]||(a[0]=[m("USR")])),_:1})]),_:1},16,["content"]),t(l,p(o,{content:o.dot?void 0:o.content}),{default:r(()=>[t(G,{variant:"outlined",color:"primary"},{default:r(()=>a[1]||(a[1]=[m("Notificações")])),_:1})]),_:1},16,["content"])])]),_:1}))}};k.__docgenInfo={exportName:"default",displayName:"VBadgeWrapper",description:"",tags:{},props:[{name:"color",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"dot",type:{name:"boolean"}},{name:"floating",type:{name:"boolean"}},{name:"overlap",type:{name:"boolean"}},{name:"bordered",type:{name:"boolean"}},{name:"location",type:{name:"string"}}],sourceFiles:["/Users/leonardo/PGE/docker_prod/compose_quati/storybook-tmp/src/stories/components/VBadgeWrapper.vue"]};const to={title:"Componentes/Badge",component:k,tags:["autodocs"],argTypes:{color:{control:"select",options:["error","success","warning","info","primary","secondary"]},content:{control:"text",description:"Texto/número dentro do badge"},dot:{control:"boolean",description:"Exibe como ponto (sem conteúdo)"},floating:{control:"boolean"},overlap:{control:"boolean"},bordered:{control:"boolean"},location:{control:"select",options:["top end","top start","bottom end","bottom start"]}}},e={args:{color:"error",content:"5",dot:!1,floating:!1,overlap:!0,bordered:!1,location:"top end"}},n={args:{...e.args,dot:!0,color:"success"}},s={args:{...e.args,content:"99+"}},c={args:{...e.args,bordered:!0}},d={args:{...e.args,location:"bottom end",color:"success",dot:!0}};var i,u,g;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'error',
    content: '5',
    dot: false,
    floating: false,
    overlap: true,
    bordered: false,
    location: 'top end'
  }
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,b,B;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dot: true,
    color: 'success'
  }
}`,...(B=(b=n.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var V,_,y;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    content: '99+'
  }
}`,...(y=(_=s.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var x,v,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bordered: true
  }
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var D,E,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    location: 'bottom end',
    color: 'success',
    dot: true
  }
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const ao=["Default","Dot","Large","Bordered","BottomEnd"];export{c as Bordered,d as BottomEnd,e as Default,n as Dot,s as Large,ao as __namedExportsOrder,to as default};
