(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),l=n.n(i),c=n(9),s=n(1),o=n(2),u=n(4),m=n(3),d=n(5),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).divRef=r.a.createRef(),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.entry;console.log(e.time);var t=e.time.split(":");-1!==e.time.indexOf("PM")&&-1===e.time.indexOf("12:")&&(t[0]=parseInt(t[0],10)+12),-1!==e.time.indexOf("AM")&&-1!==e.time.indexOf("12:")&&(t[0]=parseInt(t[0],10)-12);var n=((3600*t[0]+60*parseInt(t[1],10))/864).toFixed(2);console.log(n),this.divRef.current.setAttribute("style","margin-left:".concat(n,"%;"))}},{key:"render",value:function(){var e=this.props.entry;return r.a.createElement("div",{className:"engine-manifest",ref:this.divRef},e.engines.map(function(e){return r.a.createElement("span",{className:"engine-number",key:e.number},e.number)}))}}]),t}(a.Component),h=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).divRef=r.a.createRef(),n.entryHeight=0,n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log(this.divRef),this.divRef.current.setAttribute("style","height:".concat(this.entryHeight,"px;"))}},{key:"render",value:function(){var e=this,t=this.props.date,n=this.props.entries;return r.a.createElement("div",{className:"entries-for-date",ref:this.divRef},n.map(function(n){return n.date===t?(e.entryHeight<20*n.engines.length&&(e.entryHeight=20*n.engines.length),r.a.createElement(f,{key:n._id,entry:n})):""}))}}]),t}(a.Component),p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={entries:[]},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getEntries()}},{key:"getEntries",value:function(){var e=this;fetch("/getEntries").then(function(e){return e.json()}).then(function(t){return e.setState({entries:t})})}},{key:"render",value:function(){var e=this.state.entries,t=Object(c.a)(new Set(e.map(function(e){return e.date})));return r.a.createElement("div",{className:"train-chart"},r.a.createElement("div",{className:"x-axis-header clearfix"},r.a.createElement("ul",null,r.a.createElement("li",null,"12 AM"),r.a.createElement("li",null,"2 AM"),r.a.createElement("li",null,"4 AM"),r.a.createElement("li",null,"6 AM"),r.a.createElement("li",null,"8 AM"),r.a.createElement("li",null,"10 AM"),r.a.createElement("li",null,"12 PM"),r.a.createElement("li",null,"2 PM"),r.a.createElement("li",null,"4 PM"),r.a.createElement("li",null,"6 PM"),r.a.createElement("li",null,"8 PM"),r.a.createElement("li",null,"10 PM"),r.a.createElement("li",null,"12 AM"))),r.a.createElement("div",{className:"time-table"},t.map(function(t){return r.a.createElement("div",{className:"date-line",key:t},r.a.createElement("div",{className:"date-display"},t),r.a.createElement(h,{date:t,entries:e}))})))}}]),t}(a.Component),v=n(8),E=n.n(v);n(16);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:E.a,className:"app-logo",alt:"logo"}),r.a.createElement("div",{className:"app-title"},"Trainspotted")),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n.p+"static/media/trainspotted-logo.f965f559.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.e2166f9d.chunk.js.map