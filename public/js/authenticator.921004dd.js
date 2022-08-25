(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["authenticator"],{"1b17":function(t,e,s){"use strict";s.r(e);var i=s("8336"),a=s("d903"),n=s("6b53"),o=s("1f4f"),r=s("1e6c"),l=function(){var t=this,e=t._self._c;return e("section",{staticClass:"pa-4 pa-sm-6 pa-md-8"},[e(n["a"],{staticClass:"mx-auto",attrs:{"max-width":"868"}},[e("section",[e("h3",{staticClass:"text-h4 mb-2"},[t._v(" Authenticator ")]),e("p",{staticClass:"font-weight-light"},[t._v(" Componente para formulário de login e recuperação de senha. ")]),e("section",[e("x-code-block",{staticClass:"mb-6",attrs:{dark:!1},scopedSlots:t._u([{key:"toolbar",fn:function(){return[e(a["a"],{scopedSlots:t._u([{key:"default",fn:function({active:s,toggle:a}){return[e(i["a"],{staticClass:"mr-2",attrs:{"input-value":s,depressed:""},on:{click:a}},[t._v(" Propriedades ")])]}}])}),e(a["a"],{scopedSlots:t._u([{key:"default",fn:function({active:s,toggle:a}){return[e(i["a"],{staticClass:"mr-2",attrs:{"input-value":s,depressed:""},on:{click:a}},[t._v(" Eventos ")])]}}])}),e(a["a"],{scopedSlots:t._u([{key:"default",fn:function({active:s,toggle:a}){return[e(i["a"],{staticClass:"mr-2",attrs:{"input-value":s,depressed:""},on:{click:a}},[t._v(" Slots ")])]}}])}),e(a["a"],{scopedSlots:t._u([{key:"default",fn:function({active:s,toggle:a}){return[e(i["a"],{staticClass:"mr-2",attrs:{"input-value":s,depressed:""},on:{click:a}},[t._v(" Exemplo ")])]}}])})]},proxy:!0},{key:"body",fn:function(){return[e(r["a"],[e(o["a"],{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(" Propriedade ")]),e("th",{staticClass:"text-left",staticStyle:{width:"70%"}},[t._v(" Descrição ")])])]),e("tbody",[e("tr",[e("td",{staticClass:"text-left"},[t._v(" splash ")]),e("td",{staticClass:"text-left"},[t._v(" Exibe um painel à esquerda da área de login, útil para inserir imagens ou informativos importantes. ")])]),e("tr",[e("td",{staticClass:"text-left"},[t._v(" splash-theme ")]),e("td",{staticClass:"text-left"},[t._v(" Aplica o tema desejado na área de splash (à esquerda). ")])]),e("tr",[e("td",{staticClass:"text-left"},[t._v(" splash-color ")]),e("td",{staticClass:"text-left"},[t._v(" Aplica cor de fundo na área de splash (à esquerda). ")])])])]},proxy:!0}])})],1),e(r["a"],[e(o["a"],{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(" Evento ")]),e("th",{staticClass:"text-left",staticStyle:{width:"70%"}},[t._v(" Descrição ")])])]),e("tbody",[e("tr",[e("td",{staticClass:"text-left"},[t._v(" login ")]),e("td",{staticClass:"text-left"},[t._v(" Disparado ao clicar em entrar (login), retorna objeto com as informações do usuário retornado pela API. ")])])])]},proxy:!0}])})],1),e(r["a"],[e(o["a"],{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(" Slot ")]),e("th",{staticClass:"text-left",staticStyle:{width:"70%"}},[t._v(" Descrição ")])])]),e("tbody",[e("tr",[e("td",{staticClass:"text-left"},[t._v(" Default ")]),e("td",{staticClass:"text-left"},[t._v(" Adiciona qualquer elemento ou componente na área do splash (à esquerda), mas lembre-se que esta área é ocultada no mobile. ")])])])]},proxy:!0}])})],1),e(r["a"],[e("x-code-view",[e("pre",{staticClass:"line-numbers"},[e("code",{staticClass:"language-html"},[t._v('<template>\n  <x-authenticator :splash="true" splash-theme="one"></x-authenticator>\n</template>\n')])])])],1)]},proxy:!0}])})],1)])])],1)},d=[],c={name:"Authenticator",data(){return{}}},u=c,h=s("2877"),p=Object(h["a"])(u,l,d,!1,null,"2f6bb683",null);e["default"]=p.exports},"1e6c":function(t,e,s){"use strict";var i=s("9d65"),a=s("4e82"),n=s("c3f0"),o=s("80d2"),r=s("58df");const l=Object(r["a"])(i["a"],Object(a["a"])("windowGroup","v-window-item","v-window"));e["a"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:n["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(o["g"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},"1f4f":function(t,e,s){"use strict";s("8b37");var i=s("80d2"),a=s("7560"),n=s("58df");e["a"]=Object(n["a"])(a["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"8b37":function(t,e,s){},d903:function(t,e,s){"use strict";var i=s("4e82"),a=s("58df"),n=s("d9bd"),o=s("2b0e");const r=o["a"].extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return Object(n["c"])("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):(Object(n["c"])("v-item should only contain a single element",this),t)}});e["a"]=Object(a["a"])(r,Object(i["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})}}]);
//# sourceMappingURL=authenticator.921004dd.js.map