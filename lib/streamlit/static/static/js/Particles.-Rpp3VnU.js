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

import{r as s,a7 as p,a8 as m,j as a,F as x,s as C,L as g,a9 as P}from"./index.EW72XqXJ.js";const E=({children:t})=>{const e=s.useContext(p)?.();return e?m.createPortal(t,e):a(x,{children:t})},f=C("div",{target:"e1swy67l0"})({"@media print":{display:"none"}}),u=({className:t,scriptRunId:e,numParticles:o,numParticleTypes:r,ParticleComponent:n})=>{const{resourceCrossOriginMode:i}=s.useContext(g),c=s.useMemo(()=>P(o).map(()=>Math.floor(Math.random()*r)),[o,r]);return a(f,{className:t,"data-testid":t,children:c.map((l,d)=>a(n,{particleType:l,resourceCrossOriginMode:i},e+d))})},M=s.memo(u);export{M as P,E as R};
