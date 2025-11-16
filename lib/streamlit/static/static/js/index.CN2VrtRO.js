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

import{s as a,r as t,n as i,j as d,G as e,H as c,k as l}from"./index.EW72XqXJ.js";const g=a("iframe",{target:"evfee5y0"})(({theme:o,disableScrolling:r})=>({width:"100%",height:"100%",colorScheme:"normal",border:"none",padding:o.spacing.none,margin:o.spacing.none,overflow:r?"hidden":void 0}));function n(o){return l(o)||o===""?void 0:o}function f({element:o}){const r=n(o.src),s=i(r)?void 0:n(o.srcdoc);return d(g,{className:"stIFrame","data-testid":"stIFrame",allow:c,disableScrolling:!o.scrolling,src:r,srcDoc:s,scrolling:o.scrolling?"auto":"no",sandbox:e,title:"st.iframe",tabIndex:o.tabIndex??void 0})}const I=t.memo(f);export{I as default};
