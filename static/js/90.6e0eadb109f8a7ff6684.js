// [BPI]  Build version: 2.0.3 - 3:52:44 PM  
 webpackJsonp([90],{1496:function(e,t,n){"use strict";var o=n(6),r=n.n(o),i=n(1),u=n.n(i),a=n(2),s=n.n(a),c=n(8),l=n.n(c),f=n(7),d=n.n(f),p=n(5),v=function(e){function t(){return u()(this,t),l()(this,(t.__proto__||r()(t)).apply(this,arguments))}return d()(t,e),s()(t,[{key:"getFileDownload",value:function(e){return this.request({url:"informationRestService/info/download",method:"post",body:e})}}]),t}(p.a);t.a=new v},789:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1496),r={},i={},u={generalServicesExecute:function(e,t){e.commit;return o.a.getFileDownload(t).then(function(e){return e})}},a={};t.default={generalServices:{namespaced:!0,state:r,mutations:i,actions:u,getters:a}}}}); 