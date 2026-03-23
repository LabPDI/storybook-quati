import{F as k,E as F,H as P}from"./vue.esm-bundler-DSqJOKOX.js";import{V as w}from"./VAlert-vmWGS2lS.js";import"./createSimpleFunctional-ZD8-r5no.js";import"./locale-BuBliKgJ.js";import"./location-CSRDuqq2.js";import"./loader-4FBtdHTB.js";import"./icons-Bk6vLq9M.js";import"./VProgressLinear-BIyNwrfI.js";import"./elevation-Df6_XeYc.js";import"./position-DQVCYz_Y.js";import"./router-CXd2XRR3.js";import"./VBtn-4dnDFtsC.js";import"./index-BdeCh59e.js";import"./VProgressCircular-BLWui2Sh.js";import"./resizeObserver-ov779OwB.js";const I={__name:"VAlertWrapper",props:{type:String,variant:String,title:String,text:String,closable:Boolean,prominent:Boolean,border:String},setup(V){const c=V;return(z,D)=>(P(),k(w,F(c,{border:c.border||void 0}),null,16,["border"]))}};I.__docgenInfo={exportName:"default",displayName:"VAlertWrapper",description:"",tags:{},props:[{name:"type",type:{name:"string"}},{name:"variant",type:{name:"string"}},{name:"title",type:{name:"string"}},{name:"text",type:{name:"string"}},{name:"closable",type:{name:"boolean"}},{name:"prominent",type:{name:"boolean"}},{name:"border",type:{name:"string"}}],sourceFiles:["/Users/leonardo/PGE/docker_prod/compose_quati/storybook-tmp/src/stories/components/VAlertWrapper.vue"]};const Z={title:"Componentes/Alert",component:I,tags:["autodocs"],argTypes:{type:{control:"select",options:["success","info","warning","error"]},variant:{control:"select",options:["flat","tonal","outlined","text","elevated"]},title:{control:"text"},text:{control:"text"},closable:{control:"boolean"},prominent:{control:"boolean"},border:{control:"select",options:["","top","bottom","start","end"],description:"Borda colorida lateral"}}},e={args:{type:"success",variant:"tonal",title:"Sucesso",text:"Ação realizada com sucesso.",closable:!1,prominent:!1}},r={args:{...e.args,type:"info",title:"Informação",text:"Aqui está uma informação importante."}},t={args:{...e.args,type:"warning",variant:"outlined",title:"Atenção",text:"Cuidado ao executar esta ação."}},o={args:{...e.args,type:"error",variant:"flat",title:"Erro",text:"Algo deu errado!"}},a={args:{...e.args,prominent:!0,title:"Destaque",text:"Alert em modo prominent."}},s={args:{...e.args,border:"start",title:"Com Borda",text:"Border lateral colorida."}},n={args:{...e.args,closable:!0,title:"Fechável",text:"Clique no X para fechar."}};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'success',
    variant: 'tonal',
    title: 'Sucesso',
    text: 'Ação realizada com sucesso.',
    closable: false,
    prominent: false
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    type: 'info',
    title: 'Informação',
    text: 'Aqui está uma informação importante.'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,x,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    type: 'warning',
    variant: 'outlined',
    title: 'Atenção',
    text: 'Cuidado ao executar esta ação.'
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,S,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    type: 'error',
    variant: 'flat',
    title: 'Erro',
    text: 'Algo deu errado!'
  }
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var E,A,v;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    prominent: true,
    title: 'Destaque',
    text: 'Alert em modo prominent.'
  }
}`,...(v=(A=a.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var _,B,C;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    border: 'start',
    title: 'Com Borda',
    text: 'Border lateral colorida.'
  }
}`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var h,q,W;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    closable: true,
    title: 'Fechável',
    text: 'Clique no X para fechar.'
  }
}`,...(W=(q=n.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};const $=["Success","Info","Warning","Error","Prominent","WithBorder","Closable"];export{n as Closable,o as Error,r as Info,a as Prominent,e as Success,t as Warning,s as WithBorder,$ as __namedExportsOrder,Z as default};
