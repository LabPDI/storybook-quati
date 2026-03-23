import{F as N,E as H,H as j}from"./vue.esm-bundler-DSqJOKOX.js";import{V as A}from"./VTextField-CJuyNBZf.js";import"./index-BOYLXPnE.js";import"./locale-BuBliKgJ.js";import"./transition-BLUfLyNs.js";import"./VInput-C06ZZ8Ef.js";import"./loader-4FBtdHTB.js";import"./location-CSRDuqq2.js";import"./icons-Bk6vLq9M.js";import"./VProgressLinear-BIyNwrfI.js";import"./forwardRefs-B931MWyl.js";import"./index-BqYOu1Ej.js";const V={__name:"VTextFieldWrapper",props:{label:String,variant:String,placeholder:String,hint:String,disabled:Boolean,readonly:Boolean,clearable:Boolean,prependInnerIcon:String,appendInnerIcon:String,errorMessage:[String,Array],type:String},setup(k){const r=k;return(G,z)=>(j(),N(A,H(r,{"persistent-hint":!!r.hint,"prepend-inner-icon":r.prependInnerIcon||void 0,"append-inner-icon":r.appendInnerIcon||void 0,"error-messages":r.errorMessage||[]}),null,16,["persistent-hint","prepend-inner-icon","append-inner-icon","error-messages"]))}};V.__docgenInfo={exportName:"default",displayName:"VTextFieldWrapper",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"variant",type:{name:"string"}},{name:"placeholder",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"disabled",type:{name:"boolean"}},{name:"readonly",type:{name:"boolean"}},{name:"clearable",type:{name:"boolean"}},{name:"prependInnerIcon",type:{name:"string"}},{name:"appendInnerIcon",type:{name:"string"}},{name:"errorMessage",type:{name:"string|array"}},{name:"type",type:{name:"string"}}],sourceFiles:["/Users/leonardo/PGE/docker_prod/compose_quati/storybook-tmp/src/stories/components/VTextFieldWrapper.vue"]};const ne={title:"Componentes/TextField",component:V,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},hint:{control:"text",description:"Texto de ajuda abaixo do campo"},variant:{control:"select",options:["filled","outlined","underlined","solo","plain"]},type:{control:"select",options:["text","password","email","number","search"]},disabled:{control:"boolean"},readonly:{control:"boolean"},clearable:{control:"boolean"},prependInnerIcon:{control:"text",description:"Ícone MDI interno à esquerda"},appendInnerIcon:{control:"text",description:"Ícone MDI interno à direita"},errorMessage:{control:"text",description:"Mensagem de erro"}}},e={args:{label:"Campo de texto",variant:"filled",placeholder:"Digite aqui...",disabled:!1,readonly:!1,clearable:!1}},a={args:{...e.args,variant:"outlined",label:"Outlined"}},n={args:{...e.args,variant:"underlined",label:"Underlined"}},o={args:{...e.args,variant:"outlined",hint:"Este campo é obrigatório",label:"Email"}},t={args:{...e.args,variant:"outlined",prependInnerIcon:"mdi-email",label:"Email"}},s={args:{...e.args,variant:"outlined",errorMessage:"Este campo é obrigatório",label:"Nome"}},i={args:{...e.args,variant:"outlined",disabled:!0,label:"Desabilitado"}},l={args:{...e.args,variant:"outlined",type:"password",label:"Senha",appendInnerIcon:"mdi-eye"}},d={args:{...e.args,variant:"outlined",clearable:!0,label:"Pesquisa",prependInnerIcon:"mdi-magnify"}};var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Campo de texto',
    variant: 'filled',
    placeholder: 'Digite aqui...',
    disabled: false,
    readonly: false,
    clearable: false
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    label: 'Outlined'
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var I,y,f;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'underlined',
    label: 'Underlined'
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,h,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    hint: 'Este campo é obrigatório',
    label: 'Email'
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,D,E;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    prependInnerIcon: 'mdi-email',
    label: 'Email'
  }
}`,...(E=(D=t.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var _,F,M;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    errorMessage: 'Este campo é obrigatório',
    label: 'Nome'
  }
}`,...(M=(F=s.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var W,T,q;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    disabled: true,
    label: 'Desabilitado'
  }
}`,...(q=(T=i.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var P,w,B;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    type: 'password',
    label: 'Senha',
    appendInnerIcon: 'mdi-eye'
  }
}`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var C,O,U;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined',
    clearable: true,
    label: 'Pesquisa',
    prependInnerIcon: 'mdi-magnify'
  }
}`,...(U=(O=d.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const oe=["Default","Outlined","Underlined","WithHint","WithIcon","WithError","Disabled","Password","Clearable"];export{d as Clearable,e as Default,i as Disabled,a as Outlined,l as Password,n as Underlined,s as WithError,o as WithHint,t as WithIcon,oe as __namedExportsOrder,ne as default};
