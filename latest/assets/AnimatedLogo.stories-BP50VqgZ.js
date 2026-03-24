import{_ as o}from"./AnimatedLogo-BzLScrNk.js";import"./vue.esm-bundler-CoXWIl4n.js";import"./teste_quati_animado_novo-weZNm5LM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={tags:["!dev"],title:"Componentes/AnimatedLogo",component:o,argTypes:{abstract:{control:"boolean"},textPart1:{control:"text"},textPart2:{control:"text"},viewBox:{control:"text"},part2OffsetX:{control:"number"}}},t={args:{textPart1:"Qua",textPart2:"ti",abstract:!1,viewBox:"0 0 360 200",part2OffsetX:30},render:n=>({components:{AnimatedLogo:o},setup(){return{args:n}},template:'<AnimatedLogo v-bind="args" />'})},e={args:{...t.args,abstract:!0},render:n=>({components:{AnimatedLogo:o},setup(){return{args:n}},template:`
      <div style="width: 100vw; height: 100vh; AnimatedLogo: #294964;">
        <AnimatedLogo v-bind="args" />
        <div style="position: relative; z-index: 10; padding: 2rem; color: white;">
          <h1>Modo Abstrato Ativo</h1>
          <p>Este fundo deve estar borrado e animado.</p>
        </div>
      </div>
    `})};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    textPart1: 'Qua',
    textPart2: 'ti',
    abstract: false,
    viewBox: '0 0 360 200',
    part2OffsetX: 30
  },
  render: args => ({
    components: {
      AnimatedLogo
    },
    setup() {
      return {
        args
      };
    },
    template: '<AnimatedLogo v-bind="args" />'
  })
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,d,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    abstract: true
  },
  render: args => ({
    components: {
      AnimatedLogo
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="width: 100vw; height: 100vh; AnimatedLogo: #294964;">
        <AnimatedLogo v-bind="args" />
        <div style="position: relative; z-index: 10; padding: 2rem; color: white;">
          <h1>Modo Abstrato Ativo</h1>
          <p>Este fundo deve estar borrado e animado.</p>
        </div>
      </div>
    \`
  })
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const v=["Default","AbstractMode"];export{e as AbstractMode,t as Default,v as __namedExportsOrder,u as default};
