import{F as z,G as t,H as s,z as e,I as r,J as v,K as l,N as o,O as n,E as p,M as u,P as h}from"./vue.esm-bundler-DSqJOKOX.js";import{V as M}from"./VContainer-CiWSNlM7.js";import{V as i,a as m}from"./VRow-ZRgM8ms3.js";import{V as O}from"./VDivider-B3sT7V5r.js";import{V as x}from"./VSheet-CZCrruca.js";/* empty css              */import"./locale-BuBliKgJ.js";import"./display-CEU3lcyN.js";import"./location-CSRDuqq2.js";import"./elevation-Df6_XeYc.js";import"./position-DQVCYz_Y.js";const A={class:"text-caption text-medium-emphasis mb-1"},q={class:"text-caption text-medium-emphasis"},H={class:"text-h5 font-weight-bold"},U={class:"text-caption"},W={class:"text-caption font-weight-medium"},X={class:"text-caption text-medium-emphasis"},J='"Nirmala UI", "Inter", "Roboto", sans-serif',$={__name:"DesignTokens",setup(K){const d={props:["title","subtitle"],template:`
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
        :style="{ background: hex, height: '64px', borderRadius: '12px' }"
        class="mb-2 elevation-1"
      />
      <p class="text-caption font-weight-medium">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
      <p class="text-caption text-medium-emphasis">{{ hex }}</p>
    </div>
  `},k={props:["name","var_name","value"],template:`
    <div class="mb-2">
      <div
        :style="{ background: value, height: '56px', borderRadius: '12px', border: '1.5px solid rgba(255,255,255,0.4)' }"
        class="mb-2"
        style="backdrop-filter: blur(8px);"
      />
      <p class="text-caption font-weight-medium">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
      <p class="text-caption text-medium-emphasis" style="word-break: break-all;">{{ value }}</p>
    </div>
  `},S={props:["name","var_name","value"],template:`
    <div class="text-center mb-4">
      <div
        :style="{ borderRadius: value, border: '2px solid #294964', width: '100%', height: '56px' }"
        class="mb-2"
      />
      <p class="text-caption font-weight-medium">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
      <p class="text-caption text-medium-emphasis">{{ value }}</p>
    </div>
  `},C={props:["name","var_name","value"],template:`
    <div class="mb-4">
      <div
        style="position:relative; height: 64px; border-radius:12px; overflow:hidden; border: 1.5px solid rgba(41,73,100,0.3);"
      >
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,#294964 0%,#f58634 100%);opacity:0.4;" />
        <div
          :style="{ backdropFilter: 'blur('+value+')', position:'absolute', inset:0, background:'rgba(255,255,255,0.25)' }"
        />
        <p class="text-caption font-weight-bold" style="position:relative;padding:8px;color:#294964;">blur({{ value }})</p>
      </div>
      <p class="text-caption font-weight-medium mt-2">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
    </div>
  `},b={props:["name","var_name","color","glow"],template:`
    <div class="mb-4">
      <div
        :style="{
          boxShadow: color,
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
  `},V={props:["name","var_name","value"],emits:[],setup(E){const{ref:c}=window.Vue||{};return{}},template:`
    <div class="text-center mb-4">
      <v-sheet rounded="lg" class="pa-4" border>
        <p class="text-h5 font-weight-bold">{{ value }}</p>
        <p class="text-caption font-weight-medium">{{ name }}</p>
        <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
      </v-sheet>
    </div>
  `},D=[{name:"Primary",var_name:"$lg-primary",hex:"#294964"},{name:"Primary Light",var_name:"$lg-primary-light",hex:"#5ac8fa"},{name:"Primary Dark",var_name:"$lg-primary-dark",hex:"#0066cc"},{name:"Secondary",var_name:"$lg-secondary",hex:"#f58634"},{name:"Accent",var_name:"$lg-accent",hex:"#51a8b1"},{name:"Success",var_name:"$lg-success",hex:"#34c759"},{name:"Warning",var_name:"$lg-warning",hex:"#ff9f0a"},{name:"Error",var_name:"$lg-error",hex:"#ff3b30"},{name:"Info",var_name:"$lg-info",hex:"#64d2ff"}],P=[{name:"White",var_name:"$lg-surface-white",value:"rgba(255,255,255,0.55)"},{name:"Light",var_name:"$lg-surface-light",value:"rgba(255,255,255,0.35)"},{name:"Subtle",var_name:"$lg-surface-subtle",value:"rgba(255,255,255,0.18)"},{name:"Hover",var_name:"$lg-surface-hover",value:"rgba(255,255,255,0.65)"},{name:"Active",var_name:"$lg-surface-active",value:"rgba(255,255,255,0.75)"},{name:"Dark",var_name:"$lg-surface-dark",value:"rgba(0,0,0,0.08)"}],T=[{name:"Small",var_name:"$lg-radius-sm",value:"10px"},{name:"Medium",var_name:"$lg-radius-md",value:"16px"},{name:"Large",var_name:"$lg-radius-lg",value:"22px"},{name:"XLarge",var_name:"$lg-radius-xl",value:"28px"},{name:"Pill",var_name:"$lg-radius-pill",value:"9999px"}],B=[{name:"Small",var_name:"$lg-blur-sm",value:"8px"},{name:"Medium",var_name:"$lg-blur-md",value:"16px"},{name:"Large",var_name:"$lg-blur-lg",value:"24px"},{name:"XLarge",var_name:"$lg-blur-xl",value:"40px"}],G=[{name:"Small",var_name:"$lg-shadow-sm",color:"0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)"},{name:"Medium",var_name:"$lg-shadow-md",color:"0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)"},{name:"Large",var_name:"$lg-shadow-lg",color:"0 8px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)"},{name:"XLarge",var_name:"$lg-shadow-xl",color:"0 16px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)"}],I=[{name:"Glow Primary",var_name:"$lg-glow-primary",color:"0 4px 20px rgba(41,73,100,0.35)"},{name:"Glow Accent",var_name:"$lg-glow-accent",color:"0 4px 20px rgba(81,168,177,0.30)"},{name:"Glow Success",var_name:"$lg-glow-success",color:"0 4px 20px rgba(52,199,89,0.30)"},{name:"Glow Error",var_name:"$lg-glow-error",color:"0 4px 20px rgba(255,59,48,0.30)"}],L=[{weight:300,var:"$lg-font-weight-light"},{weight:400,var:"$lg-font-weight-regular"},{weight:500,var:"$lg-font-weight-medium"},{weight:600,var:"$lg-font-weight-semibold"},{weight:700,var:"$lg-font-weight-bold"}],F=[{name:"Fast",var_name:"$lg-duration-fast",value:"150ms"},{name:"Normal",var_name:"$lg-duration-normal",value:"250ms"},{name:"Slow",var_name:"$lg-duration-slow",value:"400ms"},{name:"Slower",var_name:"$lg-duration-slower",value:"600ms"}],N=[{name:"Dropdown",var:"$lg-z-dropdown",value:100},{name:"Sticky",var:"$lg-z-sticky",value:200},{name:"Overlay",var:"$lg-z-overlay",value:300},{name:"Modal",var:"$lg-z-modal",value:400},{name:"Toast",var:"$lg-z-toast",value:500}],R=[{name:"Glass",var:"$lg-gradient-glass",value:"linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)"},{name:"Shimmer",var:"$lg-gradient-shimmer",value:"linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)"},{name:"Border",var:"$lg-gradient-border",value:"linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 100%)"}];return(E,c)=>(s(),z(M,{class:"py-8"},{default:t(()=>[e(i,{class:"mb-2"},{default:t(()=>[e(m,null,{default:t(()=>[c[0]||(c[0]=r("h2",{class:"text-h4 font-weight-bold mb-1"},"Design Tokens",-1)),c[1]||(c[1]=r("p",{class:"text-body-1 text-medium-emphasis"},[v(" Liquid Glass Design System — todos os tokens disponíveis como variáveis SCSS ("),r("code",null,"$lg-*"),v(") e CSS Custom Properties ("),r("code",null,"--lg-*"),v("). ")],-1)),e(O,{class:"mt-4"})]),_:1})]),_:1}),e(d,{title:"Cores Principais",subtitle:"Paleta semântica do Vuetify + variáveis $lg-*"}),e(i,{class:"mb-10"},{default:t(()=>[(s(),l(o,null,n(D,a=>e(m,{key:a.name,cols:"6",sm:"4",md:"3",lg:"2"},{default:t(()=>[e(y,p({ref_for:!0},a),null,16)]),_:2},1024)),64))]),_:1}),e(d,{title:"Superfícies (Glass)",subtitle:"Backgrounds com transparência para efeito glassmorphism"}),e(i,{class:"mb-10"},{default:t(()=>[(s(),l(o,null,n(P,a=>e(m,{key:a.name,cols:"6",sm:"4",md:"3"},{default:t(()=>[e(k,p({ref_for:!0},a),null,16)]),_:2},1024)),64))]),_:1}),e(d,{title:"Border Radius",subtitle:"Escala de arredondamentos $lg-radius-*"}),e(i,{class:"mb-10 align-center"},{default:t(()=>[(s(),l(o,null,n(T,a=>e(m,{key:a.name,cols:"6",sm:"4",md:"2"},{default:t(()=>[e(S,p({ref_for:!0},a),null,16)]),_:2},1024)),64))]),_:1}),e(d,{title:"Blur (Backdrop Filter)",subtitle:"Intensidades de desfoque $lg-blur-*"}),e(i,{class:"mb-10"},{default:t(()=>[(s(),l(o,null,n(B,a=>e(m,{key:a.name,cols:"6",sm:"3"},{default:t(()=>[e(C,p({ref_for:!0},a),null,16)]),_:2},1024)),64))]),_:1}),e(d,{title:"Sombras",subtitle:"Escala de elevação $lg-shadow-* e glows coloridos"}),e(i,{class:"mb-10"},{default:t(()=>[(s(),l(o,null,n(G,a=>e(m,{key:a.name,cols:"12",sm:"6",md:"3"},{default:t(()=>[e(b,p({ref_for:!0},a),null,16)]),_:2},1024)),64))]),_:1}),e(i,{class:"mb-10"},{default:t(()=>[(s(),l(o,null,n(I,a=>e(m,{key:a.name,cols:"12",sm:"6",md:"3"},{default:t(()=>[e(b,p({ref_for:!0},a,{glow:!0}),null,16)]),_:2},1024)),64))]),_:1}),e(d,{title:"Tipografia",subtitle:"Família e pesos $lg-font-*"}),e(x,{rounded:"lg",class:"pa-6 mb-10",border:""},{default:t(()=>[(s(),l(o,null,n(L,a=>r("div",{key:a.weight,class:"mb-4"},[r("p",A," font-weight: "+u(a.weight)+" ("+u(a.var)+") ",1),r("p",{style:h({fontWeight:a.weight,fontSize:"1.125rem",fontFamily:J})}," O Quick brown fox — Nirmala UI / Inter / Roboto ",4)])),64))]),_:1}),e(d,{title:"Duração de Animações",subtitle:"Tokens de tempo $lg-duration-*"}),e(i,{class:"mb-10"},{default:t(()=>[(s(),l(o,null,n(F,a=>e(m,{key:a.name,cols:"6",sm:"3"},{default:t(()=>[e(V,p({ref_for:!0},a),null,16)]),_:2},1024)),64))]),_:1}),e(d,{title:"Z-Index",subtitle:"Camadas de profundidade $lg-z-*"}),e(i,{class:"mb-10"},{default:t(()=>[(s(),l(o,null,n(N,a=>e(m,{key:a.name,cols:"6",sm:"4",md:"2"},{default:t(()=>[e(x,{rounded:"md",class:"pa-4 text-center",border:""},{default:t(()=>[r("p",q,u(a.var),1),r("p",H,u(a.value),1),r("p",U,u(a.name),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),e(d,{title:"Gradientes de Vidro",subtitle:"$lg-gradient-*"}),e(i,{class:"mb-4"},{default:t(()=>[(s(),l(o,null,n(R,a=>e(m,{key:a.name,cols:"12",sm:"4"},{default:t(()=>[e(x,{rounded:"lg",class:"pa-6 text-center",style:h({background:a.value,minHeight:"100px",border:"1.5px solid rgba(255,255,255,0.3)"})},{default:t(()=>[r("p",W,u(a.var),1),r("p",X,u(a.name),1)]),_:2},1032,["style"])]),_:2},1024)),64))]),_:1})]),_:1}))}};$.__docgenInfo={exportName:"default",displayName:"DesignTokens",description:"",tags:{},sourceFiles:["/Users/leonardo/PGE/docker_prod/compose_quati/storybook-tmp/src/stories/overview/DesignTokens.vue"]};const ne={title:"Overview/Design Tokens",component:$,parameters:{layout:"fullscreen"}},g={};var f,_,w;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(w=(_=g.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const ie=["Showcase"];export{g as Showcase,ie as __namedExportsOrder,ne as default};
