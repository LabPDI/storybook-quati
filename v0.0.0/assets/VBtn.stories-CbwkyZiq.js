import{F as R,G as U,E as X,H as g,K as Y,L as Z,M as $}from"./vue.esm-bundler-CoXWIl4n.js";import{V as ee}from"./VBtn-Czbn-Y0x.js";import"./elevation-DkJfjdNP.js";import"./locale-DOv4BzRv.js";import"./loader-DChbZvSt.js";import"./location-DtgXVZia.js";import"./icons-C9r_7UFu.js";import"./VProgressLinear-DTy1bjZi.js";import"./router-DY6Hexty.js";import"./position-CHZW_SWx.js";import"./index-DYSt8sZT.js";import"./VProgressCircular-D9Z4yWyc.js";import"./resizeObserver-DhfBULCF.js";const ae={key:0},Q={__name:"VBtnWrapper",props:{label:String,color:String,variant:String,size:String,disabled:Boolean,loading:Boolean,rounded:Boolean,prependIcon:String,appendIcon:String,iconOnly:String},setup(m){const a=m;return(re,ne)=>(g(),R(ee,X(a,{"prepend-icon":a.prependIcon||void 0,"append-icon":a.appendIcon||void 0,icon:a.iconOnly||void 0}),{default:U(()=>[a.iconOnly?Z("",!0):(g(),Y("span",ae,$(a.label),1))]),_:1},16,["prepend-icon","append-icon","icon"]))}};Q.__docgenInfo={exportName:"default",displayName:"VBtnWrapper",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"variant",type:{name:"string"}},{name:"size",type:{name:"string"}},{name:"disabled",type:{name:"boolean"}},{name:"loading",type:{name:"boolean"}},{name:"rounded",type:{name:"boolean"}},{name:"prependIcon",type:{name:"string"}},{name:"appendIcon",type:{name:"string"}},{name:"iconOnly",type:{name:"string"}}],sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/components/VBtnWrapper.vue"]};const fe={parameters:{docs:{source:{transform:m=>m.replace(/VBtnWrapper/g,"v-btn")}}},title:"Componentes/Button",component:Q,tags:["autodocs"],argTypes:{label:{control:"text",description:"Texto do botão"},color:{control:"select",options:["primary","secondary","success","error","warning","info"]},variant:{control:"select",options:["elevated","flat","tonal","outlined","text","plain"]},size:{control:"select",options:["x-small","small","default","large","x-large"]},disabled:{control:"boolean"},loading:{control:"boolean"},rounded:{control:"boolean"},prependIcon:{control:"text",description:"Ícone MDI antes do texto (ex: mdi-plus)"},appendIcon:{control:"text",description:"Ícone MDI após o texto"},iconOnly:{control:"text",description:"Botão só com ícone (ex: mdi-check)"}}},e={args:{label:"Botão",color:"primary",variant:"elevated",size:"default",disabled:!1,loading:!1,rounded:!1}},r={args:{...e.args,color:"secondary",label:"Secondary"}},n={args:{...e.args,variant:"outlined",label:"Outlined"}},o={args:{...e.args,variant:"tonal",label:"Tonal"}},s={args:{...e.args,size:"small",label:"Small"}},t={args:{...e.args,size:"large",label:"Large"}},l={args:{...e.args,label:"Adicionar",prependIcon:"mdi-plus"}},c={args:{...e.args,label:"Próximo",appendIcon:"mdi-arrow-right"}},i={args:{...e.args,color:"success",iconOnly:"mdi-check",label:""}},p={args:{...e.args,loading:!0,label:"Carregando..."}},d={args:{...e.args,disabled:!0,label:"Desabilitado"}};var u,b,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Botão',
    color: 'primary',
    variant: 'elevated',
    size: 'default',
    disabled: false,
    loading: false,
    rounded: false
  }
}`,...(y=(b=e.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,S,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'secondary',
    label: 'Secondary'
  }
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,D,B;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    label: 'Outlined'
  }
}`,...(B=(D=n.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var v,O,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'tonal',
    label: 'Tonal'
  }
}`,...(h=(O=o.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var _,k,z;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'small',
    label: 'Small'
  }
}`,...(z=(k=s.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var W,L,V;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'large',
    label: 'Large'
  }
}`,...(V=(L=t.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var T,w,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Adicionar',
    prependIcon: 'mdi-plus'
  }
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var P,A,E;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Próximo',
    appendIcon: 'mdi-arrow-right'
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var F,M,N;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'success',
    iconOnly: 'mdi-check',
    label: ''
  }
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var q,G,H;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    label: 'Carregando...'
  }
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,j,J;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    label: 'Desabilitado'
  }
}`,...(J=(j=d.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};const Se=["Default","Secondary","Outlined","Tonal","Small","Large","WithPrependIcon","WithAppendIcon","IconOnly","Loading","Disabled"];export{e as Default,d as Disabled,i as IconOnly,t as Large,p as Loading,n as Outlined,r as Secondary,s as Small,o as Tonal,c as WithAppendIcon,l as WithPrependIcon,Se as __namedExportsOrder,fe as default};
