"use strict";(self["webpackChunkquasar_application"]=self["webpackChunkquasar_application"]||[]).push([[678],{8739:(e,l,a)=>{a.d(l,{Z:()=>S});a(246);var o=a(3673),u=a(8880),r=a(1959),n=a(9463),i=a(9582),t=a(515);const s=(0,o._)("p",{class:"q-mb-none"},"Quel type d'offre souhaitez-vous publier ? *",-1),p={key:0},d=(0,o._)("p",{class:"q-mb-none"},"Le prix est négociable ? *",-1),m={key:1},c=(0,o._)("p",{class:"q-mb-none"},"Quel est l'état actuel du logement ? *",-1),v={key:2},b=(0,o._)("p",{class:"q-mb-none"},"Quel documents sont disponibles ? *",-1),g={class:"flex justify-between"},f={key:0},V=(0,o.Uk)(" Vous pouvez choisir plusieurs photos à la fois. "),y={key:1},U=(0,o.Uk)(" Vous pouvez choisir plusieurs photos à la fois. "),q={class:"flex justify-between"},S={setup(e){const l=(0,n.Z)(),a=((0,i.yj)(),(0,i.tv)(),(0,t.y)()),S=((0,r.iH)(!0),(0,r.iH)(1)),h=(0,r.iH)("Vente"),k=(0,r.qj)({propertyType:null,priceForSale:null,area:null,description:null,city:null,quartier:null,availableDocuments:["Convention de vente"],priceIsNegociable:"Non",propertyImages:null}),D=(0,r.qj)({propertyType:null,priceForRent:null,area:null,description:null,city:null,quartier:null,advanceCount:null,etatDuBien:null,propertyImages:null}),W=(0,r.iH)(["Entrée couché ordinaire","Entrée couché sanitaire","Chambre salon ordinaire","Chambre salon sanitaire","Boutique","Magasin","Appartement meublé","Appartement non meublé","Bureau","Maison","Villa","Immeuble"]),C=(0,r.iH)(["Immeuble","Bâtiment","Maison","Villa","Parcelle","Terrain","Domaine"]),w=[{label:"Convention de vente",value:"Convention de vente"},{label:"Titre foncier",value:"Titre foncier"},{label:"Plan",value:"Plan"},{label:"Attestation/reçu de recasement",value:"Attestation/reçu de recasement"}],Q=[{label:"Nouvelle construction",value:"Nouvelle construction"},{label:"Déja habité une fois",value:"Déja habité une fois"}],Z=(0,r.iH)(["Abomey","Abomey-Calavi","Adja-Ouèrè","Adjarra","Adjohoun","Agbangnizoun","Aguégués","Akpro-Missérété","Allada","Aplahoué","Athiémé","Avrankou","Banikoara","Bantè","Bassila","Bembéréké","Bohicon","Bonou","Bopa","Boukoumbé","Cobly","Comè","Copargo","Cotonou","Covè","Dangbo","Dassa-Zoumè","Djakotomey","Djidja","Djougou","Dogbo","Glazoué","Gogounou","Grand-Popo","Houéyogbé","Ifangni","Kalalé","Kandi","Karimama","Klouékanmè","Kouandé","Kpomassè","Kérou","Kétou","Lalo","Lokossa","Malanville","Matéri","N'Dali","Natitingou","Nikki","Ouaké","Ouidah","Ouinhi","Ouèssè","Parakou","Pehonko","Pobè","Porto-Novo","Pèrèrè","Sakété","Savalou","Savè","Segbana","Sinendé","Sèmè-Kpodji","Sô-Ava","Tanguiéta","Tchaourou","Toffo","Tori-Bossito","Toucountouna","Toviklin","Za-Kpota","Zagnanado","Zogbodomey","Zè"]),_=(0,r.iH)(null),A=(0,r.iH)(null),L=(0,r.iH)(null),I=(0,r.iH)(null),$=(0,r.iH)(null),B=()=>{_.value.validate(),A.value.validate(),L.value.validate(),I.value.validate(),$.value.validate(),_.value.hasError||A.value.hasError||L.value.hasError||I.value.hasError||$.value.hasError?l.notify({color:"negative",message:"Le formulaire contient des erreurs."}):S.value+=1},P=()=>{a.addProperty(h.value,"Vente"===h.value?k.value:D.value)};return(e,l)=>{const a=(0,o.up)("q-radio"),n=(0,o.up)("q-select"),i=(0,o.up)("q-input"),t=(0,o.up)("q-option-group"),j=(0,o.up)("q-btn"),x=(0,o.up)("q-stepper-navigation"),T=(0,o.up)("q-step"),N=(0,o.up)("q-icon"),z=(0,o.up)("q-file"),E=(0,o.up)("q-stepper"),H=(0,o.up)("q-form"),M=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(M,{padding:""},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Wm)(H,{onSubmit:l[25]||(l[25]=(0,u.iM)((e=>P()),["prevent","stop"]))},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{ref:(e,l)=>{l["stepper"]=e},modelValue:S.value,"onUpdate:modelValue":l[24]||(l[24]=e=>S.value=e),color:"primary",animated:"","alternative-labels":""},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{name:1,prefix:"1",title:"Informations générales",done:S.value>1},{default:(0,o.w5)((()=>[(0,o._)("div",null,[s,(0,o.Wm)(a,{modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=e=>h.value=e),val:"Location",label:"Location"},null,8,["modelValue"]),(0,o.Wm)(a,{modelValue:h.value,"onUpdate:modelValue":l[1]||(l[1]=e=>h.value=e),val:"Vente",label:"Vente"},null,8,["modelValue"])]),"Vente"==h.value?((0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)(n,{ref:(e,l)=>{l["refTypeDeBien"]=e,_.value=e},modelValue:(0,r.SU)(k).propertyType,"onUpdate:modelValue":l[2]||(l[2]=e=>(0,r.SU)(k).propertyType=e),options:C.value,label:"Quel type de bien voulez-vous vendre ? *",rules:[e.$rules.required("Le type de bien a vendre doit être renseigné.")]},null,8,["modelValue","options","rules"]),(0,o.Wm)(i,{ref:(e,l)=>{l["refSurfaceDeBien"]=e,A.value=e},type:"number",min:"1",suffix:"M²",modelValue:(0,r.SU)(k).surface,"onUpdate:modelValue":l[3]||(l[3]=e=>(0,r.SU)(k).surface=e),label:"Quel est la surface/superficie du bien ? *",placeholder:"Exemple: 500",rules:[e.$rules.required("La surface/superficie du bien a vendre doit être renseigné."),e.$rules.numeric("Seul un nombre positive doit être renseigné.")]},null,8,["modelValue","rules"]),(0,o.Wm)(i,{suffix:"FCFA",modelValue:(0,r.SU)(k).price,"onUpdate:modelValue":l[4]||(l[4]=e=>(0,r.SU)(k).price=e),label:"À combien voulez-vous vendre le bien ? *",rules:[e.$rules.required("Le prix de vente doit être renseigné."),e.$rules.numeric("Seul un nombre doit être renseigné.")]},null,8,["modelValue","rules"]),(0,o._)("div",null,[d,(0,o.Wm)(a,{modelValue:(0,r.SU)(k).priceIsNegociable,"onUpdate:modelValue":l[5]||(l[5]=e=>(0,r.SU)(k).priceIsNegociable=e),val:"Oui",label:"Oui"},null,8,["modelValue"]),(0,o.Wm)(a,{modelValue:(0,r.SU)(k).priceIsNegociable,"onUpdate:modelValue":l[6]||(l[6]=e=>(0,r.SU)(k).priceIsNegociable=e),val:"Non",label:"Non"},null,8,["modelValue"])]),(0,o.Wm)(n,{ref:(e,l)=>{l["refVille"]=e,L.value=e},modelValue:(0,r.SU)(k).city,"onUpdate:modelValue":l[7]||(l[7]=e=>(0,r.SU)(k).city=e),options:Z.value,label:"Dans quel ville/commune se trouve le bien ? *",rules:[e.$rules.required("La ville dans lequel le bien se trouve doit être renseigné.")]},null,8,["modelValue","options","rules"]),(0,o.Wm)(i,{ref:(e,l)=>{l["refQuartier"]=e,I.value=e},modelValue:(0,r.SU)(k).quartier,"onUpdate:modelValue":l[8]||(l[8]=e=>(0,r.SU)(k).quartier=e),label:"Dans quel Quartier se trouve le bien ? *",placeholder:"Exemple : Agla/Zogbo/Fifadji/Akpakpa (pour la ville de Cotonou)",rules:[e.$rules.required("Le nom du quartier doit être renseigné.")]},null,8,["modelValue","rules"]),(0,o.Wm)(i,{ref:(e,l)=>{l["refDescription"]=e,$.value=e},modelValue:(0,r.SU)(k).description,"onUpdate:modelValue":l[9]||(l[9]=e=>(0,r.SU)(k).description=e),label:"Description *",placeholder:"Veuillez décire votre bien en quelques mots.",autogrow:"",rules:[e.$rules.required("La description du bien doit être renseigné.")]},null,8,["modelValue","rules"])])):(0,o.kq)("",!0),"Location"==h.value?((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(n,{ref:(e,l)=>{l["refTypeDeBien"]=e,_.value=e},modelValue:(0,r.SU)(D).propertyType,"onUpdate:modelValue":l[10]||(l[10]=e=>(0,r.SU)(D).propertyType=e),options:W.value,label:"Quel type de bien voulez-vous louer ? *",rules:[e.$rules.required("Le type de bien a louer doit être renseigné.")]},null,8,["modelValue","options","rules"]),(0,o.Wm)(i,{ref:(e,l)=>{l["refSurfaceDeBien"]=e,A.value=e},type:"number",min:"1",suffix:"M²",modelValue:(0,r.SU)(D).surface,"onUpdate:modelValue":l[11]||(l[11]=e=>(0,r.SU)(D).surface=e),label:"Quel est la surface/superficie du bien ?",placeholder:"Exemple: 30",rules:[e.$rules.numeric("Seul un nombre positive doit être renseigné.")]},null,8,["modelValue","rules"]),(0,o.Wm)(i,{suffix:"francs par mois",modelValue:(0,r.SU)(D).price,"onUpdate:modelValue":l[12]||(l[12]=e=>(0,r.SU)(D).price=e),label:"À combien voulez-vous louer le bien par mois ? *",rules:[e.$rules.required("Le prix de location doit être renseigné."),e.$rules.numeric("Seul un nombre doit être renseigné.")]},null,8,["modelValue","rules"]),(0,o.Wm)(i,{suffix:"mois de loyer",modelValue:(0,r.SU)(D).advance,"onUpdate:modelValue":l[13]||(l[13]=e=>(0,r.SU)(D).advance=e),type:"number",min:"1",placeholder:"Exemple: 3",label:"Combien d'avance demandez-vous ? *",rules:[e.$rules.required("Le nombre de caution doit être renseigné."),e.$rules.numeric("Seul un nombre doit être renseigné."),e.$rules.minValue(1)]},null,8,["modelValue","rules"]),(0,o._)("div",null,[c,(0,o.Wm)(t,{options:Q,type:"radio",modelValue:(0,r.SU)(D).etatDuBien,"onUpdate:modelValue":l[14]||(l[14]=e=>(0,r.SU)(D).etatDuBien=e),rules:[e.$rules.required("L'état actuel du bien doit être renseigné.")]},null,8,["modelValue","rules"])]),(0,o.Wm)(n,{ref:(e,l)=>{l["refVille"]=e,L.value=e},modelValue:(0,r.SU)(D).city,"onUpdate:modelValue":l[15]||(l[15]=e=>(0,r.SU)(D).city=e),options:Z.value,label:"Dans quel ville/commune se trouve le bien ? *",rules:[e.$rules.required("La ville dans lequel le bien se trouve doit être renseigné.")]},null,8,["modelValue","options","rules"]),(0,o.Wm)(i,{ref:(e,l)=>{l["refQuartier"]=e,I.value=e},modelValue:(0,r.SU)(D).quartier,"onUpdate:modelValue":l[16]||(l[16]=e=>(0,r.SU)(D).quartier=e),label:"Dans quel Quartier se trouve le bien ? *",placeholder:"Exemple : Agla/Zogbo/Fifadji/Akpakpa (pour la ville de Cotonou)",rules:[e.$rules.required("Le nom du quartier doit être renseigné.")]},null,8,["modelValue","rules"]),(0,o.Wm)(i,{ref:(e,l)=>{l["refDescription"]=e,$.value=e},modelValue:(0,r.SU)(D).description,"onUpdate:modelValue":l[17]||(l[17]=e=>(0,r.SU)(D).description=e),label:"Description *",placeholder:"Veuillez décire votre bien en quelques mots.",autogrow:"",rules:[e.$rules.required("La description du bien doit être renseigné.")]},null,8,["modelValue","rules"])])):(0,o.kq)("",!0),"Vente"==h.value?((0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",null,[b,(0,o.Wm)(t,{options:w,type:"checkbox",modelValue:(0,r.SU)(k).availableDocuments,"onUpdate:modelValue":l[18]||(l[18]=e=>(0,r.SU)(k).availableDocuments=e),rules:[e.$rules.required("Veuillez renseigné le/les document(s) disponible.")]},null,8,["modelValue","rules"])])])):(0,o.kq)("",!0),(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[(0,o._)("div",g,[(0,o.Wm)(j,{onClick:B,color:"primary",label:"Aller à l'étape 2"})])])),_:1})])),_:1},8,["done"]),(0,o.Wm)(T,{name:2,prefix:"2",title:"Photos",done:S.value>2},{default:(0,o.w5)((()=>["Vente"==h.value?((0,o.wg)(),(0,o.iD)("div",f,[(0,o.Wm)(z,{modelValue:(0,r.SU)(k).propertyImages,"onUpdate:modelValue":l[20]||(l[20]=e=>(0,r.SU)(k).propertyImages=e),label:"Sélectionner les photos",multiple:"",counter:"","use-chips":""},(0,o.Nv)({prepend:(0,o.w5)((()=>[(0,o.Wm)(N,{name:"attach_file"})])),hint:(0,o.w5)((()=>[V])),_:2},[(0,r.SU)(k).propertyImages?{name:"append",fn:(0,o.w5)((()=>[(0,o.Wm)(N,{name:"cancel",onClick:l[19]||(l[19]=(0,u.iM)((l=>e.lesChampsCommuns.propertyImages=null),["stop","prevent"])),class:"cursor-pointer"})]))}:void 0]),1032,["modelValue"])])):(0,o.kq)("",!0),"Location"==h.value?((0,o.wg)(),(0,o.iD)("div",y,[(0,o.Wm)(z,{modelValue:(0,r.SU)(D).propertyImages,"onUpdate:modelValue":l[22]||(l[22]=e=>(0,r.SU)(D).propertyImages=e),label:"Sélectionner les photos",multiple:"",counter:"","use-chips":""},(0,o.Nv)({prepend:(0,o.w5)((()=>[(0,o.Wm)(N,{name:"attach_file"})])),hint:(0,o.w5)((()=>[U])),_:2},[(0,r.SU)(D).propertyImages?{name:"append",fn:(0,o.w5)((()=>[(0,o.Wm)(N,{name:"cancel",onClick:l[21]||(l[21]=(0,u.iM)((l=>e.lesChampsCommuns.propertyImages=null),["stop","prevent"])),class:"cursor-pointer"})]))}:void 0]),1032,["modelValue"])])):(0,o.kq)("",!0),(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[(0,o._)("div",q,[(0,o.Wm)(j,{flat:"",onClick:l[23]||(l[23]=e=>S.value=1),color:"primary",label:"Aller à l'étape précédente"}),(0,o.Wm)(j,{color:"primary",label:"Soumettre",type:"submit"})])])),_:1})])),_:1},8,["done"])])),_:1},8,["modelValue"])])),_:1})])])),_:1})}}}},515:(e,l,a)=>{a.d(l,{y:()=>s});a(5363);var o=a(8608),u=a(3828),r=a(6469);a(4889);let n,i,t=e=>e;const s=(0,o.Q_)("properties",{state:()=>({properties:[]}),getters:{},actions:{getProperties(){const e=(0,u.gql)(n||(n=t`
        query getProperties {
          getProperties {
            id
          }
        }
      `));r.graphQLClient.request(e).then((e=>{this.properties=e.getProperties})).catch((e=>{console.log(e),this.properties=[]}))},async addProperty(e,l){console.log(l);const a=(0,u.gql)(i||(i=t`
      mutation addProperty($otpCode: Int!) {
        addProperty(otpCode: $otpCode) {
          id
          type
          agency {
            id
            name
          }
        }
      }
    `)),o={};await r.graphQLClient.request(a,o).then((e=>{console.log(e),this.properties.push(e),Dialog.create({message:"Le biens a ajouté avec succès.",ok:{color:"primary"},persistent:!0}).onOk((()=>{router.replace({name:"ads/show",params:{id:e.id}})}))})).catch((e=>{console.error(e),Dialog.create({message:"Code OTP invalide.",ok:{color:"primary"}})}))}}})},7678:(e,l,a)=>{a.r(l),a.d(l,{default:()=>V});var o=a(6328),u=a(9549),r=a(1961),n=a(607),i=a(4726),t=a(1469),s=a(638),p=a(706),d=a(1301),m=a(456),c=a(5493),v=a(9551),b=a(2949),g=a(7518),f=a.n(g);const V=o.Z;f()(o.Z,"components",{QPage:u.Z,QForm:r.Z,QStepper:n.Z,QStep:i.Z,QRadio:t.Z,QSelect:s.Z,QInput:p.Z,QOptionGroup:d.Z,QStepperNavigation:m.Z,QBtn:c.Z,QFile:v.Z,QIcon:b.Z})},6328:(e,l,a)=>{a.d(l,{Z:()=>o.Z});var o=a(8739)}}]);