(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs-i18n"],{"0789":function(t,e,s){"use strict";s.d(e,"c",(function(){return c})),s.d(e,"d",(function(){return d})),s.d(e,"e",(function(){return h})),s.d(e,"f",(function(){return u})),s.d(e,"a",(function(){return p})),s.d(e,"b",(function(){return v}));var i=s("d9f7");function a(t=[],...e){return Array().concat(t,...e)}function r(t,e="top center 0",s){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:s},origin:{type:String,default:e}},render(e,s){const r="transition"+(s.props.group?"-group":""),n={props:{name:t,mode:s.props.mode},on:{beforeEnter(t){t.style.transformOrigin=s.props.origin,t.style.webkitTransformOrigin=s.props.origin}}};return s.props.leaveAbsolute&&(n.on.leave=a(n.on.leave,t=>{const{offsetTop:e,offsetLeft:s,offsetWidth:i,offsetHeight:a}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=s+"px",t.style.width=i+"px",t.style.height=a+"px"}),n.on.afterLeave=a(n.on.afterLeave,t=>{if(t&&t._transitionInitialStyles){const{position:e,top:s,left:i,width:a,height:r}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=s||"",t.style.left=i||"",t.style.width=a||"",t.style.height=r||""}})),s.props.hideOnLeave&&(n.on.leave=a(n.on.leave,t=>{t.style.setProperty("display","none","important")})),e(r,Object(i["a"])(s.data,n),s.children)}}}function n(t,e,s="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:s}},render(s,a){return s("transition",Object(i["a"])(a.data,{props:{name:t},on:e}),a.children)}}}var o=s("80d2"),l=function(t="",e=!1){const s=e?"width":"height",i="offset"+Object(o["z"])(s);return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[s]:t.style[s]}},enter(e){const a=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const r=e[i]+"px";e.style[s]="0",e.offsetHeight,e.style.transition=a.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[s]=r})},afterEnter:r,enterCancelled:r,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[s]:t.style[s]},t.style.overflow="hidden",t.style[s]=t[i]+"px",t.offsetHeight,requestAnimationFrame(()=>t.style[s]="0")},afterLeave:a,leaveCancelled:a};function a(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){const e=t._initialStyle[s];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[s]=e),delete t._initialStyle}};r("carousel-transition"),r("carousel-reverse-transition"),r("tab-transition"),r("tab-reverse-transition"),r("menu-transition");const c=r("fab-transition","center center","out-in"),d=(r("dialog-transition"),r("dialog-bottom-transition"),r("dialog-top-transition"),r("fade-transition")),h=(r("scale-transition"),r("scroll-x-transition"),r("scroll-x-reverse-transition"),r("scroll-y-transition"),r("scroll-y-reverse-transition"),r("slide-x-transition")),u=(r("slide-x-reverse-transition"),r("slide-y-transition"),r("slide-y-reverse-transition")),p=n("expand-transition",l()),v=n("expand-x-transition",l("",!0))},"1f4f":function(t,e,s){"use strict";s("8b37");var i=s("80d2"),a=s("7560"),r=s("58df");e["a"]=Object(r["a"])(a["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"297c":function(t,e,s){"use strict";var i=s("2b0e"),a=(s("6ece"),s("0789")),r=s("90a2"),n=s("a9ad"),o=s("fe6c"),l=s("a452"),c=s("7560"),d=s("80d2"),h=s("58df");const u=Object(h["a"])(n["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),l["a"],c["a"]);var p=u.extend({name:"v-progress-linear",directives:{intersect:r["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:Object(d["g"])(this.normalizedValue,"%"),width:Object(d["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?a["d"]:a["e"]},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(d["p"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,s){this.isVisible=s},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),v=p;e["a"]=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(v,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"6ece":function(t,e,s){},"8b37":function(t,e,s){},"8ce9":function(t,e,s){},a452:function(t,e,s){"use strict";var i=s("2b0e");function a(t="value",e="change"){return i["a"].extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const r=a();e["a"]=r},b0af:function(t,e,s){"use strict";s("615b");var i=s("10d2"),a=s("297c"),r=s("1c87"),n=s("58df");e["a"]=Object(n["a"])(a["a"],r["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...r["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i["a"].options.computed.classes.call(this)}},styles(){const t={...i["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},ce7e:function(t,e,s){"use strict";s("8ce9");var i=s("7560");e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},d729:function(t,e,s){"use strict";s.r(e);var i=s("8336"),a=s("b0af"),r=s("2e4b"),n=s("ce7e"),o=s("6b53"),l=s("8dd9"),c=s("1f4f"),d=function(){var t=this,e=t._self._c;return e("section",{staticClass:"pa-4 pa-sm-6 pa-md-8"},[e(o["a"],{staticClass:"mx-auto",attrs:{"max-width":"868"}},[e("section",[e("h3",{staticClass:"text-h4 mb-2"},[t._v(" Internacionalização ")]),e("p",{staticClass:"font-weight-light"},[t._v(" Atualmente a lib está integrada com i18n e está preparada para os três principais idiomas (en-us, pt-br e es). ")]),e(c["a"],{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left",staticStyle:{width:"20%"}},[t._v(" Recurso ")]),e("th",{staticClass:"text-left",staticStyle:{width:"80%"}},[t._v(" Descrição ")])])]),e("tbody",[e("tr",[e("td",{staticClass:"text-left"},[t._v(" $i18n.locale ")]),e("td",{staticClass:"text-left"},[t._v(" Retorna o idioma corrente. ")])]),e("tr",[e("td",{staticClass:"text-left"},[t._v(' $t("key") ')]),e("td",{staticClass:"text-left"},[t._v(" Traduz a chave (key) informada de acordo com o idioma corrente. ")])]),e("tr",[e("td",{staticClass:"text-left"},[t._v(' i18n.tc("key") ')]),e("td",{staticClass:"text-left"},[t._v(" Importando "),e("strong",[t._v("i18n")]),t._v(" de "),e("strong",[t._v('"src/plugins/i18n"')]),t._v(' em qualquer arquivo, é possível aplicar traduções". ')])]),e("tr",[e("td",{staticClass:"text-left"},[t._v(" src/locales/ ")]),e("td",{staticClass:"text-left"},[t._v(" Localização dos arquivos de tradução para os idiomas suportados. Esses arquivos terão maior prioridade em relação as traduções internas dos componentes. ")])])])]},proxy:!0}])}),e("h3",{staticClass:"text-h6 mt-5 mb-1"},[t._v(" "+t._s(t._f("Locale")(t.$i18n.locale))+" ")]),e(l["a"],{staticClass:"d-flex"},[e(a["a"],{staticClass:"pa-2",attrs:{outlined:"",elevation:"2",width:"60%"}},[t._l(t.$i18n.availableLocales,(function(s){return e(i["a"],{key:s,staticClass:"mr-2",attrs:{color:"primary"},on:{click:function(e){return t.$i18n.setLocale(s)}}},[t._v(" "+t._s(t._f("Locale")(s))+" ")])})),e(n["a"],{staticClass:"my-2"}),e("div",{staticClass:"py-2"},[e("strong",[t._v("Idioma Atual:")]),t._v(" "+t._s(t.$i18n.locale)+" ")]),e("div",{staticClass:"py-2"},[e("strong",[t._v("Tradução (key: hello):")]),t._v(" "+t._s(t.$t("hello"))+" ")]),e("div",{staticClass:"py-2"},[e("strong",[t._v("Vuetify:")]),t._v(" Todos os componentes estão integrados com i18n, a escolha do idioma será refletido nos componentes. ")]),e("div",{staticClass:"py-2"},[e("strong",[t._v("Data:")]),t._v(" "+t._s(t.picker)+" ")])],2),e(a["a"],{staticClass:"ml-3",attrs:{outlined:"",elevation:"2",width:"40%"}},[e(r["a"],{attrs:{width:"100%"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)],1)])],1)},h=[],u={name:"I18n",data(){return{picker:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)}},methods:{},mounted(){}},p=u,v=s("2877"),f=Object(v["a"])(p,d,h,!1,null,"4b9f7cbf",null);e["default"]=f.exports}}]);
//# sourceMappingURL=docs-i18n.a20e3540.js.map