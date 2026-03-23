import{g as C,K as O,F as i,E as m,H as n}from"./vue.esm-bundler-DSqJOKOX.js";import{V as M,a as V}from"./VAutocomplete-4LwwGFX1.js";import"./VTextField-CJuyNBZf.js";import"./index-BOYLXPnE.js";import"./locale-BuBliKgJ.js";import"./transition-BLUfLyNs.js";import"./VInput-C06ZZ8Ef.js";import"./loader-4FBtdHTB.js";import"./location-CSRDuqq2.js";import"./icons-Bk6vLq9M.js";import"./VProgressLinear-BIyNwrfI.js";import"./forwardRefs-B931MWyl.js";import"./index-BqYOu1Ej.js";import"./VList-BhiM1gbe.js";import"./ssrBoot-MpFTZjJn.js";import"./createSimpleFunctional-ZD8-r5no.js";import"./elevation-Df6_XeYc.js";import"./router-CXd2XRR3.js";import"./index-BdeCh59e.js";import"./VAvatar-DFlZdbAx.js";import"./VDivider-B3sT7V5r.js";import"./dialog-transition-DoaNLFvn.js";import"./VMenu-CUbW3jiD.js";import"./VOverlay-CODO9iB1.js";import"./display-CEU3lcyN.js";import"./scopeId-BXwcEH81.js";import"./resizeObserver-ov779OwB.js";import"./VCheckboxBtn-BYka8DNO.js";import"./VChip-CQ4v0_YW.js";import"./VSlideGroup-UG3YECun.js";import"./goto-1UwxV3yp.js";const D={__name:"VSelectWrapper",props:{type:String,label:String,variant:String,items:[String,Array],disabled:Boolean,clearable:Boolean,multiple:Boolean,chips:Boolean,prependInnerIcon:String},setup(k){const a=k,l=C(()=>typeof a.items=="string"?a.items.split(",").map(p=>p.trim()):a.items);return(p,A)=>(n(),O("div",null,[a.type==="select"?(n(),i(M,m({key:0},a,{items:l.value,"prepend-inner-icon":a.prependInnerIcon||void 0}),null,16,["items","prepend-inner-icon"])):(n(),i(V,m({key:1},a,{items:l.value}),null,16,["items"]))]))}};D.__docgenInfo={exportName:"default",displayName:"VSelectWrapper",description:"",tags:{},props:[{name:"type",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"variant",type:{name:"string"}},{name:"items",type:{name:"string|array"}},{name:"disabled",type:{name:"boolean"}},{name:"clearable",type:{name:"boolean"}},{name:"multiple",type:{name:"boolean"}},{name:"chips",type:{name:"boolean"}},{name:"prependInnerIcon",type:{name:"string"}}],sourceFiles:["/Users/leonardo/PGE/docker_prod/compose_quati/storybook-tmp/src/stories/components/VSelectWrapper.vue"]};const me={title:"Componentes/Select",component:D,tags:["autodocs"],argTypes:{type:{control:"select",options:["select","autocomplete"],description:"Tipo de seletor"},label:{control:"text"},variant:{control:"select",options:["filled","outlined","underlined","solo"]},items:{control:"text",description:"Itens separados por vírgula"},disabled:{control:"boolean"},clearable:{control:"boolean"},multiple:{control:"boolean"},chips:{control:"boolean",description:"Exibe itens selecionados como chips"},prependInnerIcon:{control:"text"}}},e={args:{type:"select",label:"Selecione uma opção",variant:"outlined",items:"Opção 1, Opção 2, Opção 3",disabled:!1,clearable:!1,multiple:!1,chips:!1}},r={args:{...e.args,type:"autocomplete",label:"Buscar Fruta",items:"Maçã, Banana, Cereja, Uva, Laranja"}},t={args:{...e.args,multiple:!0,chips:!0,label:"Múltipla escolha"}},o={args:{...e.args,clearable:!0}},s={args:{...e.args,disabled:!0}};var c,u,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'select',
    label: 'Selecione uma opção',
    variant: 'outlined',
    items: 'Opção 1, Opção 2, Opção 3',
    disabled: false,
    clearable: false,
    multiple: false,
    chips: false
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,b,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'autocomplete',
    label: 'Buscar Fruta',
    items: 'Maçã, Banana, Cereja, Uva, Laranja'
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,x,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    multiple: true,
    chips: true,
    label: 'Múltipla escolha'
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var h,E,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    clearable: true
  }
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var _,B,I;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(I=(B=s.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const ce=["Default","Autocomplete","MultipleWithChips","Clearable","Disabled"];export{r as Autocomplete,o as Clearable,e as Default,s as Disabled,t as MultipleWithChips,ce as __namedExportsOrder,me as default};
