(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/trainspotted-logo.f965f559.svg"},22:function(e,t,n){e.exports=n(33)},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(12),r=n.n(l),c=n(7),s=n(9),o=n(19),u=(n(31),n(8)),m=function(e){return{type:"ENTRY_ADDED",data:e}},d=function(e){return{type:"SHOW_DETAIL",data:e}},h=function(){return{type:"HIDE_DETAIL"}},p=function(){return{type:"SHOW_MENU"}},b=function(){return{type:"HIDE_MENU"}},E=Object(s.c)({entryData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_ENTRIES":case"SUBMIT_ENTRY":return Object(u.a)({},e,{isFetching:!0});case"RECEIVE_ENTRIES":case"ENTRY_ADDED":return Object(u.a)({},e,{isFetching:!1,items:t.data});default:return e}},entryDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1,id:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_DETAIL":return Object(u.a)({},e,{isOpen:!0,id:t.data});case"HIDE_DETAIL":return Object(u.a)({},e,{isOpen:!1,id:t.data});default:return e}},menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"SHOW_MENU":return Object(u.a)({},e,{isOpen:!0});case"HIDE_MENU":return Object(u.a)({},e,{isOpen:!1});default:return e}},trainLines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_LINES":case"SUBMIT_TRAIN_LINE":return Object(u.a)({},e,{isFetching:!0});case"RECEIVE_LINES":case"TRAIN_LINE_ADDED":return Object(u.a)({},e,{isFetching:!1,items:t.data});default:return e}},userStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoggedIn:!1,isLoginError:!1,response:[{success:"error"}]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return"success"===t.data[0].success?Object(u.a)({},e,{isLoggedIn:!0,isLoginError:!1,response:t.data}):Object(u.a)({},e,{isLoggedIn:!1,isLoginError:!0,response:t.data});case"LOG_OUT":return Object(u.a)({},e,{isLoggedIn:!1});default:return e}}}),v=n(2),f=n(3),g=n(5),y=n(4),N=n(6),O=n(21),j=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e))).divRef=i.a.createRef(),n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.entry,t=e.time.split(":");-1!==e.time.indexOf("PM")&&-1===e.time.indexOf("12:")&&(t[0]=parseInt(t[0],10)+12),-1!==e.time.indexOf("AM")&&-1!==e.time.indexOf("12:")&&(t[0]=parseInt(t[0],10)-12);var n=((3600*t[0]+60*parseInt(t[1],10))/864).toFixed(2);this.divRef.current.setAttribute("style","left:".concat(n,"%;"))}},{key:"render",value:function(){var e=this.props,t=e.entry,n=e.dispatch;function a(){n(d(t._id))}return i.a.createElement("button",{className:"engine-manifest",ref:this.divRef,type:"button",onClick:a,onKeyDown:a},t.engines.map(function(e){var t={backgroundColor:e.color};return i.a.createElement("span",{className:"engine-number",style:t,key:e.number},e.number)}),i.a.createElement("span",{className:"engine-details-button"},"..."))}}]),t}(a.Component),C=Object(c.b)(function(e){return Object(s.b)({showDetail:d},e)})(j),k=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e))).divRef=i.a.createRef(),n.entryHeight=0,n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.divRef.current.setAttribute("style","height:".concat(this.entryHeight,"px;"))}},{key:"render",value:function(){var e=this,t=this.props.date,n=this.props.entries;return i.a.createElement("div",{className:"entries-for-date",ref:this.divRef},n.map(function(n){return n.date===t?(e.entryHeight<20*n.engines.length&&(e.entryHeight=20*(n.engines.length+1)),i.a.createElement(C,{key:n._id,entry:n})):""}))}}]),t}(a.Component),S=["January","February","March","April","May","June","July","August","September","October","November","December"],I=function(e){var t=e.entries,n=Object(O.a)(new Set(t.map(function(e){return e.date}))),a=-1,l=!1;return i.a.createElement("div",{className:"train-chart"},i.a.createElement("div",{className:"x-axis-header clearfix"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",null,"12 AM")),i.a.createElement("li",null,i.a.createElement("span",null,"2 AM")),i.a.createElement("li",null,i.a.createElement("span",null,"4 AM")),i.a.createElement("li",null,i.a.createElement("span",null,"6 AM")),i.a.createElement("li",null,i.a.createElement("span",null,"8 AM")),i.a.createElement("li",null,i.a.createElement("span",null,"10 AM")),i.a.createElement("li",null,i.a.createElement("span",null,"12 PM")),i.a.createElement("li",null,i.a.createElement("span",null,"2 PM")),i.a.createElement("li",null,i.a.createElement("span",null,"4 PM")),i.a.createElement("li",null,i.a.createElement("span",null,"6 PM")),i.a.createElement("li",null,i.a.createElement("span",null,"8 PM")),i.a.createElement("li",null,i.a.createElement("span",null,"10 PM")))),i.a.createElement("div",{className:"time-table"},i.a.createElement("div",{className:"month-bar"}),n.map(function(e){return a!==e.split("/")[0]?(a=e.split("/")[0],l=!0):l=!1,i.a.createElement("div",{className:"date-line",key:e},l&&i.a.createElement("div",{className:"month-display"},i.a.createElement("span",null,"".concat(S[e.split("/")[0]-1]," ").concat(e.split("/")[2]))),i.a.createElement("div",{className:"date-display"},i.a.createElement("span",null,e.split("/")[1])),i.a.createElement(k,{date:e,entries:t}))})))};function L(e){var t=e.split("-");return"".concat(t[1],"/").concat(t[2],"/").concat(t[0])}function M(e){var t=e.split(":"),n=parseInt(t[0],10),a="AM";return n>12?(n-=12,a="PM"):12===n?a="PM":0===n&&(n=12),"".concat(n,":").concat(t[1],":00 ").concat(a)}function D(e){var t=e.getDate().toString();1===t.length&&(t="0".concat(t));var n=(e.getMonth()+1).toString();return 1===n.length&&(n="0".concat(n)),"".concat(e.getFullYear(),"-").concat(n,"-").concat(t)}function A(e){var t=e.getHours().toString();1===t.length&&(t="0".concat(t));var n=e.getMinutes().toString();return 1===n.length&&(n="0".concat(n)),"".concat(t,":").concat(n)}function T(e,t){var n=e.split("-"),a=t.split(":");return"".concat(n[0]).concat(n[1]).concat(n[2]).concat(a[0]).concat(a[1])}var w=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e))).state={loadedClass:""},n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout(function(){e.setState({loadedClass:"detail-loaded"}),clearInterval(t)},250)}},{key:"render",value:function(){var e=this.props,t=e.onDetailClose,n=e.data,a=e.entries,l=this.state.loadedClass;return i.a.createElement("div",{className:"detail-overlay ".concat(l)},i.a.createElement("div",{className:"detail-bg",role:"none",onClick:t}),i.a.createElement("div",{className:"detail-panel"},i.a.createElement("div",{className:"detail-header"},i.a.createElement("div",{className:"detail-header-inner"},i.a.createElement("span",{className:"entry-number"},"Entry No.\xa0",n.number),i.a.createElement("button",{className:"close-button",type:"button",onClick:t}))),i.a.createElement("div",{className:"detail-body"},i.a.createElement("div",{className:"detail-body-inner"},i.a.createElement("div",{className:"detail-headline"},"".concat(n.engines.length," engine train observed on ").concat(function(e,t){var n=e.split("/");return"".concat(t[n[0]-1]," ").concat(n[1],", ").concat(n[2])}(n.date,S)," at ").concat(function(e){var t=e.split(":"),n="a.m.";return-1!==e.indexOf("PM")&&(n="p.m."),"".concat(t[0],":").concat(t[1]," ").concat(n)}(n.time)," heading ").concat(n.direction,".")),i.a.createElement("div",{className:"detail-subhead"},"Engines"),i.a.createElement("table",{className:"detail-table",cellPadding:"0",cellSpacing:"0"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Ord."),i.a.createElement("th",null,"Line"),i.a.createElement("th",null,"No."),i.a.createElement("th",null,"Pos."),i.a.createElement("th",null,"Sightings"))),i.a.createElement("tbody",null,n.engines.map(function(e){var t={backgroundColor:e.color};return i.a.createElement("tr",{key:e.number},i.a.createElement("td",null,i.a.createElement("span",{className:"engine-color-indicator",style:t},e.order)),i.a.createElement("td",null,i.a.createElement("span",null,e.line)),i.a.createElement("td",null,i.a.createElement("span",null,e.number)),i.a.createElement("td",null,i.a.createElement("span",null,e.location)),i.a.createElement("td",null,i.a.createElement("span",null,function(e,t,n){return console.log("".concat(e,", ").concat(t,", ").concat(n.length)),""}(e.line,e.number,a))))}))),i.a.createElement("div",{className:"detail-subhead"},"Notes")))))}}]),t}(a.Component),R=n(1),_=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"menu-nav-item"},"About the Project"),i.a.createElement("p",null,"Trainspotted is my home office, set up in front of a backyard window looking out at the Milwaukee District North tracks across the alley. During off-peak hours, freight trains are cleared to run along the Metra corridor. Much like my work situation, the trains don\u2019t adhere to any set schedule. This is an exercise in applying structure to the chaos surrounding this new phase of my life."),i.a.createElement("p",null,"This project also brought me up to speed with React/Redux and was developed using the full MERN stack."))},F=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e))).state={line:"",location:"",number:""},n.handleLineChange=n.handleLineChange.bind(Object(R.a)(n)),n.handleNumberChange=n.handleNumberChange.bind(Object(R.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(R.a)(n)),n.isEngineValid=n.isEngineValid.bind(Object(R.a)(n)),n.handleRemove=n.handleRemove.bind(Object(R.a)(n)),n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.line,n=e.location,a=e.number;this.setState({line:t,location:n,number:a})}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.id,n=e.updateEngines,a=this.state,i=a.line,l=a.location,r=a.number;n(t,this.isEngineValid(),i,l,r)}},{key:"handleLineChange",value:function(e){this.setState({line:e.target.value})}},{key:"handleNumberChange",value:function(e){this.setState({number:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleRemove",value:function(){var e=this.props,t=e.id;(0,e.removeEngine)(t)}},{key:"isEngineValid",value:function(){var e=this.state,t=e.line,n=e.location,a=e.number;return""!==t&&""!==n&&""!==a}},{key:"render",value:function(){var e=this.props.trainLineList,t=this.state,n=t.line,a=t.location,l=t.number;return i.a.createElement("div",{className:"flex-row add-engine-row"},i.a.createElement("label",{className:"form-label form-select-label form-label-line",htmlFor:"line"},i.a.createElement("span",null,"Line"),i.a.createElement("select",{className:"form-select",id:"line",name:"line",value:n,onChange:this.handleLineChange},i.a.createElement("option",{value:""},"Select"),e.map(function(e){return i.a.createElement("option",{value:e.name,key:e.id},e.short)}))),i.a.createElement("label",{className:"form-label form-label-number",htmlFor:"number"},i.a.createElement("span",null,"Number"),i.a.createElement("input",{className:"form-input",id:"number",name:"number",type:"number",value:l,onChange:this.handleNumberChange})),i.a.createElement("label",{className:"form-label form-select-label form-label-location",htmlFor:"location"},i.a.createElement("span",null,"Location"),i.a.createElement("select",{className:"form-select",id:"location",name:"location",value:a,onChange:this.handleLocationChange},i.a.createElement("option",{value:""},"Select"),i.a.createElement("option",{value:"front"},"Front"),i.a.createElement("option",{value:"middle"},"Middle"),i.a.createElement("option",{value:"end"},"End"))),i.a.createElement("button",{className:"remove-button",type:"button",onClick:this.handleRemove}))}}]),t}(a.Component),P=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e))).state={date:"",direction:"north",idIter:0,isEntryValid:!0,engines:[{id:"engine-no-0",line:"",number:"",location:"",isValid:!1}],time:""},n.handleDateChange=n.handleDateChange.bind(Object(R.a)(n)),n.handleTimeChange=n.handleTimeChange.bind(Object(R.a)(n)),n.handleDirectionChange=n.handleDirectionChange.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n.handleCancel=n.handleCancel.bind(Object(R.a)(n)),n.displayForm=n.displayForm.bind(Object(R.a)(n)),n.addEngine=n.addEngine.bind(Object(R.a)(n)),n.removeEngine=n.removeEngine.bind(Object(R.a)(n)),n.updateEngines=n.updateEngines.bind(Object(R.a)(n)),n.reset=n.reset.bind(Object(R.a)(n)),n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=new Date;this.setState({date:D(e),time:A(e)})}},{key:"handleDateChange",value:function(e){this.setState({date:e.target.value})}},{key:"handleTimeChange",value:function(e){this.setState({time:e.target.value})}},{key:"handleDirectionChange",value:function(e){this.setState({direction:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.props.dispatch,n=this.state,a=n.date,i=n.direction,l=n.engines,r=n.time,c=!0;e.preventDefault(),l.forEach(function(e){e.isValid||(c=!1)}),c&&(t(function(e){var t=e.date,n=e.direction,a=e.engines,i=e.id,l=e.time;return function(e){return e({type:"SUBMIT_ENTRY"}),fetch("/addEntry",{method:"POST",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:JSON.stringify({date:t,time:l,direction:n,engines:a,id:i})}).then(function(e){return e.json()}).then(function(t){return e(m(t))})}}({date:L(a),direction:i,engines:l.map(function(e,t){return{line:e.line,number:e.number,order:t+1,location:e.location}}),id:T(a,r),time:M(r)})),this.reset()),this.setState({isEntryValid:c})}},{key:"handleCancel",value:function(e){e.preventDefault(),this.reset()}},{key:"reset",value:function(){var e=new Date;this.setState({date:D(e),direction:"north",idIter:0,isEntryValid:!0,engines:[{id:"engine-no-0",line:"",number:"",location:"",isValid:!1}],time:A(e)})}},{key:"displayForm",value:function(){(0,this.props.setActiveMenuItem)("add-entry")}},{key:"addEngine",value:function(){var e=this.state,t=e.engines,n=e.idIter+1;t.push({id:"engine-no-".concat(n),line:"",number:"",location:"",isValid:!1}),this.setState({idIter:n}),this.setState({engines:t})}},{key:"removeEngine",value:function(e){var t=this.state.engines,n=t.findIndex(function(t){return t.id===e});t.splice(n,1),this.setState({engines:t})}},{key:"updateEngines",value:function(e,t,n,a,i){var l=this.state.engines.find(function(t){return t.id===e});null!==l&&(l.line=n,l.location=a,l.number=i,l.isValid=t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.isActive,a=t.trainLineList,l=this.state,r=l.date,c=l.direction,s=l.engines,o=l.isEntryValid,u=l.time,m="hidden";return o||(m=""),i.a.createElement("div",null,i.a.createElement("button",{className:"menu-nav-item menu-nav-button",onClick:this.displayForm,type:"button"},"Add an Entry"),i.a.createElement("form",{className:"login-form app-form ".concat(n?"":"hidden"),onSubmit:this.handleSubmit},i.a.createElement("label",{className:"form-label form-label-date",htmlFor:"date"},i.a.createElement("span",null,"Date"),i.a.createElement("input",{className:"form-input",id:"date",name:"date",type:"date",value:r,onChange:this.handleDateChange})),i.a.createElement("div",{className:"flex-row"},i.a.createElement("label",{className:"form-label form-label-time",htmlFor:"time"},i.a.createElement("span",null,"Time"),i.a.createElement("input",{className:"form-input",id:"time",name:"time",type:"time",value:u,onChange:this.handleTimeChange})),i.a.createElement("label",{className:"form-label form-select-label form-label-direction",htmlFor:"direction"},i.a.createElement("span",null,"Direction"),i.a.createElement("select",{className:"form-select",id:"direction",name:"direction",value:c,onChange:this.handleDirectionChange},i.a.createElement("option",{value:"north"},"North"),i.a.createElement("option",{value:"south"},"South")))),s.map(function(t){return i.a.createElement(F,{id:t.id,key:t.id,line:t.line,location:t.location,number:t.number,removeEngine:e.removeEngine,trainLineList:a,updateEngines:e.updateEngines})}),i.a.createElement("button",{className:"text-button add-engine-button",type:"button",onClick:this.addEngine},"Add Another Engine"),i.a.createElement("div",{className:"form-action-buttons"},i.a.createElement("button",{className:"submit-button add-button",type:"submit"},"Add Entry"),i.a.createElement("button",{className:"cancel-button",type:"button",onClick:this.handleCancel})),i.a.createElement("div",{className:"form-error ".concat(m)},"There was an error adding the entry. Please try again.")))}}]),t}(a.Component),x=Object(c.b)(function(e){return{trainLineList:e.trainLines.items}})(P),U=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e))).state={lineName:"",isEntryValid:!0},n.handleLineNameChange=n.handleLineNameChange.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n.displayForm=n.displayForm.bind(Object(R.a)(n)),n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"handleLineNameChange",value:function(e){this.setState({lineName:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.props.dispatch,n=this.state.lineName;console.log("".concat(n,","));var a=!0;e.preventDefault(),""===n&&(a=!1),a&&(t(function(e){var t=e.lineName;return function(e){return e({type:"SUBMIT_TRAIN_LINE"}),fetch("/addTrainLine",{method:"POST",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:JSON.stringify({lineName:t})}).then(function(e){return e.json()}).then(function(t){return e(m(t))})}}({lineName:n})),this.reset()),this.setState({isEntryValid:a})}},{key:"handleCancel",value:function(e){e.preventDefault(),this.reset()}},{key:"reset",value:function(){this.setState({lineName:""})}},{key:"displayForm",value:function(){(0,this.props.setActiveMenuItem)("add-line")}},{key:"render",value:function(){var e=this.props.isActive,t=this.state,n=t.lineName,a="hidden";return t.isEntryValid||(a=""),i.a.createElement("div",null,i.a.createElement("button",{className:"menu-nav-item menu-nav-button",onClick:this.displayForm,type:"button"},"Add a Train Line"),i.a.createElement("form",{className:"login-form app-form ".concat(e?"":"hidden"),onSubmit:this.handleSubmit},i.a.createElement("label",{className:"form-label form-label-line-name",htmlFor:"lineName"},i.a.createElement("span",null,"Name"),i.a.createElement("input",{className:"form-input",id:"lineName",name:"lineName",type:"text",value:n,onChange:this.handleLineNameChange})),i.a.createElement("div",{className:"form-action-buttons"},i.a.createElement("button",{className:"submit-button add-button",type:"submit"},"Add Train Line"),i.a.createElement("button",{className:"cancel-button",type:"button",onClick:this.handleCancel})),i.a.createElement("div",{className:"form-error ".concat(a)},"There was an error signing in. Please recheck.")))}}]),t}(a.Component),V=Object(c.b)()(U),H=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"menu-nav-item"},"Contact"),i.a.createElement("p",null,"jef.a.mayer(at)gmail.com",i.a.createElement("br",null),i.a.createElement("a",{className:"inline-link",href:"https://jefmayer.com"},"jefmayer.com")))},J=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e))).state={user:"",password:""},n.handleUserChange=n.handleUserChange.bind(Object(R.a)(n)),n.handlePasswordChange=n.handlePasswordChange.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n.logout=n.logout.bind(Object(R.a)(n)),n.displayForm=n.displayForm.bind(Object(R.a)(n)),n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"handleUserChange",value:function(e){this.setState({user:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.props.dispatch,n=this.state,a=n.user,i=n.password;e.preventDefault(),t(function(e){var t=e.user,n=e.password;return function(e){return e({type:"REQUEST_ENTRIES"}),fetch("/login",{method:"POST",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:JSON.stringify({user:t,password:n})}).then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"LOG_IN",data:e}}(t))})}}({user:a,password:i}))}},{key:"displayForm",value:function(){(0,this.props.setActiveMenuItem)("login")}},{key:"logout",value:function(){var e=this.props,t=e.dispatch;(0,e.setActiveMenuItem)(""),t({type:"LOG_OUT"})}},{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.isLoggedIn,a=e.isLoginError,l=this.state,r=l.user,c=l.password,s="hidden";return a&&(s=""),n?i.a.createElement("button",{className:"menu-nav-item menu-nav-button",type:"button",onClick:this.logout},"Logout"):i.a.createElement("div",null,i.a.createElement("button",{className:"menu-nav-item menu-nav-button",onClick:this.displayForm,type:"button"},"Login"),i.a.createElement("form",{className:"login-form app-form ".concat(t?"":"hidden"),onSubmit:this.handleSubmit},i.a.createElement("label",{className:"form-label",htmlFor:"user"},i.a.createElement("span",null,"Name"),i.a.createElement("input",{className:"form-input",id:"user",name:"user",type:"text",value:r,onChange:this.handleUserChange})),i.a.createElement("label",{className:"form-label",htmlFor:"password"},i.a.createElement("span",null,"Password"),i.a.createElement("input",{className:"form-input",id:"password",name:"password",type:"password",value:c,onChange:this.handlePasswordChange})),i.a.createElement("input",{className:"submit-button",type:"submit",value:"Login"}),i.a.createElement("div",{className:"form-error ".concat(s)},"There was an error signing in. Please recheck.")))}}]),t}(a.Component),B=Object(c.b)(function(e){var t=e.userStatus;return{isLoggedIn:t.isLoggedIn,isLoginError:t.isLoginError}})(J),Q=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e))).state={activeMenuItem:""},n.divRef=i.a.createRef(),n.setActiveMenuItem=n.setActiveMenuItem.bind(Object(R.a)(n)),n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;if("closed"===this.props.menuDisplayClass)var t=setTimeout(function(){e.divRef.current.setAttribute("style","position:absolute;"),clearTimeout(t)},150);else this.divRef.current.setAttribute("style","position:fixed;")}},{key:"setActiveMenuItem",value:function(e){this.setState({activeMenuItem:e})}},{key:"render",value:function(){var e=this.state.activeMenuItem,t=this.props,n=t.isLoggedIn,a=t.menuDisplayClass,l=t.onMenuClick;return i.a.createElement("div",{className:"menu-container ".concat(a),ref:this.divRef},i.a.createElement("button",{className:"menu-button",onClick:l,type:"button"},i.a.createElement("span",{className:"menu-icon"},i.a.createElement("span",{className:"menu-bar"}),i.a.createElement("span",{className:"menu-bar"}),i.a.createElement("span",{className:"menu-bar"}))),i.a.createElement("div",{className:"menu-nav"},i.a.createElement("div",{className:"menu-nav-inner"},i.a.createElement(_,null),i.a.createElement(H,null),n&&i.a.createElement("div",null,i.a.createElement(x,{setActiveMenuItem:this.setActiveMenuItem,isActive:"add-entry"===e}),i.a.createElement(V,{setActiveMenuItem:this.setActiveMenuItem,isActive:"add-line"===e})),i.a.createElement(B,{setActiveMenuItem:this.setActiveMenuItem,isActive:"login"===e}))))}}]),t}(a.Component),W=Object(c.b)(function(e){return{isLoggedIn:e.userStatus.isLoggedIn}})(Q),Y=n(20),G=n.n(Y),K=(n(32),function(e){function t(){return Object(v.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e(function(e){return e({type:"REQUEST_ENTRIES"}),fetch("/getEntries").then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"RECEIVE_ENTRIES",data:e}}(t))})}),e(function(e){return e({type:"REQUEST_LINES"}),fetch("/getLines").then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"RECEIVE_LINES",data:e}}(t))})})}},{key:"render",value:function(){var e,t=this.props,n=t.detailId,a=t.dispatch,l=t.entries,r=t.isDetailOpen,c=t.isMenuOpen;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"app-header"},i.a.createElement("div",{className:"logo-wrapper"},i.a.createElement("img",{src:G.a,className:"logo-graphic",alt:"Trainspotted Logo"}),i.a.createElement("div",{className:"logo-type"},"Trainspotted")),i.a.createElement(W,{menuDisplayClass:c?"open":"closed",onMenuClick:function(){a(c?b():p())}})),i.a.createElement(I,{entries:l}),r&&i.a.createElement(w,{onDetailClose:function(){a(h())},data:(e=n,l.find(function(t){return t._id===e})),entries:l}))}}]),t}(a.Component)),q=Object(c.b)(function(e){var t=e.entryData,n=e.entryDetail,a=e.menu,i=t.items;return{detailId:n.id,entries:i,isDetailOpen:n.isOpen,isMenuOpen:a.isOpen}})(K),z=[o.a];var X=Object(s.d)(E,s.a.apply(void 0,z));console.log(X.getState()),r.a.render(i.a.createElement(c.a,{store:X},i.a.createElement(q,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ae11ff95.chunk.js.map