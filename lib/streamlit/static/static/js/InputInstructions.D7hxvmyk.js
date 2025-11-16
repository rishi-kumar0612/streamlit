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

import{s as u,$ as d,j as c,a0 as p,a1 as f}from"./index.EW72XqXJ.js";const $=d("50%{color:rgba(0,0,0,0);}"),I=u("span",{target:"eh6ncro0"})(({includeDot:o,shouldBlink:n,theme:t})=>({...o?{"&::before":{opacity:1,content:'"•"',animation:"none",color:t.colors.grayTextColor,margin:`0 ${t.spacing.twoXS}`}}:{},...n?{color:t.colors.redTextColor,animationName:`${$}`,animationDuration:"0.5s",animationIterationCount:5}:{}})),b=({dirty:o,value:n,inForm:t,maxLength:r,className:m,type:a="single",allowEnterToSubmit:g=!0})=>{const s=[],i=(e,l=!1)=>{s.push(c(I,{includeDot:s.length>0,shouldBlink:l,children:e},s.length))};if(g){const e=t?"submit form":"apply";if(a==="multiline"){const l=f()?"⌘":"Ctrl";i(`Press ${l}+Enter to ${e}`)}else a==="single"&&i(`Press Enter to ${e}`)}return r&&(a!=="chat"||o)&&i(`${n.length}/${r}`,o&&n.length>=r),c(p,{"data-testid":"InputInstructions",className:m,children:s})};export{b as I};
