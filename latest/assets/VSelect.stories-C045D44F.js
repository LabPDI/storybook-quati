import{g as C,K as O,F as c,E as m,H as l}from"./vue.esm-bundler-CoXWIl4n.js";import{V,a as M}from"./VAutocomplete-EowwHFbe.js";import"./VTextField-BxcRWS7u.js";import"./index-BmgG2glB.js";import"./locale-DOv4BzRv.js";import"./transition-C5vaQ_9E.js";import"./VInput-DTbtLWR7.js";import"./loader-DChbZvSt.js";import"./location-DtgXVZia.js";import"./icons-C9r_7UFu.js";import"./VProgressLinear-DTy1bjZi.js";import"./forwardRefs-B931MWyl.js";import"./index-CdyaCy9i.js";import"./VList-MTKudUhq.js";import"./ssrBoot-yniTzdfO.js";import"./createSimpleFunctional-6bMqqX06.js";import"./elevation-DkJfjdNP.js";import"./router-DY6Hexty.js";import"./index-DYSt8sZT.js";import"./VAvatar-djWgq1y8.js";import"./VDivider-C3UHzRSa.js";import"./dialog-transition-IUZ_V87w.js";import"./VMenu-CFpjJkNA.js";import"./VOverlay-uwnXkKxC.js";import"./display-BsvpeBmF.js";import"./scopeId-BunObSK3.js";import"./resizeObserver-DhfBULCF.js";import"./VCheckboxBtn-DYjRjtQq.js";import"./VChip-dz1wZLgw.js";import"./VSlideGroup-C0jWYxWw.js";import"./goto-DAHqIRb6.js";const D={__name:"VSelectWrapper",props:{type:String,label:String,variant:String,items:[String,Array],disabled:Boolean,clearable:Boolean,multiple:Boolean,chips:Boolean,prependInnerIcon:String},setup(n){const a=n,p=C(()=>typeof a.items=="string"?a.items.split(",").map(i=>i.trim()):a.items);return(i,W)=>(l(),O("div",null,[a.type==="select"?(l(),c(V,m({key:0},a,{items:p.value,"prepend-inner-icon":a.prependInnerIcon||void 0}),null,16,["items","prepend-inner-icon"])):(l(),c(M,m({key:1},a,{items:p.value}),null,16,["items"]))]))}};D.__docgenInfo={exportName:"default",displayName:"VSelectWrapper",description:"",tags:{},props:[{name:"type",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"variant",type:{name:"string"}},{name:"items",type:{name:"string|array"}},{name:"disabled",type:{name:"boolean"}},{name:"clearable",type:{name:"boolean"}},{name:"multiple",type:{name:"boolean"}},{name:"chips",type:{name:"boolean"}},{name:"prependInnerIcon",type:{name:"string"}}],sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/components/VSelectWrapper.vue"]};const ce={parameters:{docs:{source:{transform:n=>n.replace(/VSelectWrapper/g,"v-select")}}},title:"Componentes/Select",component:D,tags:["autodocs"],argTypes:{type:{control:"select",options:["select","autocomplete"],description:"Tipo de seletor"},label:{control:"text"},variant:{control:"select",options:["filled","outlined","underlined","solo"]},items:{control:"text",description:"Itens separados por vírgula"},disabled:{control:"boolean"},clearable:{control:"boolean"},multiple:{control:"boolean"},chips:{control:"boolean",description:"Exibe itens selecionados como chips"},prependInnerIcon:{control:"text"}}},e={args:{type:"select",label:"Selecione uma opção",variant:"outlined",items:"Opção 1, Opção 2, Opção 3",disabled:!1,clearable:!1,multiple:!1,chips:!1}},r={args:{...e.args,type:"autocomplete",label:"Buscar Fruta",items:"Maçã, Banana, Cereja, Uva, Laranja"}},t={args:{...e.args,multiple:!0,chips:!0,label:"Múltipla escolha"}},o={args:{...e.args,clearable:!0}},s={args:{...e.args,disabled:!0}};var u,d,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var b,y,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'autocomplete',
    label: 'Buscar Fruta',
    items: 'Maçã, Banana, Cereja, Uva, Laranja'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,S,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    multiple: true,
    chips: true,
    label: 'Múltipla escolha'
  }
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var E,v,B;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    clearable: true
  }
}`,...(B=(v=o.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var I,_,k;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const me=["Default","Autocomplete","MultipleWithChips","Clearable","Disabled"];export{r as Autocomplete,o as Clearable,e as Default,s as Disabled,t as MultipleWithChips,me as __namedExportsOrder,ce as default};
