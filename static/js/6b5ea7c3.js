import{d as C,V as w,m as P,a3 as k,u as T,L as x,s as I,q as B,a4 as S,r as H,Y as $,y,o as L,B as R,c as u,Z as V,_ as D,e as c,R as M,g as d,i as e,t as O,k as j,h as s,H as E,a5 as N,E as q,f as l,a0 as z,a1 as A}from"./14c27e7f.js";import{T as U,u as Y}from"./8a24213b.js";import{P as Z}from"./a4735ecc.js";const F=C({name:"ObPageContent",components:{ObSkeleton:w,Sidebar:P,Toc:U,Profile:k,PostStats:Z},props:{post:{type:Object,default:()=>({})},title:{type:String,default:""}},setup(t){const g=T(),r=x(),f=I(),{t:v}=B(),n=S(t).post,o=S(t).title,i=H(),{enabledCommentPlugin:m}=$(),{initializeLightBox:h}=Y();return y(()=>n.value.covers,a=>{a&&r.setHeaderImage(a)}),y(()=>n.value.count_time.symbolsTime,async a=>{var p,b;a&&(await V(),h(),(p=i.value)==null||p.getCommentCount(),(b=i.value)==null||b.getPostView())}),L(()=>{r.setHeaderImage(n.value.covers)}),R(()=>{r.resetHeaderImage()}),{enabledComment:u(()=>n.value.comments&&m.value.plugin!==""),pageTitle:u(()=>o.value!==""?o.value:n.value.title),currentPath:u(()=>f.path),pluginConfigs:u(()=>g.themeConfig.plugins),postStatsRef:i,t:v}}});const _=t=>(z("data-v-1d305902"),t=t(),A(),t),G={class:"flex flex-col"},J={class:"post-header"},K={key:0,class:"post-title text-white uppercase"},Q={class:"flex flex-row items-center justify-start mt-8"},W={class:"main-grid"},X={class:"relative"},tt=["innerHTML"],et={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},ot=_(()=>e("br",null,null,-1)),st=_(()=>e("br",null,null,-1)),nt=_(()=>e("br",null,null,-1)),at={class:"col-span-1"};function it(t,g,r,f,v,n){const o=c("ob-skeleton"),i=c("PostStats"),m=c("Profile"),h=c("Toc"),a=c("Sidebar"),p=M("scroll-spy");return l(),d("div",G,[e("div",J,[t.post.title?(l(),d("h1",K,O(t.pageTitle),1)):(l(),j(o,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"})),e("div",Q,[s(i,{"post-word-count":t.post.count_time.symbolsCount,"post-time-count":t.post.count_time.symbolsTime,"post-title":t.post.title,"current-path":t.currentPath,"plugin-configs":t.pluginConfigs,comments:t.enabledComment,ref:"postStatsRef"},null,8,["post-word-count","post-time-count","post-title","current-path","plugin-configs","comments"])])]),e("div",W,[e("div",X,[t.post.content?E((l(),d("div",{key:0,class:"post-html",innerHTML:t.post.content},null,8,tt)),[[p,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(l(),d("div",et,[s(o,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),ot,s(o,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),st,nt,s(o,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})])),N(t.$slots,"default",{},void 0,!0)]),e("div",at,[s(a,null,{default:q(()=>[s(m,{author:"blog-author"}),s(h,{toc:t.post.toc,comments:t.enabledComment},null,8,["toc","comments"])]),_:1})])])])}const pt=D(F,[["render",it],["__scopeId","data-v-1d305902"]]);export{pt as P};
