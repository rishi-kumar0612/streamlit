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

import{r as n,s as f,as as p,at as h,u as x,a4 as y,j as i,au as g}from"./index.EW72XqXJ.js";const m=n.createContext(null);m.displayName="ElementFullscreenContext";const w=f("div",{target:"e13s7uld0"})(({theme:e,isExpanded:t})=>({width:"100%",height:"100%",...t?{position:"fixed",top:0,left:0,bottom:0,right:0,background:e.colors.bgColor,zIndex:e.zIndices.fullscreenWrapper,padding:e.spacing.md,paddingTop:e.sizes.fullScreenHeaderHeight,overflow:"auto",display:"flex",alignItems:"center",justifyContent:"center"}:{}})),C=()=>{const{setFullScreen:e}=n.useContext(p),[t,s]=n.useState(!1),{fullHeight:r,fullWidth:u}=h(),l=n.useCallback(a=>{s(a),e(a)},[e]),c=n.useCallback(()=>{document.body.style.overflow="hidden",l(!0)},[l]),o=n.useCallback(()=>{document.body.style.overflow="unset",l(!1)},[l]),d=n.useCallback(a=>{a.keyCode===27&&t&&o()},[o,t]);return n.useEffect(()=>(document.addEventListener("keydown",d,!1),()=>{document.removeEventListener("keydown",d,!1)}),[d]),n.useMemo(()=>({expanded:t,zoomIn:c,zoomOut:o,fullHeight:r,fullWidth:u}),[t,c,o,r,u])},F=({children:e})=>{const t=x(),{expanded:s,fullHeight:r,fullWidth:u,zoomIn:l,zoomOut:c}=C(),{width:o,elementRef:d}=y(),a=n.useMemo(()=>({width:s?u:o,height:s?r:void 0,expanded:s,expand:l,collapse:c}),[s,r,u,o,l,c]);return i(m.Provider,{value:a,children:i(w,{ref:d,isExpanded:s,"data-testid":"stFullScreenFrame",theme:t,children:e})})};function E(e){const t=s=>i(F,{children:i(e,{...s})});return t.displayName=`withFullScreenWrapper(${e.displayName||e.name})`,g(t,e)}export{m as E,E as w};
