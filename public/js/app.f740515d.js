(function(e){function t(t){for(var o,n,s=t[0],c=t[1],l=t[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,n=1;n<a.length;n++){var s=a[n];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var o={},n={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({authenticator:"authenticator",themes:"themes","code-block":"code-block","code-view":"code-view",home:"home",i18n:"i18n",login:"login",navbar:"navbar",roadmap:"roadmap","sample-home":"sample-home","sample-login":"sample-login","source-code":"source-code",structure:"structure","tree-menu":"tree-menu",utilities:"utilities"}[e]||e)+"."+{authenticator:"502ac3c2","chunk-01aa2415":"b338b40a","chunk-2524fdc4":"321b6906","chunk-784d584f":"14008afe","chunk-bb8379ec":"e6835691","chunk-7e114d6e":"818af683",themes:"05ae5f9b","code-block":"c026f582","code-view":"5f9e296d",home:"a35f9488",i18n:"e947354b",login:"dfc0e4e7",navbar:"e1b36c5c",roadmap:"dbfcead3","sample-home":"fc986efa","sample-login":"813ab169","source-code":"63941c4b",structure:"7c39e7c5","tree-menu":"4a05f917",utilities:"a02b4c69"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={authenticator:1,"chunk-01aa2415":1,"chunk-2524fdc4":1,"chunk-784d584f":1,"chunk-bb8379ec":1,"chunk-7e114d6e":1,themes:1,"code-block":1,"code-view":1,i18n:1,roadmap:1,structure:1,"tree-menu":1,utilities:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var o="css/"+({authenticator:"authenticator",themes:"themes","code-block":"code-block","code-view":"code-view",home:"home",i18n:"i18n",login:"login",navbar:"navbar",roadmap:"roadmap","sample-home":"sample-home","sample-login":"sample-login","source-code":"source-code",structure:"structure","tree-menu":"tree-menu",utilities:"utilities"}[e]||e)+"."+{authenticator:"d198159d","chunk-01aa2415":"1631fbf2","chunk-2524fdc4":"94b8b235","chunk-784d584f":"9feb2659","chunk-bb8379ec":"a95b8c70","chunk-7e114d6e":"be1a12b1",themes:"cc841197","code-block":"d198159d","code-view":"d198159d",home:"31d6cfe0",i18n:"07e37b7c",login:"31d6cfe0",navbar:"31d6cfe0",roadmap:"d198159d","sample-home":"31d6cfe0","sample-login":"31d6cfe0","source-code":"31d6cfe0",structure:"d198159d","tree-menu":"d198159d",utilities:"d198159d"}[e]+".css",r=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===r))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===o||d===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete n[e],p.parentNode.removeChild(p),a(i)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,a){o=r[e]=[t,a]}));t.push(o[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(p);var a=r[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",u.name="ChunkLoadError",u.type=o,u.request=n,a[1](u)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(a,o,function(t){return e[t]}.bind(null,o));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2157:function(e,t,a){"use strict";a("a432")},"2eae":function(e,t,a){"use strict";a("99d6")},3991:function(e,t,a){"use strict";function o(e,t){for(const[a,n]of Object.entries(t))"object"===typeof n&&null!==n?(e[a]=e[a]?{...e[a]}:{},o(e[a],n)):e[a]=n;return e}a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return u}));var n=a("bc3a"),r=a.n(n);let i,s;function c(e){switch(l(e),e){case"docs":return s;case"api":return i;case"axios":return r.a;default:return i}}function l(e){s||"docs"!==e||(s=r.a.create({baseURL:"https://xtpg-api.herokuapp.com",validateStatus:!1})),i||e&&"api"!==e||(i=r.a.create({baseURL:d()+"/api",validateStatus:!1}))}function d(){try{let e=document.querySelector('meta[name="api"]').content;return"__API__"!==e?e:"http://127.0.0.1:3000"}catch(e){return"http://127.0.0.1:3000"}}const u={required:e=>!!e||"required.field",email:e=>{const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"invalid.email"}}},"4ddc":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("2b0e"),n=a("f096"),r=a("8c4f"),i=a("2f62"),s={namespaced:!0,state:{user:{}},mutations:{},actions:{}},c={auth:s};o["a"].use(i["a"]);var l=new i["a"].Store({modules:{ui:n["d"],...c}}),d=a("7496"),u=a("62ad"),p=a("a523"),m=a("f6c4"),f=a("0fd9"),h=function(){var e=this,t=e._self._c;return t(d["a"],{staticClass:"x-layout-auth"},[t(m["a"],[t(p["a"],{staticClass:"align-stretch pa-0",attrs:{fluid:"","fill-height":""}},[t(f["a"],{staticClass:"fill-height",attrs:{"no-gutters":""}},[t(u["a"],{attrs:{lg:"12"}},[t("router-view")],1)],1)],1)],1)],1)},b=[],g={name:"LayoutAuth",components:{},async mounted(){}},v=g,y=(a("2eae"),a("2877")),w=Object(y["a"])(v,h,b,!1,null,"4febf5a5",null),C=w.exports,x=[{path:"/",component:C,children:[{path:"",name:"login",component:()=>a.e("login").then(a.bind(null,"b9b2")),meta:{middleware:[]}}]}],k=[...x];o["a"].use(r["a"]);const F=new r["a"]({mode:"history",base:"/",routes:[...n["c"],...k]});function P(e,t,a){const o=t[a];return o?(...n)=>{e.next(...n);const r=P(e,t,a+1);o({...e,next:r})}:e.next}F.beforeEach(async(e,t,a)=>{if(!e.meta.middleware||e.meta.middleware&&!e.meta.middleware.length)return a();const o=Array.isArray(e.meta.middleware)?e.meta.middleware:[e.meta.middleware],n={from:t,to:e,next:a,router:F,store:l},r=P(n,o,1);return o[0]({...n,next:r})});var _=F,B=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[t("router-view")],1)},j=[],A={name:"App",data(){return{app:{}}},methods:{async getVersion(){const e=await Object(n["a"])().get("/version");this.app=e.data,console.log(">>>",this.app["version"])}},mounted(){}},S=A,E=Object(y["a"])(S,B,j,!1,null,null,null),L=E.exports;a("bf3b");o["a"].config.productionTip=!1,new o["a"]({vuetify:n["e"],router:_,store:l,i18n:n["b"],render:e=>e(L)}).$mount("#app")},5823:function(e,t,a){"use strict";a("4ddc")},6892:function(e,t,a){},"8c30":function(e,t,a){},"99d6":function(e,t,a){},a432:function(e,t,a){},aab2:function(e,t,a){e.exports=a.p+"img/4.e143f3c7.png"},bf3b:function(e,t,a){},c74f:function(e,t,a){"use strict";a("8c30")},f096:function(e,t,a){"use strict";a.d(t,"e",(function(){return j})),a.d(t,"b",(function(){return w})),a.d(t,"c",(function(){return Ae})),a.d(t,"d",(function(){return Le})),a.d(t,"a",(function(){return i["a"]}));var o=a("2b0e"),n=a("f309"),r=a("a925"),i=a("3991"),s=a("1072"),c={hello:"Hello World!",$vuetify:{}};let l={$vuetify:{...s["a"]},hello:"Hello World 111!",version:"Version","login.title":"Welcome!","login.subtitle":"Please enter your credential.","login.recovery.btn":"Forgot your password?","login.recovery.email":"For security, we will send you an email so you can reset your password.","login.recovery.code":"Ready! We just sent you an email with your verification code, just enter it below to reset your password.","login.recovery.change":"Shall we change your password now?","login.recovery.completed.title":"Your password has been successfully reset!","login.recovery.completed.subtitle":"Now you can go back and enter your new password.","login.username.label":"Login or E-mail","login.username.placeholder":"Enter your login or email.","login.pwd.label":"Password","login.databases.label":"Database","login.enter.btn":"Log in"};l=Object(i["b"])(l,c);var d=l,u=a("cb06"),p={hello:"Olá Mundo!",$vuetify:{}};let m={$vuetify:{...u["a"]},hello:"Olá Mundo!",version:"Versão","login.title":"Seja Bem-Vindo!","login.subtitle":"Por favor, informe sua credencial.","login.recovery.btn":"Esqueceu sua senha?","login.recovery.email":"Por segurança, vamos lhe enviar um e-mail para que você possa redefinir sua senha.","login.recovery.code":"Pronto! Acabamos de enviar um e-mail com o seu código de verificação, basta informá-lo abaixo para redefinir sua senha.","login.recovery.change":"Vamos trocar sua senha agora?","login.recovery.completed.title":"Sua senha foi redefinida com sucesso!","login.recovery.completed.subtitle":"Agora você já pode retornar para entrar com sua nova senha.","login.username.label":"Login ou E-mail","login.username.placeholder":"Informe seu login ou e-mail.","login.pwd.label":"Senha","login.env.label":"Ambiente","login.enter.btn":"Entrar","required.field":"Campo Obrigatório","invalid.email":"E-mail inválido"};m=Object(i["b"])(m,p);var f=m,h=a("5e4e"),b={hello:"Hola Mundo 222!",$vuetify:{}};let g={$vuetify:{...h["a"]},hello:"Hola Mundo 111!",version:"Versión","login.title":"¡Sea bienvenido!","login.subtitle":"Por favor ingrese su credencial.","login.recovery.btn":"Olvidaste tu contraseña?","login.recovery.email":"Por seguridad, le enviaremos un correo electrónico para que pueda restablecer su contraseña.","login.recovery.code":"¡Listo! Acabamos de enviarle un correo electrónico con su código de verificación, solo ingréselo a continuación para restablecer su contraseña.","login.recovery.change":"¿Le cambiamos la contraseña ahora?","login.recovery.completed.title":"¡Tu contraseña ha sido restablecida con éxito!","login.recovery.completed.subtitle":"Ahora puede regresar e ingresar su nueva contraseña.","login.username.label":"Usuario o correo electrónico","login.username.placeholder":"Ingrese su nombre de usuario o correo electrónico.","login.pwd.label":"Contraseña","login.databases.label":"Banco de Datos","login.enter.btn":"Iniciar sesión"};g=Object(i["b"])(g,b);var v=g;o["a"].use(r["a"]);const y=new r["a"]({locale:"pt-BR",silentFallbackWarn:!0,silentTranslationWarn:!0,messages:{"pt-BR":f,"en-US":d,"es-ES":v}});y.setLocale=e=>{y.locale=e,j.framework.lang.current=e};var w=y,C={name:"Terra",light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",one:"#1976D2",two:"#8cc63f",tree:"#eeeeee",four:"#e2e2e2",five:"#fafafa"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",one:"#2196F3",two:"#8cc63f",tree:"#eeeeee",four:"#e2e2e2",five:"#fafafa"}};let x={name:"Terra",light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",one:"#1976D2",two:"#8cc63f",tree:"#eeeeee",four:"#e2e2e2",five:"#fafafa"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",one:"#122034",two:"#8cc63f",tree:"#eeeeee",four:"#e2e2e2",five:"#fafafa"}};x=Object(i["b"])(x,C);var k=x,F={name:"Lua",light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",one:"#122034",two:"#8cc63f",tree:"#eeeeee",four:"#e2e2e2",five:"#fafafa"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",one:"#063970",two:"#8cc63f",tree:"#eeeeee",four:"#e2e2e2",five:"#fafafa"}};let P={name:"Lua",light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",one:"#122034",two:"#8cc63f",tree:"#eeeeee",four:"#e2e2e2",five:"#fafafa"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",one:"#063970",two:"#8cc63f",tree:"#eeeeee",four:"#e2e2e2",five:"#fafafa"}};P=Object(i["b"])(P,F);var _=P,B=[_,k];a("d4b8"),a("41e6");o["a"].use(n["a"]);var j=new n["a"]({theme:{dark:!1,themes:_},lang:{current:w.locale,t:(e,...t)=>w.t(e,t)}}),A=a("7496"),S=a("40dc"),E=a("8336"),L=a("a523"),O=a("132d"),T=a("adda"),I=a("f6c4"),M=a("f774"),U=a("2fa4"),D=a("2a7f"),N=function(){var e=this,t=e._self._c;return t(A["a"],{staticClass:"x-layout-docs"},[t(S["a"],{staticClass:"x-toolbar",attrs:{app:"",fixed:"",dense:"",flat:"",dark:"","clipped-left":e.$vuetify.breakpoint.lgAndUp,color:"one"}},[t(D["b"],{staticClass:"w-toolbar-title font-weight-light d-flex"},[t(T["a"],{attrs:{src:a("aab2"),"max-width":"30"}})],1),t(D["b"],{staticClass:"font-weight-light pl-3"},[e._v(" XTPG - UI ")]),t(U["a"]),t(D["a"],{staticClass:"d-lg-none ml-1"},[t(E["a"],{staticClass:"px-1",attrs:{text:"","min-width":"48"},on:{click:function(t){t.stopPropagation(),e.sidebar=!e.sidebar}}},[t(O["a"],[e._v("mdi-menu")])],1)],1)],1),t(M["a"],{attrs:{app:"",fixed:"",clipped:e.$vuetify.breakpoint.lgAndUp,color:e.$vuetify.theme.isDark?"":"grey lighten-3",width:"250"},model:{value:e.sidebar,callback:function(t){e.sidebar=t},expression:"sidebar"}},[t("TreeMenu",{attrs:{items:e.menu.items}})],1),t(I["a"],[t(L["a"],{attrs:{fluid:""}},[t("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[t("router-view")],1)],1)],1)],1)},q=[],z=a("8860"),$=a("1baa"),R=function(){var e=this,t=e._self._c;return t(z["a"],{attrs:{nav:"",dense:""}},[t($["a"],{attrs:{color:"primary"}},[e._l(e.items,(function(e,a){return[t("MenuItem",{key:a,attrs:{item:e}})]}))],2)],1)},V=[],H=a("ce7e"),W=a("56b0"),X=a("da13"),K=a("1800"),G=a("5d23"),J=a("34c3"),Z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"x-tree-menu-item"},[e.item.items.length?e._e():t(X["a"],{staticClass:"mb-1",attrs:{to:e.item.path,target:e.item.target?e.item.target:"_self","exact-path":""}},[t(J["a"],[t(O["a"],{domProps:{textContent:e._s(e.item.icon)}})],1),t(G["a"],[t(G["b"],{domProps:{textContent:e._s(e.item.title)}})],1)],1),"menu"===e.item.type?t(W["a"],{attrs:{"prepend-icon":e.item.icon},scopedSlots:e._u([{key:"activator",fn:function(){return[t(G["b"],{domProps:{textContent:e._s(e.item.title)}})]},proxy:!0},{key:"appendIcon",fn:function(){return[t(K["a"],{staticClass:"mr-0"},[t(O["a"],[e._v("mdi-menu-down")])],1)]},proxy:!0}],null,!1,2620662024)},e._l(e.item.items,(function(a,o){return t("MenuItem",{key:o,attrs:{item:a,itemType:e.item.type}})})),1):e._e(),"submenu"===e.item.type?t(W["a"],{attrs:{"no-action":"","sub-group":""},scopedSlots:e._u([{key:"activator",fn:function(){return[t(G["a"],[t(G["b"],{domProps:{textContent:e._s(e.item.title)}})],1)]},proxy:!0}],null,!1,533665612)},e._l(e.item.items,(function(a,o){return t("MenuItem",{key:o,attrs:{item:a,itemType:e.item.type}})})),1):e._e(),e.item.separator?t(H["a"],{staticClass:"my-1"}):e._e()],1)},Q=[],Y={name:"MenuItem",components:{MenuItem:oe},props:{item:{type:Object,default:{}},itemType:{type:String,default:"item"}}},ee=Y,te=a("2877"),ae=Object(te["a"])(ee,Z,Q,!1,null,null,null),oe=ae.exports,ne={name:"TreeMenu",components:{MenuItem:oe},props:{items:{type:Array,default:[]}},data(){return{}}},re=ne,ie=Object(te["a"])(re,R,V,!1,null,null,null),se=ie.exports,ce=se,le={items:[{title:"Home",icon:"mdi-home",path:"/docs",items:[]},{title:"Roadmap",icon:"mdi-road-variant",path:"/docs/roadmap",items:[]},{title:"Demonstração",icon:"mdi-card-bulleted-settings-outline",path:"/sample",target:"_blank",separator:!0,items:[]},{title:"Código Fonte",icon:"mdi-source-branch",path:"/docs/source-code",separator:!0,items:[]},{title:"Introdução",icon:"mdi-clipboard-text-outline",type:"menu",path:null,items:[{title:"Estrutura de Pastas",icon:null,path:"/docs/structure",items:[]},{title:"Paleta de Cores",icon:null,path:"/docs/themes",items:[]},{title:"Internacionalização",icon:null,path:"/docs/i18n",items:[]},{title:"Utilitários",icon:null,path:"/docs/utilities",items:[]},{title:"Componentes",icon:null,type:"submenu",path:null,items:[{title:"TreeMenu",icon:null,path:"/docs/components/tree-menu",items:[]},{title:"CodeView",icon:null,path:"/docs/components/code-block/code-view",items:[]},{title:"CodeBlock",icon:null,path:"/docs/components/code-block/code-block",items:[]}]}]}]},de={name:"LayoutDocs",components:{TreeMenu:ce},data(){return{sidebar:!0,menu:le}},methods:{openExternalPath(e){const t=this.$router.resolve({path:e.path});window.open(t.href,"_blank")}}},ue=de,pe=(a("c74f"),Object(te["a"])(ue,N,q,!1,null,"e03de28c",null)),me=pe.exports,fe=function(){var e=this,t=e._self._c;return t(A["a"],{staticClass:"layout-auth-sample"},[t(I["a"],[t(L["a"],{staticClass:"fill-height pa-0",attrs:{fluid:""}},[t("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[t("router-view")],1)],1)],1)],1)},he=[],be={name:"LayoutAuthSample",components:{},data(){return{}},methods:{openExternalPath(e){const t=this.$router.resolve({path:e.path});window.open(t.href,"_blank")}}},ge=be,ve=(a("2157"),Object(te["a"])(ge,fe,he,!1,null,"d0bbf808",null)),ye=ve.exports,we=function(){var e=this,t=e._self._c;return t(A["a"],{staticClass:"x-layout-home-sample"},[t(I["a"],[t(L["a"],{staticClass:"fill-height pa-0",attrs:{fluid:""}},[t("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[t("router-view")],1)],1)],1)],1)},Ce=[],xe={name:"LayoutHomeSample",components:{},data(){return{}},methods:{openExternalPath(e){const t=this.$router.resolve({path:e.path});window.open(t.href,"_blank")}}},ke=xe,Fe=(a("5823"),Object(te["a"])(ke,we,Ce,!1,null,"4b6035be",null)),Pe=Fe.exports,_e=(a("d9e2"),async({from:e,to:t,next:a,router:o,store:n})=>{try{throw console.log(">>>>>>>>>>> Authenticated!"),new Error("Desculpe! Sua credencial não foi autorizada!")}catch(r){a({name:"sample_login"})}});let Be=[{path:"/docs",component:me,children:[{path:"",name:"home",component:()=>a.e("home").then(a.bind(null,"4ae2")),meta:{middleware:[]}},{path:"roadmap",name:"roadmap",component:()=>a.e("roadmap").then(a.bind(null,"fde1")),meta:{middleware:[]}},{path:"source-code",name:"source-code",component:()=>a.e("source-code").then(a.bind(null,"116b")),meta:{middleware:[]}},{path:"structure",name:"structure",component:()=>a.e("structure").then(a.bind(null,"ee64")),meta:{middleware:[]}},{path:"themes",name:"themes",component:()=>Promise.all([a.e("chunk-bb8379ec"),a.e("themes")]).then(a.bind(null,"64bf")),meta:{middleware:[]}},{path:"i18n",name:"i18n",component:()=>a.e("i18n").then(a.bind(null,"b195")),meta:{middleware:[]}},{path:"utilities",name:"utilities",component:()=>a.e("utilities").then(a.bind(null,"d708")),meta:{middleware:[]}},{path:"components/authenticator",name:"authenticator",component:()=>a.e("authenticator").then(a.bind(null,"1b17")),meta:{middleware:[]}},{path:"components/navbar",name:"navbar",component:()=>a.e("navbar").then(a.bind(null,"0ef6")),meta:{middleware:[]}},{path:"components/tree-menu",name:"tree-menu",component:()=>a.e("tree-menu").then(a.bind(null,"30f1")),meta:{middleware:[]}},{path:"components/code-block/code-view",name:"code-view",component:()=>a.e("code-view").then(a.bind(null,"b2a8")),meta:{middleware:[]}},{path:"components/code-block/code-block",name:"code-block",component:()=>a.e("code-block").then(a.bind(null,"22e7")),meta:{middleware:[]}}]},{path:"/sample",component:Pe,children:[{path:"",name:"sample_home",component:()=>a.e("sample-home").then(a.bind(null,"32b6")),meta:{middleware:[_e]}}]},{path:"/sample",component:ye,children:[{path:"login",name:"sample_login",component:()=>a.e("sample-login").then(a.bind(null,"3e8e")),meta:{middleware:[]}}]}];const je=["localhost","127.0.0.1","xtpg-api.herokuapp.com"];je.filter(e=>e===window.location.hostname).length||(Be=[{path:"/docs",redirect:"/"}]);var Ae=Be,Se=[{name:"Authentication",type:"Layout",description:"Página de autenticação e recuperação de senha.",icon:"mdi-shield-key",path:"",status:100},{name:"Dashboard",type:"Layout",description:"Página principal (restrita) do sistema.",icon:"mdi-monitor-dashboard",path:"",status:0},{name:"NavBar",type:"Layout",description:"Barra de navegação (header) do sistema.",icon:"mdi-page-layout-header",path:"/docs/components/navbar",status:0},{name:"FooterBar",type:"Layout",description:"Barra de informações gerais (footer) do sistema.",icon:"mdi-page-layout-footer",path:"",status:0},{name:"ModulesPanel",type:"Layout",description:"Lista os modulos principais do sistema.",icon:"mdi-apps",path:"",status:0},{name:"QuickBar",type:"Layout",description:"Barra de navegação entre as páginas principais do sistema.",icon:"mdi-page-layout-sidebar-right",path:"",status:0},{name:"PageView",type:"Layout",description:"Área de visualização das páginas do sistema.",icon:"mdi-page-layout-body",path:"",status:0},{name:"Authenticator",type:"Componente",description:"Formulário de login e/ou recuperação de senha.",icon:"mdi-key-variant",path:"/docs/components/authenticator",status:75,current:!0},{name:"TreeMenu",type:"Componente",description:"Árvore de menu com até 3 níveis de profundidade.",icon:"mdi-file-tree",path:"/docs/components/tree-menu",status:100},{name:"NavBtn",type:"Componente",description:"Botão utilizado na NavBar com diferentes comportamentos.",icon:"mdi-button-pointer",path:"",status:0},{name:"NavAlert",type:"Componente",description:"Botão utilizado na NavBar para exibir alertas do sistema.",icon:"mdi-tooltip-account",path:"",status:0},{name:"NavCalendar",type:"Componente",description:"Botão utilizado na NavBar para exibir calendário do usuário.",icon:"mdi-calendar-month",path:"",status:0},{name:"NavProfile",type:"Componente",description:"Botão utilizado na NavBar para exibir menu (perfil) do usuário.",icon:"mdi-tooltip-account",path:"",status:0},{name:"FooterBtn",type:"Componente",description:"Botão utilizado na FooterBar para exibir informações gerais.",icon:"mdi-gesture-tap-button",path:"",status:0},{name:"FooterChatBtn",type:"Componente",description:"Botão para exibir popup do chat do usuário.",icon:"mdi-gesture-tap-button",path:"",status:0},{name:"ChatPopup",type:"Componente",description:"Popup flutuante do chat do usuário.",icon:"mdi-chat-processing",path:"",status:0},{name:"ShortBtn",type:"Componente",description:"Botão de atalho (vertical) útil para diversas partes do sistema.",icon:"mdi-card",path:"",status:0},{name:"Card",type:"Componente",description:"Painel específico (widget) para exibir informações do sistema.",icon:"mdi-card-account-details",path:"",status:0},{name:"ChartCard",type:"Componente",description:"Painel específico (widget) para exibir gráficos do sistema.",icon:"mdi-finance",path:"",status:0},{name:"PageSideBar",type:"Componente",description:"Painel fixado a esquerda (suspenso) do sistema.",icon:"mdi-page-layout-sidebar-left",path:"",status:0},{name:"PageTabs",type:"Componente",description:"Tabs para exibição das telas do sistema.",icon:"mdi-folder-table",path:"",status:0},{name:"TabBtn",type:"Componente",description:"Tab (botão) para alternar entre telas abertas do sistema.",icon:"mdi-folder-text",path:"",status:0},{name:"PageToolbar",type:"Componente",description:"Barra de ferramentas da tela aberta.",icon:"mdi-page-layout-header",path:"",status:0},{name:"ToolbarBtn",type:"Componente",description:"Botão para barra de ferramentas da tela aberta.",icon:"mdi-expand-all",path:"",status:0},{name:"DataGrid",type:"Componente",description:"Grade para listar dados do sistema.",icon:"mdi-table-large",path:"",status:0},{name:"InputField",type:"Componente",description:"Campo para entrada de dados.",icon:"mdi-form-textbox",path:"",status:0},{name:"FormBuilder",type:"Componente",description:"Construtor de formulário para entrada ou exibição de dados.",icon:"mdi-window-shutter-cog",path:"",status:0},{name:"ReportView",type:"Componente",description:"Integração com gerador de relatórios do servidor (Stimulsoft).",icon:"mdi-file-pdf-box",path:"",status:0},{name:"TranslateBtn",type:"Componente",description:"Botão para troca do idioma.",icon:"mdi-translate",path:"",status:0},{name:"CodeView",type:"Componente",description:"Painel para exibir código fonte da documentação.",icon:"mdi-code-braces",path:"/docs/components/code-block/code-view",status:100},{name:"CodeBlock",type:"Componente",description:"Card para exibir informações da documentação.",icon:"mdi-code-tags",path:"/docs/components/code-block/code-block",status:100}];const Ee=[{folder:"/",description:"Pasta principal (raiz) da aplicação."},{folder:"/public",description:"Pasta para arquivos estáticos (públicos) não compilados no build."},{folder:"/src",description:"Pasta exclusiva para todo o código fonte."},{folder:"/src/assets",description:"Pasta para arquivos estáticos compilados no build."},{folder:"/src/components",description:"Pasta para manter os componentes específicos para aplicação."},{folder:"/src/domains",description:"Pasta para manter os recursos específicos de cada área (modulo) do sistema."},{folder:"/src/plugins",description:"Pasta para manter os componentes externos utilizados pelo sistema."},{folder:"/src/plugins/xtpgui",description:"Concentra todos os componentes e utilitários da lib, evite mudanças aqui durante o desenvolvimento do projeto."},{folder:"/src/plugins/xtpgui/components",description:"Componentes (inputs, widgets, data grid, etc) todos estão concentrados aqui."},{folder:"/src/plugins/xtpgui/directives",description:"Diretivas são modificadores úteis para elementos visuais (forms, inputs, etc.)."},{folder:"/src/plugins/xtpgui/filters",description:"Filtros úteis para converter valores (forms, inputs, etc.)."},{folder:"/src/plugins/xtpgui/libs/i18n",description:"Integração da lib de tradução para os principais idiomas e componentes do vuetify."},{folder:"/src/plugins/xtpgui/libs/vuetify",description:"Framework principal de componentes do material design."},{folder:"/src/plugins/xtpgui/views/docs",description:"Páginas (views) da documentação e demonstração."},{folder:"/src/plugins/xtpgui/views/sample",description:"Páginas (views) da documentação e demonstração."},{folder:"/src/plugins/xtpgui/routes.js",description:"Rotas específicas para documentação e demonstração."},{folder:"/src/plugins/xtpgui/store.js",description:"Store específicas para os componentes da xtpg-ui."},{folder:"/src/startup",description:"Pasta para manter os inicializadores do sistema (evitar mudanças)."},{folder:"/src/main.js",description:"Responsável por inicializar a aplicação."},{folder:"/src/routes.js",description:"Responsável por carregar as rotas da aplicação."},{folder:"/src/store.js",description:"Responsável por carregar o vuex da aplicação, utilize para importar suas stores aqui."}];var Le={namespaced:!0,state:{theme:_,components:Se,folders:Ee,themes:B},mutations:{SET_THEME(e,t){e.theme=t}},actions:{}};a("6892");o["a"].filter("Locale",e=>{if(!e)return"";switch(e){case"pt-BR":return"Português";case"es-ES":return"Espanhol";default:return"Inglês"}}),o["a"].filter("Profile",e=>{if(!e)return"";switch(e){case"ADMIN":return"Administrador";case"USER":return"Usuário";default:return"Usuário"}}),o["a"].filter("UpperCase",e=>e?e.toUpperCase():""),o["a"].directive("uppercase",{bind:function(e,t,a,o){t.onKeyUp=e=>(e.target.value=e.target.value.toUpperCase(),a.componentInstance?a.componentInstance.$emit("input",{detail:e.target.value.toUpperCase()}):a.elm.dispatchEvent(new CustomEvent("input",{detail:e.target.value.toUpperCase()}))),e.addEventListener("keyup",t.onKeyUp),e.classList.add("text-uppercase")},unbind:function(e,t,a){e.removeEventListener("keyup",t.onKeyUp),e.classList.remove("text-uppercase")}}),o["a"].directive("focus",{inserted:function(e){e.focus()}}),o["a"].component("XShortBtn",()=>a.e("chunk-784d584f").then(a.bind(null,"3386"))),o["a"].component("XCodeView",()=>a.e("chunk-2524fdc4").then(a.bind(null,"3fbe"))),o["a"].component("XCodeBlock",()=>a.e("chunk-01aa2415").then(a.bind(null,"6b23"))),o["a"].component("XAuthenticator",()=>Promise.all([a.e("chunk-bb8379ec"),a.e("chunk-7e114d6e")]).then(a.bind(null,"62c3")))}});
//# sourceMappingURL=app.f740515d.js.map