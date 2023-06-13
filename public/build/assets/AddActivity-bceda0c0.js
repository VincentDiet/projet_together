import{o as d,e as h,a as e,t as p,i as f,c as w,w as _,n as m,b as s,h as x,F as g,j as y,v as Z}from"./app-44b725da.js";import{u as V,_ as q}from"./activityStore-0c131dd7.js";import"./ResponsiveNavLink-01d61fc7.js";const I=["for"],k={class:"font-bold"},L={class:"flex flex-row items-center justify-between rounded-xl border-0 py-1 px-2 w-full bg-together-green-light"},M=["name","placeholder"],C=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 mx-1",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3ZM14.325 9.675l-.7-.7l1.4 1.4l-.7-.7Z"})],-1),a={__name:"Input",props:{name:String,label:String,placeholder:String},emits:["update:modelValue"],setup(i){return(c,r)=>(d(),h("label",{class:"block font-medium text-sm text-gray-700",for:i.name},[e("p",k,p(i.label),1),e("div",L,[e("input",{onInput:r[0]||(r[0]=l=>c.$emit("update:modelValue",l.target.value)),name:i.name,type:"text",placeholder:i.placeholder,class:"p-0 bg-inherit border-0 w-full outline-none focus:border-none focus:ring-0"},null,40,M),C])],8,I))}},B={class:"relative -mx-8 -mt-10 h-16 bg-black/25 w-screen"},H={class:"z-10 w-screen absolute h-16 bg-opacity-25 text-zinc-900 bg-black flex items-center justify-between px-4"},$={class:""},A=["href"],D=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-7 h-7 text-white",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"})],-1),T=[D],j=e("div",{class:"flex items-center"},[e("div",{class:"bg-white p-2 rounded-full"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Zm2-3.05l5-2.15l5 2.15V5H7v12.95ZM7 5h10H7Z"})])]),e("div",{class:"bg-white p-2 rounded-full m-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v4h-2V9h-5V4H6v16h6v2H6Zm0-2V4v16Zm12.3-5.475l1.075 1.075l-3.875 3.85v1.05h1.05l3.875-3.85l1.05 1.05l-4.3 4.3H14v-3.175l4.3-4.3Zm3.175 3.175L18.3 14.525l1.45-1.45q.275-.275.7-.275t.7.275l1.775 1.775q.275.275.275.7t-.275.7l-1.45 1.45Z"})])])],-1),S={class:"flex flex-col gap-4 text-gray-700 pt-8"},N={class:"h-96 overflow-hidden"},P=["src"],z=e("img",{src:"https://www.likeminds.fr/wp-content/uploads/2015/12/Point-dinterrogation-Gris-1.png",alt:"",class:"object-cover h-96"},null,-1),F=e("p",{class:"font-bold text-gray-700 text-sm"},"Catégorie",-1),E={class:"flex gap-2 flex-wrap"},U=["id"],G=["for"],O=["onClick"],R=["for"],J={class:"font-bold"},K=e("p",{class:"font-bold"},"Description",-1),Q={class:"flex flex-row justify-between rounded-xl border-0 py-1 px-2 w-full bg-together-green-light"},W=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 mx-1",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3ZM14.325 9.675l-.7-.7l1.4 1.4l-.7-.7Z"})],-1),le={__name:"AddActivity",props:{categories:Array,user:Object},setup(i){const c=i,r=V(),l=f({author_id:c.user.id}),o=t=>{l[t.target.name]=t.target.value},b=t=>{l.category_id=t},v=async t=>{t.preventDefault(),t.stopPropagation(),t.target.disabled=!0,await r.addActivities(l),t.target.disabled=!1};return(t,u)=>(d(),w(q,{title:"Add an activity",class:"bg-gray-100"},{default:_(()=>[e("section",B,[e("div",H,[e("div",$,[e("a",{href:t.route("dashboard")},T,8,A)]),j])]),e("form",S,[e("div",N,[e("img",{src:l.photo,alt:"",class:m(["object-cover h-96",l.photo?"":"hidden"])},null,10,P),z]),s(a,{onInput:o,label:"Image URL",name:"photo",placeholder:"url"}),s(a,{onInput:o,label:"Titre",name:"title",placeholder:"Nom de l'activité"}),e("div",null,[F,e("div",E,[(d(!0),h(g,null,x(i.categories,n=>(d(),h(g,{key:n.id},[e("input",{type:"radio",id:n.id,name:"category",class:"hidden"},null,8,U),e("label",{for:n.id},[e("div",{class:m(["bg-together-green-light px-1.5 rounded-lg text-gray-600 border border-green-600 text-sm",l.category_id===n.id?"bg-green-500 text-white":""]),onClick:X=>b(n.id)},p(n.name),11,O)],8,G)],64))),128))])]),s(a,{onInput:o,label:"Date de l'activité",name:"date",placeholder:"01/01/2023"}),s(a,{onInput:o,label:"Heure de l'activité",name:"time",placeholder:"10:00"}),s(a,{onInput:o,label:"Durée de l'activité",name:"duration",placeholder:"1"}),s(a,{onInput:o,label:"Nombre de participants",name:"max_participants",placeholder:"5"}),s(a,{onInput:o,label:"Adresse",name:"adress",placeholder:"Adresse de l'activité"}),s(a,{onInput:o,label:"Ville",name:"city",placeholder:"Ville"}),s(a,{onInput:o,label:"Pays",name:"country",placeholder:"Pays"}),e("label",{class:"block font-medium text-sm text-gray-700",for:t.name},[e("p",J,p(t.label),1),K,e("div",Q,[y(e("textarea",{"onUpdate:modelValue":u[0]||(u[0]=n=>l.description=n),name:"descrition",placeholder:"Description",class:"p-0 bg-inherit border-0 w-full outline-none focus:border-none focus:ring-0",rows:"7"},null,512),[[Z,l.description]]),W])],8,R),e("input",{type:"button",value:"Envoyer",class:"bg-green-500 py-2 font-bold text-white rounded-full my-4 disabled:bg-gray-300 disabled:text-gray-200",onClick:v})])]),_:1}))}};export{le as default};