import{r as b,F as i,G as r,H as t,z as s,E as g,K as G,N as I,O as W}from"./vue.esm-bundler-DSqJOKOX.js";import{V as M}from"./VContainer-CiWSNlM7.js";import{V as y,a as f}from"./VRow-ZRgM8ms3.js";import{V as P,a as q,b as z,c as H}from"./VSwitch-B5njTBDS.js";/* empty css              */import"./locale-BuBliKgJ.js";import"./display-CEU3lcyN.js";import"./VCheckboxBtn-BYka8DNO.js";import"./loader-4FBtdHTB.js";import"./location-CSRDuqq2.js";import"./icons-Bk6vLq9M.js";import"./VProgressLinear-BIyNwrfI.js";import"./index-BdeCh59e.js";import"./VInput-C06ZZ8Ef.js";import"./index-BOYLXPnE.js";import"./transition-BLUfLyNs.js";import"./VProgressCircular-BLWui2Sh.js";import"./resizeObserver-ov779OwB.js";const O={__name:"VSelectionControlsWrapper",props:{type:String,label:String,color:String,disabled:Boolean,indeterminate:Boolean},setup(U){const o=U,c=b(!0),u=b("1");return(K,a)=>(t(),i(M,null,{default:r(()=>[o.type==="checkbox"?(t(),i(y,{key:0,class:"align-center"},{default:r(()=>[s(f,{cols:"auto"},{default:r(()=>[s(P,g({modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e)},o),null,16,["modelValue"])]),_:1})]),_:1})):o.type==="switch"?(t(),i(y,{key:1,class:"align-center"},{default:r(()=>[s(f,{cols:"auto"},{default:r(()=>[s(q,g({modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=e=>c.value=e)},o),null,16,["modelValue"])]),_:1})]),_:1})):(t(),i(z,{key:2,modelValue:u.value,"onUpdate:modelValue":a[2]||(a[2]=e=>u.value=e)},{default:r(()=>[(t(),G(I,null,W(3,e=>s(H,{key:e,label:o.label+" "+e,value:String(e),color:o.color,disabled:e===3&&o.disabled},null,8,["label","value","color","disabled"])),64))]),_:1},8,["modelValue"]))]),_:1}))}};O.__docgenInfo={exportName:"default",displayName:"VSelectionControlsWrapper",description:"",tags:{},props:[{name:"type",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"disabled",type:{name:"boolean"}},{name:"indeterminate",type:{name:"boolean"}}],sourceFiles:["/Users/leonardo/PGE/docker_prod/compose_quati/storybook-tmp/src/stories/components/VSelectionControlsWrapper.vue"]};const ce={title:"Componentes/SelectionControls",component:O,tags:["autodocs"],argTypes:{type:{control:"select",options:["checkbox","switch","radio"]},label:{control:"text"},color:{control:"select",options:["primary","secondary","success","error","warning","info"]},disabled:{control:"boolean"},indeterminate:{control:"boolean",description:"Apenas para checkbox"}}},l={args:{type:"checkbox",label:"Aceito os termos",color:"primary",disabled:!1,indeterminate:!1}},p={args:{...l.args,indeterminate:!0,label:"Selecionar tudo"}},n={args:{type:"switch",label:"Ativar notificações",color:"primary",disabled:!1}},d={args:{...n.args,color:"success",label:"Modo ativo"}},m={args:{type:"radio",label:"Opção",color:"primary",disabled:!0}};var S,V,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    label: 'Aceito os termos',
    color: 'primary',
    disabled: false,
    indeterminate: false
  }
}`,...(k=(V=l.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var x,h,C;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Checkbox.args,
    indeterminate: true,
    label: 'Selecionar tudo'
  }
}`,...(C=(h=p.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var v,w,_;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'switch',
    label: 'Ativar notificações',
    color: 'primary',
    disabled: false
  }
}`,...(_=(w=n.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var E,A,B;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Switch.args,
    color: 'success',
    label: 'Modo ativo'
  }
}`,...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var R,F,N;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    label: 'Opção',
    color: 'primary',
    disabled: true
  }
}`,...(N=(F=m.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const ie=["Checkbox","CheckboxIndeterminate","Switch","SwitchSuccess","Radio"];export{l as Checkbox,p as CheckboxIndeterminate,m as Radio,n as Switch,d as SwitchSuccess,ie as __namedExportsOrder,ce as default};
