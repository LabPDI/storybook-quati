import{r as g,F as i,G as a,H as t,z as s,E as y,K as I,N as U,O as q}from"./vue.esm-bundler-CoXWIl4n.js";import{V as G}from"./VContainer-CbGB1Tvg.js";import{V as f,a as S}from"./VRow-COInKKF_.js";import{V as M,a as z,b as H,c as K}from"./VSwitch-CzDSmlpG.js";/* empty css              */import"./locale-DOv4BzRv.js";import"./display-BsvpeBmF.js";import"./VCheckboxBtn-DYjRjtQq.js";import"./loader-DChbZvSt.js";import"./location-DtgXVZia.js";import"./icons-C9r_7UFu.js";import"./VProgressLinear-DTy1bjZi.js";import"./index-DYSt8sZT.js";import"./VInput-DTbtLWR7.js";import"./index-BmgG2glB.js";import"./transition-C5vaQ_9E.js";import"./VProgressCircular-D9Z4yWyc.js";import"./resizeObserver-DhfBULCF.js";const W={__name:"VSelectionControlsWrapper",props:{type:String,label:String,color:String,disabled:Boolean,indeterminate:Boolean},setup(u){const o=u,c=g(!0),b=g("1");return(L,r)=>(t(),i(G,null,{default:a(()=>[o.type==="checkbox"?(t(),i(f,{key:0,class:"align-center"},{default:a(()=>[s(S,{cols:"auto"},{default:a(()=>[s(M,y({modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=e=>c.value=e)},o),null,16,["modelValue"])]),_:1})]),_:1})):o.type==="switch"?(t(),i(f,{key:1,class:"align-center"},{default:a(()=>[s(S,{cols:"auto"},{default:a(()=>[s(z,y({modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=e=>c.value=e)},o),null,16,["modelValue"])]),_:1})]),_:1})):(t(),i(H,{key:2,modelValue:b.value,"onUpdate:modelValue":r[2]||(r[2]=e=>b.value=e)},{default:a(()=>[(t(),I(U,null,q(3,e=>s(K,{key:e,label:o.label+" "+e,value:String(e),color:o.color,disabled:e===3&&o.disabled},null,8,["label","value","color","disabled"])),64))]),_:1},8,["modelValue"]))]),_:1}))}};W.__docgenInfo={exportName:"default",displayName:"VSelectionControlsWrapper",description:"",tags:{},props:[{name:"type",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"disabled",type:{name:"boolean"}},{name:"indeterminate",type:{name:"boolean"}}],sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/components/VSelectionControlsWrapper.vue"]};const ce={parameters:{docs:{source:{transform:u=>u.replace(/VSelectionControlsWrapper/g,"v-checkbox")}}},title:"Componentes/SelectionControls",component:W,tags:["autodocs"],argTypes:{type:{control:"select",options:["checkbox","switch","radio"]},label:{control:"text"},color:{control:"select",options:["primary","secondary","success","error","warning","info"]},disabled:{control:"boolean"},indeterminate:{control:"boolean",description:"Apenas para checkbox"}}},l={args:{type:"checkbox",label:"Aceito os termos",color:"primary",disabled:!1,indeterminate:!1}},p={args:{...l.args,indeterminate:!0,label:"Selecionar tudo"}},n={args:{type:"switch",label:"Ativar notificações",color:"primary",disabled:!1}},m={args:{...n.args,color:"success",label:"Modo ativo"}},d={args:{type:"radio",label:"Opção",color:"primary",disabled:!0}};var V,k,x;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    label: 'Aceito os termos',
    color: 'primary',
    disabled: false,
    indeterminate: false
  }
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var h,C,v;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Checkbox.args,
    indeterminate: true,
    label: 'Selecionar tudo'
  }
}`,...(v=(C=p.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var w,_,E;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: 'switch',
    label: 'Ativar notificações',
    color: 'primary',
    disabled: false
  }
}`,...(E=(_=n.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var A,B,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Switch.args,
    color: 'success',
    label: 'Modo ativo'
  }
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var F,N,O;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    label: 'Opção',
    color: 'primary',
    disabled: true
  }
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const ie=["Checkbox","CheckboxIndeterminate","Switch","SwitchSuccess","Radio"];export{l as Checkbox,p as CheckboxIndeterminate,d as Radio,n as Switch,m as SwitchSuccess,ie as __namedExportsOrder,ce as default};
