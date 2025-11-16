/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2025)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import{s as c,$ as l,r as i,j as a,ar as p}from"./index.EW72XqXJ.js";import{P as d,R as f}from"./Particles.-Rpp3VnU.js";const g=""+new URL("../media/flake-0.DgWaVvm5.png",import.meta.url).href,u=""+new URL("../media/flake-1.B2r5AHMK.png",import.meta.url).href,E=""+new URL("../media/flake-2.BnWSExPC.png",import.meta.url).href,o=150,s=150,S=10,x=90,_=4e3,e=(t,n=0)=>Math.random()*(t-n)+n,w=()=>l(`from{transform:translateY(0)
      rotateX(`,e(360),`deg)
      rotateY(`,e(360),`deg)
      rotateZ(`,e(360),"deg);}to{transform:translateY(calc(100vh + ",o,`px))
      rotateX(0)
      rotateY(0)
      rotateZ(0);}`),A=c("img",{target:"es7rdur0"})(({theme:t})=>({position:"fixed",top:`${-o}px`,marginLeft:`${-s/2}px`,zIndex:t.zIndices.balloons,left:`${e(x,S)}vw`,animationDelay:`${e(_)}ms`,height:`${o}px`,width:`${s}px`,pointerEvents:"none",animationDuration:"3000ms",animationName:w(),animationTimingFunction:"ease-in",animationDirection:"normal",animationIterationCount:1,opacity:1})),I=100,m=[g,u,E],M=m.length,h=i.memo(({particleType:t,resourceCrossOriginMode:n})=>{const r=m[t];return a(A,{src:r,crossOrigin:p(n,r)})}),P=function({scriptRunId:n}){return a(f,{children:a(d,{className:"stSnow","data-testid":"stSnow",scriptRunId:n,numParticleTypes:M,numParticles:I,ParticleComponent:h})})},L=i.memo(P);export{I as NUM_FLAKES,L as default};
