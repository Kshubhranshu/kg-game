(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{34:function(e){e.exports=JSON.parse('[{"question":"what is color of sky?","option1":"green","option2":"pink","option3":"brown","option4":"blue","answer":"blue"},{"question":"2 x 2 = ","option1":"2","option2":"4","option3":"22","option4":"6","answer":"4"},{"question":"how many days are there in a week?","option1":"7","option2":"6","option3":"5","option4":"8","answer":"7"},{"question":"how many months are in a year?","option1":"13","option2":"14","option3":"12","option4":"15","answer":"12"},{"question":"3 x 9 =","option1":"27","option2":"24","option3":"23","option4":"26","answer":"27"},{"question":"what comes before 67","option1":"68","option2":"66","option3":"69","option4":"65","answer":"66"},{"question":"how many finger do you have?","option1":"10","option2":"11","option3":"12","option4":"09","answer":"10"},{"question":"how many sense organs do you have?","option1":"5","option2":"6","option3":"4","option4":"3","answer":"5"},{"question":"how much is 23 - 01","option1":"24","option2":"22","option3":"21","option4":"25","answer":"22"},{"question":"how much is 6 + 5","option1":"10","option2":"11","option3":"09","option4":"12","answer":"11"}]')},37:function(e,a,t){e.exports=t.p+"static/media/score.97512cce.svg"},41:function(e,a,t){e.exports=t(64)},46:function(e,a,t){},47:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(19),c=t.n(r),l=(t(46),t(6)),i=(t(47),t(84)),s=t(7),m=t(80),u=t(83),p=t(82),d=t(86),b=Object(m.a)((function(e){var a,t;return{root:{flexGrow:1},paper:(a={padding:e.spacing(2),textAlign:"center",marginBottom:"5px",color:e.palette.text.secondary,width:"70%",marginLeft:"-35%"},Object(s.a)(a,"padding","10px"),Object(s.a)(a,"background","rgba(0, 0, 0, .1)"),a),social:(t={padding:e.spacing(2),textAlign:"center",marginBottom:"5px",color:e.palette.text.secondary,width:"70%",marginLeft:"-35%",borderRadius:"20px"},Object(s.a)(t,"padding","10px"),Object(s.a)(t,"background","rgba(0, 0, 0, .1)"),t)}})),g=function(){var e=b();return o.a.createElement("div",{className:e.root},o.a.createElement(p.a,{container:!0,spacing:3},o.a.createElement(p.a,{item:!0,xs:!0},o.a.createElement(u.a,{className:e.paper,style:{color:"black"}},o.a.createElement("h1",null,"Rules"),o.a.createElement("b",null,"Every question will have a timer of 10 seconds."),o.a.createElement("hr",null),o.a.createElement("b",null,"Each gameplay consists of 10 questions."),o.a.createElement("hr",null)),o.a.createElement(u.a,{className:e.social,style:{color:"black"}},o.a.createElement("a",{href:"http://shubhranshu14@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Click here for you feedback ")))))},E=Object(m.a)((function(e){var a;return{root:{flexGrow:1},paper:(a={padding:e.spacing(2),textAlign:"center",marginBottom:"5px",color:e.palette.text.secondary,width:"100px",height:"35px",borderRadius:"70px"},Object(s.a)(a,"padding","10px"),Object(s.a)(a,"background","rgba(0, 0, 0, .1)"),Object(s.a)(a,"marginLeft","230%"),Object(s.a)(a,"marginTop","10px"),a)}})),h=function(e){var a=e.score,t=E();return o.a.createElement("div",{className:t.root},o.a.createElement(p.a,{container:!0,spacing:3},o.a.createElement(p.a,{item:!0,xs:!0},o.a.createElement(u.a,{className:t.paper,style:{color:"black",fontSize:"2rem"}},"\ud83c\udfc5 ",o.a.createElement("b",{title:"Last Score"},a)))))},f=Object(m.a)((function(e){return{root:{flexGrow:1,display:"flex"},paper:{textAlign:"center",color:e.palette.text.secondary,margin:"auto",marginRight:"15.5%",width:"50%",minHeight:"400px",padding:"10px"},insidePaper:{marginTop:"12%"}}})),v=Object(d.a)(i.a)({background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,width:"200px",fontSize:"2rem",borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:80,padding:"0 30px"}),w=function(e){var a=e.changeMode,t=e.score,r=Object(n.useState)(""),c=Object(l.a)(r,2),s=c[0],m=c[1],d=Object(n.useState)("level-btn-e"),b=Object(l.a)(d,2),E=b[0],w=b[1],y=Object(n.useState)("level-btn-m"),x=Object(l.a)(y,2),j=x[0],O=x[1],N=Object(n.useState)("level-btn-h"),k=Object(l.a)(N,2),S=k[0],P=k[1],C=f(),q=function(e){m(e)};return o.a.createElement("div",{className:C.root},o.a.createElement("div",null,o.a.createElement(h,{score:t})),o.a.createElement(p.a,{container:!0,spacing:3},o.a.createElement(p.a,{item:!0,xs:!0},o.a.createElement(u.a,{className:C.paper,style:{color:"black",backgroundColor:"white"}},o.a.createElement("div",{className:C.insidePaper},o.a.createElement("h1",null,"Select Level ",o.a.createElement("span",null,"\ud83d\udcaa\ud83c\udffb")),o.a.createElement(i.a,{id:"btn-1",className:E,variant:"contained",onClick:function(){q("easy"),w("level-btn-e"),O("level-btn-active"),P("level-btn-active")},value:"easy"},"Easy"),o.a.createElement(i.a,{id:"btn-2",className:j,variant:"contained",onClick:function(){q("med"),w("level-btn-active"),O("level-btn-m"),P("level-btn-active")},value:"medium"},"Medium"),o.a.createElement(i.a,{id:"btn-3",className:S,variant:"contained",onClick:function(){q("hard"),w("level-btn-active"),O("level-btn-active"),P("level-btn-h")},value:"hard"},"Hard")),o.a.createElement("h1",null,"Go Slow ",o.a.createElement("span",null,"\ud83d\udc22")),o.a.createElement("div",null,o.a.createElement(v,{onClick:function(){""!==s?a():alert("Please select level and then continue")}},"Play"))))),o.a.createElement("div",null,o.a.createElement(g,null)))},y=t(34),x=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{textAlign:"center",color:e.palette.text.secondary,margin:"auto",width:"50%",minHeight:"400px",padding:"10px"},insidePaper:{marginTop:"13%"}}})),j=function(e){var a=e.changeNewMode,t=e.updateScore,r=Object(n.useState)(0),c=Object(l.a)(r,2),s=c[0],m=c[1],d=Object(n.useState)(10),b=Object(l.a)(d,2),g=b[0],E=b[1],h=Object(n.useState)(0),f=Object(l.a)(h,2),v=f[0],w=f[1],j=Object(n.useState)("answer-btn"),O=Object(l.a)(j,2),N=O[0],k=O[1],S=Object(n.useState)("answer-btn"),P=Object(l.a)(S,2),C=P[0],q=P[1],L=Object(n.useState)("answer-btn"),A=Object(l.a)(L,2),G=A[0],B=A[1],M=Object(n.useState)("answer-btn"),I=Object(l.a)(M,2),T=I[0],z=I[1],R=y[s],F=x();Object(n.useEffect)((function(){if(s<10)setInterval((function(){m((function(e){return e+1})),k("answer-btn"),q("answer-btn"),B("answer-btn"),z("answer-btn")}),1e4),setInterval((function(){E((function(e){return e-1}))}),1e3);else;}),[y]),0===g&&E(10),9===s&&(t(v),a());var H=function(e){R.answer===e&&w((function(e){return e+1}))};return o.a.createElement("div",{className:F.root},o.a.createElement(p.a,{container:!0,spacing:3},o.a.createElement(p.a,{item:!0,xs:!0},o.a.createElement(u.a,{className:F.paper,style:{color:"black",backgroundColor:"white"}},o.a.createElement("span",{className:"timer"},"\u23f1 ",g),o.a.createElement("div",{className:F.insidePaper},o.a.createElement("h1",null,R.question),o.a.createElement(i.a,{className:N,variant:"contained",onClick:function(){H("".concat(R.option1)),k("answer-btn-active"),q("answer-btn"),B("answer-btn"),z("answer-btn")}},R.option1),o.a.createElement(i.a,{className:C,variant:"contained",onClick:function(){H("".concat(R.option2)),k("answer-btn"),q("answer-btn-active"),B("answer-btn"),z("answer-btn")}},R.option2),o.a.createElement(i.a,{className:G,variant:"contained",onClick:function(){H("".concat(R.option3)),k("answer-btn"),q("answer-btn"),B("answer-btn-active"),z("answer-btn")}},R.option3),o.a.createElement(i.a,{className:T,variant:"contained",onClick:function(){H("".concat(R.option4)),k("answer-btn"),q("answer-btn"),B("answer-btn"),z("answer-btn-active")}},R.option4))))))},O=t(37),N=t.n(O),k=Object(m.a)((function(e){var a;return{root:{flexGrow:1},paper:(a={padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,margin:"auto",width:"30%",minHeight:"300px"},Object(s.a)(a,"padding","10px"),Object(s.a)(a,"background","rgba(0, 0, 0, .5)"),a),insidePaper:{},scoreLogo:{width:"40%"},score:{color:"red"}}})),S=function(e){var a=e.score,t=e.dashboard,n=k();return o.a.createElement("div",{className:n.root},o.a.createElement(p.a,{container:!0,spacing:3},o.a.createElement(p.a,{item:!0,xs:!0},o.a.createElement(u.a,{className:n.paper,style:{color:"black"}},o.a.createElement("div",{className:n.insidePaper},o.a.createElement("img",{className:n.scoreLogo,src:N.a,alt:"meddle"}),o.a.createElement("h1",{className:n.score},"Your Score "),o.a.createElement("h1",{className:n.score},a,"/10"))))),o.a.createElement("div",{className:"dash-btn-container"},o.a.createElement(i.a,{className:"dash-btn",variant:"contained",onClick:t},"Go Back")))},P=Object(m.a)((function(e){return{root:{flexGrow:1},paper:Object(s.a)({padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,margin:"auto",width:"20%"},"padding","10px")}})),C=function(e){var a=e.mode,t=(e.level,e.changeMode),n=e.changeNewMode,r=e.score,c=e.updateScore,l=e.dashboard,i=P();return 0===a?o.a.createElement("div",{className:i.root},o.a.createElement(p.a,{container:!0,spacing:3},o.a.createElement(p.a,{item:!0,xs:!0},o.a.createElement(u.a,{className:i.paper,style:{color:"white",backgroundColor:"purple"}},"About"),o.a.createElement(u.a,{className:i.paper,style:{color:"black",backgroundColor:"white"}},"Quiz game app for kidos."))),o.a.createElement(p.a,{container:!0,spacing:3},o.a.createElement(p.a,{item:!0,xs:!0},o.a.createElement(u.a,{className:i.paper,style:{color:"white",backgroundColor:"orange"}},"Leaderboard"),o.a.createElement(u.a,{className:i.paper,style:{color:"black",backgroundColor:"white"}},o.a.createElement("ol",null,o.a.createElement("li",null,"Player 1"),o.a.createElement("li",null,"Player 2"),o.a.createElement("li",null,"Player 3"),o.a.createElement("li",null,"Player 4"),o.a.createElement("li",null,"Player 5"),o.a.createElement("li",null,"Player 6"),o.a.createElement("li",null,"Player 7"),o.a.createElement("li",null,"Player 8"),o.a.createElement("li",null,"Player 9"),o.a.createElement("li",null,"Player 10")))))):1===a?o.a.createElement(w,{changeMode:t,score:r}):2===a?o.a.createElement(j,{changeNewMode:n,updateScore:c}):3===a?o.a.createElement(S,{score:r,dashboard:l}):void 0},q=function(e){var a=e.loginStatus,t=e.userName,n=e.signup,r=e.logout;e.mode;return!0===a?o.a.createElement("div",{className:"centered"},o.a.createElement(i.a,{className:"login-info",variant:"contained",color:"primary"},"Welcome,"," ",t),o.a.createElement(i.a,{className:"logout-button",variant:"contained",color:"secondary",onClick:r},"Logout")):!1===a?o.a.createElement("div",null,o.a.createElement(i.a,{className:"login-button",variant:"contained",color:"primary",onClick:n},"Login")):void 0},L=t(85);function A(e){var a=e.errorStatus,t=G();return null!==a&&o.a.createElement("div",{className:t.root},o.a.createElement(L.a,{severity:a.type},a.msg))}var G=Object(m.a)((function(e){return{root:{width:"20%","& > * + *":{marginTop:e.spacing(2)},position:"absolute",top:"8px",right:"16px",fontSize:"18px"}}})),B=t(52);B.initializeApp({apiKey:"AIzaSyDXpKrNDj6wjiaqFGdfx8CRBkvZAzhJnAg",authDomain:"game-cf8b0.firebaseapp.com",databaseURL:"https://game-cf8b0.firebaseio.com",projectId:"game-cf8b0",storageBucket:"game-cf8b0.appspot.com",messagingSenderId:"635154006400",appId:"1:635154006400:web:22d8083e7ced2e72190165"});var M=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),i=Object(l.a)(c,2),s=i[0],m=i[1],u=Object(n.useState)(null),p=Object(l.a)(u,2),d=p[0],b=p[1],g=Object(n.useState)(0),E=Object(l.a)(g,2),h=E[0],f=E[1],v=Object(n.useState)(!1),w=Object(l.a)(v,2),y=w[0],x=w[1],j=Object(n.useState)(0),O=Object(l.a)(j,2),N=O[0],k=O[1];return o.a.createElement("div",null,o.a.createElement("div",{class:"bg"}),o.a.createElement("div",{class:"bg bg2"}),o.a.createElement("div",{class:"bg bg3"}),o.a.createElement(q,{loginStatus:t,userName:s,signup:function(){var e=new B.auth.GoogleAuthProvider,a=B.auth().signInWithPopup(e);a.then((function(e){var a=e.user;B.database().ref("users/"+a.uid).set({email:a.email,name:a.displayName}),b({msg:"Login successfull",type:"success"}),setTimeout((function(){b(null),m(a.displayName),r(!0),k(1)}),1e3)})),a.catch((function(e){b({msg:"Login failed",type:"error"}),setTimeout((function(){b(null)}),3e3)}))},logout:function(){B.auth().signOut(),b({msg:"Logged out successfully",type:"success"}),r(!1),k(0),m(""),f(0),x(!1),f(0),setTimeout((function(){b(null)}),2e3)}}),o.a.createElement(A,{errorStatus:d}),o.a.createElement(C,{mode:N,changeMode:function(){setTimeout((function(){k(2)}),2e3)},changeNewMode:function(){k(3)},score:h,updateScore:function(e){f(e),x(!0),function(){var e=B.auth().currentUser;B.database().ref("user-dash/"+e.uid).push({email:e.email,name:e.displayName,score:h,played:y}),B.database().ref("leaderboard/"+e.uid).push({name:e.displayName,score:h,played:y})}()},dashboard:function(){k(1)}}))};c.a.render(o.a.createElement(M,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.62a435d0.chunk.js.map