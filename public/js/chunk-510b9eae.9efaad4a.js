(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-510b9eae"],{2838:function(e,t,s){"use strict";s.r(t);var a=s("62ad"),l=s("adda"),o=s("0fd9"),r=function(){var e=this,t=e._self._c;return t("div",{class:["x-authenticator",e.$vuetify.theme.isDark?"theme--dark":"theme--light"]},[t(o["a"],{staticClass:"fill-height",attrs:{"no-gutters":""}},[e.splash?t(a["a"],{class:["x-left-panel d-none d-lg-flex align-center justify-center",e.splashTheme?e.splashTheme:""],style:{"background-color":e.splashColor},attrs:{lg:"8"}},[this.$slots["default"]?e._t("default"):t(l["a"],{attrs:{src:s("d440"),"max-width":"50%"}})],2):e._e(),t(a["a"],{staticClass:"x-right-panel d-flex align-center justify-center five",attrs:{lg:e.splash?4:12}},[t("div",[e._v("LOGIN")])])],1)],1)},i=[],n={name:"XAuthenticator",props:{splash:{type:Boolean,default:!0},splashColor:{type:String,default:"#fafafa"},splashTheme:{type:String,default:"one"},avatar:{type:String,default:null},title:{type:String,default:"Por favor, informe sua credencial."},flat:{type:Boolean,default:!1},color:{type:String,default:"primary"},dark:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!0},showRecovery:{type:Boolean,default:!0},showShortcutsApps:{type:Boolean,default:!0}},computed:{},data(){return{step:0,passwordToggle:!1,newPwdToggle:!1,confirmPwdToggle:!1,loading:{login:!1},snackMessage:{show:!1,text:null},rules:{isValid:{frmLogin:!1,frmPwdRecovery:!1,frmRecoveryCode:!1},required:e=>!!e||"Esse campo é obrigatório!",email:e=>{const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"E-mail inválido!"},confirmPwd:e=>e===this.passwordRecovery.newPwd||"As senha informadas devem ser iguais!"},credential:{username:"MASTER",password:"123456",device:{}},passwordRecovery:{code:null,email:null,newPwd:null,confirmPwd:null}}},methods:{showMessage(e,t){},showPasswordButton(e){return e?"mdi-eye-off-outline":"mdi-eye-outline"},resetFields(){4===this.step&&(this.passwordRecovery={},this.credential={}),3===this.step&&(this.passwordRecovery.newPwd=null,this.passwordRecovery.confirmPwd=null),2===this.step&&(this.passwordRecovery.code=null)},setStep(e){switch(e){case 0:this.resetFields();break;case 1:break;case 2:this.resetFields();break;case 3:this.resetFields();break;default:break}this.step=e},async login(){try{this.loading.login=!0}catch(e){}finally{this.loading.login=!1}},async logout(){},sendMailPwdRecover(){this.setStep(2)},checkRecoverCode(){this.setStep(3)},resetPassword(){this.setStep(4)},setCredentialDevice(){}},created(){this.setStep(0),this.logout()},mounted(){}},d=n,c=(s("a795"),s("2877")),u=Object(c["a"])(d,r,i,!1,null,"2b47ee5d",null);t["default"]=u.exports},a795:function(e,t,s){"use strict";s("c0d2")},c0d2:function(e,t,s){},d440:function(e,t,s){e.exports=s.p+"img/splash01.e3e677fd.png"}}]);
//# sourceMappingURL=chunk-510b9eae.9efaad4a.js.map