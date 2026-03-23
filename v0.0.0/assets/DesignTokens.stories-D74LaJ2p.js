import{F as G,G as t,H as l,z as e,I as r,J as v,K as s,N as n,O as o,E as p,M as c,Q as _}from"./vue.esm-bundler-CoXWIl4n.js";import{V as E}from"./VContainer-CbGB1Tvg.js";import{V as i,a as m}from"./VRow-COInKKF_.js";import{V as M}from"./VDivider-C3UHzRSa.js";import{V as x}from"./VSheet-GkdZcvbj.js";/* empty css              */import"./locale-DOv4BzRv.js";import"./display-BsvpeBmF.js";import"./location-DtgXVZia.js";import"./elevation-DkJfjdNP.js";import"./position-CHZW_SWx.js";const O={class:"text-caption text-medium-emphasis mb-1"},A={class:"text-caption text-medium-emphasis"},q={class:"text-h5 font-weight-bold"},H={class:"text-caption"},Q={class:"text-caption font-weight-medium"},W={class:"text-caption text-medium-emphasis"},X='"Nirmala UI", "Inter", "Roboto", sans-serif',b={__name:"DesignTokens",setup(U){const d={props:["title","subtitle"],template:`
    <v-row class="mb-4 mt-6">
      <v-col>
        <h3 class="text-h6 font-weight-semibold">{{ title }}</h3>
        <p class="text-caption text-medium-emphasis">{{ subtitle }}</p>
        <v-divider class="mt-2 mb-4" />
      </v-col>
    </v-row>
  `},y={props:["name","var_name","hex","on"],template:`
    <div class="mb-2">
      <div
        :style="{ background: 'var(' + var_name.replace('$', '--') + ', ' + hex + ')', height: '64px', borderRadius: '12px' }"
        class="mb-2 elevation-1"
      />
      <p class="text-caption font-weight-medium">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
      <p class="text-caption text-disabled" style="font-size: 10px;">var({{ var_name.replace('$', '--') }})</p>
    </div>
  `},k={props:["name","var_name","value"],template:`
    <div class="mb-2">
      <div
        :style="{ background: 'var(' + var_name.replace('$', '--') + ', ' + value + ')', height: '56px', borderRadius: '12px', border: '1.5px solid rgba(255,255,255,0.4)' }"
        class="mb-2"
        style="backdrop-filter: blur(8px);"
      />
      <p class="text-caption font-weight-medium">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
      <p class="text-caption text-disabled" style="font-size: 10px; word-break: break-all;">var({{ var_name.replace('$', '--') }})</p>
    </div>
  `},S={props:["name","var_name","value"],template:`
    <div class="text-center mb-4">
      <div
        :style="{ borderRadius: 'var(' + var_name.replace('$', '--') + ', ' + value + ')', border: '2px solid var(--lg-primary, #294964)', width: '100%', height: '56px' }"
        class="mb-2"
      />
      <p class="text-caption font-weight-medium">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
      <p class="text-caption text-disabled" style="font-size: 10px;">var({{ var_name.replace('$', '--') }})</p>
    </div>
  `},D={props:["name","var_name","value"],template:`
    <div class="mb-4">
      <div
        style="position:relative; height: 64px; border-radius:12px; overflow:hidden; border: 1.5px solid rgba(41,73,100,0.3);"
      >
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,#294964 0%,#f58634 100%);opacity:0.4;" />
        <div
          :style="{ backdropFilter: 'blur(var(' + var_name.replace('$', '--') + ', ' + value + '))', position:'absolute', inset:0, background:'rgba(255,255,255,0.25)' }"
        />
        <p class="text-caption font-weight-bold" style="position:relative;padding:8px;color:#294964;">blur(var({{ var_name.replace('$', '--') }}))</p>
      </div>
      <p class="text-caption font-weight-medium mt-2">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
    </div>
  `},f={props:["name","var_name","color","glow"],template:`
    <div class="mb-4">
      <div
        :style="{
          boxShadow: 'var(' + var_name.replace('$', '--') + ', ' + color + ')',
          height: '64px',
          borderRadius: '12px',
          background: '#fff',
          border: '1px solid rgba(0,0,0,0.05)'
        }"
        class="mb-2"
      />
      <p class="text-caption font-weight-medium">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
    </div>
  `},C={props:["name","var_name","value"],template:`
    <div class="text-center mb-4">
      <v-sheet rounded="lg" class="pa-4" border>
        <p class="text-caption text-disabled" style="font-size: 10px;">var({{ var_name.replace('$', '--') }})</p>
        <p class="text-caption font-weight-medium">{{ name }}</p>
        <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
      </v-sheet>
    </div>
  `},T=[{name:"Primary",var_name:"$lg-primary",hex:"#294964"},{name:"Secondary",var_name:"$lg-secondary",hex:"#f58634"},{name:"Accent",var_name:"$lg-accent",hex:"#51a8b1"},{name:"Success",var_name:"$lg-success",hex:"#34c759"},{name:"Warning",var_name:"$lg-warning",hex:"#ff9f0a"},{name:"Error",var_name:"$lg-error",hex:"#ff3b30"},{name:"Info",var_name:"$lg-info",hex:"#64d2ff"},{name:"Primary Light",var_name:"$lg-primary-light",hex:"#5ac8fa"},{name:"Primary Dark",var_name:"$lg-primary-dark",hex:"#0066cc"}],V=[{name:"White",var_name:"$lg-surface-white",value:"rgba(255,255,255,0.55)"},{name:"Light",var_name:"$lg-surface-light",value:"rgba(255,255,255,0.35)"},{name:"Subtle",var_name:"$lg-surface-subtle",value:"rgba(255,255,255,0.18)"},{name:"Hover",var_name:"$lg-surface-hover",value:"rgba(255,255,255,0.65)"},{name:"Active",var_name:"$lg-surface-active",value:"rgba(255,255,255,0.75)"},{name:"Dark",var_name:"$lg-surface-dark",value:"rgba(0,0,0,0.08)"}],z=[{name:"Small",var_name:"$lg-radius-sm",value:"10px"},{name:"Medium",var_name:"$lg-radius-md",value:"16px"},{name:"Large",var_name:"$lg-radius-lg",value:"22px"},{name:"XLarge",var_name:"$lg-radius-xl",value:"28px"},{name:"Pill",var_name:"$lg-radius-pill",value:"9999px"}],B=[{name:"Small",var_name:"$lg-blur-sm",value:"8px"},{name:"Medium",var_name:"$lg-blur-md",value:"16px"},{name:"Large",var_name:"$lg-blur-lg",value:"24px"},{name:"XLarge",var_name:"$lg-blur-xl",value:"40px"}],I=[{name:"Small",var_name:"$lg-shadow-sm",color:"0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)"},{name:"Medium",var_name:"$lg-shadow-md",color:"0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)"},{name:"Large",var_name:"$lg-shadow-lg",color:"0 8px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)"},{name:"XLarge",var_name:"$lg-shadow-xl",color:"0 16px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)"}],F=[{name:"Glow Primary",var_name:"$lg-glow-primary",color:"0 4px 20px rgba(41,73,100,0.35)"},{name:"Glow Accent",var_name:"$lg-glow-accent",color:"0 4px 20px rgba(81,168,177,0.30)"},{name:"Glow Success",var_name:"$lg-glow-success",color:"0 4px 20px rgba(52,199,89,0.30)"},{name:"Glow Error",var_name:"$lg-glow-error",color:"0 4px 20px rgba(255,59,48,0.30)"}],L=[{weight:300,var:"$lg-font-weight-light"},{weight:400,var:"$lg-font-weight-regular"},{weight:500,var:"$lg-font-weight-medium"},{weight:600,var:"$lg-font-weight-semibold"},{weight:700,var:"$lg-font-weight-bold"}],N=[{name:"Fast",var_name:"$lg-duration-fast",value:"150ms"},{name:"Normal",var_name:"$lg-duration-normal",value:"250ms"},{name:"Slow",var_name:"$lg-duration-slow",value:"400ms"},{name:"Slower",var_name:"$lg-duration-slower",value:"600ms"}],P=[{name:"Dropdown",var:"$lg-z-dropdown",value:100},{name:"Sticky",var:"$lg-z-sticky",value:200},{name:"Overlay",var:"$lg-z-overlay",value:300},{name:"Modal",var:"$lg-z-modal",value:400},{name:"Toast",var:"$lg-z-toast",value:500}],R=[{name:"Glass",var:"$lg-gradient-glass",value:"linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)"},{name:"Shimmer",var:"$lg-gradient-shimmer",value:"linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)"},{name:"Border",var:"$lg-gradient-border",value:"linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 100%)"}];return(J,u)=>(l(),G(E,{class:"py-8"},{default:t(()=>[e(i,{class:"mb-2"},{default:t(()=>[e(m,null,{default:t(()=>[u[0]||(u[0]=r("h2",{class:"text-h4 font-weight-bold mb-1"},"Design Tokens",-1)),u[1]||(u[1]=r("p",{class:"text-body-1 text-medium-emphasis"},[v(" Quati Styles Design System — todos os tokens disponíveis como variáveis SCSS ("),r("code",null,"$lg-*"),v(") e CSS Custom Properties ("),r("code",null,"--lg-*"),v("). ")],-1)),e(M,{class:"mt-4"})]),_:1})]),_:1}),e(d,{title:"Cores Principais",subtitle:"Paleta semântica do Vuetify + variáveis $lg-*"}),e(i,{class:"mb-10"},{default:t(()=>[(l(),s(n,null,o(T,a=>e(m,{key:a.name,cols:"6",sm:"4",md:"3",lg:"2"},{default:t(()=>[e(y,p({ref_for:!0},a),null,16)]),_:2},1024)),64))]),_:1}),e(d,{title:"Superfícies (Glass)",subtitle:"Backgrounds com transparência para efeito glassmorphism"}),e(i,{class:"mb-10"},{default:t(()=>[(l(),s(n,null,o(V,a=>e(m,{key:a.name,cols:"6",sm:"4",md:"3"},{default:t(()=>[e(k,p({ref_for:!0},a),null,16)]),_:2},1024)),64))]),_:1}),e(d,{title:"Border Radius",subtitle:"Escala de arredondamentos $lg-radius-*"}),e(i,{class:"mb-10 align-center"},{default:t(()=>[(l(),s(n,null,o(z,a=>e(m,{key:a.name,cols:"6",sm:"4",md:"2"},{default:t(()=>[e(S,p({ref_for:!0},a),null,16)]),_:2},1024)),64))]),_:1}),e(d,{title:"Blur (Backdrop Filter)",subtitle:"Intensidades de desfoque $lg-blur-*"}),e(i,{class:"mb-10"},{default:t(()=>[(l(),s(n,null,o(B,a=>e(m,{key:a.name,cols:"6",sm:"3"},{default:t(()=>[e(D,p({ref_for:!0},a),null,16)]),_:2},1024)),64))]),_:1}),e(d,{title:"Sombras",subtitle:"Escala de elevação $lg-shadow-* e glows coloridos"}),e(i,{class:"mb-10"},{default:t(()=>[(l(),s(n,null,o(I,a=>e(m,{key:a.name,cols:"12",sm:"6",md:"3"},{default:t(()=>[e(f,p({ref_for:!0},a),null,16)]),_:2},1024)),64))]),_:1}),e(i,{class:"mb-10"},{default:t(()=>[(l(),s(n,null,o(F,a=>e(m,{key:a.name,cols:"12",sm:"6",md:"3"},{default:t(()=>[e(f,p({ref_for:!0},a,{glow:!0}),null,16)]),_:2},1024)),64))]),_:1}),e(d,{title:"Tipografia",subtitle:"Família e pesos $lg-font-*"}),e(x,{rounded:"lg",class:"pa-6 mb-10",border:""},{default:t(()=>[(l(),s(n,null,o(L,a=>r("div",{key:a.weight,class:"mb-4"},[r("p",O," font-weight: "+c(a.weight)+" ("+c(a.var)+") ",1),r("p",{style:_({fontWeight:a.weight,fontSize:"1.125rem",fontFamily:X})}," O Quick brown fox — Nirmala UI / Inter / Roboto ",4)])),64))]),_:1}),e(d,{title:"Duração de Animações",subtitle:"Tokens de tempo $lg-duration-*"}),e(i,{class:"mb-10"},{default:t(()=>[(l(),s(n,null,o(N,a=>e(m,{key:a.name,cols:"6",sm:"3"},{default:t(()=>[e(C,p({ref_for:!0},a),null,16)]),_:2},1024)),64))]),_:1}),e(d,{title:"Z-Index",subtitle:"Camadas de profundidade $lg-z-*"}),e(i,{class:"mb-10"},{default:t(()=>[(l(),s(n,null,o(P,a=>e(m,{key:a.name,cols:"6",sm:"4",md:"2"},{default:t(()=>[e(x,{rounded:"md",class:"pa-4 text-center",border:""},{default:t(()=>[r("p",A,c(a.var),1),r("p",q,c(a.value),1),r("p",H,c(a.name),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),e(d,{title:"Gradientes de Vidro",subtitle:"$lg-gradient-*"}),e(i,{class:"mb-4"},{default:t(()=>[(l(),s(n,null,o(R,a=>e(m,{key:a.name,cols:"12",sm:"4"},{default:t(()=>[e(x,{rounded:"lg",class:"pa-6 text-center",style:_({background:a.value,minHeight:"100px",border:"1.5px solid rgba(255,255,255,0.3)"})},{default:t(()=>[r("p",Q,c(a.var),1),r("p",W,c(a.name),1)]),_:2},1032,["style"])]),_:2},1024)),64))]),_:1})]),_:1}))}};b.__docgenInfo={exportName:"default",displayName:"DesignTokens",description:"",tags:{},sourceFiles:["/home/runner/work/storybook-quati/storybook-quati/src/stories/overview/DesignTokens.vue"]};const oe={tags:["!dev"],title:"Overview/Design Tokens",component:b,parameters:{layout:"fullscreen"}},g={render:()=>({components:{DesignTokens:b},template:"<DesignTokens />"})};var h,$,w;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DesignTokens
    },
    template: '<DesignTokens />'
  })
}`,...(w=($=g.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const ie=["Default"];export{g as Default,ie as __namedExportsOrder,oe as default};
