(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sample-login"],{"4d60":function(o,t,s){"use strict";s.r(t);var e=function(){var o=this,t=o._self._c;return t("div",{staticClass:"full-page"},[t("x-authenticator",{model:{value:o.options,callback:function(t){o.options=t},expression:"options"}})],1)},i=[],a=s("2788"),n={name:"AuthSample",data(){return{options:{info:{version:null},login:{onEnter:this.login,onLogout:this.logout},forgot:{user:{firstName:null},onSendMail:this.sendMail,onValidation:this.validation,onResetPwd:this.resetPwd,onCompleted:this.completed}}}},methods:{async login(o){try{o.loading(),await this.$sleep(500);const t=await a["a"].login(o.fields);this.$store.commit("sample/SET_USER",t),this.$router.push({name:"sample_home"})}catch(t){this.$alert(t.message)}finally{o.loading(!1)}},async logout(o){try{o.loading(),a["a"].logout(),this.$store.commit("sample/SET_USER",{})}catch(t){}finally{o.loading(!1)}},async sendMail(o){o.loading(),await this.$sleep(500),o.loading(!1),o.next(),console.log(o)},async validation(o){o.loading(),await this.$sleep(500),this.options.forgot.user.firstName="MASTER",o.loading(!1),o.next(),console.log(o)},async resetPwd(o){if(o.fields.newPwd!==o.fields.confirmPwd)return this.$notify("Tudo indica que as senhas estão diferentes, por favor, verifique sua digitação.");o.loading(),await this.$sleep(500),o.loading(!1),o.next(),console.log(o)},async completed(o){o.setStep(0),console.log(o)},async loadInfo(){try{const o=await a["a"].info();this.$store.commit("sample/SET_INFO",o.data),this.options.info=this.$store.state["sample"].info}catch(o){alert("Não foi possível obter informações do sistema! Msg: "+o.message)}}},created(){this.loadInfo()}},l=n,d=s("2877"),r=Object(d["a"])(l,e,i,!1,null,"2bdaf60d",null);t["default"]=r.exports}}]);
//# sourceMappingURL=sample-login.1d6eed34.js.map