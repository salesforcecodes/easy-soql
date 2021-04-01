(this["webpackJsonpeasy-soql"]=this["webpackJsonpeasy-soql"]||[]).push([[0],{237:function(e,t,n){},250:function(e,t){},252:function(e,t){},310:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),i=n(14),o=n.n(i),s=(n(237),n(6)),l=n(377),u=n(378),j=n(374),d=n(212),b=n(66),h=n(210),O=n(57),p=n(373),m=n(379),g=n(380),f=n(56),x=n(50),v=n(76),y=n.n(v),w=n(105),S=n(63),k=n(202),L=n.n(k),C=null,E=function(e){C=new L.a.Connection({instanceUrl:e.instance_url,accessToken:e.access_token})},q={init:E,getUserInfo:function(e,t){return new Promise((function(n,c){E(e),C.query("SELECT Id, Name, Email FROM User WHERE Id = '".concat(t,"'"),(function(e,t){e&&(console.log("@@@","ERROR_HTTP_400"===e.name,JSON.stringify(e),e),c(e)),n(t)}))}))},getObjects:function(){var e=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){C.describeGlobal((function(n,c){n&&t(n),console.log(c),e(c)}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),QueryHook:function(e){var t=Object(a.useState)({}),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),o=Object(s.a)(i,2),l=o[0],u=o[1],j=Object(a.useState)(""),d=Object(s.a)(j,2),b=d[0],h=d[1];return Object(a.useEffect)((function(){e&&(u(!0),console.log("Querying",e),C.query(e,(function(e,t){u(!1),e?(console.log(e.message,JSON.stringify(e),e),h(e),r({totalSize:0,done:!0,records:[]})):(h(""),console.log(t),r(t))})))}),[e]),[c,l,b]}},T=Object(S.b)("auth/getUserInfo",function(){var e=Object(w.a)(y.a.mark((function e(t,n){var c,a,r,i,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c=n.getState().auth.activeLogin)){e.next=23;break}return a=c.id.split("/"),r=a[a.length-1],e.prev=4,e.next=7,q.getUserInfo(c,r);case 7:i=e.sent,e.next=20;break;case 10:if(e.prev=10,e.t0=e.catch(4),"ERROR_HTTP_400"!==e.t0.name){e.next=20;break}return o={url:c.instance_url,token:c.access_token},e.next=16,fetch("https://sfwizard.herokuapp.com/api/deploy/salesforceCodesCors",{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json; charset=UTF-8"}});case 16:return e.sent,e.next=19,q.getUserInfo(c,r);case 19:i=e.sent;case 20:return e.abrupt("return",i);case 23:throw Error("No active login");case 24:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t,n){return e.apply(this,arguments)}}()),N=Object(S.c)({name:"auth",initialState:{logins:[],activeLogin:null,isConnecting:!1},reducers:{addLogin:function(e,t){e.logins.push(t.payload),e.activeLogin=t.payload,console.log(JSON.stringify(e))},removeLogin:function(e,t){e.logins=e.logins.filter((function(e){return e.id!==t.payload})),e.activeLogin&&e.activeLogin.id===t.payload&&(e.activeLogin=null)},selectLogin:function(e,t){e.activeLogin=e.logins.filter((function(e){return e.id===t.payload}))[0]}},extraReducers:(c={},Object(x.a)(c,T.pending,(function(e,t){e.isConnecting=!0})),Object(x.a)(c,T.fulfilled,(function(e,t){var n=t.payload;if(n.done){var c=n.records[0];console.log("success"),e.activeLogin.userId=c.Id,e.activeLogin.email=c.Email,e.activeLogin.name=c.Name,e.isConnecting=!1}})),Object(x.a)(c,T.rejected,(function(e,t){t.payload;e.isConnecting=!1})),c)}),I=N.actions,B=I.addLogin,U=(I.removeLogin,I.selectLogin,N.reducer),_=(n(310),n(71)),R=Object(_.a)({palette:{}}),Q=n(37),P=Object(Q.a)((function(e){return{container:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},headerTitle:{flexGrow:1},logo:{margin:"0 1em"},marginButton:{margin:e.spacing(1)},queryBuilder:{width:"100%",fontSize:"2em"},queryAnimation:{width:"100%"}}})),z=n(369),H=n(370),F=n(89),M=n(321),J=n(383),A=n(322),V=n(382),G=n(218),X=n(67),$={clientId:"3MVG9Nk1FpUrSQHfKNnaUF1dVrBEebKXe8t9H.kyVVrVqQ9Ccvq7B4ay2EjXuj0.P_UjHlH7F1h7TonXqOy_p",redirectUri:window.location.href.includes("localhost")?window.location.origin:window.location.href},D=n(5),K="Please enter a value";var W=function(){var e=function(e){return"".concat(e,"/services/oauth2/authorize?response_type=token&client_id=").concat($.clientId,"&redirect_uri=").concat($.redirectUri)},t=Object(a.useState)("login"),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),o=Object(s.a)(i,2),l=(o[0],o[1]),u=Object(a.useState)(""),j=Object(s.a)(u,2),b=j[0],h=j[1],O=Object(a.useState)(e("https://login.salesforce.com")),p=Object(s.a)(O,2),m=p[0],g=p[1];return Object(D.jsxs)(z.a,{children:[Object(D.jsx)(d.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Easy SOQL"}),Object(D.jsx)(d.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0,children:"Easily build SOQL queries against your Salesforce environments"}),Object(D.jsx)("br",{}),Object(D.jsx)("div",{children:Object(D.jsxs)(H.a,{container:!0,justify:"center",direction:"column",alignItems:"center",children:[Object(D.jsx)(H.a,{item:!0,children:Object(D.jsxs)(F.a,{component:"fieldset",children:[Object(D.jsx)(M.a,{component:"legend",children:"Type of environment"}),Object(D.jsxs)(J.a,{"aria-label":"envType",name:"envType",value:c,onChange:function(t){var n=t.target.value;r(n),h(""),"login"===n?g(e("https://login.salesforce.com")):"test"===n&&g(e("https://test.salesforce.com"))},children:[Object(D.jsx)(A.a,{value:"login",control:Object(D.jsx)(V.a,{}),label:"Production/Developer"}),Object(D.jsx)(A.a,{value:"test",control:Object(D.jsx)(V.a,{}),label:"Sandbox"}),Object(D.jsx)(A.a,{value:"custom",control:Object(D.jsx)(V.a,{}),label:"Custom URL"})]}),"custom"===c&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(G.a,{variant:"standard",placeholder:"Domain URL here..",required:!0,onChange:function(t){var n=t.target.value;l(n),n?((n=n.replace(/^(https:\/\/)/,"").replace(/^(http:\/\/)/,"").replace(/^(http:)/,"").replace(/^(http)/,"").replace(/^(htt)/,"").replace(/^(www\.)/,"")).includes(".")&&(n=n.split(".")[0]),g(e("https://".concat(n,".my.salesforce.com"))),h("https://".concat(n,".my.salesforce.com"))):h(K)}}),b]})]})}),Object(D.jsxs)(H.a,{item:!0,children:[Object(D.jsx)("br",{}),Object(D.jsx)(X.a,{onClick:function(){"custom"!==c||b&&b!==K?window.location.href=m:alert("Please enter a domain name")},variant:"contained",children:"Login"})]})]})})]})},Y=n(323),Z=n(375),ee=n(381),te=n(376),ne=Object(S.c)({name:"soqlBuilder",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),ce=ne.actions,ae=(ce.increment,ce.decrement,ce.incrementByAmount,ne.reducer),re=n(207),ie=n(156);var oe=function(e){var t=e.result,n=e.query,c=[],a=[],r=[];if(n&&t&&t.records){for(var i=n.split(","),o=0;o<i.length;o++)0===o?c.push(i[o].trim().split(" ")[i[o].split(" ").length-1].trim()):c.push(i[o].trim().split(" ")[0].trim());a=c.map((function(e){return{field:e,headerName:e,width:200}})),r=t.records.map((function(e,t){var n=e;return delete n.attributes,n.id=t,n}))}return Object(D.jsxs)("div",{style:{height:700,width:"100%"},children:[t.totalSize>0&&Object(D.jsxs)("p",{children:["Total ",t.totalSize," records "]}),Object(D.jsx)(ie.a,{style:{height:700,width:"100%"},children:Object(D.jsx)(re.a,{rows:r,columns:a,pageSize:10})})]})};var se=function(e){e.activeLogin;var t=Object(a.useState)("SELECT Id, Name FROM Account LIMIT 10"),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),o=Object(s.a)(i,2),l=o[0],u=o[1],j=q.QueryHook(l),b=Object(s.a)(j,3),h=b[0],O=b[1],p=b[2],m=(Object(f.c)((function(e){return e.soqlBuilder.value})),Object(f.b)(),P());return Object(D.jsx)(z.a,{children:Object(D.jsxs)(H.a,{container:!0,children:[Object(D.jsx)(H.a,{item:!0,xs:12,children:Object(D.jsx)(d.a,{variant:"h6",align:"left",color:"textSecondary",paragraph:!0,children:"Type your query below"})}),Object(D.jsx)(H.a,{item:!0,xs:12,children:Object(D.jsx)(Y.a,{"aria-label":"minimum height",onChange:function(e){return r(e.target.value)},value:c,rowsMin:10,placeholder:"Query here",className:m.queryBuilder})}),Object(D.jsxs)(H.a,{item:!0,xs:12,children:[Object(D.jsx)(X.a,{onClick:function(e){u(c)},variant:"contained",color:"primary",className:m.marginButton,children:"Execute Query"}),Object(D.jsx)(X.a,{variant:"contained",color:"primary",className:m.marginButton,children:"Format Query"}),Object(D.jsx)(X.a,{onClick:function(e){r("")},variant:"outlined",color:"secondary",className:m.marginButton,children:"Clear"})]}),l&&Object(D.jsxs)(H.a,{item:!0,xs:12,children:[Object(D.jsx)("br",{}),O&&Object(D.jsxs)("div",{className:m.queryAnimation,children:[Object(D.jsx)(Z.a,{}),Object(D.jsx)(Z.a,{animation:!1}),Object(D.jsx)(Z.a,{animation:"wave"}),Object(D.jsx)(Z.a,{}),Object(D.jsx)(Z.a,{animation:!1}),Object(D.jsx)(Z.a,{animation:"wave"})]}),!O&&p&&Object(D.jsxs)(ee.a,{severity:"error",children:[Object(D.jsx)(te.a,{children:p.name}),Object(D.jsx)("strong",{children:p.message})]}),!O&&!p&&Object(D.jsx)(oe,{result:h,query:l})]})]})})};var le=function(){var e=P(),t=Object(a.useState)(null),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Boolean(c),o=Object(f.b)(),x=Object(f.c)((function(e){return e.auth.activeLogin}));console.log("$$$",x);var v=function(){r(null)};return Object(a.useEffect)((function(){var e=function(){var e={},t=window.location.hash;return t&&t.length>1&&(e=(t=t.substr(1)).split("&").reduce((function(e,t){var n=t.split("=");return e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]),e}),{})),e}();console.log(e),e&&e.access_token&&(o(B(e)),o(T()))}),[o]),Object(D.jsxs)(p.a,{theme:R,children:[Object(D.jsx)(l.a,{}),Object(D.jsx)(u.a,{position:"static",children:Object(D.jsxs)(j.a,{children:[Object(D.jsx)(m.a,{className:e.logo}),Object(D.jsx)(d.a,{variant:"h6",className:e.headerTitle,children:"Easy SOQL"}),x&&Object(D.jsxs)("div",{children:[Object(D.jsx)(b.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit",children:Object(D.jsx)(g.a,{})}),Object(D.jsxs)(h.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:v,children:[Object(D.jsx)(O.a,{onClick:v,children:x.name}),Object(D.jsx)(O.a,{onClick:v,children:x.instance_url}),Object(D.jsx)(O.a,{onClick:v,children:"Logout"})]})]})]})}),Object(D.jsx)("main",{children:Object(D.jsxs)("div",{children:[!x&&Object(D.jsx)(W,{}),x&&Object(D.jsx)(se,{})]})})]})},ue=Object(S.a)({reducer:{soqlBuilder:ae,auth:U}});o.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(f.a,{store:ue,children:Object(D.jsx)(le,{})})}),document.getElementById("root"))}},[[317,1,2]]]);
//# sourceMappingURL=main.9275d13d.chunk.js.map