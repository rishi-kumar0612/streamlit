import{s as c,$ as l,r as i,j as a,ar as p}from"./index.DMS_Mh9x.js";import{P as d,R as f}from"./Particles.CTgB5B1g.js";const g=""+new URL("../media/flake-0.DgWaVvm5.png",import.meta.url).href,u=""+new URL("../media/flake-1.B2r5AHMK.png",import.meta.url).href,E=""+new URL("../media/flake-2.BnWSExPC.png",import.meta.url).href,o=150,s=150,S=10,x=90,_=4e3,e=(t,n=0)=>Math.random()*(t-n)+n,h=()=>l(`\r
  from{transform:translateY(0)\r
      rotateX(`,e(360),`deg)\r
      rotateY(`,e(360),`deg)\r
      rotateZ(`,e(360),"deg);}to{transform:translateY(calc(100vh + ",o,`px))\r
      rotateX(0)\r
      rotateY(0)\r
      rotateZ(0);}`),w=c("img",{target:"eholk810"})(({theme:t})=>({position:"fixed",top:`${-o}px`,marginLeft:`${-s/2}px`,zIndex:t.zIndices.balloons,left:`${e(x,S)}vw`,animationDelay:`${e(_)}ms`,height:`${o}px`,width:`${s}px`,pointerEvents:"none",animationDuration:"3000ms",animationName:h(),animationTimingFunction:"ease-in",animationDirection:"normal",animationIterationCount:1,opacity:1})),A=100,m=[g,u,E],I=m.length,M=i.memo(({particleType:t,resourceCrossOriginMode:n})=>{const r=m[t];return a(w,{src:r,crossOrigin:p(n,r)})}),k=function({scriptRunId:n}){return a(f,{children:a(d,{className:"stSnow","data-testid":"stSnow",scriptRunId:n,numParticleTypes:I,numParticles:A,ParticleComponent:M})})},L=i.memo(k);export{A as NUM_FLAKES,L as default};
