import{d as N,E as h,t as D,M as T,n as z,G as I,Z as F,o as v,b as f,i as k,e as u,x as _,l as P,A as V,F as E,a1 as K,D as R,$ as j,h as B}from"../modules/vue-qL1VueNc.js";import{C as H,J as q,K as G,_ as J}from"../index-BfPv_Vt0.js";import{z as U}from"../modules/unplugin-icons-up876Pbg.js";const X=["innerHTML"],Z=["textContent"],O=["textContent"],S="slidev-note-fade",y="slidev-note-click-mark",ie=N({__name:"NoteDisplay",props:{class:{},noteHtml:{},note:{},highlight:{type:Boolean,default:!0},placeholder:{},clicksContext:{},autoScroll:{type:Boolean}},emits:["markerDblclick","markerClick"],setup(L,{emit:p}){const t=L,x=p,m=h(()=>{var s;return t.clicksContext!=null&&((s=t.noteHtml)==null?void 0:s.includes("slidev-note-click-mark"))}),n=D(null);function b(){var $,A;if(!n.value||!m.value)return;const s=Array.from(n.value.querySelectorAll(`.${y}`)),a=new Map,d=new Map;let r=0;for(const i of s){const l=Number(i.dataset.clicks);a.set(i,l);let o=i,e=i.parentElement;for(;e&&o!==n.value;)d.has(e)||d.set(e,[[null,r]]),d.get(e).push([o,l]),o=e,e=e.parentElement;r=l}const C=new Map;for(const[i,l]of d){let o=!1,e=0;for(const c of Array.from(i.childNodes)){let w=!1;for(;c===(($=l[e+1])==null?void 0:$[0]);)w=!0,e++;if(w)continue;let M=c;if(c.nodeType===3){if(!((A=c.textContent)!=null&&A.trim()))continue;M=document.createElement("span"),M.textContent=c.textContent,i.insertBefore(M,c),c.remove()}o||(o=e===0),C.set(M,l[e][1])}o||(l[0][1]=-1)}return i=>{const l=t.highlight;for(const[o,e]of d)o.classList.toggle(S,l&&!e.some(([c,w])=>w===i));for(const[o,e]of C)o.classList.toggle(S,l&&e!==i);for(const[o,e]of a)o.classList.remove(S),o.classList.toggle(`${y}-past`,l&&e<i),o.classList.toggle(`${y}-active`,l&&e===i),o.classList.toggle(`${y}-next`,l&&e===i+1),o.classList.toggle(`${y}-future`,l&&e>i+1),o.ondblclick=l?c=>{x("markerDblclick",c,e),!c.defaultPrevented&&(t.clicksContext.current=e,c.stopPropagation(),c.stopImmediatePropagation())}:null,o.onclick=l?c=>{x("markerClick",c,e)}:null,l&&t.autoScroll&&e===i&&o.scrollIntoView({block:"center",behavior:"smooth"})}}const g=D();return T(()=>[t.noteHtml,t.highlight],()=>{z(()=>{g.value=b()})},{immediate:!0}),I(()=>{b()}),F(()=>{var a,d;const s=((a=t.clicksContext)==null?void 0:a.current)??H;(d=g.value)==null||d.call(g,s)}),(s,a)=>s.noteHtml?(v(),f("div",{key:0,ref_key:"noteDisplay",ref:n,class:k(["prose overflow-auto outline-none slidev-note",[t.class,m.value?"slidev-note-with-clicks":""]]),innerHTML:s.noteHtml},null,10,X)):s.note?(v(),f("div",{key:1,class:k(["prose overflow-auto outline-none slidev-note",t.class])},[u("p",{textContent:_(s.note)},null,8,Z)],2)):(v(),f("div",{key:2,class:k(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",t.class])},[u("p",{textContent:_(t.placeholder||"No notes.")},null,8,O)],2))}}),Q=["title"],W={class:"flex gap-0.2 items-center min-w-16 font-mono mr1"},Y={"text-primary":""},ee={op50:"","text-sm":""},te={key:1,op50:"","flex-auto":"",pl1:""},oe={relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~"},se=["min","max"],le=N({__name:"ClicksSlider",props:{clicksContext:{},readonly:{type:Boolean},active:{type:Boolean,default:!0}},setup(L){const p=L,t=h(()=>p.clicksContext.total),x=h(()=>q(0,p.clicksContext.clicksStart,t.value)),m=h(()=>t.value-x.value+1),n=h({get(){return p.clicksContext.current>t.value?-1:p.clicksContext.current},set(s){p.clicksContext.current=s}}),b=h(()=>G(x.value,t.value+1));function g(){p.readonly||(n.value<0||n.value>t.value)&&(n.value=0)}return(s,a)=>{const d=U;return v(),f("div",{class:k(["flex gap-1 items-center select-none",m.value&&p.clicksContext.isMounted?"":"op50"]),title:`Clicks in this slide: ${m.value}`},[u("div",W,[P(d,{"text-sm":"",op50:""}),n.value>=0&&n.value!==V(H)&&s.active?(v(),f(E,{key:0},[a[2]||(a[2]=u("div",{"flex-auto":""},null,-1)),u("span",Y,_(n.value),1),a[3]||(a[3]=u("span",{op25:"","text-sm":""},"/",-1)),u("span",ee,_(t.value),1)],64)):(v(),f("div",te,_(t.value),1))]),u("div",oe,[(v(!0),f(E,null,K(b.value,r=>(v(),f("div",{key:r,border:"y main","of-hidden":"",relative:"",class:k([r===0?"rounded-l border-l":"",r===t.value?"rounded-r border-r":""]),style:B({width:m.value>0?`${1/m.value*100}%`:"100%"})},[u("div",{absolute:"","inset-0":"",class:k(r<=n.value&&s.active?"bg-primary op15":"")},null,2),u("div",{class:k([+r==+n.value&&s.active?"text-primary font-bold op100 border-primary":"op30 border-main",r===0?"rounded-l":"",r===t.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},_(r),3)],6))),128)),R(u("input",{"onUpdate:modelValue":a[0]||(a[0]=r=>n.value=r),class:k(["range",s.readonly?"pointer-events-none":""]),type:"range",min:x.value,max:t.value,step:1,absolute:"","inset-0":"","z-10":"",op0:"",style:B({"--thumb-width":`${1/(m.value+1)*100}%`}),onMousedown:g,onFocus:a[1]||(a[1]=r=>{var C;return(C=r.currentTarget)==null?void 0:C.blur()})},null,46,se),[[j,n.value]])])],10,Q)}}}),ce=J(le,[["__scopeId","data-v-ef0c5640"]]);export{ce as C,ie as _};
