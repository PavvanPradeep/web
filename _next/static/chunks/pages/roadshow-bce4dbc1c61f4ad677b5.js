_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{AWw8:function(e,t,s){"use strict";s.r(t);var a=s("o0o1"),n=s.n(a),c=s("HaE+"),r=s("nKUr"),i=s("5Yp1"),o=s("R/WZ"),l=s("Ie8z"),j=s("Ji2X"),h=s("ofer"),d=s("tRbT"),b=s("J3NM"),u=s.n(b),m=s("q1tI"),x=s("iae6"),p=(s("vTTe"),s("FKgC"),Object(o.a)({subtitle_style:{fontSize:"1.5rem",color:"white",textAlign:"center"},event_body_style:{fontSize:"1.5rem",color:"white",textAlign:"left",marginTop:"1em",marginBottom:"1em"},spinner_text_style:{textAlign:"center",color:"#7cb342"}})),O=function(e){var t=e.img;return Object(r.jsx)(l.a,{className:"sliderImage",image:t})};t.default=function(){var e=p(),t=Object(m.useState)({events:[]}),s=t[0],a=t[1],o=Object(m.useState)(!1),l=o[0],b=o[1];return Object(m.useEffect)((function(){(function(){var e=Object(c.a)(n.a.mark((function e(){var t,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pil-api.herokuapp.com/events/roadshow");case 2:return t=e.sent,e.next=5,t.status;case 5:if(e.t0=e.sent,200==e.t0){e.next=10;break}alert("API Error. Try again later"),e.next=14;break;case 10:return e.next=12,t.json();case 12:s=e.sent,a({events:s});case 14:b(!0);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsxs)(i.a,{title:"PIL | RoadShow",active:"RoadShow",children:[Object(r.jsx)("div",{className:"hashCodeHeadSection",children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)(h.a,{className:"pageHeader",children:"RoadShow"}),Object(r.jsx)(h.a,{className:e.subtitle_style,children:"Project Exhibition"}),Object(r.jsx)(h.a,{className:e.subtitle_style,style:{marginTop:40},children:"RoadShow is a project exhibition where summer interns showcase their projects to their peers and faculty."})]})}),Object(r.jsx)("div",{className:"hashCodeContainer",children:l?s.events.map((function(e){return Object(r.jsx)("div",{className:"hashCodeSection",children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)(h.a,{className:"hashCodeTitle",children:e.event_name}),Object(r.jsx)(h.a,{className:"hashCodeDate",children:e.event_date+" "+e.year}),Object(r.jsx)(h.a,{className:"hashCodeSponsors",children:e.sponsor_text}),Object(r.jsx)(h.a,{className:"hashCodeDescription",children:e.description}),Object(r.jsxs)(d.a,{container:!0,spacing:3,style:{marginTop:20},justify:"center",children:[Object(r.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(r.jsx)("img",{style:{width:"95%"},src:"".concat(e.poster_link)})}),Object(r.jsx)(d.a,{item:!0,xs:12,sm:8,children:Object(r.jsx)(u.a,{autoPlay:!0,autoPlayInterval:"3000",buttonsDisabled:!0,children:e.image_links.map((function(e){return Object(r.jsx)(O,{img:"".concat(e)})}))})})]})]})})})):Object(r.jsxs)("div",{className:e.spinner_text_style,children:[Object(r.jsx)(h.a,{style:{fontSize:"1.5rem"},children:"Loading Data"})," ",Object(r.jsx)(x.a,{style:{color:"#7cb342",marginTop:"1em"}})]})})]})}},LbyJ:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/roadshow",function(){return s("AWw8")}])}},[["LbyJ",0,2,1,3,5,6,4]]]);