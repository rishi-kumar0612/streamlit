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

import{r as o,L as k,B as i,j as e,a as b,b as g,c as R,D as C}from"./index.EW72XqXJ.js";import{c as L}from"./createDownloadLinkElement.ZaXNnPK4.js";function x(d){const{disabled:c,element:l,widgetMgr:u,endpoints:t,fragmentId:f}=d,{help:m,label:B,icon:w,ignoreRerun:D,type:s,url:r}=l,{enforceDownloadInNewTab:p=!1}=o.useContext(k);let n=i.SECONDARY;s==="primary"?n=i.PRIMARY:s==="tertiary"&&(n=i.TERTIARY);const a=o.useMemo(()=>t.buildDownloadUrl(r),[t,r]);o.useEffect(()=>{t.checkSourceUrlResponse(a,"Download Button")},[a,t]);const h=()=>{D||u.setTriggerValue(l,{fromUi:!0},f),L({filename:"",url:a,enforceDownloadInNewTab:p}).click()};return e("div",{className:"stDownloadButton","data-testid":"stDownloadButton",children:e(b,{help:m,containerWidth:!0,children:e(g,{kind:n,size:R.SMALL,disabled:c,onClick:h,containerWidth:!0,children:e(C,{icon:w,label:B})})})})}const A=o.memo(x);export{A as default};
