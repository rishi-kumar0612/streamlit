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

import{s as l,r as i,v as A,j as f,w as g}from"./index.EW72XqXJ.js";const T=l("div",{target:"ea9qfvi0"})(()=>({lineHeight:0})),y=l("audio",{target:"ea9qfvi1"})(({theme:t})=>({width:"100%",height:t.sizes.minElementHeight,margin:0,padding:0})),h=g.getLogger("Audio");function L({element:t,endpoints:a,elementMgr:u}){const o=i.useRef(null),{startTime:n,endTime:d,loop:s,autoplay:p}=t,E=i.useMemo(()=>{if(!t.id)return!0;const e=u.getElementState(t.id,"preventAutoplay");return e||u.setElementState(t.id,"preventAutoplay",!0),e??!1},[t.id,u]);i.useEffect(()=>{o.current&&(o.current.currentTime=n)},[n]),i.useEffect(()=>{const e=o.current,r=()=>{e&&(e.currentTime=t.startTime)};return e&&e.addEventListener("loadedmetadata",r),()=>{e&&e.removeEventListener("loadedmetadata",r)}},[t]),i.useEffect(()=>{const e=o.current;if(!e)return;let r=!1;const c=()=>{d>0&&e.currentTime>=d&&(s?(e.currentTime=n||0,e.play()):r||(r=!0,e.pause()))};return d>0&&e.addEventListener("timeupdate",c),()=>{e&&d>0&&e.removeEventListener("timeupdate",c)}},[d,s,n]),i.useEffect(()=>{const e=o.current;if(!e)return;const r=()=>{s&&(e.currentTime=n||0,e.play())};return e.addEventListener("ended",r),()=>{e&&e.removeEventListener("ended",r)}},[s,n]);const m=A(t.url),v=a.buildMediaURL(t.url);return f(T,{children:f(y,{className:"stAudio","data-testid":"stAudio",ref:o,controls:!0,autoPlay:p&&!E,src:v,onError:e=>{const r=e.currentTarget.src;h.error(`Client Error: Audio source error - ${r}`),a.sendClientErrorToHost("Audio","Audio source failed to load","onerror triggered",r)},crossOrigin:m})})}const C=i.memo(L);export{C as default};
