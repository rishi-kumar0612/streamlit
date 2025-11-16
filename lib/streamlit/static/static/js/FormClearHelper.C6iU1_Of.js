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

import{r as a,m as i,n}from"./index.EW72XqXJ.js";class l{manageFormClearListener(r,s,t){n(this.formClearListener)&&this.lastWidgetMgr===r&&this.lastFormId===s||(this.disconnect(),i(s)&&(this.formClearListener=r.addFormClearedListener(s,t),this.lastWidgetMgr=r,this.lastFormId=s))}disconnect(){this.formClearListener?.disconnect(),this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}}function d({element:e,widgetMgr:r,onFormCleared:s}){a.useEffect(()=>{if(!r||!i(e.formId))return;const t=r.addFormClearedListener(e.formId,s);return()=>{t.disconnect()}},[e,r,s])}export{l as F,d as u};
