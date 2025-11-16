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

import{r as e,k as C}from"./index.EW72XqXJ.js";import{u as h}from"./FormClearHelper.C6iU1_Of.js";function p({getStateFromWidgetMgr:i,getDefaultState:r,updateWidgetMgrState:l,element:s,widgetMgr:u,fragmentId:o,onFormCleared:f}){const[n,t]=e.useState(()=>i(u,s)??r(u,s)),[c,a]=e.useState({value:n,fromUi:!1});e.useEffect(()=>{C(c)||(a(null),t(c.value),l(s,u,c,o))},[c,l,s,u,o]);const V=e.useCallback(()=>{a({value:r(u,s),fromUi:!0}),f?.()},[a,s,r,u,f]);return h({widgetMgr:u,element:s,onFormCleared:V}),[n,a]}function W({getStateFromWidgetMgr:i,getDefaultStateFromProto:r,getCurrStateFromProto:l,updateWidgetMgrState:s,element:u,widgetMgr:o,fragmentId:f,onFormCleared:n}){const t=e.useCallback((V,x)=>r(x),[r]),[c,a]=p({getStateFromWidgetMgr:i,getDefaultState:t,updateWidgetMgrState:s,element:u,widgetMgr:o,fragmentId:f,onFormCleared:n});return e.useEffect(()=>{u.setValue&&(u.setValue=!1,a({value:l(u),fromUi:!1}))},[u,l,a]),[c,a]}export{p as a,W as u};
