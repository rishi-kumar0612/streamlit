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

import{r as a,a5 as p}from"./index.EW72XqXJ.js";import{i as b}from"./inputUtils.CptNuJwn.js";function i({formId:r,maxChars:s,setDirty:n,setUiValue:e,setValueWithSource:f,additionalAction:t}){return a.useCallback(u=>{const{value:o}=u.target;s!==0&&o.length>s||(n(!0),e(o),p({formId:r})&&f({value:o,fromUi:!0}),t&&t())},[r,s,n,e,f,t])}function F(r,s,n,e,f,t=!1){return a.useCallback(u=>{const o=t?u.metaKey||u.ctrlKey:!0;!b(u)||!o||(u.preventDefault(),n&&s(),e.allowFormEnterToSubmit(r)&&e.submitForm(r,f))},[r,f,n,s,e,t])}function K(r,s,n,e){a.useEffect(()=>{e||r!==s&&n(r)},[r,s,e,n])}export{i as a,F as b,K as u};
