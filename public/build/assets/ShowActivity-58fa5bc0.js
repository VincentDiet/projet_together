import{h as L,a as Z,_ as k}from"./activityStore-0c131dd7.js";import{L as V,S as B}from"./Loader-1bc2a685.js";import{d as g,s as j,m as n,o as h,c as z,w as C,e as m,b as f,f as H,a as t,t as s,g as v,u as N,h as D,F as R}from"./app-44b725da.js";import"./ResponsiveNavLink-01d61fc7.js";import"./_plugin-vue_export-helper-c27b6911.js";const w=(e,a)=>{const c=L(e);return c.locale("fr"),c.format(a)},S={key:0,class:"fixed w-full h-screen flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-together-cyan-light to-together-cyan-dark z-50"},I={class:"relative -mx-8 -mt-10 bg-black h-96 w-screen"},F={class:"z-10 w-screen absolute h-16 bg-opacity-25 text-zinc-900 bg-black flex items-center justify-between px-4"},P=["href"],O=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-7 h-7 text-white",viewBox:"0 0 24 24"},[v(" > "),t("path",{fill:"currentColor",d:"m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"})],-1),A=[O],E=t("div",{class:"flex items-center"},[t("div",{class:"bg-white p-2 rounded-full"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Zm2-3.05l5-2.15l5 2.15V5H7v12.95ZM7 5h10H7Z"})])]),t("div",{class:"bg-white p-2 rounded-full m-3"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v4h-2V9h-5V4H6v16h6v2H6Zm0-2V4v16Zm12.3-5.475l1.075 1.075l-3.875 3.85v1.05h1.05l3.875-3.85l1.05 1.05l-4.3 4.3H14v-3.175l4.3-4.3Zm3.175 3.175L18.3 14.525l1.45-1.45q.275-.275.7-.275t.7.275l1.775 1.775q.275.275.275.7t-.275.7l-1.45 1.45Z"})])])],-1),K={class:"absolute z-10 bottom-0 mx-6 my-4"},$={class:"font-bold text-xl pl-2 mb-1"},G={class:"py-1 px-2 bg-white text-together-green font-bold w-auto rounded-lg text-sm inline-flex items-center"},J=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 mr-1",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"})],-1),Q=["src"],U={class:"w-screen h-16 bg-together-blue -mx-8 px-8 flex items-center justify-between"},W={class:"capitalize font-bold"},X={class:"font-bold text-together-blue bg-white py-0.5 px-3 rounded-lg text-sm"},Y={class:"mt-12"},tt={class:"text-xl font-bold"},et={class:"py-4"},st={class:"flex items-center text-sm mt-10 mb-5"},at=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 mr-2 text-together-green",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"})],-1),ot=t("div",{class:"w-full h-36 bg-white flex items-center justify-center text-gray-900 rounded-xl uppercase"}," Map here ",-1),it={class:"my-12"},lt=t("p",null,"Organisé par :",-1),ct=["src"],nt={class:"font-bold"},rt={class:"flex flex-wrap"},dt=["src"],ht=t("div",{class:"bg-together-green text-white font-bold rounded-full py-1.5 mt-3 px-8 inline-block mt-8"}," S'inscrire ",-1),xt={__name:"ShowActivity",props:{activity:Object},setup(e){const a=e,c=g(!0),u=Z(),r=g({latitude:null,longitude:null});j(async()=>{await u.fetchCoords(),r.value.latitude=u.coords.latitude,r.value.longitude=u.coords.longitude,c.value=!1});const x=n(()=>a.activity.images.length===0?"https://via.placeholder.com/400":a.activity.images[0].url),y=n(()=>w(a.activity.start_datetime,"DD MMMM")),_=n(()=>w(a.activity.start_datetime,"DD MMMM, à HH[h]MM")),b=n(()=>{const d=Number(r.value.latitude)*(Math.PI/180),o=Number(r.value.longitude)*(Math.PI/180),i=Number(a.activity.latitude)*(Math.PI/180),q=Number(a.activity.longitude)*(Math.PI/180),M=i-d,T=q-o;return(2*6371*Math.asin(Math.sqrt(Math.pow(Math.sin(M/2),2)+Math.cos(d)*Math.cos(i)*Math.pow(Math.sin(T/2),2)))).toFixed(1)}),p=n(()=>{const l=a.activity.author.activities.flatMap(o=>o.participations.filter(i=>i.organizator_note).map(i=>i.organizator_note));return l.length?l.reduce((o,i)=>o+i)/l.length:0});return(l,d)=>(h(),z(k,{title:e.activity.title,class:"bg-gradient-to-b from-together-cyan-light to-together-cyan-dark"},{default:C(()=>[c.value?(h(),m("div",S,[f(V)])):H("",!0),t("section",I,[t("div",F,[t("div",null,[t("a",{href:l.route("dashboard")},A,8,P)]),E]),t("div",K,[t("h1",$,s(e.activity.title),1),t("div",G,[J,v(" "+s(e.activity.city)+", à "+s(b.value)+" Km ",1)])]),t("img",{src:x.value,alt:"",class:"absolute object-cover h-96 w-screen"},null,8,Q)]),t("div",U,[t("div",W,s(y.value),1),t("div",X,s(e.activity.category.name),1)]),t("section",Y,[t("h2",tt,s(e.activity.title),1),t("p",et,s(_.value),1),t("p",null,s(e.activity.description),1),t("div",st,[at,t("div",null,[t("p",null,s(e.activity.adress),1),t("p",null,s(e.activity.city),1)])]),ot,t("section",it,[lt,t("img",{src:e.activity.author.profile_photo_path,alt:"",class:"rounded-full w-14 h-14 ml-2 m-4 object-cover"},null,8,ct),t("span",nt,s(e.activity.author.firstname)+" "+s(e.activity.author.lastname),1),f(N(B),{rating:p.value,"star-size":15,"show-rating":!1},null,8,["rating"])]),t("section",null,[v(s(e.activity.participations.length)+"/"+s(e.activity.max_participants)+" participants ",1),t("div",rt,[(h(!0),m(R,null,D(e.activity.participations,o=>(h(),m("img",{key:o.id,src:o.participant.profile_photo_path,alt:"",class:"rounded-full w-10 h-10 m-2 shadow-lg object-cover"},null,8,dt))),128))])]),ht])]),_:1},8,["title"]))}};export{xt as default};