(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/trainspotted-logo.f965f559.svg"},22:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),i=a(6),s=a(7),u=a(19),o=(a(31),a(8)),m=function(e){return{type:"SHOW_DETAIL",data:e}},d=function(){return{type:"HIDE_DETAIL"}},p=function(){return{type:"SHOW_MENU"}},E=function(){return{type:"HIDE_MENU"}},h=Object(s.c)({entryData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_ENTRIES":return Object(o.a)({},e,{isFetching:!0});case"RECEIVE_ENTRIES":return Object(o.a)({},e,{isFetching:!1,items:t.data});default:return e}},entryDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1,id:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_DETAIL":return Object(o.a)({},e,{isOpen:!0,id:t.data});case"HIDE_DETAIL":return Object(o.a)({},e,{isOpen:!1,id:t.data});default:return e}},menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"SHOW_MENU":return Object(o.a)({},e,{isOpen:!0});case"HIDE_MENU":return Object(o.a)({},e,{isOpen:!1});default:return e}},userStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoggedIn:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"LOG_IN":return Object(o.a)({},e,{isLoggedIn:!0});case"LOG_OUT":return Object(o.a)({},e,{isLoggedIn:!1});default:return e}}}),b=a(1),f=a(2),v=a(4),g=a(3),y=a(5),O=a(21),N=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).divRef=l.a.createRef(),a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.entry,t=e.time.split(":");-1!==e.time.indexOf("PM")&&-1===e.time.indexOf("12:")&&(t[0]=parseInt(t[0],10)+12),-1!==e.time.indexOf("AM")&&-1!==e.time.indexOf("12:")&&(t[0]=parseInt(t[0],10)-12);var a=((3600*t[0]+60*parseInt(t[1],10))/864).toFixed(2);this.divRef.current.setAttribute("style","left:".concat(a,"%;"))}},{key:"render",value:function(){var e=this.props,t=e.entry,a=e.dispatch;function n(){a(m(t._id))}return l.a.createElement("button",{className:"engine-manifest",ref:this.divRef,type:"button",onClick:n,onKeyDown:n},t.engines.map(function(e){var t={backgroundColor:e.color};return l.a.createElement("span",{className:"engine-number",style:t,key:e.number},e.number)}),l.a.createElement("span",{className:"engine-details-button"},"..."))}}]),t}(n.Component),j=Object(i.b)(function(e){return Object(s.b)({showDetail:m},e)})(N),k=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).divRef=l.a.createRef(),a.entryHeight=0,a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.divRef.current.setAttribute("style","height:".concat(this.entryHeight,"px;"))}},{key:"render",value:function(){var e=this,t=this.props.date,a=this.props.entries;return l.a.createElement("div",{className:"entries-for-date",ref:this.divRef},a.map(function(a){return a.date===t?(e.entryHeight<20*a.engines.length&&(e.entryHeight=20*(a.engines.length+1)),l.a.createElement(j,{key:a._id,entry:a})):""}))}}]),t}(n.Component),w=["January","February","March","April","May","June","July","August","September","October","November","December"],C=function(e){var t=e.entries,a=Object(O.a)(new Set(t.map(function(e){return e.date})));return l.a.createElement("div",{className:"train-chart"},l.a.createElement("div",{className:"x-axis-header clearfix"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"12 AM")),l.a.createElement("li",null,l.a.createElement("span",null,"2 AM")),l.a.createElement("li",null,l.a.createElement("span",null,"4 AM")),l.a.createElement("li",null,l.a.createElement("span",null,"6 AM")),l.a.createElement("li",null,l.a.createElement("span",null,"8 AM")),l.a.createElement("li",null,l.a.createElement("span",null,"10 AM")),l.a.createElement("li",null,l.a.createElement("span",null,"12 PM")),l.a.createElement("li",null,l.a.createElement("span",null,"2 PM")),l.a.createElement("li",null,l.a.createElement("span",null,"4 PM")),l.a.createElement("li",null,l.a.createElement("span",null,"6 PM")),l.a.createElement("li",null,l.a.createElement("span",null,"8 PM")),l.a.createElement("li",null,l.a.createElement("span",null,"10 PM")))),l.a.createElement("div",{className:"time-table"},l.a.createElement("div",{className:"month-bar"}),a.map(function(e){return l.a.createElement("div",{className:"date-line",key:e},l.a.createElement("div",{className:"month-display"},l.a.createElement("span",null,"".concat(w[e.split("/")[0]-1]," ").concat(e.split("/")[2]))),l.a.createElement("div",{className:"date-display"},l.a.createElement("span",null,e.split("/")[1])),l.a.createElement(k,{date:e,entries:t}))})))},M=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).state={loadedClass:""},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout(function(){e.setState({loadedClass:"detail-loaded"}),clearInterval(t)},250)}},{key:"render",value:function(){var e=this.props,t=e.onDetailClose,a=e.data,n=this.state.loadedClass;return l.a.createElement("div",{className:"detail-overlay ".concat(n)},l.a.createElement("div",{className:"detail-bg",role:"none",onClick:t}),l.a.createElement("div",{className:"detail-panel"},l.a.createElement("div",{className:"detail-header"},l.a.createElement("div",{className:"detail-header-inner"},l.a.createElement("span",{className:"entry-number"},"Entry No.\xa0",a.number),l.a.createElement("button",{className:"close-button",type:"button",onClick:t}))),l.a.createElement("div",{className:"detail-body"},l.a.createElement("div",{className:"detail-body-inner"},l.a.createElement("div",{className:"detail-headline"},"".concat(a.engines.length," engine train observed on ").concat(function(e){var t=e.split("/");return"".concat(w[t[0]-1]," ").concat(t[1],", ").concat(t[2])}(a.date)," at ").concat(function(e){var t=e.split(":"),a="a.m.";return-1!==e.indexOf("PM")&&(a="p.m."),"".concat(t[0],":").concat(t[1]," ").concat(a)}(a.time)," heading ").concat(a.direction,".")),l.a.createElement("div",{className:"detail-subhead"},"Engines"),l.a.createElement("table",{className:"detail-table",cellPadding:"0",cellSpacing:"0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Ord."),l.a.createElement("th",null,"Line"),l.a.createElement("th",null,"No."),l.a.createElement("th",null,"Pos."),l.a.createElement("th",null,"Sightings"))),l.a.createElement("tbody",null,a.engines.map(function(e){var t={backgroundColor:e.color};return l.a.createElement("tr",{key:e.number},l.a.createElement("td",null,l.a.createElement("span",{className:"engine-color-indicator",style:t},e.order)),l.a.createElement("td",null,l.a.createElement("span",null,e.line)),l.a.createElement("td",null,l.a.createElement("span",null,e.number)),l.a.createElement("td",null,l.a.createElement("span",null,e.location)),l.a.createElement("td",null,l.a.createElement("span",null,"\xa0")))}))),l.a.createElement("div",{className:"detail-subhead"},"Notes")))))}}]),t}(n.Component),I=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"menu-nav-item"},"About the Project"),l.a.createElement("p",null,"Trainspotted is my home office, set up in front of a window facing the Milwaukee District North Metra tracks in the backyard. During off-peak hours, freight trains are cleared to run along the Metra corridor. Much like my work situation, the trains don\u2019t adhere to any set schedule. This is an exercise in applying structure to the chaos surrounding this new phase of my life."),l.a.createElement("p",null,"This project also brought me up to speed with React/Redux and was developed using the full MERN stack."))},D=function(){return l.a.createElement("button",{className:"menu-nav-item",type:"button"},"Add an Entry")},S=function(){return l.a.createElement("button",{className:"menu-nav-item",type:"button"},"Add a Train Line")},R=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"menu-nav-item"},"Contact"),l.a.createElement("p",null,"jef.a.mayer(at)gmail.com",l.a.createElement("br",null),"jefmayer.com"))},L=a(9),A=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).state={user:"",password:""},a.handleUserChange=a.handleUserChange.bind(Object(L.a)(a)),a.handlePasswordChange=a.handlePasswordChange.bind(Object(L.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(L.a)(a)),a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"handleUserChange",value:function(e){console.log(e),this.setState({user:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.props.dispatch,a=this.state,n=a.user,l=a.password;console.log("handleSubmit"),e.preventDefault(),t(function(e,t){return{type:"LOG_IN",data:{user:e,password:t}}}({user:n,password:l}))}},{key:"render",value:function(){var e=this.props.isLoggedIn,t=this.state,a=t.user,n=t.password;return e?l.a.createElement("button",{className:"menu-nav-item",type:"button"},"Logout"):l.a.createElement("div",null,l.a.createElement("div",{className:"menu-nav-item"},"Login"),l.a.createElement("form",{className:"login-form app-form",onSubmit:this.handleSubmit},l.a.createElement("label",{className:"form-label",htmlFor:"user"},l.a.createElement("span",null,"Name"),l.a.createElement("input",{className:"form-input",id:"user",name:"user",value:a,onChange:this.handleUserChange})),l.a.createElement("label",{className:"form-label",htmlFor:"password"},l.a.createElement("span",null,"Password"),l.a.createElement("input",{className:"form-input",id:"password",name:"password",value:n,onChange:this.handlePasswordChange})),l.a.createElement("input",{className:"submit-button",type:"submit",value:"Login"})))}}]),t}(n.Component),T=Object(i.b)(function(e){return{isLoggedIn:e.userStatus.isLoggedIn}})(A),_=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).divRef=l.a.createRef(),a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;if("closed"===this.props.menuDisplayClass)var t=setTimeout(function(){e.divRef.current.setAttribute("style","position:absolute;"),clearTimeout(t)},150);else this.divRef.current.setAttribute("style","position:fixed;")}},{key:"render",value:function(){var e=this.props,t=e.isLoggedIn,a=e.menuDisplayClass,n=e.onMenuClick;return l.a.createElement("div",{className:"menu-container ".concat(a),ref:this.divRef},l.a.createElement("button",{className:"menu-button",onClick:n,type:"button"},l.a.createElement("span",{className:"menu-icon"},l.a.createElement("span",{className:"menu-bar"}),l.a.createElement("span",{className:"menu-bar"}),l.a.createElement("span",{className:"menu-bar"}))),l.a.createElement("div",{className:"menu-nav"},l.a.createElement("div",{className:"menu-nav-inner"},l.a.createElement(I,null),l.a.createElement(R,null),t&&l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement(S,null)),l.a.createElement(T,null))))}}]),t}(n.Component),P=Object(i.b)(function(e){return{isLoggedIn:e.userStatus.isLoggedIn}})(_),x=a(20),H=a.n(x),U=(a(32),function(e){function t(){return Object(b.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(function(e){return e({type:"REQUEST_ENTRIES"}),fetch("/getEntries").then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"RECEIVE_ENTRIES",data:e}}(t))})})}},{key:"render",value:function(){var e,t=this.props,a=t.detailId,n=t.dispatch,r=t.entries,c=t.isDetailOpen,i=t.isMenuOpen;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"app-header"},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:H.a,className:"logo-graphic",alt:"Trainspotted Logo"}),l.a.createElement("div",{className:"logo-type"},"Trainspotted")),l.a.createElement(P,{menuDisplayClass:i?"open":"closed",onMenuClick:function(){n(i?E():p())}})),l.a.createElement(C,{entries:r}),c&&l.a.createElement(M,{onDetailClose:function(){n(d())},data:(e=a,console.log(e),r.find(function(t){return t._id===e}))}))}}]),t}(n.Component)),F=Object(i.b)(function(e){var t=e.entryData,a=e.entryDetail,n=e.menu,l=t.items;return{detailId:a.id,entries:l,isDetailOpen:a.isOpen,isMenuOpen:n.isOpen}})(U),J=[u.a];var W=Object(s.d)(h,s.a.apply(void 0,J));console.log(W.getState()),c.a.render(l.a.createElement(i.a,{store:W},l.a.createElement(F,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.caf94bc4.chunk.js.map