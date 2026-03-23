import{F as U,E as H,H as j}from"./vue.esm-bundler-CoXWIl4n.js";import{V as A}from"./VTextField-BxcRWS7u.js";import"./index-BmgG2glB.js";import"./locale-DOv4BzRv.js";import"./transition-C5vaQ_9E.js";import"./VInput-DTbtLWR7.js";import"./loader-DChbZvSt.js";import"./location-DtgXVZia.js";import"./icons-C9r_7UFu.js";import"./VProgressLinear-DTy1bjZi.js";import"./forwardRefs-B931MWyl.js";import"./index-CdyaCy9i.js";const N={__name:"VTextFieldWrapper",props:{label:String,variant:String,placeholder:String,hint:String,disabled:Boolean,readonly:Boolean,clearable:Boolean,prependInnerIcon:String,appendInnerIcon:String,errorMessage:[String,Array],type:String},setup(p){const r=p;return(z,G)=>(j(),U(A,H(r,{"persistent-hint":!!r.hint,"prepend-inner-icon":r.prependInnerIcon||void 0,"append-inner-icon":r.appendInnerIcon||void 0,"error-messages":r.errorMessage||[]}),null,16,["persistent-hint","prepend-inner-icon","append-inner-icon","error-messages"]))}};N.__docgenInfo={exportName:"default",displayName:"VTextFieldWrapper",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"variant",type:{name:"string"}},{name:"placeholder",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"disabled",type:{name:"boolean"}},{name:"readonly",type:{name:"boolean"}},{name:"clearable",type:{name:"boolean"}},{name:"prependInnerIcon",type:{name:"string"}},{name:"appendInnerIcon",type:{name:"string"}},{name:"errorMessage",type:{name:"string|array"}},{name:"type",type:{name:"string"}}],sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/components/VTextFieldWrapper.vue"]};const ne={parameters:{docs:{source:{transform:p=>p.replace(/VTextFieldWrapper/g,"v-text-field")}}},title:"Componentes/TextField",component:N,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},hint:{control:"text",description:"Texto de ajuda abaixo do campo"},variant:{control:"select",options:["filled","outlined","underlined","solo","plain"]},type:{control:"select",options:["text","password","email","number","search"]},disabled:{control:"boolean"},readonly:{control:"boolean"},clearable:{control:"boolean"},prependInnerIcon:{control:"text",description:"Ícone MDI interno à esquerda"},appendInnerIcon:{control:"text",description:"Ícone MDI interno à direita"},errorMessage:{control:"text",description:"Mensagem de erro"}}},e={args:{label:"Campo de texto",variant:"filled",placeholder:"Digite aqui...",disabled:!1,readonly:!1,clearable:!1}},a={args:{...e.args,variant:"outlined",label:"Outlined"}},n={args:{...e.args,variant:"underlined",label:"Underlined"}},o={args:{...e.args,variant:"outlined",hint:"Este campo é obrigatório",label:"Email"}},t={args:{...e.args,variant:"outlined",prependInnerIcon:"mdi-email",label:"Email"}},s={args:{...e.args,variant:"outlined",errorMessage:"Este campo é obrigatório",label:"Nome"}},i={args:{...e.args,variant:"outlined",disabled:!0,label:"Desabilitado"}},l={args:{...e.args,variant:"outlined",type:"password",label:"Senha",appendInnerIcon:"mdi-eye"}},d={args:{...e.args,variant:"outlined",clearable:!0,label:"Pesquisa",prependInnerIcon:"mdi-magnify"}};var c,m,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Campo de texto',
    variant: 'filled',
    placeholder: 'Digite aqui...',
    disabled: false,
    readonly: false,
    clearable: false
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,b,I;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    label: 'Outlined'
  }
}`,...(I=(b=a.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var f,y,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'underlined',
    label: 'Underlined'
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,v,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    hint: 'Este campo é obrigatório',
    label: 'Email'
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var D,E,F;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    prependInnerIcon: 'mdi-email',
    label: 'Email'
  }
}`,...(F=(E=t.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var W,_,M;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    errorMessage: 'Este campo é obrigatório',
    label: 'Nome'
  }
}`,...(M=(_=s.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var T,q,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    disabled: true,
    label: 'Desabilitado'
  }
}`,...(w=(q=i.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var V,k,B;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    type: 'password',
    label: 'Senha',
    appendInnerIcon: 'mdi-eye'
  }
}`,...(B=(k=l.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,O,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    clearable: true,
    label: 'Pesquisa',
    prependInnerIcon: 'mdi-magnify'
  }
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const oe=["Default","Outlined","Underlined","WithHint","WithIcon","WithError","Disabled","Password","Clearable"];export{d as Clearable,e as Default,i as Disabled,a as Outlined,l as Password,n as Underlined,s as WithError,o as WithHint,t as WithIcon,oe as __namedExportsOrder,ne as default};
