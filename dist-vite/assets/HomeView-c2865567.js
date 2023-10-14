import{r as Qt,_ as en}from"./recommendResource-7020a653.js";import{aL as tn,aM as Ve,aN as ct,p as nn,aO as an,i as on,O as sn,d as F,u as ae,r as D,a4 as rn,h as g,aP as ln,c as m,aJ as dt,o as ft,t as W,y as h,q as I,x as p,C as un,D as cn,w as vt,aQ as dn,e as pe,a0 as Xe,B as me,G as pt,aR as fn,aS as Ye,aT as He,k as vn,v as pn,T as xt,ac as ee,aU as Ke,ay as xn,aV as hn,aW as mn,W as te,z as gn,aX as bn,aY as wn,aZ as yn,a_ as Sn,a$ as Cn,ah as ht,b0 as Rn,an as Fe,ao as R,at as z,ae as Ne,ag as qe,ap as k,af as zn,ar as _n,as as Pn,az as Ge,b1 as Je,ak as Qe,aB as ne,au as $e,ai as kn,al as Nn}from"./index-7904e8ad.js";import{r as $n}from"./recommendSongs-8e31e7a2.js";import{N as In}from"./Divider-444f103a.js";import{N as et}from"./Thing-2f426f7f.js";import{N as Dn}from"./text-4eec9490.js";import{N as Ie}from"./Ellipsis-c692ea86.js";import"./Grid-c77da12a.js";function Tn(e){return tn(Ve(e).toLowerCase())}function Vn(e,n,a,i){var l=-1,f=e==null?0:e.length;for(i&&f&&(a=e[++l]);++l<f;)a=n(a,e[l],l,e);return a}function En(e){return function(n){return e==null?void 0:e[n]}}var An={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},On=En(An);const Mn=On;var Ln=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jn="\\u0300-\\u036f",Bn="\\ufe20-\\ufe2f",Un="\\u20d0-\\u20ff",Wn=jn+Bn+Un,Zn="["+Wn+"]",Xn=RegExp(Zn,"g");function Yn(e){return e=Ve(e),e&&e.replace(Ln,Mn).replace(Xn,"")}var Hn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Kn(e){return e.match(Hn)||[]}var Fn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function qn(e){return Fn.test(e)}var mt="\\ud800-\\udfff",Gn="\\u0300-\\u036f",Jn="\\ufe20-\\ufe2f",Qn="\\u20d0-\\u20ff",ea=Gn+Jn+Qn,gt="\\u2700-\\u27bf",bt="a-z\\xdf-\\xf6\\xf8-\\xff",ta="\\xac\\xb1\\xd7\\xf7",na="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",aa="\\u2000-\\u206f",oa=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",wt="A-Z\\xc0-\\xd6\\xd8-\\xde",sa="\\ufe0e\\ufe0f",yt=ta+na+aa+oa,St="['’]",tt="["+yt+"]",ra="["+ea+"]",Ct="\\d+",ia="["+gt+"]",Rt="["+bt+"]",zt="[^"+mt+yt+Ct+gt+bt+wt+"]",la="\\ud83c[\\udffb-\\udfff]",ua="(?:"+ra+"|"+la+")",ca="[^"+mt+"]",_t="(?:\\ud83c[\\udde6-\\uddff]){2}",Pt="[\\ud800-\\udbff][\\udc00-\\udfff]",K="["+wt+"]",da="\\u200d",nt="(?:"+Rt+"|"+zt+")",fa="(?:"+K+"|"+zt+")",at="(?:"+St+"(?:d|ll|m|re|s|t|ve))?",ot="(?:"+St+"(?:D|LL|M|RE|S|T|VE))?",kt=ua+"?",Nt="["+sa+"]?",va="(?:"+da+"(?:"+[ca,_t,Pt].join("|")+")"+Nt+kt+")*",pa="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xa="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ha=Nt+kt+va,ma="(?:"+[ia,_t,Pt].join("|")+")"+ha,ga=RegExp([K+"?"+Rt+"+"+at+"(?="+[tt,K,"$"].join("|")+")",fa+"+"+ot+"(?="+[tt,K+nt,"$"].join("|")+")",K+"?"+nt+"+"+at,K+"+"+ot,xa,pa,Ct,ma].join("|"),"g");function ba(e){return e.match(ga)||[]}function wa(e,n,a){return e=Ve(e),n=a?void 0:n,n===void 0?qn(e)?ba(e):Kn(e):e.match(n)||[]}var ya="['’]",Sa=RegExp(ya,"g");function Ca(e){return function(n){return Vn(wa(Yn(n).replace(Sa,"")),e,"")}}var Ra=Ca(function(e,n,a){return n=n.toLowerCase(),e+(a?Tn(n):n)});const st=Ra;function za(e){const{length:n}=e;return n>1&&(e.push(rt(e[0],0,"append")),e.unshift(rt(e[n-1],n-1,"prepend"))),e}function rt(e,n,a){return ct(e,{key:`carousel-item-duplicate-${n}-${a}`})}function it(e,n,a){return a?e===0?n-3:e===n-1?0:e-1:e}function De(e,n){return n?e+1:e}function _a(e,n,a){return e<0?null:e===0?a?n-1:null:e-1}function Pa(e,n,a){return e>n-1?null:e===n-1?a?0:null:e+1}function ka(e,n){return n&&e>3?e-2:e}function lt(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ut(e,n){let{offsetWidth:a,offsetHeight:i}=e;if(n){const l=getComputedStyle(e);a=a-parseFloat(l.getPropertyValue("padding-left"))-parseFloat(l.getPropertyValue("padding-right")),i=i-parseFloat(l.getPropertyValue("padding-top"))-parseFloat(l.getPropertyValue("padding-bottom"))}return{width:a,height:i}}function xe(e,n,a){return e<n?n:e>a?a:e}function Na(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(n);if(a){const[,i,,l="ms"]=a;return Number(i)*(l==="ms"?1:1e3)}return 0}const $t=an("n-carousel-methods"),$a=e=>{nn($t,e)},Ee=(e="unknown",n="component")=>{const a=on($t);return a||sn(e,`\`${n}\` must be placed inside \`n-carousel\`.`),a},Ia={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Da=F({name:"CarouselDots",props:Ia,setup(e){const{mergedClsPrefixRef:n}=ae(e),a=D([]),i=Ee();function l(v,s){switch(v.key){case"Enter":case" ":v.preventDefault(),i.to(s);return}e.keyboard&&b(v)}function f(v){e.trigger==="hover"&&i.to(v)}function S(v){e.trigger==="click"&&i.to(v)}function b(v){var s;if(v.shiftKey||v.altKey||v.ctrlKey||v.metaKey)return;const w=(s=document.activeElement)===null||s===void 0?void 0:s.nodeName.toLowerCase();if(w==="input"||w==="textarea")return;const{code:_}=v,M=_==="PageUp"||_==="ArrowUp",L=_==="PageDown"||_==="ArrowDown",P=_==="PageUp"||_==="ArrowRight",N=_==="PageDown"||_==="ArrowLeft",$=i.isVertical(),j=$?M:P,q=$?L:N;!j&&!q||(v.preventDefault(),j&&!i.isNextDisabled()?(i.next(),c(i.currentIndexRef.value)):q&&!i.isPrevDisabled()&&(i.prev(),c(i.currentIndexRef.value)))}function c(v){var s;(s=a.value[v])===null||s===void 0||s.focus()}return rn(()=>a.value.length=0),{mergedClsPrefix:n,dotEls:a,handleKeydown:l,handleMouseenter:f,handleClick:S}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return g("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},ln(this.total,a=>{const i=a===this.currentIndex;return g("div",{"aria-selected":i,ref:l=>n.push(l),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,i&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:l=>{this.handleKeydown(l,a)}})}))}}),Ta=g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},g("g",{fill:"none"},g("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Va=g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},g("g",{fill:"none"},g("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Ea=F({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=ae(e),{isVertical:a,isPrevDisabled:i,isNextDisabled:l,prev:f,next:S}=Ee();return{mergedClsPrefix:n,isVertical:a,isPrevDisabled:i,isNextDisabled:l,prev:f,next:S}},render(){const{mergedClsPrefix:e}=this;return g("div",{class:`${e}-carousel__arrow-group`},g("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Ta),g("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Va))}}),he="CarouselItem",Aa=e=>{var n;return((n=e.type)===null||n===void 0?void 0:n.name)===he},It=F({name:he,setup(e){const{mergedClsPrefixRef:n}=ae(e),a=Ee(st(he),`n-${st(he)}`),i=D(),l=m(()=>{const{value:s}=i;return s?a.getSlideIndex(s):-1}),f=m(()=>a.isPrev(l.value)),S=m(()=>a.isNext(l.value)),b=m(()=>a.isActive(l.value)),c=m(()=>a.getSlideStyle(l.value));dt(()=>{a.addSlide(i.value)}),ft(()=>{a.removeSlide(i.value)});function v(s){const{value:w}=l;w!==void 0&&(a==null||a.onCarouselItemClick(w,s))}return{mergedClsPrefix:n,selfElRef:i,isPrev:f,isNext:S,isActive:b,index:l,style:c,handleClick:v}},render(){var e;const{$slots:n,mergedClsPrefix:a,isPrev:i,isNext:l,isActive:f,index:S,style:b}=this,c=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:f,[`${a}-carousel__slide--prev`]:i,[`${a}-carousel__slide--next`]:l}];return g("div",{ref:"selfElRef",class:c,role:"option",tabindex:"-1","data-index":S,"aria-hidden":!f,style:b,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:i,isNext:l,isActive:f,index:S}))}}),Oa=W("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[h("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[h("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[I("> img",`
 display: block;
 `)])]),h("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[p("dot",[h("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[I("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),p("active",`
 background-color: var(--n-dot-color-active);
 `)])]),p("line",[h("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[I("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),p("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),h("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[I("svg",`
 height: 1em;
 width: 1em;
 `),I("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),p("vertical",`
 touch-action: pan-x;
 `,[h("slides",`
 flex-direction: column;
 `),p("fade",[h("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),p("card",[h("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[p("current",`
 transform: translateY(-50%) translateZ(0);
 `),p("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),p("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),p("usercontrol",[h("slides",[I(">",[I("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),p("left",[h("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[p("line",[h("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[p("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),h("dot",`
 margin: 4px 0;
 `)]),h("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),p("vertical",[h("arrow",`
 transform: rotate(90deg);
 `)]),p("show-arrow",[p("bottom",[h("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),p("top",[h("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),p("left",[h("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),p("right",[h("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),p("left",[h("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[I("> *:first-child",`
 margin-bottom: 12px;
 `)])]),p("right",[h("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[p("line",[h("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[p("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),h("dot",`
 margin: 4px 0;
 `),h("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[I("> *:first-child",`
 margin-bottom: 12px;
 `)])]),p("top",[h("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[p("line",[h("dot",`
 margin: 0 4px;
 `)])]),h("dot",`
 margin: 0 4px;
 `),h("arrow-group",`
 top: 12px;
 right: 12px;
 `,[I("> *:first-child",`
 margin-right: 12px;
 `)])]),p("bottom",[h("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[p("line",[h("dot",`
 margin: 0 4px;
 `)])]),h("dot",`
 margin: 0 4px;
 `),h("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[I("> *:first-child",`
 margin-right: 12px;
 `)])]),p("fade",[h("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[p("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),p("card",[h("slides",`
 perspective: 1000px;
 `),h("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[p("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),p("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),p("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),Ma=["transitionDuration","transitionTimingFunction"],La=Object.assign(Object.assign({},me.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Te=!1;const ja=F({name:"Carousel",props:La,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=ae(e),i=D(null),l=D(null),f=D([]),S={value:[]},b=m(()=>e.direction==="vertical"),c=m(()=>b.value?"height":"width"),v=m(()=>b.value?"bottom":"right"),s=m(()=>e.effect==="slide"),w=m(()=>e.loop&&e.slidesPerView===1&&s.value),_=m(()=>e.effect==="custom"),M=m(()=>!s.value||e.centeredSlides?1:e.slidesPerView),L=m(()=>_.value?1:e.slidesPerView),P=m(()=>M.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),N=D({width:0,height:0}),$=m(()=>{const{value:t}=f;if(!t.length)return[];const{value:o}=P;if(o)return t.map(C=>ut(C));const{value:r}=L,{value:d}=N,{value:x}=c;let u=d[x];if(r!=="auto"){const{spaceBetween:C}=e,T=u-(r-1)*C,ve=1/Math.max(1,r);u=T*ve}const y=Object.assign(Object.assign({},d),{[x]:u});return t.map(()=>y)}),j=m(()=>{const{value:t}=$;if(!t.length)return[];const{centeredSlides:o,spaceBetween:r}=e,{value:d}=c,{[d]:x}=N.value;let u=0;return t.map(({[d]:y})=>{let C=u;return o&&(C+=(y-x)/2),u+=y+r,C})}),q=D(!1),ge=m(()=>{const{transitionStyle:t}=e;return t?Ke(t,Ma):{}}),be=m(()=>_.value?0:Na(ge.value.transitionDuration)),Ae=m(()=>{const{value:t}=f;if(!t.length)return[];const o=!(P.value||L.value===1),r=y=>{if(o){const{value:C}=c;return{[C]:`${$.value[y][C]}px`}}};if(_.value)return t.map((y,C)=>r(C));const{effect:d,spaceBetween:x}=e,{value:u}=v;return t.reduce((y,C,T)=>{const ve=Object.assign(Object.assign({},r(T)),{[`margin-${u}`]:`${x}px`});return y.push(ve),q.value&&(d==="fade"||d==="card")&&Object.assign(ve,ge.value),y},[])}),V=m(()=>{const{value:t}=M,{length:o}=f.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:r}=$,{length:d}=r;if(!d)return o;const{value:x}=j,{value:u}=c,y=N.value[u];let C=r[r.length-1][u],T=d;for(;T>1&&C<y;)T--,C+=x[T]-x[T-1];return xe(T+1,1,d)}}),oe=m(()=>ka(V.value,w.value)),Dt=De(e.defaultIndex,w.value),we=D(it(Dt,V.value,w.value)),E=un(cn(e,"currentIndex"),we),A=m(()=>De(E.value,w.value));function G(t){var o,r;t=xe(t,0,V.value-1);const d=it(t,V.value,w.value),{value:x}=E;d!==E.value&&(we.value=d,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,d,x),(r=e.onUpdateCurrentIndex)===null||r===void 0||r.call(e,d,x))}function se(t=A.value){return _a(t,V.value,e.loop)}function re(t=A.value){return Pa(t,V.value,e.loop)}function Tt(t){const o=Z(t);return o!==null&&se()===o}function Vt(t){const o=Z(t);return o!==null&&re()===o}function Oe(t){return A.value===Z(t)}function Et(t){return E.value===t}function Me(){return se()===null}function Le(){return re()===null}function ye(t){const o=xe(De(t,w.value),0,V.value);(t!==E.value||o!==A.value)&&G(o)}function Se(){const t=se();t!==null&&G(t)}function ie(){const t=re();t!==null&&G(t)}function At(){(!O||!w.value)&&Se()}function Ot(){(!O||!w.value)&&ie()}let O=!1,U=0;const Ce=D({});function le(t,o=0){Ce.value=Object.assign({},ge.value,{transform:b.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function J(t=0){s.value?Re(A.value,t):U!==0&&(!O&&t>0&&(O=!0),le(U=0,t))}function Re(t,o){const r=je(t);r!==U&&o>0&&(O=!0),U=je(A.value),le(r,o)}function je(t){let o;return t>=V.value-1?o=Be():o=j.value[t]||0,o}function Be(){if(M.value==="auto"){const{value:t}=c,{[t]:o}=N.value,{value:r}=j,d=r[r.length-1];let x;if(d===void 0)x=o;else{const{value:u}=$;x=d+u[u.length-1][t]}return x-o}else{const{value:t}=j;return t[V.value-1]||0}}const Q={currentIndexRef:E,to:ye,prev:At,next:Ot,isVertical:()=>b.value,isHorizontal:()=>!b.value,isPrev:Tt,isNext:Vt,isActive:Oe,isPrevDisabled:Me,isNextDisabled:Le,getSlideIndex:Z,getSlideStyle:jt,addSlide:Mt,removeSlide:Lt,onCarouselItemClick:Bt};$a(Q);function Mt(t){t&&f.value.push(t)}function Lt(t){if(!t)return;const o=Z(t);o!==-1&&f.value.splice(o,1)}function Z(t){return typeof t=="number"?t:t?f.value.indexOf(t):-1}function jt(t){const o=Z(t);if(o!==-1){const r=[Ae.value[o]],d=Q.isPrev(o),x=Q.isNext(o);return d&&r.push(e.prevSlideStyle||""),x&&r.push(e.nextSlideStyle||""),xn(r)}}function Bt(t,o){let r=!O&&!de&&!ke;e.effect==="card"&&r&&!Oe(t)&&(ye(t),r=!1),r||(o.preventDefault(),o.stopPropagation())}let ue=null;function ce(){ue&&(clearInterval(ue),ue=null)}function X(){ce(),!e.autoplay||oe.value<2||(ue=window.setInterval(ie,e.interval))}let ze=0,_e=0,B=0,Pe=0,de=!1,ke=!1;function Ue(t){var o;if(Te||!(!((o=l.value)===null||o===void 0)&&o.contains(mn(t))))return;Te=!0,de=!0,ke=!1,Pe=Date.now(),ce(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const r=lt(t)?t.touches[0]:t;b.value?_e=r.clientY:ze=r.clientX,e.touchable&&(te("touchmove",document,fe,{passive:!0}),te("touchend",document,Y),te("touchcancel",document,Y)),e.draggable&&(te("mousemove",document,fe),te("mouseup",document,Y))}function fe(t){const{value:o}=b,{value:r}=c,d=lt(t)?t.touches[0]:t,x=o?d.clientY-_e:d.clientX-ze,u=N.value[r];B=xe(x,-u,u),t.cancelable&&t.preventDefault(),s.value&&le(U-B,0)}function Y(){const{value:t}=A;let o=t;if(!O&&B!==0&&s.value){const r=U-B,d=[...j.value.slice(0,V.value-1),Be()];let x=null;for(let u=0;u<d.length;u++){const y=Math.abs(d[u]-r);if(x!==null&&x<y)break;x=y,o=u}}if(o===t){const r=Date.now()-Pe,{value:d}=c,x=N.value[d];B>x/2||B/r>.4?o=se(t):(B<-x/2||B/r<-.4)&&(o=re(t))}o!==null&&o!==t?(ke=!0,G(o),Xe(()=>{(!w.value||we.value!==E.value)&&J(be.value)})):J(be.value),We(),X()}function We(){de&&(Te=!1),de=!1,ze=0,_e=0,B=0,Pe=0,ee("touchmove",document,fe),ee("touchend",document,Y),ee("touchcancel",document,Y),ee("mousemove",document,fe),ee("mouseup",document,Y)}function Ut(){if(s.value&&O){const{value:t}=A;Re(t,0)}else X();s.value&&(Ce.value.transitionDuration="0ms"),O=!1}function Wt(t){if(t.preventDefault(),O)return;let{deltaX:o,deltaY:r}=t;t.shiftKey&&!o&&(o=r);const d=-1,x=1,u=(o||r)>0?x:d;let y=0,C=0;b.value?C=u:y=u;const T=10;(C*r>=T||y*o>=T)&&(u===x&&!Le()?ie():u===d&&!Me()&&Se())}function Zt(){N.value=ut(i.value,!0),X()}function Xt(){var t,o;P.value&&((o=(t=$.effect).scheduler)===null||o===void 0||o.call(t),$.effect.run())}function Yt(){e.autoplay&&ce()}function Ht(){e.autoplay&&X()}dt(()=>{vt(X),requestAnimationFrame(()=>q.value=!0)}),ft(()=>{We(),ce()}),dn(()=>{const{value:t}=f,{value:o}=S,r=new Map,d=u=>r.has(u)?r.get(u):-1;let x=!1;for(let u=0;u<t.length;u++){const y=o.findIndex(C=>C.el===t[u]);y!==u&&(x=!0),r.set(t[u],y)}x&&t.sort((u,y)=>d(u)-d(y))}),pe(A,(t,o)=>{if(t!==o)if(X(),s.value){if(w.value&&oe.value>2){const{value:r}=V;t===r-2&&o===1?t=0:t===1&&o===r-2&&(t=r-1)}Re(t,be.value)}else J()},{immediate:!0}),pe([w,M],()=>void Xe(()=>{G(A.value)})),pe(j,()=>{s.value&&J()},{deep:!0}),pe(s,t=>{t?J():(O=!1,le(U=0))});const Kt=m(()=>({onTouchstartPassive:e.touchable?Ue:void 0,onMousedown:e.draggable?Ue:void 0,onWheel:e.mousewheel?Wt:void 0})),Ft=m(()=>Object.assign(Object.assign({},Ke(Q,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:oe.value,currentIndex:E.value})),qt=m(()=>({total:oe.value,currentIndex:E.value,to:Q.to})),Gt={getCurrentIndex:()=>E.value,to:ye,prev:Se,next:ie},Jt=me("Carousel","-carousel",Oa,hn,e,n),Ze=m(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:r,dotColorActive:d,dotColorFocus:x,dotLineWidth:u,dotLineWidthActive:y,arrowColor:C}}=Jt.value;return{"--n-bezier":t,"--n-dot-color":r,"--n-dot-color-focus":x,"--n-dot-color-active":d,"--n-dot-size":o,"--n-dot-line-width":u,"--n-dot-line-width-active":y,"--n-arrow-color":C}}),H=a?pt("carousel",void 0,Ze,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:i,slidesElRef:l,slideVNodes:S,duplicatedable:w,userWantsControl:_,autoSlideSize:P,displayIndex:E,realIndex:A,slideStyles:Ae,translateStyle:Ce,slidesControlListeners:Kt,handleTransitionEnd:Ut,handleResize:Zt,handleSlideResize:Xt,handleMouseenter:Yt,handleMouseleave:Ht,isActive:Et,arrowSlotProps:Ft,dotSlotProps:qt},Gt),{cssVars:a?void 0:Ze,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:a,userWantsControl:i,slideStyles:l,dotType:f,dotPlacement:S,slidesControlListeners:b,transitionProps:c={},arrowSlotProps:v,dotSlotProps:s,$slots:{default:w,dots:_,arrow:M}}=this,L=w&&fn(w())||[];let P=Ba(L);return P.length||(P=L.map(N=>g(It,null,{default:()=>ct(N)}))),this.duplicatedable&&(P=za(P)),this.slideVNodes.value=P,this.autoSlideSize&&(P=P.map(N=>g(Ye,{onResize:this.handleSlideResize},{default:()=>N}))),(e=this.onRender)===null||e===void 0||e.call(this),g("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${S}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,i&&`${n}-carousel--usercontrol`],style:this.cssVars},b,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),g(Ye,{onResize:this.handleResize},{default:()=>g("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},i?P.map((N,$)=>g("div",{style:l[$],key:$},vn(g(xt,Object.assign({},c),{default:()=>N}),[[pn,this.isActive($)]]))):P)}),this.showDots&&s.total>1&&He(_,s,()=>[g(Da,{key:f+S,total:s.total,currentIndex:s.currentIndex,dotType:f,trigger:this.trigger,keyboard:this.keyboard})]),a&&He(M,v,()=>[g(Ea,null)]))}});function Ba(e){return e.reduce((n,a)=>(Aa(a)&&n.push(a),n),[])}const Ua=I([I("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),W("spin-container",{position:"relative"},[W("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[gn()])]),W("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),W("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[p("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),W("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),W("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[p("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),Wa={small:20,medium:18,large:16},Za=Object.assign(Object.assign({},me.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),Xa=F({name:"Spin",props:Za,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=ae(e),i=me("Spin","-spin",Ua,yn,e,n),l=m(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:v},self:s}=i.value,{opacitySpinning:w,color:_,textColor:M}=s,L=typeof c=="number"?Sn(c):s[Cn("size",c)];return{"--n-bezier":v,"--n-opacity-spinning":w,"--n-size":L,"--n-color":_,"--n-text-color":M}}),f=a?pt("spin",m(()=>{const{size:c}=e;return typeof c=="number"?String(c):c[0]}),l,e):void 0,S=bn(e,["spinning","show"]),b=D(!1);return vt(c=>{let v;if(S.value){const{delay:s}=e;if(s){v=window.setTimeout(()=>{b.value=!0},s),c(()=>{clearTimeout(v)});return}}b.value=S.value}),{mergedClsPrefix:n,active:b,mergedStrokeWidth:m(()=>{const{strokeWidth:c}=e;if(c!==void 0)return c;const{size:v}=e;return Wa[typeof v=="number"?"medium":v]}),cssVars:a?void 0:l,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){var e,n;const{$slots:a,mergedClsPrefix:i,description:l}=this,f=a.icon&&this.rotate,S=(l||a.description)&&g("div",{class:`${i}-spin-description`},l||((e=a.description)===null||e===void 0?void 0:e.call(a))),b=a.icon?g("div",{class:[`${i}-spin-body`,this.themeClass]},g("div",{class:[`${i}-spin`,f&&`${i}-spin--rotate`],style:a.default?"":this.cssVars},a.icon()),S):g("div",{class:[`${i}-spin-body`,this.themeClass]},g(wn,{clsPrefix:i,style:a.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${i}-spin`}),S);return(n=this.onRender)===null||n===void 0||n.call(this),a.default?g("div",{class:[`${i}-spin-container`,this.themeClass],style:this.cssVars},g("div",{class:[`${i}-spin-content`,this.active&&`${i}-spin-content--spinning`]},a),g(xt,{name:"fade-in-transition"},{default:()=>this.active?b:null})):b}}),Ya=()=>ht.get("/banner",{params:{type:0}}),Ha=()=>ht.get("/personalized"),Ka={class:"home"},Fa=["src"],qa=F({__name:"HomeView",setup(e){const{loading:n,data:a,run:i}=Rn(Ya),l=D(),f=D(),S=D();return(async()=>{var s;i();const b=await $n(),c=await Qt(),v=await Ha();l.value=(s=b.data)==null?void 0:s.data,f.value=c==null?void 0:c.data,S.value=v==null?void 0:v.data})(),(b,c)=>(Ne(),Fe(z(kn),null,{default:R(()=>[qe("div",Ka,[k(z(Ge),{vertical:""},{default:R(()=>{var v;return[k(z(Xa),{show:z(n)},{default:R(()=>[k(z(ja),{effect:"card","prev-slide-style":"transform: translateX(-150%) translateZ(-800px);","next-slide-style":"transform: translateX(50%) translateZ(-800px);",style:{height:"240px"},"show-dots":!0,draggable:""},{default:R(()=>{var s;return[(Ne(!0),zn(Pn,null,_n((s=z(a))==null?void 0:s.data.banners,w=>(Ne(),Fe(z(It),{class:"n-carousel-item"},{default:R(()=>[qe("img",{class:"carousel-img",src:w.imageUrl},null,8,Fa)]),_:2},1024))),256))]}),_:1})]),_:1},8,["show"]),k(z(Ge),{justify:"space-between","item-style":"width: 49%;min-width: 550px;"},{default:R(()=>[k(z(Je),{hoverable:"",class:"recommend",onClick:c[0]||(c[0]=s=>b.$router.push("/recommendSongs"))},{default:R(()=>[k(z(et),null,{avatar:R(()=>{var s;return[k(z(Qe),{size:150,src:(s=l.value)==null?void 0:s.dailySongs[0].al.picUrl},null,8,["src"])]}),header:R(()=>[k(z(Dn),{style:{"font-size":"2.5rem"}},{default:R(()=>[ne(" 每日推荐 ")]),_:1})]),description:R(()=>[k(z(Ie),{style:{"font-size":"1.2rem","max-width":"340px"}},{default:R(()=>{var s;return[ne(" 猜你喜欢: "+$e((s=l.value)==null?void 0:s.dailySongs[0].name),1)]}),_:1})]),_:1})]),_:1}),k(z(Je),{hoverable:"",class:"recommend",onClick:c[1]||(c[1]=s=>b.$router.push("/recommendPlaylist"))},{default:R(()=>[k(z(et),null,{avatar:R(()=>{var s;return[k(z(Qe),{size:150,src:(s=f.value)==null?void 0:s.recommend[0].picUrl},null,8,["src"])]}),header:R(()=>[k(z(Ie),{style:{"font-size":"2.5rem","max-width":"340px"}},{default:R(()=>{var s;return[ne($e((s=f.value)==null?void 0:s.recommend[0].name),1)]}),_:1})]),description:R(()=>[k(z(Ie),{style:{"font-size":"1.2rem","max-width":"340px"}},{default:R(()=>{var s;return[ne($e((s=f.value)==null?void 0:s.recommend[1].name),1)]}),_:1})]),_:1})]),_:1})]),_:1}),k(z(In),{"title-placement":"left"},{default:R(()=>[ne("推荐歌单")]),_:1}),k(en,{"playlist-set":(v=S.value)==null?void 0:v.result},null,8,["playlist-set"])]}),_:1})])]),_:1}))}});const so=Nn(qa,[["__scopeId","data-v-72a5e128"]]);export{so as default};
