"use strict";(self["webpackChunkquasar_application"]=self["webpackChunkquasar_application"]||[]).push([[71],{1659:(e,a,t)=>{t.d(a,{Z:()=>v});var s=t(3673),n=t(1959),r=t(2323),l=t(8880),o=t(9463),i=t(7783),u=(t(5781),t(9582)),m=t(2058);const c=(0,s.Uk)("Menu"),d=(0,s.Uk)(" Mes offres "),p=(0,s.Uk)(" Publier une offre "),f=(0,s.Uk)(" Mon compte "),g=(0,s.Uk)(" Qui sommes nous "),w=(0,s.Uk)(" Tarifs de publication "),k=(0,s.Uk)(" Contactez nous "),y=(0,s.Uk)(" Questions fréquemment posées "),h=(0,s.Uk)(" Se déconnecter "),v={setup(e){const a=(0,u.yj)(),t=(0,u.tv)(),v=((0,o.Z)(),(0,m.t)()),_=(0,n.iH)("offres"),W=((0,n.qj)({store_name:"",modelAddUnique:null,category:null,options_categories_search:[""]}),(0,n.iH)(!1),(0,n.iH)(!1)),b=()=>{(0,i.Z)("https://wa.me/message/")},q=()=>"bg-primary",Z=()=>"text-white",S=()=>{v.userSignOut(t)},x=e=>{switch(e){case"mes_pages/home":return"Accueil";case"ads/index":return"Les offres";case"agencies/index":return"Les agences";case"demandes/index":return"Demandes";case"ads/new":return"Publier une offre";case"users/myAds":return"Mes offres";case"ads/show":return"Détails de l'offre";case"agencies/show":return"Détails de l'agence";case"users/signin":return"Se connecter";case"users/signup":return"S'inscrire";case"users/account":return"Mon compte";case"users/verifyOtpCode":return"Vérification de code"}},C=()=>{t.back()},U=()=>!("ads/index"!==a.name&&"agencies/index"!==a.name&&"users/account"!==a.name&&"users/myAds"!==a.name||!v.authToken),Q=()=>{W.value=!W.value};return(e,t)=>{const o=(0,s.up)("q-btn"),i=(0,s.up)("q-toolbar-title"),u=(0,s.up)("q-toolbar"),m=(0,s.up)("q-header"),v=(0,s.up)("q-item-label"),O=(0,s.up)("q-icon"),T=(0,s.up)("q-item-section"),j=(0,s.up)("q-item"),A=(0,s.up)("q-separator"),L=(0,s.up)("q-list"),$=(0,s.up)("q-scroll-area"),I=(0,s.up)("q-drawer"),N=(0,s.up)("router-view"),M=(0,s.up)("q-page-container"),V=(0,s.up)("q-route-tab"),P=(0,s.up)("q-tabs"),R=(0,s.up)("q-footer"),D=(0,s.up)("q-layout"),z=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.j4)(D,{view:"lhh LpR lFr"},{default:(0,s.w5)((()=>["mes_pages/intro"!==(0,n.SU)(a).name?((0,s.wg)(),(0,s.j4)(m,{key:0,reveal:"",elevated:"",class:(0,r.C_)(q())},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[U()?((0,s.wg)(),(0,s.j4)(o,{key:0,flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t[0]||(t[0]=e=>Q())})):(0,s.kq)("",!0),"ads/new"===(0,n.SU)(a).name?((0,s.wg)(),(0,s.j4)(o,{key:1,flat:"",round:"",dense:"",icon:"las la-arrow-left",color:"white",onClick:t[1]||(t[1]=e=>C())})):(0,s.kq)("",!0),"users/signup"===(0,n.SU)(a).name?((0,s.wg)(),(0,s.j4)(o,{key:2,flat:"",round:"",dense:"",icon:"las la-arrow-left",color:"white",to:{name:"users/signin",params:{title:"Se connecter"}}})):(0,s.kq)("",!0),"ads/search"===(0,n.SU)(a).name?((0,s.wg)(),(0,s.j4)(o,{key:3,flat:"",round:"",dense:"",icon:"las la-arrow-left",color:"white",to:{name:"ads/index",params:{title:"Les annonces"}}})):(0,s.kq)("",!0),"agencies/show"===(0,n.SU)(a).name?((0,s.wg)(),(0,s.j4)(o,{key:4,flat:"",round:"",dense:"",icon:"las la-arrow-left",color:"white",onClick:t[2]||(t[2]=e=>C())})):(0,s.kq)("",!0),(0,s.Wm)(i,{class:(0,r.C_)(Z())},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)((0,n.SU)(a).params.title||x((0,n.SU)(a).name)),1)])),_:1},8,["class"]),"ads/index"===(0,n.SU)(a).name?((0,s.wg)(),(0,s.j4)(o,{key:5,flat:"",round:"",dense:"",icon:"search",to:{name:"ads/search",params:{title:"Recherche"}}})):(0,s.kq)("",!0),"agencies/index"===(0,n.SU)(a).name?((0,s.wg)(),(0,s.j4)(o,{key:6,flat:"",round:"",dense:"",icon:"search",to:{name:"ads/search",params:{title:"Recherche"}}})):(0,s.kq)("",!0),"users/myAds"===(0,n.SU)(a).name?((0,s.wg)(),(0,s.j4)(o,{key:7,flat:"",round:"",dense:"",icon:"search",to:{name:"ads/search",params:{title:"Recherche"}}})):(0,s.kq)("",!0),"ads/index"===(0,n.SU)(a).name?((0,s.wg)(),(0,s.j4)(o,{key:8,flat:"",dense:"",round:"",icon:"add","aria-label":"Add",to:{name:"ads/new",params:{title:"Publier une offre"}}})):(0,s.kq)("",!0),"ads/show"===(0,n.SU)(a).name?((0,s.wg)(),(0,s.j4)(o,{key:9,flat:"",dense:"",round:"",icon:"add","aria-label":"Add",to:{name:"ads/new",params:{title:"Publier une offre"}}})):(0,s.kq)("",!0)])),_:1})])),_:1},8,["class"])):(0,s.kq)("",!0),(0,s.Wm)(I,{modelValue:W.value,"onUpdate:modelValue":t[5]||(t[5]=e=>W.value=e),side:"left",behavior:"mobile",elevated:""},{default:(0,s.w5)((()=>[(0,s.Wm)($,{style:{height:"calc(100% - 0px)","margin-top":"0px","border-right":"1px solid #ddd"}},{default:(0,s.w5)((()=>[(0,s.Wm)(L,null,{default:(0,s.w5)((()=>[(0,s.Wm)(v,{header:"",class:"text-weight-bold"},{default:(0,s.w5)((()=>[c])),_:1}),(0,s.wy)((0,s.Wm)(j,{exact:"",clickable:"",to:{name:"users/myAds",params:{title:"Mes offres"}}},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"las la-list"})])),_:1}),(0,s.Wm)(T,null,{default:(0,s.w5)((()=>[d])),_:1})])),_:1},512),[[z]]),(0,s.wy)((0,s.Wm)(j,{exact:"",clickable:"",to:{name:"ads/new",params:{title:"Publier une offre"}}},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"las la-list"})])),_:1}),(0,s.Wm)(T,null,{default:(0,s.w5)((()=>[p])),_:1})])),_:1},512),[[z]]),(0,s.wy)((0,s.Wm)(j,{exact:"",clickable:"",to:{name:"users/account",params:{title:"Mon compte"}}},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"las la-user"})])),_:1}),(0,s.Wm)(T,null,{default:(0,s.w5)((()=>[f])),_:1})])),_:1},512),[[z]]),(0,s.Wm)(A),(0,s.wy)((0,s.Wm)(j,{exact:"",clickable:"",to:{name:"mes_pages/aboutus",params:{title:"Qui sommes nous"}}},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"las la-info"})])),_:1}),(0,s.Wm)(T,null,{default:(0,s.w5)((()=>[g])),_:1})])),_:1},512),[[z]]),(0,s.wy)((0,s.Wm)(j,{exact:"",clickable:"",to:{name:"mes_pages/pricing",params:{title:"Nos tarifs"}}},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"las la-info"})])),_:1}),(0,s.Wm)(T,null,{default:(0,s.w5)((()=>[w])),_:1})])),_:1},512),[[z]]),(0,s.wy)((0,s.Wm)(j,{exact:"",clickable:"",onClick:t[3]||(t[3]=e=>b())},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"las la-envelope"})])),_:1}),(0,s.Wm)(T,null,{default:(0,s.w5)((()=>[k])),_:1})])),_:1},512),[[z]]),(0,s.wy)((0,s.Wm)(j,{exact:"",clickable:"",to:{name:"mes_pages/faq",params:{title:"Questions fréquemment posées"}}},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"las la-info"})])),_:1}),(0,s.Wm)(T,null,{default:(0,s.w5)((()=>[y])),_:1})])),_:1},512),[[z]]),(0,s.Wm)(A),(0,s.wy)((0,s.Wm)(j,{exact:"",clickable:"",onClick:t[4]||(t[4]=(0,l.iM)((e=>S()),["prevent"]))},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"las la-sign-out-alt"})])),_:1}),(0,s.Wm)(T,null,{default:(0,s.w5)((()=>[h])),_:1})])),_:1},512),[[z]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(M,null,{default:(0,s.w5)((()=>[(0,s.Wm)(N)])),_:1}),"mes_pages/intro"!==(0,n.SU)(a).name?((0,s.wg)(),(0,s.j4)(R,{key:1},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{modelValue:_.value,"onUpdate:modelValue":t[6]||(t[6]=e=>_.value=e),align:"justify",class:"bg-primary"},{default:(0,s.w5)((()=>[(0,s.Wm)(V,{icon:"list",to:{name:"ads/index",params:{title:"Les offres"}},label:"Offres",name:"offres",exact:""}),(0,s.Wm)(V,{icon:"list",to:{name:"agencies/index",params:{title:"Les agences"}},label:"Agences",name:"agencies",exact:""}),(0,s.Wm)(V,{icon:"person",label:"Compte",to:{name:"users/account",params:{title:"Mon compte"}},name:"compte",exact:""})])),_:1},8,["modelValue"])])),_:1})):(0,s.kq)("",!0)])),_:1})}}}},2058:(e,a,t)=>{t.d(a,{t:()=>p});t(5363);var s=t(8608),n=t(3828),r=t(6469),l=(t(5608),t(2647)),o=t(3074),i=t(3748);t(4889);let u,m,c,d=e=>e;const p=(0,s.Q_)("auth",{state:()=>({user:{},authToken:null}),getters:{},actions:{async verifyOtpCode(e,a){const t=(0,n.gql)(u||(u=d`
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
    `)),s={otpCode:parseInt(e)};await r.graphQLClient.request(t,s).then((e=>{this.user=e.verifyOtpCode.user,this.authToken=e.verifyOtpCode.token,i.Z.create({message:"Vérification réussir."}),l.Z.set("authToken",e.verifyOtpCode.token,{expires:"1d"}),a.replace({name:"users/account"})})).catch((e=>{console.error(e),o.Z.create({message:"Code OTP invalide.",ok:{color:"primary"}})}))},userSignIn(e,a){const t=(0,n.gql)(m||(m=d`
        mutation userSignIn($email: String!) {
          userSignIn(email: $email) {
            id
            type
          }
        }
      `)),s={email:e.email};r.graphQLClient.request(t,s).then((e=>{o.Z.create({title:"",message:"Entrez le code de vérification à 4 chiffres envoyé à votre adresse e-mail pour confirmer votre identité, (Code à 4 chiffres).",prompt:{model:"",isValid:e=>4===e.length,type:"text"},ok:{color:"primary"},cancel:{label:"Annuler",color:"grey"},persistent:!0}).onOk((e=>{this.verifyOtpCode(e,a)}))})).catch((e=>{console.error(e),o.Z.create({message:e.response.errors[0].message,ok:{color:"primary"}})}))},userSignUp(e,a){var t,s;const l=(0,n.gql)(c||(c=d`
      mutation userSignUp($email: String!, $agencyName: String, $fullName: String, $userType: String!) {
        userSignUp(email: $email, agencyName: $agencyName, fullName: $fullName, userType: $userType) {
          id
          type
        }
      }
    `)),i={email:e.email,agencyName:null!==(t=e.agencyName)&&void 0!==t?t:null,fullName:null!==(s=e.fullName)&&void 0!==s?s:null,userType:e.type};r.graphQLClient.request(l,i).then((e=>{o.Z.create({title:"",message:"Inscription réussir. Entrez le code de vérification à 4 chiffres envoyé à votre adresse e-mail pour valider votre inscription.",prompt:{model:"",type:"text"},ok:{color:"primary"},persistent:!0}).onOk((e=>{this.verifyOtpCode(e,a)}))})).catch((e=>{console.error(e),o.Z.create({message:e.response.errors[0].message,ok:{color:"primary"}})}))},userSignOut(e){o.Z.create({message:"Êtes-vous sûr de vouloir vous déconnecté.",ok:{label:"Oui",color:"primary"},cancel:"Annuler",persistent:!0}).onOk((()=>{this.user={},this.authToken=null,l.Z.remove("authToken"),i.Z.create({message:"Déconnexion réussie."}),e.replace({name:"users/signin"})}))}}})},4071:(e,a,t)=>{t.r(a),t.d(a,{default:()=>S});var s=t(5455),n=t(7667),r=t(472),l=t(7489),o=t(5493),i=t(935),u=t(3869),m=t(1863),c=t(9898),d=t(4252),p=t(5561),f=t(3501),g=t(8108),w=t(9811),k=t(2949),y=t(9410),h=t(7619),v=t(6520),_=t(5310),W=t(869),b=t(3903),q=t(7518),Z=t.n(q);const S=s.Z;Z()(s.Z,"components",{QLayout:n.Z,QHeader:r.Z,QToolbar:l.Z,QBtn:o.Z,QToolbarTitle:i.Z,QTabs:u.Z,QRouteTab:m.Z,QDrawer:c.Z,QScrollArea:d.Z,QList:p.Z,QItemLabel:f.Z,QItem:g.Z,QItemSection:w.Z,QIcon:k.Z,QSeparator:y.Z,QImg:h.Z,QAvatar:v.Z,QPageContainer:_.Z,QFooter:W.Z}),Z()(s.Z,"directives",{Ripple:b.Z})},5455:(e,a,t)=>{t.d(a,{Z:()=>s.Z});var s=t(1659)}}]);