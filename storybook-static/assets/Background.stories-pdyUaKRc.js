import{_ as n}from"./Background-BCmSIoza.js";import"./vue.esm-bundler-DSqJOKOX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Componentes/Background",component:n,argTypes:{abstract:{control:"boolean"},textPart1:{control:"text"},textPart2:{control:"text"},viewBox:{control:"text"},part2OffsetX:{control:"number"}}},t={args:{textPart1:"Qua",textPart2:"ti",abstract:!1,viewBox:"0 0 360 200",part2OffsetX:30},render:e=>({components:{Background:n},setup(){return{args:e}},template:'<Background v-bind="args" />'})},r={args:{...t.args,abstract:!0},render:e=>({components:{Background:n},setup(){return{args:e}},template:`
      <div style="width: 100vw; height: 100vh; background: #294964;">
        <Background v-bind="args" />
        <div style="position: relative; z-index: 10; padding: 2rem; color: white;">
          <h1>Modo Abstrato Ativo</h1>
          <p>Este fundo deve estar borrado e animado.</p>
        </div>
      </div>
    `})};var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    textPart1: 'Qua',
    textPart2: 'ti',
    abstract: false,
    viewBox: '0 0 360 200',
    part2OffsetX: 30
  },
  render: args => ({
    components: {
      Background
    },
    setup() {
      return {
        args
      };
    },
    template: '<Background v-bind="args" />'
  })
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var d,c,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    abstract: true
  },
  render: args => ({
    components: {
      Background
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="width: 100vw; height: 100vh; background: #294964;">
        <Background v-bind="args" />
        <div style="position: relative; z-index: 10; padding: 2rem; color: white;">
          <h1>Modo Abstrato Ativo</h1>
          <p>Este fundo deve estar borrado e animado.</p>
        </div>
      </div>
    \`
  })
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const l=["Default","AbstractMode"];export{r as AbstractMode,t as Default,l as __namedExportsOrder,m as default};
