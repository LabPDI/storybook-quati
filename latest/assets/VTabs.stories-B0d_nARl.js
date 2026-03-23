import{r as I,g as M,K as d,z as g,G as o,E as O,H as s,N as f,O as w,F as T,J as A,M as V,I as U}from"./vue.esm-bundler-CoXWIl4n.js";import{V as z,a as H,b as J,c as K}from"./VTabs-FNjlls21.js";import{V as L}from"./VCard-orpoAt6K.js";import"./VBtn-Czbn-Y0x.js";import"./elevation-DkJfjdNP.js";import"./locale-DOv4BzRv.js";import"./loader-DChbZvSt.js";import"./location-DtgXVZia.js";import"./icons-C9r_7UFu.js";import"./VProgressLinear-DTy1bjZi.js";import"./router-DY6Hexty.js";import"./position-CHZW_SWx.js";import"./index-DYSt8sZT.js";import"./VProgressCircular-D9Z4yWyc.js";import"./resizeObserver-DhfBULCF.js";import"./forwardRefs-B931MWyl.js";import"./scopeId-BunObSK3.js";import"./ssrBoot-yniTzdfO.js";import"./transition-C5vaQ_9E.js";import"./VSlideGroup-C0jWYxWw.js";import"./index-BmgG2glB.js";import"./display-BsvpeBmF.js";import"./goto-DAHqIRb6.js";import"./createSimpleFunctional-6bMqqX06.js";import"./VAvatar-djWgq1y8.js";import"./index-CdyaCy9i.js";const G={__name:"VTabsWrapper",props:{tabs:String,bgColor:String,color:String,alignTabs:String,grow:Boolean,showArrows:Boolean,density:String},setup(c){const t=c,n=I(null),b=M(()=>typeof t.tabs=="string"?t.tabs.split(",").map(y=>y.trim()):t.tabs);return(y,e)=>(s(),d("div",null,[g(z,O({modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=r=>n.value=r)},t),{default:o(()=>[(s(!0),d(f,null,w(b.value,(r,u)=>(s(),T(J,{key:u,value:r},{default:o(()=>[A(V(r),1)]),_:2},1032,["value"]))),128))]),_:1},16,["modelValue"]),g(H,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=r=>n.value=r),class:"mt-4"},{default:o(()=>[(s(!0),d(f,null,w(b.value,(r,u)=>(s(),T(K,{key:u,value:r},{default:o(()=>[g(L,{variant:"tonal",class:"pa-4"},{default:o(()=>[e[2]||(e[2]=A(" Conteúdo da aba ")),U("strong",null,V(r),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]))}};G.__docgenInfo={exportName:"default",displayName:"VTabsWrapper",description:"",tags:{},props:[{name:"tabs",type:{name:"string"}},{name:"bgColor",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"alignTabs",type:{name:"string"}},{name:"grow",type:{name:"boolean"}},{name:"showArrows",type:{name:"boolean"}},{name:"density",type:{name:"string"}}],sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/components/VTabsWrapper.vue"]};const Tr={parameters:{docs:{source:{transform:c=>c.replace(/VTabsWrapper/g,"v-tabs")}}},title:"Componentes/Tabs",component:G,tags:["autodocs"],argTypes:{tabs:{control:"text",description:"Nomes das abas separados por vírgula"},bgColor:{control:"select",options:["surface","primary","secondary","transparent"]},color:{control:"select",options:["primary","secondary","success","error"]},alignTabs:{control:"select",options:["start","center","end","title"]},grow:{control:"boolean",description:"Abas ocupam toda a largura"},showArrows:{control:"boolean",description:"Setas quando há overflow"},density:{control:"select",options:["default","comfortable","compact"]}}},a={args:{tabs:"Primeira, Segunda, Terceira",bgColor:"surface",color:"primary",alignTabs:"start",grow:!1,showArrows:!1,density:"default"}},l={args:{...a.args,grow:!0}},p={args:{...a.args,alignTabs:"center"}},i={args:{...a.args,bgColor:"primary",color:"secondary"}},m={args:{...a.args,tabs:"Aba 1, Aba 2, Aba 3, Aba 4, Aba 5, Aba 6",showArrows:!0}};var v,S,C;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    tabs: 'Primeira, Segunda, Terceira',
    bgColor: 'surface',
    color: 'primary',
    alignTabs: 'start',
    grow: false,
    showArrows: false,
    density: 'default'
  }
}`,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var k,_,B;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    grow: true
  }
}`,...(B=(_=l.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var x,D,N;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    alignTabs: 'center'
  }
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var W,h,P;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bgColor: 'primary',
    color: 'secondary'
  }
}`,...(P=(h=i.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var q,E,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    tabs: 'Aba 1, Aba 2, Aba 3, Aba 4, Aba 5, Aba 6',
    showArrows: true
  }
}`,...(F=(E=m.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const Ar=["Default","Growing","Centered","PrimaryBackground","ManyTabs"];export{p as Centered,a as Default,l as Growing,m as ManyTabs,i as PrimaryBackground,Ar as __namedExportsOrder,Tr as default};
