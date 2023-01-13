(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68c1fc95"],{"019e":function(t,e,i){"use strict";i("b670")},"0faa":function(t,e,i){"use strict";i("db93")},"297c":function(t,e,i){"use strict";var s=i("2b0e"),r=(i("6ece"),i("0789")),o=i("90a2"),a=i("a9ad"),n=i("fe6c"),l=i("a452"),c=i("7560"),h=i("80d2"),u=i("58df");const d=Object(u["a"])(a["a"],Object(n["b"])(["absolute","fixed","top","bottom"]),l["a"],c["a"]);var p=d.extend({name:"v-progress-linear",directives:{intersect:o["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(h["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(h["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:Object(h["g"])(this.normalizedValue,"%"),width:Object(h["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?r["d"]:r["e"]},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(h["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(h["p"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,i){this.isVisible=i},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(h["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),f=p;e["a"]=s["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"6ece":function(t,e,i){},"7c64":function(t,e,i){"use strict";i("ca07")},"8ce9":function(t,e,i){},"95b0":function(t,e,i){"use strict";i("b923")},b5b6:function(t,e,i){},b670:function(t,e,i){},b923:function(t,e,i){},ca07:function(t,e,i){},ce7e:function(t,e,i){"use strict";i("8ce9");var s=i("7560");e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},db93:function(t,e,i){},f5bc:function(t,e,i){"use strict";i.r(e);i("b5b6");var s=i("8dd9"),r=i("3a66"),o=i("d10f"),a=i("58df"),n=i("80d2"),l=Object(a["a"])(s["a"],Object(r["a"])("footer",["height","inset"]),o["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...s["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...s["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(n["g"])(t),left:Object(n["g"])(this.computedLeft),right:Object(n["g"])(this.computedRight),bottom:Object(n["g"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),c=i("2fa4"),h=function(){var t=this,e=t._self._c;return e(l,{class:["x-footerbar pa-0"],attrs:{app:"",height:"30",color:t.schema.color||"four"}},[e("div",{staticClass:"left fill-height"},[t._t("default"),e("div",{staticClass:"x-left-panel fill-height"},[e("div",{staticClass:"d-flex align-self-stretch align-center fill-height"},[t._t("first"),t.$slots["default"]?t._e():e("div",{staticClass:"d-flex align-self-stretch align-center fill-height"},[t._l(t.schema.items,(function(t,i){return e("div",{key:i,class:["fill-height",t.class]},[e("x-footer-item",{attrs:{options:t}})],1)})),e("div",{staticClass:"fill-height hidden-md-and-up"},[e("x-footer-mobile-item",{attrs:{options:t.schema}})],1)],2),t._t("last")],2)])],2),t.$slots["default"]?t._e():e(c["a"]),t._t("chat"),t.$slots["default"]||t.$slots["chat"]?t._e():e("div",{staticClass:"right fill-height"},[e("div",{staticClass:"fill-height"},[e("x-footer-chat-item",{attrs:{options:t.schema.chat}})],1)])],2)},u=[],d=i("132d"),p=i("adda"),f=function(){var t=this,e=t._self._c;return t.options?e("div",{class:["x-footer-button d-flex align-center",t.options.class,{"cursor-pointer":t.options.to||t.options.click}],attrs:{title:t.options.hint},on:{click:function(e){return t.onClick(t.options,e)}}},[t.options.icon?e(d["a"],{staticClass:"mr-1",attrs:{size:"18"},domProps:{textContent:t._s(t.options.icon)}}):t._e(),t.options.label?e("div",{domProps:{textContent:t._s(t.options.label)}}):t._e(),t.options.image?e(p["a"],{attrs:{src:t.options.image,"max-width":"65"}}):t._e()],1):t._e()},m=[],g={name:"FooterItem",props:{options:{type:Object}},methods:{onClick(t,e){if(this.$emit("click",e),t&&t.click&&t.click(t,e),t&&t.to){if("object"===typeof t.to)return this.$router.push(t.to);if(t.to.indexOf("/")>-1)return this.$router.push({path:t.to});this.$router.push({name:t.to})}}}},v=g,b=(i("95b0"),i("2877")),_=Object(b["a"])(v,f,m,!1,null,null,null),y=_.exports,C=function(){var t=this,e=t._self._c;return t.options?e("div",{class:["x-footer-chat-item d-flex align-center",t.options.class,{"cursor-pointer":t.options.to||t.options.click}],attrs:{title:t.options.hint},on:{click:function(e){return t.onClick(t.options,e)}}},[t.options.icon?e(d["a"],{attrs:{size:"24"},domProps:{textContent:t._s(t.options.icon)}}):t._e(),t.options.label?e("div",{staticClass:"hidden-sm-and-down ml-2",domProps:{textContent:t._s(t.options.label)}}):t._e()],1):t._e()},x=[],k={name:"FooterChatItem",props:{options:{type:Object}},methods:{onClick(t,e){if(this.$emit("click",e),t&&t.click&&t.click(t,e),t&&t.to){if("object"===typeof t.to)return this.$router.push(t.to);if(t.to.indexOf("/")>-1)return this.$router.push({path:t.to});this.$router.push({name:t.to})}}}},B=k,$=(i("7c64"),Object(b["a"])(B,C,x,!1,null,null,null)),O=$.exports,j=i("b0af"),z=i("ce7e"),w=i("da13"),S=i("5d23"),P=i("e449"),V=function(){var t=this,e=t._self._c;return e(P["a"],{attrs:{top:"","offset-y":"","content-class":"x-mobile-button"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e("div",t._g(t._b({staticClass:"x-mobile-button d-flex align-center fill-height",attrs:{title:t.$t("footer.mobile.info")}},"div",s,!1),i),[e(d["a"],[t._v("mdi-information-variant")])],1)]}}])},[e(j["a"],{staticClass:"mx-auto x-footerbar-dropdown",attrs:{elevation:"0",dense:""}},[t._l(t.options.items,(function(i,s){return[s>0?e(z["a"],{key:s}):t._e(),i.label?e(w["a"],{key:s+1e3,attrs:{dense:""}},[e(S["a"],[e(S["c"],{staticClass:"text--caption",domProps:{textContent:t._s(i.label)}})],1)],1):t._e()]}))],2)],1)},F=[],I={name:"FooterMobileItem",props:{options:{type:Object}},methods:{}},N=I,E=(i("019e"),Object(b["a"])(N,V,F,!1,null,null,null)),L=E.exports,R={name:"FooterBar",components:{XFooterItem:y,XFooterChatItem:O,XFooterMobileItem:L},props:{schema:{type:Object}}},T=R,X=(i("0faa"),Object(b["a"])(T,h,u,!1,null,null,null));e["default"]=X.exports}}]);
//# sourceMappingURL=chunk-68c1fc95.10cc757c.js.map