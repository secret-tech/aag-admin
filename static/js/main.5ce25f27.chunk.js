(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports={container:"styles_container__26S8x",navbar:"styles_navbar__2Yi03"}},118:function(e,t,a){e.exports={container:"styles_container__2BW7i",form:"styles_form__1nDET"}},119:function(e,t,a){e.exports={container:"styles_container__3BM6p",form:"styles_form__ljutS"}},188:function(e,t,a){},195:function(e,t,a){e.exports=a(395)},28:function(e,t,a){e.exports={buttons:"styles_buttons__35FB3",left:"styles_left__2RXGT",search:"styles_search__2X7Kb",table:"styles_table__3bIlV",wide:"styles_wide__2fGu1",controls:"styles_controls__2pOYZ"}},389:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);var n,r,c,o,s,i=a(0),u=a.n(i),l=a(19),d=a.n(l),m=a(22),p=a(27),E=a(29),b=a(189),h=a(23),O=a(183),f=a(17),g=function(e){return function(t){return{type:e,payload:t}}},v=function(e){var t="".concat(e,"_REQUEST"),a="".concat(e,"_SUCCESS"),n="".concat(e,"_FAILURE");return Object.assign(g(t),{success:g(a),failure:g(n),REQUEST:t,SUCCESS:a,FAILURE:n,type:e})},j=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e[n.type]?e[n.type](a,n):a}},N="common/counter/COUNTER_INCREMENT",S=(g(N),g("common/counter/COUNTER_DECREMENT"),j((n={},Object(f.a)(n,N,function(e){return e+1}),Object(f.a)(n,"common/counter/COUNTER_DECREMENT",function(e){return e-1}),n),0)),R=v("auth/signUp/SIGN_UP"),x=j({},{}),w=v("auth/signIn/SIGN_IN"),U=j({},{}),_=v("auth/signOut/SIGN_OUT"),P=j({},{}),y=a(12),k=v("dashboard/users/FETCH_USERS"),A=j((r={},Object(f.a)(r,k.REQUEST,function(e,t){t.payload;return Object(y.a)({},e,{loading:!0})}),Object(f.a)(r,k.SUCCESS,function(e,t){var a=t.payload;return console.log("merge users",a),Object(y.a)({},e,a,{loading:!1})}),Object(f.a)(r,k.FAILURE,function(e){return{loading:!1}}),r),{loading:!1,users:[],nextCursor:"",prevCursor:""}),C=g("dashboard/newUserPopup/OPEN_NEW_USER_POPUP"),D=g("dashboard/newUserPopup/CLOSE_NEW_USER_POPUP"),T=v("dashboard/newUserPopup/CREATE_NEW_USER"),G=j((c={},Object(f.a)(c,"dashboard/newUserPopup/OPEN_NEW_USER_POPUP",function(e){return Object(y.a)({},e,{open:!0})}),Object(f.a)(c,"dashboard/newUserPopup/CLOSE_NEW_USER_POPUP",function(e){return Object(y.a)({},e,{open:!1})}),c),{open:!1}),I=g("dashboard/editUser/OPEN_EDIT_USER_POPUP"),L=g("dashboard/editUser/CLOSE_EDIT_USER_POPUP"),q=v("dashboard/editUser/UPDATE_USER"),M={open:!1,initialValues:{id:"",email:"",login:"",sub:"",scope:"",password:""}},Y=j((o={},Object(f.a)(o,"dashboard/editUser/OPEN_EDIT_USER_POPUP",function(e,t){var a=t.payload;return Object(y.a)({},e,{open:!0,initialValues:Object(y.a)({},a)})}),Object(f.a)(o,"dashboard/editUser/CLOSE_EDIT_USER_POPUP",function(e){return Object(y.a)({},e,{open:!1,initialValues:M.initialValues})}),o),M),Q=g("dashboard/userPopup/OPEN_USER_POPUP"),F=g("dashboard/userPopup/CLOSE_USER_POPUP"),W={open:!1,user:{id:"0x00",email:"amazing.space.invader@gmail.com",datereg:"datereg",lastActivity:"last activity",scope:"scope?",sub:"sub?",customData:"custom data?"}},B=j((s={},Object(f.a)(s,"dashboard/userPopup/OPEN_USER_POPUP",function(e,t){t.payload;return Object(y.a)({},e,{open:!0})}),Object(f.a)(s,"dashboard/userPopup/CLOSE_USER_POPUP",function(e,t){t.payload;return{open:!1,user:W.user}}),s),W),V=a(9),H=a.n(V),z=a(4),J=H.a.mark(X),Z=H.a.mark(K),$=H.a.mark(ee);function X(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.b)(console.log,"saga called");case 2:case"end":return e.stop()}},J,this)}function K(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.e)(N,X);case 2:case"end":return e.stop()}},Z,this)}function ee(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.c)(K)]);case 2:case"end":return e.stop()}},$,this)}var te=a(184),ae=a.n(te),ne=(a(114),function(e){localStorage.setItem("token",e)}),re=function(){return localStorage.getItem("token")||""},ce=function(){localStorage.removeItem("token")},oe={Accept:"application/json","Content-Type":"application/json"},se=ae.a.create({baseURL:"https://backend-auth.secrettech.io",headers:oe}),ie=function(e){var t=e.method,a=e.url,n=e.data,r=e.options,c=(void 0===r?{}:r).suppressAuth,o="Bearer ".concat(re());return new Promise(function(e,r){se.request({method:t,url:a,data:n,headers:c?Object(y.a)({},oe,{Authorization:o}):oe}).then(e).catch(r)})},ue={get:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=arguments.length>2?arguments[2]:void 0;return ie({method:"get",url:e,options:t})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;return ie({method:"post",url:e,data:t,options:a})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;return ie({method:"put",url:e,data:t,options:a})},del:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=arguments.length>2?arguments[2]:void 0;return ie({method:"delete",url:e,options:t})}},le=a(406),de=a(61),me=a(80),pe=le.a.create({position:de.a.TOP}),Ee=function(e){return pe.show({intent:me.a.DANGER,icon:"error",timeout:1e4,message:e})},be="/users",he="/auth/sign-in",Oe=H.a.mark(ve),fe=H.a.mark(je),ge=H.a.mark(Ne);function ve(e){var t,a,n;return H.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(z.b)(ue.post,"/tenant",t,{suppressAuth:!1});case 4:return a=r.sent,n=a.data,r.next=8,Object(z.d)(R.success());case 8:return r.next=10,Object(z.b)(ne,n.token);case 10:return r.next=12,Object(z.d)(Object(p.push)(be));case 12:r.next=22;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(z.b)(console.log,"[ERROR] at signUpSaga",r.t0);case 18:return r.next=20,Object(z.b)(Ee,r.t0.message);case 20:return r.next=22,Object(z.d)(R.failure());case 22:case"end":return r.stop()}},Oe,this,[[1,14]])}function je(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.e)(R.REQUEST,ve);case 2:case"end":return e.stop()}},fe,this)}function Ne(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.c)(je)]);case 2:case"end":return e.stop()}},ge,this)}var Se=H.a.mark(we),Re=H.a.mark(Ue),xe=H.a.mark(_e);function we(e){var t,a,n;return H.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(z.b)(ue.post,"/tenant/login",t,{suppressAuth:!1});case 4:return a=r.sent,n=a.data,r.next=8,Object(z.b)(ne,n.token);case 8:return r.next=10,Object(z.d)(w.success());case 10:return r.next=12,Object(z.d)(Object(p.push)(be));case 12:r.next=22;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(z.b)(console.log,"[ERROR] at signInSaga",r.t0.message);case 18:return r.next=20,Object(z.b)(Ee,r.t0.message);case 20:return r.next=22,Object(z.d)(w.failure());case 22:case"end":return r.stop()}},Se,this,[[1,14]])}function Ue(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.e)(w.REQUEST,we);case 2:case"end":return e.stop()}},Re,this)}function _e(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.c)(Ue)]);case 2:case"end":return e.stop()}},xe,this)}var Pe=H.a.mark(Ae),ye=H.a.mark(Ce),ke=H.a.mark(De);function Ae(e){var t;return H.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.payload,a.prev=1,a.next=4,Object(z.b)(re);case 4:return t=a.sent,a.next=7,Object(z.b)(ue.post,"/tenant/logout",{token:t},{suppressAuth:!1});case 7:return a.next=9,Object(z.b)(ce);case 9:return a.next=11,Object(z.d)(_.success());case 11:return a.next=13,Object(z.d)(Object(p.push)(he));case 13:a.next=23;break;case 15:return a.prev=15,a.t0=a.catch(1),a.next=19,Object(z.b)(console.log,"[ERROR] at signOutSaga",a.t0);case 19:return a.next=21,Object(z.b)(Ee,a.t0.message);case 21:return a.next=23,Object(z.d)(_.failure());case 23:case"end":return a.stop()}},Pe,this,[[1,15]])}function Ce(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.e)(_.REQUEST,Ae);case 2:case"end":return e.stop()}},ye,this)}function De(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.c)(Ce)]);case 2:case"end":return e.stop()}},ke,this)}var Te=H.a.mark(Le),Ge=H.a.mark(qe),Ie=H.a.mark(Me);function Le(e){var t,a,n,r;return H.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,a=t?Object.keys(t).reduce(function(e,a,n){return t[a]?"".concat(e).concat(encodeURIComponent(a),"=").concat(encodeURIComponent(t[a]),"&"):e},""):"",c.next=5,Object(z.b)(ue.get,"/user?".concat(a),{},{suppressAuth:!0});case 5:return n=c.sent,r=n.data,c.next=9,Object(z.b)(console.log,"--------- merge users ---------",r);case 9:return c.next=11,Object(z.d)(k.success(r));case 11:c.next=21;break;case 13:return c.prev=13,c.t0=c.catch(1),c.next=17,Object(z.b)(console.log,"[ERROR] at signInSaga",c.t0);case 17:return c.next=19,Object(z.b)(Ee,c.t0.message);case 19:return c.next=21,Object(z.d)(k.failure());case 21:case"end":return c.stop()}},Te,this,[[1,13]])}function qe(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.e)(k.REQUEST,Le),Object(z.e)(T.SUCCESS,Le),Object(z.e)(q.SUCCESS,Le)]);case 2:case"end":return e.stop()}},Ge,this)}function Me(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.c)(qe)]);case 2:case"end":return e.stop()}},Ie,this)}var Ye=H.a.mark(We),Qe=H.a.mark(Be),Fe=H.a.mark(Ve);function We(e){var t;return H.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(z.b)(ue.post,"/user",t,{suppressAuth:!0});case 4:return a.next=6,Object(z.d)(T.success());case 6:return a.next=8,Object(z.d)(D());case 8:return a.next=10,Object(z.d)(L());case 10:a.next=20;break;case 12:return a.prev=12,a.t0=a.catch(1),a.next=16,Object(z.b)(console.log,"[ERROR] at createNewUserSaga",a.t0);case 16:return a.next=18,Object(z.b)(Ee,a.t0.message);case 18:return a.next=20,Object(z.d)(T.failure());case 20:case"end":return a.stop()}},Ye,this,[[1,12]])}function Be(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.e)(T.REQUEST,We);case 2:case"end":return e.stop()}},Qe,this)}function Ve(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.c)(Be)]);case 2:case"end":return e.stop()}},Fe,this)}var He=H.a.mark(ze);function ze(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.c)(ee),Object(z.c)(Ne),Object(z.c)(_e),Object(z.c)(De),Object(z.c)(Me),Object(z.c)(Ve)]);case 2:case"end":return e.stop()}},He,this)}var Je,Ze=Object(b.a)(),$e=Object(h.a)(),Xe=Object(O.a)(),Ke=[Object(p.routerMiddleware)($e),Ze,Xe.middleware],et=Object(E.d)((Je=$e,Object(E.c)({router:Object(p.connectRouter)(Je),common:Object(E.c)({counter:S}),auth:Object(E.c)({signUp:x,signIn:U,signOut:P}),dashboard:Object(E.c)({users:A,newUser:G,editUser:Y,userPopup:B})})),{},E.a.apply(void 0,Ke));Ze.run(ze);var tt=Xe,at=et,nt=a(402),rt=a(403),ct=a(185),ot=a.n(ct),st=a(190),it=a(397),ut=a(398),lt=function(e){var t=e.component,a=e.reqToken,n=e.redirectRoute,r=Object(st.a)(e,["component","reqToken","redirectRoute"]);return u.a.createElement(ut.a,Object.assign({},r,{render:function(e){return a?re()?u.a.createElement(t,e):u.a.createElement(it.a,{to:n}):re()?u.a.createElement(it.a,{to:n}):u.a.createElement(t,e)}}))},dt=a(405),mt=a(60),pt=a(179),Et=a(115),bt=a.n(Et),ht=Object(m.connect)(null,{signOut:_})(function(e){return u.a.createElement("div",{className:bt.a.container},u.a.createElement("div",{className:bt.a.navbar},u.a.createElement(dt.a,null,u.a.createElement(dt.a.Group,{align:mt.a.LEFT},u.a.createElement(dt.a.Heading,null,"secret_tech's Auth")),u.a.createElement(dt.a.Group,{align:mt.a.RIGHT},u.a.createElement(dt.a.Divider,null),u.a.createElement(pt.b,{minimal:!0,icon:"power",onClick:function(){return e.signOut()}})))),e.children)}),Ot=a(82),ft=a(83),gt=a(85),vt=a(84),jt=a(86),Nt=a(33),St=a(404),Rt=a(399),xt=a(401),wt=a(116),Ut=a(407),_t=a(241),Pt=a(62),yt=a(20),kt=a(400),At=function(e){function t(e){var a;return Object(Ot.a)(this,t),(a=Object(gt.a)(this,Object(vt.a)(t).call(this,e))).state={type:"password"},a}return Object(jt.a)(t,e),Object(ft.a)(t,[{key:"render",value:function(){var e=this,t=u.a.createElement(St.a,{content:"text"===this.state.type?"Hide password":"Show password",disabled:this.props.disabled},u.a.createElement(pt.b,{disabled:this.props.disabled,icon:"text"===this.state.type?"unlock":"lock",intent:me.a.WARNING,minimal:!0,onClick:function(){return e.setState(function(e){return"text"===e.type?{type:"password"}:{type:"text"}})}}));return u.a.createElement(Rt.a,Object.assign({rightElement:t,type:this.state.type},this.props))}}]),t}(i.Component),Ct=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduce(function(t,a){return t||a(e)},null)}},Dt=/^\S+@\S+\.\S+$/,Tt=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,Gt=function(e){return e?null:"Required"},It=function(e){return function(t){return t.length>=e?null:"Length should be greater than ".concat(e," chars")}},Lt=function(e){return function(t){return t.length<=e?null:"Length should be lower than ".concat(e," chars")}},qt=function(e){return Dt.test(e)?null:"Email incorrect"},Mt=function(e){return Tt.test(e)?null:"Password incorrect"},Yt=function(e){return u.a.createElement(Pt.a,{listener:tt,start:T.REQUEST,resolve:T.SUCCESS,reject:T.FAILURE},function(t){return u.a.createElement(yt.b,{onSubmit:t,initialValues:e.initialValues,render:function(e){var t=e.handleSubmit,a=e.submitting,n=e.pristine,r=e.invalid;return u.a.createElement("form",{onSubmit:t},u.a.createElement(yt.a,{name:"email",validate:Ct(Gt,qt)},function(e){var t=e.input,a=e.meta;return u.a.createElement(kt.a,{label:"E-mail",labelInfo:"(required)",intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},u.a.createElement(St.a,{intent:me.a.DANGER,targetTagName:"div",content:a.touched&&a.error,isOpen:a.active&&a.touched&&a.error},u.a.createElement(Rt.a,Object.assign({type:"email",placeholder:"enter email",large:!0,intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},t))))}),u.a.createElement(yt.a,{name:"login",validate:Ct(Gt)},function(e){var t=e.input,a=e.meta;return u.a.createElement(kt.a,{label:"Login",labelInfo:"(required)",intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},u.a.createElement(St.a,{intent:me.a.DANGER,targetTagName:"div",content:a.touched&&a.error,isOpen:a.active&&a.touched&&a.error},u.a.createElement(Rt.a,Object.assign({type:"text",placeholder:"enter login",large:!0,intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},t))))}),u.a.createElement(yt.a,{name:"sub",validate:Ct(Gt)},function(e){var t=e.input,a=e.meta;return u.a.createElement(kt.a,{label:"Sub",labelInfo:"(required)",intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},u.a.createElement(St.a,{intent:me.a.DANGER,targetTagName:"div",content:a.touched&&a.error,isOpen:a.active&&a.touched&&a.error},u.a.createElement(Rt.a,Object.assign({type:"text",placeholder:"enter sub",large:!0,intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},t))))}),u.a.createElement(yt.a,{name:"scope"},function(e){var t=e.input,a=e.meta;return u.a.createElement(kt.a,{label:"Scope",intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},u.a.createElement(St.a,{intent:me.a.DANGER,targetTagName:"div",content:a.touched&&a.error,isOpen:a.active&&a.touched&&a.error},u.a.createElement(Rt.a,Object.assign({type:"text",placeholder:"enter scope",large:!0,intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},t))))}),u.a.createElement(yt.a,{name:"password",validate:Ct(Gt,It(8),Lt(18))},function(e){var t=e.input,a=e.meta;return u.a.createElement(kt.a,{label:"Password",labelInfo:"(required)",intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},u.a.createElement(St.a,{intent:me.a.DANGER,targetTagName:"div",content:a.touched&&a.error,isOpen:a.active&&a.touched&&a.error},u.a.createElement(At,Object.assign({placeholder:"enter password",large:!0,intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},t))))}),u.a.createElement(pt.b,{type:"submit",fill:!0,large:!0,text:"Submit",intent:me.a.PRIMARY,loading:a,disabled:r||n}))}})})},Qt=Object(m.connect)(function(e){return Object(y.a)({},e.dashboard.newUser)},{closeNewUserPopup:D})(function(e){return u.a.createElement(Ut.a,{className:"bp3-dark",style:{width:"400px"},isOpen:e.open,onClose:function(){return e.closeNewUserPopup()}},u.a.createElement("div",{className:_t.a.DIALOG_BODY},u.a.createElement(Yt,null)))}),Ft=Object(m.connect)(function(e){return Object(y.a)({},e.dashboard.editUser)},{closeEditUserPopup:L})(function(e){return console.log(e),u.a.createElement(Ut.a,{className:"bp3-dark",style:{width:"400px"},isOpen:e.open,onClose:function(){return e.closeEditUserPopup()}},u.a.createElement("div",{className:_t.a.DIALOG_BODY},u.a.createElement(Yt,{initialValues:e.initialValues})))}),Wt=Object(m.connect)(function(e){return Object(y.a)({},e.dashboard.userPopup)},{closeUserPopup:F})(function(e){return u.a.createElement(Ut.a,{className:"bp3-dark",isOpen:e.open,onClose:function(){return e.closeUserPopup()}},u.a.createElement("div",{className:_t.a.DIALOG_BODY},u.a.createElement("h3",null,e.user.email)))}),Bt=a(28),Vt=a.n(Bt),Ht=function(e){function t(e){var a;Object(Ot.a)(this,t),a=Object(gt.a)(this,Object(vt.a)(t).call(this,e));var n=new URLSearchParams(a.props.location.search);return a.state={q:n.get("q")||"",cursor:n.get("cursor")||"0"},a.handleSearchChange=a.handleSearchChange.bind(Object(Nt.a)(Object(Nt.a)(a))),a.handleSearch=a.handleSearch.bind(Object(Nt.a)(Object(Nt.a)(a))),a.handlePaginate=a.handlePaginate.bind(Object(Nt.a)(Object(Nt.a)(a))),a}return Object(jt.a)(t,e),Object(ft.a)(t,[{key:"componentWillMount",value:function(){var e=this.state,t=e.q,a=e.cursor;this.props.fetchUsers({q:t,cursor:a})}},{key:"handleSearchChange",value:function(e){this.setState({q:e.target.value||""})}},{key:"handleSearch",value:function(e){e.preventDefault();var t=this.state.q,a=new URLSearchParams;a.set("q",t),this.props.history.push("?".concat(a.toString())),this.props.fetchUsers({q:t})}},{key:"handlePaginate",value:function(){this.props.fetchUsers({cursor:this.props.nextCursor})}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:Vt.a.buttons},u.a.createElement("div",{className:Vt.a.left},u.a.createElement(pt.b,{intent:me.a.SUCCESS,text:"Create new user",icon:"plus",onClick:function(){return e.props.openNewUserPopup()}}),u.a.createElement(pt.b,{minimal:!0,text:"Next page",icon:"arrow-right",onClick:function(){return e.handlePaginate()}})),u.a.createElement("div",{className:Vt.a.search},u.a.createElement("form",{onSubmit:this.handleSearch},u.a.createElement(Rt.a,{type:"search",placeholder:"Enter login to search",value:this.state.q,onChange:this.handleSearchChange,rightElement:u.a.createElement(pt.b,{minimal:!0,type:"submit",icon:"search"})})))),u.a.createElement(xt.a,{interactive:!0,className:Vt.a.table},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{className:Vt.a.wide},"login"),u.a.createElement("th",{className:Vt.a.wide},"email"),u.a.createElement("th",null,"reg date"),u.a.createElement("th",null,"last activity"),u.a.createElement("th",null,"sub"),u.a.createElement("th",null,"scope"),u.a.createElement("th",null))),u.a.createElement("tbody",null,this.props.users.map(function(t){return u.a.createElement("tr",{key:t.id},u.a.createElement("td",{className:Vt.a.wide,alt:t.login},t.login),u.a.createElement("td",{className:Vt.a.wide,alt:t.email},t.email),u.a.createElement("td",null,Object(wt.format)(t.registrationDate,"DD MMM YY | HH:mm:ss")||""),u.a.createElement("td",null,Object(wt.format)(t.lastActivity,"DD MMM YY | HH:mm:ss")||""),u.a.createElement("td",null,t.sub),u.a.createElement("td",{className:Vt.a.wide},JSON.stringify(t.scope)||"undefined"),u.a.createElement("td",null,function(t){return u.a.createElement("div",{className:Vt.a.controls},u.a.createElement(St.a,{content:"Edit user"},u.a.createElement(pt.b,{icon:"edit",small:!0,minimal:!0,onClick:function(){return e.props.openEditUserPopup(t)}})),u.a.createElement(St.a,{content:"Invalidate user's jwt"},u.a.createElement(pt.b,{icon:"flame",small:!0,minimal:!0,onClick:function(){return console.log("Invalidate jwt")}})),u.a.createElement(St.a,{content:"Delete user",intent:me.a.DANGER},u.a.createElement(pt.b,{icon:"trash",small:!0,minimal:!0,intent:me.a.DANGER,onClick:function(){return console.log("Delete user")}})))}(t)))}))),u.a.createElement(Wt,null),u.a.createElement(Qt,null),u.a.createElement(Ft,null))}}]),t}(i.Component),zt=Object(m.connect)(function(e){return Object(y.a)({},e.dashboard.users)},{openUserPopup:Q,fetchUsers:k,openNewUserPopup:C,openEditUserPopup:I})(Ht),Jt=function(){return u.a.createElement(ht,null,u.a.createElement(nt.a,null,u.a.createElement(ut.a,{exact:!0,path:be,component:zt}),u.a.createElement(it.a,{exact:!0,from:"/",to:be})))},Zt=function(){return u.a.createElement(Pt.a,{listener:tt,start:R.REQUEST,resolve:R.SUCCESS,reject:R.FAILURE},function(e){return u.a.createElement(yt.b,{onSubmit:e,render:function(e){var t=e.handleSubmit,a=e.submitting,n=e.pristine,r=e.invalid;return u.a.createElement("form",{onSubmit:t},u.a.createElement(yt.a,{name:"email",validate:Ct(Gt,qt)},function(e){var t=e.input,a=e.meta;return u.a.createElement(kt.a,{intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},u.a.createElement(St.a,{intent:me.a.DANGER,targetTagName:"div",content:a.touched&&a.error,isOpen:a.active&&a.touched&&a.error},u.a.createElement(Rt.a,Object.assign({type:"email",placeholder:"enter your email",large:!0,intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},t))))}),u.a.createElement(yt.a,{name:"password",validate:Ct(Gt,Mt,It(8),Lt(18))},function(e){var t=e.input,a=e.meta;return u.a.createElement(kt.a,{intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},u.a.createElement(St.a,{intent:me.a.DANGER,targetTagName:"div",content:a.touched&&a.error,isOpen:a.active&&a.touched&&a.error},u.a.createElement(At,Object.assign({placeholder:"enter your password",large:!0,intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},t))))}),u.a.createElement(pt.b,{type:"submit",fill:!0,large:!0,minimal:!0,text:"Sign up",rightIcon:"arrow-right",intent:me.a.PRIMARY,loading:a,disabled:r||n}))}})})},$t=a(118),Xt=a.n($t),Kt=function(){return u.a.createElement("div",{className:Xt.a.container},u.a.createElement("div",{className:Xt.a.form},u.a.createElement(Zt,null)))},ea=function(){return u.a.createElement(Pt.a,{listener:tt,start:w.REQUEST,resolve:w.SUCCESS,reject:w.FAILURE},function(e){return u.a.createElement(yt.b,{onSubmit:e,render:function(e){var t=e.handleSubmit,a=e.submitting,n=e.pristine,r=e.invalid;return u.a.createElement("form",{onSubmit:t},u.a.createElement(yt.a,{name:"email",validate:Ct(Gt,qt)},function(e){var t=e.input,a=e.meta;return u.a.createElement(kt.a,{intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},u.a.createElement(St.a,{intent:me.a.DANGER,targetTagName:"div",content:a.touched&&a.error,isOpen:a.active&&a.touched&&a.error},u.a.createElement(Rt.a,Object.assign({type:"email",placeholder:"enter your email",large:!0,intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},t))))}),u.a.createElement(yt.a,{name:"password",validate:Ct(Gt,It(8),Lt(18))},function(e){var t=e.input,a=e.meta;return u.a.createElement(kt.a,{intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},u.a.createElement(St.a,{intent:me.a.DANGER,targetTagName:"div",content:a.touched&&a.error,isOpen:a.active&&a.touched&&a.error},u.a.createElement(At,Object.assign({placeholder:"enter your password",large:!0,intent:a.touched&&a.error?me.a.DANGER:me.a.NONE},t))))}),u.a.createElement(pt.b,{type:"submit",fill:!0,large:!0,minimal:!0,text:"Sign in",rightIcon:"arrow-right",intent:me.a.PRIMARY,loading:a,disabled:r||n}))}})})},ta=a(119),aa=a.n(ta),na=function(){return u.a.createElement("div",{className:aa.a.container},u.a.createElement("div",{className:aa.a.form},u.a.createElement(ea,null)))},ra=function(){return u.a.createElement("div",null,u.a.createElement(nt.a,null,u.a.createElement(ut.a,{exact:!0,path:"/auth/sign-up",component:Kt}),u.a.createElement(ut.a,{exact:!0,path:he,component:na}),u.a.createElement(it.a,{from:"*",to:he})))},ca=a(188),oa=a.n(ca),sa=ot.a.bind(oa.a),ia=Object(rt.a)(function(){return u.a.createElement("div",{className:sa("bp3-dark")},u.a.createElement(nt.a,null,u.a.createElement(lt,{path:"/auth/",redirectRoute:be,component:ra}),u.a.createElement(lt,{reqToken:!0,redirectRoute:he,component:Jt})))});a(389),a(391),a(393),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(u.a.createElement(m.Provider,{store:at},u.a.createElement(p.ConnectedRouter,{history:$e},u.a.createElement(ia,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[195,2,1]]]);
//# sourceMappingURL=main.5ce25f27.chunk.js.map