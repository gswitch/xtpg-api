(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs-code-view"],{"1e6c":function(t,e,i){"use strict";var s=i("9d65"),n=i("4e82"),a=i("c3f0"),o=i("80d2"),r=i("58df");const d=Object(r["a"])(s["a"],Object(n["a"])("windowGroup","v-window-item","v-window"));e["a"]=d.extend().extend().extend({name:"v-window-item",directives:{Touch:a["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(o["g"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},"1f4f":function(t,e,i){"use strict";i("8b37");var s=i("80d2"),n=i("7560"),a=i("58df");e["a"]=Object(a["a"])(n["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"8b37":function(t,e,i){},d903:function(t,e,i){"use strict";var s=i("4e82"),n=i("58df"),a=i("d9bd"),o=i("2b0e");const r=o["a"].extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return Object(a["c"])("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):(Object(a["c"])("v-item should only contain a single element",this),t)}});e["a"]=Object(n["a"])(r,Object(s["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},e69e:function(t,e,i){"use strict";i.r(e);var s=i("8336"),n=i("d903"),a=i("6b53"),o=i("1f4f"),r=i("1e6c"),d=function(){var t=this,e=t._self._c;return e("section",{staticClass:"pa-4 pa-sm-6 pa-md-8"},[e(a["a"],{staticClass:"mx-auto",attrs:{"max-width":"868"}},[e("section",[e("h3",{staticClass:"text-h4 mb-2"},[t._v(" CodeView ")]),e("p",{staticClass:"font-weight-light"},[t._v(" Útil para documentação, será criado um bloco de visualização do código documentado que será ignorado na renderização do navegador, as linguagens suportadas são html, js e css. ")]),e("section",[e("x-code-block",{staticClass:"mb-6",attrs:{dark:!1},scopedSlots:t._u([{key:"toolbar",fn:function(){return[e(n["a"],{scopedSlots:t._u([{key:"default",fn:function({active:i,toggle:n}){return[e(s["a"],{staticClass:"mr-2",attrs:{"input-value":i,depressed:""},on:{click:n}},[t._v(" Slots ")])]}}])}),e(n["a"],{scopedSlots:t._u([{key:"default",fn:function({active:i,toggle:n}){return[e(s["a"],{staticClass:"mr-2",attrs:{"input-value":i,depressed:""},on:{click:n}},[t._v(" Exemplo ")])]}}])})]},proxy:!0},{key:"body",fn:function(){return[e(r["a"],[e(o["a"],{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(" Slot ")]),e("th",{staticClass:"text-left",staticStyle:{width:"70%"}},[t._v(" Descrição ")])])]),e("tbody",[e("tr",[e("td",{staticClass:"text-left"},[t._v(" Default ")]),e("td",{staticClass:"text-left"},[t._v(" Inicie com a tag "),e("strong",[t._v("<pre>")]),t._v(" seguida de "),e("strong",[t._v('<code class="language-html">')]),t._v(", informando o tipo de linguagem que será documentada, podendo ser "),e("strong",[t._v("html, js ou css")]),t._v(". ")])])])]},proxy:!0}])})],1),e(r["a"],[e("x-code-view",[e("pre",{staticClass:"line-numbers"},[e("code",{staticClass:"language-html"},[t._v('<x-code-view>\n  <pre><code class="language-html">\n    <qualquer-tag-html />\n  </code></pre>\n</x-code-view>\n')])])])],1)]},proxy:!0}])})],1)])])],1)},l=[],c={name:"CodeView",data(){return{}}},u=c,h=i("2877"),p=Object(h["a"])(u,d,l,!1,null,"35c6a530",null);e["default"]=p.exports}}]);
//# sourceMappingURL=docs-code-view.a17ff503.js.map