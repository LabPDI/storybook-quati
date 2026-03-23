import{g as f,K as M,I as Q,R as x,H as y}from"./vue.esm-bundler-DSqJOKOX.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g={__name:"QuatiMascot",props:{state:{type:String,default:"idle",validator:s=>["idle","hover","entrance"].includes(s)}},setup(s){const _=s,v=f(()=>`is-${_.state}`);return(I,o)=>(y(),M("div",{class:x(["quati-mascot-container",v.value])},o[0]||(o[0]=[Q("object",{data:"/src/assets/teste_quati_animado_novo.svg",type:"image/svg+xml",class:"quati-mascot-img","aria-label":"Quati Mascot Animado"},null,-1)]),2))}},E=S(g,[["__scopeId","data-v-a2196c6a"]]);g.__docgenInfo={exportName:"default",displayName:"QuatiMascot",description:"",tags:{},props:[{name:"state",type:{name:"string"},defaultValue:{func:!1,value:"'idle'"},values:["idle","hover","entrance"]}],sourceFiles:["/Users/leonardo/PGE/docker_prod/compose_quati/storybook-tmp/src/components/QuatiMascot.vue"]};const q={title:"Componentes/QuatiMascot",component:E,argTypes:{state:{control:"select",options:["idle","hover","entrance"]}}},e={args:{state:"idle"}},a={args:{state:"hover"}},t={args:{state:"entrance"}};var r,n,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    state: 'idle'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    state: 'hover'
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    state: 'entrance'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const b=["DefaultIdle","HoverState","EntranceAnimation"];export{e as DefaultIdle,t as EntranceAnimation,a as HoverState,b as __namedExportsOrder,q as default};
