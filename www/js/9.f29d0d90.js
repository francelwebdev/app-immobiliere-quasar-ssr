"use strict";(self["webpackChunkquasar_application"]=self["webpackChunkquasar_application"]||[]).push([[9],{989:(e,t,s)=>{s.d(t,{Z:()=>C});var r=s(3673),o=s(1959),a=s(2323),i=s(9463),l=s(9582),n=s(515);const p=(0,r._)("p",{class:""},"Trouvez un bien immobilier",-1),c={key:0},d=(0,r._)("img",{src:""},null,-1),u={class:"row"},m={class:"col-12 row justify-between items-center"},g={key:0,class:"text-primary text-h5 text-bold q-mb-none"},y=(0,r._)("sup",null,"F/mois",-1),w={key:1,class:"text-primary text-h5 text-bold q-mb-none"},b=(0,r._)("sup",null,"F",-1),k=(0,r.Uk)("A louer"),q=(0,r.Uk)("A vendre"),h={class:"col-12 text-grey q-my-xs"},v=(0,r._)("span",{class:"q-pl-sm text-subtitle2"},"Chambre salon",-1),_={class:"col-12 text-grey q-my-xs"},x=(0,r._)("span",{class:"q-pl-sm text-subtitle2"},"Cotonou",-1),f={key:1},C={setup(e){(0,i.Z)(),(0,l.yj)(),(0,l.tv)();const t=(0,n.y)(),s=()=>t.getProperties();return s(),(0,r.bv)((()=>{})),(e,s)=>{const i=(0,r.up)("q-badge"),l=(0,r.up)("q-icon"),n=(0,r.up)("q-card-section"),C=(0,r.up)("q-card"),Z=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(Z,{padding:""},{default:(0,r.w5)((()=>{var s;return[(0,r._)("div",null,[p,(null===(s=(0,o.SU)(t).properties)||void 0===s?void 0:s.length)>0?((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(C,{class:"my-card q-mb-md",clickable:"",to:{name:"ads/show",params:{id:e.property.id}}},{default:(0,r.w5)((()=>[d,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,o.SU)(t).properties,(e=>((0,r.wg)(),(0,r.j4)(n,{key:e.id},{default:(0,r.w5)((()=>[(0,r._)("div",u,[(0,r._)("div",m,[e.isForRent?((0,r.wg)(),(0,r.iD)("p",g,[(0,r.Uk)((0,a.zw)(e.price),1),y])):e.isForSale?((0,r.wg)(),(0,r.iD)("p",w,[(0,r.Uk)((0,a.zw)(e.price),1),b])):(0,r.kq)("",!0),e.isForRent?((0,r.wg)(),(0,r.j4)(i,{key:2,color:"primary text-subtitle2 self-end"},{default:(0,r.w5)((()=>[k])),_:1})):e.isForSale?((0,r.wg)(),(0,r.j4)(i,{key:3,color:"primary text-subtitle2 self-end"},{default:(0,r.w5)((()=>[q])),_:1})):(0,r.kq)("",!0)]),(0,r._)("div",h,[(0,r.Wm)(l,{name:"home",style:{"font-size":"1.5em"}}),v]),(0,r._)("div",_,[(0,r.Wm)(l,{name:"place",style:{"font-size":"1.5em"}}),x])])])),_:2},1024)))),128))])),_:1},8,["to"])])):((0,r.wg)(),(0,r.iD)("div",f," Aucun bien immobilier n'est encore publier. "))])]})),_:1})}}}},515:(e,t,s)=>{s.d(t,{y:()=>p});s(5363);var r=s(8608),o=s(3828),a=s(6469);s(4889);let i,l,n=e=>e;const p=(0,r.Q_)("properties",{state:()=>({properties:[]}),getters:{},actions:{getProperties(){const e=(0,o.gql)(i||(i=n`
        query getProperties {
          getProperties {
            id
          }
        }
      `));a.graphQLClient.request(e).then((e=>{this.properties=e.getProperties})).catch((e=>{console.log(e),this.properties=[]}))},async addProperty(e,t){console.log(t);const s=(0,o.gql)(l||(l=n`
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
    `)),r={};await a.graphQLClient.request(s,r).then((e=>{console.log(e),this.properties.push(e),Dialog.create({message:"Le biens a ajouté avec succès.",ok:{color:"primary"},persistent:!0}).onOk((()=>{router.replace({name:"ads/show",params:{id:e.id}})}))})).catch((e=>{console.error(e),Dialog.create({message:"Code OTP invalide.",ok:{color:"primary"}})}))}}})},2009:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var r=s(874),o=s(9549),a=s(7338),i=s(418),l=s(4751),n=s(2949),p=s(5493),c=s(7518),d=s.n(c);const u=r.Z;d()(r.Z,"components",{QPage:o.Z,QCard:a.Z,QCardSection:i.Z,QBadge:l.Z,QIcon:n.Z,QBtn:p.Z})},874:(e,t,s)=>{s.d(t,{Z:()=>r.Z});var r=s(989)}}]);