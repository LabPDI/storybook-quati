import{F as f,G as t,H as g,z as o,J as e,I as s}from"./vue.esm-bundler-CoXWIl4n.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as b}from"./VContainer-CbGB1Tvg.js";import{V as i,b as v,c as l,a as h}from"./VCard-orpoAt6K.js";import{V as x}from"./VBtn-Czbn-Y0x.js";import{V as w}from"./VDivider-C3UHzRSa.js";import{V as n}from"./VSheet-GkdZcvbj.js";import{V as k}from"./VAlert-yb5Pe_pg.js";/* empty css              */import"./locale-DOv4BzRv.js";import"./createSimpleFunctional-6bMqqX06.js";import"./loader-DChbZvSt.js";import"./location-DtgXVZia.js";import"./icons-C9r_7UFu.js";import"./VProgressLinear-DTy1bjZi.js";import"./VAvatar-djWgq1y8.js";import"./elevation-DkJfjdNP.js";import"./router-DY6Hexty.js";import"./transition-C5vaQ_9E.js";import"./index-CdyaCy9i.js";import"./position-CHZW_SWx.js";import"./index-DYSt8sZT.js";import"./VProgressCircular-D9Z4yWyc.js";import"./resizeObserver-DhfBULCF.js";const u={__name:"InstallationPage",setup(S){return(V,a)=>(g(),f(b,{class:"pa-8 pa-md-12 d-flex justify-center",fluid:"",style:{"min-height":"100vh"}},{default:t(()=>[o(i,{class:"w-100",elevation:"0"},{default:t(()=>[o(v,{class:"text-h4 font-weight-bold text-primary mb-2 mt-4 px-6"},{default:t(()=>a[0]||(a[0]=[e(" 🚀 Guia de Instalação do Tema ")])),_:1}),o(l,{class:"px-6 text-body-1"},{default:t(()=>[a[8]||(a[8]=s("p",{class:"mb-4 text-medium-emphasis"},[e(" O "),s("strong",null,"Quati Styles Design System"),e(" é construído sobre o "),s("a",{href:"https://vuetifyjs.com/",target:"_blank",class:"text-secondary font-weight-bold text-decoration-none"},"Vuetify 3"),e(" utilizando design tokens modernos em SASS. Ele fornece uma estética inspirada em Glassmorphism pronta para uso. ")],-1)),a[9]||(a[9]=s("p",{class:"mb-8 text-medium-emphasis"}," Siga os passos abaixo para integrar de forma limpa esse pacote de estilos ao seu projeto local. ",-1)),o(i,{icon:"mdi-cloud-download",class:"mb-8",title:"Download dos Assets",color:"primary",variant:"tonal",elevation:"0"},{default:t(()=>[o(l,null,{default:t(()=>a[1]||(a[1]=[s("p",{class:"mb-4 mt-2"},"Nós empacotamos os estilos globais SASS e os plugins do Vuetify pré-configurados. Inicie baixando os arquivos com o botão abaixo.",-1)])),_:1}),o(h,null,{default:t(()=>[o(x,{color:"primary",variant:"flat","prepend-icon":"mdi-download",href:"./assets/quati-styles-theme.zip",download:"quati-styles-theme.zip",size:"large"},{default:t(()=>a[2]||(a[2]=[e(" Baixar Código do Tema (.ZIP) ")])),_:1})]),_:1})]),_:1}),o(w,{class:"mb-8"}),a[10]||(a[10]=s("h3",{class:"text-h6 font-weight-bold text-primary mb-3"}," 1. Instale as Dependências Base do Vuetify ",-1)),a[11]||(a[11]=s("p",{class:"mb-4 text-medium-emphasis"},"Certifique-se de que o seu projeto possui o Vuetify e os plugins de compilação SASS instalados.",-1)),o(n,{class:"bg-surface-variant pa-4 rounded-lg mb-8",elevation:"0",border:""},{default:t(()=>a[3]||(a[3]=[s("code",{class:"d-block text-body-2 font-weight-medium"},[s("span",{class:"hl-keyword"},"npm"),e(" install vuetify @mdi/font ")],-1),s("code",{class:"d-block text-body-2 font-weight-medium mt-1"},[s("span",{class:"hl-keyword"},"npm"),e(" install -D sass vite-plugin-vuetify ")],-1)])),_:1}),a[12]||(a[12]=s("h3",{class:"text-h6 font-weight-bold text-primary mb-3"}," 2. Estrutura de Arquivos Recomendada ",-1)),a[13]||(a[13]=s("p",{class:"mb-4 text-medium-emphasis"},[e("Extraia o conteúdo do ZIP na raiz da pasta "),s("code",null,"src/"),e(" do seu projeto para seguir a convenção padrão.")],-1)),o(n,{class:"bg-surface-variant pa-4 rounded-lg mb-8",elevation:"0",border:""},{default:t(()=>a[4]||(a[4]=[s("pre",{class:"text-body-2 font-weight-medium",style:{margin:"0"}},[e(`src/
├── plugins/
│   └── vuetify.js       `),s("span",{class:"hl-comment"},"<-- Instância do Vuetify configurada"),e(`
├── styles/
│   ├── settings.scss    `),s("span",{class:"hl-comment"},"<-- Sobrescrita de variáveis (SCSS)"),e(`
│   └── quati-styles/    `),s("span",{class:"hl-comment"},"<-- Design System Core"),e(`
└── main.js`)],-1)])),_:1}),a[14]||(a[14]=s("h3",{class:"text-h6 font-weight-bold text-primary mb-3"},[e(" 3. Inicialização no "),s("code",null,"main.js"),e(" ou "),s("code",null,"main.ts")],-1)),a[15]||(a[15]=s("p",{class:"mb-4 text-medium-emphasis"},"Faça as importações de estilo ANTES dos outros arquivos, para garantir que o CSS do Design System prevaleça sobre os defaults do navegador.",-1)),o(n,{class:"bg-surface-variant pa-4 rounded-lg mb-8",elevation:"0",border:""},{default:t(()=>a[5]||(a[5]=[s("pre",{class:"text-body-2 font-weight-medium",style:{margin:"0"}},[s("span",{class:"hl-comment"},"// 1. SCSS Base do Tema"),e(`
`),s("span",{class:"hl-keyword"},"import"),e(),s("span",{class:"hl-string"},"'@/styles/quati-styles/index.scss'"),e(`

`),s("span",{class:"hl-keyword"},"import"),e(" { createApp } "),s("span",{class:"hl-keyword"},"from"),e(),s("span",{class:"hl-string"},"'vue'"),e(`
`),s("span",{class:"hl-keyword"},"import"),e(" App "),s("span",{class:"hl-keyword"},"from"),e(),s("span",{class:"hl-string"},"'./App.vue'"),e(`

`),s("span",{class:"hl-comment"},"// 2. Instância do Vuetify já com a nossa paleta"),e(`
`),s("span",{class:"hl-keyword"},"import"),e(" vuetify "),s("span",{class:"hl-keyword"},"from"),e(),s("span",{class:"hl-string"},"'./plugins/vuetify'"),e(`

`),s("span",{class:"hl-keyword"},"const"),e(` app = createApp(App)
app.use(vuetify)

app.mount(`),s("span",{class:"hl-string"},"'#app'"),e(")")],-1)])),_:1}),a[16]||(a[16]=s("h3",{class:"text-h6 font-weight-bold text-primary mb-3"}," 4. Adicione o Plugin ao Vite ",-1)),a[17]||(a[17]=s("p",{class:"mb-4 text-medium-emphasis"},[e("O Vuetify requer que informemos a localização do "),s("code",null,"settings.scss"),e(" dentro da compilação do Vite para aplicar corretamente as novas fontes e estilos.")],-1)),o(n,{class:"bg-surface-variant pa-4 rounded-lg mb-8",elevation:"0",border:""},{default:t(()=>a[6]||(a[6]=[s("pre",{class:"text-body-2 font-weight-medium",style:{margin:"0"}},[s("span",{class:"hl-comment"},"// vite.config.js"),e(`
`),s("span",{class:"hl-keyword"},"import"),e(" { defineConfig } "),s("span",{class:"hl-keyword"},"from"),e(),s("span",{class:"hl-string"},"'vite'"),e(`
`),s("span",{class:"hl-keyword"},"import"),e(" vue "),s("span",{class:"hl-keyword"},"from"),e(),s("span",{class:"hl-string"},"'@vitejs/plugin-vue'"),e(`
`),s("span",{class:"hl-keyword"},"import"),e(" vuetify, { transformAssetUrls } "),s("span",{class:"hl-keyword"},"from"),e(),s("span",{class:"hl-string"},"'vite-plugin-vuetify'"),e(`

`),s("span",{class:"hl-keyword"},"export"),e(),s("span",{class:"hl-keyword"},"default"),e(` defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),

    `),s("span",{class:"hl-comment"},"// Conectando o settings.scss do Quati Styles:"),e(`
    vuetify({
      autoImport: `),s("span",{class:"hl-keyword"},"true"),e(`,
      styles: { configFile: `),s("span",{class:"hl-string"},"'src/styles/settings.scss'"),e(` },
    }),
  ],
  css: {
    preprocessorOptions: {
      sass: { api: `),s("span",{class:"hl-string"},"'modern-compiler'"),e(" }, "),s("span",{class:"hl-comment"},"// Padrão Dart Sass 2.0+"),e(`
    },
  },
})`)],-1)])),_:1}),o(k,{type:"success",variant:"tonal",icon:"mdi-check-circle",class:"mt-6 font-weight-medium"},{default:t(()=>a[7]||(a[7]=[e(" ✨ "),s("strong",null,"Instalação Concluída!",-1),e(" Todos os componentes originários do Vuetify (cards, fields, selects, tables) passarão a renderizar usando as propriedades de Quati Styles por padrão. ")])),_:1})]),_:1})]),_:1})]),_:1}))}},c=y(u,[["__scopeId","data-v-ddefc7f7"]]);u.__docgenInfo={exportName:"default",displayName:"InstallationPage",description:"",tags:{},sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/InstallationPage.vue"]};const W={tags:["!dev"],title:"Documentos/Guia de Instalação",component:c,parameters:{layout:"fullscreen"}},r={render:()=>({components:{InstallationPage:c},template:"<InstallationPage />"})};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InstallationPage
    },
    template: '<InstallationPage />'
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const X=["TemplateBase"];export{r as TemplateBase,X as __namedExportsOrder,W as default};
