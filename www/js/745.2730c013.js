"use strict";(self["webpackChunkquasar_application"]=self["webpackChunkquasar_application"]||[]).push([[745],{2561:(e,l,r)=>{r.d(l,{Z:()=>g});var a=r(3673),t=r(8880),o=r(1959),n=(r(3828),r(9463)),s=r(9582),i=r(2058);const u={class:"col-md-3"},m=(0,a._)("p",{class:"q-mb-none"},"Vous êtes ?",-1),c={class:"text-center q-my-sm"},p=(0,a.Uk)(" Vous avez déja un compte ? "),d=(0,a._)("br",null,null,-1),g={setup(e){(0,n.Z)(),(0,s.yj)();const l=(0,s.tv)(),r=(0,i.t)(),g=(0,o.qj)({type:"SellerProfessional",phoneNumber:null,email:null,agencyName:null,fullName:null}),y=[{label:"Un Particulier",value:"SellerIndividual"},{label:"Un Professionel (Agence immobilière)",value:"SellerProfessional"}],f=()=>{r.userSignUp(g,l)};return(0,a.bv)((()=>{})),(0,a.ic)((()=>{})),(e,l)=>{const r=(0,a.up)("q-option-group"),n=(0,a.up)("q-input"),s=(0,a.up)("q-btn"),i=(0,a.up)("q-form"),v=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(v,{padding:"",class:"row justify-center items-center"},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a.Wm)(i,{onSubmit:l[4]||(l[4]=(0,t.iM)((e=>f()),["prevent"])),class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[m,(0,a.Wm)(r,{options:y,type:"radio",modelValue:(0,o.SU)(g).type,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,o.SU)(g).type=e)},null,8,["modelValue"])]),(0,a.Wm)(n,{type:"email",modelValue:(0,o.SU)(g).email,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,o.SU)(g).email=e),label:"Email *",autofocus:!0,autocomplete:!0,clearable:"",rules:[e.$rules.required("L'adresse email est obligatoire"),e.$rules.email("L'adresse email est incorrect")],"lazy-rules":""},null,8,["modelValue","rules"]),"SellerProfessional"===(0,o.SU)(g).type?((0,a.wg)(),(0,a.j4)(n,{key:0,type:"text",modelValue:(0,o.SU)(g).agencyName,"onUpdate:modelValue":l[2]||(l[2]=e=>(0,o.SU)(g).agencyName=e),label:"Nom de l'agence immobilière *",rules:[e.$rules.required("Le nom de l'agence immobilière est obligatoire")],"lazy-rules":"",clearable:""},null,8,["modelValue","rules"])):(0,a.kq)("",!0),"SellerIndividual"===(0,o.SU)(g).type?((0,a.wg)(),(0,a.j4)(n,{key:1,type:"text",modelValue:(0,o.SU)(g).fullName,"onUpdate:modelValue":l[3]||(l[3]=e=>(0,o.SU)(g).fullName=e),label:"Prénom et Nom *",rules:[e.$rules.required("Le prénom et nom est obligatoire")],"lazy-rules":"",clearable:""},null,8,["modelValue","rules"])):(0,a.kq)("",!0),(0,a._)("div",null,[(0,a.Wm)(s,{label:"S'inscrire",type:"submit",color:"primary",class:"full-width"})])])),_:1}),(0,a._)("p",c,[p,d,(0,a.Wm)(s,{flat:"",label:"Se connecter",to:{name:"users/signin",params:{title:"Se connecter"}}})])])])),_:1})}}}},2058:(e,l,r)=>{r.d(l,{t:()=>d});r(5363);var a=r(8608),t=r(3828),o=r(6469),n=(r(5608),r(2647)),s=r(3074),i=r(3748);r(4889);let u,m,c,p=e=>e;const d=(0,a.Q_)("auth",{state:()=>({user:{},authToken:null}),getters:{},actions:{async verifyOtpCode(e,l){const r=(0,t.gql)(u||(u=p`
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
    `)),a={otpCode:parseInt(e)};await o.graphQLClient.request(r,a).then((e=>{this.user=e.verifyOtpCode.user,this.authToken=e.verifyOtpCode.token,i.Z.create({message:"Vérification réussir."}),n.Z.set("authToken",e.verifyOtpCode.token,{expires:"1d"}),l.replace({name:"users/account"})})).catch((e=>{console.error(e),s.Z.create({message:"Code OTP invalide.",ok:{color:"primary"}})}))},userSignIn(e,l){const r=(0,t.gql)(m||(m=p`
        mutation userSignIn($email: String!) {
          userSignIn(email: $email) {
            id
            type
          }
        }
      `)),a={email:e.email};o.graphQLClient.request(r,a).then((e=>{s.Z.create({title:"",message:"Entrez le code de vérification à 4 chiffres envoyé à votre adresse e-mail pour confirmer votre identité, (Code à 4 chiffres).",prompt:{model:"",isValid:e=>4===e.length,type:"text"},ok:{color:"primary"},cancel:{label:"Annuler",color:"grey"},persistent:!0}).onOk((e=>{this.verifyOtpCode(e,l)}))})).catch((e=>{console.error(e),s.Z.create({message:e.response.errors[0].message,ok:{color:"primary"}})}))},userSignUp(e,l){var r,a;const n=(0,t.gql)(c||(c=p`
      mutation userSignUp($email: String!, $agencyName: String, $fullName: String, $userType: String!) {
        userSignUp(email: $email, agencyName: $agencyName, fullName: $fullName, userType: $userType) {
          id
          type
        }
      }
    `)),i={email:e.email,agencyName:null!==(r=e.agencyName)&&void 0!==r?r:null,fullName:null!==(a=e.fullName)&&void 0!==a?a:null,userType:e.type};o.graphQLClient.request(n,i).then((e=>{s.Z.create({title:"",message:"Inscription réussir. Entrez le code de vérification à 4 chiffres envoyé à votre adresse e-mail pour valider votre inscription.",prompt:{model:"",type:"text"},ok:{color:"primary"},persistent:!0}).onOk((e=>{this.verifyOtpCode(e,l)}))})).catch((e=>{console.error(e),s.Z.create({message:e.response.errors[0].message,ok:{color:"primary"}})}))},userSignOut(e){s.Z.create({message:"Êtes-vous sûr de vouloir vous déconnecté.",ok:{label:"Oui",color:"primary"},cancel:"Annuler",persistent:!0}).onOk((()=>{this.user={},this.authToken=null,n.Z.remove("authToken"),i.Z.create({message:"Déconnexion réussie."}),e.replace({name:"users/signin"})}))}}})},1745:(e,l,r)=>{r.r(l),r.d(l,{default:()=>c});var a=r(2268),t=r(9549),o=r(1961),n=r(1301),s=r(706),i=r(5493),u=r(7518),m=r.n(u);const c=a.Z;m()(a.Z,"components",{QPage:t.Z,QForm:o.Z,QOptionGroup:n.Z,QInput:s.Z,QBtn:i.Z})},2268:(e,l,r)=>{r.d(l,{Z:()=>a.Z});var a=r(2561)}}]);