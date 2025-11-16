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

import{s as i,$ as m,r as c,j as n,ar as p}from"./index.EW72XqXJ.js";import{P as f,R as d}from"./Particles.-Rpp3VnU.js";const g=""+new URL("../media/balloon-0.Czj7AKwE.png",import.meta.url).href,B=""+new URL("../media/balloon-1.CNvFFrND.png",import.meta.url).href,L=""+new URL("../media/balloon-2.DTvC6B1t.png",import.meta.url).href,h=""+new URL("../media/balloon-3.CgSk4tbL.png",import.meta.url).href,u=""+new URL("../media/balloon-4.mbtFrzxf.png",import.meta.url).href,x=""+new URL("../media/balloon-5.CSwkUfRA.png",import.meta.url).href,t=300,e=121,s=20,A=80,_=1e3,I=m("from{transform:translateY(calc(100vh + ",t,"px));}to{transform:translateY(0);}"),M=i("img",{target:"eosrfo90"})(({theme:o})=>({position:"fixed",top:`${-t}px`,marginLeft:`${-e/2}px`,zIndex:o.zIndices.balloons,left:`${Math.random()*(A-s)+s}vw`,animationDelay:`${Math.random()*_}ms`,height:`${t}px`,width:`${e}px`,pointerEvents:"none",animationDuration:"750ms",animationName:I,animationTimingFunction:"ease-in",animationDirection:"normal",animationIterationCount:1,opacity:1})),b=30,r=[g,B,L,h,u,x],w=r.length,E=({particleType:o,resourceCrossOriginMode:l})=>{const a=r[o];return n(M,{src:a,crossOrigin:p(l,a)})},N=({scriptRunId:o})=>n(d,{children:n(f,{className:"stBalloons","data-testid":"stBalloons",scriptRunId:o,numParticleTypes:w,numParticles:b,ParticleComponent:E})}),P=c.memo(N);export{b as NUM_BALLOONS,P as default};
