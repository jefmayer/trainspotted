(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/trainspotted-logo.f965f559.svg"},22:function(e,t,n){e.exports=n(33)},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(12),r=n.n(l),c=n(7),s=n(9),o=n(19),u=(n(31),n(8)),m=function(e){return{type:"SHOW_DETAIL",data:e}},d=function(){return{type:"HIDE_DETAIL"}},h=function(){return{type:"SHOW_MENU"}},p=function(){return{type:"HIDE_MENU"}},b=Object(s.c)({entryData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_ENTRIES":case"SUBMIT_ENTRY":return Object(u.a)({},e,{isFetching:!0});case"RECEIVE_ENTRIES":case"ENTRY_ADDED":return Object(u.a)({},e,{isFetching:!1,items:t.data});default:return e}},entryDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1,id:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_DETAIL":return Object(u.a)({},e,{isOpen:!0,id:t.data});case"HIDE_DETAIL":return Object(u.a)({},e,{isOpen:!1,id:t.data});default:return e}},menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"SHOW_MENU":return Object(u.a)({},e,{isOpen:!0});case"HIDE_MENU":return Object(u.a)({},e,{isOpen:!1});default:return e}},trainLines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_LINES":return Object(u.a)({},e,{isFetching:!0});case"RECEIVE_LINES":return Object(u.a)({},e,{isFetching:!1,items:t.data});default:return e}},userStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoggedIn:!1,isLoginError:!1,response:[{success:"error"}]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return"success"===t.data[0].success?Object(u.a)({},e,{isLoggedIn:!0,isLoginError:!1,response:t.data}):Object(u.a)({},e,{isLoggedIn:!1,isLoginError:!0,response:t.data});case"LOG_OUT":return Object(u.a)({},e,{isLoggedIn:!1});default:return e}}}),E=n(2),v=n(3),f=n(6),g=n(4),y=n(5),N=n(21),O=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(f.a)(this,Object(g.a)(t).call(this,e))).divRef=i.a.createRef(),n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.entry,t=e.time.split(":");-1!==e.time.indexOf("PM")&&-1===e.time.indexOf("12:")&&(t[0]=parseInt(t[0],10)+12),-1!==e.time.indexOf("AM")&&-1!==e.time.indexOf("12:")&&(t[0]=parseInt(t[0],10)-12);var n=((3600*t[0]+60*parseInt(t[1],10))/864).toFixed(2);this.divRef.current.setAttribute("style","left:".concat(n,"%;"))}},{key:"render",value:function(){var e=this.props,t=e.entry,n=e.dispatch;function a(){n(m(t._id))}return i.a.createElement("button",{className:"engine-manifest",ref:this.divRef,type:"button",onClick:a,onKeyDown:a},t.engines.map(function(e){var t={backgroundColor:e.color};return i.a.createElement("span",{className:"engine-number",style:t,key:e.number},e.number)}),i.a.createElement("span",{className:"engine-details-button"},"..."))}}]),t}(a.Component),j=Object(c.b)(function(e){return Object(s.b)({showDetail:m},e)})(O),C=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(f.a)(this,Object(g.a)(t).call(this,e))).divRef=i.a.createRef(),n.entryHeight=0,n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.divRef.current.setAttribute("style","height:".concat(this.entryHeight,"px;"))}},{key:"render",value:function(){var e=this,t=this.props.date,n=this.props.entries;return i.a.createElement("div",{className:"entries-for-date",ref:this.divRef},n.map(function(n){return n.date===t?(e.entryHeight<20*n.engines.length&&(e.entryHeight=20*(n.engines.length+1)),i.a.createElement(j,{key:n._id,entry:n})):""}))}}]),t}(a.Component),k=["January","February","March","April","May","June","July","August","September","October","November","December"],S=function(e){var t=e.entries,n=Object(N.a)(new Set(t.map(function(e){return e.date})));return i.a.createElement("div",{className:"train-chart"},i.a.createElement("div",{className:"x-axis-header clearfix"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",null,"12 AM")),i.a.createElement("li",null,i.a.createElement("span",null,"2 AM")),i.a.createElement("li",null,i.a.createElement("span",null,"4 AM")),i.a.createElement("li",null,i.a.createElement("span",null,"6 AM")),i.a.createElement("li",null,i.a.createElement("span",null,"8 AM")),i.a.createElement("li",null,i.a.createElement("span",null,"10 AM")),i.a.createElement("li",null,i.a.createElement("span",null,"12 PM")),i.a.createElement("li",null,i.a.createElement("span",null,"2 PM")),i.a.createElement("li",null,i.a.createElement("span",null,"4 PM")),i.a.createElement("li",null,i.a.createElement("span",null,"6 PM")),i.a.createElement("li",null,i.a.createElement("span",null,"8 PM")),i.a.createElement("li",null,i.a.createElement("span",null,"10 PM")))),i.a.createElement("div",{className:"time-table"},i.a.createElement("div",{className:"month-bar"}),n.map(function(e){return i.a.createElement("div",{className:"date-line",key:e},i.a.createElement("div",{className:"month-display"},i.a.createElement("span",null,"".concat(k[e.split("/")[0]-1]," ").concat(e.split("/")[2]))),i.a.createElement("div",{className:"date-display"},i.a.createElement("span",null,e.split("/")[1])),i.a.createElement(C,{date:e,entries:t}))})))};function I(e){var t=e.split("-");return"".concat(t[1],"/").concat(t[2],"/").concat(t[0])}function L(e){var t=e.split(":"),n=parseInt(t[0],10),a="AM";return n>12?(n-=12,a="PM"):0===n&&(n=12),"".concat(n,":").concat(t[1],":00 ").concat(a)}function M(e,t){var n=e.split("-"),a=t.split(":");return"".concat(n[0]).concat(n[1]).concat(n[2]).concat(a[0]).concat(a[1])}var D=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={loadedClass:""},n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout(function(){e.setState({loadedClass:"detail-loaded"}),clearInterval(t)},250)}},{key:"render",value:function(){var e=this.props,t=e.onDetailClose,n=e.data,a=this.state.loadedClass;return i.a.createElement("div",{className:"detail-overlay ".concat(a)},i.a.createElement("div",{className:"detail-bg",role:"none",onClick:t}),i.a.createElement("div",{className:"detail-panel"},i.a.createElement("div",{className:"detail-header"},i.a.createElement("div",{className:"detail-header-inner"},i.a.createElement("span",{className:"entry-number"},"Entry No.\xa0",n.number),i.a.createElement("button",{className:"close-button",type:"button",onClick:t}))),i.a.createElement("div",{className:"detail-body"},i.a.createElement("div",{className:"detail-body-inner"},i.a.createElement("div",{className:"detail-headline"},"".concat(n.engines.length," engine train observed on ").concat(function(e,t){var n=e.split("/");return"".concat(t[n[0]-1]," ").concat(n[1],", ").concat(n[2])}(n.date,k)," at ").concat(function(e){var t=e.split(":"),n="a.m.";return-1!==e.indexOf("PM")&&(n="p.m."),"".concat(t[0],":").concat(t[1]," ").concat(n)}(n.time)," heading ").concat(n.direction,".")),i.a.createElement("div",{className:"detail-subhead"},"Engines"),i.a.createElement("table",{className:"detail-table",cellPadding:"0",cellSpacing:"0"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Ord."),i.a.createElement("th",null,"Line"),i.a.createElement("th",null,"No."),i.a.createElement("th",null,"Pos."),i.a.createElement("th",null,"Sightings"))),i.a.createElement("tbody",null,n.engines.map(function(e){var t={backgroundColor:e.color};return i.a.createElement("tr",{key:e.number},i.a.createElement("td",null,i.a.createElement("span",{className:"engine-color-indicator",style:t},e.order)),i.a.createElement("td",null,i.a.createElement("span",null,e.line)),i.a.createElement("td",null,i.a.createElement("span",null,e.number)),i.a.createElement("td",null,i.a.createElement("span",null,e.location)),i.a.createElement("td",null,i.a.createElement("span",null,"\xa0")))}))),i.a.createElement("div",{className:"detail-subhead"},"Notes")))))}}]),t}(a.Component),A=n(1),w=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"menu-nav-item"},"About the Project"),i.a.createElement("p",null,"Trainspotted is my home office, set up in front of a backyard window looking out at the Milwaukee District North tracks across the alley. During off-peak hours, freight trains are cleared to run along the Metra corridor. Much like my work situation, the trains don\u2019t adhere to any set schedule. This is an exercise in applying structure to the chaos surrounding this new phase of my life."),i.a.createElement("p",null,"This project also brought me up to speed with React/Redux and was developed using the full MERN stack."))},T=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={line:"",location:"",number:""},n.handleLineChange=n.handleLineChange.bind(Object(A.a)(n)),n.handleNumberChange=n.handleNumberChange.bind(Object(A.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(A.a)(n)),n.handleRemove=n.handleRemove.bind(Object(A.a)(n)),n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.id,n=e.updateEngines,a=this.state;n(t,{line:a.line,location:a.location,number:a.number})}},{key:"handleLineChange",value:function(e){this.setState({line:e.target.value})}},{key:"handleNumberChange",value:function(e){this.setState({number:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleRemove",value:function(){var e=this.props,t=e.id;(0,e.removeEngine)(t)}},{key:"render",value:function(){var e=this.props.trainLineList,t=this.state,n=t.line,a=t.location,l=t.number;return i.a.createElement("div",{className:"flex-row add-engine-row"},i.a.createElement("label",{className:"form-label form-select-label form-label-line",htmlFor:"line"},i.a.createElement("span",null,"Line"),i.a.createElement("select",{className:"form-select",id:"line",name:"line",value:n,onChange:this.handleLineChange},i.a.createElement("option",{value:""},"Select"),e.map(function(e){return i.a.createElement("option",{value:e.name,key:e.id},e.short)}))),i.a.createElement("label",{className:"form-label form-label-number",htmlFor:"number"},i.a.createElement("span",null,"Number"),i.a.createElement("input",{className:"form-input",id:"number",name:"number",type:"number",value:l,onChange:this.handleNumberChange})),i.a.createElement("label",{className:"form-label form-select-label form-label-location",htmlFor:"location"},i.a.createElement("span",null,"Location"),i.a.createElement("select",{className:"form-select",id:"location",name:"location",value:a,onChange:this.handleLocationChange},i.a.createElement("option",{value:""},"Select"),i.a.createElement("option",{value:"front"},"Front"),i.a.createElement("option",{value:"middle"},"Middle"),i.a.createElement("option",{value:"end"},"End"))),i.a.createElement("button",{className:"remove-button",type:"button",onClick:this.handleRemove}))}}]),t}(a.Component),R=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={date:"",direction:"north",idIter:0,engines:[{id:"engine-no-0",data:{line:"",number:"",location:""}}],time:""},n.handleDateChange=n.handleDateChange.bind(Object(A.a)(n)),n.handleTimeChange=n.handleTimeChange.bind(Object(A.a)(n)),n.handleDirectionChange=n.handleDirectionChange.bind(Object(A.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n.displayForm=n.displayForm.bind(Object(A.a)(n)),n.addEngine=n.addEngine.bind(Object(A.a)(n)),n.removeEngine=n.removeEngine.bind(Object(A.a)(n)),n.updateEngines=n.updateEngines.bind(Object(A.a)(n)),n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=new Date,t=e.getDate().toString();1===t.length&&(t="0".concat(t));var n=(e.getMonth()+1).toString();1===n.length&&(n="0".concat(n)),this.setState({date:"".concat(e.getFullYear(),"-").concat(n,"-").concat(t)});var a=e.getHours().toString();1===a.length&&(a="0".concat(a));var i=e.getMinutes().toString();1===i.length&&(i="0".concat(i)),this.setState({time:"".concat(a,":").concat(i)})}},{key:"handleDateChange",value:function(e){this.setState({date:e.target.value})}},{key:"handleTimeChange",value:function(e){this.setState({time:e.target.value})}},{key:"handleDirectionChange",value:function(e){this.setState({direction:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.props.dispatch,n=this.state,a=n.date,i=n.direction,l=n.engines,r=n.time;e.preventDefault(),t(function(e){var t=e.date,n=e.direction,a=e.engines,i=e.time;return function(e){return e({type:"SUBMIT_ENTRY"}),fetch("/addEntry",{method:"POST",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:JSON.stringify({date:t,time:i,direction:n,engines:a})}).then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"ENTRY_ADDED",data:e}}(t))})}}({date:I(a),direction:i,engines:l.map(function(e,t){return{line:e.data.line,number:e.data.number,order:t+1,location:e.data.location}}),id:M(a,r),time:L(r)}))}},{key:"displayForm",value:function(){(0,this.props.setActiveMenuItem)("add-entry")}},{key:"addEngine",value:function(){var e=this.state,t=e.engines,n=e.idIter+1;t.push({id:"engine-no-".concat(n),data:{line:"",number:"",location:""}}),this.setState({idIter:n}),this.setState({engines:t})}},{key:"removeEngine",value:function(e){console.log("removeEngine");var t=this.state.engines,n=t.findIndex(function(t){return t.id===e});t.splice(n,1),this.setState({engines:t})}},{key:"updateEngines",value:function(e,t){var n=this.state.engines.find(function(t){return t.id===e});null!==n&&(n.data=t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.isActive,a=t.trainLineList,l=this.state,r=l.date,c=l.direction,s=l.engines,o=l.time;return i.a.createElement("div",null,i.a.createElement("button",{className:"menu-nav-item menu-nav-button",onClick:this.displayForm,type:"button"},"Add an Entry"),i.a.createElement("form",{className:"login-form app-form ".concat(n?"":"hidden"),onSubmit:this.handleSubmit},i.a.createElement("label",{className:"form-label form-label-date",htmlFor:"date"},i.a.createElement("span",null,"Date"),i.a.createElement("input",{className:"form-input",id:"date",name:"date",type:"date",value:r,onChange:this.handleDateChange})),i.a.createElement("div",{className:"flex-row"},i.a.createElement("label",{className:"form-label form-label-time",htmlFor:"time"},i.a.createElement("span",null,"Time"),i.a.createElement("input",{className:"form-input",id:"time",name:"time",type:"time",value:o,onChange:this.handleTimeChange})),i.a.createElement("label",{className:"form-label form-select-label form-label-direction",htmlFor:"direction"},i.a.createElement("span",null,"Direction"),i.a.createElement("select",{className:"form-select",id:"direction",name:"direction",value:c,onChange:this.handleDirectionChange},i.a.createElement("option",{value:"north"},"North"),i.a.createElement("option",{value:"south"},"South")))),s.map(function(t){return i.a.createElement(T,{id:t.id,key:t.id,removeEngine:e.removeEngine,trainLineList:a,updateEngines:e.updateEngines})}),i.a.createElement("button",{className:"text-button add-engine-button",type:"button",onClick:this.addEngine},"Add Another Engine"),i.a.createElement("div",{className:"form-action-buttons"},i.a.createElement("button",{className:"submit-button add-button",type:"submit"},"Add Entry"),i.a.createElement("button",{className:"cancel-button",type:"button"})),i.a.createElement("div",{className:"form-error ".concat("hidden")},"There was an error adding the entry. Please try again.")))}}]),t}(a.Component),F=Object(c.b)(function(e){return{trainLineList:e.trainLines.items}})(R),_=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={lineName:""},n.handleLineNameChange=n.handleLineNameChange.bind(Object(A.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n.displayForm=n.displayForm.bind(Object(A.a)(n)),n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"handleLineNameChange",value:function(e){this.setState({lineName:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.state.lineName;console.log("".concat(t,",")),e.preventDefault()}},{key:"displayForm",value:function(){(0,this.props.setActiveMenuItem)("add-line")}},{key:"render",value:function(){var e=this.props.isActive,t=this.state.lineName;return i.a.createElement("div",null,i.a.createElement("button",{className:"menu-nav-item menu-nav-button",onClick:this.displayForm,type:"button"},"Add a Train Line"),i.a.createElement("form",{className:"login-form app-form ".concat(e?"":"hidden"),onSubmit:this.handleSubmit},i.a.createElement("label",{className:"form-label form-label-line-name",htmlFor:"lineName"},i.a.createElement("span",null,"Name"),i.a.createElement("input",{className:"form-input",id:"lineName",name:"lineName",type:"text",value:t,onChange:this.handleLineNameChange})),i.a.createElement("div",{className:"form-error ".concat("hidden")},"There was an error signing in. Please recheck.")))}}]),t}(a.Component),P=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"menu-nav-item"},"Contact"),i.a.createElement("p",null,"jef.a.mayer(at)gmail.com",i.a.createElement("br",null),i.a.createElement("a",{className:"inline-link",href:"https://jefmayer.com"},"jefmayer.com")))},x=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={user:"",password:""},n.handleUserChange=n.handleUserChange.bind(Object(A.a)(n)),n.handlePasswordChange=n.handlePasswordChange.bind(Object(A.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n.logout=n.logout.bind(Object(A.a)(n)),n.displayForm=n.displayForm.bind(Object(A.a)(n)),n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"handleUserChange",value:function(e){this.setState({user:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.props.dispatch,n=this.state,a=n.user,i=n.password;e.preventDefault(),t(function(e){var t=e.user,n=e.password;return function(e){return e({type:"REQUEST_ENTRIES"}),fetch("/login",{method:"POST",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:JSON.stringify({user:t,password:n})}).then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"LOG_IN",data:e}}(t))})}}({user:a,password:i}))}},{key:"displayForm",value:function(){(0,this.props.setActiveMenuItem)("login")}},{key:"logout",value:function(){var e=this.props,t=e.dispatch;(0,e.setActiveMenuItem)(""),t({type:"LOG_OUT"})}},{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.isLoggedIn,a=e.isLoginError,l=this.state,r=l.user,c=l.password,s="hidden";return a&&(s=""),n?i.a.createElement("button",{className:"menu-nav-item menu-nav-button",type:"button",onClick:this.logout},"Logout"):i.a.createElement("div",null,i.a.createElement("button",{className:"menu-nav-item menu-nav-button",onClick:this.displayForm,type:"button"},"Login"),i.a.createElement("form",{className:"login-form app-form ".concat(t?"":"hidden"),onSubmit:this.handleSubmit},i.a.createElement("label",{className:"form-label",htmlFor:"user"},i.a.createElement("span",null,"Name"),i.a.createElement("input",{className:"form-input",id:"user",name:"user",type:"text",value:r,onChange:this.handleUserChange})),i.a.createElement("label",{className:"form-label",htmlFor:"password"},i.a.createElement("span",null,"Password"),i.a.createElement("input",{className:"form-input",id:"password",name:"password",type:"password",value:c,onChange:this.handlePasswordChange})),i.a.createElement("input",{className:"submit-button",type:"submit",value:"Login"}),i.a.createElement("div",{className:"form-error ".concat(s)},"There was an error signing in. Please recheck.")))}}]),t}(a.Component),U=Object(c.b)(function(e){var t=e.userStatus;return{isLoggedIn:t.isLoggedIn,isLoginError:t.isLoginError}})(x),H=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={activeMenuItem:""},n.divRef=i.a.createRef(),n.setActiveMenuItem=n.setActiveMenuItem.bind(Object(A.a)(n)),n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;if("closed"===this.props.menuDisplayClass)var t=setTimeout(function(){e.divRef.current.setAttribute("style","position:absolute;"),clearTimeout(t)},150);else this.divRef.current.setAttribute("style","position:fixed;")}},{key:"setActiveMenuItem",value:function(e){this.setState({activeMenuItem:e})}},{key:"render",value:function(){var e=this.state.activeMenuItem,t=this.props,n=t.isLoggedIn,a=t.menuDisplayClass,l=t.onMenuClick;return i.a.createElement("div",{className:"menu-container ".concat(a),ref:this.divRef},i.a.createElement("button",{className:"menu-button",onClick:l,type:"button"},i.a.createElement("span",{className:"menu-icon"},i.a.createElement("span",{className:"menu-bar"}),i.a.createElement("span",{className:"menu-bar"}),i.a.createElement("span",{className:"menu-bar"}))),i.a.createElement("div",{className:"menu-nav"},i.a.createElement("div",{className:"menu-nav-inner"},i.a.createElement(w,null),i.a.createElement(P,null),n&&i.a.createElement("div",null,i.a.createElement(F,{setActiveMenuItem:this.setActiveMenuItem,isActive:"add-entry"===e}),i.a.createElement(_,{setActiveMenuItem:this.setActiveMenuItem,isActive:"add-line"===e})),i.a.createElement(U,{setActiveMenuItem:this.setActiveMenuItem,isActive:"login"===e}))))}}]),t}(a.Component),J=Object(c.b)(function(e){return{isLoggedIn:e.userStatus.isLoggedIn}})(H),Q=n(20),Y=n.n(Q),G=(n(32),function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e(function(e){return e({type:"REQUEST_ENTRIES"}),fetch("/getEntries").then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"RECEIVE_ENTRIES",data:e}}(t))})}),e(function(e){return e({type:"REQUEST_LINES"}),fetch("/getLines").then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"RECEIVE_LINES",data:e}}(t))})})}},{key:"render",value:function(){var e,t=this.props,n=t.detailId,a=t.dispatch,l=t.entries,r=t.isDetailOpen,c=t.isMenuOpen;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"app-header"},i.a.createElement("div",{className:"logo-wrapper"},i.a.createElement("img",{src:Y.a,className:"logo-graphic",alt:"Trainspotted Logo"}),i.a.createElement("div",{className:"logo-type"},"Trainspotted")),i.a.createElement(J,{menuDisplayClass:c?"open":"closed",onMenuClick:function(){a(c?p():h())}})),i.a.createElement(S,{entries:l}),r&&i.a.createElement(D,{onDetailClose:function(){a(d())},data:(e=n,l.find(function(t){return t._id===e}))}))}}]),t}(a.Component)),V=Object(c.b)(function(e){var t=e.entryData,n=e.entryDetail,a=e.menu,i=t.items;return{detailId:n.id,entries:i,isDetailOpen:n.isOpen,isMenuOpen:a.isOpen}})(G),W=[o.a];var B=Object(s.d)(b,s.a.apply(void 0,W));console.log(B.getState()),r.a.render(i.a.createElement(c.a,{store:B},i.a.createElement(V,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d592be10.chunk.js.map