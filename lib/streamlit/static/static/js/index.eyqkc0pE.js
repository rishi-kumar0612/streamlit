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

import{r as l,k as s,j as m,l as V,U as x}from"./index.EW72XqXJ.js";import{u as U}from"./useBasicWidgetState.CYCKMuui.js";import"./FormClearHelper.C6iU1_Of.js";const h=(t,e)=>t.getStringValue(e),v=t=>t.options.length===0||s(t.default)?null:t.options[t.default],w=t=>t.rawValue??null,y=(t,e,o,a)=>{e.setStringValue(t,o.value,{fromUi:o.fromUi},a)},C=({disabled:t,element:e,widgetMgr:o,fragmentId:a})=>{const{options:i,help:u,label:n,labelVisibility:c,placeholder:p,acceptNewOptions:f}=e,[g,r]=U({getStateFromWidgetMgr:h,getDefaultStateFromProto:v,getCurrStateFromProto:w,updateWidgetMgrState:y,element:e,widgetMgr:o,fragmentId:a}),b=l.useCallback(d=>{r({value:d,fromUi:!0})},[r]),S=s(e.default)&&!t;return m(x,{label:n,labelVisibility:V(c?.value),options:i,disabled:t,onChange:b,value:g,help:u,placeholder:p,clearable:S,acceptNewOptions:f??!1})},P=l.memo(C);export{P as default};
