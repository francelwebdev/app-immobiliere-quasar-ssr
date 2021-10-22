"use strict";(self["webpackChunkquasar_application"]=self["webpackChunkquasar_application"]||[]).push([[703],{4737:(e,a,t)=>{t.d(a,{Z:()=>v});var i=t(3673),n=t(1959),l=t(2323),s=t(9463),u=t(9582),c=t(4108);const o={key:0},r=(0,i.Uk)("Trouvez une agence immobilière"),d=(0,i._)("img",{src:""},null,-1),g={class:"q-mt-sm"},m=(0,i.Uk)(" Fifadji - Cotonou "),p={key:1},v={setup(e){(0,s.Z)(),(0,u.yj)(),(0,u.tv)();const a=(0,c.n)(),t=(0,n.iH)(3),v=()=>a.getAgencies();return v(),(e,s)=>{const u=(0,i.up)("q-item-label"),c=(0,i.up)("q-avatar"),v=(0,i.up)("q-item-section"),w=(0,i.up)("q-icon"),q=(0,i.up)("q-rating"),Z=(0,i.up)("q-item"),_=(0,i.up)("q-separator"),h=(0,i.up)("q-list"),f=(0,i.up)("q-page"),Q=(0,i.Q2)("ripple");return(0,i.wg)(),(0,i.j4)(f,{padding:""},{default:(0,i.w5)((()=>{var e;return[(0,i._)("div",null,[(null===(e=(0,n.SU)(a).agencies)||void 0===e?void 0:e.length)>0?((0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{header:""},{default:(0,i.w5)((()=>[r])),_:1}),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,n.SU)(a).agencies,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i.wy)((0,i.Wm)(Z,{clickable:"",to:{name:"agencies/show",params:{id:e.id}}},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{top:"",avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{rounded:""},{default:(0,i.w5)((()=>[d])),_:1})])),_:1}),(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.name),1)])),_:2},1024),(0,i.Wm)(u,{caption:""},{default:(0,i.w5)((()=>[(0,i._)("p",g,[(0,i.Wm)(w,{name:"map"}),m]),(0,i.Wm)(q,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=e=>t.value=e),size:"1.5em",color:"primary",readonly:""},null,8,["modelValue"])])),_:1})])),_:2},1024)])),_:2},1032,["to"]),[[Q]]),(0,i.Wm)(_,{spaced:"",inset:"item"})])))),128))])),_:1})])):((0,i.wg)(),(0,i.iD)("div",p," Aucune agence immobilière n'est encore disponible. "))])]})),_:1})}}}},4108:(e,a,t)=>{t.d(a,{n:()=>o});var i=t(8608),n=t(3828),l=t(6469);t(4889);let s,u,c=e=>e;const o=(0,i.Q_)("agencies",{state:()=>({agencies:[]}),getters:{},actions:{getAgencies(){const e=(0,n.gql)(s||(s=c`
        query getAgencies {
          getAgencies {
            id
            name
            user {
              id
            }
          }
        }
      `));l.graphQLClient.request(e).then((e=>{this.agencies=e.getAgencies})).catch((e=>{console.log(e),this.agencies=[]}))},getAgency(e){const a=(0,n.gql)(u||(u=c`
        query getAgency($id: ID!) {
          getAgency(id: $id) {
            id
            name
          }
        }
      `)),t={id:e};l.graphQLClient.request(a,t).then((e=>{})).catch((e=>{console.log(e)}))}}})},3703:(e,a,t)=>{t.r(a),t.d(a,{default:()=>w});var i=t(4991),n=t(9549),l=t(5561),s=t(3501),u=t(8108),c=t(9811),o=t(6520),r=t(2949),d=t(2111),g=t(9410),m=t(3903),p=t(7518),v=t.n(p);const w=i.Z;v()(i.Z,"components",{QPage:n.Z,QList:l.Z,QItemLabel:s.Z,QItem:u.Z,QItemSection:c.Z,QAvatar:o.Z,QIcon:r.Z,QRating:d.Z,QSeparator:g.Z}),v()(i.Z,"directives",{Ripple:m.Z})},4991:(e,a,t)=>{t.d(a,{Z:()=>i.Z});var i=t(4737)}}]);