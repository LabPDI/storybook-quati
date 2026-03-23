import{F as I,E as w,H as F}from"./vue.esm-bundler-CoXWIl4n.js";import{V as P}from"./VAlert-yb5Pe_pg.js";import"./createSimpleFunctional-6bMqqX06.js";import"./locale-DOv4BzRv.js";import"./location-DtgXVZia.js";import"./loader-DChbZvSt.js";import"./icons-C9r_7UFu.js";import"./VProgressLinear-DTy1bjZi.js";import"./elevation-DkJfjdNP.js";import"./position-CHZW_SWx.js";import"./router-DY6Hexty.js";import"./VBtn-Czbn-Y0x.js";import"./index-DYSt8sZT.js";import"./VProgressCircular-D9Z4yWyc.js";import"./resizeObserver-DhfBULCF.js";const k={__name:"VAlertWrapper",props:{type:String,variant:String,title:String,text:String,closable:Boolean,prominent:Boolean,border:String},setup(c){const i=c;return(z,D)=>(F(),I(P,w(i,{border:i.border||void 0}),null,16,["border"]))}};k.__docgenInfo={exportName:"default",displayName:"VAlertWrapper",description:"",tags:{},props:[{name:"type",type:{name:"string"}},{name:"variant",type:{name:"string"}},{name:"title",type:{name:"string"}},{name:"text",type:{name:"string"}},{name:"closable",type:{name:"boolean"}},{name:"prominent",type:{name:"boolean"}},{name:"border",type:{name:"string"}}],sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/components/VAlertWrapper.vue"]};const Z={title:"Componentes/Alert",component:k,tags:["autodocs"],argTypes:{type:{control:"select",options:["success","info","warning","error"]},variant:{control:"select",options:["flat","tonal","outlined","text","elevated"]},title:{control:"text"},text:{control:"text"},closable:{control:"boolean"},prominent:{control:"boolean"},border:{control:"select",options:["","top","bottom","start","end"],description:"Borda colorida lateral"}},parameters:{docs:{source:{transform:c=>c.replace(/VAlertWrapper/g,"v-alert")}}}},e={args:{type:"success",variant:"tonal",title:"Sucesso",text:"Ação realizada com sucesso.",closable:!1,prominent:!1}},r={args:{...e.args,type:"info",title:"Informação",text:"Aqui está uma informação importante."}},t={args:{...e.args,type:"warning",variant:"outlined",title:"Atenção",text:"Cuidado ao executar esta ação."}},o={args:{...e.args,type:"error",variant:"flat",title:"Erro",text:"Algo deu errado!"}},a={args:{...e.args,prominent:!0,title:"Destaque",text:"Alert em modo prominent."}},s={args:{...e.args,border:"start",title:"Com Borda",text:"Border lateral colorida."}},n={args:{...e.args,closable:!0,title:"Fechável",text:"Clique no X para fechar."}};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'success',
    variant: 'tonal',
    title: 'Sucesso',
    text: 'Ação realizada com sucesso.',
    closable: false,
    prominent: false
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    type: 'info',
    title: 'Informação',
    text: 'Aqui está uma informação importante.'
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var x,f,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    type: 'warning',
    variant: 'outlined',
    title: 'Atenção',
    text: 'Cuidado ao executar esta ação.'
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,S,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    type: 'error',
    variant: 'flat',
    title: 'Erro',
    text: 'Algo deu errado!'
  }
}`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var A,v,B;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    prominent: true,
    title: 'Destaque',
    text: 'Alert em modo prominent.'
  }
}`,...(B=(v=a.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var _,C,h;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    border: 'start',
    title: 'Com Borda',
    text: 'Border lateral colorida.'
  }
}`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var q,W,V;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    closable: true,
    title: 'Fechável',
    text: 'Clique no X para fechar.'
  }
}`,...(V=(W=n.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const $=["Success","Info","Warning","Error","Prominent","WithBorder","Closable"];export{n as Closable,o as Error,r as Info,a as Prominent,e as Success,t as Warning,s as WithBorder,$ as __namedExportsOrder,Z as default};
