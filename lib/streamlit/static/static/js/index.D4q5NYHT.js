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

import{s as u,r as L,I as v,e as h,j as i,v as C,S as E,w as b}from"./index.EW72XqXJ.js";import{w as T,E as W}from"./withFullScreenWrapper.CHzBmbfH.js";import{S as p,T as y}from"./Toolbar.CeH_BFPu.js";const F=u("div",{target:"e1mq0gaz0"})(({theme:e,shouldStretch:t})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",rowGap:e.spacing.lg,maxWidth:"100%",width:t?"100%":"fit-content"})),j=u("div",{target:"e1mq0gaz1"})(({theme:e,shouldStretch:t})=>({display:"flex",flexDirection:"column",alignItems:"stretch",width:t?"100%":"auto",flexGrow:t?1:0,">img":{borderRadius:e.radii.default}})),q=u("div",{target:"e1mq0gaz2"})(({theme:e})=>({textAlign:"center",marginTop:e.spacing.xs,wordWrap:"break-word",padding:e.spacing.threeXS})),H=b.getLogger("ImageList");function M(e,t,r){if(e){if(e.useStretch)return r;if(e.useContent)return;if(e.pixelWidth)return e.pixelWidth}if(t!=null)switch(t){case-1:case-3:case-4:return;case-2:case-5:return r;default:return t>0?t:void 0}}const R=({itemKey:e,image:t,imgStyle:r,buildMediaURL:l,handleImageError:s,shouldStretch:d})=>{const o=C(t.url);return h(j,{"data-testid":"stImageContainer",shouldStretch:d,children:[i("img",{style:r,src:l(t.url),alt:e,onError:s,crossOrigin:o}),t.caption&&i(q,{"data-testid":"stImageCaption",style:r,children:i(E,{source:t.caption,allowHTML:!1,isCaption:!0,isLabel:!0})})]})};function z({element:e,endpoints:t,widthConfig:r,disableFullscreenMode:l}){const{expanded:s,width:d,height:o,expand:x,collapse:f}=v(W),g=d||0,I=M(r,e.width,g),m=r?.useStretch||e.width===-5,a={};o&&s?(a.maxHeight=o,a.objectFit="contain",a.width="100%"):(a.width=I??"100%",a.maxWidth="100%");const w=c=>{const n=c.currentTarget.src;H.error(`Client Error: Image source error - ${n}`),t.sendClientErrorToHost("Image","Image source failed to load","onerror triggered",n)};return h(p,{width:g,height:o,useContainerWidth:s,topCentered:!0,children:[i(y,{target:p,isFullScreen:s,onExpand:x,onCollapse:f,disableFullscreenMode:l}),i(F,{className:"stImage","data-testid":"stImage",shouldStretch:m,children:e.imgs.map((c,n)=>i(R,{itemKey:n.toString(),image:c,imgStyle:a,buildMediaURL:S=>t.buildMediaURL(S),handleImageError:w,shouldStretch:m},n))})]})}const G=T(z),A=L.memo(G);export{A as default};
