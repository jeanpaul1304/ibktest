// [BPI]  Build version: 2.0.3 - 3:52:44 PM  
 webpackJsonp([65,75,102],{1008:function(e,t,n){"use strict";t.a={INTERVAL_ID:"INTERVAL_ID",COUNTER_UPDATE:"COUNTER_UPDATE",EXPIRATION_TIME_UPDATE:"EXPIRATION_TIME_UPDATE",INITIAL_TIMESTAMP_UPDATE:"INITIAL_TIMESTAMP_UPDATE",USER_STATUS_IDLE_SET:"USER_STATUS_IDLE_SET",REFRESH_TOKEN_LOADING:"REFRESH_TOKEN_LOADING"}},1189:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(102),i=n(1008),r=n(100),o=n(98),s=n(128),c=n(187),T=void 0,u={checkState:function(e){var t=e.dispatch,n=e.commit,i=e.state,r=e.rootState,o=Math.round((new Date).getTime()/1e3)-i.initialTimestamp,s=(o-i.intervalCheckTimeFirst)%i.intervalCheckTime==0&&o>i.intervalCheckTimeFirst,c=!1;i.expirationTime<=o?(t("timerReset"),t("logout",null,{root:!0}).then(function(){n("SET_SESSION_EXPIRED",!0,{root:!0}),a.a.then(function(e){e.replace({name:"Login"})})})):i.expirationTime<=o+i.modalTimePoint?r.controllerModals.TIMEOUT||(i.userIdle?(t("openModalController","TIMEOUT",{root:!0}),t("timerReset")):c=!0):(o===i.intervalCheckTimeFirst||s)&&(i.userIdle||(c=!0)),c&&t("refresh")},sessionClose:function(e){var t=e.dispatch,n=e.commit;e.state;t("timerReset"),n(i.a.USER_STATUS_IDLE_SET,!0)},sessionRefresh:function(e){var t=e.dispatch,n=e.commit,a=e.state,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];-1===a.intervalId&&t("timerSetup"),n(i.a.USER_STATUS_IDLE_SET,r)},timerReset:function(e){var t=(e.dispatch,e.commit),n=e.state;clearInterval(n.intervalId),t(i.a.INTERVAL_ID,-1)},timerSetup:function(e){var t=e.dispatch,n=e.commit,a=e.state;clearInterval(a.intervalId);var r=void 0;r=setInterval(function(){t("checkState")},1e3),n(i.a.INTERVAL_ID,r),T||t("userActivitySetupEvent")},userActivitySetupEvent:function(e){var t=(e.dispatch,e.commit),n=e.state,a=e.rootState,r=Math.round((new Date).getTime()/1e3)-n.initialTimestamp;T=function(){if(n.userIdle&&a.auth){var e=Math.round((new Date).getTime()/1e3)-n.initialTimestamp;e!==r&&!a.controllerModals.TIMEOUT&&e>8&&t(i.a.USER_STATUS_IDLE_SET,!1)}},document.addEventListener("mousemove",T,!0),document.addEventListener("keypress",T,!0),document.addEventListener("click",T,!0)},refresh:function(e){var t=e.dispatch,a=e.commit,T=e.state;if(!T.refreshTokenLoading)return t("sessionClose"),a(i.a.REFRESH_TOKEN_LOADING,!0),s.a.refresh(T.refreshToken).then(function(e){var s=n.i(o.g)(e.data.issuedAt);return a("INITIAL_TIMESTAMP_UPDATE",s),a("EXPIRATION_TIME_UPDATE",e.data.expiration*c.a),a(i.a.REFRESH_TOKEN_LOADING,!1),t("sessionRefresh"),a(r.a,"TIMEOUT",{root:!0}),e})}}},1190:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a,i=n(82),r=n.n(i),o=n(1008),s=(a={},r()(a,o.a.EXPIRATION_TIME_UPDATE,function(e,t){e.expirationTime=t}),r()(a,o.a.INITIAL_TIMESTAMP_UPDATE,function(e,t){e.initialTimestamp=t}),r()(a,o.a.INTERVAL_ID,function(e,t){e.intervalId=t}),r()(a,o.a.USER_STATUS_IDLE_SET,function(e,t){e.userIdle=t}),r()(a,o.a.REFRESH_TOKEN_LOADING,function(e,t){e.refreshTokenLoading=t}),a)},1191:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={counterSession:0,expirationTime:300,initialTimestamp:2300,intervalCheckTimeFirst:180,intervalCheckTime:90,intervalId:-1,modalTimePoint:45,userIdle:!0}},757:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(82),i=n.n(a),r=n(45),o=n.n(r),s=n(44),c=n.n(s),T=n(50),u=n.n(T),E=n(100),I=n(128),d={recaptchaToken:""},m={getRecaptchaToken:function(e){var t=this,n=e.commit;return new u.a(function(){var e=c()(o.a.mark(function e(a,i){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.getRecaptchaToken().then(function(e){e.data.tokenCaptcha&&n(E.b,e.data.tokenCaptcha),a()}).catch(function(e){i(e)});case 2:case"end":return e.stop()}},e,t)}));return function(t,n){return e.apply(this,arguments)}}())}},_=i()({},E.b,function(e,t){e.recaptchaToken=t}),l={};t.default={recaptcha:{namespaced:!0,actions:m,state:d,mutations:_,getters:l}}},758:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1190),i=n(1189),r=n(1191),o={};t.default={sessionRefresh:{namespaced:!0,state:r.a,mutations:a.a,actions:i.a,getters:o}}},787:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(758),i=n(757);t.default=[a.default,i.default]}}); 