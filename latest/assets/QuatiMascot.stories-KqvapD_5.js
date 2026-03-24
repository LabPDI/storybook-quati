import{g as v,K as f,I as h,P as y,R as M,H as Q}from"./vue.esm-bundler-CoXWIl4n.js";import{m as S}from"./teste_quati_animado_novo-weZNm5LM.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";const k=["data"],p={__name:"QuatiMascot",props:{state:{type:String,default:"idle",validator:s=>["idle","hover","entrance"].includes(s)}},setup(s){const g=s,_=v(()=>`is-${g.state}`);return(b,q)=>(Q(),f("div",{class:M(["quati-mascot-container",_.value])},[h("object",{data:y(S),type:"image/svg+xml",class:"quati-mascot-img","aria-label":"Quati Mascot Animado"},null,8,k)],2))}},I=x(p,[["__scopeId","data-v-37e68e0a"]]);p.__docgenInfo={exportName:"default",displayName:"QuatiMascot",description:"",tags:{},props:[{name:"state",type:{name:"string"},defaultValue:{func:!1,value:"'idle'"},values:["idle","hover","entrance"]}],sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/components/QuatiMascot.vue"]};const C={tags:["!dev"],title:"Componentes/QuatiMascot",component:I,argTypes:{state:{control:"select",options:["idle","hover","entrance"]}}},e={args:{state:"idle"}},a={args:{state:"hover"}},t={args:{state:"entrance"}};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    state: 'idle'
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var c,i,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    state: 'hover'
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,u,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    state: 'entrance'
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const H=["DefaultIdle","HoverState","EntranceAnimation"];export{e as DefaultIdle,t as EntranceAnimation,a as HoverState,H as __namedExportsOrder,C as default};
