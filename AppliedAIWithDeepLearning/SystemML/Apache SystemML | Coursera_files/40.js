(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"+iqS":function(module,exports,e){},"2SEV":function(module,exports,e){},"9wTT":function(module,exports,e){var t=e("+iqS"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},FkXZ:function(module,exports,e){var t=e("cpfI"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},USJv:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("MnCE"),i=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a=_objectWithoutPropertiesLoose(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){if(n=i[r],t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;a[n]=e[n]}}return a}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++){if(r=n[i],t.indexOf(r)>=0)continue;a[r]=e[r]}return a}var o=function SvgaChart(e){var t=e.title,n=void 0===t?"Chart":t,r=_objectWithoutProperties(e,["title"]);return a.createElement(i.a,_extends({title:n},r,{viewBox:"0 0 41 37"}),a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"#F26C75",d:"M5 32h32V0H5z"}),a.createElement("path",{stroke:"#424242",strokeWidth:"2",d:"M8 28l9.263-12.572 10.105 8.98L40 6"}),a.createElement("path",{stroke:"#4D4D4D",strokeWidth:"2",d:"M1 0v36h40"})))};(o=Object(r.pure)(o)).displayName="SvgaChart",e.a=o},Vh8P:function(module,e,t){"use strict";var a=t("UB5X"),n=t.n(a),r=t("sbe7"),i=t.n(r),o=t("EqTq"),s=t("AWZ4"),c=t("m10x"),l=t("CsdX"),m=t("CfbJ"),u=t("d3Ej"),p=t.n(u),d=t("vRSd"),f=t("kvW3"),v=t("lEg3"),g=t("RSmF"),b=t("9wTT"),E=t.n(b),h=Object(o.a)("CoverPageRowRightSideActions"),y=function renderActionButton(e,t){return i.a.createElement(s.b,{size:"sm",type:"primary",label:e,onClick:t,htmlAttributes:{"aria-label":p()("#{action} quiz",{action:e})}})},L=function CoverPageRowRightSideActions(e){var t=e.startAttempt,a=e.restartAttempt,r=e.resumeAttempt,o=e.retryAttempt,u=e.submissionTime,b=e.showTimer,E=e.timeLimit,L=e.timerId,S=e.attemptsLeft,P=e.secondsLeftInLatestAttempt,j=e.attemptLimitTimeLeft,C=null,O=n()(j)||"number"==typeof S&&0===S;return t?C=y(p()("Start"),t):a?C=y(p()("Restart"),a):r?C=y(p()("Resume"),r):o&&(C=i.a.createElement(s.b,{size:"sm",type:"link",label:p()("Try again"),onClick:o,disabled:O})),i.a.createElement("div",{className:h()},i.a.createElement("div",{className:h("action-button",{linkStyle:!!o})},C),O&&n()(j)&&i.a.createElement("div",{className:h("retry-info")},i.a.createElement(c.a,null,i.a.createElement(f.b,{message:p()("Retake the quiz in {attemptLimitTimeLeft}"),attemptLimitTimeLeft:i.a.createElement("strong",null,Object(v.c)(j))}))),u&&i.a.createElement("div",{className:h("submission-time")},i.a.createElement(c.a,null,i.a.createElement(c.h,{tag:"span"},p()("Submitted"))," ",i.a.createElement("span",{className:h("submission-time-detail")},d.a.getFormattedDeadline(u)))),n()(E)&&t&&i.a.createElement("div",{className:h("time-limit")},i.a.createElement(c.a,null,i.a.createElement(m.a,{size:20,color:l.b.primary}),i.a.createElement("span",{className:h("time-limit-text")},i.a.createElement(f.b,{message:p()("You will have {timeLimit} to finish"),timeLimit:Object(v.c)(E,!0)})))),b&&n()(P)&&i.a.createElement(g.a,{timerId:L,remainingTimeInMs:1e3*P,displayRemaining:!0}))};e.a=L},XSZB:function(module,exports,e){var t=e("2SEV"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},cpfI:function(module,exports,e){},fHLu:function(module,e,t){"use strict";t.d(e,"a",function(){return r});var a=t("4X/0"),n=function clearQuizApolloCache(e){Object(a.a)(e.cache,["RestQuizSessionMetadataElement","RestQuizQuestionDataElement","LocalTimerState","LocalChangedResponse","LocalStepState"])},r=function clearPracticeQuizApolloCache(e){Object(a.a)(e.cache,["LocalChangedResponse","LocalStepState"])};e.b=n},pRpZ:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("EqTq"),i=t("w+/x"),o=t("USJv"),s=t("m10x"),c=t("kvW3"),l=t("d3Ej"),m=t.n(l),u=t("FkXZ"),p=t.n(u),d=Object(r.a)("CoverPageNudges"),f=function LikelihoodNudge(e){var t=e.value,a=Math.ceil(t/100);return n.a.createElement("div",{className:d()},n.a.createElement("div",{className:d("svg-icon")},n.a.createElement(o.a,{size:48})),n.a.createElement("div",{className:d("message")},n.a.createElement(s.j,null,m()("Get closer to your goal")),n.a.createElement(c.b,{message:m()("You are {value} more likely to complete the course if you finish the assignment"),value:n.a.createElement("strong",null,a>1?a+m()(" times"):t+"%"),tagName:"p",rootClassName:d("info")})))},v=function SocialNudge(e){var t=e.value;return n.a.createElement("div",{className:d()},n.a.createElement("div",{className:d("svg-icon")},n.a.createElement(i.a,{size:48}),","),n.a.createElement("div",{className:d("message")},n.a.createElement(s.j,null,m()("People are making progress")),n.a.createElement(c.b,{message:m()("{numOfLearners} learners have recently completed this assignment"),numOfLearners:n.a.createElement("strong",null,t),tagName:"p",rootClassName:d("info")})))},g=function CoverPageNudges(e){var t=e.nudge,a=t.nudgeType,r=t.nudgeNumber;switch(a){case"social":return n.a.createElement(v,{value:r});case"likelihood":return n.a.createElement(f,{value:r});default:return null}};e.a=g},"w+/x":function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("MnCE"),i=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a=_objectWithoutPropertiesLoose(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){if(n=i[r],t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;a[n]=e[n]}}return a}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++){if(r=n[i],t.indexOf(r)>=0)continue;a[r]=e[r]}return a}var o=function SvgaPen(e){var t=e.title,n=void 0===t?"Pen":t,r=_objectWithoutProperties(e,["title"]);return a.createElement(i.a,_extends({title:n},r,{viewBox:"0 0 36 44"}),a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{d:"M36 25.855C36 35.845 20.836 44 10.895 44S0 35.846 0 25.855C0 15.865 13.185 8 23.127 8 33.067 8 36 15.864 36 25.855",fill:"#F3C800"}),a.createElement("path",{stroke:"#4D4D4D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M21.907 4.781l6.751 12.248-10.823 17.146L7.253 17.181l6.999-12.452M8.428 4.081h19.359V1H8.427zM17.954 33.074V21.186"}),a.createElement("path",{d:"M15.23 18.272a2.723 2.723 0 1 1 5.447 0 2.723 2.723 0 0 1-5.446 0z",stroke:"#4D4D4D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))};(o=Object(r.pure)(o)).displayName="SvgaPen",e.a=o},wrIk:function(module,e,t){"use strict";t.r(e),t.d(e,"QuizCoverPage",function(){return F});var a=t("MVZn"),n=t.n(a),r=t("VbXa"),i=t.n(r),o=t("sbe7"),s=t.n(o),c=t("oJmH"),l=t.n(c),m=t("sBWo"),u=t("fHLu"),p=t("NKt0"),d=t("pRpZ"),f=t("TO9F"),v=t("scbn"),g=t("qJwm"),b=t("+LJP"),E=t("MqGB"),h=t("nlef"),y=t("Vh8P"),L=t("eXDi"),S=t("zaiP"),P=t("LHEl"),j=t("kYu0"),C=t("VtNW"),O=t.n(C),k=t("VMeS"),w=t("8ec0"),A=t("xXQ2"),N=t("KvdX"),T=t("TOZ3"),R=t("EqTq"),I=t("XSZB"),z=t.n(I),x=Object(R.a)("QuizCoverPage"),F=function(e){function QuizCoverPage(){for(var t,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).getRestartAttemptFunction=function(e,a,r){return function(){if(a&&r){if(r.isLastAttemptBeforeLock||1===r.attemptsLeft)return void a({type:N.a.lastAttemptModal,props:n()({},r,{onPrimaryButtonClick:t.getRestartAttemptFunction(e)})});if("number"==typeof r.timeLimit)return void a({type:N.a.timedAttemptStart,props:n()({},r,{onPrimaryButtonClick:t.getRestartAttemptFunction(e)})})}var i=t.props.openAttemptPage;Object(u.b)(e),i()}},t}var t;return i()(QuizCoverPage,e),QuizCoverPage.prototype.render=function render(){var e=this,t=this.props,a=t.children,n=t.openSubmittedAttemptPage;return s.a.createElement(S.a,null,function(t){var r=t.item;if(!r||!r.contentSummary)return s.a.createElement(k.a,null);return s.a.createElement(P.a,{courseId:r.courseId,itemId:r.id},function(t){var i=t.loading,o=t.lastSessionId,l=t.lockingConfigurationSummary,m=t.unsubmittedSessionId,b=t.bestEvaluation,S=t.nudge,P=t.refetch;if(!r||!r.contentSummary||i)return s.a.createElement(k.a,null);if("exam"===r.contentSummary.typeName){var C=r.contentSummary.definition,R=r.isCumulativeGraded;return s.a.createElement(f.a,null,s.a.createElement(T.b,{justifyContent:"between",rootClassName:x("header-container")},s.a.createElement(p.a,{assignmentTypeName:O()("Quiz"),item:r}),S&&s.a.createElement(d.a,{nudge:S})),s.a.createElement(j.a,{standardProctorConfigurationId:C.standardProctorConfigurationId},function(t){var a=t.timeLimit,n=t.secondsLeftInLatestAttempt,i=t.remainingAttempts,c=t.completedAttempts,u=t.client;return s.a.createElement(E.b,{stepTitle:O()("Submit your assignment"),stepDetails:s.a.createElement(h.a,{deadline:r.deadline,attemptsRateCount:(l||{}).allowedSubmissionsPerInterval,attemptsRateInterval:(l||{}).allowedSubmissionsInterval,attemptsLeft:i,attemptsCompleted:c}),rightSideView:s.a.createElement(N.b,null,function(t){var c=t.showModal,p={timeLimit:a,attemptsLeft:i,lockedTimeLeft:Object(A.b)(l),isLastAttemptBeforeLock:Object(A.c)(l),hasAttemptLimit:!!l&&l.allowedSubmissionsPerInterval>0};return s.a.createElement(y.a,{startAttempt:o||m?void 0:e.getRestartAttemptFunction(u,c,p),resumeAttempt:m?e.getRestartAttemptFunction(u):void 0,timeLimit:a,showTimer:!!m,timerId:Object(w.a)(r.id),secondsLeftInLatestAttempt:n,retryAttempt:e.getRestartAttemptFunction(u,c,p),attemptLimitTimeLeft:Object(A.a)(l),attemptsLeft:i})}),statusIconType:o?E.a.check:void 0})}),s.a.createElement(E.b,{stepTitle:O()("Receive grade"),stepDetails:s.a.createElement(h.a,{passingFraction:C.passingFraction,isCumulativeGraded:R}),rightSideView:s.a.createElement(c.ApolloConsumer,null,function(e){return s.a.createElement(L.a,{itemGrade:r.itemGrade,computedScore:(b||{}).score,maxScore:(b||{}).maxScore,isCumulativeGraded:R,viewFeedback:o?function(){Object(u.b)(e),n()}:void 0,isViewFeedbackButtonLinkStyle:!!m})}),statusIconType:Object(E.c)((r.itemGrade||{}).isPassed,R)}),s.a.createElement(E.b,{rightSideView:s.a.createElement(v.a,{computedItem:r,itemFeedbackType:g.m.Quiz})}),a&&P&&s.a.cloneElement(a,{refetchCoverPageData:function refetchCoverPageData(){return P().then(function(){return r.refetch()})}}))}return null})})},QuizCoverPage}(s.a.Component),M=Object(b.a)(function(e){return{openAttemptPage:function openAttemptPage(){e.push({name:"quiz-attempt",params:e.params})},openSubmittedAttemptPage:function openSubmittedAttemptPage(){e.push({name:"quiz-view-attempt",params:e.params})}}})(F);e.default=Object(m.a)(M)}}]);
//# sourceMappingURL=40.2ca208996744d56e83c0.js.map