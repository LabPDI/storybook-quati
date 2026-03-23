import{F as g,G as s,H as c,z as o,J as a,I as e}from"./vue.esm-bundler-CoXWIl4n.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as b}from"./VContainer-CbGB1Tvg.js";import{V as r,b as v,c as l,a as x}from"./VCard-orpoAt6K.js";import{V as S}from"./VBtn-Czbn-Y0x.js";import{V}from"./VDivider-C3UHzRSa.js";import{V as i}from"./VSheet-GkdZcvbj.js";import{V as I}from"./VAlert-yb5Pe_pg.js";/* empty css              */import"./locale-DOv4BzRv.js";import"./createSimpleFunctional-6bMqqX06.js";import"./loader-DChbZvSt.js";import"./location-DtgXVZia.js";import"./icons-C9r_7UFu.js";import"./VProgressLinear-DTy1bjZi.js";import"./VAvatar-djWgq1y8.js";import"./elevation-DkJfjdNP.js";import"./router-DY6Hexty.js";import"./transition-C5vaQ_9E.js";import"./index-CdyaCy9i.js";import"./position-CHZW_SWx.js";import"./index-DYSt8sZT.js";import"./VProgressCircular-D9Z4yWyc.js";import"./resizeObserver-DhfBULCF.js";const u={__name:"InstallationPage",setup(w){return(A,t)=>(c(),g(b,{class:"pa-8 pa-md-12 d-flex justify-center",fluid:"",style:{"min-height":"100vh"}},{default:s(()=>[o(r,{class:"w-100",elevation:"0"},{default:s(()=>[o(v,{class:"text-h4 font-weight-bold text-primary mb-2 mt-4 px-6"},{default:s(()=>t[0]||(t[0]=[a(" 🚀 Guia de Instalação do Tema ")])),_:1}),o(l,{class:"px-6 text-body-1"},{default:s(()=>[t[8]||(t[8]=e("p",{class:"mb-4 text-medium-emphasis"},[a(" O "),e("strong",null,"Quati Styles Design System"),a(" é construído sobre o "),e("a",{href:"https://vuetifyjs.com/",target:"_blank",class:"text-secondary font-weight-bold text-decoration-none"},"Vuetify 3"),a(" utilizando design tokens modernos em SASS. Ele fornece uma estética inspirada em Glassmorphism pronta para uso. ")],-1)),t[9]||(t[9]=e("p",{class:"mb-8 text-medium-emphasis"}," Siga os passos abaixo para integrar de forma limpa esse pacote de estilos ao seu projeto local. ",-1)),o(r,{icon:"mdi-cloud-download",class:"mb-8",title:"Download dos Assets",color:"primary",variant:"tonal",elevation:"0"},{default:s(()=>[o(l,null,{default:s(()=>t[1]||(t[1]=[e("p",{class:"mb-4 mt-2"},"Nós empacotamos os estilos globais SASS e os plugins do Vuetify pré-configurados. Inicie baixando os arquivos com o botão abaixo.",-1)])),_:1}),o(x,null,{default:s(()=>[o(S,{color:"primary",variant:"flat","prepend-icon":"mdi-download",href:"./assets/quati-styles-theme.zip",download:"quati-styles-theme.zip",size:"large"},{default:s(()=>t[2]||(t[2]=[a(" Baixar Código do Tema (.ZIP) ")])),_:1})]),_:1})]),_:1}),o(V,{class:"mb-8"}),t[10]||(t[10]=e("h3",{class:"text-h6 font-weight-bold text-primary mb-3"}," 1. Instale as Dependências Base do Vuetify ",-1)),t[11]||(t[11]=e("p",{class:"mb-4 text-medium-emphasis"},"Certifique-se de que o seu projeto possui o Vuetify e os plugins de compilação SASS instalados.",-1)),o(i,{class:"bg-surface-variant pa-4 rounded-lg mb-8",elevation:"0",border:""},{default:s(()=>t[3]||(t[3]=[e("code",{class:"d-block text-body-2 font-weight-medium"},"npm install vuetify @mdi/font",-1),e("code",{class:"d-block text-body-2 font-weight-medium mt-1"},"npm install -D sass vite-plugin-vuetify",-1)])),_:1}),t[12]||(t[12]=e("h3",{class:"text-h6 font-weight-bold text-primary mb-3"}," 2. Estrutura de Arquivos Recomendada ",-1)),t[13]||(t[13]=e("p",{class:"mb-4 text-medium-emphasis"},[a("Extraia o conteúdo do ZIP na raiz da pasta "),e("code",null,"src/"),a(" do seu projeto para seguir a convenção padrão.")],-1)),o(i,{class:"bg-surface-variant pa-4 rounded-lg mb-8",elevation:"0",border:""},{default:s(()=>t[4]||(t[4]=[e("pre",{class:"text-body-2 font-weight-medium",style:{margin:"0"}},`src/
    ├── plugins/
    │ └── vuetify.js <-- Instância do Vuetify configurada
    ├── styles/
    │ ├── settings.scss <-- Sobrescrita de variáveis (SCSS)
    │ └── quati-styles/ <-- Design System Core
    └── main.js`,-1)])),_:1}),t[14]||(t[14]=e("h3",{class:"text-h6 font-weight-bold text-primary mb-3"},[a(" 3. Inicialização no "),e("code",null,"main.js"),a(" ou "),e("code",null,"main.ts")],-1)),t[15]||(t[15]=e("p",{class:"mb-4 text-medium-emphasis"},"Faça as importações de estilo ANTES dos outros arquivos, para garantir que o CSS do Design System prevaleça sobre os defaults do navegador.",-1)),o(i,{class:"bg-surface-variant pa-4 rounded-lg mb-8",elevation:"0",border:""},{default:s(()=>t[5]||(t[5]=[e("pre",{class:"text-body-2 font-weight-medium",style:{margin:"0"}},`// 1. SCSS Base do Tema
    import '@/styles/quati-styles/index.scss'

    import { createApp } from 'vue'
    import App from './App.vue'

    // 2. Instância do Vuetify já com a nossa paleta
    import vuetify from './plugins/vuetify'

    const app = createApp(App)
    app.use(vuetify)

    app.mount('#app')`,-1)])),_:1}),t[16]||(t[16]=e("h3",{class:"text-h6 font-weight-bold text-primary mb-3"}," 4. Adicione o Plugin ao Vite ",-1)),t[17]||(t[17]=e("p",{class:"mb-4 text-medium-emphasis"},[a("O Vuetify requer que informemos a localização do "),e("code",null,"settings.scss"),a(" dentro da compilação do Vite para aplicar corretamente as novas fontes de Glassmorphism nos componentes padrão.")],-1)),o(i,{class:"bg-surface-variant pa-4 rounded-lg mb-8",elevation:"0",border:""},{default:s(()=>t[6]||(t[6]=[e("pre",{class:"text-body-2 font-weight-medium",style:{margin:"0"}},`// vite.config.js
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

    export default defineConfig({
    plugins: [
    vue({ template: { transformAssetUrls } }),

    // Conectando o settings.scss do Quati Styles:
    vuetify({
    autoImport: true,
    styles: { configFile: 'src/styles/settings.scss' },
    }),
    ],
    css: {
    preprocessorOptions: {
    sass: { api: 'modern-compiler' }, // Padrão Dart Sass 2.0+
    },
    },
    })`,-1)])),_:1}),o(I,{type:"success",variant:"tonal",icon:"mdi-check-circle",class:"mt-6 font-weight-medium"},{default:s(()=>t[7]||(t[7]=[a(" ✨ "),e("strong",null,"Instalação Concluída!",-1),a(" Todos os componentes originários do Vuetify (cards, fields, selects, tables) passarão a renderizar usando as propriedades de Quati Styles por padrão. ")])),_:1})]),_:1})]),_:1})]),_:1}))}},f=y(u,[["__scopeId","data-v-aa6ea871"]]);u.__docgenInfo={exportName:"default",displayName:"InstallationPage",description:"",tags:{},sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/InstallationPage.vue"]};const W={tags:["!dev"],title:"Documentos/Guia de Instalação",component:f,parameters:{layout:"fullscreen"}},n={render:()=>({components:{InstallationPage:f},template:"<InstallationPage />"})};var m,d,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InstallationPage
    },
    template: '<InstallationPage />'
  })
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const X=["TemplateBase"];export{n as TemplateBase,X as __namedExportsOrder,W as default};
