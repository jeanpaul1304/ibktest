// [BPI]  Build version: 2.0.3 - 3:52:44 PM  
 webpackJsonp([91],{1475:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r}),t.d(n,"c",function(){return u}),t.d(n,"d",function(){return o}),t.d(n,"e",function(){return s});var a="USER_PASSWORD_SET",r="USERNEW_PASSWORD_SET",u="USERNEW_PASSWORD_REPEAT_SET",o="TYPE_DATA_CONSTANCY",s="TYPE_DATA_CONFIRM"},783:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,r=t(82),u=t.n(r),o=t(1475),s=t(299),c={constancy:{data:{operationCode:"",operationDate:"",operationTime:""},formatListConstancy:{}},confirm:{dataSmsToken:{},formatListConstancy:{}},userPasswordValue:[],usernewPasswordValue:[],usernewPasswordRepeatValue:[]},i={userPasswordSet:function(e,n){(0,e.commit)(o.a,n)},usernewPasswordSet:function(e,n){(0,e.commit)(o.b,n)},usernewPasswordRepeatSet:function(e,n){(0,e.commit)(o.c,n)},constancySetData:function(e,n){(0,e.commit)(o.d,n)},confirmSetData:function(e,n){(0,e.commit)(o.e,n)},validateCredentials:function(e,n){e.commit;return s.a.validateCredentials(n).then(function(e){return e.data})},generateToken:function(){return s.a.generateToken().then(function(e){return e.data})},execute:function(e,n){e.commit;return s.a.execute(n).then(function(e){return e.data})}},d=(a={},u()(a,o.d,function(e,n){e.constancy=n}),u()(a,o.e,function(e,n){e.confirm=n}),u()(a,o.a,function(e,n){e.userPasswordValue=n}),u()(a,o.b,function(e,n){e.usernewPasswordValue=n}),u()(a,o.c,function(e,n){e.usernewPasswordRepeatValue=n}),a),f={userPasswordValueGet:function(e){return e.userPasswordValue},usernewPasswordValueGet:function(e){return e.usernewPasswordValue},usernewPasswordRepeatValueGet:function(e){return e.usernewPasswordRepeatValue}};n.default={security:{namespaced:!0,actions:i,state:c,mutations:d,getters:f}}}}); 