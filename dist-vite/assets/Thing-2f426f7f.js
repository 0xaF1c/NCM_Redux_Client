import{t as r,y as d,q as c,d as $,u as b,B as f,b as y,c as E,G as S,h as i,as as w,b2 as z}from"./index-7904e8ad.js";const C=r("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[r("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),r("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[r("thing-header-wrapper",`
 flex: 1;
 `)]),r("thing-main",`
 flex-grow: 1;
 `,[r("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[d("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),d("description",[c("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),d("content",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),d("footer",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),d("action",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),R=Object.assign(Object.assign({},f.props),{title:String,titleExtra:String,description:String,descriptionStyle:[String,Object],content:String,contentStyle:[String,Object],contentIndented:Boolean}),j=$({name:"Thing",props:R,setup(t,{slots:e}){const{mergedClsPrefixRef:h,inlineThemeDisabled:o,mergedRtlRef:u}=b(t),m=f("Thing","-thing",C,z,t,h),v=y("Thing",u,h),x=E(()=>{const{self:{titleTextColor:l,textColor:n,titleFontWeight:g,fontSize:s},common:{cubicBezierEaseInOut:_}}=m.value;return{"--n-bezier":_,"--n-font-size":s,"--n-text-color":n,"--n-title-font-weight":g,"--n-title-text-color":l}}),a=o?S("thing",void 0,x,t):void 0;return()=>{var l;const{value:n}=h,g=v?v.value:!1;return(l=a==null?void 0:a.onRender)===null||l===void 0||l.call(a),i("div",{class:[`${n}-thing`,a==null?void 0:a.themeClass,g&&`${n}-thing--rtl`],style:o?void 0:x.value},e.avatar&&t.contentIndented?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,i("div",{class:`${n}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?i("div",{class:`${n}-thing-avatar-header-wrapper`},e.avatar?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header-wrapper`},i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?i("div",{class:`${n}-thing-main__description`,style:t.descriptionStyle},e.description?e.description():t.description):null):null):i(w,null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?i("div",{class:`${n}-thing-main__description`,style:t.descriptionStyle},e.description?e.description():t.description):null),e.default||t.content?i("div",{class:`${n}-thing-main__content`,style:t.contentStyle},e.default?e.default():t.content):null,e.footer?i("div",{class:`${n}-thing-main__footer`},e.footer()):null,e.action?i("div",{class:`${n}-thing-main__action`},e.action()):null))}}});export{j as N};
