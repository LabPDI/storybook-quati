import{F as u,G as o,E as D,H as v,L as K,z as b,J as f}from"./vue.esm-bundler-CoXWIl4n.js";import{V as M,a as Q}from"./VCard-orpoAt6K.js";import{V as x}from"./VBtn-Czbn-Y0x.js";import"./locale-DOv4BzRv.js";import"./createSimpleFunctional-6bMqqX06.js";import"./loader-DChbZvSt.js";import"./location-DtgXVZia.js";import"./icons-C9r_7UFu.js";import"./VProgressLinear-DTy1bjZi.js";import"./VAvatar-djWgq1y8.js";import"./elevation-DkJfjdNP.js";import"./router-DY6Hexty.js";import"./transition-C5vaQ_9E.js";import"./index-CdyaCy9i.js";import"./position-CHZW_SWx.js";import"./index-DYSt8sZT.js";import"./VProgressCircular-D9Z4yWyc.js";import"./resizeObserver-DhfBULCF.js";const j={__name:"VCardWrapper",props:{variant:String,color:String,elevation:[Number,String],rounded:String,width:String,loading:Boolean,title:String,subtitle:String,text:String,actions:Boolean},setup(g){const e=g;return(a,t)=>(v(),u(M,D(e,{color:e.color||void 0}),{default:o(()=>[e.actions?(v(),u(Q,{key:0},{default:o(()=>[b(x,{color:"error",size:"small",variant:"text"},{default:o(()=>t[0]||(t[0]=[f("Cancelar")])),_:1}),b(x,{color:"primary",variant:"text"},{default:o(()=>t[1]||(t[1]=[f("Ação Primária")])),_:1})]),_:1})):K("",!0)]),_:1},16,["color"]))}};j.__docgenInfo={exportName:"default",displayName:"VCardWrapper",description:"",tags:{},props:[{name:"variant",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"elevation",type:{name:"number|string"}},{name:"rounded",type:{name:"string"}},{name:"width",type:{name:"string"}},{name:"loading",type:{name:"boolean"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"}},{name:"text",type:{name:"string"}},{name:"actions",type:{name:"boolean"}}],sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/components/VCardWrapper.vue"]};const dr={parameters:{docs:{source:{transform:(g,e)=>{let a=g.replace(/VCardWrapper/g,"v-card");return e.args.actions&&(a=a.replace("/>",`>
  <v-card-actions>
    <v-btn color="error" variant="text">Cancelar</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="primary" variant="text">Confirmar</v-btn>
  </v-card-actions>
</v-card>`)),a}}}},title:"Componentes/Card",component:j,tags:["autodocs"],argTypes:{variant:{control:"select",options:["transparent","elevated","flat","tonal","outlined","text"]},color:{control:"select",options:["","primary","secondary","success","error","warning","info"]},elevation:{control:{type:"range",min:0,max:24}},rounded:{control:"select",options:["0","sm","md","lg","xl","pill"]},title:{control:"text"},subtitle:{control:"text"},text:{control:"text"},width:{control:"text",description:"Ex: 400 ou 100%"},loading:{control:"boolean"}}},r={title:"Título do Card",subtitle:"Subtítulo",text:"Este é o conteúdo principal do card.",variant:"elevated",color:"",elevation:2,rounded:"md",loading:!1,width:"380",actions:!1},n={args:{...r}},s={args:{...r,actions:!0}},i={args:{...r,variant:"transparent"}},c={args:{...r,variant:"outlined",elevation:0}},l={args:{...r,variant:"tonal",color:"primary",elevation:0}},p={args:{...r,variant:"flat",elevation:0}},m={args:{...r,loading:!0}},d={args:{...r,elevation:12}};var y,S,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var A,V,_;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    actions: true
  }
}`,...(_=(V=s.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var E,h,w;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'transparent'
  }
}`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var T,k,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'outlined',
    elevation: 0
  }
}`,...(N=(k=c.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var W,B,F;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'tonal',
    color: 'primary',
    elevation: 0
  }
}`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,L,O;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'flat',
    elevation: 0
  }
}`,...(O=(L=p.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var q,z,P;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    loading: true
  }
}`,...(P=(z=m.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var G,I,J;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    elevation: 12
  }
}`,...(J=(I=d.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const gr=["Elevated","WithActions","Transparent","Outlined","Tonal","Flat","Loading","HighElevation"];export{n as Elevated,p as Flat,d as HighElevation,m as Loading,c as Outlined,l as Tonal,i as Transparent,s as WithActions,gr as __namedExportsOrder,dr as default};
