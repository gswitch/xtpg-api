(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["structure"],{"1f4f":function(t,e,s){"use strict";s("8b37");var a=s("80d2"),i=s("7560"),r=s("58df");e["a"]=Object(r["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"8b37":function(t,e,s){},ee64:function(t,e,s){"use strict";s.r(e);var a=s("ce7e"),i=s("6b53"),r=s("1f4f"),l=function(){var t=this,e=t._self._c;return e("section",{staticClass:"pa-4 pa-sm-6 pa-md-8"},[e(i["a"],{staticClass:"mx-auto",attrs:{"max-width":"868"}},[e("section",{attrs:{id:"home"}},[e("h3",{staticClass:"text-h4 mb-2"},[t._v(" Estrutura ")]),e("p",{staticClass:"font-weight-light"},[t._v(" Organização de pastas do código fonte do projeto, para aplicação final e componentes. ")]),e(r["a"],{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left",staticStyle:{width:"20%"}},[t._v(" Pasta ")]),e("th",{staticClass:"text-left",staticStyle:{width:"80%"}},[t._v(" Descrição ")])])]),e("tbody",t._l(t.getFolders,(function(s,a){return e("tr",{key:a},[e("td",{staticClass:"text-left"},[t._v(" "+t._s(s.folder)+" ")]),e("td",{staticClass:"text-left",domProps:{innerHTML:t._s(s.description)}})])})),0)]},proxy:!0}])}),e("h3",{staticClass:"text-h6 font-weight-regular mt-8 mb-2"},[t._v(" XTPG-UI ")]),e(a["a"],{staticClass:"mb-4"}),e(r["a"],{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left",staticStyle:{width:"20%"}},[t._v(" Pasta ")]),e("th",{staticClass:"text-left",staticStyle:{width:"80%"}},[t._v(" Descrição ")])])]),e("tbody",t._l(t.getUIFolders,(function(s,a){return e("tr",{key:a},[e("td",{staticClass:"text-left"},[t._v(" "+t._s(s.folder)+" ")]),e("td",{staticClass:"text-left",domProps:{innerHTML:t._s(s.description)}})])})),0)]},proxy:!0}])})],1)])],1)},o=[],d={name:"Structure",data(){return{}},computed:{getFolders(){return this.$store.state["ui"].folders.filter(t=>t.folder.indexOf("/src/plugins/xtpgui")<=-1)},getUIFolders(){return this.$store.state["ui"].folders.filter(t=>t.folder.indexOf("/src/plugins/xtpgui")>-1)}}},n=d,c=s("2877"),h=Object(c["a"])(n,l,o,!1,null,"54dd53fc",null);e["default"]=h.exports}}]);
//# sourceMappingURL=structure.5e5e77c2.js.map