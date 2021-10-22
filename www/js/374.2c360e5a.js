"use strict";(self["webpackChunkquasar_application"]=self["webpackChunkquasar_application"]||[]).push([[374],{7647:(e,a,r)=>{r.d(a,{Z:()=>g});var t=r(3673),n=r(2323),l=r(1959),i=(r(3828),r(9463)),s=r(9582),o=(r(6469),r(2058));const c={class:"row justify-center"},u={class:"col-12"},m=(0,t.Uk)("Modifier les infos de mon compte"),p=(0,t.Uk)("Modifier les infos de mon agence"),d=(0,t._)("br",null,null,-1),g={setup(e){(0,i.Z)(),(0,s.yj)();const a=(0,s.tv)(),r=(0,o.t)(),g=()=>{r.userSignOut(a)},f=()=>{a.push({name:"agencies/show",params:{id:`${r.user.agency.id}`}})};return(0,t.bv)((()=>{})),(0,t.ic)((()=>{})),(e,a)=>{const i=(0,t.up)("q-img"),s=(0,t.up)("q-card-section"),o=(0,t.up)("q-card"),v=(0,t.up)("q-item-label"),y=(0,t.up)("q-icon"),h=(0,t.up)("q-item-section"),k=(0,t.up)("q-item"),Z=(0,t.up)("q-list"),w=(0,t.up)("q-btn"),C=(0,t.up)("q-page"),_=(0,t.Q2)("ripple");return(0,t.wg)(),(0,t.j4)(C,{padding:""},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(o,{class:"my-card",flat:"",bordered:""},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{horizontal:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{class:"col-5",src:"",alt:"LOGO"}),(0,t.Wm)(s,null,{default:(0,t.w5)((()=>{var e,i;return[(0,t._)("div",c,[(0,t._)("div",u,[(0,t._)("h6",{class:"cursor-pointer",clickable:"",onClick:a[0]||(a[0]=e=>f())},(0,n.zw)(null!==(e=(0,l.SU)(r).user.fullName)&&void 0!==e?e:null===(i=(0,l.SU)(r).user.agency)||void 0===i?void 0:i.name),1)])])]})),_:1})])),_:1})])),_:1}),(0,t.Wm)(Z,{separator:"",padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{header:""}),(0,t.wy)((0,t.Wm)(k,{clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{name:"las la-wrench"})])),_:1}),(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[m])),_:1}),(0,t.Wm)(h,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{name:"las la-angle-right"})])),_:1})])),_:1},512),[[_]]),(0,t.wy)((0,t.Wm)(k,{clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{name:"las la-wrench"})])),_:1}),(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[p])),_:1}),(0,t.Wm)(h,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{name:"las la-angle-right"})])),_:1})])),_:1},512),[[_]])])),_:1}),d,(0,t.Wm)(w,{color:"red",class:"full-width",label:"Se déconnecter",onClick:a[1]||(a[1]=e=>g())})])])),_:1})}}}},2058:(e,a,r)=>{r.d(a,{t:()=>d});r(5363);var t=r(8608),n=r(3828),l=r(6469),i=(r(5608),r(2647)),s=r(3074),o=r(3748);r(4889);let c,u,m,p=e=>e;const d=(0,t.Q_)("auth",{state:()=>({user:{},authToken:null}),getters:{},actions:{async verifyOtpCode(e,a){const r=(0,n.gql)(c||(c=p`
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
    `)),t={otpCode:parseInt(e)};await l.graphQLClient.request(r,t).then((e=>{this.user=e.verifyOtpCode.user,this.authToken=e.verifyOtpCode.token,o.Z.create({message:"Vérification réussir."}),i.Z.set("authToken",e.verifyOtpCode.token,{expires:"1d"}),a.replace({name:"users/account"})})).catch((e=>{console.error(e),s.Z.create({message:"Code OTP invalide.",ok:{color:"primary"}})}))},userSignIn(e,a){const r=(0,n.gql)(u||(u=p`
        mutation userSignIn($email: String!) {
          userSignIn(email: $email) {
            id
            type
          }
        }
      `)),t={email:e.email};l.graphQLClient.request(r,t).then((e=>{s.Z.create({title:"",message:"Entrez le code de vérification à 4 chiffres envoyé à votre adresse e-mail pour confirmer votre identité, (Code à 4 chiffres).",prompt:{model:"",isValid:e=>4===e.length,type:"text"},ok:{color:"primary"},cancel:{label:"Annuler",color:"grey"},persistent:!0}).onOk((e=>{this.verifyOtpCode(e,a)}))})).catch((e=>{console.error(e),s.Z.create({message:e.response.errors[0].message,ok:{color:"primary"}})}))},userSignUp(e,a){var r,t;const i=(0,n.gql)(m||(m=p`
      mutation userSignUp($email: String!, $agencyName: String, $fullName: String, $userType: String!) {
        userSignUp(email: $email, agencyName: $agencyName, fullName: $fullName, userType: $userType) {
          id
          type
        }
      }
    `)),o={email:e.email,agencyName:null!==(r=e.agencyName)&&void 0!==r?r:null,fullName:null!==(t=e.fullName)&&void 0!==t?t:null,userType:e.type};l.graphQLClient.request(i,o).then((e=>{s.Z.create({title:"",message:"Inscription réussir. Entrez le code de vérification à 4 chiffres envoyé à votre adresse e-mail pour valider votre inscription.",prompt:{model:"",type:"text"},ok:{color:"primary"},persistent:!0}).onOk((e=>{this.verifyOtpCode(e,a)}))})).catch((e=>{console.error(e),s.Z.create({message:e.response.errors[0].message,ok:{color:"primary"}})}))},userSignOut(e){s.Z.create({message:"Êtes-vous sûr de vouloir vous déconnecté.",ok:{label:"Oui",color:"primary"},cancel:"Annuler",persistent:!0}).onOk((()=>{this.user={},this.authToken=null,i.Z.remove("authToken"),o.Z.create({message:"Déconnexion réussie."}),e.replace({name:"users/signin"})}))}}})},9374:(e,a,r)=>{r.r(a),r.d(a,{default:()=>y});var t=r(3090),n=r(9549),l=r(7338),i=r(418),s=r(7619),o=r(5561),c=r(3501),u=r(8108),m=r(9811),p=r(2949),d=r(5493),g=r(3903),f=r(7518),v=r.n(f);const y=t.Z;v()(t.Z,"components",{QPage:n.Z,QCard:l.Z,QCardSection:i.Z,QImg:s.Z,QList:o.Z,QItemLabel:c.Z,QItem:u.Z,QItemSection:m.Z,QIcon:p.Z,QBtn:d.Z}),v()(t.Z,"directives",{Ripple:g.Z})},3090:(e,a,r)=>{r.d(a,{Z:()=>t.Z});var t=r(7647)}}]);