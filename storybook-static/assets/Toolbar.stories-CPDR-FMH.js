import{T as W}from"./Toolbar-CbWGL_PY.js";import"./vue.esm-bundler-DSqJOKOX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./locale-BuBliKgJ.js";import"./index-BOYLXPnE.js";import"./elevation-Df6_XeYc.js";import"./location-CSRDuqq2.js";import"./VAvatar-DFlZdbAx.js";import"./loader-4FBtdHTB.js";import"./icons-Bk6vLq9M.js";import"./VProgressLinear-BIyNwrfI.js";import"./router-CXd2XRR3.js";import"./transition-BLUfLyNs.js";import"./index-BqYOu1Ej.js";import"./layout-07O_93J-.js";import"./resizeObserver-ov779OwB.js";import"./ssrBoot-MpFTZjJn.js";import"./VBtn-4dnDFtsC.js";import"./position-DQVCYz_Y.js";import"./index-BdeCh59e.js";import"./VProgressCircular-BLWui2Sh.js";import"./VSpacer-Cew6f0Tz.js";/* empty css              */import"./createSimpleFunctional-ZD8-r5no.js";const ie={title:"Componentes/Toolbar",component:W,parameters:{layout:"fullscreen"},argTypes:{pageTitle:{control:"text"},currentPath:{control:"select",options:["/","/rh","/rh/setores","/rh/estatisticas","/prescricao","/cdoc","/login","/verify-email"]},environment:{control:"text"},userLoggedIn:{control:"boolean"},activeRhTab:{control:"select",options:["servidores","setores","estatisticas"]},onBack:{action:"back"},onRhNavigate:{action:"rh-navigate"}}},e={args:{pageTitle:"Início",currentPath:"/",environment:"",userLoggedIn:!0}},r={args:{pageTitle:"Prescrição Intercorrente",currentPath:"/prescricao",environment:"",userLoggedIn:!0}},o={args:{pageTitle:"Quadro de Pessoal",currentPath:"/rh",environment:"",userLoggedIn:!0,activeRhTab:"servidores"}},t={args:{pageTitle:"Login",currentPath:"/login",environment:"",userLoggedIn:!1}},n={args:{pageTitle:"Início",currentPath:"/",environment:"DEV",userLoggedIn:!0}},a={args:{pageTitle:"Prescrição",currentPath:"/prescricao",environment:"",userLoggedIn:!1}};var s,i,c,p,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    pageTitle: 'Início',
    currentPath: '/',
    environment: '',
    userLoggedIn: true
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"Página inicial: mostra o hambúrguer",...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.description}}};var m,d,u,l,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    pageTitle: 'Prescrição Intercorrente',
    currentPath: '/prescricao',
    environment: '',
    userLoggedIn: true
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:"Sub-página genérica: exibe botão voltar",...(v=(l=r.parameters)==null?void 0:l.docs)==null?void 0:v.description}}};var h,x,P,E,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    pageTitle: 'Quadro de Pessoal',
    currentPath: '/rh',
    environment: '',
    userLoggedIn: true,
    activeRhTab: 'servidores'
  }
}`,...(P=(x=o.parameters)==null?void 0:x.docs)==null?void 0:P.source},description:{story:"Seção RH: exibe a sub-navegação com abas",...(T=(E=o.parameters)==null?void 0:E.docs)==null?void 0:T.description}}};var b,I,L,S,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    pageTitle: 'Login',
    currentPath: '/login',
    environment: '',
    userLoggedIn: false
  }
}`,...(L=(I=t.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:"Página de login: sem avatar, sem botão voltar",...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.description}}};var y,R,D,B,H;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    pageTitle: 'Início',
    currentPath: '/',
    environment: 'DEV',
    userLoggedIn: true
  }
}`,...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.source},description:{story:"Badge de ambiente visível",...(H=(B=n.parameters)==null?void 0:B.docs)==null?void 0:H.description}}};var O,_,k,Q,V;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    pageTitle: 'Prescrição',
    currentPath: '/prescricao',
    environment: '',
    userLoggedIn: false
  }
}`,...(k=(_=a.parameters)==null?void 0:_.docs)==null?void 0:k.source},description:{story:"Usuário não logado fora do login",...(V=(Q=a.parameters)==null?void 0:Q.docs)==null?void 0:V.description}}};const ce=["Home","SubPage","RhSection","LoginPage","WithEnvironmentBadge","LoggedOut"];export{e as Home,a as LoggedOut,t as LoginPage,o as RhSection,r as SubPage,n as WithEnvironmentBadge,ce as __namedExportsOrder,ie as default};
