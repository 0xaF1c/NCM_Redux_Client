import{ah as B,d as E,r as h,aJ as W,ae as n,an as f,ao as e,af as N,ar as w,as as b,at as a,ap as t,b1 as T,ag as G,aB as l,au as p,b4 as L,b0 as D,e as M,am as P,ak as q,az as C,aE as F,k as H,v as J,ai as O,b6 as S,b7 as U}from"./index-7904e8ad.js";import{N as j,a as I}from"./Grid-c77da12a.js";import{N as K}from"./Ellipsis-c692ea86.js";import{N as Q}from"./PageHeader-e12a2bfa.js";import{N as z}from"./text-4eec9490.js";import{N as X}from"./Divider-444f103a.js";const Y=u=>B.get("/artist/album",{params:{id:u}}),Z=u=>B.get("/artist/detail",{params:{id:u}}),A=["src"],R=E({__name:"albumViewer",props:{albums:{}},setup(u){const m=u,o=h(window.innerWidth);return W(()=>{window.addEventListener("resize",()=>{o.value=window.innerWidth})}),(_,g)=>(n(),f(a(j),{"x-gap":"20","y-gap":"20",cols:Math.floor(o.value/320)},{default:e(()=>[(n(!0),N(b,null,w(m.albums,d=>(n(),f(a(I),null,{default:e(()=>[t(a(T),{hoverable:"",style:{cursor:"pointer",height:"320px"},onClick:i=>_.$router.push({path:"/albumDetail",query:{id:d.id}})},{cover:e(()=>[G("img",{src:d.picUrl},null,8,A)]),header:e(()=>[t(a(K),{"line-clamp":2},{default:e(()=>[l(p(d.name),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:1},8,["cols"]))}}),na=E({__name:"artistDetail",setup(u){const m=L(),o=h(!1),_=window.location.hash.split("?id=")[1],g=h(),d=h(),{data:i,loading:V,run:y}=D(Z,{onSuccess(){var c;g.value=(c=i.value)==null?void 0:c.data.data.artist}}),r=D(Y,{onSuccess(){var c;d.value=U((c=r==null?void 0:r.data.value)==null?void 0:c.data.hotAlbums)}});return y(_),r==null||r.run(_),M(()=>m.query,()=>{y(Number(m.query.id)),r==null||r.run(Number(m.query.id))}),(c,k)=>{const $=P("n-spin");return n(),f(a(O),null,{default:e(()=>[t(a(T),null,{default:e(()=>[t($,{show:a(V)},{default:e(()=>[t(a(Q),null,{avatar:e(()=>{var s;return[t(a(q),{lazy:"",size:150,src:(s=a(i))==null?void 0:s.data.data.artist.avatar},null,8,["src"])]}),title:e(()=>[t(a(z),{style:{"font-size":"2rem"}},{default:e(()=>{var s;return[l(p((s=a(i))==null?void 0:s.data.data.artist.name),1)]}),_:1}),t(a(C),null,{default:e(()=>{var s,x;return[(n(!0),N(b,null,w((s=a(i))==null?void 0:s.data.data.artist.identities,v=>(n(),f(a(S),{bordered:!1},{default:e(()=>[l(p(v),1)]),_:2},1024))),256)),(n(!0),N(b,null,w((x=a(i))==null?void 0:x.data.data.artist.identifyTag,v=>(n(),f(a(S),{bordered:!1},{default:e(()=>[l(p(v),1)]),_:2},1024))),256))]}),_:1}),t(a(C),{align:"center",style:{margin:"10px 0"}},{default:e(()=>[l(" 描述: "),t(a(F),{quaternary:"",circle:"",onClick:k[0]||(k[0]=s=>o.value=!o.value)},{default:e(()=>[l(p(o.value?"👆":"👇"),1)]),_:1})]),_:1})]),default:e(()=>[H(t(a(z),{style:{"font-size":"0.6rem","white-space":"pre-wrap"}},{default:e(()=>{var s;return[l(p(((s=a(i))==null?void 0:s.data.data.artist.briefDesc)||"这个人很懒－O－ 什么也没写"),1)]}),_:1},512),[[J,o.value]])]),_:1}),t(a(X),{"title-placement":"left"},{default:e(()=>[l("专辑")]),_:1}),t(R,{albums:d.value},null,8,["albums"])]),_:1},8,["show"])]),_:1})]),_:1})}}});export{na as default};