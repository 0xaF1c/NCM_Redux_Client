import{ah as y,d as w,b4 as T,r as c,b0 as k,e as P,aJ as x,an as C,ao as D,at as b,ae as B,ap as M,ai as S}from"./index-7904e8ad.js";import{p as V,f as q}from"./formatPlaylist-9c206ac5.js";import{u as H}from"./use-loading-bar-43e6022e.js";import"./musicLikeBtn.vue_vue_type_script_setup_true_lang-a46553f4.js";import"./Ellipsis-c692ea86.js";import"./PageHeader-e12a2bfa.js";import"./text-4eec9490.js";import"./Grid-c77da12a.js";const I=t=>y.get("/playlist/detail",{params:{id:t}}),N=(t,i,l)=>y.get("/playlist/track/all",{params:{id:t,limit:i,offset:l,timerstamp:Date.now()}});function R(t){const{id:i,name:l,coverImgUrl:u,userId:p,createTime:m,playCount:n,trackCount:e,tags:s,description:r}=t.playlist;return{id:i,name:l,coverImgUrl:u,userId:p,createTime:m,playCount:n,trackCount:e,tags:s,description:r}}const G=w({__name:"playlistDetailView",emits:["update:exportPlaylist"],setup(t,{emit:i}){const l=T(),{start:u,finish:p,error:m}=H(),n=c(),e=c(),s=c(),r=c(20),{run:f,data:v,loading:g}=k(N,{onSuccess(){var a;e.value=q((a=v.value)==null?void 0:a.data.songs),s.value=e.value.slice(0,r.value)}}),d=()=>{const a=window.location.hash.split("?id=")[1];u(),I(a).then(o=>{n.value=R(o.data),setTimeout(()=>{p(),f(a)})}).catch(()=>{setTimeout(()=>{m()})})};P(()=>l.query,()=>{d()}),x(()=>{d()});const h=a=>a.scrollHeight-a.clientHeight,_=a=>{var o;((o=a.currentTarget)==null?void 0:o.scrollTop)==h(a.currentTarget)&&g.value==!1&&(r.value+=10,s.value=e.value.slice(0,r.value))};return(a,o)=>(B(),C(b(S),{"on-scroll":_},{default:D(()=>[M(V,{"all-playlist":e.value,"render-playlist":s.value,"playlist-matadata":n.value},null,8,["all-playlist","render-playlist","playlist-matadata"])]),_:1}))}});export{G as default};
