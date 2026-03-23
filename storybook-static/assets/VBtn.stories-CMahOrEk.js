import{F as Q,G as R,E as X,H as m,K as Y,L as Z,M as $}from"./vue.esm-bundler-DSqJOKOX.js";import{V as ee}from"./VBtn-4dnDFtsC.js";import"./elevation-Df6_XeYc.js";import"./locale-BuBliKgJ.js";import"./loader-4FBtdHTB.js";import"./location-CSRDuqq2.js";import"./icons-Bk6vLq9M.js";import"./VProgressLinear-BIyNwrfI.js";import"./router-CXd2XRR3.js";import"./position-DQVCYz_Y.js";import"./index-BdeCh59e.js";import"./VProgressCircular-BLWui2Sh.js";import"./resizeObserver-ov779OwB.js";const ae={key:0},j={__name:"VBtnWrapper",props:{label:String,color:String,variant:String,size:String,disabled:Boolean,loading:Boolean,rounded:Boolean,prependIcon:String,appendIcon:String,iconOnly:String},setup(J){const a=J;return(re,ne)=>(m(),Q(ee,X(a,{"prepend-icon":a.prependIcon||void 0,"append-icon":a.appendIcon||void 0,icon:a.iconOnly||void 0}),{default:R(()=>[a.iconOnly?Z("",!0):(m(),Y("span",ae,$(a.label),1))]),_:1},16,["prepend-icon","append-icon","icon"]))}};j.__docgenInfo={exportName:"default",displayName:"VBtnWrapper",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"variant",type:{name:"string"}},{name:"size",type:{name:"string"}},{name:"disabled",type:{name:"boolean"}},{name:"loading",type:{name:"boolean"}},{name:"rounded",type:{name:"boolean"}},{name:"prependIcon",type:{name:"string"}},{name:"appendIcon",type:{name:"string"}},{name:"iconOnly",type:{name:"string"}}],sourceFiles:["/Users/leonardo/PGE/docker_prod/compose_quati/storybook-tmp/src/stories/components/VBtnWrapper.vue"]};const fe={title:"Componentes/Button",component:j,tags:["autodocs"],argTypes:{label:{control:"text",description:"Texto do botão"},color:{control:"select",options:["primary","secondary","success","error","warning","info"]},variant:{control:"select",options:["elevated","flat","tonal","outlined","text","plain"]},size:{control:"select",options:["x-small","small","default","large","x-large"]},disabled:{control:"boolean"},loading:{control:"boolean"},rounded:{control:"boolean"},prependIcon:{control:"text",description:"Ícone MDI antes do texto (ex: mdi-plus)"},appendIcon:{control:"text",description:"Ícone MDI após o texto"},iconOnly:{control:"text",description:"Botão só com ícone (ex: mdi-check)"}}},e={args:{label:"Botão",color:"primary",variant:"elevated",size:"default",disabled:!1,loading:!1,rounded:!1}},r={args:{...e.args,color:"secondary",label:"Secondary"}},n={args:{...e.args,variant:"outlined",label:"Outlined"}},o={args:{...e.args,variant:"tonal",label:"Tonal"}},s={args:{...e.args,size:"small",label:"Small"}},t={args:{...e.args,size:"large",label:"Large"}},l={args:{...e.args,label:"Adicionar",prependIcon:"mdi-plus"}},c={args:{...e.args,label:"Próximo",appendIcon:"mdi-arrow-right"}},i={args:{...e.args,color:"success",iconOnly:"mdi-check",label:""}},p={args:{...e.args,loading:!0,label:"Carregando..."}},d={args:{...e.args,disabled:!0,label:"Desabilitado"}};var g,u,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Botão',
    color: 'primary',
    variant: 'elevated',
    size: 'default',
    disabled: false,
    loading: false,
    rounded: false
  }
}`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,f,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'secondary',
    label: 'Secondary'
  }
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,I,D;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    label: 'Outlined'
  }
}`,...(D=(I=n.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var _,B,O;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'tonal',
    label: 'Tonal'
  }
}`,...(O=(B=o.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var v,h,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'small',
    label: 'Small'
  }
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var z,L,W;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'large',
    label: 'Large'
  }
}`,...(W=(L=t.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var P,T,V;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Adicionar',
    prependIcon: 'mdi-plus'
  }
}`,...(V=(T=l.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var C,E,w;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Próximo',
    appendIcon: 'mdi-arrow-right'
  }
}`,...(w=(E=c.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var A,F,M;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'success',
    iconOnly: 'mdi-check',
    label: ''
  }
}`,...(M=(F=i.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var N,G,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    label: 'Carregando...'
  }
}`,...(q=(G=p.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var H,K,U;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    label: 'Desabilitado'
  }
}`,...(U=(K=d.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const Se=["Default","Secondary","Outlined","Tonal","Small","Large","WithPrependIcon","WithAppendIcon","IconOnly","Loading","Disabled"];export{e as Default,d as Disabled,i as IconOnly,t as Large,p as Loading,n as Outlined,r as Secondary,s as Small,o as Tonal,c as WithAppendIcon,l as WithPrependIcon,Se as __namedExportsOrder,fe as default};
