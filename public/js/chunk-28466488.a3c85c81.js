(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28466488"],{3408:function(e,t,a){},8212:function(e,t,a){"use strict";a("3408");var l=a("a9ad"),s=a("24b2"),n=a("a236"),r=a("80d2"),o=a("58df");t["a"]=Object(o["a"])(l["a"],s["a"],n["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:Object(r["g"])(this.size),minWidth:Object(r["g"])(this.size),width:Object(r["g"])(this.size),...this.measurableStyles}}},render(e){const t={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return e("div",this.setBackgroundColor(this.color,t),this.$slots.default)}})},"88c6":function(e,t,a){"use strict";a.r(t);var l=a("40dc"),s=a("8212"),n=a("adda"),r=a("2fa4"),o=a("2a7f"),i=function(){var e=this,t=e._self._c;return t(l["a"],e._g(e._b({staticClass:"x-navbar",attrs:{app:""},scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,a){return{key:a,fn:function(t){return[e._t(a,null,null,t)]}}})),e._l(e.$slots,(function(t,a){return{key:a,fn:function(){return[e._t(a)]},proxy:!0}}))],null,!0)},"v-app-bar",{...e.commonAttrs,...e.$attrs},!1),e.$listeners),[!e.$slots.default&&e.schemaData?[t(o["b"],{staticClass:"mr-3"},[e._t("navbar-logo"),!e.$slots["navbar-logo"]&&e.schemaData.logo&&e.schemaData.logo.small?t("x-nav-logo-panel",{attrs:{image:e.schemaData.logo.small,hint:e.schemaData.logo.hint,position:"left"}}):e._e()],2),t(o["a"],{staticClass:"x-left-bar"},[e._t("navbar-left-first"),e._l(e.schemaData.left,(function(a,l){return["button"===a.type?t("x-nav-btn",{key:l,attrs:{item:a,label:a.label,icon:a.icon,hint:a.hint,disabled:a.disabled,"alert-text":a.badge?a.badge.text:null,"alert-color":a.badge?a.badge.color:null,classDevices:a.class}}):e._e(),"dropdown-items"===a.type?t("x-nav-btn",{key:l,ref:"dropdownRef",refInFor:!0,attrs:{item:a,items:a.items,label:a.label,icon:a.icon,hint:a.hint,disabled:a.disabled,"alert-text":a.badge?a.badge.text:null,"alert-color":a.badge?a.badge.color:null,classDevices:a.class}}):e._e(),"dropdown-navigation"===a.type?t("x-nav-btn",{key:l,ref:"dropdownRef",refInFor:!0,attrs:{item:a,label:a.label,icon:"mdi-dots-grid",hint:a.hint,disabled:a.disabled,"alert-text":a.badge?a.badge.text:null,"alert-color":a.badge?a.badge.color:null,classDevices:a.class}},[t("x-navigation-panel",{attrs:{modulesPanel:a.modulesPanel,historyPanel:a.historyPanel},on:{click:e.onClick}})],1):e._e(),"dropdown-user"===a.type?t("x-nav-btn",{key:l,ref:"dropdownRef",refInFor:!0,attrs:{item:a,label:a.label,items:a.items,hint:a.hint,disabled:a.disabled,"alert-text":a.badge?a.badge.text:null,"alert-color":a.badge?a.badge.color:null,left:"",classDevices:a.class}},[t("template",{slot:"icon"},[t(s["a"],{attrs:{size:"35",color:"tree"}},[t(n["a"],{attrs:{src:a.user.avatar}})],1)],1),t("template",{slot:"menu-panel"},[t("x-nav-user-panel",{attrs:{user:a.user}})],1)],2):e._e()]})),e._t("navbar-left-last")],2),t(r["a"]),t(o["a"],{staticClass:"x-right-bar"},[e._t("navbar-right-first"),e._l(e.schemaData.right,(function(a,l){return["button"===a.type?t("x-nav-btn",{key:l,attrs:{item:a,label:a.label,icon:a.icon,hint:a.hint,disabled:a.disabled,"alert-text":a.badge?a.badge.text:null,"alert-color":a.badge?a.badge.color:null,classDevices:a.class}}):e._e(),"dropdown-items"===a.type?t("x-nav-btn",{key:l,ref:"dropdownRef",refInFor:!0,attrs:{item:a,items:a.items,label:a.label,icon:a.icon,hint:a.hint,disabled:a.disabled,"alert-text":a.badge?a.badge.text:null,"alert-color":a.badge?a.badge.color:null,left:"",classDevices:a.class}}):e._e(),"dropdown-navigation"===a.type?t("x-nav-btn",{key:l,ref:"dropdownRef",refInFor:!0,attrs:{item:a,label:a.label,icon:"mdi-dots-grid",hint:a.hint,disabled:a.disabled,"alert-text":a.badge?a.badge.text:null,"alert-color":a.badge?a.badge.color:null,left:"",classDevices:a.class}},[t("x-navigation-panel",{attrs:{modulesPanel:a.modulesPanel,historyPanel:a.historyPanel},on:{click:e.onClick}})],1):e._e(),"dropdown-user"===a.type?t("x-nav-btn",{key:l,ref:"dropdownRef",refInFor:!0,attrs:{item:a,items:a.items,label:a.label,hint:a.hint,disabled:a.disabled,"alert-text":a.badge?a.badge.text:null,"alert-color":a.badge?a.badge.color:null,left:"",classDevices:a.class}},[t("template",{slot:"icon"},[t(s["a"],{attrs:{size:"35",color:"tree"}},[t(n["a"],{attrs:{src:a.user.avatar}})],1)],1),t("template",{slot:"menu-panel"},[t("x-nav-user-panel",{attrs:{user:a.user},on:{click:e.onClick}})],1)],2):e._e()]})),e._t("navbar-right-last")],2)]:e._e()],2)},d=[],c=a("3991"),b={name:"NavBar",inheritAttrs:!1,props:{schema:{type:Object}},data(){return{schemaData:{}}},computed:{commonAttrs(){return{color:this.schemaData["color"]||"primary",elevation:"0",dark:!0,dense:!0}}},methods:{onClick(){for(let e in this.$refs)this.$refs[e].forEach(e=>{e.$refs["menuRef"]&&(e.$refs["menuRef"].isActive=!1)})}},watch:{schema:{deep:!0,immediate:!0,handler(e){this.schemaData=Object(c["b"])(this.schemaData,e)}}}},u=b,h=a("2877"),m=Object(h["a"])(u,i,d,!1,null,"54a12d8d",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-28466488.a3c85c81.js.map