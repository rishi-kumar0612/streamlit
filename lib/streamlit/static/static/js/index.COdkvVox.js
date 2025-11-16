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

import{r as l,B as n,j as e,a as u,b as c,c as d,D as B,d as m}from"./index.EW72XqXJ.js";function p(i){const{disabled:o,element:t,widgetMgr:s,fragmentId:r}=i;let a=n.SECONDARY;return t.type==="primary"?a=n.PRIMARY:t.type==="tertiary"&&(a=n.TERTIARY),e(m,{className:"stButton","data-testid":"stButton",children:e(u,{help:t.help,containerWidth:!0,children:e(c,{kind:a,size:d.SMALL,disabled:o,containerWidth:!0,onClick:()=>s.setTriggerValue(t,{fromUi:!0},r),children:e(B,{icon:t.icon,label:t.label})})})})}const h=l.memo(p);export{h as default};
