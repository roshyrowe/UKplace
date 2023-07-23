// ==UserScript==
// @name         PlaceUK Userscript
// @version      8b4556eefb6e4afa33c3ce01564fe3b9dce31f72
// @description  The easiest way to run our automated placer, right from your browser
// @author       PlaceUK
// @match        https://www.reddit.com/r/place/*
// @match        https://new.reddit.com/r/place/*
// @connect      reddit.com
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// ==/UserScript==

  (()=>{var e={235:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(81),o=n.n(i),a=n(645),s=n.n(a)()(o());s.push([e.id,"/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n",""]);const r=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(i)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},588:function(e){var t;t=function(e){var t=function(e){return new t.lib.init(e)};function n(e,t){return t.offset[e]?isNaN(t.offset[e])?t.offset[e]:t.offset[e]+"px":"0px"}function i(e,t){return!(!e||"string"!=typeof t||!(e.className&&e.className.trim().split(/\s+/gi).indexOf(t)>-1))}return t.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},t.lib=t.prototype={toastify:"1.12.0",constructor:t,init:function(e){return e||(e={}),this.options={},this.toastElement=null,this.options.text=e.text||t.defaults.text,this.options.node=e.node||t.defaults.node,this.options.duration=0===e.duration?0:e.duration||t.defaults.duration,this.options.selector=e.selector||t.defaults.selector,this.options.callback=e.callback||t.defaults.callback,this.options.destination=e.destination||t.defaults.destination,this.options.newWindow=e.newWindow||t.defaults.newWindow,this.options.close=e.close||t.defaults.close,this.options.gravity="bottom"===e.gravity?"toastify-bottom":t.defaults.gravity,this.options.positionLeft=e.positionLeft||t.defaults.positionLeft,this.options.position=e.position||t.defaults.position,this.options.backgroundColor=e.backgroundColor||t.defaults.backgroundColor,this.options.avatar=e.avatar||t.defaults.avatar,this.options.className=e.className||t.defaults.className,this.options.stopOnFocus=void 0===e.stopOnFocus?t.defaults.stopOnFocus:e.stopOnFocus,this.options.onClick=e.onClick||t.defaults.onClick,this.options.offset=e.offset||t.defaults.offset,this.options.escapeMarkup=void 0!==e.escapeMarkup?e.escapeMarkup:t.defaults.escapeMarkup,this.options.ariaLive=e.ariaLive||t.defaults.ariaLive,this.options.style=e.style||t.defaults.style,e.backgroundColor&&(this.options.style.background=e.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var e=document.createElement("div");for(var t in e.className="toastify on "+this.options.className,this.options.position?e.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(e.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):e.className+=" toastify-right",e.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)e.style[t]=this.options.style[t];if(this.options.ariaLive&&e.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)e.appendChild(this.options.node);else if(this.options.escapeMarkup?e.innerText=this.options.text:e.innerHTML=this.options.text,""!==this.options.avatar){var i=document.createElement("img");i.src=this.options.avatar,i.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?e.appendChild(i):e.insertAdjacentElement("afterbegin",i)}if(!0===this.options.close){var o=document.createElement("button");o.type="button",o.setAttribute("aria-label","Close"),o.className="toast-close",o.innerHTML="&#10006;",o.addEventListener("click",function(e){e.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var a=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&a>360?e.insertAdjacentElement("afterbegin",o):e.appendChild(o)}if(this.options.stopOnFocus&&this.options.duration>0){var s=this;e.addEventListener("mouseover",(function(t){window.clearTimeout(e.timeOutValue)})),e.addEventListener("mouseleave",(function(){e.timeOutValue=window.setTimeout((function(){s.removeElement(e)}),s.options.duration)}))}if(void 0!==this.options.destination&&e.addEventListener("click",function(e){e.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&e.addEventListener("click",function(e){e.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var r=n("x",this.options),c=n("y",this.options),l="left"==this.options.position?r:"-"+r,d="toastify-top"==this.options.gravity?c:"-"+c;e.style.transform="translate("+l+","+d+")"}return e},showToast:function(){var e;if(this.toastElement=this.buildToast(),!(e="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var n=t.defaults.oldestFirst?e.firstChild:e.lastChild;return e.insertBefore(this.toastElement,n),t.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(e){e.className=e.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),e.parentNode&&e.parentNode.removeChild(e),this.options.callback.call(e),t.reposition()}.bind(this),400)}},t.reposition=function(){for(var e,t={top:15,bottom:15},n={top:15,bottom:15},o={top:15,bottom:15},a=document.getElementsByClassName("toastify"),s=0;s<a.length;s++){e=!0===i(a[s],"toastify-top")?"toastify-top":"toastify-bottom";var r=a[s].offsetHeight;e=e.substr(9,e.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(a[s].style[e]=o[e]+"px",o[e]+=r+15):!0===i(a[s],"toastify-left")?(a[s].style[e]=t[e]+"px",t[e]+=r+15):(a[s].style[e]=n[e]+"px",n[e]+=r+15)}return this},t.lib.init.prototype=t.lib,t},e.exports?e.exports=t():this.Toastify=t()},239:(e,t,n)=>{"use strict";t.TV=t.Nm=void 0;var i,o=n(553);!function(e){e.asc="asc",e.desc="desc"}(i=t.Nm||(t.Nm={})),t.TV=function(e,t){void 0===t&&(t=i.asc);var n=Array.isArray(e)?o.fromArray(e):o.fromObject(e);return n.sort(t===i.desc?function(e,t){return t[1]-e[1]}:function(e,t){return e[1]-t[1]}),n}},553:(e,t)=>{"use strict";function n(e){return Math.pow(Math.random(),1/e)}Object.defineProperty(t,"__esModule",{value:!0}),t.fromObject=t.fromArray=t.weightFunc=void 0,t.weightFunc=n,t.fromArray=function(e){return e.map((function(e){return[e[0],n(e[1])]}))},t.fromObject=function(e){var t=[];for(var i in e)e.hasOwnProperty(i)&&t.push([i,n(e[i])]);return t}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e="a67d5062d1dddeeb7ec4dc0370b24e4c5b528c9a";var t=n(588),i=n(235);const o={TOAST_CONNECTING:"Connecting...",TOAST_CONNECTED:"Connected!",TOAST_LOST_CONNECTION:"Lost connection to server",TOAST_LOST_CONNECTION_BODY:"Reconnecting in a few seconds...",TOAST_SERVER_NOT_RESPONDING:"Server not responding",TOAST_SERVER_NOT_RESPONDING_BODY:"The server has not responded for a while. Reconnecting...",TOAST_DISCONNECTED_BY_SERVER:"Disconnected by server",TOAST_RECEIVED_NEW_ORDERS:"New orders have been announced, loading...",TOAST_UPDATE_DETECTED:"Userscript update detected! Reloading page to apply...",TOAST_SIGN_IN_REQUIRED:"You need to sign in to Reddit and reload the page!",TOAST_PLACE_PIXELS_IN:"Placing next pixel at {time}!",TOAST_PLACING_PIXEL:"Placing pixel...",TOAST_ALL_PIXELS_RIGHT:"All pixels are right!",TOAST_ALL_PIXELS_RIGHT_BODY:"Re-checking in 30 seconds...",TOAST_PLACING_PIXEL_AT:"Placing pixel at {x}, {y}...",TOAST_PLACED_PIXEL_AT:"Pixel placed at {x}, {y}!",HUD_NEXT_PIXEL_IN:"Next pixel in {time}...",HUD_PIXELS_CORRECT:"{right}/{total} pixels ({percentage}%) correct, {wrong} remaining"},a={...o,TOAST_CONNECTING:"Verbinden...",TOAST_CONNECTED:"Verbonden!",TOAST_LOST_CONNECTION:"Verbinding met server verbroken",TOAST_LOST_CONNECTION_BODY:"Herverbinden in een paar seconden...",TOAST_SERVER_NOT_RESPONDING:"Server reageert niet",TOAST_SERVER_NOT_RESPONDING_BODY:"De server heeft een tijdje niet gereageerd. Herverbinden...",TOAST_DISCONNECTED_BY_SERVER:"Verbinding verbroken by server",TOAST_RECEIVED_NEW_ORDERS:"Nieuwe orders zijn aangekondigd, laden...",TOAST_UPDATE_DETECTED:"Userscript update gedetecteerd! Pagina herladen om toe te passen...",TOAST_SIGN_IN_REQUIRED:"Je moet op reddit inloggen en de pagina herladen!",TOAST_PLACE_PIXELS_IN:"Volgende pixel wordt geplaatst om {time}!",TOAST_PLACING_PIXEL:"Pixel plaatsen...",TOAST_ALL_PIXELS_RIGHT:"Alle pixels kloppen!",TOAST_ALL_PIXELS_RIGHT_BODY:"Opnieuw checken over 30 seconden...",TOAST_PLACING_PIXEL_AT:"Pixel plaatsen op {x}, {y}...",TOAST_PLACED_PIXEL_AT:"Pixel geplaatst op {x}, {y}!",HUD_NEXT_PIXEL_IN:"Volgende pixel over {time}...",HUD_PIXELS_CORRECT:"{right}/{total} pixels ({percentage}%) kloppen, {wrong} over"};function s(){return navigator.languages.includes("nl")?a:o}const r=t({text:"PlaceUK Userscript",duration:-1,close:!1,gravity:"bottom",position:"right",style:{background:"#e17000",opacity:.75,color:"white",borderWidth:"2px",borderStyle:"solid",borderImage:"linear-gradient(180deg, red 33.3%, white 33.3%, white 66.6%, mediumblue 66.6%) 1 1",zIndex:1e5,transition:"none"}}).showToast();function c(e){r.title=e,d()}function l(e){r.body=e,d()}function d(){r.options.text=`PlaceUK Userscript (version ${e.slice(0,7)}${("undefined"!=typeof unsafeWindow?unsafeWindow:window).PLACENL_USERSCRIPT_AUTO_UPDATER?"-auto":""}) | ${r.title}\n${r.body}`,r.hideToast(),r.toastElement.parentNode.removeChild(r.toastElement),r.showToast()}function p(e,n=undefined,i=5e3){t({text:n?e+"\n"+n:e,duration:i,close:!1,gravity:"top",position:"right",stopOnFocus:!0,style:{background:"#001F3F",border:"2.5px solid #0074D9",zIndex:1e3}}).showToast()}function u(e,n=undefined,i=1e4){t({text:n?e+"\n"+n:e,duration:i,close:!1,gravity:"top",position:"right",stopOnFocus:!0,style:{background:"#FF851B",border:"2.5px solid #FFDC00",zIndex:1e3}}).showToast()}function h(e,t,n=0,i=0){return new Promise((async(o,a)=>{const s=await fetch(t),r=(window.URL||window.webkitURL).createObjectURL(await s.blob()),c=new Image;c.onload=()=>{e.drawImage(c,n,i),o()},c.onerror=e=>{a(e)},c.src=r}))}r.title=r.body="";const f=3e5,m=15e3;async function T(e,t=!1){if(e.session&&e.session.expires.getTime()-m<Date.now())return e.session.token;const n=await fetch("/r/place"),i=(await n.text()).split('<script id="data">window.___r = ')[1].split(";<\/script>")[0],o=JSON.parse(i);return o.user.session.unsafeLoggedOut?t?o.user.session.accessToken:null:(e.session={expires:new Date(o.user.session.expires),token:o.user.session.accessToken},e.session.token)}async function g(e,t,n,i,o){const a=await T(e);if(!a)return[!1];const s=await fetch("https://gql-realtime-2.reddit.com/query",{credentials:"omit",headers:{"content-type":"application/json",authorization:`Bearer ${a}`,"apollographql-client-name":"garlic-bread","apollographql-client-version":"0.0.1","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"},referrer:"https://garlic-bread.reddit.com/",body:JSON.stringify({operationName:"setPixel",variables:{input:{actionName:"r/replace:set_pixel",PixelMessageData:{coordinate:{x:t,y:n},colorIndex:i,canvasIndex:o}}},query:"mutation setPixel($input: ActInput!) {\n  act(input: $input) {\n    data {\n      ... on BasicMessage {\n        id\n        data {\n          ... on GetUserCooldownResponseMessageData {\n            nextAvailablePixelTimestamp\n            __typename\n          }\n          ... on SetPixelResponseMessageData {\n            timestamp\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"}),method:"POST",mode:"cors"}),r=await s.json();if(!r.data){let e=r.errors?.find((e=>e.extensions?.nextAvailablePixelTs))?.extensions.nextAvailablePixelTs;return[!1,e]}return[!0,r.data.act.data.find((e=>"GetUserCooldownResponseMessageData"===e.data.__typename)).data.nextAvailablePixelTimestamp]}var _=n(239);function y(e,t,n,i){return 0===i?0:(e<<16)+(t<<8)+n}const w=["#6D001A","#BE0039","#FF4500","#FFA800","#FFD635","#FFF8B8","#00A368","#00CC78","#7EED56","#00756F","#009EAA","#00CCC0","#2450A4","#3690EA","#51E9F4","#493AC1","#6A5CFF","#94B3FF","#811E9F","#B44AC0","#E4ABFF","#DE107F","#FF3881","#FF99AA","#6D482F","#9C6926","#FFB470","#000000","#515252","#898D90","#D4D7D9","#FFFFFF"];function E(e){const t=e.toString(16);return 1===t.length?"0"+t:t}function b([e,t,n]){return"#"+E(e)+E(t)+E(n)}const v={ws:new class{ws;id;lastPing;connectionTimeoutChecker;keepaliveTimeout;keepaliveCheckerInterval;connected=!1;capabilities=["priorityMappings"];connect(n){this.connected=!1,this.ws=new WebSocket("wss://placeuk.g3v.co.uk/ws"),this.connectionTimeoutChecker=setTimeout((()=>{this.ws.close()}),1e4),p(s().TOAST_CONNECTING),c(s().TOAST_CONNECTING),this.lastPing=new Date,this.ws.onopen=()=>{p(s().TOAST_CONNECTED),c(s().TOAST_CONNECTED),clearTimeout(this.connectionTimeoutChecker),this.keepaliveCheckerInterval=setInterval((()=>{this.keepaliveTimeout&&(Date.now()-this.lastPing.getTime()<=this.keepaliveTimeout||(u(s().TOAST_SERVER_NOT_RESPONDING,s().TOAST_SERVER_NOT_RESPONDING_BODY),this.ws.close()))}),1e3)},this.ws.onclose=()=>{n.canvasPlacer.mayPlace=!1,u(s().TOAST_LOST_CONNECTION,s().TOAST_LOST_CONNECTION_BODY),clearInterval(this.keepaliveCheckerInterval),this.connected=!1,setTimeout((()=>{this.connect(n)}),2500)},this.ws.onerror=()=>{this.ws.close()},this.ws.onmessage=i=>{const o=JSON.parse(i.data),{type:a,payload:r}=o;switch(a){case"error":console.warn("Got error: ",r);break;case"announcement":!function(e){if(t({message:e.message,duration:e.showFor??(e.important?f:6e4),style:e.style??void 0}).showToast(),e.important){const t=document.title;document.title=`(!!!) ${t} (!!!)`,setTimeout((()=>document.title=t),e.showFor??f)}}(r);break;case"disconnect":!function(e){u(s().TOAST_DISCONNECTED_BY_SERVER,e.message??e.reason),console.warn("Disconnected by server!",e)}(r);break;case"hello":!async function(t,n){t.ws.connected=!0,t.ws.id=n.id,t.ws.keepaliveTimeout=n.keepaliveTimeout,t.ws.subscribe("announcements"),t.ws.subscribe("orders"),t.ws.subscribe("stats");for(const e of t.ws.capabilities)t.ws.enableCapability(e);t.ws.sendPayload("brand",{author:"PlaceUK",name:"Userscript",version:e+(("undefined"!=typeof unsafeWindow?unsafeWindow:window).PLACENL_USERSCRIPT_AUTO_UPDATER?"-auto":"")}),t.ws.sendPayload("getOrder"),t.canvasPlacer.mayPlace=!0}(n,r);break;case"order":!async function(e,t){p(s().TOAST_RECEIVED_NEW_ORDERS),e.orderReference.clearRect(0,0,e.orderReference.canvas.width,e.orderReference.canvas.height),e.orderPriority.clearRect(0,0,e.orderPriority.canvas.width,e.orderPriority.canvas.height);let n=1500+t.offset.x,i=1e3+t.offset.y;await Promise.all([h(e.orderReference,t.images.order,n,i),t.images.priority?h(e.orderPriority,t.images.priority,n,i):Promise.resolve()])}(n,r);break;case"ping":!function(e){e.ws.lastPing=new Date,e.ws.sendPayload("pong")}(n);break;case"stats":!function(e,t){e.completion=t.completion}(n,r);break;case"brandUpdated":case"enabledCapability":case"disabledCapability":case"subscribed":case"unsubscribed":break;default:console.warn(`Unknown payload type '${a}'`)}}}sendPayload(e,t){this.ws.send(JSON.stringify({type:e,payload:t}))}subscribe(e){this.sendPayload("subscribe",e)}unsubscribe(e){this.sendPayload("unsubscribe",e)}enableCapability(e){this.capabilities.includes(e)||this.capabilities.push(e),this.sendPayload("enableCapability",e)}disableCapability(e){this.capabilities.includes(e)&&this.capabilities.splice(this.capabilities.indexOf(e),1),this.sendPayload("disableCapability",e)}},orderReference:O("placenl-userscript-order-reference"),orderPriority:O("placenl-userscript-order-priority"),placeReference:O("placenl-userscript-place-reference"),canvasPlacer:new class{mayPlace=!1;cooldownEndsAt=void 0;placing=!1;placingSince=0;startTimer(e){setInterval((async()=>{this.placing&&Date.now()-this.placingSince>3e4&&(this.placing=!1);let t="";if(e.completion){const n=100-e.completion.wrong/e.completion.total*100;t=`${s().HUD_PIXELS_CORRECT.replace("{right}",e.completion.right).replace("{total}",e.completion.total).replace("{percentage}",n.toFixed(1)).replace("{wrong}",e.completion.wrong)}\n`}if(!this.mayPlace||this.placing)return void l(t);if(!this.cooldownEndsAt)return void 0===this.cooldownEndsAt&&(this.cooldownEndsAt=null,this.cooldownEndsAt=await async function(e){const t=await T(e);if(!t)return;const n=await fetch("https://gql-realtime-2.reddit.com/query",{credentials:"omit",headers:{"content-type":"application/json",authorization:`Bearer ${t}`,"apollographql-client-name":"garlic-bread","apollographql-client-version":"0.0.1","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"},referrer:"https://garlic-bread.reddit.com/",body:JSON.stringify({query:'mutation GetPersonalizedTimer{\n  act(\n    input: {actionName: "r/replace:get_user_cooldown"}\n  ) {\n    data {\n      ... on BasicMessage {\n        id\n        data {\n          ... on GetUserCooldownResponseMessageData {\n            nextAvailablePixelTimestamp\n          }\n        }\n      }\n    }\n  }\n}\n\n\nsubscription SUBSCRIBE_TO_CONFIG_UPDATE {\n  subscribe(input: {channel: {teamOwner: GARLICBREAD, category: CONFIG}}) {\n    id\n    ... on BasicMessage {\n      data {\n        ... on ConfigurationMessageData {\n          __typename\n          colorPalette {\n            colors {\n              hex\n              index\n            }\n          }\n          canvasConfigurations {\n            dx\n            dy\n            index\n          }\n          canvasWidth\n          canvasHeight\n        }\n      }\n    }\n  }\n}\n\n\nsubscription SUBSCRIBE_TO_CANVAS_UPDATE {\n  subscribe(\n    input: {channel: {teamOwner: GARLICBREAD, category: CANVAS, tag: "0"}}\n  ) {\n    id\n    ... on BasicMessage {\n      id\n      data {\n        __typename\n        ... on DiffFrameMessageData {\n          currentTimestamp\n          previousTimestamp\n          name\n        }\n        ... on FullFrameMessageData {\n          __typename\n          name\n          timestamp\n        }\n      }\n    }\n  }\n}\n\n\n\n\nmutation SET_PIXEL {\n  act(\n    input: {actionName: "r/replace:set_pixel", PixelMessageData: {coordinate: { x: 53, y: 35}, colorIndex: 3, canvasIndex: 0}}\n  ) {\n    data {\n      ... on BasicMessage {\n        id\n        data {\n          ... on SetPixelResponseMessageData {\n            timestamp\n          }\n        }\n      }\n    }\n  }\n}\n\n\n\n\n# subscription configuration($input: SubscribeInput!) {\n#     subscribe(input: $input) {\n#       id\n#       ... on BasicMessage {\n#         data {\n#           __typename\n#           ... on RReplaceConfigurationMessageData {\n#             colorPalette {\n#               colors {\n#                 hex\n#                 index\n#               }\n#             }\n#             canvasConfigurations {\n#               index\n#               dx\n#               dy\n#             }\n#             canvasWidth\n#             canvasHeight\n#           }\n#         }\n#       }\n#     }\n#   }\n\n# subscription replace($input: SubscribeInput!) {\n#   subscribe(input: $input) {\n#     id\n#     ... on BasicMessage {\n#       data {\n#         __typename\n#         ... on RReplaceFullFrameMessageData {\n#           name\n#           timestamp\n#         }\n#         ... on RReplaceDiffFrameMessageData {\n#           name\n#           currentTimestamp\n#           previousTimestamp\n#         }\n#       }\n#     }\n#   }\n# }\n',variables:{input:{channel:{teamOwner:"GARLICBREAD",category:"R_REPLACE",tag:"canvas:0:frames"}}},operationName:"GetPersonalizedTimer",id:null}),method:"POST",mode:"cors"}),i=await n.json();return i.data?i.data.act.data[0].data.nextAvailablePixelTimestamp||1:void 0}(e),this.cooldownEndsAt&&p(s().TOAST_PLACE_PIXELS_IN.replace("{time}",new Date(this.cooldownEndsAt).toLocaleTimeString()),null,Math.max(this.cooldownEndsAt-Date.now(),1e3))),void l(t);let n=Math.floor(Math.max(0,this.cooldownEndsAt-Date.now())/1e3),i=Math.floor(n/60);if(n%=60,t+=`${s().HUD_NEXT_PIXEL_IN.replace("{time}",`${String(i).padStart(2,"0")}:${String(n).padStart(2,"0")}`)}\n`,l(t),!(this.cooldownEndsAt>Date.now())){this.placing=!0,this.placingSince=Date.now(),e.ws.enableCapability("placeNow"),p(s().TOAST_PLACING_PIXEL);try{const t=await function(e,t){return new Promise((async(n,i)=>{const o=await T(e,!0),a=new WebSocket("wss://gql-realtime-2.reddit.com/query");function s(e){a.send(JSON.stringify({id:"2",type:"start",payload:{variables:{input:{channel:{teamOwner:"GARLICBREAD",category:"CANVAS",tag:String(e)}}},extension:{},operationName:"replace",query:"subscription replace($input: SubscribeInput!) {    subscribe(input: $input) {        id        ... on BasicMessage {            data {                __typename                ... on FullFrameMessageData {                    __typename                    name                    timestamp                }            }            __typename        }        __typename    }}"}}))}a.addEventListener("open",(()=>{a.send(JSON.stringify({type:"connection_init",payload:{Authorization:`Bearer ${o}`}})),s(t.shift())}));let r=[];a.addEventListener("message",(e=>{const i=e.data,{payload:o}=JSON.parse(i);if(!o?.data?.subscribe?.data)return;const{__typename:c,name:l}=o.data.subscribe.data;"FullFrameMessageData"===c&&(r.push(`https://garlic-proxy.placenl.nl/${new URL(l).pathname.replace(/^\/media\//,"")}?bust=${Date.now()}`),0===t.length?(a.close(),n(r)):s(t.shift()))})),a.addEventListener("error",(e=>i(e)))}))}(e,[0,1,2,3,4,5]);e.placeReference.clearRect(0,0,e.placeReference.canvas.width,e.placeReference.canvas.height),await Promise.all([h(e.placeReference,t[0],0,0),h(e.placeReference,t[1],1e3,0),h(e.placeReference,t[2],2e3,0),h(e.placeReference,t[3],0,1e3),h(e.placeReference,t[4],1e3,1e3),h(e.placeReference,t[5],2e3,1e3)]);const n=function(e){const t=[],n=e.orderReference.getImageData(0,0,e.orderReference.canvas.width,e.orderReference.canvas.height),i=e.orderPriority.getImageData(0,0,e.orderPriority.canvas.width,e.orderPriority.canvas.height),o=e.placeReference.getImageData(0,0,e.placeReference.canvas.width,e.placeReference.canvas.height);for(let e=0;e<n.height;e++)for(let a=0;a<n.width;a++){const s=4*(e*n.width+a);if(0===n.data[s+3])continue;const r=n.data[s],c=n.data[s+1],l=n.data[s+2],d=o.data[s],p=o.data[s+1],u=o.data[s+2];if(r===d&&c===p&&l===u)continue;let h=y(i.data[s],i.data[s+1],i.data[s+2],i.data[s+3]);h+=Math.floor(1e4*Math.random()),t.push([[a,e,[r,c,l]],h])}return(0,_.TV)(t,"desc").map((e=>e[0]))}(e);if(0!==n.length)for(;0!==n.length;){let t=n.shift();const i=b(t[2]),o=w.indexOf(i.toUpperCase());if(-1===o)continue;let a=t[0],r=t[1],c=0;c=r<1e3?a<1e3?0:a>=2e3?2:1:a<1e3?3:a>=2e3?5:4;let l=a-1500,d=r-1e3;a%=1e3,r%=1e3,p(s().TOAST_PLACING_PIXEL_AT.replace("{x}",l).replace("{y}",d));let[u,h]=await g(e,a,r,o,c);if(h){this.cooldownEndsAt=h;let e=Math.max(this.cooldownEndsAt-Date.now(),1e3);u&&p(s().TOAST_PLACED_PIXEL_AT.replace("{x}",l).replace("{y}",d),null,e),p(s().TOAST_PLACE_PIXELS_IN.replace("{time}",new Date(this.cooldownEndsAt).toLocaleTimeString()),null,e)}break}else p(s().TOAST_ALL_PIXELS_RIGHT,s().TOAST_ALL_PIXELS_RIGHT_BODY,3e4),this.cooldownEndsAt=Date.now()+3e4}finally{this.placing=!1,e.ws.disableCapability("placeNow")}}}),1e3)}},completion:void 0};function O(e){const t=document.createElement("canvas");t.width=3e3,t.height=2e3;const n=t.getContext("2d");return t.style.display="none",t.id=e,document.body.appendChild(t),n}!function(){const e=document.createElement("style");e.innerText=i.Z,document.body.appendChild(e)}(),function(){let e="undefined"!=typeof unsafeWindow?unsafeWindow:window;e.PLACENL_USERSCRIPT_AUTO_UPDATER&&(e.PLACENL_USERSCRIPT_AUTO_UPDATER.updateHook=()=>{p(s().TOAST_UPDATE_DETECTED)})}(),v.ws.connect(v),async function(){await T(v,!1)?(v.ws.enableCapability("place"),v.canvasPlacer.startTimer(v)):u(s().TOAST_SIGN_IN_REQUIRED,null,1e8)}(),("undefined"!=typeof unsafeWindow?unsafeWindow:window).PLACENL_USERSCRIPT_CLIENT=v})()})();
