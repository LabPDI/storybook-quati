import{g as f,K as y,I as M,R as Q,H as x}from"./vue.esm-bundler-CoXWIl4n.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g={__name:"QuatiMascot",props:{state:{type:String,default:"idle",validator:s=>["idle","hover","entrance"].includes(s)}},setup(s){const v=s,_=f(()=>`is-${v.state}`);return(k,o)=>(x(),y("div",{class:Q(["quati-mascot-container",_.value])},o[0]||(o[0]=[M("object",{data:"/src/assets/teste_quati_animado_novo.svg",type:"image/svg+xml",class:"quati-mascot-img","aria-label":"Quati Mascot Animado"},null,-1)]),2))}},h=S(g,[["__scopeId","data-v-a2196c6a"]]);g.__docgenInfo={exportName:"default",displayName:"QuatiMascot",description:"",tags:{},props:[{name:"state",type:{name:"string"},defaultValue:{func:!1,value:"'idle'"},values:["idle","hover","entrance"]}],sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/components/QuatiMascot.vue"]};const b={tags:["!dev"],title:"Componentes/QuatiMascot",component:h,argTypes:{state:{control:"select",options:["idle","hover","entrance"]}}},e={args:{state:"idle"}},a={args:{state:"hover"}},t={args:{state:"entrance"}};var r,n,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    state: 'idle'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    state: 'hover'
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    state: 'entrance'
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const E=["DefaultIdle","HoverState","EntranceAnimation"];export{e as DefaultIdle,t as EntranceAnimation,a as HoverState,E as __namedExportsOrder,b as default};
