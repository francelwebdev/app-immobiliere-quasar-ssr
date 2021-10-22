"use strict";(self["webpackChunkquasar_application"]=self["webpackChunkquasar_application"]||[]).push([[969],{9530:(e,r,t)=>{t.d(r,{Z:()=>d});var a=t(3673),s=t(8880),n=t(1959),i=(t(3828),t(9463)),o=t(9582),l=t(2058);const u={class:"col-md-3"},c={class:"text-center q-my-sm"},m=(0,a.Uk)(" Vous n'avez pas encore un compte ? "),p=(0,a._)("br",null,null,-1),d={setup(e){(0,i.Z)(),(0,o.yj)();const r=(0,o.tv)(),t=(0,l.t)(),d=(0,n.qj)({phoneNumber:null,email:null}),g=()=>{t.userSignIn(d,r)};return(0,a.bv)((()=>{})),(0,a.ic)((()=>{})),(e,r)=>{const t=(0,a.up)("q-input"),i=(0,a.up)("q-btn"),o=(0,a.up)("q-form"),l=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(l,{padding:"",class:"row justify-center items-center"},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a.Wm)(o,{onSubmit:r[1]||(r[1]=(0,s.iM)((e=>g()),["prevent"])),class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{type:"email",modelValue:(0,n.SU)(d).email,"onUpdate:modelValue":r[0]||(r[0]=e=>(0,n.SU)(d).email=e),label:"Email *",autofocus:!0,autocomplete:!0,clearable:"",rules:[e.$rules.required("L'adresse email est obligatoire"),e.$rules.email("L'adresse email est incorrect")],"lazy-rules":""},null,8,["modelValue","rules"]),(0,a._)("div",null,[(0,a.Wm)(i,{label:"Se connecter",type:"submit",color:"primary",class:"full-width"})])])),_:1}),(0,a._)("p",c,[m,p,(0,a.Wm)(i,{flat:"",label:"S'inscrire",to:{name:"users/signup",params:{title:"S'inscrire"}}})])])])),_:1})}}}},2058:(e,r,t)=>{t.d(r,{t:()=>d});t(5363);var a=t(8608),s=t(3828),n=t(6469),i=(t(5608),t(2647)),o=t(3074),l=t(3748);t(4889);let u,c,m,p=e=>e;const d=(0,a.Q_)("auth",{state:()=>({user:{},authToken:null}),getters:{},actions:{async verifyOtpCode(e,r){const t=(0,s.gql)(u||(u=p`
      mutation verifyOtpCode($otpCode: Int!) {
        verifyOtpCode(otpCode: $otpCode) {
          user {
            id
            type
            agency {
              id
              name
            }
          }
          token
        }
      }
    `)),a={otpCode:parseInt(e)};await n.graphQLClient.request(t,a).then((e=>{this.user=e.verifyOtpCode.user,this.authToken=e.verifyOtpCode.token,l.Z.create({message:"Vérification réussir."}),i.Z.set("authToken",e.verifyOtpCode.token,{expires:"1d"}),r.replace({name:"users/account"})})).catch((e=>{console.error(e),o.Z.create({message:"Code OTP invalide.",ok:{color:"primary"}})}))},userSignIn(e,r){const t=(0,s.gql)(c||(c=p`
        mutation userSignIn($email: String!) {
          userSignIn(email: $email) {
            id
            type
          }
        }
      `)),a={email:e.email};n.graphQLClient.request(t,a).then((e=>{o.Z.create({title:"",message:"Entrez le code de vérification à 4 chiffres envoyé à votre adresse e-mail pour confirmer votre identité, (Code à 4 chiffres).",prompt:{model:"",isValid:e=>4===e.length,type:"text"},ok:{color:"primary"},cancel:{label:"Annuler",color:"grey"},persistent:!0}).onOk((e=>{this.verifyOtpCode(e,r)}))})).catch((e=>{console.error(e),o.Z.create({message:e.response.errors[0].message,ok:{color:"primary"}})}))},userSignUp(e,r){var t,a;const i=(0,s.gql)(m||(m=p`
      mutation userSignUp($email: String!, $agencyName: String, $fullName: String, $userType: String!) {
        userSignUp(email: $email, agencyName: $agencyName, fullName: $fullName, userType: $userType) {
          id
          type
        }
      }
    `)),l={email:e.email,agencyName:null!==(t=e.agencyName)&&void 0!==t?t:null,fullName:null!==(a=e.fullName)&&void 0!==a?a:null,userType:e.type};n.graphQLClient.request(i,l).then((e=>{o.Z.create({title:"",message:"Inscription réussir. Entrez le code de vérification à 4 chiffres envoyé à votre adresse e-mail pour valider votre inscription.",prompt:{model:"",type:"text"},ok:{color:"primary"},persistent:!0}).onOk((e=>{this.verifyOtpCode(e,r)}))})).catch((e=>{console.error(e),o.Z.create({message:e.response.errors[0].message,ok:{color:"primary"}})}))},userSignOut(e){o.Z.create({message:"Êtes-vous sûr de vouloir vous déconnecté.",ok:{label:"Oui",color:"primary"},cancel:"Annuler",persistent:!0}).onOk((()=>{this.user={},this.authToken=null,i.Z.remove("authToken"),l.Z.create({message:"Déconnexion réussie."}),e.replace({name:"users/signin"})}))}}})},9969:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var a=t(3102),s=t(9549),n=t(1961),i=t(706),o=t(5493),l=t(7518),u=t.n(l);const c=a.Z;u()(a.Z,"components",{QPage:s.Z,QForm:n.Z,QInput:i.Z,QBtn:o.Z})},3102:(e,r,t)=>{t.d(r,{Z:()=>a.Z});var a=t(9530)}}]);