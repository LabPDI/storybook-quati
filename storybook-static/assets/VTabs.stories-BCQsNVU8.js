import{r as M,g as U,K as u,z as d,G as o,E as q,H as s,N as y,O as f,F as w,J as A,M as T,I as O}from"./vue.esm-bundler-DSqJOKOX.js";import{V as z,a as H,b as J,c as K}from"./VTabs-BIw62R5P.js";import{V as L}from"./VCard-DaPSMDcm.js";import"./VBtn-4dnDFtsC.js";import"./elevation-Df6_XeYc.js";import"./locale-BuBliKgJ.js";import"./loader-4FBtdHTB.js";import"./location-CSRDuqq2.js";import"./icons-Bk6vLq9M.js";import"./VProgressLinear-BIyNwrfI.js";import"./router-CXd2XRR3.js";import"./position-DQVCYz_Y.js";import"./index-BdeCh59e.js";import"./VProgressCircular-BLWui2Sh.js";import"./resizeObserver-ov779OwB.js";import"./forwardRefs-B931MWyl.js";import"./scopeId-BXwcEH81.js";import"./ssrBoot-MpFTZjJn.js";import"./transition-BLUfLyNs.js";import"./VSlideGroup-UG3YECun.js";import"./index-BOYLXPnE.js";import"./display-CEU3lcyN.js";import"./goto-1UwxV3yp.js";import"./createSimpleFunctional-ZD8-r5no.js";import"./VAvatar-DFlZdbAx.js";import"./index-BqYOu1Ej.js";const F={__name:"VTabsWrapper",props:{tabs:String,bgColor:String,color:String,alignTabs:String,grow:Boolean,showArrows:Boolean,density:String},setup(I){const t=I,n=M(null),g=U(()=>typeof t.tabs=="string"?t.tabs.split(",").map(b=>b.trim()):t.tabs);return(b,e)=>(s(),u("div",null,[d(z,q({modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=r=>n.value=r)},t),{default:o(()=>[(s(!0),u(y,null,f(g.value,(r,c)=>(s(),w(J,{key:c,value:r},{default:o(()=>[A(T(r),1)]),_:2},1032,["value"]))),128))]),_:1},16,["modelValue"]),d(H,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=r=>n.value=r),class:"mt-4"},{default:o(()=>[(s(!0),u(y,null,f(g.value,(r,c)=>(s(),w(K,{key:c,value:r},{default:o(()=>[d(L,{variant:"tonal",class:"pa-4"},{default:o(()=>[e[2]||(e[2]=A(" Conteúdo da aba ")),O("strong",null,T(r),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]))}};F.__docgenInfo={exportName:"default",displayName:"VTabsWrapper",description:"",tags:{},props:[{name:"tabs",type:{name:"string"}},{name:"bgColor",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"alignTabs",type:{name:"string"}},{name:"grow",type:{name:"boolean"}},{name:"showArrows",type:{name:"boolean"}},{name:"density",type:{name:"string"}}],sourceFiles:["/Users/leonardo/PGE/docker_prod/compose_quati/storybook-tmp/src/stories/components/VTabsWrapper.vue"]};const Ar={title:"Componentes/Tabs",component:F,tags:["autodocs"],argTypes:{tabs:{control:"text",description:"Nomes das abas separados por vírgula"},bgColor:{control:"select",options:["surface","primary","secondary","transparent"]},color:{control:"select",options:["primary","secondary","success","error"]},alignTabs:{control:"select",options:["start","center","end","title"]},grow:{control:"boolean",description:"Abas ocupam toda a largura"},showArrows:{control:"boolean",description:"Setas quando há overflow"},density:{control:"select",options:["default","comfortable","compact"]}}},a={args:{tabs:"Primeira, Segunda, Terceira",bgColor:"surface",color:"primary",alignTabs:"start",grow:!1,showArrows:!1,density:"default"}},l={args:{...a.args,grow:!0}},p={args:{...a.args,alignTabs:"center"}},i={args:{...a.args,bgColor:"primary",color:"secondary"}},m={args:{...a.args,tabs:"Aba 1, Aba 2, Aba 3, Aba 4, Aba 5, Aba 6",showArrows:!0}};var V,v,S;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    tabs: 'Primeira, Segunda, Terceira',
    bgColor: 'surface',
    color: 'primary',
    alignTabs: 'start',
    grow: false,
    showArrows: false,
    density: 'default'
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,_,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    grow: true
  }
}`,...(k=(_=l.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var B,x,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    alignTabs: 'center'
  }
}`,...(D=(x=p.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var N,P,W;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bgColor: 'primary',
    color: 'secondary'
  }
}`,...(W=(P=i.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var h,E,G;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    tabs: 'Aba 1, Aba 2, Aba 3, Aba 4, Aba 5, Aba 6',
    showArrows: true
  }
}`,...(G=(E=m.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};const Tr=["Default","Growing","Centered","PrimaryBackground","ManyTabs"];export{p as Centered,a as Default,l as Growing,m as ManyTabs,i as PrimaryBackground,Tr as __namedExportsOrder,Ar as default};
