var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.0.0-fc46dba67-20220329";

{
  react.exports = react_production_min;
}

const Airplane = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-airplane",
    viewBox: "0 0 65.313 65.313",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M36.748,33.775h-0.066c-0.091,0.096-0.23,0.14-0.413,0.14l-9.621,9.01l-0.271,12.829l-2.936,2.938 c-0.091,0.092-0.271,0.133-0.548,0.133c-0.361,0-0.625-0.109-0.782-0.34c-0.159-0.226-0.285-0.479-0.373-0.748l-1.778-7.097 c-0.044-0.23-0.159-0.388-0.341-0.479c-0.185-0.092-0.341-0.135-0.477-0.135c-0.455,0-0.822,0.166-1.093,0.513 c-0.271,0.338-0.526,0.621-0.752,0.847c-0.77,0.641-1.726,0.956-2.869,0.956c-1.043,0-1.569-0.498-1.569-1.501 c0-0.5,0.08-0.999,0.241-1.501c0.161-0.498,0.399-0.931,0.717-1.296l1.161-1.296c0-0.048,0.023-0.091,0.065-0.139 c0.049-0.044,0.073-0.092,0.073-0.14c0.135-0.137,0.203-0.273,0.203-0.41c0-0.178-0.093-0.352-0.276-0.511 c-0.178-0.155-0.361-0.256-0.542-0.307l-7.301-1.778c-0.502-0.179-0.753-0.566-0.753-1.159v-0.068c0-0.046,0.026-0.155,0.068-0.342 l2.798-2.797c0.091-0.046,0.218-0.109,0.374-0.205c0.156-0.092,0.261-0.138,0.31-0.138H21.87c0.044,0,0.147-0.034,0.309-0.1 c0.156-0.068,0.261-0.146,0.308-0.242l8.804-9.418c0.091-0.089,0.138-0.252,0.138-0.479c0-0.453-0.185-0.771-0.546-0.956 L0.513,17.666c-0.228-0.049-0.35-0.173-0.375-0.378C0.114,17.086,0.1,16.911,0.1,16.778v-0.332c0-0.14,0.047-0.25,0.138-0.341 l2.39-2.32c0.044-0.091,0.147-0.183,0.306-0.272c0.156-0.089,0.283-0.136,0.376-0.136h42.448l10.37-10.986 c0.729-0.775,1.651-1.366,2.77-1.774C60.015,0.205,61.087,0,62.141,0c0.68,0,1.312,0.152,1.875,0.444 c0.57,0.296,0.968,0.853,1.198,1.669v0.547v0.546c0,0.867-0.14,1.822-0.411,2.869c-0.273,1.046-0.748,1.866-1.433,2.455 L52.18,19.247c-0.14,0.091-0.215,0.243-0.24,0.445c-0.022,0.203-0.036,0.353-0.036,0.441v40.539c0,0.091-0.027,0.34-0.068,0.748 c-0.048,0.411-0.066,0.662-0.066,0.753s-0.038,0.196-0.104,0.306c-0.064,0.114-0.144,0.196-0.239,0.242l-2.184,2.253 c-0.321,0.23-0.57,0.34-0.753,0.34c-0.453,0-0.769-0.244-0.951-0.75l-9.826-29.892c-0.048-0.226-0.16-0.433-0.34-0.613 C37.179,33.871,36.974,33.775,36.748,33.775z"
  }));
});

const Alert = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-alert",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 485.811 485.811",
    enableBackground: "new 0 0 485.811 485.811",
    xmlSpace: "preserve",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M476.099,353.968l-170.2-294.8c-27.8-48.7-98.1-48.7-125.8,0l-170.3,294.8c-27.8,48.7,6.8,109.2,62.9,109.2h339.9\nC468.699,463.168,503.899,402.068,476.099,353.968z M242.899,397.768c-14.8,0-27.1-12.3-27.1-27.1s12.3-27.1,27.1-27.1\nc14.8,0,27.1,12.3,26.5,27.8C270.099,385.468,257.099,397.768,242.899,397.768z M267.599,222.568c-1.2,21-2.5,41.9-3.7,62.9\nc-0.6,6.8-0.6,13-0.6,19.7c-0.6,11.1-9.3,19.7-20.4,19.7s-19.7-8-20.4-19.1c-1.8-32.7-3.7-64.8-5.5-97.5\nc-0.6-8.6-1.2-17.3-1.9-25.9c0-14.2,8-25.9,21-29.6c13-3.1,25.9,3.1,31.5,15.4c1.9,4.3,2.5,8.6,2.5,13.6\nC269.499,195.468,268.199,209.068,267.599,222.568z"
  })));
});

const AlertQuestion = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-alert-question",
    enableBackground: "new 0 0 512 512",
    height: "512",
    viewBox: "0 0 512 512",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m505.853 413.354-210.961-360h-.015c-8.027-13.785-22.925-22.354-38.877-22.354s-30.85 8.569-38.892 22.354l-210.947 359.97c-17.34 29.554 3.916 67.676 38.862 67.676h421.938c34.818 0 56.25-37.971 38.892-67.646zm-234.853-22.354h-30v-30h30zm7.515-96.035c-4.629 2.681-7.515 7.676-7.515 13.008v23.027h-30v-23.027c0-16.011 8.613-30.938 22.485-38.965 4.644-2.681 7.515-7.661 7.515-13.008 0-8.276-6.724-15-15-15s-15 6.724-15 15h-30c0-24.814 20.186-45 45-45s45 20.186 45 45c0 16.011-8.613 30.952-22.485 38.965z"
  }));
});

const AnimalFootprint = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-animal-foot-print",
    viewBox: "0 -32 512.00011 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m342.382812 239.351562c-23.039062-35.941406-62.277343-57.402343-104.964843-57.402343s-81.925781 21.460937-104.960938 57.402343l-55.515625 86.605469c-9.210937 14.367188-13.460937 30.96875-12.292968 47.996094 1.167968 17.03125 7.648437 32.890625 18.738281 45.875 11.097656 12.972656 25.761719 21.839844 42.40625 25.644531 16.644531 3.804688 33.707031 2.179688 49.339843-4.691406l1.046876-.464844c39.335937-16.945312 84.285156-16.789062 123.519531.464844 10.121093 4.449219 20.84375 6.699219 31.664062 6.699219 5.882813 0 11.800781-.667969 17.664063-2.003907 16.644531-3.800781 31.308594-12.667968 42.410156-25.644531 11.09375-12.972656 17.578125-28.835937 18.75-45.871093 1.171875-17.035157-3.078125-33.632813-12.289062-48.007813zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m91.894531 239.238281c16.515625-6.34375 29.0625-19.652343 35.328125-37.476562 5.964844-16.960938 5.476563-36.109375-1.378906-53.921875-6.859375-17.800782-19.335938-32.332032-35.132812-40.921875-16.59375-9.019531-34.824219-10.488281-51.3125-4.132813-33.171876 12.753906-48.394532 53.746094-33.929688 91.398438 11.554688 29.96875 38.503906 48.886718 65.75 48.886718 6.957031 0 13.933594-1.234374 20.675781-3.832031zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m199.613281 171.386719c41.46875 0 75.207031-38.4375 75.207031-85.683594 0-47.257813-33.738281-85.703125-75.207031-85.703125-41.464843 0-75.199219 38.445312-75.199219 85.703125 0 47.246094 33.734376 85.683594 75.199219 85.683594zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m329.496094 192.4375h.003906c6.378906 2.117188 12.886719 3.128906 19.367188 3.128906 30.242187 0 59.714843-22.011718 70.960937-55.839844 6.476563-19.472656 6.050781-40.0625-1.199219-57.972656-7.585937-18.75-21.644531-32.359375-39.589844-38.324218-17.949218-5.964844-37.359374-3.476563-54.660156 7-16.527344 10.007812-29.191406 26.246093-35.660156 45.71875-13.652344 41.078124 4.640625 84.273437 40.777344 96.289062zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m487.875 182.4375-.011719-.011719c-28.597656-21.125-71.367187-11.96875-95.347656 20.421875-23.957031 32.40625-20.210937 75.972656 8.34375 97.113282 10.414063 7.714843 22.71875 11.402343 35.3125 11.402343 21.949219 0 44.785156-11.203125 60.050781-31.804687 23.953125-32.40625 20.210938-75.972656-8.347656-97.121094zm0 0"
  }));
});

const AppStore = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-app-store",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    enableBackground: "new 0 0 512 512",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105\nC512,47.103,464.897,0,407,0z M157.649,394.515c-4.625,8.011-13.046,12.494-21.693,12.495c-4.239,0-8.531-1.077-12.458-3.344\nc-11.938-6.892-16.043-22.212-9.151-34.15l4.917-8.516h57.735L157.649,394.515z M110.5,341c-13.785,0-25-11.215-25-25\nc0-13.785,11.215-25,25-25h49.178l67.454-116.834l-18.281-31.664c-6.892-11.938-2.788-27.258,9.15-34.151h0.001\nc11.938-6.892,27.258-2.786,34.15,9.151l3.848,6.665l3.848-6.664c6.895-11.939,22.215-16.043,34.15-9.151\nc5.783,3.339,9.92,8.73,11.648,15.18c1.729,6.45,0.841,13.188-2.498,18.971L217.413,291h54.079l28.868,50H110.5z M401.5,341\nh-20.311l16.463,28.515c6.893,11.937,2.788,27.257-9.149,34.15c-3.853,2.224-8.129,3.361-12.461,3.361\nc-2.172,0-4.356-0.285-6.511-0.863c-6.451-1.729-11.842-5.866-15.181-11.65l-86.804-150.348l28.867-50L352.322,291H401.5\nc13.785,0,25,11.215,25,25C426.5,329.785,415.285,341,401.5,341z"
  }));
});

const AppSubscription = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-icon-app-subscription",
    height: "464pt",
    viewBox: "0 0 464 464",
    width: "464pt",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m119.03125 144c-2.359375 0-4.671875.953125-6.34375 2.625l-8.6875 8.6875-8.6875-8.6875c-1.671875-1.671875-3.984375-2.625-6.34375-2.625-4.945312 0-8.96875 4.023438-8.96875 8.96875 0 2.359375.953125 4.671875 2.625 6.34375l21.375 21.375 21.375-21.375c1.671875-1.671875 2.625-3.984375 2.625-6.34375 0-4.945312-4.023438-8.96875-8.96875-8.96875zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m208 288h-208v24c0 13.230469 10.769531 24 24 24h160c13.230469 0 24-10.769531 24-24zm-72 32h-64v-16h64zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m152 80h-96c-4.414062 0-8 3.585938-8 8v144c0 4.414062 3.585938 8 8 8h96c4.414062 0 8-3.585938 8-8v-144c0-4.40625-3.585938-8-8-8zm-15.3125 90.625-32.6875 32.6875-32.6875-32.6875c-4.648438-4.648438-7.3125-11.074219-7.3125-17.65625 0-13.769531 11.199219-24.96875 24.96875-24.96875 5.414062 0 10.726562 1.808594 15.03125 5.03125 4.304688-3.222656 9.617188-5.03125 15.03125-5.03125 13.769531 0 24.96875 11.199219 24.96875 24.96875 0 6.582031-2.664062 13.007812-7.3125 17.65625zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m208 24c0-13.230469-10.769531-24-24-24h-160c-13.230469 0-24 10.769531-24 24v8h208zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m208 48h-208v224h208zm-32 184c0 13.230469-10.769531 24-24 24h-96c-13.230469 0-24-10.769531-24-24v-144c0-13.230469 10.769531-24 24-24h96c13.230469 0 24 10.769531 24 24zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m360 360c39.703125 0 72-32.296875 72-72s-32.296875-72-72-72-72 32.296875-72 72 32.296875 72 72 72zm0-64c-13.230469 0-24-10.769531-24-24 0-10.414062 6.710938-19.214844 16-22.527344v-17.472656h16v17.472656c9.289062 3.3125 16 12.113282 16 22.527344h-16c0-4.414062-3.585938-8-8-8s-8 3.585938-8 8 3.585938 8 8 8c13.230469 0 24 10.769531 24 24 0 10.414062-6.710938 19.214844-16 22.527344v17.472656h-16v-17.472656c-9.289062-3.3125-16-12.113282-16-22.527344h16c0 4.414062 3.585938 8 8 8s8-3.585938 8-8-3.585938-8-8-8zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m256 400h208v-224h-208zm104-200c48.519531 0 88 39.480469 88 88s-39.480469 88-88 88-88-39.480469-88-88 39.480469-88 88-88zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m256 440c0 13.230469 10.769531 24 24 24h160c13.230469 0 24-10.769531 24-24v-24h-208zm72-8h64v16h-64zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m440 128h-160c-13.230469 0-24 10.769531-24 24v8h208v-8c0-13.230469-10.769531-24-24-24zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m240 32h16v16h-16zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m352 56v24l-19.199219-14.398438-9.59375 12.796876 36.800781 27.601562 36.800782-27.601562-9.59375-12.796876-19.199219 14.398438v-24c0-13.230469-10.769531-24-24-24h-72v16h72c4.398437 0 7.984375 3.59375 7.984375 8zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m208 416h16v16h-16zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m112 408v-24l19.199219 14.398438 9.59375-12.796876-36.800781-27.601562-36.800782 27.601562 9.59375 12.796876 19.199219-14.398438v24c0 13.230469 10.769531 24 24 24h72v-16h-72c-4.398437 0-7.984375-3.585938-7.984375-8zm0 0"
  }));
});

const Bill = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-icon-bill",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("polygon", {
    points: "320,0 320,128 448,128 "
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M320,160c-17.632,0-32-14.368-32-32V0H96C78.368,0,64,14.368,64,32v448c0,17.664,14.368,32,32,32h320 c17.664,0,32-14.336,32-32V160H320z M176,97.984V80c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v18.016 c10.016,2.272,19.36,6.496,27.072,12.768c6.88,5.568,7.904,15.648,2.304,22.496c-5.6,6.88-15.68,7.872-22.496,2.304 C208.832,130.688,200.704,128,192,128c-17.344,0-32,10.976-32,24s14.656,24,32,24c35.296,0,64,25.12,64,56 c0,26.016-20.48,47.744-48,54.016V304c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-18.016 c-10.016-2.272-19.36-6.496-27.072-12.768c-6.88-5.6-7.904-15.68-2.304-22.528c5.6-6.912,15.648-7.872,22.496-2.304 C175.168,253.312,183.296,256,192,256c17.344,0,32-10.976,32-24s-14.656-24-32-24c-35.296,0-64-25.12-64-56 C128,125.984,148.48,104.256,176,97.984z M368,448H144c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h224 c8.832,0,16,7.168,16,16C384,440.832,376.832,448,368,448z M368,384H144c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h224 c8.832,0,16,7.168,16,16C384,376.832,376.832,384,368,384z M368,320h-64c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h64 c8.832,0,16,7.168,16,16C384,312.832,376.832,320,368,320z M368,256h-64c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h64 c8.832,0,16,7.136,16,16C384,248.832,376.832,256,368,256z"
  }))));
});

const BillEnvelope = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-icon-bill-envelope",
    height: "469pt",
    viewBox: "0 -53 469.33333 469",
    width: "469pt",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m239.253906 233.800781c-2.902344 1.375-6.265625 1.375-9.167968 0l-230.085938-110.433593v228.800781c0 5.890625 4.777344 10.664062 10.667969 10.664062h448c5.890625 0 10.664062-4.773437 10.664062-10.664062v-228.800781zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m64 80.285156-52.425781 24.957032 52.425781 25.175781zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m405.332031 80.285156v50.132813l52.429688-25.164063zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m373.332031.167969h-277.332031c-5.890625 0-10.667969 4.773437-10.667969 10.664062v129.828125l149.335938 71.695313 149.332031-71.695313v-129.828125c0-5.890625-4.777344-10.664062-10.667969-10.664062zm-170.664062 128h-64c-5.890625 0-10.667969-4.777344-10.667969-10.667969s4.777344-10.667969 10.667969-10.667969h64c5.890625 0 10.664062 4.777344 10.664062 10.667969s-4.773437 10.667969-10.664062 10.667969zm0-42.667969h-64c-5.890625 0-10.667969-4.777344-10.667969-10.667969s4.777344-10.664062 10.667969-10.664062h64c5.890625 0 10.664062 4.773437 10.664062 10.664062s-4.773437 10.667969-10.664062 10.667969zm128-5.332031c5.890625 0 10.664062 4.773437 10.664062 10.664062v32c0 5.890625-4.773437 10.667969-10.664062 10.667969h-21.335938v10.667969c0 5.890625-4.773437 10.664062-10.664062 10.664062s-10.667969-4.773437-10.667969-10.664062v-10.667969h-21.332031c-5.890625 0-10.667969-4.777344-10.667969-10.667969s4.777344-10.664062 10.667969-10.664062h53.332031v-10.667969h-53.332031c-5.890625 0-10.667969-4.777344-10.667969-10.667969v-32c0-5.890625 4.777344-10.664062 10.667969-10.664062h21.332031v-10.667969c0-5.890625 4.777344-10.667969 10.667969-10.667969s10.664062 4.777344 10.664062 10.667969v10.667969h21.335938c5.890625 0 10.664062 4.773437 10.664062 10.664062s-4.773437 10.667969-10.664062 10.667969h-53.335938v10.667969zm0 0"
  }));
});

const Books = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-icon-books",
    viewBox: "0 0 480.00958 480",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m128 104.003906v-32c0-4.417968-3.582031-8-8-8h-112c-4.417969 0-8 3.582032-8 8v32zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m0 120.003906v264h128v-264zm96 104h-64c-4.417969 0-8-3.582031-8-8v-64c0-4.417968 3.582031-8 8-8h64c4.417969 0 8 3.582032 8 8v64c0 4.417969-3.582031 8-8 8zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m0 432.003906v40c0 4.417969 3.582031 8 8 8h112c4.417969 0 8-3.582031 8-8v-40zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m0 400.003906h128v16h-128zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m144 400.003906h104v16h-104zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m248 32.003906v-24c0-4.417968-3.582031-7.99999975-8-7.99999975h-88c-4.417969 0-8 3.58203175-8 7.99999975v24zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m144 88.003906h104v296h-104zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m144 432.003906v40c0 4.417969 3.582031 8 8 8h88c4.417969 0 8-3.582031 8-8v-40zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m144 48.003906h104v24h-104zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m263.808594 165.667969 4.28125 16.433593 135.484375-36.128906-4.285157-16.433594zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m330.664062 421.949219 135.480469-36.128907-8.578125-32.886718-135.488281 36.128906zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m453.527344 337.453125-45.910156-176-135.488282 36.128906 45.910156 176zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m259.769531 150.1875 135.476563-36.125-11.484375-44.058594c-1.183594-4.265625-5.542969-6.816406-9.839844-5.757812l-120 32c-4.238281 1.160156-6.765625 5.5-5.683594 9.757812zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m470.183594 401.300781-135.488282 36.128907 9.542969 36.574218c.554688 2.0625 1.90625 3.820313 3.761719 4.882813 1.207031.730469 2.589844 1.117187 4 1.117187.699219 0 1.398438-.082031 2.078125-.238281l120-32c4.238281-1.160156 6.765625-5.503906 5.683594-9.761719zm0 0"
  }));
});

const Bowling = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-icon-bowling",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    enableBackground: "new 0 0 512 512",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M405,301.985c-57.99,0-105,47.01-105,105s47.01,105,105,105s107-47.01,107-105S462.99,301.985,405,301.985z M360,436.985\nc-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15s15,6.714,15,15C375,430.269,368.284,436.985,360,436.985z M390,376.985\nc-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15s15,6.714,15,15C405,370.269,398.284,376.985,390,376.985z M420,436.985\nc-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15s15,6.714,15,15C435,430.269,428.284,436.985,420,436.985z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M141.226,210.915C127.544,199.417,120,184.271,120,168.26v-26.536c0-13.301,4.761-25.884,13.418-35.42\nc8.394-9.243,16.582-20.2,16.582-43.11c0-32.899-24.662-63.179-59.751-63.179C56.578,0.015,30,27.041,30,59.985\nc0.773,4.268-4.241,23.397,16.597,46.318C55.239,115.84,60,128.423,60,141.724v26.536c0,16.011-7.529,31.157-21.226,42.656\nC14.136,231.57,0,261.878,0,294.061c0.98,36.885,3.845,42.523,13.938,97.925h152.051v-0.001\nc11.215-62.102,12.953-58.09,14.011-97.925C180,261.877,165.879,231.584,141.226,210.915z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M19.226,421.985c1.816,10.624,3.777,22.361,5.955,35.889c2.783,13.975,15.161,24.111,29.414,24.111h70.811\nc14.252,0,26.63-10.136,29.413-24.111c2.184-13.599,4.122-25.241,5.929-35.889H19.226z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M351.225,210.916C337.544,199.417,330,184.271,330,168.26v-26.536c0-13.301,4.761-25.884,13.418-35.42\nc8.394-9.243,16.582-20.2,16.582-43.11c0-32.899-24.662-63.179-59.751-63.179C266.578,0.015,240,27.041,240,59.985\nc0.773,4.268-4.241,23.397,16.597,46.318c8.643,9.536,13.403,22.119,13.403,35.42v26.536c0,16.011-7.529,31.157-21.226,42.656\nC224.136,231.57,210,261.878,210,294.061c0.98,36.885,3.845,42.523,13.938,97.925h47.578\nc6.929-61.586,54.974-110.336,116.257-118.259C383.139,249.376,370.581,227.145,351.225,210.916z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M271.517,421.985h-42.29c1.816,10.624,3.777,22.361,5.955,35.889c2.782,13.975,15.16,24.111,29.413,24.111h28.259\nC281.117,464.489,273.987,443.941,271.517,421.985z"
  }))));
});

const Briefcase$1 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-icon-briefcase",
    viewBox: "0 -31 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m211 240h90v30h-90zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m415.378906 270h-84.378906v15c0 8.289062-6.710938 15-15 15h-120c-8.289062 0-15-6.710938-15-15v-15h-84.378906c-19.394532 0-36.546875-12.363281-42.6875-30.761719l-53.933594-161.828125v327.589844c0 24.8125 20.1875 45 45 45h422c24.8125 0 45-20.1875 45-45v-327.578125l-53.9375 161.816406c-6.136719 18.398438-23.289062 30.761719-42.683594 30.761719zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m316 0h-120c-24.8125 0-45 20.1875-45 45v15h-125.191406l56.574218 169.746094c2.050782 6.136718 7.777344 10.253906 14.238282 10.253906h84.378906v-15c0-8.289062 6.710938-15 15-15h120c8.289062 0 15 6.710938 15 15v15h84.378906c6.460938 0 12.1875-4.117188 14.238282-10.253906l56.578124-169.746094h-125.195312v-15c0-24.8125-20.1875-45-45-45zm-135 60v-15c0-8.277344 6.722656-15 15-15h120c8.277344 0 15 6.722656 15 15v15zm0 0"
  }));
});

const Calendar$1 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-icon-calendar",
    enableBackground: "new 0 0 24 24",
    height: "512",
    viewBox: "0 0 24 24",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m20 4h-1v-2h-2v2h-10v-2h-2v2h-1c-1.1 0-2 .9-2 2h20c0-1.1-.9-2-2-2z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12h-20zm15-10h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm-4-8h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm0 4h2v2h-2z"
  })));
});

const Car = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-icon-car",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M96,160H53.333c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667H96c5.888,0,10.667-4.779,10.667-10.667 S101.888,160,96,160z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M436.843,188.779c-2.027-6.379-42.731-92.629-57.963-101.888C363.029,77.248,268.203,74.667,256,74.667 s-107.029,2.581-122.88,12.224c-15.232,9.237-55.936,95.509-57.963,101.888c-1.792,5.611,1.344,11.605,6.955,13.397 c5.675,1.771,11.627-1.344,13.397-6.955c3.349-10.603,40.341-82.795,48.469-89.963C153.003,100.949,219.456,96,256,96 s102.997,4.949,111.275,8.747c8.853,7.68,45.867,79.872,49.216,90.475c1.451,4.544,5.653,7.445,10.176,7.445 c1.067,0,2.155-0.149,3.243-0.491C435.499,200.384,438.635,194.389,436.843,188.779z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M96,373.333c-4.992,0-9.003,3.499-10.155,8.128l-64.512-16.128v-2.667c0-5.888-4.779-10.667-10.667-10.667 S0,356.779,0,362.667v42.667c0,17.643,14.357,32,32,32h42.667c17.643,0,32-14.357,32-32V384 C106.667,378.112,101.888,373.333,96,373.333z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M501.333,352c-5.888,0-10.667,4.779-10.667,10.667v2.667l-64.512,16.128c-1.152-4.629-5.163-8.128-10.155-8.128 c-5.888,0-10.667,4.779-10.667,10.667v21.333c0,17.643,14.357,32,32,32H480c17.643,0,32-14.357,32-32v-42.667 C512,356.779,507.221,352,501.333,352z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M458.667,160H416c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667h42.667 c5.888,0,10.667-4.779,10.667-10.667S464.555,160,458.667,160z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M511.168,260.629l-29.099,5.824c-3.584,0.555-75.221,10.88-93.376,10.88c-2.603,2.069-4.949,15.765-4.672,28.587 c65.024-3.072,115.648-7.147,116.459-7.211l11.499-1.557C511.957,283.008,511.744,270.933,511.168,260.629z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M493.675,213.739c-4.779-1.387-7.275-4.864-12.011-11.947l-3.648-5.333c-6.379-8.896-18.709-9.28-30.635-9.621 c-3.584-0.107-9.259-0.277-11.947-0.896c-0.917-1.344-2.155-2.475-3.648-3.285C411.883,171.712,336.469,160,256,160 s-155.883,11.712-175.787,22.656c-1.493,0.811-2.731,1.941-3.669,3.307c-2.688,0.619-8.363,0.789-11.947,0.896 c-11.904,0.341-24.235,0.704-30.613,9.6l-3.648,5.355c-4.736,7.083-7.232,10.56-12.011,11.947 c-8.363,2.453-12.949,11.029-15.488,26.624l21.077,5.269c0.341,0,69.931,10.347,93.419,10.347c8.064,0,15.168,3.072,20.544,8.875 c11.307,12.224,11.84,33.643,11.563,41.984c34.325,1.429,71.381,2.475,106.56,2.475c35.221,0,72.299-1.045,106.667-2.475 c-0.235-9.429,0.299-33.045,10.859-44.203c4.139-4.352,9.365-6.656,15.168-6.656c13.803,0,69.504-7.616,89.792-10.56l30.528-6.123 C506.453,224.363,501.867,216.128,493.675,213.739z M330.667,288H181.333c-5.888,0-10.667-4.779-10.667-10.667 s4.779-10.667,10.667-10.667h149.333c5.888,0,10.667,4.779,10.667,10.667S336.555,288,330.667,288z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M502.741,319.915c-1.856,0.149-133.845,10.752-246.741,10.752S11.115,320.064,9.813,319.979l-9.259-0.96 c1.152,23.147,4.715,57.856,15.765,63.744c11.52,6.123,144.789,11.904,239.68,11.904s228.16-5.781,239.659-11.925 c11.093-5.909,14.656-40.853,15.787-64L502.741,319.915z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M122.197,279.339c-1.323-1.429-2.731-2.005-4.864-2.005c-25.173,0-94.635-10.347-97.579-10.773l-19.008-4.736 C0.213,271.936,0.021,283.776,0,297.493l11.755,1.216c0.683,0.064,51.285,4.117,116.309,7.211 C128.277,298.219,127.253,284.8,122.197,279.339z"
  }))));
});

const CardsView = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-icon-cards-view",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M226,0H60C26.916,0,0,26.916,0,60v166c0,11.046,8.954,20,20,20h206c11.046,0,20-8.954,20-20V20 C246,8.954,237.046,0,226,0z M206,206H40V60c0-11.028,8.972-20,20-20h146V206z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M226,266H20c-11.046,0-20,8.954-20,20v166c0,33.084,26.916,60,60,60h166c11.046,0,20-8.954,20-20V286 C246,274.954,237.046,266,226,266z M206,472H60c-11.028,0-20-8.972-20-20V306h166V472z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M452,0H286c-11.046,0-20,8.954-20,20v206c0,11.046,8.954,20,20,20h206c11.046,0,20-8.954,20-20V60 C512,26.916,485.084,0,452,0z M472,206H306V40h146c11.028,0,20,8.972,20,20V206z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M492,266H286c-11.046,0-20,8.954-20,20v206c0,11.046,8.954,20,20,20h166c33.084,0,60-26.916,60-60V286 C512,274.954,503.046,266,492,266z M472,452c0,11.028-8.972,20-20,20H306V306h166V452z"
  }));
});

const CaretDownArrow = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 292.362 292.362",
    width: "100%",
    height: "100%",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
  }));
});

const Checkmark = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-checkmark",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "442.533px",
    height: "442.533px",
    viewBox: "0 0 442.533 442.533",
    enableBackground: "new 0 0 442.533 442.533",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248\n      l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852\n      C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828\n      c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33\n      c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z"
  })));
});

const Checkmark2 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 442.533 442.533",
    width: "100%",
    height: "100%",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M434.539 98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993-7.618 0-14.093 2.665-19.417 7.993L169.59 247.248l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992-7.616 0-14.087 2.662-19.417 7.992L7.994 201.852C2.664 207.181 0 213.654 0 221.269c0 7.609 2.664 14.088 7.994 19.416l103.351 103.349 38.831 38.828c5.327 5.332 11.8 7.994 19.414 7.994 7.611 0 14.084-2.669 19.414-7.994l38.83-38.828L434.539 137.33c5.325-5.33 7.994-11.802 7.994-19.417.004-7.611-2.669-14.084-7.994-19.414z"
  }));
});

const ChevronRight$1 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-chevron-right",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 492.004 492.004"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
  }));
});

const ChevronRight2 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-chevron-right-2",
    viewBox: "0 0 492.004 492.004",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
  }));
});

const CircusTent = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-circus-tent",
    viewBox: "0 0 512.021 512.021",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M272.445,100.736c0,0-0.021,0-0.021-0.021c-2.709-3.072-4.565-5.547-5.952-7.765V61.013l56.704-18.901 c4.352-1.451,7.296-5.525,7.296-10.112s-2.944-8.661-7.296-10.112l-64-21.333c-0.384-0.128-0.768-0.021-1.152-0.107 C257.298,0.277,256.594,0,255.805,0c-0.299,0-0.555,0.149-0.853,0.171c-0.619,0.043-1.195,0.192-1.792,0.363 c-0.981,0.256-1.856,0.619-2.688,1.109c-0.277,0.171-0.619,0.171-0.896,0.363c-0.192,0.149-0.277,0.384-0.469,0.555 c-0.853,0.704-1.515,1.536-2.112,2.475c-0.235,0.384-0.555,0.704-0.747,1.109c-0.683,1.387-1.109,2.88-1.109,4.523v42.667v39.595 c-1.344,2.112-3.136,4.523-5.952,7.787l-0.021,0.021C198.93,145.984,58.109,205.888,40.338,213.333h430.933 C453.501,205.888,312.679,145.984,272.445,100.736z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M31.805,234.667c0,35.285,28.715,64,64,64c22.272,0,41.856-11.456,53.333-28.757 c11.477,17.301,31.061,28.757,53.333,28.757c22.272,0,41.856-11.456,53.333-28.757c11.477,17.301,31.061,28.757,53.333,28.757 s41.856-11.456,53.333-28.757c11.477,17.301,31.061,28.757,53.333,28.757c35.285,0,64-28.715,64-64H31.805z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M294.461,350.507c27.264,53.077,67.861,110.912,90.859,142.229c2.133-23.595,5.973-46.72,8-58.069 C376.871,423.872,331.559,392.405,294.461,350.507z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M118.269,434.667c2.027,11.349,5.867,34.453,8,58.069c22.997-31.339,63.573-89.152,90.837-142.229 C180.029,392.405,134.738,423.872,118.269,434.667z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M255.805,315.072C230.503,384.555,166.397,474.709,138.621,512H373.01C345.213,474.709,281.106,384.555,255.805,315.072z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M100.861,420.501c0.917-0.576,70.784-44.267,114.624-101.781c-20.779,3.115-42.624-1.237-60.416-13.163 c-3.584-2.411-8.299-2.411-11.883,0C129.106,315.008,112.722,320,95.805,320c-6.357,0-12.949-0.917-20.779-2.88 c-2.987-0.768-6.208-0.171-8.747,1.621c-2.539,1.792-4.181,4.587-4.48,7.68c-9.301,94.571-49.621,169.045-50.027,169.771 c-1.813,3.307-1.749,7.317,0.171,10.581c1.941,3.243,5.419,5.227,9.195,5.227h85.056c-1.557-36.011-10.091-79.893-10.197-80.384 C95.143,427.264,97.085,422.827,100.861,420.501z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M498.685,494.037c-6.656-12.864-40.448-81.835-48.896-167.616c-0.299-3.093-1.941-5.888-4.48-7.68 s-5.781-2.411-8.747-1.621c-7.808,1.963-14.4,2.88-20.757,2.88c-16.917,0-33.301-4.992-47.403-14.443 c-3.584-2.411-8.299-2.411-11.883,0c-17.792,11.925-39.637,16.277-60.437,13.163c43.861,57.557,113.728,101.205,114.645,101.781 c3.797,2.325,5.739,6.763,4.885,11.136c-0.085,0.491-8.619,44.395-10.197,80.384h85.056c0.149,0,0.277,0,0.427,0 c5.888,0,10.667-4.779,10.667-10.667C501.565,498.517,500.477,495.957,498.685,494.037z"
  }))));
});

const Close$1 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-close",
    enableBackground: "new 0 0 492 492",
    version: "1.1",
    viewBox: "0 0 492 492",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872\n			c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872\n			c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052\n			L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116\n			c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952\n			c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116\n			c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"
  }));
});

const CreditCard = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-credit-card",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M452,76H60c-33.084,0-60,26.916-60,60c0,15.945,0,232.847,0,240c0,33.084,26.916,60,60,60h392c33.084,0,60-26.916,60-60 c0-11.2,0-230.936,0-240C512,102.916,485.084,76,452,76z M472,376c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V271h432 V376z M472,231H40v-50h432V231z M472,141H40v-5c0-11.028,8.972-20,20-20h392c11.028,0,20,8.972,20,20V141z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M230,326H90c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h140c11.046,0,20-8.954,20-20 C250,334.954,241.046,326,230,326z"
  }))));
});

const CreditCardCheck = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-credit-card-check",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "68",
    y: "210.099",
    width: "264",
    height: "40"
  }), /* @__PURE__ */ React.createElement("polygon", {
    points: "343.191,420.538 264.789,345.908 237.211,374.881 345.438,477.901 511.88,292.585 482.12,265.856 "
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M452,34.099H60c-33.084,0-60,26.916-60,60v256c0,33.084,26.916,60,60,60h137v-40H60c-11.028,0-20-8.972-20-20v-170h432 v46.122h40V94.099C512,61.015,485.084,34.099,452,34.099z M472,120.099H40v-26c0-11.028,8.972-20,20-20h392 c11.028,0,20,8.972,20,20V120.099z"
  }));
});

const CreditCards = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-credit-cards",
    viewBox: "0 0 512 512.00025",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m492 228h-26.636719l21.324219-21.324219c7.808594-7.804687 7.808594-20.472656 0-28.285156l-172.53125-172.53125c-7.8125-7.8125-20.476562-7.8125-28.285156 0l-280.015625 280.011719c-7.804688 7.808594-7.808594 20.476562 0 28.285156l70.144531 70.144531v107.699219c0 11.046875 8.953125 20 20 20h396c11.042969 0 20-8.953125 20-20v-244c0-11.046875-8.957031-20-20-20zm-20 76h-356v-36h356zm-63.203125-76h-181.019531l125.976562-125.976562 90.507813 90.511718zm-108.785156-179.714844 25.457031 25.457032-154.261719 154.257812h-50.910156zm-224.011719 224.011719v50.914063l-2.261719 2.257812-25.457031-25.453125zm40 199.703125v-128h356v128zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m441 412c0 13.808594-11.195312 25-25 25-13.808594 0-25-11.191406-25-25s11.191406-25 25-25c13.804688 0 25 11.191406 25 25zm0 0"
  }));
});

const CupOfTea = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-cup-of-tea",
    viewBox: "0 0 512.009 512.009",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M370.634,395.38l4.715-0.917c5.547-1.067,136.661-26.773,136.661-95.808c0-21.461-6.933-36.8-20.651-45.611 c-19.797-12.757-47.531-7.168-64.683-1.707v-16.683c0-17.643-14.357-32-32-32H96.009c-17.643,0-32,14.357-32,32v21.333 c0,63.637,29.675,122.027,78.827,160H10.676c-4.309,0-8.213,2.603-9.856,6.592c-1.664,3.989-0.747,8.576,2.304,11.627 l23.915,23.915c14.123,14.101,32.875,21.867,52.8,21.867h330.987c19.648,0,38.891-7.979,52.8-21.867l23.915-23.915 c3.051-3.051,3.968-7.637,2.304-11.627c-1.664-3.989-5.547-6.592-9.856-6.592H347.807 C356.02,409.673,363.593,402.783,370.634,395.38z M425.418,274.313c13.483-5.12,40.405-12.373,54.4-3.307 c7.317,4.672,10.859,13.739,10.859,27.648c0,35.477-59.307,59.221-98.496,69.931C410.783,340.809,422.324,308.596,425.418,274.313 z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M328.415,113.332c17.344-21.675,17.344-55.616,0-77.291c-3.733-4.608-10.432-5.312-14.997-1.664 c-4.608,3.669-5.333,10.389-1.664,14.997c11.008,13.717,11.008,36.907-0.043,50.667c-17.365,21.653-17.365,55.616-0.021,77.291 c2.133,2.645,5.205,4.011,8.341,4.011c2.347,0,4.715-0.768,6.677-2.347c4.608-3.669,5.333-10.389,1.664-14.997 C317.364,150.281,317.364,127.092,328.415,113.332z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M264.308,113.332c17.365-21.675,17.365-55.616,0-77.291c-3.669-4.587-10.368-5.333-14.997-1.664 c-4.608,3.669-5.333,10.389-1.664,14.997c10.987,13.717,10.987,36.907-0.021,50.667c-17.365,21.653-17.365,55.616,0,77.291 c2.112,2.645,5.205,4.011,8.341,4.011c2.325,0,4.693-0.768,6.656-2.347c4.587-3.669,5.333-10.389,1.664-14.997 C253.3,150.281,253.3,127.092,264.308,113.332z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M200.394,113.311c17.344-21.675,17.344-55.616,0-77.291c-3.669-4.587-10.389-5.355-14.997-1.643 c-4.587,3.669-5.333,10.389-1.643,14.976c10.987,13.717,10.987,36.907-0.021,50.667c-17.387,21.675-17.387,55.637-0.021,77.312 c2.112,2.624,5.205,3.989,8.341,3.989c2.325,0,4.693-0.768,6.656-2.347c4.608-3.669,5.333-10.389,1.664-14.997 C189.385,150.26,189.385,127.071,200.394,113.311z"
  }))));
});

const Dashboard$1 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-dashboard",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M226,352H20c-11.046,0-20,8.954-20,20v120c0,11.046,8.954,20,20,20h206c11.046,0,20-8.954,20-20V372 C246,360.954,237.046,352,226,352z M206,472H40v-80h166V472z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M226,0H20C8.954,0,0,8.954,0,20v292c0,11.046,8.954,20,20,20h206c11.046,0,20-8.954,20-20V20C246,8.954,237.046,0,226,0z M206,292H40V40h166V292z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M492,0H286c-11.046,0-20,8.954-20,20v120c0,11.046,8.954,20,20,20h206c11.046,0,20-8.954,20-20V20 C512,8.954,503.046,0,492,0z M472,120H306V40h166V120z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M492,180H286c-11.046,0-20,8.954-20,20v292c0,11.046,8.954,20,20,20h206c11.046,0,20-8.954,20-20V200 C512,188.954,503.046,180,492,180z M472,472H306V220h166V472z"
  }));
});

const DollarInHand = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-dollar-in-hand",
    viewBox: "0 0 192 192",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m96 112a56 56 0 1 0 -56-56 56.064 56.064 0 0 0 56 56zm-24-40h28a4 4 0 0 0 0-8h-8a20 20 0 0 1 -4-39.6v-8.4h16v8h16v16h-28a4 4 0 0 0 0 8h8a20 20 0 0 1 4 39.6v8.4h-16v-8h-16z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m147 155c-10.438 6.71-15.873 13.641-17.963 15.207a3.984 3.984 0 0 1 -2.391.793h-29.7a4.012 4.012 0 0 1 -1.789-.422l-15.157-10.578c32 0 36.216-11.507 38.836-18.586a4.005 4.005 0 0 0 -3.745-5.414h-115.091v40h47.056a4.012 4.012 0 0 1 1.789.422l30.31 15.156a4.012 4.012 0 0 0 1.789.422h53.4a4 4 0 0 0 2.829-1.172l30.827-30.828c2.828-2.828-11.483-11.118-21-5z"
  }));
});

const DollarRecurring = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-dollar-recurring",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 426.667 426.667",
    enableBackground: "new 0 0 426.667 426.667",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M213.333,42.667c46.933,0,89.6,19.2,121.6,51.2L298.667,128h106.667V21.333L364.8,64C326.4,25.6,273.067,0,213.333,0\nC96,0,0,96,0,213.333h42.667C42.667,119.467,119.467,42.667,213.333,42.667z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M213.333,149.333c10.667,0,21.333,10.667,21.333,21.333h42.667c0-27.733-17.067-51.2-42.667-59.733v-25.6H192v25.6\nc-25.6,8.533-42.667,32-42.667,59.733c0,34.133,27.733,64,64,64c12.8,0,21.333,10.667,21.333,21.333\nc0,10.667-10.667,21.333-21.333,21.333S192,266.667,192,256h-42.667c0,27.733,17.067,51.2,42.667,59.733v25.6h42.667v-25.6\nc25.6-8.533,42.667-32,42.667-59.733c0-36.267-27.733-64-64-64C202.667,192,192,181.333,192,170.667\nC192,157.867,202.667,149.333,213.333,149.333z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M384,213.333C384,307.2,307.2,384,213.333,384c-46.933,0-89.6-19.2-121.6-51.2L128,298.667H21.333v106.667l40.533-42.667\nc38.4,38.4,91.733,64,151.467,64c117.333,0,213.333-96,213.333-213.333H384z"
  })))));
});

const DollarRecurring2 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-dollar-recurring-2",
    viewBox: "0 0 426.667 426.667",
    enableBackground: "new 0 0 426.667 426.667",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M213.333,42.667c46.933,0,89.6,19.2,121.6,51.2L298.667,128h106.667V21.333L364.8,64C326.4,25.6,273.067,0,213.333,0\nC96,0,0,96,0,213.333h42.667C42.667,119.467,119.467,42.667,213.333,42.667z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M213.333,149.333c10.667,0,21.333,10.667,21.333,21.333h42.667c0-27.733-17.067-51.2-42.667-59.733v-25.6H192v25.6\nc-25.6,8.533-42.667,32-42.667,59.733c0,34.133,27.733,64,64,64c12.8,0,21.333,10.667,21.333,21.333\nc0,10.667-10.667,21.333-21.333,21.333S192,266.667,192,256h-42.667c0,27.733,17.067,51.2,42.667,59.733v25.6h42.667v-25.6\nc25.6-8.533,42.667-32,42.667-59.733c0-36.267-27.733-64-64-64C202.667,192,192,181.333,192,170.667\nC192,157.867,202.667,149.333,213.333,149.333z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M384,213.333C384,307.2,307.2,384,213.333,384c-46.933,0-89.6-19.2-121.6-51.2L128,298.667H21.333v106.667l40.533-42.667\nc38.4,38.4,91.733,64,151.467,64c117.333,0,213.333-96,213.333-213.333H384z"
  })))));
});

const DollarRecurring3 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-dollar-recurring-3",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m492 118h-323.480469v-49.714844l19.597657 19.597656c7.8125 7.808594 20.472656 7.808594 28.285156 0 7.8125-7.8125 7.8125-20.476562 0-28.285156l-53.738282-53.738281c-3.820312-3.824219-8.949218-5.859375-14.144531-5.859375-5.507812 0-10.585937 2.300781-14.144531 5.859375l-53.738281 53.738281c-7.808594 7.8125-7.808594 20.472656 0 28.285156 7.8125 7.808594 20.476562 7.808594 28.285156 0l19.597656-19.597656v49.714844h-108.519531c-11.046875 0-20 8.953125-20 20v236c0 11.046875 8.953125 20 20 20h323.480469v49.714844l-19.597657-19.597656c-7.8125-7.808594-20.476562-7.808594-28.285156 0-7.808594 7.8125-7.8125 20.476562 0 28.285156l53.738282 53.738281c3.675781 3.675781 8.757812 5.859375 14.144531 5.859375 5.265625 0 10.375-2.089844 14.144531-5.859375l53.738281-53.738281c7.8125-7.8125 7.8125-20.472656 0-28.285156-7.8125-7.808594-20.472656-7.808594-28.285156 0l-19.597656 19.597656v-49.714844h108.519531c11.046875 0 20-8.953125 20-20v-236c0-11.046875-8.953125-20-20-20zm-452 236v-32.292969c14.8125 5.683594 26.609375 17.480469 32.292969 32.292969zm432 0h-358.101562c-7.855469-36.914062-36.984376-66.042969-73.898438-73.898438v-122.101562h358.101562c7.855469 36.914062 36.984376 66.042969 73.898438 73.898438zm0-163.707031c-14.8125-5.683594-26.609375-17.480469-32.292969-32.292969h32.292969zm-216-13.292969c-43.5625 0-79 35.4375-79 79s35.4375 79 79 79 79-35.4375 79-79-35.4375-79-79-79zm0 118c-21.503906 0-39-17.496094-39-39s17.496094-39 39-39 39 17.496094 39 39-17.496094 39-39 39zm0 0"
  }));
});

const DollarRecurring4 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-dollar-recurring-4",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m492 118h-323.480469v-49.714844l19.597657 19.597656c7.8125 7.808594 20.472656 7.808594 28.285156 0 7.8125-7.8125 7.8125-20.476562 0-28.285156l-53.738282-53.738281c-3.820312-3.824219-8.949218-5.859375-14.144531-5.859375-5.507812 0-10.585937 2.300781-14.144531 5.859375l-53.738281 53.738281c-7.808594 7.8125-7.808594 20.472656 0 28.285156 7.8125 7.808594 20.476562 7.808594 28.285156 0l19.597656-19.597656v49.714844h-108.519531c-11.046875 0-20 8.953125-20 20v236c0 11.046875 8.953125 20 20 20h323.480469v49.714844l-19.597657-19.597656c-7.8125-7.808594-20.476562-7.808594-28.285156 0-7.808594 7.8125-7.8125 20.476562 0 28.285156l53.738282 53.738281c3.675781 3.675781 8.757812 5.859375 14.144531 5.859375 5.265625 0 10.375-2.089844 14.144531-5.859375l53.738281-53.738281c7.8125-7.8125 7.8125-20.472656 0-28.285156-7.8125-7.808594-20.472656-7.808594-28.285156 0l-19.597656 19.597656v-49.714844h108.519531c11.046875 0 20-8.953125 20-20v-236c0-11.046875-8.953125-20-20-20zm-452 236v-32.292969c14.8125 5.683594 26.609375 17.480469 32.292969 32.292969zm432 0h-358.101562c-7.855469-36.914062-36.984376-66.042969-73.898438-73.898438v-122.101562h358.101562c7.855469 36.914062 36.984376 66.042969 73.898438 73.898438zm0-163.707031c-14.8125-5.683594-26.609375-17.480469-32.292969-32.292969h32.292969zm-216-13.292969c-43.5625 0-79 35.4375-79 79s35.4375 79 79 79 79-35.4375 79-79-35.4375-79-79-79zm0 118c-21.503906 0-39-17.496094-39-39s17.496094-39 39-39 39 17.496094 39 39-17.496094 39-39 39zm0 0"
  }));
});

const DollarTransfer = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-dollar-transfer",
    height: "512pt",
    viewBox: "0 0 512 511",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m141.925781 142.171875c14.808594-14.804687 32.054688-26.433594 51.269531-34.5625 19.910157-8.417969 41.039063-12.6875 62.804688-12.6875s42.894531 4.269531 62.804688 12.6875c19.214843 8.128906 36.464843 19.757813 51.269531 34.5625 6.398437 6.398437 12.203125 13.257813 17.386719 20.53125v-17.300781c0-55.476563-45.132813-100.609375-100.609376-100.609375h-124.804687v-44.292969l-162.046875 102.105469 116.140625 73.179687c7.042969-12.242187 15.671875-23.5 25.785156-33.613281zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m512 409.886719-116.140625-73.179688c-7.042969 12.242188-15.671875 23.496094-25.785156 33.613281-14.808594 14.804688-32.054688 26.433594-51.269531 34.558594-19.910157 8.421875-41.039063 12.691406-62.804688 12.691406s-42.894531-4.269531-62.804688-12.691406c-19.214843-8.125-36.464843-19.753906-51.269531-34.558594-6.398437-6.398437-12.203125-13.257812-17.386719-20.53125v17.300782c0 55.476562 45.132813 100.609375 100.609376 100.609375h124.808593v44.292969zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m124.707031 256.246094c0 72.511718 58.78125 131.296875 131.292969 131.296875 72.515625 0 131.296875-58.785157 131.296875-131.296875 0-72.511719-58.78125-131.296875-131.296875-131.296875-72.511719 0-131.292969 58.785156-131.292969 131.296875zm81.304688-21.339844c0-18.550781 13.460937-34.148438 40.386719-37.921875v-17.894531h23.144531v17.566406c12.148437 1.148438 23.96875 4.265625 33.324219 9.519531l-11.65625 28.070313c-11.324219-5.746094-21.996094-8.535156-32.011719-8.535156-11.324219 0-14.9375 3.28125-14.9375 7.222656 0 13.789062 63.53125 2.296875 63.53125 44.652344 0 17.730468-12.804688 33.160156-38.25 37.59375v18.222656h-23.144531v-17.402344c-16.417969-.984375-32.339844-5.417969-42.191407-11.492188l12.476563-28.234374c10.835937 6.402343 25.28125 10.507812 37.921875 10.507812 10.996093 0 14.9375-2.300781 14.9375-6.238281 0-14.449219-63.53125-2.792969-63.53125-45.636719zm0 0"
  }));
});

const DramaArts = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-drama-arts",
    viewBox: "0 -39 512.00029 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m235.214844 34.710938v11.140624c15.460937-1.046874 23.738281.207032 24.597656.347657 4.976562.8125 9.226562 4.027343 11.367188 8.589843l21.726562 46.304688c2.628906.613281 5.132812 1.910156 7.203125 3.929688 2.621094 2.554687 5.757813 4.554687 9.3125 5.421874 7.097656 1.730469 14.140625-.242187 19.117187-5.082031 5.136719-4.992187 12.972657-6.261719 19.027344-2.433593 8.65625 5.46875 9.585938 17.054687 2.796875 23.84375-9.578125 9.582031-22.316406 14.859374-35.867187 14.859374-.871094 0-1.738282-.023437-2.605469-.066406l29.207031 62.253906c1.234375 2.625 2.402344 5.269532 3.511719 7.925782 32.886719-10.371094 70.292969-2.667969 96.429687 23.171875 5.84375 5.773437 6.492188 15.203125 1.03125 21.34375-3.050781 3.429687-7.246093 5.144531-11.441406 5.144531-3.910156 0-7.824218-1.492188-10.804687-4.476562-17.714844-17.710938-43.148438-23.097657-65.570313-16.1875 8.503906 33.90625 7.9375 68.898437-.839844 101.710937 4.132813 1.367187 8.339844 2.585937 12.613282 3.648437 4.960937 1.230469 10.144531 1.242188 15.109375.015626 76.433593-18.90625 130.863281-87.644532 130.863281-167.28125v-144.125c0-7.136719-4.40625-13.535157-11.085938-16.046876-21.050781-7.910156-61.734374-18.664062-127.300781-18.664062-65.570312 0-106.257812 10.757812-127.3125 18.667969-6.679687 2.507812-11.085937 8.90625-11.085937 16.042969zm168.972656 70.449218c5.96875-5.96875 15.644531-5.96875 21.617188 0 3.804687 3.804688 8.863281 5.902344 14.246093 5.902344 5.382813 0 10.445313-2.097656 14.25-5.902344 5.96875-5.972656 15.648438-5.972656 21.617188 0 5.96875 5.96875 5.96875 15.644532 0 21.613282-9.582031 9.582031-22.316407 14.859374-35.867188 14.859374-13.546875 0-26.285156-5.277343-35.867187-14.859374-5.964844-5.96875-5.964844-15.644532.003906-21.613282zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m313.425781 216.804688-61.542969-131.171876c-2.832031-6.039062-9.105468-9.675781-15.757812-9.171874-22.222656 1.679687-63.90625 9.050781-123.945312 37.21875-59.363282 27.851562-91.628907 54.871093-107.328126 70.972656-4.980468 5.109375-6.253906 12.773437-3.222656 19.234375l61.214844 130.480469c33.824219 72.09375 112.304688 111.207031 189.535156 95.855468 4.992188-.992187 9.664063-3.183594 13.617188-6.390625 61.171875-49.578125 81.253906-134.929687 47.429687-207.027343zm-123.679687-9.777344c9.503906-26.304688 38.636718-39.976563 64.941406-30.46875 7.9375 2.867187 12.046875 11.628906 9.179688 19.570312-2.867188 7.9375-11.628907 12.050782-19.570313 9.179688-10.449219-3.773438-22.023437 1.65625-25.800781 12.105468-2.25 6.226563-8.117188 10.097657-14.375 10.097657-1.726563 0-3.480469-.292969-5.195313-.914063-7.9375-2.871094-12.050781-11.632812-9.179687-19.570312zm-59.113282 51.609375c-5.0625-1.828125-10.535156-1.578125-15.410156.710937-4.871094 2.285156-8.5625 6.332032-10.390625 11.394532-2.25 6.226562-8.121093 10.097656-14.378906 10.097656-1.722656 0-3.476563-.296875-5.191406-.914063-7.941407-2.867187-12.050781-11.628906-9.183594-19.570312 4.605469-12.742188 13.894531-22.929688 26.160156-28.683594 12.269531-5.753906 26.039063-6.390625 38.78125-1.785156 7.941407 2.867187 12.050781 11.628906 9.183594 19.570312-2.871094 7.9375-11.632813 12.046875-19.570313 9.179688zm51.324219 99.914062c-10.800781 0-21.773437-1.835937-32.503906-5.714843-7.941406-2.867188-12.050781-11.628907-9.183594-19.570313 2.871094-7.9375 11.628907-12.050781 19.570313-9.179687 33.894531 12.246093 71.433594-5.367188 83.679687-39.257813 2.867188-7.941406 11.628907-12.050781 19.570313-9.183594 7.9375 2.871094 12.046875 11.632813 9.179687 19.574219-14.097656 39.011719-51.035156 63.332031-90.3125 63.332031zm0 0"
  }));
});

const EatingUtensils = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-eating-utensils",
    viewBox: "0 0 511.999 511.999",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m505.13 46.625c-.021-17.365-5.931-32-17.536-43.52-3.84-3.819-9.92-4.139-14.165-.768-2.027 1.621-37.547 36.864-453.376 453.269-12.502 12.523-12.523 32.875-.043 45.333 6.059 6.059 14.101 9.387 22.656 9.387 8.512 0 16.533-3.328 22.571-9.344l135.787-135.808c52.309-52.309 74.965-59.563 87.445-60.459 23.445-1.685 43.669-10.411 58.517-25.259 67.947-67.967 158.293-166.037 158.144-232.831z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m85.823 191.286c.064.064.085.149.149.213 14.507 14.272 34.475 22.699 57.707 24.405 12.352.896 27.968 8.939 47.765 24.597 1.941 1.536 4.288 2.304 6.613 2.304 2.731 0 5.483-1.045 7.552-3.136l34.069-34.091c3.819-3.84 4.181-9.899.832-14.165-22.315-28.267-24.789-42.645-24.683-51.008.213-18.987-7.744-37.931-22.443-52.565l-2.752-2.325s-.021 0-.021-.021l-96-81.344c-4.501-3.819-11.243-3.243-15.04 1.237-3.819 4.48-3.243 11.221 1.237 15.04l87.168 73.856-29.312 29.312-88.446-88.448c-4.16-4.16-10.923-4.16-15.083 0s-4.16 10.923 0 15.083l88.448 88.448-29.952 29.952-75.2-79.936c-4.032-4.288-10.795-4.48-15.083-.448s-4.48 10.795-.448 15.083l82.709 87.808c.065.064.15.085.214.149z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m502.634 457.377-146.624-146.624c-3.499-3.52-8.939-4.139-13.141-1.536-11.797 7.253-25.344 12.245-40.32 14.805-3.925.661-7.147 3.477-8.363 7.275-1.216 3.797-.192 7.957 2.624 10.773l160.555 160.555c6.037 6.037 14.08 9.365 22.635 9.365s16.576-3.328 22.635-9.365 9.365-14.08 9.365-22.613-3.329-16.577-9.366-22.635z"
  }));
});

const EventTicket = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-event-ticket",
    viewBox: "0 0 494.336 494.336",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M282.432,236.885c-4.117-2.112-6.4-6.613-5.696-11.179l6.059-38.144l-27.307,27.307 c-3.264,3.264-8.299,4.075-12.373,1.963l-34.432-17.536l17.536,34.411c2.112,4.117,1.323,9.109-1.963,12.395l-27.307,27.307 l38.144-6.037c0.555-0.085,1.131-0.128,1.664-0.128c3.968,0,7.659,2.219,9.493,5.824l17.536,34.432l6.037-38.165 c0.725-4.565,4.309-8.149,8.875-8.875l38.123-6.037L282.432,236.885z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M481.835,215.168c0-8.555,3.328-16.576,9.365-22.613c2.005-2.005,3.115-4.715,3.115-7.552 c0-2.816-1.131-5.547-3.115-7.552L316.864,3.115C314.859,1.109,312.149,0,309.312,0s-5.568,1.131-7.552,3.136 c-12.032,12.075-33.173,12.075-45.205,0C254.549,1.131,251.819,0,249.003,0c-2.816,0-5.547,1.131-7.552,3.115L3.136,241.451 c-2.005,2.005-3.115,4.715-3.115,7.552s1.131,5.547,3.115,7.552c6.037,6.037,9.365,14.059,9.365,22.613 c0,8.171-3.157,16-8.896,22.016c-4.011,4.203-3.947,10.859,0.213,14.955c41.728,41.28,117.568,117.867,173.824,174.848 c1.984,2.027,4.693,3.157,7.531,3.179c3.605,0.043,5.568-1.088,7.552-3.093c12.117-11.968,33.067-11.883,45.035,0.128 c2.005,2.005,4.736,3.136,7.552,3.136c2.816,0,5.547-1.131,7.552-3.115L491.2,252.885c2.005-2.005,3.115-4.715,3.115-7.552 s-1.131-5.547-3.115-7.552C485.163,231.744,481.835,223.723,481.835,215.168z M250.283,58.283c4.16-4.16,10.923-4.16,15.083,0 l21.333,21.333c4.16,4.16,4.16,10.923,0,15.083c-2.069,2.091-4.8,3.136-7.531,3.136s-5.461-1.045-7.552-3.115l-21.333-21.333 C246.123,69.205,246.123,62.464,250.283,58.283z M94.72,286.72c-2.091,2.069-4.821,3.115-7.552,3.115s-5.461-1.045-7.552-3.115 l-21.333-21.333c-4.16-4.16-4.16-10.923,0-15.083c4.16-4.16,10.923-4.16,15.083,0l21.333,21.333 C98.88,275.797,98.88,282.539,94.72,286.72z M169.387,361.387c-2.091,2.069-4.821,3.115-7.552,3.115 c-2.731,0-5.461-1.045-7.552-3.115l-21.333-21.333c-4.16-4.16-4.16-10.923,0-15.083c4.16-4.16,10.923-4.16,15.083,0l21.333,21.333 C173.547,350.464,173.547,357.205,169.387,361.387z M244.053,436.053c-2.091,2.069-4.821,3.115-7.552,3.115 c-2.731,0-5.461-1.045-7.552-3.115l-21.333-21.333c-4.16-4.16-4.16-10.923,0-15.083s10.923-4.16,15.083,0l21.333,21.333 C248.213,425.131,248.213,431.872,244.053,436.053z M361.472,261.44c-0.725,4.587-4.309,8.171-8.875,8.896l-62.912,9.963 l-9.963,62.912c-0.725,4.565-4.309,8.149-8.875,8.875c-0.555,0.085-1.131,0.128-1.664,0.128c-3.968,0-7.659-2.219-9.493-5.824 l-28.907-56.768l-62.912,9.963c-4.672,0.853-9.088-1.579-11.157-5.696c-2.112-4.117-1.323-9.109,1.963-12.395l45.035-45.035 l-28.949-56.747c-2.091-4.096-1.301-9.109,1.963-12.373c3.243-3.264,8.299-4.075,12.373-1.963l56.768,28.907l45.035-45.035 c3.243-3.264,8.299-4.075,12.373-1.963c4.117,2.091,6.421,6.613,5.717,11.157l-9.984,62.912l56.747,28.928 C359.872,252.373,362.176,256.896,361.472,261.44z M361.387,169.387c-2.091,2.069-4.821,3.115-7.552,3.115 s-5.461-1.045-7.552-3.115l-21.333-21.333c-4.16-4.16-4.16-10.923,0-15.083c4.16-4.16,10.923-4.16,15.083,0l21.333,21.333 C365.547,158.464,365.547,165.205,361.387,169.387z M436.053,244.053c-2.091,2.069-4.821,3.115-7.552,3.115 c-2.731,0-5.461-1.045-7.552-3.115l-21.333-21.333c-4.16-4.16-4.16-10.923,0-15.083c4.16-4.16,10.923-4.16,15.083,0l21.333,21.333 C440.213,233.131,440.213,239.872,436.053,244.053z"
  }))));
});

const Exit = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 512 512",
    width: "100%",
    height: "100%",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M361 396c-11.046 0-20 8.954-20 20v56H55V40h286v56c0 11.046 8.954 20 20 20s20-8.954 20-20V20c0-11.046-8.954-20-20-20H35C23.954 0 15 8.954 15 20v472c0 11.046 8.954 20 20 20h326c11.046 0 20-8.954 20-20v-76c0-11.046-8.954-20-20-20z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M491.141 241.858l-53.74-53.74c-7.81-7.811-20.473-7.81-28.284 0s-7.811 20.474 0 28.285L428.715 236l-165.678-.001c-11.045 0-20 8.954-20 20s8.954 20 20 20l165.68.001-19.599 19.599c-7.811 7.809-7.811 20.473 0 28.284 7.81 7.811 20.474 7.809 28.284-.001l53.74-53.74a.022.022 0 01.004-.005c4.024-4.027 5.709-8.682 5.854-14.137 0-5.392-2.291-10.576-5.859-14.142z"
  }));
});

const FileUpload = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "-64 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
  }));
});

const Flame = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-flame",
    enableBackground: "new 0 0 64 64",
    viewBox: "0 0 64 64",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m37.719 55.189c5.429-9.638 3.156-21.767-5.405-28.838-.005-.004-.01-.009-.014-.012l.037.092-.006.069c1.668 4.406 1.434 9.243-.615 13.393l-1.444 2.926-.443-3.233c-.301-2.193-1.128-4.285-2.402-6.076h-.201l-.106-.3c.015 3.351-.691 6.652-2.076 9.766-1.817 4.075-1.55 8.774.715 12.572l1.563 2.622-2.812-1.188c-4.637-1.959-8.344-5.733-10.171-10.354-2.047-5.16-1.668-11.143 1.015-16.001 1.399-2.527 2.379-5.21 2.914-7.976l.523-2.711 1.334 2.418c.637 1.153 1.106 2.401 1.397 3.712l.03.031.031.21.029-.009c3.996-5.309 6.39-11.915 6.739-18.604l.09-1.733 1.454.948c5.934 3.867 10.055 10.071 11.328 17.042l.029.143.015.022.065-.092c1.163-1.536 1.777-3.363 1.777-5.286v-2.978l1.797 2.374c4.178 5.518 6.32 12.363 6.032 19.275-.354 8.136-4.791 15.277-11.87 19.146l-3.065 1.675z"
  }));
});

const FuelPump = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-fuel-pump",
    x: "0px",
    y: "0px",
    viewBox: "0 0 384 384",
    enableBackground: "new 0 0 384 384",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M352.427,90.24l0.32-0.32L273.28,10.667L250.667,33.28l45.013,45.013c-20.053,7.68-34.347,26.987-34.347,49.707\nc0,29.44,23.893,53.333,53.333,53.333c7.573,0,14.827-1.6,21.333-4.48v153.813C336,342.4,326.4,352,314.667,352\nc-11.733,0-21.333-9.6-21.333-21.333v-96c0-23.573-19.093-42.667-42.667-42.667h-21.333V42.667C229.333,19.093,210.24,0,186.667,0\nh-128C35.093,0,16,19.093,16,42.667V384h213.333V224h32v106.667c0,29.44,23.893,53.333,53.333,53.333\nc29.44,0,53.333-23.893,53.333-53.333V128C368,113.28,362.027,99.947,352.427,90.24z M186.667,149.333h-128V42.667h128V149.333z\nM314.667,149.333c-11.733,0-21.333-9.6-21.333-21.333s9.6-21.333,21.333-21.333c11.733,0,21.333,9.6,21.333,21.333\nS326.4,149.333,314.667,149.333z"
  }));
});

const GearCog = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 512 512",
    width: "100%",
    height: "100%",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M489.514 296.695l-21.3-17.534c-14.59-12.011-14.564-34.335.001-46.322l21.299-17.534a39.878 39.878 0 009.218-50.882l-42.058-72.846A39.88 39.88 0 00408 74.119l-25.835 9.679c-17.696 6.628-37.016-4.551-40.117-23.161l-4.535-27.214A39.874 39.874 0 00298.058 0h-84.115a39.874 39.874 0 00-39.456 33.424l-4.536 27.213c-3.107 18.643-22.453 29.778-40.116 23.162L104 74.119a39.88 39.88 0 00-48.674 17.458l-42.057 72.845a39.875 39.875 0 009.218 50.882l21.299 17.534c14.592 12.012 14.563 34.334 0 46.322l-21.3 17.534a39.876 39.876 0 00-9.218 50.882l42.058 72.846c9.818 17.003 30.286 24.344 48.674 17.458l25.834-9.679c17.699-6.631 37.015 4.556 40.116 23.161l4.536 27.212A39.875 39.875 0 00213.942 512h84.115a39.873 39.873 0 0039.455-33.424l4.535-27.212c3.106-18.638 22.451-29.781 40.117-23.161L408 437.881a39.876 39.876 0 0048.674-17.458l42.059-72.847a39.878 39.878 0 00-9.219-50.881zm-67.481 103.728l-25.835-9.679c-41.299-15.471-86.37 10.63-93.605 54.043L298.058 472h-84.115l-4.536-27.213c-7.249-43.497-52.386-69.484-93.605-54.043l-25.835 9.679-42.057-72.846 21.299-17.534c34.049-28.03 33.978-80.114 0-108.086L47.91 184.423l42.058-72.846 25.834 9.679c41.3 15.47 86.37-10.63 93.605-54.043L213.942 40h84.115l4.535 27.213c7.25 43.502 52.389 69.481 93.605 54.043l25.835-9.679 42.067 72.836-.011.009-21.298 17.534c-34.048 28.028-33.98 80.113-.001 108.086l21.3 17.534zM256 157.333c-54.405 0-98.667 44.262-98.667 98.667s44.262 98.667 98.667 98.667 98.667-44.262 98.667-98.667-44.262-98.667-98.667-98.667zm0 157.334c-32.349 0-58.667-26.318-58.667-58.667s26.318-58.667 58.667-58.667 58.667 26.318 58.667 58.667-26.318 58.667-58.667 58.667z"
  }));
});

const Gift$1 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    id: "applab-icon-basic-gift",
    x: "0px",
    y: "0px",
    viewBox: "0 0 199.516 199.516",
    enableBackground: "new 0 0 199.516 199.516",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M180.916,41.456h-15.858c3.637-2.664,6.443-6.369,8.01-10.704c2.289-6.329,1.69-13.313-1.641-19.161\nC167.354,4.441,159.706,0,151.466,0c-6.507,0-12.514,2.651-16.915,7.464l-19.558,21.391c-2.972-3.4-7.328-5.561-12.188-5.561H96.71\nc-4.86,0-9.216,2.161-12.188,5.562L64.964,7.465C60.563,2.651,54.557,0,48.05,0c-8.24,0-15.889,4.441-19.961,11.591\nc-3.332,5.849-3.93,12.833-1.641,19.162c1.567,4.335,4.373,8.039,8.009,10.703H18.6c-4.143,0-7.5,3.358-7.5,7.5v40.701\nc0,3.973,3.092,7.216,7,7.475v94.884c0,4.142,3.357,7.5,7.5,7.5h50.5h47.316h50.5c4.143,0,7.5-3.358,7.5-7.5V97.132\nc3.908-0.258,7-3.501,7-7.475V48.956C188.416,44.814,185.059,41.456,180.916,41.456z M115.916,56.529v127.987H83.6V56.529h4.408\nh23.5H115.916z M40.554,25.652c-0.804-2.225-0.603-4.582,0.568-6.637C42.555,16.501,45.145,15,48.05,15\nc2.244,0,4.319,0.918,5.844,2.586l21.825,23.87h-0.999L45.235,30.391C43.021,29.559,41.358,27.876,40.554,25.652z M158.962,25.651\nc-0.805,2.225-2.468,3.908-4.683,4.739l-29.483,11.066h-0.999l21.824-23.87c1.524-1.668,3.601-2.586,5.845-2.586\nc2.905,0,5.495,1.501,6.928,4.016C159.563,21.07,159.766,23.427,158.962,25.651z"
  }));
});

const Golf = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-golf",
    height: "512",
    viewBox: "0 0 58 59",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "translate(-1 -1)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m41.66 20.66c.21842-.1918663.3425296-.4692878.34-.76v-14.5c-.0018915-.36685736-.2045104-.70322631-.5279231-.87640861-.3234128-.17318229-.7156897-.1553705-1.0220769.04640861-7.33 4.57-14.66-6.27-22-2.92.3536816.50044707.545621 1.09720415.55 1.71v15.07c7.55-2.75 15.11 8.8 22.66 2.23z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m54.72 49.21c-2.52-1.09-9.59-3-9.07-6.41.37-2.43 5-1.62 5.08-4 .05-1.61-2.24-1.92-3.6-2-9.13-1.01-19.13-1.29-28.13.58v7.29c3.75 2 1.93 6.33-3 6.33s-6.73-4.38-3-6.33v-5.67c-4.49 1.5-11.76 4.6-12 9.35-.27 5.51 7.62 7.78 12.38 8.73l.32.07c7.4359231 1.6062877 15.0555886 2.1950036 22.65 1.75 5.9450153-.341655 11.8498903-1.1914217 17.65-2.54 2.26-.65 6.16-1.84 4.26-4.66-.9326539-1.1353506-2.156227-1.9959994-3.54-2.49zm-13.72 4.79c-2.209139 0-4-1.790861-4-4s1.790861-4 4-4 4 1.790861 4 4-1.790861 4-4 4z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m15 3.36v43.64c0 .5522847.4477153 1 1 1s1-.4477153 1-1c0-46.89.13-43.87-.24-44.29-.2721225-.31821168-.7136768-.43320365-1.1064462-.28814676-.3927695.1450569-.653586.51944719-.6535538.93814676z"
  })));
});

const GraduationCap = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-graduation-cap",
    x: "0px",
    y: "0px",
    viewBox: "0 0 484.006 484.006",
    enableBackground: "new 0 0 484.006 484.006",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("polygon", {
    points: "484.006,189.845 484.006,179.186 241.897,62.561 0,179.083 0,189.946 241.897,306.471"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M83.808,251.571v69.7l145.836,70.25h24.506l145.435-70.057c0.14-0.307,0.271-0.613,0.402-0.922V251.57l-158.09,76.152\nL83.808,251.571z"
  }), /* @__PURE__ */ React.createElement("polygon", {
    points: "458.506,358.195 458.506,222.599 439.359,232.255 439.359,358.195 426.883,396.203 445.742,421.445\n452.123,421.445 470.981,396.203"
  }));
});

const HamburgerMenu = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-hamburger-menu",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    enableBackground: "new 0 0 124 124",
    x: "0px",
    y: "0px",
    viewBox: "0 0 124 124",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"
  })));
});

const HandHoldingHeart = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-hand-holding-heart-coin",
    viewBox: "0 0 490 490",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M478.99927,224H455.09314a144.15368,144.15368,0,0,1-7.32208,32h22.91662A127.4497,127.4497,0,0,0,478.99927,224Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M447.76355,160H470.652a128.09676,128.09676,0,0,0-18.81128-32H431.674A143.62979,143.62979,0,0,1,447.76355,160Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M456,208h24a127.79324,127.79324,0,0,0-4.04993-32h-23.539A143.93789,143.93789,0,0,1,456,208Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M436.31689,280.71582A144.331,144.331,0,0,1,420.105,303.12354l26.91034-9.36524A128.22,128.22,0,0,0,462.87244,272h-21.853Q438.82074,276.43115,436.31689,280.71582Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M471.75684,310.81738a19.369,19.369,0,0,0-17.79444-2.53515l-133.581,46.4873a39.97751,39.97751,0,0,1-32.99268-3.04785L245.87549,328H192V312H296a24,24,0,0,0,0-48H219.88232a39.7404,39.7404,0,0,0-28.28466,11.71582l-19.88135,19.88184A55.6343,55.6343,0,0,1,132.11768,312H32v96H185.12061l72.28027,20.65137a95.48,95.48,0,0,0,72.09668-7.89356L469.73877,344.794A19.70552,19.70552,0,0,0,480,327.41309V326.79A19.37352,19.37352,0,0,0,471.75684,310.81738Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M419.23218,112h17.33191a127.88043,127.88043,0,0,0-50.32-27.34131A145.05013,145.05013,0,0,1,419.23218,112Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M392,175.709a31.46412,31.46412,0,0,0-9.30322-22.416,31.861,31.861,0,0,0-44.95313,0L312,178.99023,286.25635,153.293a31.85924,31.85924,0,0,0-44.95313,0,31.65719,31.65719,0,0,0,0,44.832L291.26685,248H296a39.83191,39.83191,0,0,1,26.57593,10.13916L382.69678,198.125A31.46412,31.46412,0,0,0,392,175.709Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M219.88232,248h48.73645l-38.61926-38.55078a47.65844,47.65844,0,0,1,0-67.48047,47.88719,47.88719,0,0,1,67.56055,0L312,156.38281l14.43994-14.41406a47.88719,47.88719,0,0,1,67.56055,0,47.65844,47.65844,0,0,1,0,67.48047l-61.75867,61.64941A39.97885,39.97885,0,0,1,296,328H278.125l17.20215,9.8291a23.98063,23.98063,0,0,0,19.79492,1.8291l62.4906-21.74707A128.00244,128.00244,0,1,0,184,208a127.06447,127.06447,0,0,0,8.8775,46.927A55.6896,55.6896,0,0,1,219.88232,248Z"
  }));
});

const HandHoldingHeart2 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-hand-holding-heart",
    viewBox: "-91 0 432 432",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m132.101562 352.148438c7.308594 5.933593 15.085938 12.246093 23.261719 19.070312 2.78125 2.316406 6.195313 3.472656 9.609375 3.472656 3.410156 0 6.824219-1.15625 9.605469-3.472656 8.160156-6.8125 15.941406-13.125 23.25-19.058594 41.894531-33.996094 72.171875-58.574218 72.171875-95.535156 0-34.761719-26.367188-61.976562-60.015625-61.976562-21.398437 0-35.769531 10.515624-45.015625 21.738281-9.226562-11.222657-23.582031-21.738281-45-21.738281-33.644531 0-60.015625 27.214843-60.015625 61.976562.003906 36.960938 30.265625 61.523438 72.148437 95.523438zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m270 128.402344v-75.902344c0-12.300781-10.199219-22.5-22.5-22.5s-22.5 10.199219-22.5 22.5v113.648438c5.660156.941406 11.074219 2.425781 16.304688 4.363281 2.976562-18.039063 13.621093-33.425781 28.695312-42.109375zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m195 166.621094v-144.121094c0-12.300781-10.199219-22.5-22.5-22.5s-22.5 10.199219-22.5 22.5v148.007812c5.121094 1.875 10.296875 3.617188 14.984375 6.476563 9.113281-5.558594 19.351563-8.5625 30.015625-10.363281zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m300 150c-16.5 0-30 13.5-30 30v8.003906c18.371094 16.726563 30 40.929688 30 68.621094 0 51.257812-38.585938 82.574219-83.261719 118.828125-2.964843 2.410156-6.324219 5.191406-9.441406 7.734375-1.722656 2.605469-4.058594 4.675781-7.046875 5.777344-2.203125 1.8125-4.1875 3.394531-6.453125 5.28125-8.101563 6.753906-18.324219 10.445312-28.828125 10.445312-10.5 0-20.726562-3.691406-28.78125-10.402344-8.117188-6.78125-15.792969-12.992187-23-18.851562-44.664062-36.269531-83.230469-67.574219-83.230469-118.8125 0-19.242188 5.523438-36.910156 15.042969-51.523438v-92.601562c0-12.300781-10.199219-22.5-22.5-22.5s-22.5 10.199219-22.5 22.5v217.5h.902344c3.898437 44.097656 24.597656 84 59.097656 112.199219v54.800781c0 8.398438 6.597656 15 15 15h180c8.402344 0 15-6.601562 15-15v-54.800781c38.101562-31.5 60-77.398438 60-127.199219v-135c0-16.5-13.5-30-30-30zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m120 164.652344v-112.152344c0-12.300781-10.199219-22.5-22.5-22.5s-22.5 10.199219-22.5 22.5v124.535156c13.207031-7.683594 28.390625-12.386718 44.972656-12.386718.007813 0 .015625.003906.027344.003906zm0 0"
  }));
});

const HandshakeHeart = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    enableBackground: "new 0 0 512 512",
    id: "applab-icon-basic-handshake-heart",
    height: "512",
    viewBox: "0 0 512 512",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m288.8 368.8c5.9-5.9 12.7-10.2 20-12.9-16.1-21.5-13.5-54.2 6-73l.5-.5c16.6-16.6 41.1-20.7 61.5-12.3 2.6-8.9 7.5-17.1 14.2-23.8l.5-.5c21-21.9 58.9-21.9 80 0l1.4 1.4 2.9-2.9c48.2-48.1 48.2-126.3.2-174.4-48.1-48.1-126.3-48.1-174.3 0l-28.7 28.7 54.5 53c24.3 22.5 24.6 64.1.7 87-22.7 23.7-63.6 23.7-86.3 0l-18.9-18.7c-.6-.6-1.6-.6-2.1 0l-116.8 116.7c-7.4 7.1-7.4 20 0 27.1 7.5 7.5 19.7 7.5 27.1 0 .2-.2 33.7-33.7 33.7-33.7 6.6-6.6 17.4-6.6 24 0s6.6 17.4 0 24l-31.8 31.8c-8.5 8.1-8.5 22.8 0 30.9 8.1 8.5 22.8 8.5 30.9 0l31.7-31.7c6.6-6.6 17.4-6.6 24 0s6.6 17.4 0 24l-31.5 31.5c-8.7 8.5-8.8 22.5-.2 31.1 8.1 8.5 22.8 8.5 30.9 0l35.5-35.5c-11.9-21.3-7.9-49.9 9.7-67z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m34 73.8c-45.3 45.3-45.4 119-.2 164.4l62 58.6 101-101c13.2-13.8 37-13.8 50.2 0l18.8 18.8c10.1 10.5 28.2 10.5 38.2 0 5.2-5.2 8-12 7.9-19.3s-3-14.1-8.2-19.2l-105-102.1c-45.3-45.5-119.3-45.6-164.7-.2z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m421.8 389.9.5-.5c8.7-8.4 8.8-23.5 0-31.9l-31.2-31.2-19.8-19.8c-8.8-8.8-23.1-8.8-31.9 0l-.5.5c-8.7 8.4-8.8 23.5 0 31.9l51 51c8.8 8.8 23.1 8.8 31.9 0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m478.3 333.4.5-.5c8.8-8.8 8.8-23.1 0-31.9l-31.2-31.2c-8.4-8.7-23.5-8.8-31.9 0l-.5.5c-8.7 8.4-8.7 23.5 0 31.9l31.2 31.2c8.8 8.8 23.1 8.8 31.9 0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m332.6 445.5c8.8 8.8 23.1 8.8 31.9 0l.5-.5c8.8-8.8 8.8-23.1 0-31.9l-20.2-20.2c-8.8-8.8-23.1-8.8-31.9 0l-.5.5c-8.7 8.4-8.8 23.5 0 31.9z"
  })));
});

const HealthCross = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-health-cross",
    viewBox: "0 0 469.333 469.333",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m437.333 149.333h-117.333v-117.333c0-17.643-14.357-32-32-32h-106.667c-17.643 0-32 14.357-32 32v117.333h-117.333c-17.643 0-32 14.357-32 32v106.667c0 17.643 14.357 32 32 32h117.333v117.333c0 17.643 14.357 32 32 32h106.667c17.643 0 32-14.357 32-32v-117.333h117.333c17.643 0 32-14.357 32-32v-106.667c0-17.642-14.357-32-32-32z"
  }));
});

const HeartHealth = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-heart-health",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M362.667,275.748c-6.4,0-12.8-4.267-17.067-8.533l-21.333-34.133l-46.933,96c-4.267,10.667-17.067,14.933-27.733,8.533 c-4.267-2.133-6.4-4.267-8.533-8.533l-51.2-83.2L166.4,269.348c-6.4,4.267-10.667,6.4-17.067,6.4h-76.8 c46.933,78.933,166.4,162.133,170.667,166.4c6.4,4.267,17.067,4.267,23.467,0c6.4-4.267,123.733-87.467,170.667-166.4H362.667z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M407.467,88.015c-46.933-32-108.8-27.733-149.333,10.667c-40.533-38.4-102.4-42.667-149.333-10.667 c-46.933,32-68.267,89.6-53.333,145.067H140.8l36.267-36.267c10.667-8.533,25.6-8.533,34.133,4.267l44.8,72.533l46.933-93.867 c6.4-14.933,27.733-14.933,36.267-2.133l36.267,55.467h83.2C473.6,177.615,452.267,120.015,407.467,88.015z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M66.133,262.948c-4.267-8.533-8.533-19.2-10.667-29.867H0v42.667h72.533C70.4,271.482,68.267,267.215,66.133,262.948z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M456.533,233.082c-2.133,10.667-6.4,21.333-10.667,29.867c-2.133,4.267-4.267,8.533-6.4,12.8H512v-42.667H456.533z"
  }))));
});

const HeartHealth2 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-heart-health-2",
    viewBox: "0 0 192 192",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m163.3 29.537c-18.258-9.772-42.014-6.567-67.3 8.963-25.286-15.531-49.042-18.738-67.3-8.963-18.241 9.763-28.7 31.187-28.7 58.788 0 52.787 88.461 100.715 92.227 102.729a8 8 0 0 0 7.546 0c3.766-2.014 92.227-49.942 92.227-102.729 0-27.601-10.459-49.025-28.7-58.788zm-43.3 82.463h-16v16h-16v-16h-16v-16h16v-16h16v16h16z"
  }));
});

const HelpBubble = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-help-bubble",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    enableBackground: "new 0 0 512 512",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M248.158,343.22c-14.639,0-26.491,12.2-26.491,26.84c0,14.291,11.503,26.84,26.491,26.84\nc14.988,0,26.84-12.548,26.84-26.84C274.998,355.42,262.799,343.22,248.158,343.22z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M252.69,140.002c-47.057,0-68.668,27.885-68.668,46.708c0,13.595,11.502,19.869,20.914,19.869\nc18.822,0,11.154-26.84,46.708-26.84c17.429,0,31.372,7.669,31.372,23.703c0,18.824-19.52,29.629-31.023,39.389\nc-10.108,8.714-23.354,23.006-23.354,52.983c0,18.125,4.879,23.354,19.171,23.354c17.08,0,20.565-7.668,20.565-14.291\nc0-18.126,0.35-28.583,19.521-43.571c9.411-7.32,39.04-31.023,39.04-63.789S297.307,140.002,252.69,140.002z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M256,0C114.516,0,0,114.497,0,256v236c0,11.046,8.954,20,20,20h236c141.483,0,256-114.497,256-256\nC512,114.516,397.503,0,256,0z M256,472H40V256c0-119.377,96.607-216,216-216c119.377,0,216,96.607,216,216\nC472,375.377,375.393,472,256,472z"
  })))));
});

const Home$1 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    enableBackground: "new 0 0 49.794 49.794",
    id: "applab-icon-basic-home",
    viewBox: "0 0 49.794 49.794",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m5.965 29.682v19.236c0 .482.392.876.876.876h20.645v-17.418h9.698v17.418h5.77c.484 0 .876-.394.876-.876v-19.236l-18.921-18.84zm15.396 10.808h-8.751v-8.113h8.751z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m47.665 22.765-22.767-22.765-10.74 10.739v-4.726c0-1.104-.896-2-2-2s-2 .896-2 2v8.726l-8.027 8.026c-.977.977-.977 2.559 0 3.536.488.488 1.128.732 1.768.732s1.279-.244 1.768-.73l19.232-19.23 19.23 19.229c.977.978 2.559.978 3.534 0 .977-.978.977-2.561.002-3.537z"
  }));
});

const Institution = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-institution",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M492,192c11.046,0,20-8.954,20-20V96c0-8.684-5.604-16.375-13.869-19.037l-236-76c-3.986-1.283-8.275-1.283-12.262,0 l-236,76C5.604,79.625,0,87.316,0,96v76c0,11.046,8.954,20,20,20h30v204H20c-11.046,0-20,8.954-20,20v76c0,11.046,8.954,20,20,20 h472c11.046,0,20-8.954,20-20v-76c0-11.046-8.954-20-20-20h-30V192H492z M472,436v36H40v-36C54.155,436,466.627,436,472,436z M90,396V192h36v204H90z M166,396V192h32v204H166z M238,396V192h36v204H238z M314,396V192h32v204H314z M386,396V192h36v204H386z M40,152v-41.429l216-69.56l216,69.56V152C469.77,152,44.092,152,40,152z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", {
    cx: "256",
    cy: "106",
    r: "25"
  }))));
});

const Investment = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-investment",
    viewBox: "0 1 511 511.99994",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m274.484375 201.882812v-8.015624c0-3.421876-2.75-6-6.402344-6h-13.304687c-25.539063 0-46.316406-21.03125-46.316406-46.878907v-.84375c0-20.113281 12.980468-37.25 31.027343-43.558593v-5.59375c0-11.046876 8.953125-20 19.996094-20 11.046875 0 20 8.953124 20 20v3h3c11.042969 0 19.996094 8.953124 19.996094 19.996093 0 11.046875-8.953125 20-19.996094 20h-27.707031c-3.601563 0-6.320313 2.644531-6.320313 6.15625v.84375c0 3.664063 2.953125 6.882813 6.320313 6.882813h13.304687c25.585938 0 46.398438 20.632812 46.398438 45.996094v8.015624c0 21.507813-14.910157 39.621094-34.996094 44.683594v3.410156c0 11.046876-8.953125 20-20 20-11.042969 0-19.996094-8.953124-19.996094-20v-2h-12c-11.042969 0-19.996093-8.953124-19.996093-19.996093 0-11.046875 8.953124-20 19.996093-20h40.59375c3.652344 0 6.402344-2.621094 6.402344-6.097657zm179.136719 220.214844c-12.050782 12.050782-24.796875 21.171875-37.878906 27.117188-2.683594 1.21875-5.492188 1.792968-8.257813 1.792968-7.605469 0-14.871094-4.355468-18.21875-11.730468-4.570313-10.054688-.121094-21.910156 9.9375-26.476563 8.695313-3.953125 17.488281-10.339843 26.132813-18.984375 35.546874-35.542968 44.351562-92.945312 46.472656-123.066406-30.121094 2.125-87.484375 10.9375-123.019532 46.46875-21.035156 21.039062-23.378906 37.925781-23.308593 48.800781.027343 4.628907.632812 8.992188 1.566406 13.074219 18.851563-17.910156 41.347656-37.609375 68.066406-58.683594 8.671875-6.839844 21.246094-5.355468 28.085938 3.316406 6.839843 8.671876 5.351562 21.246094-3.316407 28.085938-110.363281 87.046875-144.421874 148.941406-144.753906 149.554688-3.578125 6.777343-10.496094 10.632812-17.65625 10.632812-.476562 0-.953125-.023438-1.433594-.058594-6.988281-.160156-13.6875-3.980468-17.203124-10.585937-.359376-.65625-12.429688-22.425781-44.84375-57.972657-24.367188 14.292969-57.050782 14.484376-57.433594 14.484376-27.496094 0-53.472656-12.035157-77.207032-35.769532-59.3593745-59.359375-59.097656-158.855468-58.8125-171.503906-.246093-10.917969 8.292969-20.03125 19.230469-20.433594 2.703125-.105468 42.421875-1.292968 87.144531 11.429688-10.515624-22.007813-16.414062-46.628906-16.414062-72.605469 0-93.179687 75.808594-168.984375 168.984375-168.984375 93.179687 0 168.984375 75.804688 168.984375 168.984375 0 25.246094-5.574219 49.214844-15.542969 70.75 41.847657-10.746094 77.710938-9.671875 80.277344-9.574219 11.003906.40625 19.609375 9.632813 19.25 20.640625-.003906.085938-.007813.167969-.011719.253907.273438 14.433593-.132812 112.355468-58.820312 171.042968zm-157.863282-11.535156c-4.9375-10.9375-10.160156-26.066406-10.273437-44.289062-.070313-10.679688 1.621094-21.082032 5.042969-31.171876-10.066406 1.878907-20.441406 2.867188-31.042969 2.867188-12.628906 0-24.933594-1.402344-36.777344-4.042969 3.914063 10.550781 5.851563 21.351563 5.78125 32.347657-.113281 17.917968-5.613281 32.964843-10.730469 43.800781 17.597657 18.78125 30.351563 34.550781 39.226563 46.539062 8.800781-11.886719 21.414063-27.488281 38.773437-46.050781zm-165.261718-241.578125c0 71.125 57.863281 128.988281 128.988281 128.988281s128.988281-57.863281 128.988281-128.988281-57.863281-128.988281-128.988281-128.988281-128.988281 57.863281-128.988281 128.988281zm6.0625 248.886719c6.5625 0 18.164062-1.628906 27.871094-4.878906-18.945313-18.351563-42.144532-38.941407-70.339844-61.179688-8.671875-6.835938-10.15625-19.414062-3.316406-28.085938 6.839843-8.671874 19.414062-10.15625 28.085937-3.316406 26.648437 21.015625 49.089844 40.667969 67.910156 58.535156 1.03125-4.058593 1.695313-8.386718 1.722657-12.925781.101562-16.148437-8.078126-32.566406-24.308594-48.796875-35.703125-35.703125-92.953125-44.441406-123.023438-46.511718 2.113282 30.09375 10.910156 87.542968 46.476563 123.109374 16.183593 16.183594 32.1875 24.050782 48.921875 24.050782zm0 0"
  }));
});

const Island = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-island",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m467.729 131.351c3.906 3.906 9.023 5.858 14.143 5.858 5.118 0 10.237-1.953 14.142-5.858 7.811-7.811 7.812-20.474.001-28.284-22.138-22.138-51.571-34.33-82.879-34.33-12.278 0-24.264 1.883-35.638 5.497 13.873-20.631 37.431-34.234 64.108-34.234 11.046 0 20-8.954 20-20s-8.954-20-20-20c-40.422 0-76.13 20.569-97.208 51.789-21.079-31.22-56.787-51.789-97.209-51.789-11.046 0-20 8.954-20 20s8.954 20 20 20c26.678 0 50.235 13.603 64.11 34.235-11.375-3.615-23.361-5.498-35.639-5.498-31.308 0-60.741 12.192-82.879 34.33-7.811 7.811-7.81 20.474.001 28.284s20.474 7.811 28.284 0c14.582-14.583 33.971-22.614 54.594-22.614 14.072 0 27.565 3.745 39.353 10.753-41.739 48.465-66.26 108.409-70.475 172.3-50.772 1.884-99.146 21.443-136.988 55.578-31.701 28.597-54.018 65.556-64.606 106.25-7.858-6.579-19.574-6.186-26.958 1.199-7.81 7.811-7.81 20.474.001 28.284 18.635 18.636 43.413 28.899 69.767 28.899 20.148 0 39.376-5.999 55.641-17.152 33.41 22.813 77.832 22.811 111.236-.011 33.405 22.821 77.827 22.824 111.236.011 16.265 11.153 35.493 17.152 55.641 17.152 26.354 0 51.132-10.263 69.768-28.899 7.811-7.81 7.811-20.474.001-28.284-7.385-7.384-19.101-7.777-26.958-1.199-10.588-40.694-32.905-77.653-64.606-106.25-31.888-28.765-71.256-47.175-113.234-53.388 3.978-58.572 27.723-113.274 68.01-156.346 38.784 4.058 69.118 36.942 69.118 76.783 0 11.046 8.954 20 20 20s20-8.954 20-20c0-45.321-25.858-84.714-63.593-104.208 4.928-.973 9.987-1.473 15.123-1.473 20.621.001 40.01 8.032 54.592 22.615zm-42.235 340.346c-1.976.199-3.973.303-5.986.303-15.67 0-30.402-6.103-41.482-17.183-3.751-3.75-8.838-5.858-14.143-5.858s-10.392 2.107-14.142 5.858c-22.875 22.874-60.094 22.874-82.969 0-7.811-7.811-20.473-7.811-28.283 0-22.875 22.874-60.094 22.874-82.969 0-3.75-3.751-8.838-5.858-14.142-5.858-5.305 0-10.392 2.107-14.143 5.858-11.078 11.08-25.811 17.183-41.481 17.183-2.013 0-4.01-.104-5.986-.303 7.656-36.314 26.652-69.439 54.575-94.627 32.486-29.305 74.495-45.443 118.288-45.443 43.794 0 85.803 16.139 118.289 45.443 27.923 25.188 46.919 58.313 54.574 94.627z"
  }));
});

const LightbulbElectricity = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-lightbulb-electricity",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    enableBackground: "new 0 0 512 512",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M256,0C162.59,0,86.867,75.724,86.867,169.133c0,34.924,10.587,67.376,28.725,94.321c33.928,50.4,52.205,109.86,52.205,170.614v0.037c0,15.408,12.491,27.899,27.899,27.899h10.308C206.004,489.616,228.388,512,256,512c27.612,0,49.996-22.384,49.996-49.996h10.308c15.408,0,27.9-12.491,27.9-27.899v-0.037c0-61.042,18.116-119.977,52.205-170.614c18.139-26.945,28.725-59.396,28.725-94.321C425.133,75.724,349.409,0,256,0zM316.872,203.271l-83.631,114.35c-1.903,2.602-5.362,3.527-8.309,2.222c-2.948-1.304-4.589-4.487-3.943-7.644l17.387-85.006h-42.888c-4.141,0-7.93-2.327-9.804-6.019c-1.874-3.692-1.515-8.125,0.93-11.467l83.631-114.35c1.903-2.602,5.362-3.527,8.309-2.222c2.948,1.304,4.589,4.486,3.943,7.644l-17.387,85.006h42.888c4.141,0,7.93,2.327,9.804,6.019C319.676,195.496,319.318,199.929,316.872,203.271z"
  }));
});

const MoneyBag = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-money-bag",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M469.309,376.245l-91.576-239L433.91,29.228c3.225-6.2,2.979-13.633-0.647-19.607C429.636,3.647,423.155,0,416.167,0 c-42.973,0-64.757,6.528-85.823,12.842C311.196,18.58,293.111,24,256.003,24c-37.108,0-55.193-5.42-74.34-11.158 C160.597,6.528,138.813,0,95.84,0c-6.989,0-13.47,3.647-17.096,9.621c-3.626,5.974-3.872,13.407-0.647,19.607l56.177,108.018 l-91.576,239C17.601,441.745,66.169,512,136.163,512h239.68C445.998,512,494.353,441.607,469.309,376.245z M129.777,41.909 c16.483,2.08,28.228,5.6,40.404,9.249C191.247,57.472,213.03,64,256.003,64c42.973,0,64.757-6.528,85.823-12.842 c12.176-3.649,23.921-7.169,40.404-9.249L343.697,116H168.31L129.777,41.909z M375.843,472h-239.68 c-42.132,0-71.216-42.029-56.115-81.442L169.923,156h172.161l89.874,234.557C447.028,429.89,418.05,472,375.843,472z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M268.503,294h-25c-4.136,0-7.5-3.364-7.5-7.5s3.365-7.5,7.5-7.5h52.499c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20 h-20v-5c0-11.046-8.954-20-20-20s-20,8.954-20,20v5.598c-22.639,3.607-39.999,23.263-39.999,46.902 c0,26.191,21.308,47.5,47.499,47.5h25c4.136,0,7.5,3.364,7.5,7.5s-3.364,7.5-7.5,7.5h-52.499c-11.046,0-20,8.954-20,20 c0,11.046,8.954,20,20,20h20v5c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20v-5.598c22.639-3.607,39.999-23.263,39.999-46.902 C316.002,315.309,294.694,294,268.503,294z"
  }))));
});

const MoneyBag2 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-money-bag-2",
    viewBox: "-43 0 512 512.00017",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M 390.25 164.417969 L 420.421875 134.246094 L 390.121094 103.945312 L 423.085938 54.5 L 387.585938 30.835938 L 351.253906 85.332031 L 64.003906 85.332031 L 64.003906 128 L 353.832031 128 Z M 390.25 164.417969 "
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M 119.164062 64 L 307.507812 64 L 335.089844 36.417969 C 348.269531 23.246094 338.566406 0 320.003906 0 L 106.667969 0 C 88.105469 0 78.402344 23.246094 91.582031 36.417969 Z M 119.164062 64 "
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M 414.996094 471.648438 C 414.6875 471.488281 384.003906 455.300781 384.003906 426.667969 C 384.003906 410.109375 386.910156 398.171875 390.9375 381.65625 C 397.335938 355.289062 405.335938 322.480469 405.335938 256 C 405.335938 210.179688 383.582031 175.261719 355.878906 149.332031 L 71.859375 149.332031 C 43.652344 175.410156 21.335938 210.414062 21.335938 256 C 21.335938 308.910156 28.847656 344.046875 34.882812 372.265625 C 39.234375 392.621094 42.667969 408.691406 42.667969 426.667969 C 42.667969 455.300781 11.984375 471.488281 11.792969 471.585938 C 2.945312 476.011719 -1.699219 485.941406 0.574219 495.570312 C 2.847656 505.195312 11.441406 512 21.335938 512 L 405.335938 512 C 415.226562 512.039062 423.847656 505.269531 426.148438 495.652344 C 428.453125 486.03125 423.832031 476.089844 414.996094 471.648438 Z M 277.335938 256 L 192.003906 256 C 180.21875 256 170.667969 265.550781 170.667969 277.332031 C 170.667969 289.117188 180.21875 298.667969 192.003906 298.667969 L 213.335938 298.667969 C 244.496094 298.679688 271.117188 321.132812 276.386719 351.84375 C 281.65625 382.554688 264.042969 412.597656 234.667969 422.996094 L 234.667969 448 L 192.003906 448 L 192.003906 426.667969 L 128.003906 426.667969 L 128.003906 384 L 213.335938 384 C 225.117188 384 234.667969 374.449219 234.667969 362.667969 C 234.667969 350.882812 225.117188 341.332031 213.335938 341.332031 L 192.003906 341.332031 C 156.65625 341.332031 128.003906 312.679688 128.003906 277.332031 C 128.003906 241.988281 156.65625 213.332031 192.003906 213.332031 L 192.003906 192 L 234.667969 192 L 234.667969 213.332031 L 277.335938 213.332031 Z M 277.335938 256 "
  }));
});

const MoneyBallAndChain = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-money-ball-and-chain",
    height: "512pt",
    viewBox: "0 0 512.00013 512",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m507.605469 4.394531c-5.859375-5.859375-15.351563-5.859375-21.210938 0l-27.464843 27.464844c-16.699219-7.863281-37.105469-5.308594-50.894532 8.457031l-13.710937 13.710938c-13.789063 13.789062-16.339844 34.195312-8.457031 50.894531l-26.617188 26.617187c-16.667969-7.484374-37.507812-4.925781-50.769531 8.347657l-11.332031 11.328125c-29.753907-18.402344-64.671876-29.214844-102.148438-29.214844-107.519531 0-195 87.480469-195 195s87.480469 195 195 195 195-87.480469 195-195c0-37.476562-10.8125-72.394531-29.210938-102.144531l11.324219-11.324219c8.496094-8.496094 13.183594-19.804688 13.183594-31.828125 0-6.808594-1.65625-13.3125-4.503906-19.285156l26.28125-26.28125c6.074219 2.867187 12.488281 4.707031 19.066406 4.707031 11.53125 0 23.058594-4.394531 31.832031-13.167969l13.726563-13.710937c13.765625-13.789063 16.3125-34.191406 8.441406-50.894532l27.464844-27.464843c5.859375-5.859375 5.859375-15.351563 0-21.210938zm-297.605469 384.839844v16.5625c0 8.292969-6.710938 15-15 15s-15-6.707031-15-15v-16.726563c-9.898438-3.546874-18.566406-10.210937-23.964844-19.554687-4.160156-7.179687-1.699218-16.347656 5.464844-20.496094 7.175781-4.171875 16.347656-1.710937 20.492188 5.464844 2.679687 4.644531 7.660156 7.515625 13.007812 7.515625 8.277344 0 15-6.726562 15-15 0-8.277344-6.722656-15-15-15-24.8125 0-45-20.1875-45-45 0-19.53125 12.578125-36.023438 30-42.238281v-17.160157c0-8.292968 6.710938-15 15-15s15 6.707032 15 15v17.324219c9.898438 3.546875 18.566406 10.214844 23.964844 19.558594 4.160156 7.179687 1.699218 16.347656-5.464844 20.492187-7.25 4.160157-16.375 1.6875-20.492188-5.460937-2.679687-4.644531-7.660156-7.515625-13.007812-7.515625-8.277344 0-15 6.722656-15 15 0 8.273438 6.722656 15 15 15 24.8125 0 45 20.183594 45 45 0 19.53125-12.578125 36.023438-30 42.234375zm140.902344-206.925781-7.980469 7.984375c-6.523437-7.601563-13.609375-14.691407-21.210937-21.210938l7.996093-7.984375c5.640625-5.671875 15.496094-5.671875 21.195313 0 2.828125 2.839844 4.394531 6.605469 4.394531 10.605469 0 4.011719-1.550781 7.761719-4.394531 10.605469zm99.570312-99.554688-13.710937 13.710938c-5.84375 5.886718-15.351563 5.859375-21.226563 0-5.84375-5.859375-5.84375-15.367188 0-21.226563l13.710938-13.695312c2.929687-2.933594 6.769531-4.398438 10.621094-4.398438 3.835937 0 7.675781 1.464844 10.589843 4.382813 5.859375 5.84375 5.859375 15.378906.015625 21.226562zm0 0"
  }));
});

const MoreButton = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-more-button",
    viewBox: "0 0 990.9 990.9",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M144.2,639.6c79.6,0,144.1-64.5,144.1-144.1c0-79.601-64.5-144.1-144.1-144.1C64.5,351.3,0,415.8,0,495.4 C0,575,64.5,639.6,144.2,639.6z M144.2,425.9c38.3,0,69.5,31.2,69.5,69.5c0,38.301-31.2,69.5-69.5,69.5 c-38.3,0-69.5-31.199-69.5-69.5C74.7,457.1,105.8,425.9,144.2,425.9z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M351.4,495.4C351.4,575,415.9,639.5,495.5,639.5S639.6,575,639.6,495.4c0-79.6-64.5-144.1-144.1-144.1 S351.4,415.8,351.4,495.4z M565,495.4c0,38.301-31.2,69.5-69.5,69.5S426,533.701,426,495.4c0-38.3,31.2-69.5,69.5-69.5 S565,457.1,565,495.4z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M846.8,351.3c-79.6,0-144.1,64.5-144.1,144.1C702.7,575,767.2,639.5,846.8,639.5C926.4,639.5,990.9,575,990.9,495.4 C991,415.8,926.5,351.3,846.8,351.3z M846.8,564.9c-38.3,0-69.5-31.199-69.5-69.5c0-38.3,31.2-69.5,69.5-69.5s69.5,31.2,69.5,69.5 C916.3,533.701,885.2,564.9,846.8,564.9z"
  }));
});

const New$1 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-new",
    enableBackground: "new 0 0 512 512",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m509.991 248.501-30.277-52.448v-60.553c0-5.359-2.859-10.312-7.501-12.991l-52.446-30.276-30.275-52.446c-2.68-4.641-7.632-7.5-12.991-7.5h-60.554l-52.448-30.278c-4.64-2.678-10.357-2.679-14.999 0l-52.447 30.277h-60.553c-5.359 0-10.312 2.859-12.991 7.501l-30.275 52.446-52.447 30.276c-4.642 2.679-7.501 7.631-7.501 12.991v60.553l-30.277 52.448c-2.679 4.641-2.679 10.357 0 14.998l30.276 52.448v60.553c0 5.359 2.859 10.312 7.501 12.991l52.447 30.276 30.276 52.446c2.679 4.642 7.631 7.501 12.991 7.501h60.554l52.447 30.277c2.32 1.339 4.91 2.009 7.5 2.009s5.179-.67 7.499-2.009l52.447-30.277h60.553c5.359 0 10.312-2.859 12.991-7.5l30.275-52.446 52.446-30.276c4.642-2.679 7.501-7.631 7.501-12.991v-60.553l30.277-52.448c2.68-4.642 2.68-10.358.001-14.999zm-327.358 55.699c0 6.61-4.327 12.44-10.653 14.356-6.374 1.928-13.186-.575-16.828-6.036l-36.786-55.179v46.859c0 8.284-6.716 15-15 15s-15-6.716-15-15v-96.4c0-6.61 4.327-12.44 10.653-14.356 6.327-1.914 13.161.536 16.828 6.036l36.786 55.179v-46.859c0-8.284 6.716-15 15-15s15 6.716 15 15zm65.334-63.2c8.284 0 15 6.716 15 15s-6.716 15-15 15h-17.133v18.2h33.2c8.284 0 15 6.716 15 15s-6.716 15-15 15h-48.2c-8.284 0-15-6.716-15-15v-96.4c0-8.284 6.716-15 15-15h48.2c8.284 0 15 6.716 15 15s-6.716 15-15 15h-33.2v18.2zm183.252-29.562-24.1 96.4c-1.618 6.47-7.313 11.096-13.977 11.352-.193.007-.388.011-.58.011-6.432.001-12.178-4.113-14.226-10.257l-17.903-53.71-17.903 53.71c-2.109 6.327-8.143 10.485-14.806 10.246-6.664-.256-12.359-4.882-13.977-11.352l-24.1-96.4c-2.009-8.037 2.877-16.181 10.914-18.189 8.039-2.013 16.181 2.876 18.19 10.914l11.606 46.427 15.844-47.532c2.042-6.125 7.774-10.257 14.23-10.257s12.188 4.132 14.23 10.257l15.844 47.532 11.606-46.427c2.01-8.037 10.154-12.925 18.19-10.914 8.04 2.008 12.927 10.151 10.918 18.189z"
  }));
});

const OnlineShopping = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-online-shopping",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 490.667 490.667",
    enableBackground: "new 0 0 490.667 490.667",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M0,341.333V352c0,29.867,23.467,53.333,53.333,53.333h160v21.333h-74.667c-29.867,0-53.333,23.467-53.333,53.333\nc0,6.4,4.267,10.667,10.667,10.667h298.667c6.4,0,10.667-4.267,10.667-10.667c0-2.133,0-2.133,0-4.267\nC403.2,448,379.733,426.667,352,426.667h-74.667v-21.333h160c29.867,0,53.333-23.467,53.333-53.333v-10.667H0z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M437.333,0h-384C23.467,0,0,23.467,0,53.333V320h490.667V53.333C490.667,23.467,467.2,0,437.333,0z M224,298.667\nc-17.067,0-32-14.933-32-32c0-17.067,14.933-32,32-32c17.067,0,32,14.933,32,32C256,283.733,241.067,298.667,224,298.667z\nM309.333,298.667c-17.067,0-32-14.933-32-32c0-17.067,14.933-32,32-32s32,14.933,32,32\nC341.333,283.733,326.4,298.667,309.333,298.667z M362.667,183.467c0,4.267-4.267,8.533-8.533,8.533L185.6,211.2l8.533,29.867\nc2.133,6.4-2.133,10.667-8.533,12.8h-2.133c-4.267,0-8.533-4.267-10.667-8.533l-42.667-160H96c-6.4,0-10.667-4.267-10.667-10.667\nC85.333,68.267,89.6,64,96,64h42.667c4.267,0,8.533,4.267,10.667,8.533l4.267,12.8h219.733c4.267,0,6.4,2.133,8.533,4.267\nC384,91.733,384,96,384,98.133L362.667,183.467z"
  }))));
});

const PaidBill = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-paid-bill",
    enableBackground: "new 0 0 512.014 512.014",
    height: "512",
    viewBox: "0 0 512.014 512.014",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m32.125 32.134h278.5v-32.125h-310.625v434.875h32.125z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m402.764 293.506c-60.337 0-109.25 48.913-109.25 109.25s48.913 109.25 109.25 109.25 109.25-48.913 109.25-109.25-48.913-109.25-109.25-109.25zm-16.33 156.152-45.446-50.104 22.221-20.154 25.226 27.812 54.884-50.104 20.227 22.156z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m62.125 62.134v372.75 62.125h238.144c-15.133-16.424-25.912-35.881-31.733-56.964h-150.178v-92.125h156.337c6.892-16.089 16.855-30.879 29.605-43.629 19.076-19.076 42.713-31.929 68.45-37.555v-204.602zm112.866 224.45v24.049h-30v-23.688c-18.646-5.939-32.192-23.418-32.192-44.007h30c0 8.921 7.257 16.178 16.177 16.178h.873c9.23 0 16.739-7.509 16.739-16.739s-7.509-16.739-16.739-16.739h-.563c-25.772 0-46.739-20.967-46.739-46.739 0-20.788 13.644-38.441 32.445-44.496v-23.763h30v24.183c18.164 6.422 31.217 23.757 31.217 44.093h-30c0-9.241-7.518-16.759-16.759-16.759h-.164c-9.23 0-16.739 7.509-16.739 16.739s7.509 16.74 16.739 16.74h.563c25.772 0 46.739 20.967 46.739 46.739 0 20.475-13.237 37.903-31.597 44.209zm149.167-23.075h-80.943v-30h80.943zm0-62.125h-80.943v-30h80.943zm0-62.125h-80.943v-30h80.943z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m148.358 377.92v32.125h115.346c-.558-10.747.113-21.455 2.012-32.125z"
  })));
});

const PeopleLiftWorld = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    enableBackground: "new 0 0 512 512",
    id: "applab-icon-basic-people-lift-world",
    height: "512",
    viewBox: "0 0 512 512",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m181 391h-60c-33.091 0-61-26.909-61-60v-15c0-24.853-20.147-45-45-45h-15v60c0 66.167 54.833 120 121 120v61h120v-61c0-33.091-26.909-60-60-60z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m451 316v15c0 33.091-26.909 60-60 60h-60c-33.091 0-60 26.909-60 60v61h120v-61c66.167 0 121-53.833 121-120v-60h-15c-24.853 0-46 20.147-46 45z"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "181",
    cy: "346",
    r: "45"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "331",
    cy: "346",
    r: "45"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m226 61c8.276 0 15-6.724 15-15v-46c-84.086 7.588-150 79.937-150 166 0 15.626 2.331 30.677 6.394 45h38.606c8.276 0 15-6.724 15-15v-15h75c8.276 0 15-6.724 15-15s-6.724-15-15-15c-24.814 0-45-20.186-45-45s20.186-45 45-45z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m376 211h38.606c4.063-14.323 6.394-29.374 6.394-45 0-5.063-.309-10.052-.756-15h-74.244c-8.276 0-15 6.724-15 15s6.724 15 15 15h15v15c0 8.276 6.724 15 15 15z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m331 271c15.126 0 29.169 4.581 40.964 12.316 12.431-12.288 22.784-26.614 30.833-42.316h-26.797c-20.273 0-37.456-13.477-43.066-31.934-18.457-5.61-31.934-22.793-31.934-43.066 0-24.814 20.186-45 45-45h68.628c-18.292-64.579-74.804-114.789-143.628-121v46c0 24.814-20.186 45-45 45-8.276 0-15 6.724-15 15s6.724 15 15 15c24.814 0 45 20.186 45 45s-20.186 45-45 45h-47.563c-6.196 17.461-22.881 30-42.437 30h-26.797c8.049 15.701 18.402 30.027 30.833 42.316 11.795-7.735 25.838-12.316 40.964-12.316 36.189 0 66.475 25.772 73.475 59.923.515.005 1.011.077 1.525.077s1.011-.071 1.525-.077c7-34.151 37.286-59.923 73.475-59.923z"
  })));
});

const PersonalCare = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-personal-care",
    height: "512",
    viewBox: "0 0 128 128",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m121.479 56.305-2.872-1.57-1.571-2.873a1.615 1.615 0 0 0 -1.416-.839 1.617 1.617 0 0 0 -1.416.84l-1.571 2.872-2.871 1.57a1.614 1.614 0 0 0 0 2.833l2.872 1.571 1.57 2.87a1.612 1.612 0 0 0 1.416.841 1.614 1.614 0 0 0 1.417-.84l1.57-2.871 2.872-1.571a1.615 1.615 0 0 0 0-2.833z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m33.712 6.821-1.425-.78-.78-1.426a1.347 1.347 0 0 0 -2.363 0l-.78 1.426-1.425.779a1.348 1.348 0 0 0 0 2.365l1.426.779.78 1.426a1.347 1.347 0 0 0 2.363 0l.78-1.425 1.426-.78a1.347 1.347 0 0 0 0-2.363z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m19.026 20.675-2.214-1.211-1.212-2.214a1.492 1.492 0 0 0 -2.619 0l-1.212 2.215-2.216 1.21a1.494 1.494 0 0 0 0 2.62l2.215 1.211 1.212 2.214a1.492 1.492 0 0 0 2.619 0l1.212-2.215 2.215-1.205a1.493 1.493 0 0 0 0-2.62z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m54.185 105.108a28.192 28.192 0 0 0 -11.625-14.421 80.237 80.237 0 0 0 -10.778-5.565c-2.629-.87-4.1 3.1-1.69 4.458 3.313 1.868 9.011 5.435 9.732 7.722a1.5 1.5 0 0 1 -1.431 1.951 1.719 1.719 0 0 1 -1.431-1.053 16.513 16.513 0 0 0 -4.877-5.042 22.263 22.263 0 0 1 -4.293-4.281c-2.507-3.289-5-9.049-8.618-9.649-1.6-.265-3.209.85-3.088 2.352.3 3.768 10.324 19.614 14.192 23.44 2.628 2.6 9.107 6.8 11.333 11.109 1.2 2.327 1.336 5.763 1.655 7.051a2.2 2.2 0 0 0 1.3 1.608c1.758.833 10.128.757 11.67-.552a2.162 2.162 0 0 0 .764-1.357c.763-4.023-1.56-14.559-2.815-17.771z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m73.815 105.108a28.192 28.192 0 0 1 11.625-14.421 80.237 80.237 0 0 1 10.778-5.565c2.629-.87 4.1 3.1 1.69 4.458-3.308 1.868-9.008 5.435-9.732 7.72a1.5 1.5 0 0 0 1.431 1.951 1.719 1.719 0 0 0 1.431-1.051 16.513 16.513 0 0 1 4.877-5.042 22.263 22.263 0 0 0 4.293-4.281c2.507-3.289 5-9.049 8.618-9.649 1.6-.265 3.209.85 3.088 2.352-.3 3.768-10.324 19.614-14.192 23.44-2.628 2.6-9.107 6.8-11.333 11.109-1.2 2.327-1.336 5.763-1.655 7.051a2.2 2.2 0 0 1 -1.3 1.608c-1.758.833-10.128.757-11.67-.552a2.162 2.162 0 0 1 -.764-1.357c-.763-4.023 1.56-14.559 2.815-17.771z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m82.852 16.956a22.585 22.585 0 0 0 -17.345 8.307 2 2 0 0 1 -3.121 0 22.583 22.583 0 0 0 -17.345-8.307c-12.87 0-21.635 11.2-21.635 25.013 0 8.261 4.4 21.631 13.018 29.687 12.269 11.47 22.7 14.422 26.236 15.132a6.523 6.523 0 0 0 2.578 0c3.539-.709 13.963-3.661 26.231-15.131 8.617-8.056 13.018-21.426 13.018-29.687 0-13.815-8.765-25.014-21.635-25.014zm-26.043 32.83a1.5 1.5 0 0 1 -2.121-.062 3.914 3.914 0 0 0 -4.158-.424 1.5 1.5 0 0 1 -1.83-2.383c1.743-1.339 5.939-1.615 8.169.749a1.5 1.5 0 0 1 -.06 2.12zm7.138 12.223a3.928 3.928 0 0 1 -4.168-3.568.964.964 0 0 1 .942-1.133h6.451a.964.964 0 0 1 .942 1.133 3.928 3.928 0 0 1 -4.167 3.568zm15.519-12.988a1.5 1.5 0 0 1 -2.1.275 3.914 3.914 0 0 0 -4.158.428 1.5 1.5 0 0 1 -2.183-2.058c2.229-2.363 6.427-2.088 8.169-.749a1.5 1.5 0 0 1 .272 2.104z"
  }));
});

const PieChart$1 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-pie-chart",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m238 218v-198c0-11.046875-8.953125-20-20-20-120.480469 0-218 97.5-218 218 0 11.046875 8.953125 20 20 20h198c11.046875 0 20-8.953125 20-20zm-40-20h-156.882812c9.230468-82.210938 74.671874-147.652344 156.882812-156.882812zm96-122c-11.046875 0-20 8.953125-20 20v178h-178c-11.046875 0-20 8.953125-20 20 0 120.480469 97.5 218 218 218 120.480469 0 218-97.5 218-218 0-120.480469-97.5-218-218-218zm0 396c-91.390625 0-166.917969-69.226562-176.882812-158h176.882812c11.046875 0 20-8.953125 20-20v-176.882812c88.773438 9.964843 158 85.492187 158 176.882812 0 98.148438-79.851562 178-178 178zm0 0"
  }));
});

const PieChart2 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-pie-chart-2",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M256,0C114.508,0,0,114.497,0,256c0,141.492,114.497,256,256,256c141.492,0,256-114.497,256-256 C512,114.508,397.503,0,256,0z M276,40.921C379.369,50.35,461.652,132.655,471.079,236h-110.98 c-8.137-42.439-41.66-75.962-84.099-84.099V40.921z M322,256c0,18.151-7.367,34.613-19.266,46.556 c-0.03,0.03-0.063,0.055-0.093,0.085c-0.03,0.03-0.054,0.063-0.084,0.093C290.613,314.633,274.151,322,256,322 c-36.393,0-66-29.607-66-66s29.607-66,66-66S322,219.607,322,256z M256,472c-119.385,0-216-96.608-216-216 c0-113.397,86.805-205.118,196-215.079v110.98c-48.918,9.38-86,52.487-86,104.099c0,58.448,47.552,106,106,106 c22.011,0,42.476-6.746,59.438-18.276l78.503,78.503C355.248,454.45,306.976,472,256,472z M422.227,393.941l-78.503-78.503 c7.949-11.695,13.618-25.055,16.375-39.438h110.98C467.108,319.535,450.202,360.349,422.227,393.941z"
  }));
});

const PiggyBank = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-piggy-bank",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", {
    cx: "379",
    cy: "264",
    r: "20"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M492,259c-12.89,0-21.853-1.826-25.238-5.141c-3.121-3.057-5.129-10.567-7.455-19.265l-0.219-0.818 c-1.437-5.365-2.551-10.641-3.629-15.742c-3.318-15.703-6.731-31.857-18.891-46.141c2.671-21.221,12.427-54.316,16.453-66.71 L461.532,79H434c-23.962,0-46.463,8.396-65.07,24.278c-8.428,7.194-15.019,15.028-19.909,21.872 c-2.101-0.423-4.269-0.817-6.465-1.198c2.972-9.301,4.51-19.057,4.51-28.952c0-52.383-42.617-95-95-95s-95,42.617-95,95 c0,14.159,3.148,28.032,9.151,40.69c-14.984,6.208-28.576,14.007-40.551,23.339C90.521,186.418,70.561,225.975,67.443,274h-8.11 c-0.051,0-5.619-0.253-10.723-2.806c-4.257-2.129-8.61-5.756-8.61-16.527c0-10.43,3.929-14.027,7.772-16.171 c4.418-2.463,9.782-3.12,11.476-3.165L59,235.333v-40c-2.422,0-15.182,0.34-28.505,7.059C10.83,212.309,0,230.873,0,254.667 c0,23.823,10.911,42.399,30.723,52.305c13.378,6.689,26.18,7.028,28.61,7.028h9.664c5.449,36.293,21.807,69.877,45.624,92.709 L127.256,512H221v-61.296c12.745,2.133,26.031,3.296,42.867,3.296c7.888,0,15.574-0.245,23.032-0.504L294.401,512H387v-66.521 c50.959-12.498,93.082-47.194,122.558-101.234l2.442-4.478V259H492z M252.067,40c30.327,0,55,24.673,55,55 c0,8.472-1.937,16.761-5.632,24.27c-13.161-0.883-26.142-1.27-37.568-1.27c-20.772,0-40.415,1.958-58.67,5.789 c-5.317-8.633-8.13-18.577-8.13-28.789C197.067,64.673,221.74,40,252.067,40z M472,329.46L472,329.46 c-26.614,46.479-62.875,73.302-107.836,79.742L347,411.661V472h-17.401l-7.611-59.354l-17.914,0.318 c-5.495,0.098-11.093,0.294-16.506,0.483C279.81,413.72,271.786,414,263.867,414c-23.866,0-38.271-2.495-58.042-7.409L181,400.42 V472h-18.256l-10.246-85.378l-6.068-5.085C122.108,361.156,107,325.11,107,287.467C107,206.398,165.642,158,263.867,158 c26.966,0,66.349,2.394,88.596,9.14l15.652,4.746l7.758-14.398c4.147-7.696,13.563-22.179,29.331-31.017 c-4.495,17.307-8.898,37.707-9.291,52.401l-0.253,9.467l7.164,6.195c7.95,6.875,9.99,15.163,13.499,31.771 c1.131,5.353,2.414,11.42,4.125,17.815l0.217,0.811c3.522,13.169,7.165,26.787,18.108,37.505 c8.123,7.956,18.909,12.919,33.227,15.16V329.46z"
  }))));
});

const Pizza = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-pizza",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M386.88,16L257.472,240h253.696c0.48-4.512,0.832-8.864,0.832-13.44C512,135.68,461.44,56.64,386.88,16z M400,192 c-17.664,0-32-14.336-32-32s14.336-32,32-32s32,14.336,32,32S417.664,192,400,192z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M257.472,272h-55.424l27.712-48L337.696,37.184C307.136,23.456,273.888,16,240,16C107.648,16,0,123.648,0,256 s107.648,240,240,240c126.944,0,230.912-99.136,239.2-224H257.472z M240,80c8.832,0,16,7.168,16,16c0,8.832-7.168,16-16,16 c-8.832,0-16-7.168-16-16C224,87.168,231.168,80,240,80z M111.008,208c8.832,0,16,7.168,16,16c0,8.832-7.168,16-16,16 c-8.832,0-16-7.168-16-16C95.008,215.168,102.176,208,111.008,208z M128,368c-17.664,0-32-14.336-32-32s14.336-32,32-32 s32,14.336,32,32S145.664,368,128,368z M160,176c-17.664,0-32-14.336-32-32s14.336-32,32-32s32,14.336,32,32S177.664,176,160,176z M224,400c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16C240,392.832,232.832,400,224,400z M320,400 c-17.664,0-32-14.336-32-32s14.336-32,32-32s32,14.336,32,32S337.664,400,320,400z M400,336c-8.832,0-16-7.168-16-16 c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16C416,328.832,408.832,336,400,336z"
  }))));
});

const PlayStore = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-play-store",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512.029 512.029",
    enableBackground: "new 0 0 512.029 512.029",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M111.758,8.189C91.726-2.883,68.206-2.627,48.302,8.349l233.28,215.2l78.368-78.368L111.758,8.189z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M24.974,30.365c-5.696,9.312-8.96,19.968-8.96,31.264v388.672c0,10.944,2.976,21.376,8.352,30.496l234.592-234.592\nL24.974,30.365z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M463.854,202.525l-74.752-41.248l-84,83.968l102.944,94.944l55.84-30.816c20.096-11.136,32.128-31.104,32.128-53.44\nC495.982,233.597,483.982,213.629,463.854,202.525z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M282.478,267.901L47.246,503.133c10.208,5.824,21.408,8.896,32.672,8.896c10.88,0,21.824-2.752,31.84-8.288\nl266.784-147.232L282.478,267.901z"
  }))));
});

const RightArrow = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-right-arrow",
    viewBox: "0 0 464 464",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M459.733,221.965L285.653,47.459c-2.941-2.887-6.984-4.365-11.093-4.053c-7.846,0.115-14.179,6.447-14.293,14.293v75.733 c0,5.891-4.776,10.667-10.667,10.667H14.293C6.447,144.213,0.115,150.546,0,158.392v146.773c0.009,3.844,1.544,7.527,4.267,10.24 c2.7,2.743,6.391,4.281,10.24,4.267h235.947c5.891,0,10.667,4.776,10.667,10.667v75.733c-0.149,7.893,6.128,14.412,14.02,14.561 c3.951,0.075,7.757-1.49,10.513-4.321l174.08-174.08c2.69-2.648,4.224-6.252,4.267-10.027 C463.991,228.361,462.456,224.678,459.733,221.965z"
  }));
});

const Safe = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-safe",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m492 0h-472c-11.046 0-20 8.954-20 20v432c0 11.046 8.954 20 20 20h60v20c0 11.046 8.954 20 20 20s20-8.954 20-20v-20h272v20c0 11.046 8.954 20 20 20s20-8.954 20-20v-20h60c11.046 0 20-8.954 20-20v-432c0-11.046-8.954-20-20-20zm-452 201.333h40v69.333h-40zm432 230.667h-432v-121.333h40v61.333c0 11.046 8.954 20 20 20h312c11.046 0 20-8.954 20-20v-272c0-11.046-8.954-20-20-20h-312c-11.046 0-20 8.954-20 20v61.333h-40v-121.333h432zm-352-80v-232h272v232zm136-176c-33.084 0-60 26.916-60 60s26.916 60 60 60 60-26.916 60-60-26.916-60-60-60zm0 80c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z"
  }));
});

const Search$1 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 30.239 30.239",
    width: "100%",
    height: "100%",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M20.194 3.46c-4.613-4.613-12.121-4.613-16.734 0-4.612 4.614-4.612 12.121 0 16.735 4.108 4.107 10.506 4.547 15.116 1.34.097.459.319.897.676 1.254l6.718 6.718a2.498 2.498 0 003.535 0 2.496 2.496 0 000-3.535l-6.718-6.72a2.5 2.5 0 00-1.253-.674c3.209-4.611 2.769-11.008-1.34-15.118zm-2.121 14.614c-3.444 3.444-9.049 3.444-12.492 0-3.442-3.444-3.442-9.048 0-12.492 3.443-3.443 9.048-3.443 12.492 0 3.444 3.444 3.444 9.048 0 12.492z"
  }));
});

const SearchMagnifyingGlass = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-search-magnifying-glass",
    enableBackground: "new 0 0 512 512",
    height: "512",
    viewBox: "0 0 512 512",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m103.6 342.083-84.197 72.169c-24.574 21.063-26.015 58.588-3.129 81.474 22.886 22.886 60.411 21.445 81.474-3.129l72.169-84.197zm-44.899 126.217c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m161.717 292.268-35.273 30.234 63.053 63.053 30.234-35.273c-22.961-15.302-42.711-35.052-58.014-58.014z"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m334.5 0c-97.874 0-177.5 79.626-177.5 177.5s79.626 177.5 177.5 177.5 177.5-79.626 177.5-177.5-79.626-177.5-177.5-177.5zm0 282.5c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm40.527-115.643c-6.992 7.365-15.875 12.64-25.527 15.345v25.298c0 8.284-6.716 15-15 15s-15-6.716-15-15v-38.228c0-8.284 6.716-15 15-15 7.163 0 13.83-2.866 18.771-8.071 4.938-5.201 7.452-12.024 7.079-19.213-.699-13.457-11.815-24.211-25.309-24.482-13.121-.309-24.371 9.302-26.178 22.251-.167 1.191-.251 2.414-.251 3.63 0 8.284-6.716 15-15 15s-15-6.716-15-15c0-2.597.181-5.213.538-7.774 3.907-27.992 28.192-48.688 56.495-48.101 29.142.586 53.153 23.832 54.663 52.922.805 15.486-4.621 30.197-15.281 41.423z"
  })));
});

const ServiceVan = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-service-van",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 226.334 226.334",
    enableBackground: "new 0 0 226.334 226.334",
    xmlSpace: "preserve",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M221.334,127.223h-1V70.251c0-7.98-6.492-14.472-14.473-14.472H100.167H65.704c-0.055,0-0.11,0.001-0.166,0.003\nc-0.429-0.012-0.867,0.027-1.295,0.126c-1.396,0.324-2.586,1.232-3.268,2.494l-6.944,12.85l-9.78,17.281\nc-0.35,0.213-0.739,0.367-1.157,0.409l-21.139,2.173C15.14,91.816,10,97.511,10,104.362v22.86H5c-1.484,0-2.892,0.66-3.842,1.8\nc-0.95,1.141-1.344,2.644-1.076,4.104l3,16.313c0.437,2.373,2.505,4.096,4.917,4.096h14.126c2.271,9.74,11.018,17.02,21.44,17.02\ns19.169-7.28,21.44-17.02h91.201c2.271,9.74,11.018,17.02,21.44,17.02s19.169-7.28,21.44-17.02h22.247c2.762,0,5-2.239,5-5v-16.313\nC226.334,129.461,224.095,127.223,221.334,127.223z M43.566,160.555c-6.627,0-12.02-5.392-12.02-12.02s5.392-12.02,12.02-12.02\ns12.02,5.392,12.02,12.02S50.194,160.555,43.566,160.555z M95.167,82.973c0,2.16-1.757,3.917-3.917,3.917H56.671l11.948-21.111\nh26.547V82.973z M145.118,124.894c-1.126,1.126-2.623,1.746-4.215,1.746s-3.089-0.62-4.215-1.746c-2.324-2.324-2.324-6.105,0-8.43\nl21.284-21.285c-2.343-5.704-1.076-12.387,3.363-16.826c3.094-3.092,7.309-4.707,11.698-4.501c0.988,0.048,1.854,0.674,2.211,1.597\nc0.356,0.922,0.135,1.969-0.564,2.668l-6.087,6.087c-0.276,0.276-0.317,0.598-0.317,0.766s0.041,0.489,0.317,0.765l7.253,7.253\nc0.276,0.275,0.598,0.317,0.766,0.317c0.167,0,0.489-0.042,0.766-0.317l6.087-6.086c0.7-0.701,1.746-0.921,2.668-0.564\nc0.923,0.356,1.549,1.223,1.597,2.211c0.211,4.363-1.43,8.627-4.501,11.698c-2.919,2.918-6.8,4.526-10.929,4.526\nc-2.027,0-4.034-0.398-5.896-1.163L145.118,124.894z M177.647,160.555c-6.628,0-12.02-5.392-12.02-12.02s5.392-12.02,12.02-12.02\ns12.02,5.392,12.02,12.02S184.275,160.555,177.647,160.555z"
  }));
});

const Shirt = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-shirt",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    enableBackground: "new 0 0 512 512",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M400.907,138.616v-0.003l-0.004-0.002v-0.001l-67.824-27.01c-0.785,3.893-2.036,8.898-4.012,14.43\nc-1.539,4.31-3.516,8.948-6.058,13.625c-0.04,0.099-0.099,0.189-0.149,0.288c-13.705,25.016-36.159,38.234-64.939,38.234\nc-28.492,0-51.443-13.029-66.369-37.668c-0.288-0.477-0.566-0.953-0.844-1.43c-2.691-4.628-4.846-9.196-6.544-13.427\nc-2.225-5.522-3.675-10.467-4.608-14.201l-68.405,27.142v0.004l-0.001-0.001L8.206,259.383l83.033,80.018l19.91-20.408V512\nh289.758V319.051L420.76,339.4l83.034-80.017L400.907,138.616z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M270.919,100.785V87.924c17.64-6.17,30.329-22.983,30.329-42.703C301.247,20.286,280.961,0,256.026,0\nc-24.936,0-45.222,20.286-45.222,45.222h29.793c0-8.507,6.922-15.428,15.429-15.428s15.428,6.921,15.428,15.428\nc0,8.507-6.922,15.428-15.428,15.428h-14.88l-0.02,40.135h-33.417c0.367,1.946,1.639,7.865,4.578,14.896\nc1.351,3.218,3.049,6.684,5.184,10.1c1.063,1.698,2.165,3.297,3.327,4.797c9.166,11.967,21.372,17.806,37.122,17.806\nc15.701,0,27.44-5.839,35.752-17.806c0.924-1.331,1.807-2.741,2.652-4.231c2.016-3.555,3.575-7.23,4.767-10.666\nc2.433-6.972,3.387-12.94,3.655-14.896H270.919z"
  }))));
});

const ShoppingBags = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-shopping-bags",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M496,256h-48v-16c0-44.096-35.872-80-80-80s-80,35.904-80,80v16h-48c-8.832,0-16,7.168-16,16v176 c0,35.296,28.704,64,64,64h160c35.296,0,64-28.704,64-64V272C512,263.168,504.832,256,496,256z M416,256h-96v-16 c0-26.464,21.536-48,48-48s48,21.536,48,48V256z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M304,128h-48V96c0-52.928-43.072-96-96-96c-52.928,0-96,43.072-96,96v32H16c-8.832,0-16,7.168-16,16v304 c0,35.296,28.704,64,64,64h152.96C201.632,494.976,192,472.672,192,448V272c0-26.464,21.536-48,48-48h17.152 c5.344-37.28,29.344-68.288,61.984-84.288C317.248,133.024,311.328,128,304,128z M224,128H96V96c0-35.296,28.704-64,64-64 s64,28.704,64,64V128z"
  }))));
});

const ShoppingBasket = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-shopping-basket",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    enableBackground: "new 0 0 512 512",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m377.679 177.715 11.786-22.755c-18.218-27.365-49.195-44.365-82.718-44.365-21.263 0-42.088 7.146-59.25 19.654l22.037 47.466z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m335.589 258.974 27.068-52.259h-213.723l27.068 52.259c3.21 6.198 5.06 12.742 5.688 19.298h148.21c.629-6.556 2.479-13.1 5.689-19.298z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m66.375 278.272-36.203-69.892c-17.408 5.059-30.172 21.142-30.172 40.161v29.731z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m429.668 308.272c-10.185 19.224-30.673 30.193-52.352 27.967-6.647-.683-13.037-2.593-18.994-5.679-9.957-5.157-17.586-13.053-22.467-22.288h-160.118c-4.881 9.235-12.51 17.131-22.467 22.288-5.957 3.086-12.347 4.996-18.994 5.679-21.679 2.226-42.167-8.742-52.352-27.967h-49.849l29.975 203.728h387.9l29.975-203.728zm-287.564 163.431h-30v-104.019h30zm64.304 0h-30v-104.019h30zm64.305 0h-30v-104.019h30zm64.305 0h-30v-104.019h30zm64.304 0h-30v-104.019h30z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m445.217 278.272h66.783v-29.731c0-19.148-12.938-35.32-30.528-40.263z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m107.435 294.49c6.124 11.824 20.674 16.444 32.498 10.32 11.824-6.124 16.444-20.674 10.32-32.498l-107.397-207.341-42.817 22.178z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m361.34 272.312c-6.124 11.824-1.504 26.373 10.32 32.498 11.824 6.124 26.373 1.504 32.498-10.32l107.395-207.341-42.817-22.178z"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m127.509 65.548v62.775l-9.316 19.043 15.72 30.349h103.648l-25.904-55.796v-56.371z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m127.509 0h84.148v35.548h-84.148z"
  })));
});

const SmartPhone = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-smart-phone",
    x: "0px",
    y: "0px",
    viewBox: "0 0 503.604 503.604",
    enableBackground: "new 0 0 503.604 503.604",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M337.324,0H167.192c-28.924,0-53.5,23.584-53.5,52.5v398.664c0,28.916,24.056,52.44,52.98,52.44l170.412-0.184\nc28.92,0,52.58-23.528,52.58-52.448l0.248-398.5C389.908,23.452,366.364,0,337.324,0z M227.68,31.476h49.36\nc4.336,0,7.868,3.52,7.868,7.868c0,4.348-3.532,7.868-7.868,7.868h-49.36c-4.348,0-7.868-3.52-7.868-7.868\nC219.812,34.996,223.332,31.476,227.68,31.476z M198.02,33.98c2.916-2.912,8.224-2.952,11.136,0c1.46,1.456,2.324,3.5,2.324,5.588\nc0,2.048-0.864,4.088-2.324,5.548c-1.452,1.46-3.504,2.32-5.548,2.32c-2.084,0-4.088-0.86-5.588-2.32\nc-1.452-1.456-2.28-3.5-2.28-5.548C195.736,37.48,196.568,35.436,198.02,33.98z M250.772,488.008\nc-12.984,0-23.544-10.568-23.544-23.548c0-12.984,10.56-23.548,23.544-23.548s23.544,10.564,23.544,23.548\nC274.316,477.44,263.752,488.008,250.772,488.008z M365.488,424.908H141.232V74.756h224.256V424.908z"
  }));
});

const SortNumberAsc = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-sort-number-asc",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "511.63px",
    height: "511.63px",
    viewBox: "0 0 511.63 511.63",
    enableBackground: "new 0 0 511.63 511.63",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816\nc-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708\nc-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562\nl91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584\nC245.068,402.847,242.881,401.991,240.214,401.991z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841\nc-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409\nc8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538\ns-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265\nc3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994\nc11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537\nc2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288\nc-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124\nc0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13\nc8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853\nc-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554\nL358.979,60.817z"
  }))));
});

const SortNumberDesc = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-sort-number-desc",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "511.63px",
    height: "511.63px",
    viewBox: "0 0 511.63 511.63",
    enableBackground: "new 0 0 511.63 511.63",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816\nc-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709\nc-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56\nl91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581\nC245.068,402.85,242.881,401.994,240.214,401.994z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854\nl1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902\nv-32.544h-47.109V292.369H407.804z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845\nc-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417\nc8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54\nc-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14\nl-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993\nc11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548\nc2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929\nc-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122\nc0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131\nc8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z"
  }))));
});

const SortStringAsc = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-sort-string-asc",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "511.626px",
    height: "511.627px",
    viewBox: "0 0 511.626 511.627",
    enableBackground: "new 0 0 511.626 511.627",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461\nc-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708\nc-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562\nl91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584\nC220.086,402.847,217.9,401.991,215.232,401.991z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M428.511,479.082h-70.808c-3.997,0-6.852,0.191-8.559,0.568l-4.001,0.571v-0.571l3.142-3.142\nc2.848-3.419,4.853-5.896,5.996-7.409l105.344-151.331v-25.406H297.744v65.377h34.263v-32.832h66.236\nc3.422,0,6.283-0.288,8.555-0.855c0.572,0,1.287-0.048,2.143-0.145c0.853-0.085,1.475-0.144,1.852-0.144v0.855l-3.142,2.574\nc-1.704,1.711-3.713,4.273-5.995,7.706L296.31,485.934v25.693h166.734v-66.521h-34.54v33.976H428.511z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M468.475,189.008L402.807,0h-46.25l-65.664,189.008h-19.979v30.264h81.933v-30.264h-21.409l13.419-41.112h69.381\nl13.415,41.112H406.25v30.264h82.228v-30.264H468.475z M354.278,116.487l20.841-62.241c0.76-2.285,1.479-5.046,2.143-8.28\nc0.66-3.236,0.996-4.949,0.996-5.139l0.855-5.708h1.143c0,0.761,0.191,2.664,0.562,5.708l3.433,13.418l20.554,62.241H354.278z"
  }))));
});

const SortStringDesc = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-sort-string-desc",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "511.626px",
    height: "511.627px",
    viewBox: "0 0 511.626 511.627",
    enableBackground: "new 0 0 511.626 511.627",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461\nc-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708\nc-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562\nl91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584\nC220.086,402.847,217.9,401.991,215.232,401.991z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M468.475,481.361l-65.664-189.01h-46.25L290.9,481.364H270.92v30.263h81.934v-30.266h-21.412l13.418-41.11h69.381\nl13.415,41.11H406.25v30.266h82.228v-30.266H468.475z M354.278,408.846l20.841-62.242c0.76-2.283,1.479-5.045,2.143-8.278\nc0.66-3.234,0.996-4.948,0.996-5.137l0.855-5.715h1.143c0,0.767,0.191,2.669,0.562,5.715l3.433,13.415l20.554,62.242H354.278z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M463.055,152.745h-34.537v33.975H357.71c-4.001,0-6.852,0.097-8.556,0.288l-4.004,0.854v-0.854l3.142-2.858\nc2.851-3.422,4.853-5.896,5.996-7.421L459.632,25.41V0H297.754v65.387h34.259V32.552h66.232c3.426,0,6.283-0.288,8.56-0.859\nc0.571,0,1.286-0.048,2.142-0.144c0.855-0.094,1.476-0.144,1.854-0.144v0.855l-3.141,2.568c-1.708,1.713-3.71,4.283-5.996,7.71\nL296.32,193.569v25.697h166.735V152.745z"
  }))));
});

const SortUpDown = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-sort-up-down",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 479.71 479.71",
    enableBackground: "new 0 0 479.71 479.71",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M469.936,328.847c-0.96-0.927-1.977-1.792-3.045-2.592c-13.381-8.971-31.276-7.013-42.4,4.64l-10.08,10.08\nc-3.469,3.481-6.383,7.474-8.64,11.84l-6.24,12V66.575c0.634-16.247-10.62-30.552-26.56-33.76\nc-17.486-2.564-33.74,9.534-36.303,27.02c-0.242,1.649-0.354,3.314-0.337,4.98v299.52l-4.32-9.44\nc-2.335-5.046-5.529-9.648-9.44-13.6l-10.56-10.56c-11.124-11.653-29.019-13.611-42.4-4.64\nc-14.259,10.441-17.355,30.464-6.914,44.724c0.844,1.152,1.764,2.247,2.754,3.276l80,80c12.49,12.504,32.751,12.515,45.255,0.025\nc0.008-0.008,0.017-0.017,0.025-0.025l80-80C483.006,361.38,482.65,341.122,469.936,328.847z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M214.411,104.655l-78.88-79.04C123.041,13.111,102.78,13.1,90.276,25.59c-0.008,0.008-0.017,0.017-0.025,0.025l-80,80\nc-11.653,11.124-13.611,29.019-4.64,42.4c10.441,14.259,30.464,17.355,44.724,6.914c1.152-0.844,2.247-1.764,3.276-2.754\nl10.88-10.88c5.215-5.219,9.158-11.57,11.52-18.56l4.32-9.92v302.24c-0.607,16.347,10.812,30.689,26.88,33.76\nc17.445,2.829,33.881-9.019,36.71-26.465c0.297-1.83,0.434-3.682,0.41-5.535v-304l3.2,9.12c2.403,6.746,6.284,12.869,11.36,17.92\nl11.52,11.52c12.492,12.501,32.753,12.509,45.255,0.017c0.621-0.621,1.217-1.267,1.785-1.937\nC228.183,135.984,226.864,116.552,214.411,104.655z"
  }))));
});

const SpaFacial = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-spa-facial",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "959.199px",
    height: "959.199px",
    viewBox: "0 0 959.199 959.199",
    enableBackground: "new 0 0 959.199 959.199",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M788.143,259.2c-16.699-44.2-41.399-81.7-73.399-111.5c-32.7-30.5-73-52.8-120-66.5c0,0,0,0-0.101-0.1\nc-52.3-52.3-121.9-81.1-195.9-81.1s-143.5,28.8-195.8,81.1c-52.3,52.3-81.1,121.9-81.1,195.9c0,18.9,1.9,37.5,5.6,55.7\nc-14.3,41.7-20.8,85.9-19.4,132.101c2.4,78.5,27.9,160.899,75.6,244.899c0.1,0.102,0.2,0.301,0.3,0.4\nc18.6,140.6,138.9,249.1,284.6,249.1c128.3,0,237-84.199,273.8-200.398c9.8-7.5,19.101-15.602,27.9-24.5\nc52.3-52.301,81.1-121.9,81.1-195.9c0-50.9-13.6-99.701-39.1-142.201C812.443,370.3,809.843,316.5,788.143,259.2z M597.643,705.199\nc-33.5,0-60.6-27.1-60.6-60.6s27.1-60.6,60.6-60.6s60.601,27.1,60.601,60.6S631.043,705.199,597.643,705.199z M630.843,435.2h145.9\nc16.2,31.601,24.7,66.701,24.7,103.201c0,50-16.101,97.5-45.801,136.699c0-1,0-2.1,0-3.1\nC755.643,573.699,706.143,486.9,630.843,435.2z M762.143,385.2h-20.3c-76.8,0-153.399-1.2-230.3-1.3\nc-55.8,0-112.901,5-163.901,27.7c-83.399,37.1-133.399,117.099-155.1,203c-1.2-2.9-2.3-5.799-3.5-8.699\nc-19.2-49-29.7-96.801-31.1-142.701c-0.5-15.7,0.1-31.1,1.7-46.2c1.5-14,3.9-27.8,7.2-41.3c3.3-13.6,7.5-26.8,12.6-39.8\nc5.8-14.6,12.7-28.9,20.7-42.7c30.8-52.9,77.3-97.7,134.6-129.4c53.399-29.6,113.399-45.9,168.8-45.9c17.6,0,34.6,1.6,50.6,4.9\nc4.7,1,9.4,2,13.9,3.1c14.7,3.6,28.7,8.2,41.8,13.6c14.4,6,27.9,13,40.3,21.2c41.301,26.9,71.7,65.5,90.801,115.6\nc7,18.4,11.699,36.5,14.899,53.1c2.9,14.9,4.5,28.6,5.3,40.2C761.743,375.2,762.043,380.5,762.143,385.2z M398.842,50\nc31.2,0,61.4,6.3,89.3,18.2c-59.3,2.7-121.7,20.9-177.5,51.8c-55,30.5-101.399,71.7-135.8,120.4c7.5-46.7,29.4-89.7,63.5-123.8\nC281.142,73.6,338.142,50,398.842,50z M342.443,705.199c-33.5,0-60.601-27.1-60.601-60.6c0-18.799,8.5-35.5,21.9-46.6\nc6.7-5.5,14.5-9.6,23.1-11.9c5-1.299,10.2-2,15.5-2c3.3,0,6.5,0.301,9.7,0.801c28.9,4.6,50.9,29.6,50.9,59.799\nc0,11.602-3.301,22.5-8.9,31.701c-4.5,7.299-10.4,13.5-17.4,18.299c-7.1,4.9-15.3,8.301-24.1,9.701\nC349.342,704.9,345.943,705.199,342.443,705.199z M515.143,874.199c-5.899,13.201-23.8,22.801-45.1,22.801\nc-21.3,0-39.3-9.6-45.1-22.801c-2.101-4.6,3-9.299,10.1-9.299h70.201C512.243,864.9,517.243,869.5,515.143,874.199z M505.143,839.5\nh-70.2c-7.101,0-12.101-4.699-10.101-9.301c4.9-11.1,14-19.6,30.3-22.1c2-0.299,4,0,5.9,0.9l4.5,2.199c2.8,1.4,6.1,1.4,8.9,0\nl4.399-2.199c1.8-0.9,3.901-1.199,5.901-0.9c16.3,2.4,25.399,11,30.3,22.1C517.243,834.9,512.243,839.5,505.143,839.5z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M386.542,665.9c2.1-3.4,2.8-7.701,1.6-11.9c-2-6.9-8.399-11.199-15.199-10.9c-1.101,0.1-2.2,0.201-3.301,0.5\nc-7.1,2-14.699,3.201-22.6,3.5c-1.2,0-2.4,0.1-3.6,0.1c-8.801,0-17.4-1.1-25.301-3.299c-1.399-0.4-2.699-0.801-4-1.201\nc-7.899-2.6-16.3,1.701-18.899,9.5c-2.601,7.9,1.7,16.301,9.5,18.9c9.399,3.1,19.3,5,29.7,5.701c3,0.199,6,0.299,9,0.299\nc6.699,0,13.3-0.5,19.699-1.5c5-0.799,9.9-1.799,14.7-3.199C381.642,671.5,384.642,669.1,386.542,665.9z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M625.643,643.801c-8.199,2.299-17,3.5-26.199,3.5c-10.301,0-20.4-1.602-29.301-4.5c-7.899-2.602-16.3,1.699-18.899,9.5\nc-2.601,7.898,1.7,16.299,9.5,18.898c12.1,4,25.1,6,38.7,6c12,0,23.5-1.6,34.399-4.699c8-2.301,12.601-10.6,10.3-18.5\nC641.943,646.1,633.643,641.5,625.643,643.801z"
  })));
});

const SpaFingernailPolish = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-spa-fingernail-polish",
    enableBackground: "new 0 0 512 512",
    height: "512",
    viewBox: "0 0 512 512",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m467 120h-92c-8.291 0-15 6.709-15 15v45h-90c0-6.46-4.131-12.188-10.254-14.224l-90-30c-4.6-1.567-9.595-.776-13.521 2.051-3.911 2.827-6.225 7.354-6.225 12.173v90c0 4.819 2.314 9.346 6.226 12.173 4.065 2.917 9.155 3.534 13.521 2.051l90-30c6.122-2.036 10.253-7.764 10.253-14.224h90v45c0 8.291 6.709 15 15 15h92c24.814 0 45-20.186 45-45v-60c0-24.814-20.186-45-45-45z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m15 90c24.814 0 45 20.186 45 45 0 8.291 6.709 15 15 15s15-6.709 15-15c0-24.814 20.186-45 45-45 8.291 0 15-6.709 15-15s-6.709-15-15-15c-24.814 0-45-20.186-45-45 0-8.291-6.709-15-15-15s-15 6.709-15 15c0 24.814-20.186 45-45 45-8.291 0-15 6.709-15 15s6.709 15 15 15zm60-30.463c4.382 5.887 9.576 11.081 15.463 15.463-5.887 4.382-11.081 9.576-15.463 15.463-4.382-5.887-9.576-11.081-15.463-15.463 5.887-4.382 11.081-9.576 15.463-15.463z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m79.834 205.21c-3.091 2.842-4.834 6.841-4.834 11.03v83.76c0 32.651 26.543 59.575 59.18 60h.82c35.464 0 60-30.3 60-63.208v-19.362l-15.762 5.255c-12.682 4.325-28.052 2.787-40.503-6.138-11.762-8.51-18.735-22.148-18.735-36.547v-57.746c-17.574 4.534-32.166 15.577-40.166 22.956z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m15 512h240c8.284 0 15-6.716 15-15v-152c0-31.459-11.243-59.929-29.368-82.786l-15.632 5.213v29.365c0 51.401-40.371 93.208-90 93.208h-.82c-49.351-.645-89.18-41.016-89.18-90v-54.965c-27.431 24.71-45 60.14-45 99.965v152c0 8.284 6.716 15 15 15z"
  }));
});

const StoreFront = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-store-front",
    enableBackground: "new 0 0 19.955 19.955",
    viewBox: "0 0 19.955 19.955",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18.435,9.003c0.229,0.012,1.288,0.024,1.52,0.039l-1.793-6.162H18.13\nc0.308-0.134,0.52-0.396,0.52-0.702V1.713c0-0.44-0.437-0.798-0.975-0.798H2.249c-0.538,0-0.974,0.357-0.974,0.798v0.465\nc0,0.306,0.211,0.567,0.519,0.702H1.762L0,9.161c0.01-0.002,1.06-0.036,1.487-0.085v8.569H0.738v1.396h18.416v-1.396h-0.718\nL18.435,9.003L18.435,9.003z M13.212,3.678l0.332,4.716c-0.84-0.024-1.631-0.04-2.383-0.05L11.06,3.678\nc0-0.306,0.212-0.568,0.52-0.702h1.112C13.001,3.11,13.212,3.373,13.212,3.678z M9.149,3.678l-0.1,4.654\nC8.183,8.335,7.391,8.347,6.667,8.365l0.33-4.687c0-0.306,0.212-0.568,0.52-0.702h1.114C8.938,3.11,9.149,3.373,9.149,3.678z\nM2.979,3.678c0-0.305,0.212-0.568,0.52-0.702h1.113C4.919,3.11,5.131,3.373,5.131,3.678L4.593,8.439\nc-1.009,0.049-1.807,0.109-2.41,0.164L2.979,3.678z M11.404,14.002H3.121v-3.84h8.283V14.002z M16.72,16.783h-3.217v-6.621h3.217\nV16.783z M15.619,8.466l-0.54-4.788c0-0.306,0.212-0.568,0.519-0.702h1.114c0.306,0.134,0.518,0.397,0.518,0.702l0.793,4.901\nC17.188,8.535,16.387,8.498,15.619,8.466z"
  }));
});

const Swimming = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-swimming",
    enableBackground: "new 0 0 511.851 511.851",
    height: "512",
    viewBox: "0 0 511.851 511.851",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m178.75 362.707c6.449 4.42 8.622 5.909 15.818 5.909 7.195 0 9.367-1.489 15.816-5.909 8.782-6.019 22.054-15.116 45.534-15.116 23.481 0 36.752 9.096 45.535 15.116 6.449 4.42 8.622 5.909 15.818 5.909 7.197 0 9.37-1.489 15.819-5.91 6.579-4.509 15.678-10.745 29.701-13.59l-41.219-76.174 34.492-94.305 87.426-75.017c11.853-10.171 13.217-28.025 3.046-39.878-10.172-11.853-28.025-13.217-39.878-3.046l-93.032 79.828c-3.675 3.154-6.48 7.2-8.143 11.748l-42.212 115.408-.214.635-151.67 82.3c6.112-1.819 13.293-3.024 21.829-3.024 23.48 0 36.752 9.097 45.534 15.116z"
  }), /* @__PURE__ */ React.createElement("ellipse", {
    cx: "404.755",
    cy: "262.623",
    rx: "56.875",
    ry: "56.875",
    transform: "matrix(.994 -.112 .112 .994 -26.803 46.856)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m35.244 393.057c8.03 5.504 18.025 12.354 36.619 12.354 18.595 0 28.589-6.85 36.619-12.354 7.069-4.845 12.652-8.671 24.734-8.671 12.081 0 17.664 3.826 24.732 8.671 8.031 5.504 18.025 12.354 36.62 12.354 18.594 0 28.588-6.85 36.618-12.354 7.068-4.845 12.651-8.671 24.732-8.671s17.664 3.827 24.733 8.671c8.03 5.504 18.025 12.354 36.619 12.354 18.595 0 28.59-6.85 36.62-12.354 7.069-4.845 12.652-8.671 24.734-8.671 12.083 0 17.666 3.827 24.736 8.672 8.031 5.504 18.026 12.353 36.622 12.353s28.591-6.85 36.621-12.353c7.069-4.845 12.653-8.672 24.736-8.672 5.806 0 10.513-4.707 10.513-10.513s-4.707-10.513-10.513-10.513c-18.596 0-28.591 6.85-36.622 12.353-7.069 4.845-12.653 8.672-24.735 8.672-12.083 0-17.666-3.827-24.736-8.672-8.031-5.504-18.026-12.353-36.622-12.353-18.595 0-28.59 6.85-36.62 12.353-7.069 4.845-12.652 8.672-24.734 8.672-12.081 0-17.664-3.827-24.733-8.671-8.03-5.504-18.025-12.354-36.619-12.354s-28.589 6.85-36.619 12.354c-7.068 4.845-12.651 8.671-24.731 8.671-12.081 0-17.664-3.827-24.733-8.671-8.03-5.504-18.024-12.354-36.619-12.354s-28.59 6.85-36.62 12.354c-7.069 4.845-12.652 8.671-24.733 8.671s-17.664-3.826-24.731-8.671c-8.03-5.504-18.025-12.354-36.619-12.354-5.806 0-10.513 4.707-10.513 10.513s4.707 10.513 10.513 10.513c12.081-.001 17.663 3.826 24.731 8.671z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m353.89 445.62c-8.03 5.504-18.025 12.354-36.62 12.354s-28.589-6.85-36.619-12.354c-7.069-4.845-12.652-8.671-24.733-8.671s-17.664 3.826-24.732 8.671c-8.03 5.504-18.024 12.354-36.618 12.354-18.595 0-28.589-6.85-36.62-12.354-7.068-4.845-12.651-8.671-24.732-8.671s-17.665 3.827-24.734 8.671c-8.03 5.504-18.025 12.354-36.619 12.354-33.929 0-35.702-21.025-61.35-21.025-5.806 0-10.513-4.707-10.513-10.513s4.707-10.513 10.513-10.513c33.929 0 35.702 21.025 61.35 21.025 25.098 0 27.837-21.025 61.353-21.025 18.595 0 28.589 6.85 36.619 12.354 7.069 4.845 12.652 8.671 24.733 8.671 12.08 0 17.663-3.826 24.731-8.671 8.03-5.504 18.024-12.354 36.619-12.354s28.589 6.85 36.619 12.354c7.069 4.845 12.652 8.671 24.733 8.671 12.082 0 17.665-3.827 24.734-8.672 8.03-5.504 18.025-12.353 36.62-12.353 18.596 0 28.591 6.85 36.622 12.353 7.069 4.845 12.653 8.672 24.736 8.672 12.082 0 17.666-3.827 24.735-8.672 8.031-5.504 18.026-12.353 36.622-12.353 5.806 0 10.513 4.707 10.513 10.513s-4.707 10.513-10.513 10.513c-12.083 0-17.666 3.827-24.736 8.672-8.031 5.504-18.026 12.353-36.621 12.353-18.596 0-28.591-6.85-36.622-12.353-7.069-4.845-12.653-8.672-24.736-8.672-12.081 0-17.665 3.827-24.734 8.671z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m403.359 445.621c8.031 5.504 18.026 12.353 36.622 12.353s28.591-6.85 36.621-12.353c7.069-4.845 12.653-8.672 24.736-8.672 5.806 0 10.513-4.707 10.513-10.513s-4.707-10.513-10.513-10.513c-18.596 0-28.591 6.85-36.622 12.353-7.069 4.845-12.653 8.672-24.735 8.672-12.083 0-17.666-3.827-24.736-8.672-8.031-5.504-18.026-12.353-36.622-12.353-18.595 0-28.59 6.85-36.62 12.353-7.069 4.845-12.652 8.672-24.734 8.672-12.081 0-17.664-3.827-24.733-8.671-8.03-5.504-18.025-12.354-36.619-12.354s-28.589 6.85-36.619 12.354c-7.068 4.845-12.651 8.671-24.731 8.671-12.081 0-17.664-3.827-24.733-8.671-8.03-5.504-18.024-12.354-36.619-12.354-33.931 0-35.704 21.025-61.353 21.025-12.081 0-17.664-3.826-24.731-8.671-8.03-5.504-18.025-12.354-36.619-12.354-5.805.001-10.512 4.707-10.512 10.513s4.707 10.513 10.513 10.513c25.097 0 27.836 21.025 61.35 21.025 18.595 0 28.589-6.85 36.619-12.354 7.069-4.845 12.652-8.671 24.734-8.671 12.081 0 17.664 3.826 24.732 8.671 8.031 5.504 18.025 12.354 36.62 12.354 18.594 0 28.588-6.85 36.618-12.354 7.068-4.845 12.651-8.671 24.732-8.671s17.664 3.827 24.733 8.671c8.03 5.504 18.025 12.354 36.619 12.354 18.595 0 28.59-6.85 36.62-12.354 7.069-4.845 12.652-8.671 24.734-8.671 12.083 0 17.666 3.827 24.735 8.672z"
  })));
});

const Target$1 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-target",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m492 195.998h-60.921c-9.968-109.28-101.784-195.998-215.079-195.998-119.377 0-216 96.605-216 215.998 0 57.695 22.468 111.937 63.265 152.734 9.18 9.18 19.046 17.422 29.473 24.699l-50.149 88.724c-5.435 9.615-2.046 21.817 7.57 27.252 9.667 5.465 21.847 1.994 27.252-7.57l50.12-88.672c27.46 12.335 57.464 18.832 88.469 18.832s61.009-6.498 88.469-18.832l50.12 88.672c5.411 9.574 17.594 13.028 27.252 7.57 9.616-5.435 13.005-17.637 7.57-27.252l-50.149-88.724c10.427-7.277 20.293-15.519 29.473-24.699 36.045-36.045 57.77-82.589 62.344-132.734h60.921c11.046 0 20-8.954 20-20s-8.954-20-20-20zm-276-40c-33.084 0-60 26.916-60 59.999s26.916 59.999 60 59.999c26.073 0 48.303-16.722 56.56-40h39.386c-9.26 44.478-48.76 77.999-95.946 77.999-54.038 0-98-43.962-98-97.999s43.962-97.999 98-97.999c47.185 0 86.686 33.521 95.946 77.999h-39.386c-8.257-23.276-30.487-39.998-56.56-39.998zm20 60c0 11.028-8.972 20-20 20s-20-8.972-20-20 8.972-20 20-20 20 8.971 20 20zm-20-137.999c-76.093 0-138 61.906-138 137.999s61.907 137.998 138 137.998c69.301 0 126.827-51.35 136.546-117.999h38.311c-9.962 87.663-84.573 155.999-174.857 155.999-97.047 0-176-78.952-176-175.998s78.953-175.998 176-175.998c90.284 0 164.895 68.336 174.857 155.998h-38.311c-9.719-66.648-67.245-117.999-136.546-117.999z"
  }));
});

const TrashCan = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-trash-can",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    viewBox: "0 0 24 24",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"
  }));
});

const UmbrellaCheck = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-umbrella-check",
    viewBox: "0 -15 449.26509 449",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m447.679688 261.132812c-28.777344-12.726562-56.113282-28.488281-81.535157-47.027343-25.425781 18.539062-52.761719 34.300781-81.539062 47.027343-.96875.4375-1.589844 1.40625-1.582031 2.472657v46.246093c0 22.746094 8.054687 42.855469 23.984374 60.015626v-.328126c0-3.3125 2.683594-6 6-6 3.3125 0 6 2.6875 6 6v5.449219c0 1.691407-.714843 3.300781-1.964843 4.433594 2.234375 1.890625 4.578125 3.738281 7.027343 5.542969 12.40625 9.015625 26.074219 16.152344 40.5625 21.1875 14.984376-5.015625 29.167969-12.164063 42.109376-21.230469 2.785156-1.976563 5.429687-4.003906 7.9375-6.085937-.90625-1.074219-1.402344-2.4375-1.402344-3.847657v-5.449219c.007812-3.195312 2.519531-5.828124 5.710937-5.980468 3.195313-.15625 5.949219 2.21875 6.261719 5.402344 15.953125-16.964844 24.015625-36.765626 24.015625-59.109376v-46.246093c.003906-1.066407-.617187-2.035157-1.585937-2.472657zm-110.960938 113.855469c0 3.316407-2.6875 6-6 6s-6-2.683593-6-6v-5.449219c0-3.3125 2.6875-6 6-6s6 2.6875 6 6zm17.710938 0c0 3.316407-2.683594 6-6 6-3.3125 0-6-2.683593-6-6v-5.449219c0-3.3125 2.6875-6 6-6 3.316406 0 6 2.6875 6 6zm-.175782-43.46875-20.179687-20.179687c-2.3125-2.347656-2.296875-6.121094.035156-8.449219 2.328125-2.332031 6.101563-2.34375 8.449219-.035156l15.9375 15.9375 31.234375-31.234375c2.355469-2.285156 6.109375-2.261719 8.429687.058594 2.320313 2.320312 2.34375 6.078124.054688 8.429687l-35.472656 35.472656c-2.34375 2.339844-6.140626 2.339844-8.484376 0zm17.890625 43.46875c0 3.316407-2.6875 6-6 6-3.316406 0-6-2.683593-6-6v-5.449219c0-3.3125 2.683594-6 6-6 3.3125 0 6 2.6875 6 6zm17.710938 0c0 3.316407-2.6875 6-6 6s-6-2.683593-6-6v-5.449219c0-3.3125 2.6875-6 6-6s6 2.6875 6 6zm17.710937 0c0 3.316407-2.6875 6-6 6s-6-2.683593-6-6v-5.449219c0-3.3125 2.6875-6 6-6s6 2.6875 6 6zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m292.632812 197.90625c-.167968-10.871094 4.074219-21.34375 11.765626-29.027344 7.6875-7.683594 18.164062-11.921875 29.035156-11.746094h.199218c10.746094-.027343 21.070313 4.179688 28.738282 11.707032 5.90625 6.355468 10.664062 20.851562 12 25.917968.773437 2.910157 3.585937 4.800782 6.574218 4.414063 2.984376-.386719 5.222657-2.929687 5.226563-5.941406v-.246094c-.066406-106.527344-86.4375-192.847656-192.960937-192.851563h-.367188c-106.578125.070313-192.9140625 86.523438-192.84375 193.101563.00390625 3.011719 2.242188 5.550781 5.230469 5.9375s5.796875-1.503906 6.570312-4.414063c1.328125-5.050781 6.054688-19.472656 11.960938-25.875 7.84375-7.574218 18.332031-11.792968 29.234375-11.753906 10.75-.027344 21.074218 4.179688 28.746094 11.710938 7.539062 7.796875 11.769531 18.214844 11.800781 29.0625 0 3.3125 2.683593 6 6 6 3.3125 0 6-2.6875 6-6-.167969-10.90625 4.105469-21.40625 11.835937-29.097656 7.734375-7.6875 18.257813-11.902344 29.164063-11.675782 10.746093-.027344 21.074219 4.179688 28.742187 11.710938 7.539063 7.800781 11.769532 18.214844 11.800782 29.0625v167.851562c-.113282 22.394532-18.296876 40.488282-40.691407 40.488282-22.390625 0-40.578125-18.09375-40.6875-40.488282 0-3.3125-2.6875-6-6-6s-6 2.6875-6 6c.125 29.011719 23.679688 52.460938 52.6875 52.460938 29.011719 0 52.5625-23.449219 52.691407-52.460938v-167.855468c-.167969-10.867188 4.078124-21.339844 11.765624-29.023438 7.691407-7.683594 18.164063-11.921875 29.03125-11.746094h.203126c10.746093-.027344 21.078124 4.179688 28.746093 11.710938 7.542969 7.800781 11.769531 18.214844 11.800781 29.066406 0 3.3125 2.683594 6 6 6 3.3125 0 6-2.6875 6-6zm0 0"
  }));
});

const Upload$1 = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 488.4 488.4",
    enableBackground: "new 0 0 488.4 488.4",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M483.6,295.2l-69.5-107.4c-5.4-8.3-14.5-13.3-24.4-13.3H359c-4.5,0-7.2,5-4.7,8.7l75,116c1,1.5-0.1,3.5-1.9,3.5h-32.9\n			    h-26.8H342c-3.1,0-5.5,2.5-5.7,5.5c-2.9,48.4-43,86.8-92.2,86.8s-89.3-38.4-92.2-86.8c-0.2-3.1-2.6-5.5-5.7-5.5h-25.7h-23H60.9\n			    c-1.8,0-2.8-2-1.9-3.5l75-116c2.4-3.8-0.3-8.7-4.7-8.7H98.6c-9.9,0-19,5-24.4,13.3L4.8,295.2C1.7,300,0,305.7,0,311.5v149.6\n			    c0,14.6,11.9,26.5,26.5,26.5h217.7h217.7c14.6,0,26.5-11.9,26.5-26.5V311.5C488.4,305.7,486.8,300.1,483.6,295.2z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M252.2,4.7c-4.1-5.2-12-5.2-16.1,0l-65.9,83.8c-5.3,6.7-0.5,16.6,8,16.6h26v158.3c0,22.1,17.9,40,40,40l0,0\n			    c22.1,0,40-17.9,40-40V105h26c8.5,0,13.3-9.9,8-16.6L252.2,4.7z"
  })));
});

const WaterSpigot = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-water-spigot",
    viewBox: "0 0 512 512",
    enableBackground: "new 0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m212 30v-30h-90v30h-90v30h270v-30z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m482 322v-35c0-74.439-60.561-135-135-135h-105v-32h30v-30h-210v30h30v32h-92v140h93.517c19.555 19.145 45.963 30 73.483 30 27.519 0 53.927-10.855 73.482-30h76.518c8.271 0 15 6.729 15 15v15h-30v30h210v-30z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m407 352.002-48.022 64.022c-7.836 10.448-11.978 22.889-11.978 35.976 0 33.084 26.916 60 60 60s60-26.916 60-60c0-13.088-4.142-25.528-11.979-35.976z"
  }));
});

const WeatherStorm = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-weather-storm",
    viewBox: "0 0 509.86719 509",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M 381.933594 275.546875 L 296.601562 403.546875 L 339.265625 403.546875 L 317.933594 510.214844 L 403.265625 382.214844 L 360.601562 382.214844 Z M 381.933594 275.546875 "
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M 168.601562 275.546875 L 83.265625 403.546875 L 125.933594 403.546875 L 104.601562 510.214844 L 189.933594 382.214844 L 147.265625 382.214844 Z M 168.601562 275.546875 "
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M 467.265625 179.546875 C 467.265625 175.28125 467.265625 171.015625 467.265625 168.882812 C 467.265625 121.949219 428.867188 83.546875 381.933594 83.546875 C 373.398438 83.546875 362.734375 85.679688 354.199219 87.816406 C 332.867188 19.546875 260.332031 -14.585938 192.066406 6.746094 C 138.734375 23.816406 104.601562 70.746094 104.601562 126.214844 C 44.867188 126.214844 0.0664062 173.148438 0.0664062 232.882812 C 0.0664062 290.480469 42.734375 337.414062 100.332031 339.546875 L 189.933594 211.546875 L 177.132812 339.546875 L 313.667969 339.546875 L 403.265625 211.546875 L 390.464844 339.546875 L 424.601562 339.546875 C 471.53125 339.546875 509.933594 301.148438 509.933594 254.214844 C 509.933594 224.347656 492.867188 194.480469 467.265625 179.546875 Z M 232.601562 318.214844 L 253.933594 232.882812 L 211.265625 232.882812 L 296.601562 126.214844 L 275.265625 211.546875 L 317.933594 211.546875 Z M 232.601562 318.214844 "
  }));
});

const WineGlasses = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-wine-glasses",
    viewBox: "0 0 511.999 511.999",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M282.368,68.639L96.896,18.943c-8.48-2.304-17.28,2.752-19.584,11.328l-41.408,154.56 c-7.744,28.896-3.776,59.072,11.2,84.992c12.224,21.216,30.848,37.088,52.96,46.528l-33.568,125.12l-46.368-12.416 c-8.512-2.016-17.312,2.816-19.584,11.328c-2.272,8.512,2.784,17.28,11.328,19.584l61.792,16.544l61.824,16.576 c1.408,0.352,2.784,0.544,4.16,0.544c7.072,0,13.536-4.704,15.424-11.872c2.272-8.544-2.784-17.28-11.328-19.584l-46.368-12.416 l33.44-124.8c4.48,0.544,8.96,0.896,13.408,0.896c19.392,0,38.56-5.088,55.808-15.072c25.92-14.976,44.448-39.136,52.192-68 l41.408-154.56C295.968,79.679,290.912,70.911,282.368,68.639z M244.896,146.591c-20.256-14.24-51.072-24.256-89.888-9.6 c-37.888,14.208-60.64-3.968-69.536-13.632l18.592-69.376l154.56,41.408L244.896,146.591z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M511.456,440.383c-2.272-8.544-11.072-13.376-19.584-11.328l-46.368,12.416l-33.536-125.152 c22.112-9.44,40.736-25.312,52.96-46.528c14.944-25.92,18.944-56.064,11.2-84.992L434.72,30.239 c-2.304-8.544-11.104-13.6-19.584-11.328l-106.4,28.544c4.288,3.584,8.192,7.68,11.04,12.64c2.912,5.024,4.704,10.464,5.664,16 l82.496-22.112l18.592,69.376c-8.864,9.664-31.648,27.84-69.504,13.632c-15.072-5.696-28.864-7.584-41.376-7.04l-32.48,121.088 c-2.176,8.192-5.312,15.936-8.8,23.456c9.504,14.688,21.984,27.296,37.568,36.288c17.248,9.984,36.384,15.072,55.808,15.072 c4.48,0,8.96-0.352,13.408-0.896l33.44,124.8l-46.368,12.416c-8.544,2.304-13.6,11.072-11.328,19.584 c1.92,7.168,8.384,11.872,15.456,11.872c1.376,0,2.752-0.192,4.16-0.544l61.824-16.576l61.792-16.544 C508.672,457.663,513.728,448.927,511.456,440.383z"
  }))));
});

const WorldWideWeb = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    id: "applab-icon-basic-world-wide-web",
    viewBox: "0 0 490.667 490.667",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M256,44.075V128h66.923C307.307,82.645,283.2,50.773,256,44.075z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M167.744,128h66.923V44.075C207.467,50.773,183.36,82.645,167.744,128z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M396.075,110.208c-24.747-27.605-56.341-47.509-90.965-58.283c16.661,18.517,30.549,44.629,40.512,76.075h42.496 c4.203,0,8.021-2.475,9.749-6.315C399.595,117.845,398.891,113.344,396.075,110.208z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M94.592,110.208c-2.816,3.136-3.52,7.637-1.813,11.477c1.728,3.84,5.525,6.315,9.749,6.315h42.496 c9.963-31.445,23.851-57.557,40.512-76.075C150.933,62.699,119.317,82.603,94.592,110.208z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M167.744,362.667c15.616,45.355,39.723,77.227,66.923,83.925v-83.925H167.744z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M256,362.667v83.925c27.2-6.699,51.307-38.571,66.923-83.925H256z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M397.888,368.981c-1.728-3.84-5.547-6.315-9.749-6.315h-42.496c-9.963,31.445-23.851,57.557-40.512,76.075 c34.624-10.773,66.219-30.677,90.965-58.283C398.891,377.323,399.595,372.821,397.888,368.981z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M145.024,362.667h-42.496c-4.203,0-8.021,2.475-9.749,6.315c-1.707,3.84-1.003,8.341,1.813,11.477 c24.747,27.605,56.341,47.509,90.965,58.283C168.875,420.224,154.987,394.112,145.024,362.667z"
  }))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M437.333,149.333h-384C23.915,149.333,0,173.269,0,202.667V288c0,29.397,23.915,53.333,53.333,53.333h384 c29.419,0,53.333-23.936,53.333-53.333v-85.333C490.667,173.269,466.752,149.333,437.333,149.333z M170.347,205.248 l-21.333,85.333c-1.152,4.608-5.205,7.893-9.941,8.064c-0.149,0-0.299,0-0.427,0c-4.587,0-8.661-2.923-10.133-7.296 l-11.179-33.621l-11.2,33.643c-1.493,4.48-4.885,7.509-10.539,7.275c-4.736-0.171-8.789-3.477-9.941-8.064L64.32,205.248 c-1.429-5.696,2.027-11.499,7.765-12.928c5.632-1.451,11.499,2.027,12.928,7.765l12.437,49.792l9.749-29.248 c2.923-8.704,17.344-8.704,20.245,0l9.749,29.248l12.437-49.792c1.451-5.739,7.147-9.195,12.949-7.765 C168.32,193.749,171.776,199.552,170.347,205.248z M298.347,205.248l-21.333,85.333c-1.152,4.608-5.205,7.893-9.941,8.064 c-0.149,0-0.299,0-0.427,0c-4.587,0-8.661-2.923-10.133-7.296l-11.179-33.621l-11.2,33.643c-1.493,4.48-4.971,7.509-10.539,7.275 c-4.736-0.171-8.789-3.477-9.941-8.064l-21.333-85.333c-1.429-5.696,2.027-11.499,7.765-12.928 c5.632-1.451,11.52,2.027,12.928,7.765l12.437,49.792l9.749-29.248c2.923-8.704,17.344-8.704,20.245,0l9.749,29.248l12.437-49.792 c1.408-5.739,7.125-9.195,12.928-7.765C296.32,193.749,299.776,199.552,298.347,205.248z M426.347,205.248l-21.333,85.333 c-1.152,4.608-5.205,7.893-9.941,8.064c-0.149,0-0.299,0-0.427,0c-4.587,0-8.661-2.923-10.133-7.296l-11.179-33.621l-11.2,33.643 c-1.493,4.48-5.077,7.509-10.539,7.275c-4.736-0.171-8.789-3.477-9.941-8.064l-21.333-85.333 c-1.408-5.717,2.048-11.499,7.765-12.928c5.632-1.451,11.52,2.027,12.928,7.765l12.437,49.792l9.749-29.248 c2.923-8.704,17.344-8.704,20.245,0l9.749,29.248l12.437-49.792c1.408-5.739,7.104-9.195,12.928-7.765 C424.32,193.749,427.776,199.552,426.347,205.248z"
  }))));
});

var BasicIcons = /* @__PURE__ */ ((BasicIcons2) => {
  BasicIcons2["Airplane"] = "basic/Airplane";
  BasicIcons2["Alert"] = "basic/Alert";
  BasicIcons2["AlertQuestion"] = "basic/AlertQuestion";
  BasicIcons2["AnimalFootprint"] = "basic/AnimalFootprint";
  BasicIcons2["AppStore"] = "basic/AppStore";
  BasicIcons2["AppSubscription"] = "basic/AppSubscription";
  BasicIcons2["Bill"] = "basic/Bill";
  BasicIcons2["BillEnvelope"] = "basic/BillEnvelope";
  BasicIcons2["Books"] = "basic/Books";
  BasicIcons2["Bowling"] = "basic/Bowling";
  BasicIcons2["Briefcase"] = "basic/Briefcase";
  BasicIcons2["Calendar"] = "basic/Calendar";
  BasicIcons2["Car"] = "basic/Car";
  BasicIcons2["CardsView"] = "basic/CardsView";
  BasicIcons2["CaretDownArrow"] = "basic/CaretDownArrow";
  BasicIcons2["Checkmark"] = "basic/Checkmark";
  BasicIcons2["Checkmark2"] = "basic/Checkmark2";
  BasicIcons2["ChevronRight"] = "basic/ChevronRight";
  BasicIcons2["ChevronRight2"] = "basic/ChevronRight2";
  BasicIcons2["CircusTent"] = "basic/CircusTent";
  BasicIcons2["Close"] = "basic/Close";
  BasicIcons2["CreditCard"] = "basic/CreditCard";
  BasicIcons2["CreditCardCheck"] = "basic/CreditCardCheck";
  BasicIcons2["CreditCards"] = "basic/CreditCards";
  BasicIcons2["CupOfTea"] = "basic/CupOfTea";
  BasicIcons2["Dashboard"] = "basic/Dashboard";
  BasicIcons2["DollarInHand"] = "basic/DollarInHand";
  BasicIcons2["DollarRecurring"] = "basic/DollarRecurring";
  BasicIcons2["DollarRecurring2"] = "basic/DollarRecurring2";
  BasicIcons2["DollarRecurring3"] = "basic/DollarRecurring3";
  BasicIcons2["DollarRecurring4"] = "basic/DollarRecurring4";
  BasicIcons2["DollarTransfer"] = "basic/DollarTransfer";
  BasicIcons2["DramaArts"] = "basic/DramaArts";
  BasicIcons2["EatingUtensils"] = "basic/EatingUtensils";
  BasicIcons2["EventTicket"] = "basic/EventTicket";
  BasicIcons2["Exit"] = "basic/Exit";
  BasicIcons2["FileUpload"] = "basic/FileUpload";
  BasicIcons2["Flame"] = "basic/Flame";
  BasicIcons2["FuelPump"] = "basic/FuelPump";
  BasicIcons2["GearCog"] = "basic/GearCog";
  BasicIcons2["Gift"] = "basic/Gift";
  BasicIcons2["Golf"] = "basic/Golf";
  BasicIcons2["GraduationCap"] = "basic/GraduationCap";
  BasicIcons2["HamburgerMenu"] = "basic/HamburgerMenu";
  BasicIcons2["HandHoldingHeart"] = "basic/HandHoldingHeart";
  BasicIcons2["HandHoldingHeart2"] = "basic/HandHoldingHeart2";
  BasicIcons2["HandshakeHeart"] = "basic/HandshakeHeart";
  BasicIcons2["HealthCross"] = "basic/HealthCross";
  BasicIcons2["HeartHealth"] = "basic/HeartHealth";
  BasicIcons2["HeartHealth2"] = "basic/HeartHealth2";
  BasicIcons2["HelpBubble"] = "basic/HelpBubble";
  BasicIcons2["Home"] = "basic/Home";
  BasicIcons2["Institution"] = "basic/Institution";
  BasicIcons2["Investment"] = "basic/Investment";
  BasicIcons2["Island"] = "basic/Island";
  BasicIcons2["LightbulbElectricity"] = "basic/LightbulbElectricity";
  BasicIcons2["MoneyBag"] = "basic/MoneyBag";
  BasicIcons2["MoneyBag2"] = "basic/MoneyBag2";
  BasicIcons2["MoneyBallAndChain"] = "basic/MoneyBallAndChain";
  BasicIcons2["MoreButton"] = "basic/MoreButton";
  BasicIcons2["New"] = "basic/New";
  BasicIcons2["OnlineShopping"] = "basic/OnlineShopping";
  BasicIcons2["PaidBill"] = "basic/PaidBill";
  BasicIcons2["PeopleLiftWorld"] = "basic/PeopleLiftWorld";
  BasicIcons2["PersonalCare"] = "basic/PersonalCare";
  BasicIcons2["PieChart"] = "basic/PieChart";
  BasicIcons2["PieChart2"] = "basic/PieChart2";
  BasicIcons2["PiggyBank"] = "basic/PiggyBank";
  BasicIcons2["Pizza"] = "basic/Pizza";
  BasicIcons2["PlayStore"] = "basic/PlayStore";
  BasicIcons2["RightArrow"] = "basic/RightArrow";
  BasicIcons2["Safe"] = "basic/Safe";
  BasicIcons2["Search"] = "basic/Search";
  BasicIcons2["SearchMagnifyingGlass"] = "basic/SearchMagnifyingGlass";
  BasicIcons2["ServiceVan"] = "basic/ServiceVan";
  BasicIcons2["Shirt"] = "basic/Shirt";
  BasicIcons2["ShoppingBags"] = "basic/ShoppingBags";
  BasicIcons2["ShoppingBasket"] = "basic/ShoppingBasket";
  BasicIcons2["SmartPhone"] = "basic/SmartPhone";
  BasicIcons2["SortNumberAsc"] = "basic/SortNumberAsc";
  BasicIcons2["SortNumberDesc"] = "basic/SortNumberDesc";
  BasicIcons2["SortStringAsc"] = "basic/SortStringAsc";
  BasicIcons2["SortStringDesc"] = "basic/SortStringDesc";
  BasicIcons2["SortUpDown"] = "basic/SortUpDown";
  BasicIcons2["SpaFacial"] = "basic/SpaFacial";
  BasicIcons2["SpaFingernailPolish"] = "basic/SpaFingernailPolish";
  BasicIcons2["StoreFront"] = "basic/StoreFront";
  BasicIcons2["Swimming"] = "basic/Swimming";
  BasicIcons2["Target"] = "basic/Target";
  BasicIcons2["TrashCan"] = "basic/TrashCan";
  BasicIcons2["UmbrellaCheck"] = "basic/UmbrellaCheck";
  BasicIcons2["Upload"] = "basic/Upload";
  BasicIcons2["WaterSpigot"] = "basic/WaterSpigot";
  BasicIcons2["WeatherStorm"] = "basic/WeatherStorm";
  BasicIcons2["WineGlasses"] = "basic/WineGlasses";
  BasicIcons2["WorldWideWeb"] = "basic/WorldWideWeb";
  return BasicIcons2;
})(BasicIcons || {});

var Basic = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  BasicIcons: BasicIcons,
  Airplane: Airplane,
  Alert: Alert,
  AlertQuestion: AlertQuestion,
  AnimalFootprint: AnimalFootprint,
  AppStore: AppStore,
  AppSubscription: AppSubscription,
  Bill: Bill,
  BillEnvelope: BillEnvelope,
  Books: Books,
  Bowling: Bowling,
  Briefcase: Briefcase$1,
  Calendar: Calendar$1,
  Car: Car,
  CardsView: CardsView,
  CaretDownArrow: CaretDownArrow,
  Checkmark: Checkmark,
  Checkmark2: Checkmark2,
  ChevronRight: ChevronRight$1,
  ChevronRight2: ChevronRight2,
  CircusTent: CircusTent,
  Close: Close$1,
  CreditCard: CreditCard,
  CreditCardCheck: CreditCardCheck,
  CreditCards: CreditCards,
  CupOfTea: CupOfTea,
  Dashboard: Dashboard$1,
  DollarInHand: DollarInHand,
  DollarRecurring: DollarRecurring,
  DollarRecurring2: DollarRecurring2,
  DollarRecurring3: DollarRecurring3,
  DollarRecurring4: DollarRecurring4,
  DollarTransfer: DollarTransfer,
  DramaArts: DramaArts,
  EatingUtensils: EatingUtensils,
  EventTicket: EventTicket,
  Exit: Exit,
  FileUpload: FileUpload,
  Flame: Flame,
  FuelPump: FuelPump,
  GearCog: GearCog,
  Gift: Gift$1,
  Golf: Golf,
  GraduationCap: GraduationCap,
  HamburgerMenu: HamburgerMenu,
  HandHoldingHeart: HandHoldingHeart,
  HandHoldingHeart2: HandHoldingHeart2,
  HandshakeHeart: HandshakeHeart,
  HealthCross: HealthCross,
  HeartHealth: HeartHealth,
  HeartHealth2: HeartHealth2,
  HelpBubble: HelpBubble,
  Home: Home$1,
  Institution: Institution,
  Investment: Investment,
  Island: Island,
  LightbulbElectricity: LightbulbElectricity,
  MoneyBag: MoneyBag,
  MoneyBag2: MoneyBag2,
  MoneyBallAndChain: MoneyBallAndChain,
  MoreButton: MoreButton,
  New: New$1,
  OnlineShopping: OnlineShopping,
  PaidBill: PaidBill,
  PeopleLiftWorld: PeopleLiftWorld,
  PersonalCare: PersonalCare,
  PieChart: PieChart$1,
  PieChart2: PieChart2,
  PiggyBank: PiggyBank,
  Pizza: Pizza,
  PlayStore: PlayStore,
  RightArrow: RightArrow,
  Safe: Safe,
  Search: Search$1,
  SearchMagnifyingGlass: SearchMagnifyingGlass,
  ServiceVan: ServiceVan,
  Shirt: Shirt,
  ShoppingBags: ShoppingBags,
  ShoppingBasket: ShoppingBasket,
  SmartPhone: SmartPhone,
  SortNumberAsc: SortNumberAsc,
  SortNumberDesc: SortNumberDesc,
  SortStringAsc: SortStringAsc,
  SortStringDesc: SortStringDesc,
  SortUpDown: SortUpDown,
  SpaFacial: SpaFacial,
  SpaFingernailPolish: SpaFingernailPolish,
  StoreFront: StoreFront,
  Swimming: Swimming,
  Target: Target$1,
  TrashCan: TrashCan,
  UmbrellaCheck: UmbrellaCheck,
  Upload: Upload$1,
  WaterSpigot: WaterSpigot,
  WeatherStorm: WeatherStorm,
  WineGlasses: WineGlasses,
  WorldWideWeb: WorldWideWeb
}, Symbol.toStringTag, { value: 'Module' }));

const Activity = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.489 5.054c-.113-.527-.865-.527-.978 0L7.317 10.63A3 3 0 014.383 13H3a1 1 0 110-2h1.383a1 1 0 00.978-.79l1.194-5.575C7.12 2 10.88 2 11.445 4.635l3.066 14.31c.113.528.865.528.978 0l1.194-5.574A3 3 0 0119.617 11H21a1 1 0 110 2h-1.383a1 1 0 00-.978.79l-1.194 5.575c-.565 2.635-4.325 2.635-4.89 0L9.49 5.055z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 12,
    y1: 2.659,
    x2: 12,
    y2: 21.341,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  }))));
});

const AddCircle = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    height: "100%",
    width: "100%",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 8a1 1 0 10-2 0v3H8a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V8z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 12,
    y1: 2,
    x2: 12,
    y2: 22,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    className: "prefix__stopColor-1",
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    className: "prefix__stopColor-2",
    offset: 1,
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 12,
    y1: 7,
    x2: 12,
    y2: 17,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    className: "prefix__stopColor-3",
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    className: "prefix__stopColor-4",
    offset: 1,
    stopColor: "#5C5ACA"
  }))));
});

const Add = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4a1 1 0 011 1v14a1 1 0 11-2 0V5a1 1 0 011-1z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 13,
    y1: 12,
    x2: 11,
    y2: 12,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 12,
    y1: 11,
    x2: 12,
    y2: 13,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  }))));
});

const Alarm = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "8",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.46603 4.08494C7.21611 3.59352 6.61217 3.39399 6.14542 3.68741C4.75273 4.56294 3.57391 5.73998 2.69627 7.13134C2.40214 7.59764 2.60076 8.20189 3.0918 8.45255C3.58284 8.70322 4.17964 8.50453 4.4831 8.04424C5.15697 7.02209 6.03245 6.14794 7.05561 5.47561C7.51636 5.17285 7.71596 4.57636 7.46603 4.08494Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.5339 4.08494C16.7839 3.59352 17.3878 3.39399 17.8546 3.68741C19.2472 4.56294 20.4261 5.73998 21.3037 7.13134C21.5978 7.59764 21.3992 8.20189 20.9082 8.45255C20.4171 8.70322 19.8203 8.50453 19.5169 8.04424C18.843 7.02209 17.9675 6.14794 16.9444 5.47561C16.4836 5.17285 16.284 4.57636 16.5339 4.08494Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 8C12.5523 8 13 8.44772 13 9V12.5858L14.7071 14.2929C15.0976 14.6834 15.0976 15.3166 14.7071 15.7071C14.3166 16.0976 13.6834 16.0976 13.2929 15.7071L11.5858 14C11.2107 13.6249 11 13.1162 11 12.5858V9C11 8.44772 11.4477 8 12 8Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "3.55057",
    x2: "12",
    y2: "8.5619",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "3.55057",
    x2: "12",
    y2: "8.5619",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "13",
    y1: "8",
    x2: "13",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const AlertCircle = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 14C12.5523 14 13 13.5523 13 13V8.00001C13 7.44772 12.5523 7.00001 12 7.00001C11.4477 7.00001 11 7.44772 11 8.00001V13C11 13.5523 11.4477 14 12 14Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "17",
    r: "1",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "7.00001",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Anchor = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "2",
    stroke: "url(#paint0_linear)",
    "stroke-width": "2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 7.82928C12.6872 7.93984 12.3506 7.99999 12 7.99999C11.6494 7.99999 11.3128 7.93984 11 7.82928V19.9381C7.38128 19.4868 4.51314 16.6187 4.06189 13H6C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11H3C2.44772 11 2 11.4477 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.4477 21.5523 11 21 11H18C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13H19.9381C19.4869 16.6187 16.6187 19.4868 13 19.9381V7.82928Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "7.82928",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Android = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.00391 5.63174C5.48343 5.35773 6.09428 5.52433 6.36829 6.00385L8.36829 9.50385C8.6423 9.98337 8.47571 10.5942 7.99619 10.8682C7.51667 11.1422 6.90582 10.9756 6.63181 10.4961L4.63181 6.99613C4.3578 6.51661 4.52439 5.90575 5.00391 5.63174Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.9961 5.63174C18.5166 5.35773 17.9057 5.52433 17.6317 6.00385L15.6317 9.50385C15.3577 9.98337 15.5243 10.5942 16.0038 10.8682C16.4833 11.1422 17.0942 10.9756 17.3682 10.4961L19.3682 6.99613C19.6422 6.51661 19.4756 5.90575 18.9961 5.63174Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 8C6.81417 8 2.55031 11.9474 2.04924 17.0014C1.99475 17.551 2.44772 18 3 18H21C21.5523 18 22.0053 17.551 21.9508 17.0014C21.4497 11.9474 17.1858 8 12 8Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8 15C7.44772 15 7 14.5523 7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14C9 14.5523 8.55228 15 8 15V15Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 15C15.4477 15 15 14.5523 15 14C15 13.4477 15.4477 13 16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15V15Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "6.50005",
    y1: "5.49982",
    x2: "6.50005",
    y2: "11.0002",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17.5",
    y1: "5.49982",
    x2: "17.5",
    y2: "11.0002",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "8",
    y1: "13",
    x2: "8",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "16",
    y1: "13",
    x2: "16",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Apple = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17.6007 12.6254C17.6189 14.5792 18.72 15.6915 19.5062 16.238C19.9243 16.5286 20.1748 17.0414 19.98 17.5118C19.7585 18.0466 19.4081 18.7754 18.9009 19.5166C18.0673 20.735 17.2022 21.9489 15.8393 21.974C14.5001 21.9987 14.0695 21.1799 12.5385 21.1799C11.0079 21.1799 10.5294 21.9489 9.26177 21.9987C7.94625 22.0485 6.94445 20.6812 6.10397 19.4673C4.38647 16.9843 3.07394 12.4508 4.83633 9.39063C5.71185 7.87094 7.27647 6.90861 8.97472 6.88393C10.2665 6.85929 11.4858 7.75302 12.2755 7.75302C13.0648 7.75302 14.5465 6.67823 16.1042 6.83608C16.6396 6.85836 17.9693 7.02162 19.0786 8.03151C19.4999 8.41504 19.3498 9.06684 18.9435 9.46619C18.3256 10.0736 17.5872 11.1156 17.6007 12.6254Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.0839 5.1933C15.5962 4.57312 15.9857 3.77455 16.1062 2.93078C16.1805 2.4105 15.7098 2.01136 15.2105 2.1755C14.4517 2.42494 13.6902 2.91638 13.178 3.5158C12.6822 4.089 12.2336 4.92592 12.1196 5.80214C12.0587 6.27027 12.4602 6.65053 12.9217 6.55129C13.763 6.37039 14.5529 5.83644 15.0839 5.1933Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.1425",
    y1: "6.82025",
    x2: "12.1425",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "14.1185",
    y1: "2",
    x2: "14.1185",
    y2: "6.61718",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Archive = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M5.12132 2.87868C5.68393 2.31607 6.44699 2 7.24264 2H16.7574C17.553 2 18.3161 2.31607 18.8787 2.87868L21.2164 5.21639C21.7181 5.71813 22 6.39863 22 7.10819V7.10819C22 7.60072 21.6007 8 21.1082 8H2.89181C2.39928 8 2 7.60072 2 7.10819V7.10819C2 6.39863 2.28187 5.71813 2.78361 5.21639L5.12132 2.87868Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 7C2 6.44772 2.44772 6 3 6H21C21.5523 6 22 6.44772 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.002 10.9996C13.002 10.4473 12.5542 9.99959 12.002 9.99959C11.4497 9.99959 11.002 10.4473 11.002 10.9996V15.0859L10.2071 14.291C9.81658 13.9005 9.18342 13.9005 8.79289 14.291C8.40237 14.6816 8.40237 15.3147 8.79289 15.7053L10.5877 17.5C11.3687 18.2811 12.635 18.2811 13.4161 17.5L15.2071 15.7091C15.5976 15.3185 15.5976 14.6854 15.2071 14.2948C14.8166 13.9043 14.1834 13.9043 13.7929 14.2948L13.002 15.0858V10.9996Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "6",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "9.99959",
    x2: "12",
    y2: "18.0858",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const ArrowLeft = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 12C21 11.4477 20.5523 11 20 11L4.5 11C3.94772 11 3.5 11.4477 3.5 12C3.5 12.5523 3.94772 13 4.5 13L20 13C20.5523 13 21 12.5523 21 12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.7071 19.2071C11.0976 18.8166 11.0976 18.1834 10.7071 17.7929L4.91421 12L10.7071 6.20711C11.0976 5.81658 11.0976 5.18342 10.7071 4.79289C10.3166 4.40237 9.68342 4.40237 9.29289 4.79289L3.5 10.5858C2.71895 11.3668 2.71895 12.6332 3.5 13.4142L9.29289 19.2071C9.68342 19.5976 10.3166 19.5976 10.7071 19.2071Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "21",
    y1: "12",
    x2: "3.5",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11",
    y1: "12",
    x2: "2.91421",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ArrowDown = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3C12.5523 3 13 3.44772 13 4V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V4C11 3.44772 11.4477 3 12 3Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.79289 13.2929C5.18342 12.9024 5.81658 12.9024 6.20711 13.2929L12 19.0858L17.7929 13.2929C18.1834 12.9024 18.8166 12.9024 19.2071 13.2929C19.5976 13.6834 19.5976 14.3166 19.2071 14.7071L13.4142 20.5C12.6332 21.281 11.3668 21.281 10.5858 20.5L4.79289 14.7071C4.40237 14.3166 4.40237 13.6834 4.79289 13.2929Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "20.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "13",
    x2: "12",
    y2: "21.0858",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ArrowRight = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 12C3 11.4477 3.44772 11 4 11L19.5 11C20.0523 11 20.5 11.4477 20.5 12C20.5 12.5523 20.0523 13 19.5 13L4 13C3.44772 13 3 12.5523 3 12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.2929 19.2071C12.9024 18.8166 12.9024 18.1834 13.2929 17.7929L19.0858 12L13.2929 6.20711C12.9024 5.81658 12.9024 5.18342 13.2929 4.79289C13.6834 4.40237 14.3166 4.40237 14.7071 4.79289L20.5 10.5858C21.281 11.3668 21.281 12.6332 20.5 13.4142L14.7071 19.2071C14.3166 19.5976 13.6834 19.5976 13.2929 19.2071Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "3",
    y1: "12",
    x2: "20.5",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "13",
    y1: "12",
    x2: "21.0858",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ArrowUpDown = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3.70711 9.20708C3.31658 9.5976 2.68342 9.5976 2.29289 9.20708C1.90237 8.81655 1.90237 8.18339 2.29289 7.79286L5.58579 4.49997C6.36684 3.71892 7.63317 3.71892 8.41421 4.49997L11.7071 7.79286C12.0976 8.18339 12.0976 8.81655 11.7071 9.20708C11.3166 9.5976 10.6834 9.5976 10.2929 9.20708L8 6.91418V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V6.91418L3.70711 9.20708Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 5C18 4.44772 17.5523 4 17 4C16.4477 4 16 4.44772 16 5V17.0858L13.7071 14.7929C13.3166 14.4024 12.6834 14.4024 12.2929 14.7929C11.9024 15.1834 11.9024 15.8166 12.2929 16.2071L15.5858 19.5C16.3668 20.281 17.6332 20.281 18.4142 19.5L21.7071 16.2071C22.0976 15.8166 22.0976 15.1834 21.7071 14.7929C21.3166 14.4024 20.6834 14.4024 20.2929 14.7929L18 17.0858V5Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "7",
    y1: "3.91418",
    x2: "7",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17",
    y1: "4",
    x2: "17",
    y2: "20.0858",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const ArrowUp = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 21C12.5523 21 13 20.5523 13 20V4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5V20C11 20.5523 11.4477 21 12 21Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.79289 10.7071C5.18342 11.0976 5.81658 11.0976 6.20711 10.7071L12 4.91421L17.7929 10.7071C18.1834 11.0976 18.8166 11.0976 19.2071 10.7071C19.5976 10.3166 19.5976 9.68342 19.2071 9.29289L13.4142 3.5C12.6332 2.71895 11.3668 2.71895 10.5858 3.5L4.79289 9.29289C4.40237 9.68342 4.40237 10.3166 4.79289 10.7071Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "3.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "2.91421",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const AtSign = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.279 20 14.4852 19.7006 15.555 19.169C16.0495 18.9232 16.6497 19.1249 16.8955 19.6194C17.1413 20.114 16.9396 20.7142 16.445 20.96C15.1049 21.626 13.5947 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13C22 14.409 21.6473 15.5353 20.987 16.3277C20.3167 17.132 19.4033 17.5 18.5 17.5C17.2731 17.5 16.0324 16.8089 15.4101 15.6567C14.5168 16.4901 13.318 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.1256 7 14.1643 7.37194 15 7.99963C15.0002 7.44752 15.4478 7 16 7C16.5523 7 17 7.44772 17 8V14C17 14.8839 17.7362 15.5 18.5 15.5C18.8467 15.5 19.1833 15.368 19.4505 15.0473C19.7277 14.7147 20 14.091 20 13V12C20 7.58172 16.4183 4 12 4ZM15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Attachment = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.6997 7.61397C17.5281 6.44239 15.6286 6.44239 14.4571 7.61397L8.80022 13.2708C8.40969 13.6613 8.40969 14.2945 8.80022 14.685C9.19074 15.0756 9.82391 15.0756 10.2144 14.685L15.8713 9.02818C16.2618 8.63765 16.895 8.63765 17.2855 9.02818C17.676 9.4187 17.676 10.0519 17.2855 10.4424L11.6286 16.0992C10.4571 17.2708 8.55758 17.2708 7.386 16.0992C6.21443 14.9277 6.21443 13.0282 7.386 11.8566L13.0429 6.19975C14.9955 4.24713 18.1613 4.24713 20.1139 6.19975C22.0665 8.15237 22.0665 11.3182 20.1139 13.2708L14.4571 18.9277C11.7234 21.6613 7.29125 21.6613 4.55758 18.9277C1.82391 16.194 1.82391 11.7618 4.55758 9.02818L10.2144 3.37132C10.605 2.9808 11.2381 2.9808 11.6286 3.37132C12.0192 3.76185 12.0192 4.39501 11.6286 4.78554L5.97179 10.4424C4.01917 12.395 4.01917 15.5608 5.97179 17.5135C7.92441 19.4661 11.0902 19.4661 13.0429 17.5135L18.6997 11.8566C19.8713 10.685 19.8713 8.78554 18.6997 7.61397Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.0429",
    y1: "3.07843",
    x2: "12.0429",
    y2: "20.9779",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Badge = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7 13H17V21.156C17 21.8258 16.3543 22.3063 15.7127 22.1138L12 21L8.28735 22.1138C7.64574 22.3063 7 21.8258 7 21.156L7 13Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.0541 2.65824C11.1754 1.7027 12.8246 1.7027 13.9459 2.65824L14.0162 2.71817C14.4967 3.12764 15.0941 3.3751 15.7234 3.42532L15.8155 3.43267C17.284 3.54986 18.4501 4.71599 18.5673 6.18452L18.5747 6.27662C18.6249 6.90592 18.8724 7.50334 19.2818 7.98383L19.3418 8.05415C20.2973 9.17542 20.2973 10.8246 19.3418 11.9459L19.2818 12.0162C18.8724 12.4967 18.6249 13.0941 18.5747 13.7234L18.5673 13.8155C18.4501 15.284 17.284 16.4501 15.8155 16.5673L15.7234 16.5747C15.0941 16.6249 14.4967 16.8724 14.0162 17.2818L13.9459 17.3418C12.8246 18.2973 11.1754 18.2973 10.0541 17.3418L9.98383 17.2818C9.50334 16.8724 8.90592 16.6249 8.27662 16.5747L8.18452 16.5673C6.71599 16.4501 5.54986 15.284 5.43267 13.8155L5.42532 13.7234C5.3751 13.0941 5.12764 12.4967 4.71817 12.0162L4.65824 11.9459C3.7027 10.8246 3.7027 9.17542 4.65824 8.05415L4.71817 7.98383C5.12764 7.50334 5.3751 6.90592 5.42532 6.27662L5.43267 6.18452C5.54986 4.71599 6.71599 3.54986 8.18452 3.43267L8.27662 3.42532C8.90592 3.3751 9.50334 3.12764 9.98383 2.71817L10.0541 2.65824Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "13",
    x2: "12",
    y2: "22.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Bank = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10.2691 2.72161L3.02878 6.19695C1.11035 7.11779 1.76624 10 3.89424 10H20.1058C22.2338 10 22.8897 7.1178 20.9712 6.19695L13.7309 2.72161C12.6367 2.1964 11.3633 2.1964 10.2691 2.72161Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 11C12.5523 11 13 11.4477 13 12V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V12C11 11.4477 11.4477 11 12 11Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 11C5.55228 11 6 11.4477 6 12V18C6 18.5523 5.55228 19 5 19C4.44772 19 4 18.5523 4 18V12C4 11.4477 4.44772 11 5 11Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 11C19.5523 11 20 11.4477 20 12V18C20 18.5523 19.5523 19 19 19C18.4477 19 18 18.5523 18 18V12C18 11.4477 18.4477 11 19 11Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2.3277",
    x2: "12",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "5",
    y1: "11",
    x2: "5",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "19",
    y1: "11",
    x2: "19",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const BarChart = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 2C3.55228 2 4 2.44772 4 3V19C4 19.5523 4.44772 20 5 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 8C7.55228 8 8 8.44772 8 9V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V9C6 8.44772 6.44772 8 7 8Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 14C11.5523 14 12 14.4477 12 15V17C12 17.5523 11.5523 18 11 18C10.4477 18 10 17.5523 10 17V15C10 14.4477 10.4477 14 11 14Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 4C15.5523 4 16 4.44772 16 5V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V5C14 4.44772 14.4477 4 15 4Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 10C19.5523 10 20 10.4477 20 11V17C20 17.5523 19.5523 18 19 18C18.4477 18 18 17.5523 18 17V11C18 10.4477 18.4477 10 19 10Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "7",
    y1: "8",
    x2: "7",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "11",
    y1: "14",
    x2: "11",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "15",
    y1: "4",
    x2: "15",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "19",
    y1: "10",
    x2: "19",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Basket = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.7071 4.12132C12.3166 3.7308 11.6834 3.7308 11.2929 4.12132L8.41424 7H15.5858L12.7071 4.12132ZM9.87871 2.70711C11.0503 1.53554 12.9498 1.53554 14.1213 2.70711L20.4142 9H3.58582L9.87871 2.70711Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.16306 8.14142C2.077 7.53899 2.54446 7 3.15301 7H20.847C21.4555 7 21.923 7.53899 21.8369 8.14142L20.368 18.4243C20.1568 19.9022 18.8911 21 17.3981 21H6.60189C5.10894 21 3.84317 19.9022 3.63204 18.4243L2.16306 8.14142Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 11C8.55228 11 9 11.4477 9 12V16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16V12C7 11.4477 7.44772 11 8 11Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12C11 11.4477 11.4477 11 12 11Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 11C16.5523 11 17 11.4477 17 12V16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16V12C15 11.4477 15.4477 11 16 11Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "1.82843",
    x2: "12",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "8",
    y1: "11",
    x2: "8",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "16",
    y1: "11",
    x2: "16",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const BatteryCharging = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "6",
    y: "5",
    width: "12",
    height: "17",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H11C10.4477 4 10 3.55228 10 3Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.7071 9.79289C14.0977 10.1834 14.0977 10.8166 13.7071 11.2071L12.4142 12.5H14C14.4045 12.5 14.7691 12.7436 14.9239 13.1173C15.0787 13.491 14.9931 13.9211 14.7071 14.2071L11.7071 17.2071C11.3166 17.5976 10.6834 17.5976 10.2929 17.2071C9.9024 16.8166 9.9024 16.1834 10.2929 15.7929L11.5858 14.5H10C9.59557 14.5 9.23093 14.2564 9.07615 13.8827C8.92137 13.509 9.00692 13.0789 9.29292 12.7929L12.2929 9.79289C12.6834 9.40237 13.3166 9.40237 13.7071 9.79289Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "4",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "9.5",
    x2: "12",
    y2: "17.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const BatteryFull = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "6",
    y: "5",
    width: "12",
    height: "17",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H11C10.4477 4 10 3.55228 10 3Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 18C9 17.4477 9.44772 17 10 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H10C9.44772 19 9 18.5523 9 18Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H10C9.44772 16 9 15.5523 9 15Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H10C9.44772 13 9 12.5523 9 12Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 9C9 8.44772 9.44772 8 10 8H14C14.5523 8 15 8.44772 15 9C15 9.55228 14.5523 10 14 10H10C9.44772 10 9 9.55228 9 9Z",
    fill: "url(#paint5_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "4",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint5_linear",
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const BatteryHalf = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "6",
    y: "5",
    width: "12",
    height: "17",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H11C10.4477 4 10 3.55228 10 3Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 18C9 17.4477 9.44772 17 10 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H10C9.44772 19 9 18.5523 9 18Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H10C9.44772 16 9 15.5523 9 15Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "4",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const BatteryLow = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "6",
    y: "5",
    width: "12",
    height: "17",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H11C10.4477 4 10 3.55228 10 3Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 18C9 17.4477 9.44772 17 10 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H10C9.44772 19 9 18.5523 9 18Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "4",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Battery = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "6",
    y: "5",
    width: "12",
    height: "17",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H11C10.4477 4 10 3.55228 10 3Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "4",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const BluetoothOff = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.99996 8.5841V9.60789L6.57798 7.18399C6.1273 6.86476 5.50316 6.97132 5.18393 7.42199C4.8647 7.87267 4.97126 8.49681 5.42194 8.81604L9.91697 12L5.42194 15.184C4.97126 15.5032 4.8647 16.1274 5.18393 16.578C5.50316 17.0287 6.1273 17.1353 6.57798 16.816L9.99996 14.3921V20.0842C9.99996 21.2709 11.3128 21.9877 12.3111 21.3459L17.2947 18.1422C17.8059 17.8136 18.1051 17.3079 18.1888 16.7729L13.5101 12.0943L13.3771 12L13.3998 11.9839L9.99996 8.5841ZM12 19.1683V13.4755L16.2132 16.4598L12 19.1683Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.0555 10.8112L17.3692 9.17223C18.5257 8.35307 18.4868 6.62419 17.2947 5.85783L12.3111 2.65408C11.3128 2.01233 9.99996 2.7291 9.99996 3.91584V5.75567L12 7.75567V4.83168L16.2132 7.54018L13.6208 9.37648L15.0555 10.8112Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.6065",
    y1: "2.41339",
    x2: "11.6065",
    y2: "21.5866",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11.6065",
    y1: "2.41339",
    x2: "11.6065",
    y2: "21.5866",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Bluetooth = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4.83168V10.5246L16.2132 7.54018L12 4.83168ZM9.99996 9.60789V3.91584C9.99996 2.7291 11.3128 2.01233 12.3111 2.65408L17.2947 5.85783C18.4868 6.62419 18.5257 8.35307 17.3692 9.17223L13.3771 12L17.3692 14.8278C18.5257 15.647 18.4868 17.3758 17.2947 18.1422L12.3111 21.3459C11.3128 21.9877 9.99996 21.2709 9.99996 20.0842V14.3921L6.57798 16.816C6.1273 17.1353 5.50316 17.0287 5.18393 16.578C4.8647 16.1274 4.97126 15.5032 5.42194 15.184L9.91697 12L5.42194 8.81604C4.97126 8.49681 4.8647 7.87267 5.18393 7.42199C5.50316 6.97132 6.1273 6.86476 6.57798 7.18399L9.99996 9.60789ZM12 13.4755V19.1683L16.2132 16.4598L12 13.4755Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.6065",
    y1: "2.41339",
    x2: "11.6065",
    y2: "21.5866",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Bold = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.27273 5H13C14.6569 5 16 6.34315 16 8C16 9.65685 14.6569 11 13 11H8V6.27273C8 5.56982 8.56982 5 9.27273 5ZM6 6.27273C6 4.46525 7.46525 3 9.27273 3H13C15.7614 3 18 5.23858 18 8C18 9.43071 17.3991 10.7211 16.4359 11.6325C17.9657 12.4875 19 14.123 19 16C19 18.7614 16.7614 21 14 21H9.25C7.45507 21 6 19.5449 6 17.75V6.27273ZM8 13V17.75C8 18.4404 8.55964 19 9.25 19H14C15.6569 19 17 17.6569 17 16C17 14.3431 15.6569 13 14 13H8Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.5",
    y1: "3",
    x2: "12.5",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Book = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 4C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H8.02633C8.67123 20 9.3119 20.104 9.9237 20.3079L12 21L14.0763 20.3079C14.6881 20.104 15.3288 20 15.9737 20H19C20.6569 20 22 18.6569 22 17V7C22 5.34315 20.6569 4 19 4H15C13.8053 4 12.7329 4.52376 12 5.35418C11.2671 4.52376 10.1947 4 9 4H5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 7C2 5.34315 3.34315 4 5 4H9C10.1947 4 11.2671 4.52376 12 5.35418L12 21L9.9237 20.3079C9.3119 20.104 8.67123 20 8.02633 20H5C3.34315 20 2 18.6569 2 17V7Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "7",
    y1: "4",
    x2: "7",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Bookmark = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V18C20 20.4721 17.1777 21.8833 15.2 20.4L12 18L8.8 20.4C6.82229 21.8833 4 20.4721 4 18V5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 7C8 6.44772 8.44772 6 9 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H9C8.44772 8 8 7.55228 8 7Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "24",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "6",
    x2: "12",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Box = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.3798 2C6.50403 2 5.67198 2.38269 5.10204 3.04763L2.72223 5.82406C2.25618 6.36779 2 7.06031 2 7.77644V8V9V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V9V8V7.77644C22 7.06031 21.7438 6.36779 21.2778 5.82406L18.898 3.04763C18.328 2.38269 17.496 2 16.6202 2H7.3798Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M21.8978 7H2.10221C2.03485 7.25141 2 7.51232 2 7.77644V9H22V7.77644C22 7.51232 21.9652 7.25141 21.8978 7Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.3333 2H13.6667L15.8124 6.59793C15.936 6.86276 16 7.15145 16 7.4437V12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12V7.4437C8 7.15145 8.06405 6.86276 8.18763 6.59793L10.3333 2Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Briefcase = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "17",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "10",
    y: "12",
    width: "4",
    height: "2",
    rx: "1",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.24567 3.88583L7.8 5H5C3.34315 5 2 6.34315 2 8V10C2 11.6569 3.34315 13 5 13H8C8 11.3431 9.34315 10 11 10H13C14.6569 10 16 11.3431 16 13H19C20.6569 13 22 11.6569 22 10V8C22 6.34315 20.6569 5 19 5H16.2L15.7543 3.88583C15.2987 2.74685 14.1956 2 12.9689 2H11.0311C9.80439 2 8.70126 2.74685 8.24567 3.88583ZM12.9689 4H11.0311C10.6222 4 10.2545 4.24895 10.1026 4.62861L9.95407 5H14.0459L13.8974 4.62861C13.7455 4.24895 13.3778 4 12.9689 4Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "14",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Brush = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V11H4V5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.54383 15.3914C4.08033 15.1662 3 13.907 3 12.4262V12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12V12.4262C21 13.907 19.9197 15.1662 18.4562 15.3914L16.3439 15.7163C15.3055 15.8761 14.5677 16.8121 14.6549 17.8592L14.7509 19.0104C14.885 20.6197 13.6149 22 12 22V22C10.3851 22 9.11502 20.6197 9.24914 19.0104L9.34507 17.8592C9.43232 16.8121 8.69454 15.8761 7.65609 15.7163L5.54383 15.3914Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Building = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M14 8h3a3 3 0 013 3v11h-6V8z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 7.342a3 3 0 012.272-2.91l6-1.5A3 3 0 0116 5.842V22H4V7.342z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 17a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
    fill: "url(#prefix__paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 13a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
    fill: "url(#prefix__paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
    fill: "url(#prefix__paint4_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 21a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z",
    fill: "url(#prefix__paint5_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 17,
    y1: 8,
    x2: 17,
    y2: 22,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 10,
    y1: 2,
    x2: 10,
    y2: 22,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint2_linear",
    x1: 10,
    y1: 16,
    x2: 10,
    y2: 18,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint3_linear",
    x1: 10,
    y1: 12,
    x2: 10,
    y2: 14,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint4_linear",
    x1: 10,
    y1: 8,
    x2: 10,
    y2: 10,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint5_linear",
    x1: 12,
    y1: 20,
    x2: 12,
    y2: 22,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  }))));
});

const Bulb = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 14.7453C17.8135 13.4804 19 11.3787 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 11.3787 6.18652 13.4804 8 14.7453V15.5C8 17.1569 9.34315 18.5 11 18.5H13C14.6569 18.5 16 17.1569 16 15.5V14.7453Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 21C9 20.4477 9.44772 20 10 20H14C14.5523 20 15 20.4477 15 21C15 21.5523 14.5523 22 14 22H10C9.44772 22 9 21.5523 9 21Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "18.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Calendar = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "18",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V10H2V7Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 2C7.55228 2 8 2.44772 8 3V5C8 5.55228 7.55228 6 7 6C6.44772 6 6 5.55228 6 5V3C6 2.44772 6.44772 2 7 2Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 2C17.5523 2 18 2.44772 18 3V5C18 5.55228 17.5523 6 17 6C16.4477 6 16 5.55228 16 5V3C16 2.44772 16.4477 2 17 2Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "7",
    y1: "2",
    x2: "7",
    y2: "6",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "17",
    y1: "2",
    x2: "17",
    y2: "6",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Camera = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2 7C2 5.34315 3.34315 4 5 4H7L7.17082 3.65836C7.679 2.64201 8.71779 2 9.8541 2H14.1459C15.2822 2 16.321 2.64201 16.8292 3.65836L17 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "18",
    cy: "8",
    r: "1",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "18",
    y1: "7",
    x2: "18",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Cart = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 4C2 3.44772 2.44772 3 3 3H3.43845C4.81505 3 6.015 3.93689 6.34888 5.27239L6.53078 6H18.5068C20.426 6 21.8517 7.77725 21.4353 9.65079L20.3242 14.6508C20.0192 16.0234 18.8018 17 17.3957 17H9.56155C8.18495 17 6.985 16.0631 6.65112 14.7276L4.40859 5.75746C4.2973 5.3123 3.89731 5 3.43845 5H3C2.44772 5 2 4.55228 2 4Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.5 21C10.3284 21 11 20.3284 11 19.5C11 18.6716 10.3284 18 9.5 18C8.67157 18 8 18.6716 8 19.5C8 20.3284 8.67157 21 9.5 21Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.5 21C18.3284 21 19 20.3284 19 19.5C19 18.6716 18.3284 18 17.5 18C16.6716 18 16 18.6716 16 19.5C16 20.3284 16.6716 21 17.5 21Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.754",
    y1: "3",
    x2: "11.754",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "9.5",
    y1: "18",
    x2: "9.5",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "17.5",
    y1: "18",
    x2: "17.5",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Cast = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 12C2 11.4477 2.44772 11 3 11C7.41828 11 11 14.5817 11 19C11 19.5523 10.5523 20 10 20C9.44772 20 9 19.5523 9 19C9 15.6863 6.31371 13 3 13C2.44772 13 2 12.5523 2 12Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 15.5C2 14.9477 2.44772 14.5 3 14.5C5.48528 14.5 7.5 16.5147 7.5 19C7.5 19.5523 7.05228 20 6.5 20C5.94772 20 5.5 19.5523 5.5 19C5.5 17.6193 4.38071 16.5 3 16.5C2.44772 16.5 2 16.0523 2 15.5Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "3",
    cy: "19",
    r: "1",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "6.5",
    y1: "11",
    x2: "6.5",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "4.75",
    y1: "14.5",
    x2: "4.75",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "3",
    y1: "18",
    x2: "3",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Category = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "3",
    y: "3",
    width: "8",
    height: "8",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "3",
    y: "13",
    width: "8",
    height: "8",
    rx: "3",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "13",
    y: "3",
    width: "8",
    height: "8",
    rx: "3",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "13",
    y: "13",
    width: "8",
    height: "8",
    rx: "3",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "7",
    y1: "3",
    x2: "7",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "7",
    y1: "13",
    x2: "7",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "17",
    y1: "3",
    x2: "17",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "17",
    y1: "13",
    x2: "17",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const CenterAlign = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 10C6 9.44772 6.44772 9 7 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H7C6.44772 11 6 10.5523 6 10Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 18C6 17.4477 6.44772 17 7 17H17C17.5523 17 18 17.4477 18 18C18 18.5523 17.5523 19 17 19H7C6.44772 19 6 18.5523 6 18Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "13",
    x2: "12",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const CheckAll = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L9.12132 16.2929C7.94975 17.4645 6.05025 17.4645 4.87868 16.2929L2.29289 13.7071C1.90237 13.3166 1.90237 12.6834 2.29289 12.2929C2.68342 11.9024 3.31658 11.9024 3.70711 12.2929L6.29289 14.8787C6.68342 15.2692 7.31658 15.2692 7.70711 14.8787L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.707 7.24291C22.0976 7.63343 22.0976 8.26659 21.707 8.65712L14.0713 16.2929C12.8997 17.4645 11.0002 17.4645 9.82863 16.2929L7.24284 13.7071C6.85232 13.3166 6.85232 12.6834 7.24284 12.2929C7.63337 11.9024 8.26653 11.9024 8.65706 12.2929L11.2428 14.8787C11.6334 15.2692 12.2665 15.2692 12.6571 14.8787L20.2928 7.24291C20.6834 6.85238 21.3165 6.85238 21.707 7.24291Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "9.5",
    y1: "7",
    x2: "9.5",
    y2: "17.1716",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "14.4749",
    y1: "6.95001",
    x2: "14.4749",
    y2: "17.1716",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const CheckCircle = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19.3608 5.23092C19.8156 5.72529 20.2213 6.26561 20.5701 6.84411L12.4142 15C11.6332 15.781 10.3668 15.781 9.58579 15L6.79289 12.2071C6.40237 11.8166 6.40237 11.1834 6.79289 10.7929C7.18342 10.4024 7.81658 10.4024 8.20711 10.7929L11 13.5858L19.2929 5.29289C19.3148 5.27101 19.3374 5.25035 19.3608 5.23092Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "13.5351",
    y1: "5.23092",
    x2: "13.5351",
    y2: "15.5858",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Check = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L12.1213 16.2929C10.9497 17.4645 9.05026 17.4645 7.87868 16.2929L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929C4.68342 10.9024 5.31658 10.9024 5.70711 11.2929L9.29289 14.8787C9.68342 15.2692 10.3166 15.2692 10.7071 14.8787L19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.5",
    y1: "6",
    x2: "12.5",
    y2: "17.1716",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ChevronLeft = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.7071 19.2071C16.0976 18.8166 16.0976 18.1834 15.7071 17.7929L9.91421 12L15.7071 6.20711C16.0976 5.81658 16.0976 5.18342 15.7071 4.79289C15.3166 4.40237 14.6834 4.40237 14.2929 4.79289L8.5 10.5858C7.71895 11.3668 7.71895 12.6332 8.5 13.4142L14.2929 19.2071C14.6834 19.5976 15.3166 19.5976 15.7071 19.2071Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "16",
    y1: "12",
    x2: "7.91421",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ChevronDoubleLeft = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.2071 19.2071C12.5976 18.8166 12.5976 18.1834 12.2071 17.7929L6.41422 12L12.2071 6.20711C12.5976 5.81658 12.5976 5.18342 12.2071 4.79289C11.8166 4.40237 11.1834 4.40237 10.7929 4.79289L5 10.5858C4.21895 11.3668 4.21895 12.6332 5 13.4142L10.7929 19.2071C11.1834 19.5976 11.8166 19.5976 12.2071 19.2071Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.4571 19.2071C18.8476 18.8166 18.8476 18.1834 18.4571 17.7929L12.6642 12L18.4571 6.20711C18.8476 5.81658 18.8476 5.18342 18.4571 4.79289C18.0666 4.40237 17.4334 4.40237 17.0429 4.79289L11.25 10.5858C10.469 11.3668 10.469 12.6332 11.25 13.4142L17.0429 19.2071C17.4334 19.5976 18.0666 19.5976 18.4571 19.2071Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.5",
    y1: "12",
    x2: "4.41422",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "18.75",
    y1: "12",
    x2: "10.6642",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ChevronDoubleRight = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.543 19.207a1 1 0 010-1.414L17.336 12l-5.793-5.793a1 1 0 011.414-1.414l5.793 5.793a2 2 0 010 2.828l-5.793 5.793a1 1 0 01-1.414 0z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.293 19.207a1 1 0 010-1.414L11.086 12 5.293 6.207a1 1 0 011.414-1.414l5.793 5.793a2 2 0 010 2.828l-5.793 5.793a1 1 0 01-1.414 0z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 11.25,
    y1: 12,
    x2: 19.336,
    y2: 12,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 5,
    y1: 12,
    x2: 13.086,
    y2: 12,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  }))));
});

const ChevronDoubleDown = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.79289 11.7929C5.18342 11.4024 5.81658 11.4024 6.20711 11.7929L12 17.5858L17.7929 11.7929C18.1834 11.4024 18.8166 11.4024 19.2071 11.7929C19.5976 12.1834 19.5976 12.8166 19.2071 13.2071L13.4142 19C12.6332 19.781 11.3668 19.781 10.5858 19L4.79289 13.2071C4.40237 12.8166 4.40237 12.1834 4.79289 11.7929Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.79289 5.54289C5.18342 5.15237 5.81658 5.15237 6.20711 5.54289L12 11.3358L17.7929 5.54289C18.1834 5.15237 18.8166 5.15237 19.2071 5.54289C19.5976 5.93341 19.5976 6.56658 19.2071 6.9571L13.4142 12.75C12.6332 13.531 11.3668 13.531 10.5858 12.75L4.79289 6.95711C4.40237 6.56658 4.40237 5.93342 4.79289 5.54289Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "11.5",
    x2: "12",
    y2: "19.5858",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "5.25",
    x2: "12",
    y2: "13.3358",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ChevronDoubleUp = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.79289 12.4571C5.18342 12.8476 5.81658 12.8476 6.20711 12.4571L12 6.66422L17.7929 12.4571C18.1834 12.8476 18.8166 12.8476 19.2071 12.4571C19.5976 12.0666 19.5976 11.4334 19.2071 11.0429L13.4142 5.25C12.6332 4.46895 11.3668 4.46895 10.5858 5.25L4.79289 11.0429C4.40237 11.4334 4.40237 12.0666 4.79289 12.4571Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.79289 18.7071C5.18342 19.0976 5.81658 19.0976 6.20711 18.7071L12 12.9142L17.7929 18.7071C18.1834 19.0976 18.8166 19.0976 19.2071 18.7071C19.5976 18.3166 19.5976 17.6834 19.2071 17.2929L13.4142 11.5C12.6332 10.719 11.3668 10.719 10.5858 11.5L4.79289 17.2929C4.40237 17.6834 4.40237 18.3166 4.79289 18.7071Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "12.75",
    x2: "12",
    y2: "4.66422",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "10.9142",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ChevronDown = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.79289 8.54289C5.18342 8.15237 5.81658 8.15237 6.20711 8.54289L12 14.3358L17.7929 8.54289C18.1834 8.15237 18.8166 8.15237 19.2071 8.54289C19.5976 8.93341 19.5976 9.56658 19.2071 9.9571L13.4142 15.75C12.6332 16.531 11.3668 16.531 10.5858 15.75L4.79289 9.95711C4.40237 9.56658 4.40237 8.93342 4.79289 8.54289Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "8.25",
    x2: "12",
    y2: "16.3358",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ChevronRight = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.04289 19.2071C7.65237 18.8166 7.65237 18.1834 8.04289 17.7929L13.8358 12L8.04289 6.20711C7.65237 5.81658 7.65237 5.18342 8.04289 4.79289C8.43342 4.40237 9.06658 4.40237 9.45711 4.79289L15.25 10.5858C16.031 11.3668 16.031 12.6332 15.25 13.4142L9.45711 19.2071C9.06658 19.5976 8.43342 19.5976 8.04289 19.2071Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "7.75",
    y1: "12",
    x2: "15.8358",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ChevronUp = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.79289 15.4571C5.18342 15.8476 5.81658 15.8476 6.20711 15.4571L12 9.66422L17.7929 15.4571C18.1834 15.8476 18.8166 15.8476 19.2071 15.4571C19.5976 15.0666 19.5976 14.4334 19.2071 14.0429L13.4142 8.25C12.6332 7.46895 11.3668 7.46895 10.5858 8.25L4.79289 14.0429C4.40237 14.4334 4.40237 15.0666 4.79289 15.4571Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "15.75",
    x2: "12",
    y2: "7.66422",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Chip = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "6",
    y: "6",
    width: "12",
    height: "12",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 16C2 15.4477 2.44772 15 3 15H4C4.55228 15 5 15.4477 5 16C5 16.5523 4.55228 17 4 17H3C2.44772 17 2 16.5523 2 16Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 16C19 15.4477 19.4477 15 20 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H20C19.4477 17 19 16.5523 19 16Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 12C2 11.4477 2.44772 11 3 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H3C2.44772 13 2 12.5523 2 12Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 12C19 11.4477 19.4477 11 20 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20C19.4477 13 19 12.5523 19 12Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 8C2 7.44772 2.44772 7 3 7H4C4.55228 7 5 7.44772 5 8C5 8.55228 4.55228 9 4 9H3C2.44772 9 2 8.55228 2 8Z",
    fill: "url(#paint5_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 8C19 7.44772 19.4477 7 20 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H20C19.4477 9 19 8.55228 19 8Z",
    fill: "url(#paint6_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 2C16.5523 2 17 2.44772 17 3V4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4V3C15 2.44772 15.4477 2 16 2Z",
    fill: "url(#paint7_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 19C16.5523 19 17 19.4477 17 20V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V20C15 19.4477 15.4477 19 16 19Z",
    fill: "url(#paint8_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2C12.5523 2 13 2.44772 13 3V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V3C11 2.44772 11.4477 2 12 2Z",
    fill: "url(#paint9_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 19C12.5523 19 13 19.4477 13 20V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V20C11 19.4477 11.4477 19 12 19Z",
    fill: "url(#paint10_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 2C8.55228 2 9 2.44772 9 3V4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4V3C7 2.44772 7.44772 2 8 2Z",
    fill: "url(#paint11_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 19C8.55228 19 9 19.4477 9 20V21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21V20C7 19.4477 7.44772 19 8 19Z",
    fill: "url(#paint12_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "6",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "3.5",
    y1: "15",
    x2: "3.5",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "20.5",
    y1: "15",
    x2: "20.5",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "3.5",
    y1: "11",
    x2: "3.5",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "20.5",
    y1: "11",
    x2: "20.5",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint5_linear",
    x1: "3.5",
    y1: "7",
    x2: "3.5",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint6_linear",
    x1: "20.5",
    y1: "7",
    x2: "20.5",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint7_linear",
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint8_linear",
    x1: "16",
    y1: "19",
    x2: "16",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint9_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint10_linear",
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint11_linear",
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint12_linear",
    x1: "8",
    y1: "19",
    x2: "8",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Chrome = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12.0828 7L20.6601 7C17.8986 2.21709 11.7828 0.578349 6.99984 3.33977C6.09465 3.86238 5.30208 4.50513 4.63064 5.23626L7.40155 10.0356C7.81141 9.07421 8.525 8.23274 9.49979 7.66994C10.3144 7.19965 11.2062 6.98461 12.0828 7Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.82816 21.7614C7.19018 21.1738 4.79742 19.5251 3.33958 17C1.48889 13.7945 1.61459 9.99029 3.3386 6.99839L7.66263 14.4878L7.66967 14.5001C8.70149 16.2872 10.67 17.1964 12.5971 16.9656L9.82816 21.7614Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.9988 22.0017C13.6987 22.0034 15.4218 21.5713 16.9998 20.6603C21.1366 18.2719 22.9213 13.3743 21.5415 8.99999L16.0004 9C16.1186 9.15808 16.2288 9.32486 16.3299 9.50007C17.2723 11.1324 17.1898 13.0752 16.2819 14.5833L11.9988 22.0017Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.9998",
    y1: "1.99835",
    x2: "11.9998",
    y2: "22.0017",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11.9998",
    y1: "1.99835",
    x2: "11.9998",
    y2: "22.0017",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "11.9998",
    y1: "1.99835",
    x2: "11.9998",
    y2: "22.0017",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Clipboard = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "19",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 3C14 1.89543 13.1046 1 12 1C10.8954 1 10 1.89543 10 3H8V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3H14Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 11C7 10.4477 7.44772 10 8 10L16 10C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12L8 12C7.44772 12 7 11.5523 7 11Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 15C7 14.4477 7.44772 14 8 14L12 14C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16L8 16C7.44772 16 7 15.5523 7 15Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "6",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "10",
    x2: "12",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "10",
    y1: "14",
    x2: "10",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Clock = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 6C12.5523 6 13 6.44772 13 7V11.5858L15.2071 13.7929C15.5976 14.1834 15.5976 14.8166 15.2071 15.2071C14.8166 15.5976 14.1834 15.5976 13.7929 15.2071L11.5858 13C11.2107 12.6249 11 12.1162 11 11.5858V7C11 6.44772 11.4477 6 12 6Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "13.25",
    y1: "6",
    x2: "13.25",
    y2: "15.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const CloseCircle = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.29292 14.2929C7.9024 14.6834 7.9024 15.3166 8.29292 15.7071C8.68345 16.0976 9.31661 16.0976 9.70714 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0977 15.3166 16.0977 15.7071 15.7071C16.0976 15.3166 16.0976 14.6835 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0977 9.31658 16.0977 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29292C9.31658 7.9024 8.68342 7.9024 8.29289 8.29292C7.90237 8.68345 7.90237 9.31661 8.29289 9.70714L10.5858 12L8.29292 14.2929Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Close = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.29292 18.7071C4.9024 18.3166 4.9024 17.6834 5.29292 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0977 5.68342 19.0977 6.31658 18.7071 6.70711L6.70714 18.7071C6.31661 19.0976 5.68345 19.0976 5.29292 18.7071Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.2929",
    y1: "11.2929",
    x2: "12.7071",
    y2: "12.7071",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12.7071",
    y1: "11.2929",
    x2: "11.2929",
    y2: "12.7071",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const CloudDownload = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 9C22 12.866 18.866 16 15 16H7C4.23858 16 2 13.7614 2 11C2 8.23858 4.23858 6 7 6C7.54527 6 8.07015 6.08728 8.56143 6.24864C9.63037 3.75042 12.1108 2 15 2C18.866 2 22 5.13401 22 9Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.70711 17.2929C9.31658 16.9024 8.68342 16.9024 8.29289 17.2929C7.90237 17.6834 7.90237 18.3166 8.29289 18.7071L11.2929 21.7071C11.4874 21.9016 11.7421 21.9992 11.997 22L12 22L12.003 22C12.1375 21.9996 12.2657 21.9727 12.3828 21.9241C12.5007 21.8753 12.6112 21.803 12.7071 21.7071L15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929C15.3166 16.9024 14.6834 16.9024 14.2929 17.2929L13 18.5858V13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13V18.5858L9.70711 17.2929Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const CloudOff = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9.3216 7.90574C9.02136 8.32142 8.76564 8.77138 8.56143 9.24864C8.07015 9.08728 7.54527 9 7 9C4.23858 9 2 11.2386 2 14C2 16.7614 4.23858 19 7 19H15C16.5287 19 17.943 18.51 19.0943 17.6784L9.3216 7.90574Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20.5329 16.2886C21.4525 15.1039 22 13.6159 22 12C22 8.13401 18.866 5 15 5C13.3841 5 11.8961 5.54751 10.7114 6.46713L20.5329 16.2886Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const CloudUpload = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 10C22 13.866 18.866 17 15 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C7.54527 7 8.07015 7.08728 8.56143 7.24864C9.63037 4.75042 12.1108 3 15 3C18.866 3 22 6.13401 22 10Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L11.2929 11.2929C11.4874 11.0984 11.7421 11.0008 11.997 11L12 11L12.003 11C12.1375 11.0004 12.2657 11.0273 12.3828 11.0759C12.5007 11.1247 12.6112 11.197 12.7071 11.2929L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L13 14.4142V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V14.4142L9.70711 15.7071Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Cloud = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 12C22 15.866 18.866 19 15 19H7C4.23858 19 2 16.7614 2 14C2 11.2386 4.23858 9 7 9C7.54527 9 8.07015 9.08728 8.56143 9.24864C9.63037 6.75042 12.1108 5 15 5C18.866 5 22 8.13401 22 12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Code = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.2929 16.7071C15.9024 16.3166 15.9024 15.6834 16.2929 15.2929L19.5858 12L16.2929 8.7071C15.9024 8.31657 15.9024 7.68341 16.2929 7.29289C16.6834 6.90236 17.3166 6.90236 17.7071 7.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L17.7071 16.7071C17.3166 17.0976 16.6834 17.0976 16.2929 16.7071Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.70711 16.7071C8.09763 16.3166 8.09763 15.6834 7.70711 15.2929L4.41421 12L7.70711 8.7071C8.09763 8.31657 8.09763 7.68341 7.70711 7.29289C7.31658 6.90236 6.68342 6.90236 6.29289 7.29289L2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L6.29289 16.7071C6.68342 17.0976 7.31658 17.0976 7.70711 16.7071Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.2747 4.03849C13.7437 3.88677 13.1902 4.19426 13.0385 4.72529L9.03846 18.7253C8.88674 19.2563 9.19423 19.8098 9.72527 19.9615C10.2563 20.1133 10.8098 19.8058 10.9615 19.2747L14.9615 5.27473C15.1132 4.7437 14.8057 4.19021 14.2747 4.03849Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "16",
    y1: "12",
    x2: "22",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "8",
    y1: "12",
    x2: "2",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "3.99976",
    x2: "12",
    y2: "20.0003",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Coffee = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 3C3.89543 3 3 3.89543 3 5V13C3 15.7614 5.23858 18 8 18H13C15.6482 18 17.8155 15.9413 17.9888 13.3371L19.9487 12.6838C21.1737 12.2754 22 11.129 22 9.83772V7C22 5.89543 21.1046 5 20 5H18C18 3.89543 17.1046 3 16 3H5ZM18 11.2251V7H20V9.83772C20 10.2682 19.7246 10.6503 19.3162 10.7864L18 11.2251Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 20C2 19.4477 2.44772 19 3 19H19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H3C2.44772 21 2 20.5523 2 20Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.5",
    y1: "3",
    x2: "12.5",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11",
    y1: "19",
    x2: "11",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Collapse = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 19C16 17.3431 17.3431 16 19 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19C18.4477 18 18 18.4477 18 19V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V19Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 5C16 6.65685 17.3431 8 19 8H21C21.5523 8 22 7.55228 22 7C22 6.44772 21.5523 6 21 6H19C18.4477 6 18 5.55228 18 5V3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3V5Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 5C8 6.65685 6.65685 8 5 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H5C5.55228 6 6 5.55228 6 5V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V5Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 19C8 17.3431 6.65685 16 5 16H3C2.44772 16 2 16.4477 2 17C2 17.5523 2.44772 18 3 18H5C5.55228 18 6 18.4477 6 19V21C6 21.5523 6.44772 22 7 22C7.55228 22 8 21.5523 8 21V19Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "19",
    y1: "16",
    x2: "19",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "19",
    y1: "8",
    x2: "19",
    y2: "2",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "5",
    y1: "8",
    x2: "5",
    y2: "2",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "5",
    y1: "16",
    x2: "5",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ColorPalette = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.7866 14C20.9581 14 22 13.1714 22 12V12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22V22C13.1714 22 14 20.9581 14 19.7866V18C14 15.7909 15.7909 14 18 14H19.7866Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "11.5",
    cy: "6",
    r: "1.5",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "17.5",
    cy: "9.5",
    r: "1.5",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "6.5",
    cy: "10",
    r: "1.5",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "8",
    cy: "16.5",
    r: "1.5",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11.5",
    y1: "4.5",
    x2: "11.5",
    y2: "7.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "17.5",
    y1: "8",
    x2: "17.5",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "6.5",
    y1: "8.5",
    x2: "6.5",
    y2: "11.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "8",
    y1: "15",
    x2: "8",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Command = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5V8H14V6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10H16V14H17.5C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5V16H10V17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14H8V10H6.5C4.567 10 3 8.433 3 6.5ZM8 8V6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8H8ZM10 10V14H14V10H10ZM8 16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19C7.32843 19 8 18.3284 8 17.5V16ZM16 16V17.5C16 18.3284 16.6716 19 17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16H16ZM16 8H17.5C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5V8Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Compass = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.3512 9.1808L15.4401 7.27247C16.244 6.97101 17.029 7.75604 16.7275 8.55992L14.8192 13.6488C14.6164 14.1896 14.1896 14.6164 13.6488 14.8192L8.55992 16.7275C7.75604 17.029 6.97101 16.244 7.27247 15.4401L9.1808 10.3512C9.38361 9.81036 9.81036 9.38361 10.3512 9.1808Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "6.5",
    x2: "12",
    y2: "17.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Crop = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17 21C17 21.5523 17.4477 22 18 22C18.5523 22 19 21.5523 19 21L19 8C19 6.34315 17.6569 5 16 5L7 5V7L16 7C16.5523 7 17 7.44772 17 8L17 21Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 7V5L3 5C2.44772 5 2 5.44772 2 6C2 6.55229 2.44772 7 3 7L5 7Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 18C22 18.5523 21.5523 19 21 19L8 19C6.34315 19 5 17.6569 5 16L5 3C5 2.44771 5.44772 2 6 2C6.55229 2 7 2.44771 7 3L7 16C7 16.5523 7.44772 17 8 17L21 17C21.5523 17 22 17.4477 22 18Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10.5",
    y1: "5",
    x2: "10.5",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "10.5",
    y1: "5",
    x2: "10.5",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "13.5",
    y1: "2",
    x2: "13.5",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Crosshairs = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V4.06189C7.38128 4.51314 4.51314 7.38128 4.06189 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4.06189C4.51314 16.6187 7.38128 19.4869 11 19.9381V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V19.9381C16.6187 19.4869 19.4869 16.6187 19.9381 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H19.9381C19.4869 7.38128 16.6187 4.51314 13 4.06189V3ZM18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Cursor = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.6603 14.8384C13.1386 14.5623 13.7502 14.7262 14.0264 15.2045L17.0264 20.4006C17.3025 20.8789 17.1386 21.4905 16.6603 21.7666C16.182 22.0428 15.5705 21.8789 15.2943 21.4006L12.2943 16.2045C12.0182 15.7262 12.182 15.1146 12.6603 14.8384Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5.46714 17.8244L4.19279 4.72415C3.98498 2.58785 6.38862 1.20012 8.1348 2.44823L18.8428 10.102C20.5895 11.3505 20.0536 14.0749 17.9642 14.5688L14.0361 15.4974C13.4648 15.6325 12.9457 15.9322 12.543 16.3595L9.77481 19.297C8.30232 20.8595 5.67501 19.9614 5.46714 17.8244Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.6603",
    y1: "14.8384",
    x2: "16.6603",
    y2: "21.7666",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12.0353",
    y1: "1.97607",
    x2: "12.0353",
    y2: "20.0857",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Dashboard = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 3C6.477 3 2 7.477 2 13c0 2.344.807 4.5 2.158 6.205.18.227.457.351.747.351h14.19c.29 0 .568-.124.747-.35A9.957 9.957 0 0022 13c0-5.523-4.477-10-10-10z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.207 9.207a1 1 0 00-1.414-1.414l-3.275 3.275a2 2 0 101.414 1.414l3.275-3.275z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 12,
    y1: 3,
    x2: 12,
    y2: 19.556,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 13.75,
    y1: 7.5,
    x2: 13.75,
    y2: 15,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  }))));
});

const Database = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 16C17.0495 16 21 14.2723 21 12V7H3V12C3 14.2723 6.95053 16 12 16Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 12C21 14.2723 17.0495 16 12 16C6.95053 16 3 14.2723 3 12V17C3 19.2723 6.95053 21 12 21C17.0495 21 21 19.2723 21 17V12Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M21 7.11429C21 9.38654 16.9706 11 12 11C7.02944 11 3 9.38654 3 7.11429C3 4.84203 7.02944 3 12 3C16.9706 3 21 4.84203 21 7.11429Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Design = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2.80763 9.8787C1.63606 8.70713 1.63606 6.80763 2.80763 5.63606L5.63606 2.80763C6.80763 1.63606 8.70713 1.63606 9.8787 2.80763L21.1924 14.1213C22.364 15.2929 22.364 17.1924 21.1924 18.364L18.364 21.1924C17.1924 22.364 15.2929 22.364 14.1213 21.1924L2.80763 9.8787Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.4202 2.9645C16.5918 1.79292 18.4913 1.79292 19.6629 2.96449L21.0771 4.37871C22.2487 5.55028 22.2487 7.44977 21.0771 8.62134L9.32772 20.3708C9.04852 20.65 8.69292 20.8403 8.30573 20.9178L3.29933 21.9191C2.59961 22.059 1.98269 21.4421 2.12264 20.7424L3.12392 15.7359C3.20135 15.3488 3.39166 14.9932 3.67086 14.714L15.4202 2.9645Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "1.92896",
    x2: "12",
    y2: "22.0711",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12.0292",
    y1: "2.08582",
    x2: "12.0292",
    y2: "21.939",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Diamond = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M1.84023 7.1842L4.76734 3.21844C5.3329 2.45219 6.22869 2 7.18106 2H16.8189C17.7713 2 18.6671 2.45219 19.2327 3.21844L22.1598 7.1842C22.9535 8.25957 22.9401 9.73033 22.1269 10.791L14.3808 20.8946C13.18 22.4609 10.82 22.4609 9.61918 20.8946L1.87314 10.791C1.05992 9.73033 1.0465 8.25957 1.84023 7.1842Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M22.7458 9H1.2541C1.24684 8.36315 1.44181 7.72409 1.83994 7.18453V7.18453L4.76729 3.21844C5.33285 2.45219 6.22864 2 7.18101 2H16.8189C17.7713 2 18.667 2.45219 19.2326 3.21844L22.1597 7.1842L22.1607 7.18557C22.5583 7.72491 22.7531 8.36356 22.7458 9Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "24",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Document = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3 5a3 3 0 013-3h9.757a3 3 0 012.122.879L20.12 5.12A3 3 0 0121 7.243V19a3 3 0 01-3 3H6a3 3 0 01-3-3V5z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 11a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 15a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z",
    fill: "url(#prefix__paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.707 2.707l2.586 2.586C20.746 5.746 21 6.36 21 7h-3a2 2 0 01-2-2V2c.64 0 1.254.254 1.707.707z",
    fill: "url(#prefix__paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 12,
    y1: 2,
    x2: 12,
    y2: 22,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 12,
    y1: 10,
    x2: 12,
    y2: 12,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint2_linear",
    x1: 10,
    y1: 14,
    x2: 10,
    y2: 16,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint3_linear",
    x1: 18.5,
    y1: 2,
    x2: 18.5,
    y2: 7,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  }))));
});

const Dollar = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C12.5523 1 13 1.44772 13 2V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2C11 1.44772 11.4477 1 12 1Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 19C12.5523 19 13 19.4477 13 20V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20C11 19.4477 11.4477 19 12 19Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 7C5 4.79086 6.79086 3 9 3H15C17.2091 3 19 4.79086 19 7V8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8V7C17 5.89543 16.1046 5 15 5H9C7.89543 5 7 5.89543 7 7V7.11696C7 8.40825 7.82629 9.55467 9.05132 9.96301L15.5811 12.1396C17.6228 12.8202 19 14.7309 19 16.883V17C19 19.2091 17.2091 21 15 21H9C6.79086 21 5 19.2091 5 17V16C5 15.4477 5.44772 15 6 15C6.55228 15 7 15.4477 7 16V17C7 18.1046 7.89543 19 9 19H15C16.1046 19 17 18.1046 17 17V16.883C17 15.5917 16.1737 14.4453 14.9487 14.037L8.41886 11.8604C6.37715 11.1798 5 9.26912 5 7.11696V7Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "23",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const DonutChart = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M11 4.99999C11 4.4477 10.5509 3.99424 10.002 4.05548C8.57508 4.21469 7.20174 4.7137 5.99987 5.51676C4.51983 6.50569 3.36628 7.9113 2.68509 9.55584C2.0039 11.2004 1.82567 13.01 2.17294 14.7558C2.5202 16.5016 3.37737 18.1053 4.63604 19.3639C5.89472 20.6226 7.49836 21.4798 9.24419 21.8271C10.99 22.1743 12.7996 21.9961 14.4442 21.3149C16.0887 20.6337 17.4943 19.4802 18.4832 18.0001C19.2863 16.7982 19.7853 15.4249 19.9445 13.9979C20.0057 13.4491 19.5523 13 19 13H15.0079C14.4556 13 14.0234 13.4596 13.8432 13.9817C13.7596 14.2239 13.6449 14.4557 13.501 14.6711C13.1705 15.1657 12.7007 15.5513 12.1511 15.7789C11.6015 16.0066 10.9967 16.0661 10.4132 15.9501C9.82972 15.834 9.29376 15.5476 8.8731 15.1269C8.45244 14.7062 8.16597 14.1703 8.04991 13.5868C7.93385 13.0033 7.99341 12.3985 8.22107 11.8489C8.44873 11.2993 8.83426 10.8295 9.32891 10.499C9.54426 10.3551 9.77608 10.2404 10.0183 10.1568C10.5404 9.97655 11 9.54438 11 8.99209V4.99999Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M21 11C21.5523 11 22.0057 10.5509 21.9445 10.002C21.8509 9.16274 21.6394 8.33912 21.3149 7.55583C20.8626 6.4639 20.1997 5.47175 19.364 4.63602C18.5282 3.8003 17.5361 3.13736 16.4442 2.68507C15.6609 2.36062 14.8372 2.14912 13.9979 2.05548C13.4491 1.99424 13 2.4477 13 2.99998V6.99209C13 7.54438 13.4596 7.97655 13.9817 8.1568C14.0387 8.17648 14.0952 8.19791 14.1511 8.22105C14.516 8.37221 14.8476 8.59377 15.1269 8.87308C15.4062 9.15239 15.6278 9.48398 15.7789 9.84891C15.8021 9.90479 15.8235 9.96128 15.8432 10.0183C16.0234 10.5403 16.4556 11 17.0079 11H21Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10.975",
    y1: "4.04993",
    x2: "10.975",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17.475",
    y1: "2.04993",
    x2: "17.475",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Download = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M13.0019 4.99959C13.0019 4.4473 12.5542 3.99959 12.0019 3.99959C11.4496 3.99959 11.0019 4.4473 11.0019 4.99959V13.0859L8.20894 10.2929C7.81841 9.90237 7.18525 9.90237 6.79472 10.2929C6.4042 10.6834 6.4042 11.3166 6.79472 11.7071L10.5877 15.5C11.3687 16.2811 12.635 16.2811 13.4161 15.5L17.2071 11.7091C17.5976 11.3185 17.5976 10.6854 17.2071 10.2948C16.8166 9.90432 16.1834 9.90432 15.7929 10.2948L13.0019 13.0858V4.99959Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 14C4.55228 14 5 14.4477 5 15V17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V17C21 18.6569 19.6569 20 18 20H6C4.34315 20 3 18.6569 3 17V15C3 14.4477 3.44772 14 4 14Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.0009",
    y1: "3.99959",
    x2: "12.0009",
    y2: "16.0858",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Drop = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18.2725 8.94348C19.3752 10.319 20.0348 12.0651 20.0348 13.9652C20.0348 18.4027 16.4375 22 12 22C7.5625 22 3.96521 18.4027 3.96521 13.9652C3.96521 12.0651 4.62478 10.319 5.72747 8.94348L5.73397 8.93538C5.73397 8.93538 8.52282 5.20153 10.6792 2.56137C11.3689 1.71688 12.6313 1.71655 13.3215 2.56071C15.4847 5.20669 18.2772 8.94348 18.2772 8.94348H18.2725Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.90112 14.02C7.44236 13.9101 7.9702 14.2598 8.08006 14.8011C8.39785 16.3666 9.63342 17.6022 11.199 17.92C11.7402 18.0298 12.0899 18.5577 11.98 19.0989C11.8702 19.6402 11.3423 19.9899 10.8011 19.88C8.44838 19.4024 6.59761 17.5517 6.12004 15.1989C6.01017 14.6577 6.35987 14.1299 6.90112 14.02Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "1",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "9.05004",
    y1: "13.9998",
    x2: "9.05004",
    y2: "19.9002",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Edit = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3.98549 21.1911L8.9919 20.1898C9.37908 20.1124 9.73468 19.9221 10.0139 19.6429L18.0666 11.5901L12.4098 5.93329L4.35702 13.986C4.07782 14.2652 3.88751 14.6208 3.81007 15.008L2.80879 20.0144C2.66885 20.7141 3.28577 21.3311 3.98549 21.1911Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20.1924 5.22182L18.7782 3.8076C17.6067 2.63603 15.7072 2.63603 14.5356 3.80761L12.4099 5.93328L18.0668 11.5901L20.1924 9.46446C21.364 8.29288 21.364 6.39339 20.1924 5.22182Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10.4277",
    y1: "5.93329",
    x2: "10.4277",
    y2: "21.2111",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "16.7405",
    y1: "2.92892",
    x2: "16.7405",
    y2: "11.5901",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const EventAdd = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "18",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 2C7.55228 2 8 2.44772 8 3V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V3C6 2.44772 6.44772 2 7 2Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 2C17.5523 2 18 2.44772 18 3V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V3C16 2.44772 16.4477 2 17 2Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10L11 12H9C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H11L11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16L13 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H13L13 10Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "7",
    y1: "2",
    x2: "7",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "17",
    y1: "2",
    x2: "17",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const EventScheduled = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "18",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 2C7.55228 2 8 2.44772 8 3V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V3C6 2.44772 6.44772 2 7 2Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 2C17.5523 2 18 2.44772 18 3V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V3C16 2.44772 16.4477 2 17 2Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071L7.79289 14.2071C7.40237 13.8166 7.40237 13.1834 7.79289 12.7929C8.18342 12.4024 8.81658 12.4024 9.20711 12.7929L11 14.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "7",
    y1: "2",
    x2: "7",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "17",
    y1: "2",
    x2: "17",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12.25",
    y1: "10",
    x2: "12.25",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Expand = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 5C2 3.34315 3.34315 2 5 2H7C7.55228 2 8 2.44772 8 3C8 3.55228 7.55228 4 7 4H5C4.44772 4 4 4.44772 4 5V7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7V5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 19C2 20.6569 3.34315 22 5 22H7C7.55228 22 8 21.5523 8 21C8 20.4477 7.55228 20 7 20H5C4.44772 20 4 19.5523 4 19V17C4 16.4477 3.55228 16 3 16C2.44772 16 2 16.4477 2 17V19Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 19C22 20.6569 20.6569 22 19 22H17C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 20.4477 16 21 16C21.5523 16 22 16.4477 22 17V19Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 5C22 3.34315 20.6569 2 19 2H17C16.4477 2 16 2.44772 16 3C16 3.55228 16.4477 4 17 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 20.4477 8 21 8C21.5523 8 22 7.55228 22 7V5Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "5",
    y1: "2",
    x2: "5",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "5",
    y1: "22",
    x2: "5",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "19",
    y1: "22",
    x2: "19",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "19",
    y1: "2",
    x2: "19",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Facebook = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 7C13 5.89543 13.8954 5 15 5H16C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3H15C12.7909 3 11 4.79086 11 7V9H8.5C7.94772 9 7.5 9.44772 7.5 10C7.5 10.5523 7.94772 11 8.5 11H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V11H15.5C16.0523 11 16.5 10.5523 16.5 10C16.5 9.44772 16.0523 9 15.5 9H13V7Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.25",
    y1: "3",
    x2: "12.25",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const FastLeft = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M13.2 9.6C11.6 10.8 11.6 13.2 13.2 14.4L17.2 17.4C19.1777 18.8833 22 17.4721 22 15V9C22 6.52786 19.1777 5.11672 17.2 6.6L13.2 9.6Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.2 9.6C1.6 10.8 1.6 13.2 3.2 14.4L7.2 17.4C9.17771 18.8833 12 17.4721 12 15V9C12 6.52786 9.17771 5.11672 7.2 6.6L3.2 9.6Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "16",
    y1: "3",
    x2: "16",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "6",
    y1: "3",
    x2: "6",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const FastRight = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10.8 9.60003C12.4 10.8 12.4 13.2 10.8 14.4L6.8 17.4C4.82229 18.8833 2 17.4722 2 15V9.00003C2 6.52789 4.82229 5.11675 6.8 6.60003L10.8 9.60003Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20.8 9.6C22.4 10.8 22.4 13.2 20.8 14.4L16.8 17.4C14.8223 18.8833 12 17.4721 12 15V9C12 6.52786 14.8223 5.11672 16.8 6.6L20.8 9.6Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "8",
    y1: "3.00003",
    x2: "8",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "18",
    y1: "3",
    x2: "18",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Figma = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "15",
    cy: "12",
    r: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 6C6 4.34315 7.34315 3 9 3H12V9H9C7.34315 9 6 7.65685 6 6V6Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 3H15C16.6569 3 18 4.34315 18 6V6C18 7.65685 16.6569 9 15 9H12V3Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 12C6 10.3431 7.34314 9 8.99999 9L11 9C11.5523 9 12 9.44772 12 10V14C12 14.5523 11.5523 15 11 15H8.99999C7.34314 15 6 13.6568 6 12V12Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 18C6 16.3431 7.34315 15 9 15H11C11.5523 15 12 15.4477 12 16V18C12 19.6569 10.6569 21 9 21V21C7.34315 21 6 19.6569 6 18V18Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "15",
    y1: "9",
    x2: "15",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "9",
    y1: "3",
    x2: "9",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "15",
    y1: "3",
    x2: "15",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "9",
    y1: "9",
    x2: "9",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "9",
    y1: "15",
    x2: "9",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const FileAdd = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3 5C3 3.34315 4.34315 2 6 2H15.7574C16.553 2 17.3161 2.31607 17.8787 2.87868L20.1213 5.12132C20.6839 5.68393 21 6.44699 21 7.24264V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.7071 2.70711L20.2929 5.29289C20.7456 5.74565 21 6.35971 21 7H18C16.8954 7 16 6.10457 16 5V2C16.6403 2 17.2544 2.25435 17.7071 2.70711Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10L11 12H9C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H11L11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16L13 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H13L13 10Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "18.5",
    y1: "2",
    x2: "18.5",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const File = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3 5C3 3.34315 4.34315 2 6 2H15.7574C16.553 2 17.3161 2.31607 17.8787 2.87868L20.1213 5.12132C20.6839 5.68393 21 6.44699 21 7.24264V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.7071 2.70711L20.2929 5.29289C20.7456 5.74565 21 6.35971 21 7H18C16.8954 7 16 6.10457 16 5V2C16.6403 2 17.2544 2.25435 17.7071 2.70711Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "18.5",
    y1: "2",
    x2: "18.5",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Files = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3 9C3 7.34315 4.34315 6 6 6H12.7574C13.553 6 14.3161 6.31607 14.8787 6.87868L16.1213 8.12132C16.6839 8.68393 17 9.44699 17 10.2426V19C17 20.6569 15.6569 22 14 22H6C4.34315 22 3 20.6569 3 19V9Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7 5C7 3.34315 8.34315 2 10 2H15.7574C16.553 2 17.3161 2.31607 17.8787 2.87868L20.1213 5.12132C20.6839 5.68393 21 6.44699 21 7.24264V15C21 16.6569 19.6569 18 18 18H10C8.34315 18 7 16.6569 7 15V5Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 5V2C16.6403 2 17.2544 2.25435 17.7071 2.70711L20.2929 5.29289C20.7456 5.74565 21 6.35971 21 7H18C16.8954 7 16 6.10457 16 5Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10",
    y1: "6",
    x2: "10",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "14",
    y1: "2",
    x2: "14",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "18.5",
    y1: "2",
    x2: "18.5",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Film = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 5H16V7H13V5ZM18 7V5H19C19.5523 5 20 5.44771 20 6V7H18ZM13 9H17H20V15H17H13V9ZM16 17H13V19H16V17ZM18 19V17H20V18C20 18.5523 19.5523 19 19 19H18ZM11 5H8V7H11V5ZM11 9H7H4V15H7H11V9ZM11 17H8V19H11V17ZM12 21H19C20.6569 21 22 19.6569 22 18V16V8V6C22 4.34315 20.6569 3 19 3H5C3.34315 3 2 4.34315 2 6V8V16V18C2 19.6569 3.34315 21 5 21H12ZM6 5H5C4.44772 5 4 5.44772 4 6V7H6V5ZM4 18V17H6V19H5C4.44772 19 4 18.5523 4 18Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "4",
    y: "9",
    width: "7",
    height: "6",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "13",
    y: "9",
    width: "7",
    height: "6",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "7.5",
    y1: "9",
    x2: "7.5",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "16.5",
    y1: "9",
    x2: "16.5",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Filter = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M20 2H4C2.89543 2 2 2.89543 2 4V5.42191C2 6.4098 2.48635 7.33437 3.30041 7.89403L10 12.5V20.3415C10 21.0945 10.8008 21.5774 11.4668 21.2259L13.4668 20.1703C13.7947 19.9972 14 19.6568 14 19.2859V12.5L20.6996 7.89403C21.5137 7.33437 22 6.4098 22 5.42191V4C22 2.89543 21.1046 2 20 2Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Fire = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 22C16.2526 22 20 19 20 15C20 11 17 9 16 8C14.5939 6.5939 14.1521 4.74612 14.0254 3.4746C13.9552 2.77067 13.2759 2.27145 12.6864 2.66243C11.5335 3.42702 9.90375 4.98749 9 8C8.35747 10.1418 9 12 9 12C9 12 8 11.5 7.5 10C7.3353 9.5059 7.11635 8.90329 6.89675 8.31727C6.58071 7.47387 5.44066 7.48134 5.1629 8.33811C4.61497 10.0282 4 12.3031 4 14C4 19 7.74745 22 12 22Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11 18C13.4745 18 16.2142 16.4557 16.8623 14.0924C16.9998 13.5912 17.7035 13.3597 17.8435 13.8603C17.946 14.2264 18.0001 14.6079 18.0001 15C18.0001 17.7614 15.3138 20 12.0001 20C9.86222 20 7.98549 19.0682 6.92281 17.6654C6.60896 17.2511 7.16881 16.8749 7.62054 17.132C8.58297 17.6797 9.74658 18 11 18Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "2",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12.0461",
    y1: "12.1233",
    x2: "12.0461",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Flag = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3 4C3 3.44772 3.44772 3 4 3H10.0263C10.6712 3 11.3119 3.10397 11.9237 3.3079L13.0763 3.6921C13.6881 3.89603 14.3288 4 14.9737 4H18C19.6569 4 21 5.34315 21 7V13C21 14.6569 19.6569 16 18 16H14.9737C14.3288 16 13.6881 15.896 13.0763 15.6921L11.9237 15.3079C11.3119 15.104 10.6712 15 10.0263 15H4C3.44772 15 3 14.5523 3 14V4Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 2C4.55228 2 5 2.44772 5 3V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "4",
    y1: "2",
    x2: "4",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Flashlight = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7 12L5.3359 10.8906C4.5013 10.3342 4 9.39751 4 8.39445V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V8.39445C20 9.39751 19.4987 10.3342 18.6641 10.8906L17 12V19C17 20.6569 15.6569 22 14 22H10C8.34315 22 7 20.6569 7 19V12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 13C12.5523 13 13 13.4477 13 14V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V14C11 13.4477 11.4477 13 12 13Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C12.5523 1 13 1.44772 13 2V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V2C11 1.44772 11.4477 1 12 1Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.05276 2.10555C7.54674 1.85856 8.14741 2.05878 8.3944 2.55276L8.8944 3.55276C9.14139 4.04674 8.94117 4.64741 8.44719 4.8944C7.95321 5.14139 7.35254 4.94117 7.10555 4.44719L6.60555 3.44719C6.35856 2.95321 6.55878 2.35254 7.05276 2.10555Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.9472 2.10555C17.4412 2.35254 17.6414 2.95321 17.3944 3.44719L16.8944 4.44719C16.6474 4.94117 16.0467 5.14139 15.5528 4.8944C15.0588 4.64741 14.8586 4.04674 15.1055 3.55276L15.6055 2.55276C15.8525 2.05878 16.4532 1.85856 16.9472 2.10555Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "6",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "13",
    x2: "12",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "4",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "7.74997",
    y1: "1.99976",
    x2: "7.74997",
    y2: "5.00019",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "16.25",
    y1: "1.99976",
    x2: "16.25",
    y2: "5.00019",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Flight = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2 14.5C2 14.8135 2.14706 15.1089 2.39725 15.2979C2.64744 15.4869 2.97178 15.5476 3.27338 15.4619L10.6393 13.3684H13.3607L20.7266 15.4619C21.0282 15.5476 21.3526 15.4869 21.6028 15.2979C21.8529 15.1089 22 14.8135 22 14.5V13.2737C22 12.1082 21.3249 11.0481 20.2687 10.5552L13.9229 7.59382C13.7905 7.53202 13.6461 7.5 13.5 7.5H10.5C10.3539 7.5 10.2095 7.53202 10.0771 7.59382L3.73134 10.5552C2.67512 11.0481 2 12.1082 2 13.2737V14.5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.5 21.5C7.5 21.8565 7.68976 22.186 7.99807 22.3649C8.30639 22.5438 8.68664 22.5451 8.99614 22.3682L12 20.6518L15.0039 22.3682C15.3134 22.5451 15.6936 22.5438 16.0019 22.3649C16.3102 22.186 16.5 21.8565 16.5 21.5V19C16.5 18.3705 16.2036 17.7777 15.7 17.4L14.5 16.5V4C14.5 2.61929 13.3807 1.5 12 1.5C10.6193 1.5 9.5 2.61929 9.5 4L9.5 16.5L8.3 17.4C7.79639 17.7777 7.5 18.3705 7.5 19V21.5Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "7.5",
    x2: "12",
    y2: "15.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "1.5",
    x2: "12",
    y2: "22.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const FolderAdd = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M5 21H19C20.6569 21 22 19.6569 22 18V8C22 6.34315 20.6569 5 19 5H11L9.87868 3.87868C9.31607 3.31607 8.55301 3 7.75736 3H5C3.34315 3 2 4.34315 2 6V18C2 19.6569 3.34315 21 5 21Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10L11 12H9C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H11L11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16L13 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H13L13 10Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Folder = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M5 21H19C20.6569 21 22 19.6569 22 18V8C22 6.34315 20.6569 5 19 5H11L9.87868 3.87868C9.31607 3.31607 8.55301 3 7.75736 3H5C3.34315 3 2 4.34315 2 6V18C2 19.6569 3.34315 21 5 21Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "3",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Frown = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.39944 16.7995C7.84102 17.1313 8.46789 17.0422 8.7996 16.6006C9.53115 15.6268 10.6922 15 12 15C13.3079 15 14.469 15.6268 15.2005 16.6006C15.5322 17.0422 16.1591 17.1313 16.6007 16.7995C17.0422 16.4678 17.1313 15.841 16.7996 15.3994C15.7067 13.9445 13.9637 13 12 13C10.0364 13 8.2934 13.9445 7.20052 15.3994C6.86881 15.841 6.95787 16.4678 7.39944 16.7995Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.29289 8.29289C7.68342 7.90237 8.31658 7.90237 8.70711 8.29289L9.20711 8.79289C9.59763 9.18342 9.59763 9.81658 9.20711 10.2071C8.81658 10.5976 8.18342 10.5976 7.79289 10.2071L7.29289 9.70711C6.90237 9.31658 6.90237 8.68342 7.29289 8.29289Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.7071 8.29289C16.3166 7.90237 15.6834 7.90237 15.2929 8.29289L14.7929 8.79289C14.4024 9.18342 14.4024 9.81658 14.7929 10.2071C15.1834 10.5976 15.8166 10.5976 16.2071 10.2071L16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12.0001",
    y1: "17.0001",
    x2: "12.0001",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "8.25",
    y1: "8",
    x2: "8.25",
    y2: "10.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "15.75",
    y1: "8",
    x2: "15.75",
    y2: "10.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Fuel = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M4 5C4 3.34315 5.34315 2 7 2H13C14.6569 2 16 3.34315 16 5V20H4V5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.2929 5.29289C18.6834 4.90237 19.3166 4.90237 19.7071 5.29289L21.4142 7C21.7893 7.37507 22 7.88378 22 8.41421V16.5C22 17.8807 20.8807 19 19.5 19C18.1193 19 17 17.8807 17 16.5V15C17 14.4477 16.5523 14 16 14V12C17.6569 12 19 13.3431 19 15V16.5C19 16.7761 19.2239 17 19.5 17C19.7761 17 20 16.7761 20 16.5V10.4142L19.5858 10C19.2107 9.62493 19 9.11622 19 8.58579V7.41421L18.2929 6.70711C17.9024 6.31658 17.9024 5.68342 18.2929 5.29289Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 21C2 20.4477 2.44772 20 3 20H17C17.5523 20 18 20.4477 18 21C18 21.5523 17.5523 22 17 22H3C2.44772 22 2 21.5523 2 21Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 5C6 4.44772 6.44772 4 7 4H13C13.5523 4 14 4.44772 14 5V9C14 9.55228 13.5523 10 13 10H7C6.44772 10 6 9.55228 6 9V5Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10",
    y1: "2",
    x2: "10",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "19",
    y1: "5",
    x2: "19",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "10",
    y1: "20",
    x2: "10",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "10",
    y1: "4",
    x2: "10",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Gamepad = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3C12.5523 3 13 3.44772 13 4V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V4C11 3.44772 11.4477 3 12 3Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "4",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13ZM20 12C20 13.6569 18.6569 15 17 15C15.3431 15 14 13.6569 14 12C14 10.3431 15.3431 9 17 9C18.6569 9 20 10.3431 20 12Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 10C8 9.44772 7.55228 9 7 9C6.44772 9 6 9.44772 6 10V11L5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H6V14C6 14.5523 6.44772 15 7 15C7.55228 15 8 14.5523 8 14V13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11H8V10Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "17",
    y1: "9",
    x2: "17",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "7",
    y1: "9",
    x2: "7",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Gift = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3 12.874V19a3 3 0 003 3h12a3 3 0 003-3v-6.126A4.01 4.01 0 0120 13H4a4.01 4.01 0 01-1-.126z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 8a2 2 0 012-2h16a2 2 0 012 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2V8z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3.5l-1.189-1.486A2.702 2.702 0 008.701 1H8.5a2.5 2.5 0 000 5H11v16h2V6h2.5a2.5 2.5 0 000-5h-.202c-.82 0-1.596.373-2.11 1.014L12 3.5zM9.839 4l-.59-.737A.702.702 0 008.702 3H8.5a.5.5 0 000 1h1.339zm4.322 0l.59-.737A.701.701 0 0115.298 3h.202a.5.5 0 010 1h-1.339z",
    fill: "url(#prefix__paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 12,
    y1: 12.874,
    x2: 12,
    y2: 22,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 12,
    y1: 6,
    x2: 12,
    y2: 11,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint2_linear",
    x1: 12,
    y1: 1,
    x2: 12,
    y2: 22,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  }))));
});

const Grid = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 3C9.55228 3 10 3.44772 10 4V8H14V4C14 3.44772 14.4477 3 15 3C15.5523 3 16 3.44772 16 4V8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H16V14H20C20.5523 14 21 14.4477 21 15C21 15.5523 20.5523 16 20 16H16V20C16 20.5523 15.5523 21 15 21C14.4477 21 14 20.5523 14 20V16H10V20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20V16H4C3.44772 16 3 15.5523 3 15C3 14.4477 3.44772 14 4 14H8V10H4C3.44772 10 3 9.55228 3 9C3 8.44772 3.44772 8 4 8H8V4C8 3.44772 8.44772 3 9 3ZM14 14V10H10V14H14Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4ZM5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Group = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: 14,
    cy: 7,
    r: 4,
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 13a6 6 0 00-6 6 2 2 0 002 2h12a2 2 0 002-2v-1a5 5 0 00-5-5h-5z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7 13a5 5 0 00-5 5v1a2 2 0 002 2h12a2 2 0 002-2v-1a5 5 0 00-5-5H7z",
    fill: "url(#prefix__paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 10,
    cy: 7,
    r: 4,
    fill: "url(#prefix__paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 14,
    y1: 3,
    x2: 14,
    y2: 11,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 14,
    y1: 13,
    x2: 14,
    y2: 21,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint2_linear",
    x1: 10,
    y1: 13,
    x2: 10,
    y2: 21,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint3_linear",
    x1: 10,
    y1: 3,
    x2: 10,
    y2: 11,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  }))));
});

const Growth = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 2a1 1 0 011 1v16a1 1 0 001 1h16a1 1 0 110 2H5a3 3 0 01-3-3V3a1 1 0 011-1z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 6.5a1 1 0 100 2h1.586L14.5 12.586 11.914 10a2 2 0 00-2.828 0l-2.793 2.793a1 1 0 101.414 1.414l2.793-2.793L13.086 14a2 2 0 002.828 0L20 9.914V11.5a1 1 0 102 0v-4a1 1 0 00-1-1h-4z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 12,
    y1: 2,
    x2: 12,
    y2: 22,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 14,
    y1: 6.5,
    x2: 14,
    y2: 14.586,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  }))));
});

const HandCursor = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18.6508 11.478L12 10V3.99305C12 2.89232 11.1077 2 10.0069 2C8.90621 2 8.01388 2.89232 8.01388 3.99305V15L6.65093 12.6231C5.68971 10.9468 3.17615 11.2954 2.70748 13.1701C2.57426 13.703 2.65046 14.2667 2.92039 14.7451L6.15298 20.4742C6.68489 21.4169 7.68337 22 8.76577 22H18C19.6569 22 21 20.6569 21 19V14.4065C21 13.0004 20.0234 11.783 18.6508 11.478Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.75",
    y1: "2",
    x2: "11.75",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Headphone = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4C7.58172 4 4 7.58172 4 12V13H2V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13H20V12C20 7.58172 16.4183 4 12 4Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 12H2V18C2 19.6569 3.34315 21 5 21H6C7.65685 21 9 19.6569 9 18V15C9 13.3431 7.65685 12 6 12Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 12C16.3431 12 15 13.3431 15 15V18C15 19.6569 16.3431 21 18 21H19C20.6569 21 22 19.6569 22 18V12H18Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Heart = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M11.8003 5.21366C9.55838 2.92878 5.91553 2.92878 3.67364 5.21366C1.44212 7.48794 1.44212 11.1676 3.67364 13.4419L9.85864 19.7454C11.0346 20.944 12.9654 20.944 14.1414 19.7454L20.3264 13.4419C22.5579 11.1676 22.5579 7.48794 20.3264 5.21366C18.0845 2.92878 14.4416 2.92878 12.1997 5.21366L12 5.41721L11.8003 5.21366Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 9.5C19 7.84315 17.6569 6.5 16 6.5",
    stroke: "url(#paint1_linear)",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3.5",
    x2: "12",
    y2: "20.6443",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17.5",
    y1: "6.5",
    x2: "17.5",
    y2: "9.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Help = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "18",
    r: "1",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 8C11.1307 8 10.3886 8.5551 10.1135 9.33325C9.92948 9.85396 9.35815 10.1269 8.83744 9.94284C8.31672 9.75879 8.0438 9.18747 8.22784 8.66675C8.77648 7.11451 10.2568 6 12 6C14.2091 6 16 7.79086 16 10C16 11.8638 14.7252 13.4299 13 13.874V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V13C11 12.4477 11.4477 12 12 12C13.1045 12 14 11.1046 14 10C14 8.89543 13.1045 8 12 8Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12.0852",
    y1: "6",
    x2: "12.0852",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Hide = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7.50095 6.08514C4.98539 7.38359 3.39301 9.5472 2.60173 10.8666C2.17947 11.5708 2.17947 12.4292 2.60173 13.1334C3.79002 15.1148 6.78492 19 11.9999 19C14.6126 19 16.6681 18.0248 18.2183 16.8025L7.50095 6.08514Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19.6822 15.438C20.4494 14.6012 21.0168 13.7693 21.3982 13.1334C21.8204 12.4292 21.8204 11.5708 21.3982 10.8666C20.2099 8.88521 17.215 5 11.9999 5C11.1202 5 10.3036 5.11057 9.54816 5.30393L19.6822 15.438Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.7077 9.29185C9.69769 9.77469 9 10.8059 9 12C9 13.6569 10.3431 15 12 15C13.1941 15 14.2253 14.3023 14.7081 13.2923L10.7077 9.29185Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.9999",
    y1: "5",
    x2: "11.9999",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11.9999",
    y1: "5",
    x2: "11.9999",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "11.8541",
    y1: "9.29185",
    x2: "11.8541",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Home = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 11.336a3 3 0 01.993-2.23l7-6.3a3 3 0 014.014 0l7 6.3a3 3 0 01.993 2.23V19a3 3 0 01-3 3H5a3 3 0 01-3-3v-7.664z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 16a2 2 0 012-2h2a2 2 0 012 2v6H9v-6z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 12,
    y1: 2.036,
    x2: 12,
    y2: 22,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 12,
    y1: 14,
    x2: 12,
    y2: 22,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  }))));
});

const Hourglass = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9.456 18.0704L7 22H17L14.544 18.0704C13.369 16.1904 10.631 16.1904 9.456 18.0704Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 7H7L9 11H15L17 7Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3C20 3.55228 19.5523 4 19 4V4.5778C19 6.15719 18.5325 7.70126 17.6564 9.0154L15.6667 12L17.6564 14.9846C18.5325 16.2987 19 17.8428 19 19.4222V20C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21C4 20.4477 4.44772 20 5 20V19.4222C5 17.8428 5.4675 16.2987 6.3436 14.9846L8.33333 12L6.3436 9.0154C5.4675 7.70126 5 6.15719 5 4.5778V4C4.44772 4 4 3.55228 4 3ZM7 20H17V19.4222C17 18.2377 16.6494 17.0796 15.9923 16.094L13.9296 13H10.0704L8.0077 16.094C7.35063 17.0796 7 18.2377 7 19.4222V20ZM7 4H17V4.5778C17 5.76234 16.6494 6.92039 15.9923 7.90599L13.9296 11H10.0704L8.0077 7.906C7.35063 6.92039 7 5.76234 7 4.5778V4Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Image = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "17",
    cy: "7",
    r: "2",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 14.5V19C2 20.6569 3.34315 22 5 22H19C19.8479 22 20.6136 21.6483 21.1592 21.0828L10.569 9.52987C9.34177 8.19102 7.21566 8.24121 6.05292 9.63649L2 14.5Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17",
    y1: "5",
    x2: "17",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "11.5796",
    y1: "8.55704",
    x2: "11.5796",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Inbox = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2 14C2 13.4477 2.44772 13 3 13H8.38197C8.76074 13 9.107 13.214 9.27639 13.5528L9.5 14L9.99724 14.9945C9.99893 14.9979 10.0024 15 10.0062 15H13.9938C13.9976 15 14.0011 14.9979 14.0028 14.9945L14.7236 13.5528C14.893 13.214 15.2393 13 15.618 13H21C21.5523 13 22 13.4477 22 14V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V14Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.2629 3C5.92346 3 4.74631 3.88793 4.37833 5.17584L2.07695 13.2307C2.0259 13.4094 2 13.5943 2 13.7801V14C2 13.4477 2.44772 13 3 13H8.38197C8.76074 13 9.107 13.214 9.27639 13.5528L9.99724 14.9945C9.99893 14.9979 10.0024 15 10.0062 15H13.9938C13.9976 15 14.0011 14.9979 14.0028 14.9945L14.7236 13.5528C14.893 13.214 15.2393 13 15.618 13H21C21.5523 13 22 13.4477 22 14V13.7801C22 13.5943 21.9741 13.4094 21.923 13.2307L19.6217 5.17584C19.2537 3.88793 18.0765 3 16.7371 3H7.2629Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "13",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Info = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 11C12.5523 11 13 11.4477 13 12V17.0009C13 17.5532 12.5523 18.0009 12 18.0009C11.4477 18.0009 11 17.5532 11 17.0009V12C11 11.4477 11.4477 11 12 11Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "1",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "18.0009",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Instagram = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "17",
    cy: "7",
    r: "1",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4ZM8 2C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2H8Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17",
    y1: "6",
    x2: "17",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Internet = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9999 22C14.0502 22 15.8123 19.5318 16.5839 16H21.1678C21.4453 15.365 21.6587 14.6956 21.7999 14H16.8999C16.9655 13.3538 16.9999 12.6849 16.9999 12C16.9999 11.3151 16.9655 10.6462 16.8999 10H21.7999C21.6587 9.30439 21.4453 8.635 21.1678 8H16.5839C15.8123 4.46819 14.0502 2 11.9999 2C9.9496 2 8.18752 4.46819 7.41596 8H2.832C2.55456 8.635 2.34115 9.30439 2.19995 10H7.09993C7.03435 10.6462 6.99992 11.3151 6.99992 12C6.99992 12.6849 7.03435 13.3538 7.09993 14H2.19995C2.34115 14.6956 2.55456 15.365 2.832 16H7.41596C8.18752 19.5318 9.9496 22 11.9999 22ZM14.5297 16C14.3211 16.8293 14.0531 17.5635 13.7466 18.1766C12.9481 19.7737 12.215 20 11.9999 20C11.7849 20 11.0518 19.7737 10.2532 18.1766C9.94668 17.5635 9.67872 16.8293 9.47011 16H14.5297ZM13.7466 5.82336C14.0531 6.43647 14.3211 7.17074 14.5297 8H9.47011C9.67872 7.17074 9.94668 6.43647 10.2532 5.82336C11.0518 4.22632 11.7849 4 11.9999 4C12.215 4 12.9481 4.22632 13.7466 5.82336ZM14.9999 12C14.9999 11.3051 14.9607 10.6359 14.8885 10H9.11137C9.0391 10.6359 8.99992 11.3051 8.99992 12C8.99992 12.6949 9.0391 13.3641 9.11137 14H14.8885C14.9607 13.3641 14.9999 12.6949 14.9999 12Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11.9999",
    y1: "2",
    x2: "11.9999",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Italics = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.5 20C6.5 19.4477 6.94772 19 7.5 19H13C13.5523 19 14 19.4477 14 20C14 20.5523 13.5523 21 13 21H7.5C6.94772 21 6.5 20.5523 6.5 20Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 4C10 3.44772 10.4477 3 11 3H16.5C17.0523 3 17.5 3.44772 17.5 4C17.5 4.55228 17.0523 5 16.5 5H11C10.4477 5 10 4.55228 10 4Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.7808 5H12.7192L9.21924 19H11.2808L14.7808 5Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.0213 3C14.0066 2.99967 13.9919 2.99968 13.9772 3H14.0213Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.0221 21H9.97945C9.9937 21.0003 10.0079 21.0003 10.0221 21Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10.25",
    y1: "19",
    x2: "10.25",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "13.75",
    y1: "3",
    x2: "13.75",
    y2: "5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "2.99976",
    x2: "12",
    y2: "21.0002",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "2.99976",
    x2: "12",
    y2: "21.0002",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "12",
    y1: "2.99976",
    x2: "12",
    y2: "21.0002",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Justify = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 10C3 9.44772 3.44772 9 4 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H4C3.44772 11 3 10.5523 3 10Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "13",
    x2: "12",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Key = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M22 12C22 15.3137 19.3137 18 16 18C13.7792 18 11.8401 16.7934 10.8027 15H5.41427C5.14906 15 4.8947 14.8946 4.70717 14.7071L2.70696 12.7069C2.31649 12.3165 2.31642 11.6834 2.7068 11.2929L4.70574 9.29305C4.89329 9.10542 5.14771 9 5.413 9H10.8027C11.8401 7.2066 13.7792 6 16 6C19.3137 6 22 8.68629 22 12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.207",
    y1: "6",
    x2: "12.207",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "16",
    y1: "10",
    x2: "16",
    y2: "14",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Laptop = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "15",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Laugh = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.14944 14.0324C6.67592 16.1447 8.56055 18 12 18C15.4395 18 17.3242 16.1447 17.8506 14.0324C17.9883 13.4798 17.5246 13 16.9551 13H7.04494C6.47541 13 6.01171 13.4798 6.14944 14.0324Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "8",
    cy: "9",
    r: "1",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "16",
    cy: "9",
    r: "1",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "13",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "8",
    y1: "8",
    x2: "8",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "16",
    y1: "8",
    x2: "16",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Layers = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M13.7087 3.30729C12.6049 2.90591 11.395 2.90591 10.2913 3.30729L3.24266 5.87042C1.48732 6.50872 1.4873 8.99128 3.24266 9.62959L10.2913 12.1927C11.395 12.5941 12.6049 12.5941 13.7087 12.1927L20.7573 9.62959C22.5126 8.99128 22.5126 6.50873 20.7573 5.87042L13.7087 3.30729Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.05781 12.395C2.24283 11.8746 2.81467 11.6028 3.33504 11.7878L11.33 14.6304C11.7634 14.7845 12.2367 14.7845 12.67 14.6304L20.665 11.7878C21.1854 11.6028 21.7572 11.8746 21.9422 12.395C22.1273 12.9154 21.8554 13.4872 21.335 13.6722L13.3401 16.5149C12.4733 16.8231 11.5268 16.8231 10.66 16.5149L2.66502 13.6722C2.14465 13.4872 1.87279 12.9154 2.05781 12.395Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.05781 16.645C2.24283 16.1246 2.81467 15.8528 3.33504 16.0378L11.33 18.8804C11.7634 19.0345 12.2367 19.0345 12.67 18.8804L20.665 16.0378C21.1854 15.8528 21.7572 16.1246 21.9422 16.645C22.1273 17.1654 21.8554 17.7372 21.335 17.9222L13.3401 20.7649C12.4733 21.0731 11.5268 21.0731 10.66 20.7649L2.66502 17.9222C2.14465 17.7372 1.87279 17.1654 2.05781 16.645Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3.00626",
    x2: "12",
    y2: "12.4938",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "11.7297",
    x2: "12",
    y2: "16.746",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "15.9797",
    x2: "12",
    y2: "20.996",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Layout = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M13 10C13 9.44772 12.5523 9 12 9H4C3.44772 9 3 9.44772 3 10V18C3 19.6569 4.34315 21 6 21H12C12.5523 21 13 20.5523 13 20V10Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 21C15.4477 21 15 20.5523 15 20V10C15 9.44772 15.4477 9 16 9H20C20.5523 9 21 9.44772 21 10V18C21 19.6569 19.6569 21 18 21H16Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55229 3 6V6Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Leaderboard = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2 13C2 11.3431 3.34315 10 5 10H10V19H3C2.44772 19 2 18.5523 2 18V13Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 12H19C20.6569 12 22 13.3431 22 15V18C22 18.5523 21.5523 19 21 19H14V12Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8 8C8 6.34315 9.34315 5 11 5H13C14.6569 5 16 6.34315 16 8V19H8V8Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "6",
    y1: "10",
    x2: "6",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "18",
    y1: "12",
    x2: "18",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const LeftAlign = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 10C3 9.44772 3.44772 9 4 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H4C3.44772 11 3 10.5523 3 10Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 18C3 17.4477 3.44772 17 4 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H4C3.44772 19 3 18.5523 3 18Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "9",
    y1: "9",
    x2: "9",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "13",
    x2: "12",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "9",
    y1: "17",
    x2: "9",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const LineChart = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 2C3.55228 2 4 2.44772 4 3V19C4 19.5523 4.44772 20 5 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.7071 8.29289C22.0976 8.68342 22.0976 9.31658 21.7071 9.70711L17.1213 14.2929C15.9497 15.4645 14.0503 15.4645 12.8787 14.2929L10.7071 12.1213C10.3166 11.7308 9.68342 11.7308 9.29289 12.1213L7.20711 14.2071C6.81658 14.5976 6.18342 14.5976 5.79289 14.2071C5.40237 13.8166 5.40237 13.1834 5.79289 12.7929L7.87868 10.7071C9.05025 9.53553 10.9497 9.53553 12.1213 10.7071L14.2929 12.8787C14.6834 13.2692 15.3166 13.2692 15.7071 12.8787L20.2929 8.29289C20.6834 7.90237 21.3166 7.90237 21.7071 8.29289Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "13.75",
    y1: "8",
    x2: "13.75",
    y2: "15.1716",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Link = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 12C2 9.23858 4.23858 7 7 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H7C5.34315 9 4 10.3431 4 12C4 13.6569 5.34315 15 7 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H7C4.23858 17 2 14.7614 2 12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 8C13 7.44772 13.4477 7 14 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H14C13.4477 17 13 16.5523 13 16C13 15.4477 13.4477 15 14 15H17C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9H14C13.4477 9 13 8.55228 13 8Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "6.5",
    y1: "7",
    x2: "6.5",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17.5",
    y1: "7",
    x2: "17.5",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const LinkedIn = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 8C6.55228 8 7 8.44772 7 9V18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18V9C5 8.44772 5.44772 8 6 8Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 8.99963C10.9998 8.44752 10.5522 8 10 8C9.44772 8 9 8.44772 9 9V13V18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18V13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V18C17 18.5523 17.4477 19 18 19C18.5523 19 19 18.5523 19 18V13C19 10.2386 16.7614 8 14 8C12.8744 8 11.8357 8.37194 11 8.99963Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7 6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5C6.55228 5 7 5.44772 7 6Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "6",
    y1: "8",
    x2: "6",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "14",
    y1: "8",
    x2: "14",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "6",
    y1: "5",
    x2: "6",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const List = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 7C7 6.44772 7.44772 6 8 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H8C7.44772 8 7 7.55228 7 7Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 17C7 16.4477 7.44772 16 8 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H8C7.44772 18 7 17.5523 7 17Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "4",
    cy: "7",
    r: "1",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "4",
    cy: "12",
    r: "1",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "4",
    cy: "17",
    r: "1",
    fill: "url(#paint5_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "14",
    y1: "6",
    x2: "14",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "14",
    y1: "11",
    x2: "14",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "14",
    y1: "16",
    x2: "14",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "4",
    y1: "6",
    x2: "4",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "4",
    y1: "11",
    x2: "4",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint5_linear",
    x1: "4",
    y1: "16",
    x2: "4",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Live = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 11.9004C10 13.005 10.8954 13.9004 12 13.9004C13.1046 13.9004 14 13.005 14 11.9004C14 10.7958 13.1046 9.90039 12 9.90039C10.8954 9.90039 10 10.7958 10 11.9004Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 11.9004C16 10.7564 15.617 9.70477 14.9718 8.86265C14.6359 8.42426 14.719 7.79657 15.1574 7.46067C15.5958 7.12476 16.2234 7.20785 16.5594 7.64624C17.4627 8.82522 18 10.3015 18 11.9004C18 13.5668 17.4164 15.0997 16.4434 16.3018C16.0959 16.7311 15.4662 16.7974 15.0369 16.4499C14.6077 16.1025 14.5413 15.4728 14.8888 15.0435C15.5842 14.1844 16 13.0923 16 11.9004Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 11.9004C8 10.7549 8.38397 9.70196 9.03075 8.85928C9.36702 8.42117 9.28446 7.79341 8.84635 7.45714C8.40823 7.12088 7.78048 7.20344 7.44421 7.64155C6.53871 8.82129 6 10.2993 6 11.9004C6 13.5655 6.58267 15.0973 7.55437 16.299C7.90163 16.7284 8.53128 16.7951 8.96074 16.4478C9.39019 16.1006 9.45682 15.4709 9.10956 15.0415C8.41518 14.1827 8 13.0914 8 11.9004Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 11.9004C20 9.66837 19.1888 7.62835 17.8438 6.05526C17.4849 5.63549 17.5342 5.00425 17.954 4.64535C18.3738 4.28645 19.005 4.3358 19.3639 4.75557C21.0069 6.67719 22 9.1741 22 11.9004C22 14.6895 20.9607 17.2382 19.2497 19.1767C18.8843 19.5908 18.2523 19.6302 17.8383 19.2647C17.4242 18.8993 17.3848 18.2673 17.7503 17.8532C19.1511 16.2661 20 14.1836 20 11.9004Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 11.9004C4 9.66855 4.81114 7.62864 6.15595 6.05559C6.51483 5.6358 6.46545 5.00457 6.04566 4.64568C5.62588 4.2868 4.99464 4.33618 4.63576 4.75597C2.99299 6.67754 2 9.17431 2 11.9004C2 14.6857 3.03649 17.2314 4.74335 19.1689C5.10842 19.5833 5.74032 19.6233 6.15474 19.2582C6.56915 18.8932 6.60915 18.2613 6.24408 17.8469C4.8466 16.2605 4 14.1806 4 11.9004Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "14",
    y1: "11.9004",
    x2: "10",
    y2: "11.9004",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "18",
    y1: "11.9635",
    x2: "14.6661",
    y2: "11.9635",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "6",
    y1: "11.9603",
    x2: "9.332",
    y2: "11.9603",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "22",
    y1: "11.9602",
    x2: "17.5",
    y2: "11.9602",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "2",
    y1: "11.9568",
    x2: "6.49373",
    y2: "11.9568",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Loader = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 18C12.5523 18 13 18.4477 13 19V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19C11 18.4477 11.4477 18 12 18Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.92891 4.92893C5.31943 4.53841 5.9526 4.53841 6.34312 4.92893L7.75734 6.34315C8.14786 6.73367 8.14786 7.36684 7.75734 7.75736C7.36681 8.14788 6.73365 8.14788 6.34312 7.75736L4.92891 6.34315C4.53838 5.95262 4.53838 5.31946 4.92891 4.92893Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.2426 16.2426C16.6332 15.8521 17.2663 15.8521 17.6568 16.2426L19.0711 17.6569C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711C18.6805 19.4616 18.0474 19.4616 17.6568 19.0711L16.2426 17.6569C15.8521 17.2663 15.8521 16.6332 16.2426 16.2426Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 12C2 11.4477 2.44772 11 3 11L5 11C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13L3 13C2.44772 13 2 12.5523 2 12Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 12C18 11.4477 18.4477 11 19 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L19 13C18.4477 13 18 12.5523 18 12Z",
    fill: "url(#paint5_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.92888 19.0711C4.53836 18.6805 4.53836 18.0474 4.92888 17.6569L6.34309 16.2426C6.73362 15.8521 7.36678 15.8521 7.75731 16.2426C8.14783 16.6332 8.14783 17.2663 7.75731 17.6569L6.34309 19.0711C5.95257 19.4616 5.3194 19.4616 4.92888 19.0711Z",
    fill: "url(#paint6_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.2426 7.75736C15.8521 7.36684 15.8521 6.73367 16.2426 6.34315L17.6568 4.92894C18.0473 4.53841 18.6805 4.53841 19.071 4.92894C19.4616 5.31946 19.4616 5.95263 19.071 6.34315L17.6568 7.75736C17.2663 8.14789 16.6331 8.14789 16.2426 7.75736Z",
    fill: "url(#paint7_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "6",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "4.92891",
    y1: "4.92893",
    x2: "7.75734",
    y2: "7.75736",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "16.2426",
    y1: "16.2426",
    x2: "19.0711",
    y2: "19.0711",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "2",
    y1: "12",
    x2: "6",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint5_linear",
    x1: "18",
    y1: "12",
    x2: "22",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint6_linear",
    x1: "4.92888",
    y1: "19.0711",
    x2: "7.75731",
    y2: "16.2426",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint7_linear",
    x1: "16.2426",
    y1: "7.75736",
    x2: "19.071",
    y2: "4.92894",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Location = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18.2725 15.0565C19.3752 13.681 20.0348 11.9349 20.0348 10.0348C20.0348 5.5973 16.4375 2 12 2C7.5625 2 3.96521 5.5973 3.96521 10.0348C3.96521 11.9349 4.62478 13.681 5.72747 15.0565L5.73397 15.0646C5.73397 15.0646 8.52282 18.7985 10.6792 21.4386C11.3689 22.2831 12.6313 22.2834 13.3215 21.4393C15.4847 18.7933 18.2772 15.0565 18.2772 15.0565H18.2725Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "23",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Lock = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 8V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V8C18.6569 8 20 9.34315 20 11V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V11C4 9.34315 5.34315 8 7 8ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V8H9V7Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15.7324Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Login = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18 2C19.6569 2 21 3.34315 21 5V19C21 20.6569 19.6569 22 18 22H12C10.3431 22 9 20.6569 9 19V5C9 3.34315 10.3431 2 12 2H18Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.7071 7.79289C12.3166 7.40237 11.6834 7.40237 11.2929 7.79289C10.9024 8.18342 10.9024 8.81658 11.2929 9.20711L13.0858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H13.0858L11.2929 14.7929C10.9024 15.1834 10.9024 15.8166 11.2929 16.2071C11.6834 16.5976 12.3166 16.5976 12.7071 16.2071L15.5 13.4142C16.2811 12.6332 16.281 11.3668 15.5 10.5858L12.7071 7.79289Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "15",
    y1: "2",
    x2: "15",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "9.54289",
    y1: "7.5",
    x2: "9.54289",
    y2: "16.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Logout = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 2C13.6569 2 15 3.34315 15 5V19C15 20.6569 13.6569 22 12 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.7071 7.79289C17.3166 7.40237 16.6834 7.40237 16.2929 7.79289C15.9024 8.18342 15.9024 8.81658 16.2929 9.20711L18.0858 11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H18.0858L16.2929 14.7929C15.9024 15.1834 15.9024 15.8166 16.2929 16.2071C16.6834 16.5976 17.3166 16.5976 17.7071 16.2071L20.5 13.4142C21.2811 12.6332 21.281 11.3668 20.5 10.5858L17.7071 7.79289Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "9",
    y1: "2",
    x2: "9",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "14.5429",
    y1: "7.5",
    x2: "14.5429",
    y2: "16.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Mail = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.91 12.2915L2 6.5C2 5.11929 3.11929 4 4.5 4H19.5C20.8807 4 22 5.11929 22 6.5L13.09 12.2915C12.4272 12.7223 11.5728 12.7223 10.91 12.2915Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Map = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.14074 3.23568L4.20645 4.3148C2.90334 4.67223 2 5.85671 2 7.20795V17.7219C2 19.3719 3.57012 20.5693 5.16129 20.1329L8.14073 19.3157C8.70147 19.1619 9.29483 19.1743 9.84861 19.3516L14.1514 20.7284C14.7052 20.9057 15.2985 20.9181 15.8593 20.7643L19.7936 19.6852C21.0967 19.3278 22 18.1433 22 16.7921V6.27805C22 4.62811 20.4299 3.43066 18.8387 3.8671L15.8593 4.68432C15.2985 4.83812 14.7052 4.82566 14.1514 4.64845L9.84861 3.27156C9.29483 3.09434 8.70147 3.08188 8.14074 3.23568Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 4.79045V20.8705C14.7133 20.8642 14.4274 20.8168 14.1514 20.7284L9.84861 19.3516C9.57259 19.2632 9.28674 19.2158 9 19.2095V3.12955C9.28674 3.13583 9.57259 3.18323 9.84861 3.27156L14.1514 4.64845C14.4274 4.73677 14.7133 4.78417 15 4.79045Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "3.12955",
    x2: "12",
    y2: "20.8705",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Meh = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "8",
    cy: "9",
    r: "1",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "16",
    cy: "9",
    r: "1",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 15C7 14.4477 7.44772 14 8 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H8C7.44772 16 7 15.5523 7 15Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "8",
    y1: "8",
    x2: "8",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "16",
    y1: "8",
    x2: "16",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Menu = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 16C4 15.4477 4.44772 15 5 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 8C4 7.44772 4.44772 7 5 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Message = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2 6a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H8l-2.72 2.266C3.978 22.352 2 21.426 2 19.73V6z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 9a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 13a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z",
    fill: "url(#prefix__paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 12,
    y1: 3,
    x2: 12,
    y2: 24,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 12,
    y1: 8,
    x2: 12,
    y2: 10,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint2_linear",
    x1: 10,
    y1: 12,
    x2: 10,
    y2: 14,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  }))));
});

const Messages = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M22 13C22 14.6569 20.6569 16 19 16H9C7.34315 16 6 14.6569 6 13V7C6 5.34315 7.34315 4 9 4H16L18.8906 2.07293C20.2197 1.18686 22 2.13964 22 3.73703V13Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 11C2 9.34315 3.34315 8 5 8H15C16.6569 8 18 9.34315 18 11V17C18 18.6569 16.6569 20 15 20H7L5.24939 21.4005C3.93986 22.4481 2 21.5158 2 19.8388V11Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 14C6 13.4477 6.44772 13 7 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H7C6.44772 15 6 14.5523 6 14Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "14",
    y1: "16",
    x2: "14",
    y2: "0",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "10",
    y1: "8",
    x2: "10",
    y2: "24",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "10",
    y1: "13",
    x2: "10",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const MicOff = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 7.58414V11C9 12.6569 10.3431 14 12 14C12.9343 14 13.7689 13.5729 14.3191 12.9032L9 7.58414ZM15 10.7557V5C15 3.34315 13.6569 2 12 2C10.4223 2 9.12905 3.21787 9.00908 4.76479L15 10.7557Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.7374 14.3215C14.8215 15.3513 13.4865 16 12 16C9.23858 16 7 13.7614 7 11C7 10.4477 6.55228 10 6 10C5.44772 10 5 10.4477 5 11C5 14.5265 7.60771 17.4439 11 17.9291V20H9C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22H15C15.5523 22 16 21.5523 16 21C16 20.4477 15.5523 20 15 20H13V17.9291C14.6346 17.6953 16.087 16.8968 17.1533 15.7375L15.7374 14.3215ZM18.2997 14.0554C18.7484 13.1322 19 12.0955 19 11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11C17 11.5301 16.9175 12.0409 16.7647 12.5204L18.2997 14.0554Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "14",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "10",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Mic = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "9",
    y: "2",
    width: "6",
    height: "12",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7 11C7 10.4477 6.55228 10 6 10C5.44772 10 5 10.4477 5 11C5 14.5265 7.60771 17.4439 11 17.9291V20H9C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22H15C15.5523 22 16 21.5523 16 21C16 20.4477 15.5523 20 15 20H13V17.9291C16.3923 17.4439 19 14.5265 19 11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "14",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "10",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Mobile = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M5 5C5 3.34315 6.34315 2 8 2H16C17.6569 2 19 3.34315 19 5V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19V5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8 2H16V2C16 3.10457 15.1046 4 14 4H10C8.89543 4 8 3.10457 8 2V2Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "4",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Moon = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.2691 15.3752C20.6118 14.5798 19.866 13.8166 19 13.8166V13.8166C14.0294 13.8166 10 9.78715 10 4.81658V4.81658C10 3.95053 9.23674 3.20475 8.4414 3.54749C5.24067 4.92676 3 8.11 3 11.8166C3 16.7871 7.02944 20.8166 12 20.8166C15.7066 20.8166 18.8898 18.5759 20.2691 15.3752Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.6771",
    y1: "3.46231",
    x2: "11.6771",
    y2: "20.8166",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const MoreHorizontal = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "2",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "18",
    cy: "12",
    r: "2",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "6",
    y1: "10",
    x2: "6",
    y2: "14",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "10",
    x2: "12",
    y2: "14",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "18",
    y1: "10",
    x2: "18",
    y2: "14",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const MoreVertical = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "6",
    r: "2",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "18",
    r: "2",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "10",
    x2: "12",
    y2: "14",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Mouse = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "5",
    y: "2",
    width: "14",
    height: "20",
    rx: "7",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 6C12.5523 6 13 6.44772 13 7L13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10L11 7C11 6.44771 11.4477 6 12 6Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "13",
    y1: "8.5",
    x2: "11",
    y2: "8.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Music = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 6.34233C12 4.96573 12.9369 3.76578 14.2724 3.4319L16.3837 2.90408C18.2206 2.44485 20 3.83417 20 5.72761V5.72761C20 7.06311 19.0911 8.22723 17.7955 8.55114L12 10V6.34233Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 10V13.5351C11.4117 13.1948 10.7286 13 10 13C7.79086 13 6 14.7909 6 17C6 19.2091 7.79086 21 10 21C12.2091 21 14 19.2091 14 17V9.5L12 10Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "10",
    y1: "9.5",
    x2: "10",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const New = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M13.9458 2.3444C12.8245 1.38886 11.1754 1.38886 10.0541 2.3444L8.78264 3.42794C8.62248 3.56443 8.42334 3.64692 8.21357 3.66366L6.54833 3.79654C5.0798 3.91373 3.91367 5.07986 3.79648 6.54839L3.66359 8.21363C3.64686 8.4234 3.56437 8.62254 3.42788 8.7827L2.34434 10.0542C1.3888 11.1754 1.3888 12.8246 2.34434 13.9459L3.42788 15.2173C3.56437 15.3775 3.64686 15.5766 3.66359 15.7864L3.79648 17.4517C3.91367 18.9202 5.0798 20.0863 6.54833 20.2035L8.21357 20.3364C8.42334 20.3531 8.62248 20.4356 8.78264 20.5721L10.0541 21.6556C11.1754 22.6112 12.8245 22.6112 13.9458 21.6556L15.2173 20.5721C15.3774 20.4356 15.5766 20.3531 15.7863 20.3364L17.4516 20.2035C18.9201 20.0863 20.0863 18.9202 20.2034 17.4517L20.3363 15.7864C20.3531 15.5766 20.4356 15.3775 20.572 15.2173L21.6556 13.9459C22.6111 12.8246 22.6111 11.1754 21.6556 10.0542L20.572 8.7827C20.4356 8.62254 20.3531 8.4234 20.3363 8.21363L20.2034 6.54839C20.0863 5.07986 18.9201 3.91373 17.4516 3.79654L15.7863 3.66366C15.5766 3.64692 15.3774 3.56443 15.2173 3.42794L13.9458 2.3444Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "1.62775",
    x2: "12",
    y2: "22.3723",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Next = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M15.6041 9.4142C17.5761 10.5741 17.5761 13.4259 15.6041 14.5858L7.52106 19.3406C5.52116 20.517 3 19.075 3 16.7548V7.24525C3 4.925 5.52116 3.48304 7.52106 4.65945L15.6041 9.4142Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 4C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20C19.4477 20 19 19.5523 19 19V5C19 4.44772 19.4477 4 20 4Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.5",
    y1: "2",
    x2: "11.5",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "20",
    y1: "4",
    x2: "20",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Note = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 4C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V12C19 11.4477 19.4477 11 20 11C20.5523 11 21 11.4477 21 12V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H12C12.5523 2 13 2.44772 13 3C13 3.55228 12.5523 4 12 4H6Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.6066 4.12132L14.2573 5.47055L18.5 9.71319L19.8492 8.36397C21.0208 7.19239 21.0208 5.2929 19.8492 4.12133C18.6776 2.94975 16.7781 2.94975 15.6066 4.12132Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8.44125 16.6607L11.7411 16.1893C11.9553 16.1587 12.1538 16.0594 12.3068 15.9064L18.5 9.71322L14.2574 5.47058L8.06413 11.6638C7.91113 11.8168 7.81188 12.0153 7.78128 12.2295L7.30988 15.5293C7.2156 16.1893 7.78128 16.755 8.44125 16.6607Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17.4926",
    y1: "3.24265",
    x2: "17.4926",
    y2: "9.71319",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12.8998",
    y1: "5.47058",
    x2: "12.8998",
    y2: "16.671",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Notes = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "5",
    width: "16",
    height: "10",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "6",
    y: "9",
    width: "16",
    height: "10",
    rx: "3",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "14",
    cy: "14",
    r: "2",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "9",
    cy: "14",
    r: "1",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "19",
    cy: "14",
    r: "1",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10",
    y1: "5",
    x2: "10",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "14",
    y1: "9",
    x2: "14",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "14",
    y1: "12",
    x2: "14",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "9",
    y1: "13",
    x2: "9",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "19",
    y1: "13",
    x2: "19",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const NotificationOff = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "18",
    r: "4",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M22 16.5858C22 16.9141 21.8881 17.2163 21.7004 17.4563L7.5923 3.34813C8.86046 2.49678 10.3867 2 12.0293 2C16.4314 2 20 5.56859 20 9.97067L20 13.1716C20 13.702 20.2107 14.2107 20.5858 14.5858L21.5858 15.5858C21.851 15.851 22 16.2107 22 16.5858Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.08015 4.66593L6.08087 4.66512L19.4157 18H19.4142L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L16.5858 18H3.40408C2.62863 18 2 17.3714 2 16.5959C2 16.2151 2.15471 15.8506 2.42864 15.586L3.45759 14.5922C3.84928 14.2139 4.06977 13.6922 4.06814 13.1476L4.05867 9.9946C4.05473 8.67981 4.3693 7.43859 4.92966 6.34388L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L6.08015 4.66593Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Notification = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "18",
    r: "4",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20.5858 18H3.40408C2.62863 18 2 17.3714 2 16.5959C2 16.2151 2.15471 15.8506 2.42864 15.586L3.45759 14.5922C3.84928 14.2139 4.06977 13.6922 4.06814 13.1476L4.05867 9.9946C4.04543 5.58319 7.61789 2 12.0293 2C16.4314 2 20 5.56859 20 9.97067L20 13.1716C20 13.702 20.2107 14.2107 20.5858 14.5858L21.5858 15.5858C21.851 15.851 22 16.2107 22 16.5858C22 17.3668 21.3668 18 20.5858 18Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Open = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M19 9C19 9.55229 19.4477 10 20 10C20.5523 10 21 9.55229 21 9V5C21 3.89543 20.1046 3 19 3H15C14.4477 3 14 3.44772 14 4C14 4.55228 14.4477 5 15 5L17.5858 5L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V9Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 6C3 4.34315 4.34315 3 6 3H11C11.5523 3 12 3.44772 12 4C12 4.55228 11.5523 5 11 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V13C19 12.4477 19.4477 12 20 12C20.5523 12 21 12.4477 21 13V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "16",
    y1: "3",
    x2: "16",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const PaintRoller = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 5C17 4.44772 17.4477 4 18 4H19C20.6569 4 22 5.34315 22 7V8.86039C22 10.2904 20.9906 11.5217 19.5883 11.8021L12.8039 13.159C12.3365 13.2525 12 13.6629 12 14.1396V15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V14.1396C10 12.7096 11.0094 11.4783 12.4117 11.1979L19.1961 9.84097C19.6635 9.74749 20 9.33707 20 8.86039V7C20 6.44772 19.5523 6 19 6H18C17.4477 6 17 5.55228 17 5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 2C4.34315 2 3 3.34315 3 5V6C3 7.65685 4.34315 9 6 9H16C17.6569 9 19 7.65685 19 6V5C19 3.34315 17.6569 2 16 2H6Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "10",
    y: "15",
    width: "2",
    height: "6",
    rx: "1",
    stroke: "url(#paint2_linear)",
    "stroke-width": "2"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "16",
    y1: "4",
    x2: "16",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11",
    y1: "2",
    x2: "11",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "11",
    y1: "14",
    x2: "11",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Pause = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 4C7.44772 4 7 4.44772 7 5V19C7 19.5523 7.44772 20 8 20C8.55228 20 9 19.5523 9 19V5C9 4.44772 8.55228 4 8 4Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 4C15.4477 4 15 4.44772 15 5V19C15 19.5523 15.4477 20 16 20C16.5523 20 17 19.5523 17 19V5C17 4.44772 16.5523 4 16 4Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "8",
    y1: "4",
    x2: "8",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "16",
    y1: "4",
    x2: "16",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Payment = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 10H2V8H22V10Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 15C4 14.4477 4.44772 14 5 14H11C11.5523 14 12 14.4477 12 15C12 15.5523 11.5523 16 11 16H5C4.44772 16 4 15.5523 4 15Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "8",
    y1: "14",
    x2: "8",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Pen = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M11.269 2.28326L6.48938 7.40423C5.60154 8.35549 5.42815 9.77064 6.06008 10.9081L9.44445 17H14.5556L17.9399 10.9081C18.5719 9.77064 18.3985 8.35549 17.5106 7.40423L12.7311 2.28326C12.3357 1.85968 11.6643 1.85968 11.269 2.28326Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V8.26756C10.4022 8.61337 10 9.25972 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 9.25972 13.5978 8.61337 13 8.26756V3Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "6",
    y: "17",
    width: "12",
    height: "5",
    rx: "2.5",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "1.96558",
    x2: "12",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Percent = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9ZM7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19ZM17 21C19.2091 21 21 19.2091 21 17C21 14.7909 19.2091 13 17 13C14.7909 13 13 14.7909 13 17C13 19.2091 14.7909 21 17 21Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.6001 3.2C19.0419 3.53137 19.1314 4.15817 18.8001 4.6L6.80006 20.6C6.46869 21.0418 5.84189 21.1314 5.40006 20.8C4.95823 20.4686 4.86869 19.8418 5.20006 19.4L17.2001 3.4C17.5314 2.95817 18.1582 2.86863 18.6001 3.2Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "7",
    y1: "3",
    x2: "7",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17",
    y1: "13",
    x2: "17",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12.0001",
    y1: "2.99994",
    x2: "12.0001",
    y2: "21.0001",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Person = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "5",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 19V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V19C21 16.2386 18.7614 14 16 14H8C5.23858 14 3 16.2386 3 19Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const PhoneCallIncoming = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", {
    "clip-path": "url(#clip0)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2.89996 10.489C1.44046 7.83826 2.74822 4.82598 5.28873 3.18212V3.18212C6.32355 2.51253 7.70098 2.76584 8.42987 3.75979L9.9375 5.81565C10.6026 6.72262 10.7046 7.92542 10.2016 8.93138L9.79184 9.75084C9.67323 9.98805 9.65448 10.2625 9.77581 10.4983C9.99686 10.928 10.4676 11.6894 11.3744 12.5962C12.2812 13.503 13.0426 13.9737 13.4723 14.1948C13.7081 14.3161 13.9825 14.2973 14.2197 14.1787L15.0392 13.769C16.0451 13.266 17.2479 13.3679 18.1549 14.0331L20.2108 15.5407C21.2047 16.2696 21.458 17.647 20.7884 18.6818V18.6818C19.1446 21.2223 16.1323 22.5301 13.4816 21.0706C11.7516 20.1181 9.67124 18.6712 7.48528 16.4853C5.29932 14.2993 3.85249 12.219 2.89996 10.489Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20.2071 5.20711C20.5976 4.81658 20.5976 4.18342 20.2071 3.79289C19.8166 3.40237 19.1834 3.40237 18.7929 3.79289L16 6.58579V6C16 5.44772 15.5523 5 15 5C14.4477 5 14 5.44772 14 6V8.5C14 9.32843 14.6716 10 15.5 10H18C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8H17.4142L20.2071 5.20711Z",
    fill: "url(#paint1_linear)"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "2.53553",
    y1: "4.46447",
    x2: "19.5061",
    y2: "21.435",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17.25",
    y1: "3.5",
    x2: "17.25",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "white"
  }))));
});

const PhoneCallOutgoing = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", {
    "clip-path": "url(#clip0)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2.89996 10.489C1.44046 7.83826 2.74822 4.82598 5.28873 3.18212V3.18212C6.32355 2.51253 7.70098 2.76584 8.42987 3.75979L9.9375 5.81565C10.6026 6.72262 10.7046 7.92542 10.2016 8.93138L9.79184 9.75084C9.67323 9.98805 9.65448 10.2625 9.77581 10.4983C9.99686 10.928 10.4676 11.6894 11.3744 12.5962C12.2812 13.503 13.0426 13.9737 13.4723 14.1948C13.7081 14.3161 13.9825 14.2973 14.2197 14.1787L15.0392 13.769C16.0451 13.266 17.2479 13.3679 18.1549 14.0331L20.2108 15.5407C21.2047 16.2696 21.458 17.647 20.7884 18.6818V18.6818C19.1446 21.2223 16.1323 22.5301 13.4816 21.0706C11.7516 20.1181 9.67124 18.6712 7.48528 16.4853C5.29932 14.2993 3.85249 12.219 2.89996 10.489Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 3.5C15.4477 3.5 15 3.94772 15 4.5C15 5.05228 15.4477 5.5 16 5.5H17.0858L14.2929 8.29289C13.9024 8.68342 13.9024 9.31658 14.2929 9.70711C14.6834 10.0976 15.3166 10.0976 15.7071 9.70711L18.5 6.91421V8C18.5 8.55228 18.9477 9 19.5 9C20.0523 9 20.5 8.55228 20.5 8V5.5C20.5 4.39543 19.6046 3.5 18.5 3.5H16Z",
    fill: "url(#paint1_linear)"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "2.53553",
    y1: "4.46447",
    x2: "19.5061",
    y2: "21.435",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17.25",
    y1: "3.5",
    x2: "17.25",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "white"
  }))));
});

const PhoneCallRejected = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", {
    "clip-path": "url(#clip0)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2.89996 10.489C1.44046 7.83826 2.74822 4.82598 5.28873 3.18212V3.18212C6.32355 2.51253 7.70098 2.76584 8.42987 3.75979L9.9375 5.81565C10.6026 6.72262 10.7046 7.92542 10.2016 8.93138L9.79184 9.75084C9.67323 9.98805 9.65448 10.2625 9.77581 10.4983C9.99686 10.928 10.4676 11.6894 11.3744 12.5962C12.2812 13.503 13.0426 13.9737 13.4723 14.1948C13.7081 14.3161 13.9825 14.2973 14.2197 14.1787L15.0392 13.769C16.0451 13.266 17.2479 13.3679 18.1549 14.0331L20.2108 15.5407C21.2047 16.2696 21.458 17.647 20.7884 18.6818V18.6818C19.1446 21.2223 16.1323 22.5301 13.4816 21.0706C11.7516 20.1181 9.67124 18.6712 7.48528 16.4853C5.29932 14.2993 3.85249 12.219 2.89996 10.489Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.2929 8.29289C13.9024 8.68342 13.9024 9.31658 14.2929 9.70711C14.6834 10.0976 15.3166 10.0976 15.7071 9.70711L17 8.41425L18.2929 9.70715C18.6834 10.0977 19.3166 10.0977 19.7071 9.70715C20.0976 9.31663 20.0976 8.68346 19.7071 8.29293L18.4142 7.00003L19.7071 5.70711C20.0977 5.31658 20.0977 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L17 5.58582L15.7071 4.29292C15.3166 3.9024 14.6834 3.9024 14.2929 4.29292C13.9024 4.68344 13.9024 5.31661 14.2929 5.70714L15.5858 7.00003L14.2929 8.29289Z",
    fill: "url(#paint1_linear)"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "2.53553",
    y1: "4.46447",
    x2: "19.5061",
    y2: "21.435",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17",
    y1: "4",
    x2: "17",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "white"
  }))));
});

const Phone = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", {
    "clip-path": "url(#clip0)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2.89996 10.489C1.44046 7.83826 2.74822 4.82598 5.28873 3.18212V3.18212C6.32355 2.51253 7.70098 2.76584 8.42987 3.75979L9.9375 5.81565C10.6026 6.72262 10.7046 7.92542 10.2016 8.93138L9.79184 9.75084C9.67323 9.98805 9.65448 10.2625 9.77581 10.4983C9.99686 10.928 10.4676 11.6894 11.3744 12.5962C12.2812 13.503 13.0426 13.9737 13.4723 14.1948C13.7081 14.3161 13.9825 14.2973 14.2197 14.1787L15.0392 13.769C16.0451 13.266 17.2479 13.3679 18.1549 14.0331L20.2108 15.5407C21.2047 16.2696 21.458 17.647 20.7884 18.6818V18.6818C19.1446 21.2223 16.1323 22.5301 13.4816 21.0706C11.7516 20.1181 9.67124 18.6712 7.48528 16.4853C5.29932 14.2993 3.85249 12.219 2.89996 10.489Z",
    fill: "url(#paint0_linear)"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "2.53553",
    y1: "4.46447",
    x2: "19.5061",
    y2: "21.435",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "white"
  }))));
});

const Photos = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "6",
    width: "16",
    height: "16",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "6",
    y: "2",
    width: "16",
    height: "16",
    rx: "3",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1.5",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19.7954 15.6061C19.7648 15.5654 19.7316 15.5254 19.6959 15.4864L13.319 8.52987C12.0918 7.19102 9.96566 7.24121 8.80293 8.63649L8 9.6V15C8 15.5523 8.44772 16 9 16H19C19.3244 16 19.6127 15.8455 19.7954 15.6061Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10",
    y1: "6",
    x2: "10",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "14",
    y1: "2",
    x2: "14",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "17.5",
    y1: "5",
    x2: "17.5",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "13.8977",
    y1: "7.55704",
    x2: "13.8977",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const PieChart = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 6C8.41775 6 6.87104 6.46919 5.55544 7.34824C4.23985 8.22729 3.21447 9.47672 2.60897 10.9385C2.00347 12.4003 1.84504 14.0089 2.15372 15.5607C2.4624 17.1126 3.22433 18.538 4.34315 19.6569C5.46197 20.7757 6.88743 21.5376 8.43928 21.8463C9.99113 22.155 11.5997 21.9965 13.0615 21.391C14.5233 20.7855 15.7727 19.7602 16.6518 18.4446C17.5308 17.129 18 15.5823 18 14C18 13.4477 17.5523 13 17 13H12C11.4477 13 11 12.5523 11 12V7C11 6.44772 10.5523 6 10 6Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 2C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11L21 11C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10C22 7.87827 21.1571 5.84344 19.6569 4.34314C18.1566 2.84285 16.1217 2 14 2Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10",
    y1: "6",
    x2: "10",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17.5",
    y1: "2",
    x2: "17.5",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Pin = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 14C12.5523 14 13 14.4477 13 15V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V15C11 14.4477 11.4477 14 12 14Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 15V14.6759C18 13.0042 17.1645 11.443 15.7735 10.5157L15.4453 10.2969C15.1671 10.1114 15 9.79917 15 9.46482V7.85078C15 7.62371 15.0773 7.4034 15.2191 7.22609L16.7809 5.27391C16.9227 5.0966 17 4.87629 17 4.64922V3C17 2.44772 16.5523 2 16 2H8C7.44772 2 7 2.44772 7 3V4.64922C7 4.87629 7.07728 5.0966 7.21913 5.27391L8.78087 7.22609C8.92272 7.4034 9 7.62371 9 7.85078V9.46482C9 9.79917 8.8329 10.1114 8.5547 10.2969L8.2265 10.5157C6.83551 11.443 6 13.0042 6 14.6759V15C6 15.5523 6.44772 16 7 16H17C17.5523 16 18 15.5523 18 15Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Pinterest = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.3193 2.04042C14.9805 1.91787 17.7186 2.86659 19.2894 4.88611C23.2876 10.0267 19.4207 17 14 17C12.7127 17 11.7014 16.7173 10.9326 16.2093C10.6371 16.0141 10.3892 15.7933 10.1819 15.5581L8.41697 21.2941C8.25455 21.822 7.69497 22.1183 7.16711 21.9558C6.63924 21.7934 6.34299 21.2338 6.50541 20.706L10.5054 7.70598C10.6678 7.17812 11.2274 6.88187 11.7553 7.04429C12.2832 7.20671 12.5794 7.76629 12.417 8.29415L11.2058 12.2304C11.2036 12.246 11.2009 12.2657 11.1981 12.2892C11.1888 12.3687 11.1784 12.4885 11.177 12.6343C11.1742 12.9331 11.2099 13.3024 11.3396 13.6519C11.4649 13.9891 11.6743 14.3023 12.0352 14.5407C12.4014 14.7827 13.0033 15 14 15C17.7154 15 20.7124 9.97335 17.7106 6.11399C16.6407 4.73836 14.6094 3.93707 12.4113 4.03831C10.2374 4.13842 8.08493 5.11717 6.79319 7.05478C5.95325 8.3147 5.87675 9.51735 6.12255 10.4266C6.38508 11.3977 6.96936 11.9314 7.33302 12.0473C7.8592 12.2151 8.14973 12.7777 7.98194 13.3039C7.81415 13.8301 7.25158 14.1206 6.7254 13.9528C5.5211 13.5688 4.57136 12.3524 4.19185 10.9485C3.79561 9.48277 3.96906 7.68542 5.12909 5.94538C6.83739 3.38294 9.63398 2.16409 12.3193 2.04042Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.4688",
    y1: "2.02991",
    x2: "12.4688",
    y2: "22.0003",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const PlayCircle = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.3923 10.268C16.7256 11.0378 16.7256 12.9623 15.3923 13.7321L11 16.268C9.66667 17.0378 8 16.0755 8 14.5359L8 9.4641C8 7.9245 9.66667 6.96225 11 7.73205L15.3923 10.268Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "13.1962",
    y1: "6",
    x2: "13.1962",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Play = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17.6041 9.4142C19.5761 10.5741 19.5761 13.4259 17.6041 14.5858L9.52106 19.3406C7.52116 20.517 5 19.075 5 16.7548V7.24525C5 4.925 7.52116 3.48304 9.52106 4.65945L17.6041 9.4142Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "13.5",
    y1: "2",
    x2: "13.5",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Playlist = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 6C2 5.44772 2.44772 5 3 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H3C2.44772 7 2 6.55228 2 6Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 10H11",
    stroke: "url(#paint1_linear)",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 14H6",
    stroke: "url(#paint2_linear)",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.2724 3.43195C14.9369 3.76583 14 4.96578 14 6.34238V13.5351C13.4117 13.1948 12.7286 13 12 13C9.79086 13 8 14.7909 8 17C8 19.2091 9.79086 21 12 21C14.2091 21 16 19.2091 16 17V9.50005L19.7955 8.55119C21.0911 8.22728 22 7.06316 22 5.72766C22 3.83422 20.2206 2.4449 18.3837 2.90413L16.2724 3.43195Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "7",
    y1: "5",
    x2: "7",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "7",
    y1: "10",
    x2: "7",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "4.5",
    y1: "14",
    x2: "4.5",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "15",
    y1: "2.8158",
    x2: "15",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Power = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M15.6324 4.87109C15.8829 4.37949 16.4883 4.17955 16.9491 4.48294C18.3473 5.40344 19.467 6.69992 20.1733 8.23209C21.0196 10.068 21.2233 12.1353 20.7513 14.101C20.2794 16.0667 19.1594 17.8163 17.5719 19.0679C15.9843 20.3194 14.0216 21 12 21C9.97845 21 8.01575 20.3194 6.42817 19.0679C4.8406 17.8164 3.72061 16.0668 3.24868 14.1011C2.77675 12.1353 2.98036 10.068 3.82671 8.23211C4.53305 6.69993 5.65273 5.40346 7.05089 4.48295C7.51172 4.17956 8.11713 4.3795 8.36761 4.8711C8.61809 5.36269 8.41731 5.95877 7.96632 6.27661C6.96389 6.98309 6.1595 7.94427 5.64118 9.06859C4.98273 10.4969 4.82431 12.1053 5.19148 13.6346C5.55864 15.1639 6.42999 16.5251 7.66512 17.4988C8.90025 18.4725 10.4272 19.002 12 19.002C13.5728 19.002 15.0998 18.4725 16.3349 17.4988C17.57 16.5251 18.4414 15.1639 18.8085 13.6346C19.1757 12.1053 19.0173 10.4969 18.3588 9.06857C17.8405 7.94426 17.0361 6.98308 16.0337 6.2766C15.5827 5.95876 15.3819 5.36268 15.6324 4.87109Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2C12.5523 2 13 2.44772 13 3V8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8V3C11 2.44772 11.4477 2 12 2Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "4.33936",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Presentation = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 14C12.5523 14 13 14.4477 13 15V16.5858L16.7071 20.2929C17.0976 20.6834 17.0976 21.3166 16.7071 21.7071C16.3166 22.0976 15.6834 22.0976 15.2929 21.7071L13 19.4142V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V19.4142L8.70711 21.7071C8.31658 22.0976 7.68342 22.0976 7.29289 21.7071C6.90237 21.3166 6.90237 20.6834 7.29289 20.2929L11 16.5858V15C11 14.4477 11.4477 14 12 14Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 4H22V13C22 14.6569 20.6569 16 19 16H5C3.34315 16 2 14.6569 2 13V4Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "8",
    cy: "10",
    r: "3",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 3C1 2.44772 1.44772 2 2 2H22C22.5523 2 23 2.44772 23 3C23 3.55228 22.5523 4 22 4H2C1.44772 4 1 3.55228 1 3Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 8C14 7.44772 14.4477 7 15 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H15C14.4477 9 14 8.55228 14 8Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 12C14 11.4477 14.4477 11 15 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H15C14.4477 13 14 12.5523 14 12Z",
    fill: "url(#paint5_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "8",
    y1: "7",
    x2: "8",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "4",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "16.5",
    y1: "7",
    x2: "16.5",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint5_linear",
    x1: "16.5",
    y1: "11",
    x2: "16.5",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Previous = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.39586 9.4142C6.42395 10.5741 6.42395 13.4259 8.39586 14.5858L16.4789 19.3406C18.4788 20.517 21 19.075 21 16.7548V7.24525C21 4.925 18.4788 3.48304 16.4789 4.65945L8.39586 9.4142Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20C4.55228 20 5 19.5523 5 19V5C5 4.44772 4.55228 4 4 4Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.5",
    y1: "2",
    x2: "12.5",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "4",
    y1: "4",
    x2: "4",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Printer = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7 5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5V9H7V5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 19C3.34315 19 2 17.6569 2 16V10C2 8.34315 3.34315 7 5 7H19C20.6569 7 22 8.34315 22 10V16C22 17.6569 20.6569 19 19 19H5Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16H7V19C7 20.6569 8.34315 22 10 22H14C15.6569 22 17 20.6569 17 19V16H18C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14H6Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "18",
    cy: "11",
    r: "0.5",
    stroke: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "18",
    y1: "10",
    x2: "18",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const ProfileCircle = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5.44116 19.5488C6.43459 16.8918 8.99637 15 12 15C15.0036 15 17.5654 16.8918 18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19693 21.0756 5.44116 19.5488Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Promotion = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M13.9458 2.34434C12.8245 1.3888 11.1754 1.3888 10.0541 2.34434L8.78264 3.42788C8.62248 3.56437 8.42334 3.64686 8.21357 3.66359L6.54833 3.79648C5.0798 3.91367 3.91367 5.0798 3.79648 6.54833L3.66359 8.21357C3.64686 8.42334 3.56437 8.62248 3.42788 8.78264L2.34434 10.0541C1.3888 11.1754 1.3888 12.8245 2.34434 13.9458L3.42788 15.2173C3.56437 15.3774 3.64686 15.5766 3.66359 15.7863L3.79648 17.4516C3.91367 18.9201 5.0798 20.0863 6.54833 20.2034L8.21357 20.3363C8.42334 20.3531 8.62248 20.4356 8.78264 20.572L10.0541 21.6556C11.1754 22.6111 12.8245 22.6111 13.9458 21.6556L15.2173 20.572C15.3774 20.4356 15.5766 20.3531 15.7863 20.3363L17.4516 20.2034C18.9201 20.0863 20.0863 18.9201 20.2034 17.4516L20.3363 15.7863C20.3531 15.5766 20.4356 15.3774 20.572 15.2173L21.6556 13.9458C22.6111 12.8245 22.6111 11.1754 21.6556 10.0541L20.572 8.78264C20.4356 8.62248 20.3531 8.42334 20.3363 8.21357L20.2034 6.54833C20.0863 5.0798 18.9201 3.91367 17.4516 3.79648L15.7863 3.66359C15.5766 3.64686 15.3774 3.56437 15.2173 3.42788L13.9458 2.34434Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.5",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "15.5",
    cy: "15.5",
    r: "1.5",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.9735 7.2318C16.3978 7.58537 16.4551 8.21593 16.1015 8.64021L9.43487 16.6402C9.08131 17.0645 8.45074 17.1218 8.02647 16.7682C7.60219 16.4147 7.54487 15.7841 7.89843 15.3598L14.5651 7.35984C14.9187 6.93556 15.5492 6.87824 15.9735 7.2318Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "1.62769",
    x2: "12",
    y2: "22.3722",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "8.5",
    y1: "7",
    x2: "8.5",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "15.5",
    y1: "14",
    x2: "15.5",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "17.0001",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Rain = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 10C22 13.866 18.866 17 15 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C7.54527 7 8.07015 7.08728 8.56143 7.24864C9.63037 4.75042 12.1108 3 15 3C18.866 3 22 6.13401 22 10Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8.39952 16.1071L6.89954 20.1071",
    stroke: "url(#paint1_linear)",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.3995 16.1071L10.8995 20.1071",
    stroke: "url(#paint2_linear)",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.3995 16.1071L14.8995 20.1071",
    stroke: "url(#paint3_linear)",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "8.19976",
    y1: "16.0535",
    x2: "7.09928",
    y2: "20.1606",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12.1998",
    y1: "16.0535",
    x2: "11.0993",
    y2: "20.1606",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "16.1998",
    y1: "16.0535",
    x2: "15.0993",
    y2: "20.1606",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Receipt = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.6 21.55L10 20.5L11.4 21.55C11.7556 21.8167 12.2444 21.8167 12.6 21.55L14 20.5L15.4 21.55C15.7556 21.8167 16.2444 21.8167 16.6 21.55L18 20.5L19.3598 21.6332C20.0111 22.1759 21 21.7128 21 20.8649V3.13503C21 2.28719 20.0111 1.82404 19.3598 2.36681L18 3.49999L16.6 2.44999C16.2444 2.18332 15.7556 2.18332 15.4 2.44999L14 3.49999L12.6 2.44999C12.2444 2.18332 11.7556 2.18332 11.4 2.44999L10 3.49999L8.6 2.44999C8.24444 2.18332 7.75556 2.18332 7.4 2.44999L6 3.49999L4.64018 2.36681C3.98886 1.82403 3 2.28719 3 3.13503V20.8649C3 21.7128 3.98886 22.1759 4.64018 21.6332L6 20.5L7.4 21.55C7.75556 21.8167 8.24444 21.8167 8.6 21.55Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 10C7 9.44772 7.44772 9 8 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H8C7.44772 11 7 10.5523 7 10Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 14C7 13.4477 7.44772 13 8 13H12C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15H8C7.44772 15 7 14.5523 7 14Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2.13312",
    x2: "12",
    y2: "21.8669",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "10",
    y1: "13",
    x2: "10",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Reload = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C15.1315 20 17.7905 18.1991 19.1045 15.555C19.3503 15.0604 19.9505 14.8587 20.445 15.1045C20.9396 15.3503 21.1413 15.9505 20.8955 16.445C19.2641 19.7278 15.9359 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.9359 2 19.2641 4.27225 20.8955 7.55497C21.1413 8.04955 20.9396 8.64973 20.445 8.89551C19.9505 9.1413 19.3503 8.93961 19.1045 8.44503C17.7905 5.80088 15.1315 4 12 4Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.5 3C21.0523 3 21.5 3.44771 21.5 4L21.5 8C21.5 8.26572 21.3942 8.52052 21.2061 8.70814C21.0179 8.89576 20.7628 9.00077 20.4971 9L16.4971 8.98828C15.9448 8.98666 15.4984 8.53763 15.5 7.98535C15.5016 7.43307 15.9506 6.98667 16.5029 6.98829L19.5 6.99707L19.5 4C19.5 3.44772 19.9477 3 20.5 3Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.5001",
    y1: "2",
    x2: "11.5001",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "18.5",
    y1: "3",
    x2: "18.5",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Remove = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Repeat = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M16.2071 2.7929C15.8166 2.40237 15.1834 2.40237 14.7929 2.79289C14.4024 3.18341 14.4024 3.81658 14.7929 4.2071L15.582 4.99622H10C6.13401 4.99622 3 8.13022 3 11.9962V12.9962C3 13.5485 3.44772 13.9962 4 13.9962C4.55228 13.9962 5 13.5485 5 12.9962V11.9962C5 9.23479 7.23858 6.99622 10 6.99622H15.5866L14.7929 7.78992C14.4024 8.18045 14.4024 8.81362 14.7929 9.20414C15.1834 9.59466 15.8166 9.59465 16.2071 9.20412L18.352 7.05916C18.9378 6.47337 18.9378 5.52363 18.352 4.93785L16.2071 2.7929Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.9985 19C17.8645 19 20.9985 15.866 20.9985 12V11C20.9985 10.4477 20.5508 10 19.9985 10C19.4462 10 18.9985 10.4477 18.9985 11V12C18.9985 14.7614 16.7599 17 13.9985 17H8.41182L9.20564 16.2062C9.59616 15.8156 9.59615 15.1825 9.20563 14.792C8.8151 14.4014 8.18193 14.4014 7.79141 14.792L5.64648 16.9369C5.06071 17.5227 5.06071 18.4725 5.64649 19.0582L7.79141 21.2032C8.18194 21.5937 8.8151 21.5937 9.20563 21.2032C9.59615 20.8127 9.59616 20.1795 9.20564 19.789L8.41666 19H13.9985Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10.8957",
    y1: "2.5",
    x2: "10.8957",
    y2: "13.9962",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "13.1028",
    y1: "10",
    x2: "13.1028",
    y2: "21.4961",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const RightAlign = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 10C9 9.44772 9.44772 9 10 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H10C9.44772 11 9 10.5523 9 10Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 18C9 17.4477 9.44772 17 10 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H10C9.44772 19 9 18.5523 9 18Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "15",
    y1: "9",
    x2: "15",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "13",
    x2: "12",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "15",
    y1: "17",
    x2: "15",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Rocket = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7 12H8.1802C8.65688 12 9.06729 12.3365 9.16078 12.8039L10 17L5.5547 19.9635C4.89015 20.4066 4 19.9302 4 19.1315V15C4 13.3431 5.34315 12 7 12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 12H15.8198C15.3431 12 14.9327 12.3365 14.8392 12.8039L14 17L18.4453 19.9635C19.1099 20.4066 20 19.9302 20 19.1315V15C20 13.3431 18.6569 12 17 12Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.166 20H10.834C10.3603 20 9.94759 20.338 9.98729 20.81C10.0498 21.5534 10.4005 22.5925 11.8042 22.9553C11.932 22.9883 12.068 22.9883 12.1958 22.9553C13.5995 22.5925 13.9502 21.5534 14.0127 20.81C14.0524 20.338 13.6396 20 13.166 20Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.99995 8C7.7498 5.75067 10.1861 3.22024 11.3583 2.09474C11.7197 1.74777 12.2803 1.74777 12.6416 2.09474C13.8139 3.22024 16.2502 5.75066 16.9999 8C17.7732 10.3198 16.8307 14.4868 16.1286 16.9724C15.7824 18.198 14.6476 19 13.3741 19H10.6172C9.34782 19 8.21578 18.2032 7.8678 16.9824C7.16224 14.5072 6.21616 10.3511 6.99995 8Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "7",
    y1: "12",
    x2: "7",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17",
    y1: "12",
    x2: "17",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "23",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "11.9971",
    y1: "1.5",
    x2: "11.9971",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Ruler = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M14.1212 2.80751C15.2928 1.63594 17.1923 1.63594 18.3639 2.80751L21.1923 5.63594C22.3639 6.80751 22.3639 8.70701 21.1923 9.87858L9.87858 21.1923C8.70701 22.3639 6.80751 22.3639 5.63594 21.1923L2.80751 18.3639C1.63594 17.1923 1.63594 15.2928 2.80751 14.1212L14.1212 2.80751Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.8284 7.75729L11.9999 4.92886L13.4141 3.51465L16.2426 6.34308C16.6331 6.7336 16.6331 7.36676 16.2426 7.75729C15.852 8.14781 15.2189 8.14781 14.8284 7.75729Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.1715 13.4141L6.34307 10.5857L7.75729 9.1715L10.5857 11.9999C10.9762 12.3905 10.9762 13.0236 10.5857 13.4141C10.1952 13.8047 9.56203 13.8047 9.1715 13.4141Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.2928 9.87861L9.1715 7.75729L10.5857 6.34308L12.707 8.4644C13.0976 8.85492 13.0976 9.48808 12.707 9.87861C12.3165 10.2691 11.6833 10.2691 11.2928 9.87861Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.63597 15.5355L3.51465 13.4141L4.92886 11.9999L7.05018 14.1212C7.44071 14.5118 7.44071 15.1449 7.05018 15.5355C6.65966 15.926 6.02649 15.926 5.63597 15.5355Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.9999",
    y1: "1.92883",
    x2: "11.9999",
    y2: "22.071",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "10.0251",
    y1: "3.51465",
    x2: "10.0251",
    y2: "15.8284",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "10.0251",
    y1: "3.51465",
    x2: "10.0251",
    y2: "15.8284",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "10.0251",
    y1: "3.51465",
    x2: "10.0251",
    y2: "15.8284",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "10.0251",
    y1: "3.51465",
    x2: "10.0251",
    y2: "15.8284",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Sad = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.01565 16.9163C7.52174 17.1375 8.11126 16.9065 8.33238 16.4004C8.95054 14.9855 10.3613 14 12 14C13.6387 14 15.0494 14.9855 15.6676 16.4004C15.8887 16.9065 16.4782 17.1375 16.9843 16.9163C17.4904 16.6952 17.7214 16.1057 17.5003 15.5996C16.5753 13.4826 14.4619 12 12 12C9.53804 12 7.42463 13.4826 6.49967 15.5996C6.27855 16.1057 6.50957 16.6952 7.01565 16.9163Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "8",
    cy: "9",
    r: "1",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "16",
    cy: "9",
    r: "1",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "17.0002",
    x2: "12",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "8",
    y1: "8",
    x2: "8",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "16",
    y1: "8",
    x2: "16",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Save = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2 5C2 3.34315 3.34315 2 5 2H15.7574C16.553 2 17.3161 2.31607 17.8787 2.87868L21.1213 6.12132C21.6839 6.68393 22 7.44699 22 8.24264V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 16C6 14.8954 6.89543 14 8 14H16C17.1046 14 18 14.8954 18 16V22H6V16Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.7574 2H7V6C7 7.10457 7.89543 8 9 8H15C16.1046 8 17 7.10457 17 6V2.26946C16.6135 2.09355 16.1902 2 15.7574 2Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Scan = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10 6C8.34315 6 7 7.34315 7 9V13H17V9C17 7.34315 15.6569 6 14 6H10Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 15H7C7 16.6569 8.34315 18 10 18H14C15.6569 18 17 16.6569 17 15Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 5C2 3.34315 3.34315 2 5 2H7C7.55228 2 8 2.44772 8 3C8 3.55228 7.55228 4 7 4H5C4.44772 4 4 4.44772 4 5V7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7V5Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 19C2 20.6569 3.34315 22 5 22H7C7.55228 22 8 21.5523 8 21C8 20.4477 7.55228 20 7 20H5C4.44772 20 4 19.5523 4 19V17C4 16.4477 3.55228 16 3 16C2.44772 16 2 16.4477 2 17V19Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 19C22 20.6569 20.6569 22 19 22H17C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 20.4477 16 21 16C21.5523 16 22 16.4477 22 17V19Z",
    fill: "url(#paint5_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 5C22 3.34315 20.6569 2 19 2H17C16.4477 2 16 2.44772 16 3C16 3.55228 16.4477 4 17 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 20.4477 8 21 8C21.5523 8 22 7.55228 22 7V5Z",
    fill: "url(#paint6_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "6",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "6",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "5",
    y1: "2",
    x2: "5",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "5",
    y1: "22",
    x2: "5",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint5_linear",
    x1: "19",
    y1: "22",
    x2: "19",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint6_linear",
    x1: "19",
    y1: "2",
    x2: "19",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Schedule = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "18",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "17",
    cy: "17",
    r: "6",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 14C17.5523 14 18 14.4477 18 15V16.5858L19.2071 17.7929C19.5976 18.1834 19.5976 18.8166 19.2071 19.2071C18.8166 19.5976 18.1834 19.5976 17.7929 19.2071L16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17V15C16 14.4477 16.4477 14 17 14Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 2C7.55228 2 8 2.44772 8 3V5C8 5.55228 7.55228 6 7 6C6.44772 6 6 5.55228 6 5V3C6 2.44772 6.44772 2 7 2Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 2C17.5523 2 18 2.44772 18 3V5C18 5.55228 17.5523 6 17 6C16.4477 6 16 5.55228 16 5V3C16 2.44772 16.4477 2 17 2Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "17",
    y1: "11",
    x2: "17",
    y2: "23",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "17.75",
    y1: "14",
    x2: "17.75",
    y2: "19.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "7",
    y1: "2",
    x2: "7",
    y2: "6",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "17",
    y1: "2",
    x2: "17",
    y2: "6",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Scissors = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.4151 2.7907C17.8934 3.06684 18.0573 3.67843 17.7811 4.15672L9.03111 19.3122C8.75497 19.7905 8.14338 19.9543 7.66508 19.6782C7.18679 19.402 7.02292 18.7905 7.29906 18.3122L16.0491 3.15672C16.3252 2.67843 16.9368 2.51455 17.4151 2.7907Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.24997 18.8612C5.96741 19.2754 6.8848 19.0296 7.29901 18.3122C7.71323 17.5947 7.46741 16.6773 6.74997 16.2631C6.03254 15.8489 5.11515 16.0947 4.70094 16.8122C4.28672 17.5296 4.53254 18.447 5.24997 18.8612ZM4.24997 20.5933C5.924 21.5598 8.06456 20.9862 9.03106 19.3122C9.99756 17.6381 9.424 15.4976 7.74997 14.5311C6.07595 13.5646 3.93538 14.1381 2.96889 15.8122C2.00239 17.4862 2.57595 19.6268 4.24997 20.5933Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.58488 2.7907C6.10659 3.06684 5.94272 3.67843 6.21886 4.15672L14.9689 19.3122C15.245 19.7905 15.8566 19.9543 16.3349 19.6782C16.8132 19.402 16.9771 18.7905 16.7009 18.3122L7.95091 3.15672C7.67477 2.67843 7.06318 2.51455 6.58488 2.7907Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.75 18.8612C18.0325 19.2754 17.1151 19.0296 16.7009 18.3122C16.2867 17.5947 16.5325 16.6773 17.25 16.2631C17.9674 15.8489 18.8848 16.0947 19.299 16.8122C19.7132 17.5296 19.4674 18.447 18.75 18.8612ZM19.75 20.5933C18.076 21.5598 15.9354 20.9862 14.9689 19.3122C14.0024 17.6381 14.5759 15.4976 16.25 14.5311C17.924 13.5646 20.0646 14.1381 21.0311 15.8122C21.9976 17.4862 21.424 19.6268 19.75 20.5933Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.5401",
    y1: "2.65656",
    x2: "12.5401",
    y2: "19.8123",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "5.99997",
    y1: "14.0616",
    x2: "5.99997",
    y2: "21.0628",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "11.4599",
    y1: "2.65656",
    x2: "11.4599",
    y2: "19.8123",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "18",
    y1: "14.0616",
    x2: "18",
    y2: "21.0628",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Search = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.2929 16.2929C16.6834 15.9024 17.3166 15.9024 17.7071 16.2929L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18ZM20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "18.5",
    y1: "16",
    x2: "18.5",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11",
    y1: "2",
    x2: "11",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Send = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", {
    "clip-path": "url(#clip0)"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.1928 6.57843C1.36183 4.08552 3.91013 1.80468 6.29603 2.90587L20.0983 9.27616C22.422 10.3487 22.422 13.6514 20.0983 14.7239L6.29603 21.0941C3.91013 22.1953 1.36184 19.9145 2.19281 17.4216L3.68377 12.9487C3.88904 12.3329 3.88904 11.6672 3.68377 11.0514L2.1928 6.57843Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.66677 13L3.68387 12.9487C3.88913 12.3329 3.88913 11.6672 3.68387 11.0514L3.66675 11H14.0001C14.5524 11 15.0001 11.4477 15.0001 12C15.0001 12.5523 14.5524 13 14.0001 13H3.66677Z",
    fill: "url(#paint1_linear)"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "13",
    y1: "0",
    x2: "13",
    y2: "24",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "9.33342",
    y1: "11",
    x2: "9.33342",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "white"
  }))));
});

const Settings = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7.992 4.787c.504-.28.92-.71 1.102-1.257l.388-1.162A2 2 0 0111.379 1h1.242a2 2 0 011.897 1.368l.388 1.162c.182.547.598.977 1.102 1.257.078.044.155.089.232.135.495.297 1.076.442 1.641.327l1.202-.246a2 2 0 012.133.96l.62 1.075a2 2 0 01-.235 2.327l-.815.919c-.382.43-.547 1.005-.538 1.58.002.09.002.181 0 .272-.009.575.156 1.15.538 1.58l.815.92a2 2 0 01.236 2.326l-.621 1.076a2 2 0 01-2.133.96l-1.202-.247c-.565-.115-1.146.03-1.64.327a8.36 8.36 0 01-.233.135c-.504.28-.92.71-1.102 1.257l-.388 1.163A2 2 0 0112.621 23h-1.242a2 2 0 01-1.897-1.367l-.388-1.163c-.182-.547-.598-.977-1.102-1.257a8.377 8.377 0 01-.232-.135c-.495-.297-1.076-.442-1.641-.327l-1.202.246a2 2 0 01-2.133-.96l-.62-1.075a2 2 0 01.235-2.327l.815-.919c.382-.43.547-1.005.538-1.58a8.566 8.566 0 010-.272c.009-.575-.156-1.15-.538-1.58l-.815-.92a2 2 0 01-.236-2.326l.621-1.076a2 2 0 012.133-.96l1.202.247c.565.115 1.146-.03 1.64-.327a8.21 8.21 0 01.233-.135z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 15a3 3 0 100-6 3 3 0 000 6z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 12,
    y1: 1,
    x2: 12,
    y2: 23,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 12,
    y1: 9,
    x2: 12,
    y2: 15,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  }))));
});

const Share = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.5145 6.8575L7.51447 12.8575L6.48547 11.1425L16.4855 5.14251L17.5145 6.8575Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.4855 18.8575L6.48547 12.8575L7.51447 11.1425L17.5145 17.1425L16.4855 18.8575Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 9C18.6569 9 20 7.65685 20 6C20 4.34315 18.6569 3 17 3C15.3431 3 14 4.34315 14 6C14 7.65685 15.3431 9 17 9Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 21C18.6569 21 20 19.6569 20 18C20 16.3431 18.6569 15 17 15C15.3431 15 14 16.3431 14 18C14 19.6569 15.3431 21 17 21Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 15C8.65685 15 10 13.6569 10 12C10 10.3431 8.65685 9 7 9C5.34315 9 4 10.3431 4 12C4 13.6569 5.34315 15 7 15Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5.14251",
    x2: "12",
    y2: "12.8575",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "11.1425",
    x2: "12",
    y2: "18.8575",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "17",
    y1: "3",
    x2: "17",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "17",
    y1: "15",
    x2: "17",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "7",
    y1: "9",
    x2: "7",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ShieldCheck = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 6.66228C3 5.37099 3.82629 4.22457 5.05132 3.81623L11.0513 1.81623C11.6671 1.61096 12.3329 1.61096 12.9487 1.81623L18.9487 3.81623C20.1737 4.22457 21 5.37099 21 6.66228V12C21 17.502 15.4398 20.8417 13.0601 22.0192C12.3875 22.3519 11.6125 22.3519 10.9399 22.0192C8.56019 20.8417 3 17.502 3 12V6.66228Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.2728 14.1414C11.5698 14.8444 10.4302 14.8444 9.72721 14.1414L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "1.5",
    x2: "12",
    y2: "22.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "14.6686",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Shield = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 6.66228C3 5.37099 3.82629 4.22457 5.05132 3.81623L11.0513 1.81623C11.6671 1.61096 12.3329 1.61096 12.9487 1.81623L18.9487 3.81623C20.1737 4.22457 21 5.37099 21 6.66228V12C21 17.502 15.4398 20.8417 13.0601 22.0192C12.3875 22.3519 11.6125 22.3519 10.9399 22.0192C8.56019 20.8417 3 17.502 3 12V6.66228Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 22.2687V1.66228C12.3204 1.66228 12.6408 1.71359 12.9487 1.81623L18.9487 3.81623C20.1737 4.22457 21 5.37099 21 6.66228V12C21 17.25 15.9375 20.5312 13.4063 21.8438C13.2847 21.9068 13.1691 21.9652 13.0601 22.0192C12.7238 22.1855 12.3619 22.2687 12 22.2687Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "1.5",
    x2: "12",
    y2: "22.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "16.5",
    y1: "1.66228",
    x2: "16.5",
    y2: "22.2687",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Ship = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V4H10C8.34315 4 7 5.34315 7 7V8H17V7C17 5.34315 15.6569 4 14 4H13V3Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 15V11C4 9.34315 5.34315 8 7 8H17C18.6569 8 20 9.34315 20 11V15H4Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.65833 21.4472C3.50292 21.8695 4.49703 21.8695 5.34162 21.4472L5.55276 21.3416C5.83429 21.2009 6.16566 21.2009 6.44719 21.3416L6.65833 21.4472C7.50292 21.8695 8.49703 21.8695 9.34162 21.4472L9.55276 21.3416C9.83429 21.2009 10.1657 21.2009 10.4472 21.3416L10.6583 21.4472C11.5029 21.8695 12.497 21.8695 13.3416 21.4472L13.5528 21.3416C13.8343 21.2009 14.1657 21.2009 14.4472 21.3416L14.6583 21.4472C15.5029 21.8695 16.497 21.8695 17.3416 21.4472L17.5528 21.3416C17.8343 21.2009 18.1657 21.2009 18.4472 21.3416L18.6583 21.4472C19.5029 21.8695 20.497 21.8695 21.3416 21.4472L21.4472 21.3944C21.9412 21.1474 22.1414 20.5467 21.8944 20.0528C21.6474 19.5588 21.0467 19.3586 20.5528 19.6056L20.4472 19.6583C20.1657 19.7991 19.8343 19.7991 19.5528 19.6583L19.3416 19.5528C18.497 19.1305 17.5029 19.1305 16.6583 19.5528L16.4472 19.6583C16.1657 19.7991 15.8343 19.7991 15.5528 19.6583L15.3416 19.5528C14.497 19.1305 13.5029 19.1305 12.6583 19.5528L12.4472 19.6583C12.1657 19.7991 11.8343 19.7991 11.5528 19.6583L11.3416 19.5528C10.497 19.1305 9.50292 19.1305 8.65833 19.5528L8.44719 19.6583C8.16566 19.7991 7.83429 19.7991 7.55276 19.6583L7.34162 19.5528C6.49703 19.1305 5.50292 19.1305 4.65833 19.5528L4.44719 19.6583C4.16566 19.7991 3.83429 19.7991 3.55276 19.6583L3.44719 19.6056C2.95321 19.3586 2.35254 19.5588 2.10555 20.0528C1.85856 20.5467 2.05878 21.1474 2.55276 21.3944L2.65833 21.4472Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.86163 13.3253C2.55063 13.6998 1.78153 15.0558 2.13285 16.3732L2.96675 19.5004C3.12794 19.4949 3.29277 19.5284 3.44718 19.6056L3.55275 19.6584C3.83428 19.7991 4.16565 19.7991 4.44718 19.6584L4.65832 19.5528C5.50291 19.1305 6.49702 19.1305 7.34161 19.5528L7.55275 19.6584C7.83428 19.7991 8.16565 19.7991 8.44718 19.6584L8.65832 19.5528C9.50291 19.1305 10.497 19.1305 11.3416 19.5528L11.5528 19.6584C11.8343 19.7991 12.1657 19.7991 12.4472 19.6584L12.6583 19.5528C13.5029 19.1305 14.497 19.1305 15.3416 19.5528L15.5528 19.6584C15.8343 19.7991 16.1657 19.7991 16.4472 19.6584L16.6583 19.5528C17.5029 19.1305 18.497 19.1305 19.3416 19.5528L19.5528 19.6584C19.8343 19.7991 20.1657 19.7991 20.4472 19.6584L20.5528 19.6056C20.7072 19.5284 20.872 19.4948 21.0332 19.5004L21.8671 16.3732C22.2184 15.0558 21.4494 13.6998 20.1383 13.3253L12.8242 11.2355C12.2855 11.0816 11.7145 11.0816 11.1758 11.2355L3.86163 13.3253Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "21.7639",
    x2: "12",
    y2: "19.2361",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "11.1201",
    x2: "12",
    y2: "19.7639",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ShoppingBag = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3.67151 8.6279C3.85917 7.12661 5.13538 6 6.64835 6H17.3517C18.8646 6 20.1408 7.12661 20.3285 8.6279L21.5785 18.6279C21.8023 20.4185 20.4061 22 18.6017 22H5.39835C3.59385 22 2.19769 20.4185 2.42151 18.6279L3.67151 8.6279Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8C16 8.55228 15.5523 9 15 9C14.4477 9 14 8.55228 14 8V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V8C10 8.55228 9.55228 9 9 9C8.44772 9 8 8.55228 8 8V6Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "6",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Show = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 19C17.215 19 20.2099 15.1148 21.3982 13.1334C21.8205 12.4292 21.8205 11.5708 21.3982 10.8666C20.2099 8.88521 17.215 5 12 5C6.78498 5 3.79007 8.88521 2.60179 10.8666C2.17952 11.5708 2.17952 12.4292 2.60179 13.1334C3.79007 15.1148 6.78498 19 12 19Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Shuffle = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12.9227 14.118C13.3783 15.2569 14.4814 16.0038 15.7081 16.0038H18.5867L17.7929 15.21C17.4024 14.8195 17.4024 14.1863 17.7929 13.7958C18.1834 13.4053 18.8166 13.4053 19.2071 13.7958L21.352 15.9407C21.9378 16.5265 21.9378 17.4762 21.352 18.062L19.2071 20.207C18.8166 20.5975 18.1834 20.5975 17.7929 20.207C17.4024 19.8165 17.4024 19.1833 17.7929 18.7928L18.5819 18.0038H15.7081C13.6636 18.0038 11.8251 16.759 11.0657 14.8607L9.0773 9.88961C8.62171 8.75064 7.51858 8.00378 6.29187 8.00378H3C2.44772 8.00378 2 7.55607 2 7.00378C2 6.4515 2.44772 6.00378 3 6.00378H6.29187C8.33639 6.00378 10.1749 7.24854 10.9343 9.14683L12.9227 14.118Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19.2071 3.79302C18.8166 3.40249 18.1834 3.40249 17.7929 3.79301C17.4024 4.18353 17.4024 4.8167 17.7929 5.20722L18.5819 5.99622H15.7081C13.6636 5.99622 11.8251 7.24097 11.0657 9.13926L9.0773 14.1104C8.62171 15.2494 7.51858 15.9962 6.29187 15.9962H3C2.44772 15.9962 2 16.4439 2 16.9962C2 17.5485 2.44772 17.9962 3 17.9962H6.29187C8.33639 17.9962 10.1749 16.7515 10.9343 14.8532L12.9227 9.88204C13.3783 8.74307 14.4814 7.99622 15.7081 7.99622H18.5867L17.7929 8.79005C17.4024 9.18057 17.4024 9.81374 17.7929 10.2043C18.1834 10.5948 18.8166 10.5948 19.2071 10.2042L21.352 8.05928C21.9378 7.47349 21.9378 6.52376 21.352 5.93797L19.2071 3.79302Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.8957",
    y1: "6.00378",
    x2: "11.8957",
    y2: "20.4999",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11.8957",
    y1: "3.50012",
    x2: "11.8957",
    y2: "17.9962",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Size = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M20 10C19.4477 10 19 9.55229 19 9V6.41417L6.41417 19H9C9.55228 19 10 19.4477 10 20C10 20.5523 9.55228 21 9 21H5C3.89543 21 3 20.1046 3 19V15C3 14.4477 3.44772 14 4 14C4.55228 14 5 14.4477 5 15V17.5857L17.5857 5L15 5C14.4477 5 14 4.55228 14 4C14 3.44772 14.4477 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 9.55229 20.5523 10 20 10Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 5C3 3.89543 3.89543 3 5 3H9C9.55228 3 10 3.44772 10 4C10 4.55228 9.55228 5 9 5H5V9C5 9.55228 4.55228 10 4 10C3.44772 10 3 9.55228 3 9V5Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 19C21 20.1046 20.1046 21 19 21H15C14.4477 21 14 20.5523 14 20C14 19.4477 14.4477 19 15 19H19V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V19Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "6.5",
    y1: "3",
    x2: "6.5",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "17.5",
    y1: "21",
    x2: "17.5",
    y2: "14",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Slack = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "1.5",
    y: "6.5",
    width: "10",
    height: "5",
    rx: "2.5",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.5 3.5C7.5 2.39543 8.39543 1.5 9.5 1.5V1.5C10.6046 1.5 11.5 2.39543 11.5 3.5V4.5C11.5 5.05228 11.0523 5.5 10.5 5.5H9.5C8.39543 5.5 7.5 4.60457 7.5 3.5V3.5Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "22.5",
    y: "17.5",
    width: "10",
    height: "5",
    rx: "2.5",
    transform: "rotate(180 22.5 17.5)",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.5 20.5C16.5 21.6046 15.6046 22.5 14.5 22.5V22.5C13.3954 22.5 12.5 21.6046 12.5 20.5L12.5 19.5C12.5 18.9477 12.9477 18.5 13.5 18.5L14.5 18.5C15.6046 18.5 16.5 19.3954 16.5 20.5V20.5Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "6.5",
    y: "22.5",
    width: "10",
    height: "5",
    rx: "2.5",
    transform: "rotate(-90 6.5 22.5)",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.5 13.5L4.5 13.5L4.5 14.5C4.5 15.0523 4.05228 15.5 3.5 15.5C2.94772 15.5 2.5 15.0523 2.5 14.5C2.5 13.9477 2.94772 13.5 3.5 13.5Z",
    fill: "url(#paint5_linear)",
    stroke: "url(#paint6_linear)",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "17.5",
    y: "1.5",
    width: "10",
    height: "5",
    rx: "2.5",
    transform: "rotate(90 17.5 1.5)",
    fill: "url(#paint7_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20.5 10.5L19.5 10.5L19.5 9.5C19.5 8.94772 19.9477 8.5 20.5 8.5C21.0523 8.5 21.5 8.94772 21.5 9.5C21.5 10.0523 21.0523 10.5 20.5 10.5Z",
    fill: "url(#paint8_linear)",
    stroke: "url(#paint9_linear)",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "6.5",
    y1: "6.5",
    x2: "6.5",
    y2: "11.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "9.5",
    y1: "1.5",
    x2: "9.5",
    y2: "5.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "27.5",
    y1: "17.5",
    x2: "27.5",
    y2: "22.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "14.5",
    y1: "22.5",
    x2: "14.5",
    y2: "18.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "11.5",
    y1: "22.5",
    x2: "11.5",
    y2: "27.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint5_linear",
    x1: "1.5",
    y1: "14.5",
    x2: "5.5",
    y2: "14.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint6_linear",
    x1: "1.5",
    y1: "14.5",
    x2: "5.5",
    y2: "14.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint7_linear",
    x1: "22.5",
    y1: "1.5",
    x2: "22.5",
    y2: "6.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint8_linear",
    x1: "22.5",
    y1: "9.5",
    x2: "18.5",
    y2: "9.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint9_linear",
    x1: "22.5",
    y1: "9.5",
    x2: "18.5",
    y2: "9.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Smile = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.01565 13.0837C7.52174 12.8625 8.11126 13.0935 8.33238 13.5996C8.95054 15.0145 10.3613 16 12 16C13.6387 16 15.0494 15.0145 15.6676 13.5996C15.8887 13.0935 16.4782 12.8625 16.9843 13.0837C17.4904 13.3048 17.7214 13.8943 17.5003 14.4004C16.5753 16.5174 14.4619 18 12 18C9.53804 18 7.42463 16.5174 6.49967 14.4004C6.27855 13.8943 6.50957 13.3048 7.01565 13.0837Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "8",
    cy: "9",
    r: "1",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "16",
    cy: "9",
    r: "1",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "12.9998",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "8",
    y1: "8",
    x2: "8",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "16",
    y1: "8",
    x2: "16",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Snapchat = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M5 15.5C6.10535 14.7615 6.36094 13.8505 6 13C5.65537 12.1873 3.11111 11.4444 3.66667 10.3333C4.22222 9.22222 5.50289 10.6502 6.44444 9.77778C6.35915 8.19759 6.13755 6.83277 6.80081 5.34581C7.76907 3.11111 9.77778 2 12 2C14.2222 2 16.2309 3.11111 17.1992 5.34581C17.8624 6.83277 17.6409 8.19759 17.5556 9.77778C18.4971 10.6502 19.7778 9.22222 20.3333 10.3333C20.8889 11.4444 18.3446 12.1873 18 13C17.6391 13.8505 17.8947 14.7615 19 15.5C20.6724 16.6174 22 16.4444 22 17.5788C22 18.6667 19.5764 18.9111 19 19L18.3 19.9333C18.1111 20.1851 17.814 20.3339 17.4992 20.3295C16.2405 20.3117 15.8219 20.2642 14.7778 20.8889C13.9231 21.4002 13.0636 22 12 22C10.9364 22 10.0769 21.4002 9.22222 20.8889C8.17809 20.2642 7.75948 20.3117 6.50075 20.3295C6.18603 20.3339 5.88885 20.1851 5.7 19.9333L5 19C4.42359 18.9111 2 18.6667 2 17.5788C2 16.4444 3.32757 16.6174 5 15.5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Snowflake = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.51512 2.40398C8.90564 2.01345 9.53881 2.01345 9.92933 2.40398L12 4.47465L14.0707 2.40398C14.4612 2.01345 15.0944 2.01345 15.4849 2.40398C15.8754 2.7945 15.8754 3.42767 15.4849 3.81819L12.7071 6.59597C12.3166 6.98649 11.6834 6.98649 11.2929 6.59597L8.51512 3.81819C8.12459 3.42767 8.12459 2.7945 8.51512 2.40398ZM5.43208 4.184C5.96555 4.04106 6.51389 4.35764 6.65683 4.89111L7.67356 8.68563C7.74221 8.94181 7.70627 9.21476 7.57366 9.44445C7.44106 9.67413 7.22264 9.84173 6.96646 9.91037L3.17194 10.9271C2.63848 11.07 2.09014 10.7535 1.9472 10.22C1.80426 9.68653 2.12084 9.1382 2.6543 8.99526L5.48289 8.23734L4.72498 5.40875C4.58203 4.87528 4.89862 4.32695 5.43208 4.184ZM18.5679 4.184C19.1014 4.32695 19.418 4.87528 19.275 5.40875L18.5171 8.23734L21.3457 8.99526C21.8792 9.1382 22.1958 9.68653 22.0528 10.22C21.9099 10.7535 21.3615 11.07 20.8281 10.9271L17.0336 9.91037C16.5001 9.76743 16.1835 9.21909 16.3264 8.68563L17.3432 4.89111C17.4861 4.35764 18.0345 4.04106 18.5679 4.184ZM1.94716 13.78C2.09011 13.2465 2.63844 12.93 3.17191 13.0729L6.96642 14.0896C7.49989 14.2326 7.81647 14.7809 7.67353 15.3144L6.65679 19.1089C6.51385 19.6424 5.96552 19.9589 5.43205 19.816C4.89858 19.6731 4.582 19.1247 4.72494 18.5913L5.48286 15.7627L2.65427 15.0047C2.1208 14.8618 1.80422 14.3135 1.94716 13.78ZM22.0528 13.78C22.1958 14.3135 21.8792 14.8618 21.3457 15.0047L18.5171 15.7627L19.275 18.5913C19.418 19.1247 19.1014 19.6731 18.5679 19.816C18.0345 19.9589 17.4861 19.6424 17.3432 19.1089L16.3264 15.3144C16.1835 14.7809 16.5001 14.2326 17.0335 14.0896L20.8281 13.0729C21.3615 12.93 21.9099 13.2465 22.0528 13.78ZM12 19.5253L9.92933 21.596C9.53881 21.9865 8.90564 21.9865 8.51512 21.596C8.12459 21.2054 8.12459 20.5723 8.51512 20.1818L11.2929 17.404C11.6834 17.0135 12.3166 17.0135 12.7071 17.404L15.4849 20.1818C15.8754 20.5723 15.8754 21.2054 15.4849 21.596C15.0944 21.9865 14.4612 21.9865 14.0707 21.596L12 19.5253Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.0001 4.88892C12.5524 4.88892 13.0001 5.33663 13.0001 5.88892V10.268L16.7925 8.07848C17.2707 7.80233 17.8823 7.96621 18.1585 8.4445C18.4346 8.9228 18.2707 9.53439 17.7925 9.81053L14.0001 12.0001L17.7925 14.1896C18.2707 14.4657 18.4346 15.0773 18.1585 15.5556C17.8823 16.0339 17.2707 16.1978 16.7924 15.9216L13.0001 13.7321V18.1111C13.0001 18.6634 12.5524 19.1111 12.0001 19.1111C11.4478 19.1111 11.0001 18.6634 11.0001 18.1111V13.7321L7.20769 15.9216C6.72939 16.1978 6.1178 16.0339 5.84166 15.5556C5.56552 15.0773 5.72939 14.4657 6.20769 14.1896L10.0001 12.0001L6.20772 9.81053C5.72943 9.53438 5.56555 8.92279 5.8417 8.4445C6.11784 7.96621 6.72943 7.80233 7.20772 8.07848L11.0001 10.268V5.88892C11.0001 5.33663 11.4478 4.88892 12.0001 4.88892Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2.11108",
    x2: "12",
    y2: "21.8889",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12.0001",
    y1: "4.88892",
    x2: "12.0001",
    y2: "19.1111",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Sort = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 6C4 5.44772 4.44772 5 5 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H5C4.44772 7 4 6.55228 4 6Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 12C4 11.4477 4.44772 11 5 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H5C4.44772 13 4 12.5523 4 12Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 18C4 17.4477 4.44772 17 5 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H5C4.44772 19 4 18.5523 4 18Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.5",
    y1: "5",
    x2: "12.5",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "10",
    y1: "11",
    x2: "10",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "8",
    y1: "17",
    x2: "8",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Spotify = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.97957 8.11086C6.44752 8.25898 6.13627 8.81036 6.28438 9.34241C6.43245 9.87432 6.98357 10.1855 7.51549 10.0377L7.51445 10.038C7.53592 10.0323 7.55746 10.0269 7.57904 10.0216C7.63028 10.0091 7.7109 9.99037 7.81875 9.96804C8.03453 9.92336 8.35862 9.86451 8.77371 9.81284C9.60479 9.7094 10.7947 9.63551 12.2069 9.75906C13.6192 9.88261 14.7782 10.162 15.5787 10.4082C15.9785 10.5312 16.2874 10.6454 16.4922 10.7269C16.5886 10.7653 16.6848 10.8048 16.7791 10.8483L16.7802 10.8489C17.2781 11.0857 17.8739 10.8748 18.1119 10.3772C18.3501 9.87893 18.1393 9.28188 17.6411 9.04363L17.6401 9.04317L17.639 9.04263L17.6362 9.04129C17.5988 9.02368 17.561 9.00673 17.5232 8.99011C17.4544 8.9599 17.3567 8.91834 17.2316 8.86859C16.9817 8.76912 16.6221 8.63665 16.1666 8.49656C15.2564 8.21665 13.9576 7.90459 12.3812 7.76667C10.8049 7.62876 9.47163 7.71055 8.52669 7.82816C8.05377 7.88702 7.67664 7.95504 7.4132 8.00959C7.28143 8.03687 7.17794 8.06082 7.10497 8.07863C7.0648 8.08843 7.0247 8.09857 6.98481 8.10942L6.98181 8.11024C6.97827 8.11122 7.42617 9.71515 6.97957 8.11086Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.75021 11.1773C7.21304 11.3056 6.8816 11.8451 7.00992 12.3823C7.138 12.9185 7.67571 13.2497 8.21188 13.1233L8.21731 13.1221C8.22393 13.1206 8.23633 13.1179 8.25436 13.1142C8.29042 13.1068 8.34897 13.0954 8.42889 13.0819C8.58875 13.0548 8.83387 13.0191 9.15525 12.9892C9.79818 12.9295 10.7448 12.8935 11.9238 12.9967C13.1027 13.0998 14.0287 13.2996 14.6515 13.4701C14.9628 13.5553 15.198 13.633 15.3507 13.6875C15.4652 13.7283 15.5333 13.756 15.5521 13.7638L15.5569 13.7658C16.063 13.9834 16.6504 13.7507 16.8696 13.2449C17.0893 12.7382 16.8565 12.1493 16.3498 11.9297L16.3478 11.9288L16.3452 11.9277C16.3146 11.9146 16.2837 11.9021 16.2528 11.8899C16.198 11.8682 16.1209 11.8387 16.0223 11.8036C15.8252 11.7333 15.5421 11.6403 15.1794 11.541C14.4542 11.3426 13.4096 11.119 12.0981 11.0043C10.7865 10.8895 9.71897 10.9283 8.97034 10.9978C8.59594 11.0326 8.30094 11.075 8.09463 11.11C7.99146 11.1275 7.91041 11.1431 7.85264 11.155C7.82006 11.1617 7.78754 11.1686 7.75515 11.1761L7.7524 11.1768L7.75123 11.1771C7.75123 11.1771 8.13808 12.801 7.75021 11.1773Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.34968 14.2957C7.83606 14.4987 7.58424 15.0796 7.78724 15.5933C7.98884 16.1033 8.56317 16.3552 9.07416 16.1598C9.10872 16.1478 9.14378 16.1374 9.17902 16.1276C9.27239 16.1016 9.42753 16.0639 9.64324 16.0296C10.074 15.9611 10.75 15.9054 11.6622 15.9853C12.5745 16.0651 13.2306 16.2373 13.6429 16.3795C13.8494 16.4508 13.9956 16.5148 14.083 16.5566C14.116 16.5724 14.1488 16.5888 14.1807 16.6066C14.65 16.8877 15.2593 16.7394 15.5465 16.2721C15.8356 15.8015 15.6884 15.1857 15.2179 14.8966L15.2165 14.8957L15.215 14.8948L15.185 14.877C15.1701 14.8684 15.1514 14.8578 15.1287 14.8454C15.0834 14.8207 15.0225 14.789 14.9458 14.7523C14.7924 14.6789 14.576 14.5858 14.2952 14.4889C13.7331 14.295 12.9167 14.0874 11.8366 13.9929C10.7564 13.8984 9.91636 13.961 9.32912 14.0544C9.03583 14.1011 8.80651 14.1552 8.64266 14.2008C8.56075 14.2236 8.49526 14.2443 8.44637 14.2608C8.41495 14.2714 8.38372 14.2825 8.35279 14.2945L8.35119 14.2951C8.34892 14.296 8.96328 15.8482 8.34968 14.2957Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12.3812",
    y1: "7.76667",
    x2: "12.1415",
    y2: "10.5065",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12.0981",
    y1: "11.0043",
    x2: "11.8802",
    y2: "13.495",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "11.8366",
    y1: "13.9929",
    x2: "11.6187",
    y2: "16.4836",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Star = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("g", {
    "clip-path": "url(#clip0)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10.1109 3.43478C10.7335 1.64366 13.2665 1.64366 13.8891 3.43478L14.8347 6.15493C15.1093 6.94508 15.8467 7.48082 16.683 7.49786L19.5622 7.55653C21.4581 7.59517 22.2409 10.0043 20.7298 11.1499L18.4349 12.8897C17.7683 13.3951 17.4867 14.2619 17.7289 15.0626L18.5628 17.819C19.112 19.634 17.0627 21.1229 15.5062 20.0398L13.1424 18.3949C12.4557 17.9171 11.5443 17.9171 10.8576 18.3949L8.49383 20.0398C6.93734 21.1229 4.88805 19.634 5.43715 17.819L6.27107 15.0626C6.51331 14.2619 6.23165 13.3951 5.56506 12.8897L3.27022 11.1499C1.75915 10.0043 2.54191 7.59517 4.43776 7.55653L7.31697 7.49786C8.15331 7.48082 8.89069 6.94508 9.16535 6.15494L10.1109 3.43478Z",
    fill: "url(#paint0_linear)"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "-2",
    x2: "12",
    y2: "26",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "white"
  }))));
});

const Stop = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Store = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M16.357 11.2572L16.9994 11.0002L17.0005 11.0002L17.7016 11.3508C18.5394 11.7697 19.4995 11.8751 20.4084 11.6479C20.6211 11.5947 20.8191 11.5146 21 11.4121V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V11.4121C3.18091 11.5146 3.37895 11.5947 3.59166 11.6479C4.50046 11.8751 5.46056 11.7697 6.29844 11.3508L6.99955 11.0002L7.00058 11.0002L7.64305 11.2572C8.83511 11.734 10.1649 11.734 11.357 11.2572L12 11L12.6431 11.2572C13.8351 11.734 15.1649 11.734 16.357 11.2572Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 18C9 16.3431 10.3431 15 12 15V15C13.6569 15 15 16.3431 15 18V22H9V18Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.9994 11.0002L16.357 11.2572C15.1649 11.734 13.8351 11.734 12.6431 11.2572L12 11L11.357 11.2572C10.1649 11.734 8.83511 11.734 7.64305 11.2572L7.00058 11.0002L6.99955 11.0002L6.29844 11.3508C5.46056 11.7697 4.50046 11.8751 3.59166 11.6479C2.21624 11.3041 1.45439 9.83157 1.96825 8.51023L3.75619 3.91266C4.20463 2.75954 5.31497 2 6.55221 2H8.4799C8.49258 1.99976 8.5053 1.99976 8.51806 2H15.4819C15.4946 1.99976 15.5073 1.99976 15.52 2H17.4478C18.685 2 19.7954 2.75955 20.2438 3.91266L22.0318 8.51023C22.5456 9.83158 21.7838 11.3041 20.4084 11.6479C19.4995 11.8751 18.5394 11.7697 17.7016 11.3508L17.0005 11.0002L16.9994 11.0002Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "1.99982",
    x2: "12",
    y2: "11.7651",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Sun = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 15.0376 8.96243 17.5 12 17.5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9951 2C12.5474 2 12.9951 2.44772 12.9951 3V4C12.9951 4.55228 12.5474 5 11.9951 5C11.4428 5 10.9951 4.55228 10.9951 4V3C10.9951 2.44772 11.4428 2 11.9951 2Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9951 18.9996C12.5474 18.9996 12.9951 19.4473 12.9951 19.9996V20.9964C12.9951 21.5487 12.5474 21.9964 11.9951 21.9964C11.4428 21.9964 10.9951 21.5487 10.9951 20.9964V19.9996C10.9951 19.4473 11.4428 18.9996 11.9951 18.9996Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.92537 4.92842C5.31589 4.5379 5.94906 4.5379 6.33958 4.92842L7.20405 5.79289C7.59458 6.18342 7.59458 6.81658 7.20405 7.20711C6.81353 7.59763 6.18036 7.59763 5.78984 7.20711L4.92537 6.34264C4.53484 5.95211 4.53484 5.31895 4.92537 4.92842Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.793 16.796C17.1835 16.4055 17.8166 16.4055 18.2072 16.796L19.065 17.6538C19.4555 18.0444 19.4555 18.6775 19.0649 19.0681C18.6744 19.4586 18.0413 19.4586 17.6507 19.068L16.7929 18.2102C16.4024 17.8197 16.4024 17.1865 16.793 16.796Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.99695 11.9982C1.99695 11.4459 2.44466 10.9982 2.99695 10.9982H3.99695C4.54923 10.9982 4.99695 11.4459 4.99695 11.9982C4.99695 12.5505 4.54923 12.9982 3.99695 12.9982H2.99695C2.44466 12.9982 1.99695 12.5505 1.99695 11.9982Z",
    fill: "url(#paint5_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.9966 11.9982C18.9966 11.4459 19.4443 10.9982 19.9966 10.9982H20.9934C21.5456 10.9982 21.9934 11.4459 21.9934 11.9982C21.9934 12.5505 21.5456 12.9982 20.9934 12.9982H19.9966C19.4443 12.9982 18.9966 12.5505 18.9966 11.9982Z",
    fill: "url(#paint6_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.92534 19.068C4.53482 18.6775 4.53482 18.0444 4.92534 17.6538L5.78627 16.7929C6.1768 16.4024 6.80996 16.4024 7.20048 16.7929C7.59101 17.1834 7.59101 17.8166 7.20048 18.2071L6.33955 19.068C5.94903 19.4586 5.31586 19.4586 4.92534 19.068Z",
    fill: "url(#paint7_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.7863 7.20711C16.3958 6.81658 16.3958 6.18341 16.7863 5.7929L17.6508 4.9284C18.0414 4.53789 18.6745 4.5379 19.065 4.92843C19.4556 5.31896 19.4555 5.95212 19.065 6.34264L18.2005 7.20714C17.81 7.59765 17.1768 7.59764 16.7863 7.20711Z",
    fill: "url(#paint8_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "6.5",
    x2: "12",
    y2: "17.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11.9951",
    y1: "2",
    x2: "11.9951",
    y2: "5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "11.9951",
    y1: "18.9996",
    x2: "11.9951",
    y2: "21.9964",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "4.92537",
    y1: "4.92842",
    x2: "7.20405",
    y2: "7.20711",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "16.7929",
    y1: "16.796",
    x2: "19.065",
    y2: "19.068",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint5_linear",
    x1: "1.99695",
    y1: "11.9982",
    x2: "4.99695",
    y2: "11.9982",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint6_linear",
    x1: "18.9966",
    y1: "11.9982",
    x2: "21.9934",
    y2: "11.9982",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint7_linear",
    x1: "4.92534",
    y1: "19.068",
    x2: "7.20048",
    y2: "16.7929",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint8_linear",
    x1: "16.7863",
    y1: "7.20713",
    x2: "19.065",
    y2: "4.92841",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Sync = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M4 12C4 7.58172 7.58172 4 12 4C14.5171 4 16.7288 5.1635 18.1822 6.99321L16.5029 6.98829C15.9506 6.98667 15.5016 7.43307 15.5 7.98535C15.4984 8.53763 15.9448 8.98666 16.4971 8.98828L19.9399 8.99836C19.9783 9.00071 20.017 9.00084 20.0557 8.9987L20.4971 9C20.7628 9.00077 21.0179 8.89576 21.2061 8.70814C21.3942 8.52052 21.5 8.26572 21.5 8L21.5 4C21.5 3.44771 21.0523 3 20.5 3C19.9477 3 19.5 3.44772 19.5 4L19.5 5.44947C17.6875 3.34038 15.023 2 12 2C6.47715 2 2 6.47715 2 12C2 12.5523 2.44772 13 3 13C3.55228 13 4 12.5523 4 12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20 12C20 16.4183 16.4183 20 12 20C9.48295 20 7.27119 18.8365 5.81776 17.0068L7.49707 17.0117C8.04935 17.0133 8.49838 16.5669 8.5 16.0146C8.50161 15.4624 8.05521 15.0133 7.50293 15.0117L4.06007 15.0016C4.02166 14.9993 3.983 14.9992 3.94428 15.0013L3.50293 15C3.23721 14.9992 2.9821 15.1042 2.79393 15.2919C2.60576 15.4795 2.5 15.7343 2.5 16L2.5 20C2.5 20.5523 2.94772 21 3.5 21C4.05229 21 4.5 20.5523 4.5 20L4.5 18.5505C6.31255 20.6596 8.97702 22 12 22C17.5228 22 22 17.5228 22 12C22 11.4477 21.5523 11 21 11C20.4477 11 20 11.4477 20 12Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.75",
    y1: "2",
    x2: "11.75",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12.25",
    y1: "11",
    x2: "12.25",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Tablet = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "3",
    y: "2",
    width: "18",
    height: "20",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Tag = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M20.6811 13.2434C21.3004 12.6241 21.6181 11.7652 21.5509 10.892L21.1469 5.63919C21.0334 4.16385 19.8611 2.99161 18.3858 2.87812L13.133 2.47406C12.2598 2.40689 11.4009 2.72463 10.7816 3.3439L3.27199 10.8535C2.10042 12.0251 2.10042 13.9246 3.27199 15.0962L8.92884 20.753C10.1004 21.9246 11.9999 21.9246 13.1715 20.753L20.6811 13.2434Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.5857 7.318C13.9999 7.90379 13.9999 8.85354 14.5857 9.43932C15.1715 10.0251 16.1212 10.0251 16.707 9.43932C17.2928 8.85354 17.2928 7.90379 16.707 7.318C16.1212 6.73222 15.1715 6.73222 14.5857 7.318Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.51469 13.682L10.3431 16.5104C10.7336 16.9009 11.3668 16.9009 11.7573 16.5104C12.1479 16.1199 12.1479 15.4867 11.7573 15.0962L8.92891 12.2677C8.53838 11.8772 7.90522 11.8772 7.5147 12.2677C7.12417 12.6583 7.12417 13.2914 7.51469 13.682Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.9765",
    y1: "2.46521",
    x2: "11.9765",
    y2: "21.6317",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "15.6464",
    y1: "6.87866",
    x2: "15.6464",
    y2: "9.87866",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "9.63602",
    y1: "11.9749",
    x2: "9.63602",
    y2: "16.8033",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Target = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19.7822 2.4794C19.6655 1.66374 18.6677 1.33138 18.0851 1.91409L15.8534 4.14647C15.6309 4.36903 15.5261 4.68335 15.5706 4.9949L15.8231 6.76264L11.7929 10.7929C11.4024 11.1834 11.4024 11.8166 11.7929 12.2071C12.1834 12.5976 12.8166 12.5976 13.2071 12.2071L17.2374 8.17679L19.0049 8.4293C19.3165 8.47381 19.6309 8.36902 19.8535 8.14645L22.0857 5.91419C22.6684 5.3315 22.3358 4.33366 21.52 4.21714L19.9999 4.00001L19.7822 2.4794Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "6",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "10",
    x2: "12",
    y2: "14",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "16.9398",
    y1: "1.62",
    x2: "16.9398",
    y2: "12.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Thermometer = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 13.9995C10 14.4328 9.85927 14.8544 9.59899 15.2009C9.22238 15.7021 9 16.3222 9 17C9 18.6569 10.3431 20 12 20C13.6569 20 15 18.6569 15 17C15 16.3222 14.7776 15.7021 14.401 15.2009C14.1407 14.8544 14 14.4328 14 13.9995V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V13.9995ZM8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V13.9995C16.6279 14.8353 17 15.8742 17 17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17C7 15.8742 7.37209 14.8353 8 13.9995V6Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V15.2676C10.4022 15.6134 10 16.2597 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 16.2597 13.5978 15.6134 13 15.2676V8Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ThumbsDown = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2 10C2 11.6569 3.34315 13 5 13H7V3H5C3.34315 3 2 4.34315 2 6V10Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M22.3788 12.5124C22.6944 13.7744 21.7402 14.9971 20.4393 14.9976L14.5 15L15.049 18.2938C15.3145 19.8871 14.469 21.4582 12.9929 22.1142V22.1142C12.0557 22.5308 11 21.8447 11 20.8191V19.0523C11 18.3711 10.7682 17.7102 10.3426 17.1783L7 13V3H17.6578C19.0344 3 20.2343 3.93679 20.5682 5.2722L22.3788 12.5124Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "4.5",
    y1: "13",
    x2: "4.5",
    y2: "3",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "15",
    y1: "23",
    x2: "15",
    y2: "3",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ThumbsUp = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2 15C2 13.3431 3.34315 12 5 12H7V22H5C3.34315 22 2 20.6569 2 19V15Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M22.3788 12.4876C22.6944 11.2256 21.7402 10.0029 20.4393 10.0024L14.5 10L15.049 6.70618C15.3145 5.11294 14.469 3.54176 12.9929 2.88576V2.88576C12.0557 2.4692 11 3.15526 11 4.18092V5.94766C11 6.62887 10.7682 7.2898 10.3426 7.82174L7 12V22H17.6578C19.0344 22 20.2343 21.0632 20.5682 19.7278L22.3788 12.4876Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "4.5",
    y1: "12",
    x2: "4.5",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "15",
    y1: "2",
    x2: "15",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Ticket = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V9C22 9.55228 21.5255 9.97928 21.041 10.2445C20.4207 10.5841 20 11.2429 20 12C20 12.7571 20.4207 13.4159 21.041 13.7555C21.5255 14.0207 22 14.4477 22 15V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V15C2 14.4477 2.47452 14.0207 2.95897 13.7555C3.57933 13.4159 4 12.7571 4 12C4 11.2429 3.57933 10.5841 2.95897 10.2445C2.47452 9.97928 2 9.55228 2 9V7Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.0554 8.71739C11.3667 7.82183 12.6333 7.82183 12.9446 8.71739L13.1822 9.40107C13.3195 9.79614 13.6882 10.064 14.1064 10.0725L14.8301 10.0873C15.778 10.1066 16.1694 11.3111 15.4138 11.8839L14.837 12.3212C14.5038 12.5739 14.3629 13.0074 14.484 13.4077L14.6936 14.1005C14.9682 15.008 13.9435 15.7524 13.1653 15.2109L12.5712 14.7975C12.2279 14.5586 11.7721 14.5586 11.4288 14.7975L10.8347 15.2109C10.0565 15.7524 9.03181 15.008 9.30636 14.1005L9.51596 13.4077C9.63708 13.0074 9.49625 12.5739 9.16295 12.3212L8.58616 11.8839C7.83063 11.3111 8.22201 10.1066 9.16994 10.0873L9.8936 10.0725C10.3118 10.064 10.6805 9.79614 10.8178 9.40107L11.0554 8.71739Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "6",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Timer = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10 2C9.44772 2 9 2.44772 9 3C9 3.55228 9.44772 4 10 4H11V5.06189C7.05369 5.55399 4 8.92038 4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13C20 8.92038 16.9463 5.55399 13 5.06189V4H14C14.5523 4 15 3.55228 15 3C15 2.44772 14.5523 2 14 2H10Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.77131 4.47379C6.4831 4.0038 5.86523 3.85291 5.4233 4.18254C5.03325 4.47346 4.66294 4.78994 4.3148 5.1299C3.92035 5.51508 3.97313 6.14891 4.39247 6.50683C4.81181 6.86474 5.43843 6.81021 5.84055 6.43305C6.04287 6.24329 6.25385 6.06297 6.47283 5.89268C6.90803 5.55424 7.05952 4.94377 6.77131 4.47379Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.2286 4.47379C17.5168 4.0038 18.1347 3.85291 18.5766 4.18254C18.9666 4.47346 19.337 4.78994 19.6851 5.1299C20.0795 5.51508 20.0268 6.14891 19.6074 6.50683C19.1881 6.86474 18.5615 6.81021 18.1593 6.43305C17.957 6.24329 17.746 6.06297 17.5271 5.89268C17.0919 5.55424 16.9404 4.94377 17.2286 4.47379Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.2071 11.2071C15.5976 10.8166 15.5976 10.1834 15.2071 9.79289C14.8166 9.40237 14.1834 9.40237 13.7929 9.79289L12.518 11.0677C12.3528 11.0236 12.1792 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 12.8208 13.9764 12.6472 13.9323 12.482L15.2071 11.2071Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11.9999",
    y1: "4.0058",
    x2: "11.9999",
    y2: "6.74769",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "11.9999",
    y1: "4.0058",
    x2: "11.9999",
    y2: "6.74769",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12.75",
    y1: "9.5",
    x2: "12.75",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const ToggleOff = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9 5C5.13401 5 2 8.13401 2 12C2 15.866 5.13401 19 9 19H15C18.866 19 22 15.866 22 12C22 8.13401 18.866 5 15 5H9Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 8.5C7.067 8.5 5.5 10.067 5.5 12C5.5 13.933 7.067 15.5 9 15.5C10.933 15.5 12.5 13.933 12.5 12C12.5 10.067 10.933 8.5 9 8.5Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "9",
    y1: "8.5",
    x2: "9",
    y2: "15.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ToggleOn = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9 5C5.13401 5 2 8.13401 2 12C2 15.866 5.13401 19 9 19H15C18.866 19 22 15.866 22 12C22 8.13401 18.866 5 15 5H9Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 8.5C13.067 8.5 11.5 10.067 11.5 12C11.5 13.933 13.067 15.5 15 15.5C16.933 15.5 18.5 13.933 18.5 12C18.5 10.067 16.933 8.5 15 8.5Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "15",
    y1: "8.5",
    x2: "15",
    y2: "15.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Tool = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10.999 10.158l2.828 2.829-7.07 7.07a2 2 0 01-2.83-2.828L11 10.16z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.829 4.328c.488-.488.338-1.31-.337-1.453a6 6 0 104.618 4.618c-.143-.675-.965-.824-1.453-.336L18.07 8.744a2 2 0 11-2.829-2.829l1.588-1.587z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 8.585,
    y1: 10.158,
    x2: 8.585,
    y2: 20.643,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 15.242,
    y1: 2.744,
    x2: 15.242,
    y2: 14.744,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  }))));
});

const Train = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M14 1C14.5523 1 15 1.44772 15 2H18C19.6569 2 21 3.34315 21 5V15C21 16.6569 19.6569 18 18 18H6C4.34315 18 3 16.6569 3 15V5C3 3.34315 4.34315 2 6 2H9C9 1.44772 9.44772 1 10 1H14Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "6",
    cy: "15",
    r: "1",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "18",
    cy: "15",
    r: "1",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.23602 21C7.85725 21 7.51098 21.214 7.34159 21.5528L6.89441 22.4472C6.64743 22.9412 6.04676 23.1414 5.55278 22.8944C5.05879 22.6475 4.85856 22.0468 5.10554 21.5528L5.55272 20.6584C6.06089 19.642 7.09969 19 8.23602 19H15.7639C16.9002 19 17.939 19.642 18.4472 20.6583L18.8944 21.5528C19.1414 22.0468 18.9412 22.6474 18.4472 22.8944C17.9532 23.1414 17.3525 22.9412 17.1056 22.4472L16.6583 21.5528C16.4889 21.214 16.1427 21 15.7639 21H8.23602Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V9C19 9.55228 18.5523 10 18 10H6C5.44772 10 5 9.55228 5 9V5Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "6",
    y1: "14",
    x2: "6",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "18",
    y1: "14",
    x2: "18",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "23.0002",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "10",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Trash = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M4 7H20V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 10C9.55228 10 10 10.4477 10 11V18C10 18.5523 9.55228 19 9 19C8.44772 19 8 18.5523 8 18V11C8 10.4477 8.44772 10 9 10Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 10C15.5523 10 16 10.4477 16 11V18C16 18.5523 15.5523 19 15 19C14.4477 19 14 18.5523 14 18V11C14 10.4477 14.4477 10 15 10Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H7ZM10 4H14C14.5523 4 15 4.44772 15 5H9C9 4.44772 9.44772 4 10 4Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "7",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "9",
    y1: "10",
    x2: "9",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "15",
    y1: "10",
    x2: "15",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "7",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const TrendingDown = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.7071 16.7071C21.0976 16.3166 21.0976 15.6834 20.7071 15.2929L14.4142 9C13.6332 8.21895 12.3668 8.21895 11.5858 9L9 11.5858L3.70711 6.29289C3.31658 5.90237 2.68342 5.90237 2.29289 6.29289C1.90237 6.68342 1.90237 7.31658 2.29289 7.70711L7.58579 13C8.36683 13.781 9.63316 13.7811 10.4142 13L13 10.4142L19.2929 16.7071C19.6834 17.0976 20.3166 17.0976 20.7071 16.7071Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 17C15 17.5523 15.4477 18 16 18H21C21.5523 18 22 17.5523 22 17V12C22 11.4477 21.5523 11 21 11C20.4477 11 20 11.4477 20 12V16H16C15.4477 16 15 16.4477 15 17Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.5",
    y1: "17",
    x2: "11.5",
    y2: "6",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "18.5",
    y1: "18",
    x2: "18.5",
    y2: "11",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const TrendingUp = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L14.4142 15C13.6332 15.7811 12.3668 15.781 11.5858 15L9 12.4142L3.70711 17.7071C3.31658 18.0976 2.68342 18.0976 2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929L7.58579 11C8.36683 10.219 9.63316 10.2189 10.4142 11L13 13.5858L19.2929 7.29289C19.6834 6.90237 20.3166 6.90237 20.7071 7.29289Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 7C15 6.44772 15.4477 6 16 6H21C21.5523 6 22 6.44772 22 7V12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12V8H16C15.4477 8 15 7.55228 15 7Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.5",
    y1: "7",
    x2: "11.5",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "18.5",
    y1: "6",
    x2: "18.5",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Trophy = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 20H16C16.5523 20 17 20.4477 17 21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20H11V15H13V20Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 6H3V8C3 9.10457 3.89543 10 5 10V6ZM3 4C1.89543 4 1 4.89543 1 6V8C1 10.2091 2.79086 12 5 12H7V4H3Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 6H21V8C21 9.10457 20.1046 10 19 10V6ZM21 4C22.1046 4 23 4.89543 23 6V8C23 10.2091 21.2091 12 19 12H17V4H21Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V10C19 13.866 15.866 17 12 17V17C8.13401 17 5 13.866 5 10V4Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "4",
    y1: "4",
    x2: "4",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "20",
    y1: "4",
    x2: "20",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Truck = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 6H17.1459C18.2822 6 19.321 6.64201 19.8292 7.65836L21.6833 11.3666C21.8916 11.7831 22 12.2425 22 12.7082V15C22 16.6569 20.6569 18 19 18H14V6ZM16 8H17.1459C17.5247 8 17.8709 8.214 18.0403 8.55279L19.2639 11H16V8Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 7C2 5.34315 3.34315 4 5 4H13C14.6569 4 16 5.34315 16 7V18H5C3.34315 18 2 16.6569 2 15V7Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "2",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "2",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "18",
    y1: "6",
    x2: "18",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "9",
    y1: "4",
    x2: "9",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "7",
    y1: "16",
    x2: "7",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "18",
    y1: "16",
    x2: "18",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const TV = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "15",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 20C7 19.4477 7.44772 19 8 19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Twitch = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3 5C3 3.34315 4.34315 2 6 2H18C19.6569 2 21 3.34315 21 5V12.8488C21 13.5899 20.7257 14.3048 20.2299 14.8557L17.3938 18.0069C16.8249 18.639 16.0144 19 15.1639 19H12.3837C12.1367 19 11.8984 19.0914 11.7148 19.2567L8.66897 21.9979C8.02544 22.5771 7 22.1204 7 21.2546V19H6C4.34315 19 3 17.6569 3 16V5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 7C10.5523 7 11 7.44772 11 8V12C11 12.5523 10.5523 13 10 13C9.44772 13 9 12.5523 9 12V8C9 7.44772 9.44772 7 10 7Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 7C15.5523 7 16 7.44772 16 8V12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12V8C14 7.44772 14.4477 7 15 7Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "23.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "10",
    y1: "7",
    x2: "10",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "15",
    y1: "7",
    x2: "15",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Twitter = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M20.1066 8.63423C20.0826 8.41077 20.0546 8.23168 20.0316 8.10405L21.9161 5.27735C22.0345 5.09962 22.027 4.86625 21.8974 4.6965C21.7677 4.52675 21.5446 4.45811 21.3419 4.52566L18.7212 5.39922C18.5827 5.19265 18.3773 4.92019 18.1036 4.64645C17.5491 4.09195 16.6794 3.5 15.5 3.5C14.2775 3.5 13.3727 3.84218 12.7266 4.40395C12.0872 4.95995 11.75 5.68869 11.5775 6.37873C11.4052 7.06789 11.3898 7.74611 11.4147 8.24372C11.422 8.38883 11.4327 8.52017 11.4444 8.63384C10.1893 8.90075 8.87591 8.49188 7.58934 7.72835C6.17064 6.88641 4.87015 5.66301 3.85358 4.64645C3.71259 4.50546 3.50131 4.46171 3.31593 4.53513C3.13054 4.60855 3.0065 4.78509 3.00027 4.98438C2.87287 9.0612 3.71338 13.9958 7.51119 16.498C5.9138 17.3622 4.34766 17.7652 2.43801 18.0039C2.21938 18.0312 2.04441 18.1984 2.00721 18.4156C1.97001 18.6328 2.07935 18.8487 2.27642 18.9472C7.43512 21.5266 14.1199 21.3401 17.9 16.3C19.467 14.2107 19.9921 12.1159 20.1233 10.5415C20.1888 9.7552 20.1563 9.09808 20.1066 8.63423Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "3.5",
    x2: "12",
    y2: "20.5815",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Umbrella = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 12C12.5523 12 13 12.4477 13 13V19C13 20.6569 11.6569 22 10 22C8.34315 22 7 20.6569 7 19V18C7 17.4477 7.44772 17 8 17C8.55228 17 9 17.4477 9 18V19C9 19.5523 9.44772 20 10 20C10.5523 20 11 19.5523 11 19V13C11 12.4477 11.4477 12 12 12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C12.5523 1 13 1.44772 13 2V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2C11 1.44772 11.4477 1 12 1Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 3C6.81417 3 2.55031 6.94741 2.04924 12.0014C1.99475 12.551 2.44772 13 3 13H21C21.5523 13 22.0053 12.551 21.9508 12.0014C21.4497 6.94741 17.1858 3 12 3Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10",
    y1: "12",
    x2: "10",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Underline = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 21C5 20.4477 5.44772 20 6 20H18C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 2C6.55228 2 7 2.44772 7 3V11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11V3C17 2.44772 17.4477 2 18 2C18.5523 2 19 2.44772 19 3V11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11V3C5 2.44772 5.44772 2 6 2Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Unlock = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.9055 6.24926C14.5724 4.95512 13.3964 4 11.9999 4C10.3431 4 8.99992 5.34315 8.99992 7V8H17C18.6569 8 20 9.34315 20 11V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V11C4 9.34317 5.3431 8.00004 6.99992 8V7C6.99992 4.23858 9.2385 2 11.9999 2C14.3311 2 16.2873 3.59442 16.8423 5.75074C16.98 6.28559 16.658 6.83078 16.1232 6.96844C15.5883 7.1061 15.0431 6.78411 14.9055 6.24926Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15.7324Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "18",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Update = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M4 12C4 7.58172 7.58172 4 12 4C14.5171 4 16.7288 5.1635 18.1822 6.99321L16.5029 6.98829C15.9506 6.98667 15.5016 7.43307 15.5 7.98535C15.4984 8.53763 15.9448 8.98666 16.4971 8.98828L19.9399 8.99836C19.9783 9.00071 20.017 9.00084 20.0557 8.9987L20.4971 9C20.7628 9.00077 21.0179 8.89576 21.2061 8.70814C21.3942 8.52052 21.5 8.26572 21.5 8L21.5 4C21.5 3.44771 21.0523 3 20.5 3C19.9477 3 19.5 3.44772 19.5 4L19.5 5.44947C17.6875 3.34038 15.023 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C15.9359 22 19.2641 19.7278 20.8955 16.445C21.1413 15.9505 20.9396 15.3503 20.445 15.1045C19.9505 14.8587 19.3503 15.0604 19.1045 15.555C17.7905 18.1991 15.1315 20 12 20C7.58172 20 4 16.4183 4 12Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 7C12.5523 7 13 7.44772 13 8V11.5858L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L11.5858 13C11.2107 12.6249 11 12.1162 11 11.5858V8C11 7.44772 11.4477 7 12 7Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.75",
    y1: "2",
    x2: "11.75",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "13",
    y1: "7",
    x2: "13",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Upload = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17.2071 9.2905C17.5976 9.68103 17.5976 10.3142 17.2071 10.7047C16.8166 11.0952 16.1834 11.0952 15.7929 10.7047L13.0019 7.91377V15C13.0019 15.5523 12.5542 16 12.0019 16C11.4496 16 11.0019 15.5523 11.0019 15V7.91368L8.20894 10.7067C7.81841 11.0972 7.18525 11.0972 6.79472 10.7067C6.4042 10.3161 6.4042 9.68298 6.79472 9.29245L11.2948 4.79241C11.4823 4.60487 11.7367 4.49951 12.0019 4.49951C12.2671 4.49951 12.5214 4.60487 12.709 4.79241L17.2071 9.2905Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 14C4.55228 14 5 14.4477 5 15V17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V17C21 18.6569 19.6569 20 18 20H6C4.34315 20 3 18.6569 3 17V15C3 14.4477 3.44772 14 4 14Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12.0009",
    y1: "4.49951",
    x2: "12.0009",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "14",
    x2: "12",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Utensils = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M20 4C20 3.44772 19.5523 3 19 3C16.2386 3 14 5.23858 14 8V14C14 14.5523 14.4477 15 15 15H18L18 20C18 20.5523 18.4477 21 19 21C19.5523 21 20 20.5523 20 20L20 4Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 4C6 3.44772 5.55228 3 5 3C4.44772 3 4 3.44772 4 4V9C4 10.8638 5.27477 12.4299 7 12.874V20C7 20.5523 7.44772 21 8 21C8.55228 21 9 20.5523 9 20V12.874C10.7252 12.4299 12 10.8638 12 9V4C12 3.44772 11.5523 3 11 3C10.4477 3 10 3.44772 10 4V8H9V4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4V8H6V4Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "17",
    y1: "3",
    x2: "17",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "8",
    y1: "3",
    x2: "8",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const VideoOff = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M21.0564 16.8121C21.6083 16.4703 22 15.8644 22 15.1136V8.8864C22 7.25965 20.1613 6.31341 18.8375 7.25893L15 10V10.7557L21.0564 16.8121Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.41586 5H5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H14C15.6569 19 17 17.6569 17 16V15.5841L6.41586 5Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 12.7557V8C17 6.34315 15.6569 5 14 5H9.24429L17 12.7557Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "18.5",
    y1: "6.88287",
    x2: "18.5",
    y2: "16.8121",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "9.5",
    y1: "5",
    x2: "9.5",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "9.5",
    y1: "5",
    x2: "9.5",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const VideoRecorder = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18.8375 7.25891L15 10V14L18.8375 16.7411C20.1613 17.6866 22 16.7404 22 15.1136V8.88638C22 7.25963 20.1613 6.31339 18.8375 7.25891Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "5",
    width: "15",
    height: "14",
    rx: "3",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "18.5",
    y1: "5",
    x2: "18.5",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "9.5",
    y1: "5",
    x2: "9.5",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const VolumeHigh = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M15.2361 15.8042C15.4068 16.3295 15.9782 16.6251 16.4591 16.3535C17.0797 16.003 17.6216 15.5218 18.0451 14.9389C18.6658 14.0847 19 13.0559 19 12C19 10.9441 18.6658 9.91529 18.0451 9.06106C17.6216 8.47819 17.0797 7.99701 16.4591 7.64646C15.9782 7.37483 15.4068 7.6705 15.2361 8.19576C15.0654 8.72101 15.3691 9.27406 15.8096 9.6072C16.0439 9.78437 16.2523 9.99606 16.4271 10.2366C16.7995 10.7492 17 11.3664 17 12C17 12.6335 16.7995 13.2508 16.4271 13.7633C16.2523 14.0039 16.0439 14.2156 15.8096 14.3928C15.3691 14.7259 15.0654 15.279 15.2361 15.8042Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.1631 18.6574C17.3337 19.1827 17.9015 19.4757 18.4014 19.2409C19.6178 18.6695 20.6758 17.7982 21.4721 16.7023C22.4651 15.3355 22.9999 13.6894 22.9999 12C22.9999 10.3106 22.4651 8.6645 21.4721 7.29772C20.6758 6.20179 19.6178 5.33054 18.4014 4.75913C17.9015 4.52431 17.3337 4.81735 17.1631 5.34261C16.9924 5.86786 17.2854 6.42489 17.775 6.68033C18.5933 7.10721 19.3063 7.71936 19.854 8.47329C20.5988 9.49838 20.9999 10.7329 20.9999 12C20.9999 13.2671 20.5988 14.5016 19.854 15.5267C19.3063 16.2806 18.5933 16.8928 17.775 17.3197C17.2854 17.5751 16.9924 18.1321 17.1631 18.6574Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 19.5925V4.40754C14 2.68922 11.9762 1.77086 10.683 2.90238L6 7H4C2.34315 7 1 8.34315 1 10V14C1 15.6569 2.34315 17 4 17H6L10.683 21.0976C11.9762 22.2291 14 21.3108 14 19.5925Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "17.094",
    y1: "7.5437",
    x2: "17.094",
    y2: "16.4563",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "20.057",
    y1: "4.67719",
    x2: "20.057",
    y2: "19.3228",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "7.5",
    y1: "0",
    x2: "7.5",
    y2: "24",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const VolumeOff = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.41586 6.99998H7C5.34315 6.99998 4 8.34313 4 9.99998V14C4 15.6568 5.34315 17 7 17H9L13.683 21.0976C14.9762 22.2291 17 21.3108 17 19.5924V15.5841L8.41586 6.99998Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 12.7557V4.40752C17 2.6892 14.9762 1.77084 13.683 2.90236L10.197 5.95265L17 12.7557Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "10.5",
    y1: "2.40363",
    x2: "10.5",
    y2: "21.5963",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "10.5",
    y1: "2.40363",
    x2: "10.5",
    y2: "21.5963",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Volume = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("mask", {
    id: "path-1-inside-1",
    fill: "white"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17.2361 15.8042C17.4067 16.3295 17.9782 16.6251 18.459 16.3535C19.0796 16.003 19.6216 15.5218 20.0451 14.9389C20.6657 14.0847 21 13.0559 21 12C21 10.9441 20.6657 9.91531 20.0451 9.06107C19.6216 8.47821 19.0796 7.99702 18.459 7.64647C17.9782 7.37485 17.4067 7.67052 17.2361 8.19577V8.19577C17.0654 8.72103 17.3691 9.27408 17.8096 9.60721C18.0439 9.78439 18.2523 9.99608 18.4271 10.2366C18.7994 10.7492 19 11.3665 19 12C19 12.6335 18.7994 13.2508 18.4271 13.7634C18.2523 14.0039 18.0439 14.2156 17.8096 14.3928C17.3691 14.7259 17.0654 15.279 17.2361 15.8042V15.8042Z"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "M17.2361 15.8042C17.4067 16.3295 17.9782 16.6251 18.459 16.3535C19.0796 16.003 19.6216 15.5218 20.0451 14.9389C20.6657 14.0847 21 13.0559 21 12C21 10.9441 20.6657 9.91531 20.0451 9.06107C19.6216 8.47821 19.0796 7.99702 18.459 7.64647C17.9782 7.37485 17.4067 7.67052 17.2361 8.19577V8.19577C17.0654 8.72103 17.3691 9.27408 17.8096 9.60721C18.0439 9.78439 18.2523 9.99608 18.4271 10.2366C18.7994 10.7492 19 11.3665 19 12C19 12.6335 18.7994 13.2508 18.4271 13.7634C18.2523 14.0039 18.0439 14.2156 17.8096 14.3928C17.3691 14.7259 17.0654 15.279 17.2361 15.8042V15.8042Z",
    stroke: "url(#paint0_linear)",
    "stroke-width": "4",
    mask: "url(#path-1-inside-1)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 19.5925V4.40754C16 2.68922 13.9762 1.77086 12.683 2.90238L8 7H6C4.34315 7 3 8.34315 3 10V14C3 15.6569 4.34315 17 6 17H8L12.683 21.0976C13.9762 22.2291 16 21.3108 16 19.5925Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "16",
    y1: "7",
    x2: "16",
    y2: "17",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "9.5",
    y1: "0",
    x2: "9.5",
    y2: "24",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Wallet = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M22 19V9C22 7.34315 20.6569 6 19 6H5V4H2V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 14C16 12.8954 16.8954 12 18 12H22V16H18C16.8954 16 16 15.1046 16 14V14Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6H19C19.3506 6 19.6872 6.06015 20 6.17071V3C20 2.44772 19.5523 2 19 2H4Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "19",
    y1: "12",
    x2: "19",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "11",
    y1: "2",
    x2: "11",
    y2: "6.17071",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Warning = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9.394 4.574c1.15-2.02 4.062-2.02 5.213 0l6.805 11.94c1.14 2-.305 4.486-2.607 4.486H5.195c-2.302 0-3.746-2.485-2.606-4.485L9.394 4.574z",
    fill: "url(#prefix__paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 14a1 1 0 001-1V8a1 1 0 10-2 0v5a1 1 0 001 1z",
    fill: "url(#prefix__paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 12,
    cy: 17,
    r: 1,
    fill: "url(#prefix__paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: 12,
    y1: 0,
    x2: 12,
    y2: 21,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: 12,
    y1: 14,
    x2: 12,
    y2: 7,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "prefix__paint2_linear",
    x1: 12,
    y1: 16,
    x2: 12,
    y2: 18,
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    stopColor: "#5C5ACA"
  }))));
});

const Watch = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.99184 4.37141C8.28824 2.9882 9.51063 2 10.9252 2H13.0748C14.4894 2 15.7118 2.9882 16.0082 4.37141L17 9H7L7.99184 4.37141Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 15H17L16.0082 19.6286C15.7118 21.0118 14.4894 22 13.0748 22H10.9253C9.51068 22 8.2883 21.0118 7.99189 19.6286L7 15Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "17",
    y: "10",
    width: "3",
    height: "4",
    rx: "1.5",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "7",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 8C12.5523 8 13 8.44772 13 9V11.5858L14.2071 12.7929C14.5976 13.1834 14.5976 13.8166 14.2071 14.2071C13.8166 14.5976 13.1834 14.5976 12.7929 14.2071L11.4393 12.8536C11.158 12.5722 11 12.1907 11 11.7929V9C11 8.44772 11.4477 8 12 8Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "18.5",
    y1: "10",
    x2: "18.5",
    y2: "14",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "12.75",
    y1: "8",
    x2: "12.75",
    y2: "14.5",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const WifiOff = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "18",
    r: "2",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5997 12.1838C13.0858 12.0636 12.5503 12 12 12C10.0641 12 8.31009 12.7872 7.04395 14.0566C6.65392 14.4476 6.65472 15.0807 7.04574 15.4708C7.43676 15.8608 8.06993 15.86 8.45996 15.469C9.36624 14.5604 10.6167 14 12 14C13.3833 14 14.6338 14.5604 15.54 15.469C15.9188 15.8487 16.5267 15.8604 16.9196 15.5038L13.5997 12.1838Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.66447 8.24861C7.56653 8.7024 5.69105 9.75464 4.22721 11.2165C3.83642 11.6067 3.83599 12.2399 4.22625 12.6307C4.61651 13.0215 5.24967 13.0219 5.64046 12.6317C7.145 11.1292 9.17593 10.1576 11.4334 10.0175L9.66447 8.24861ZM14.6363 10.392C16.0592 10.8272 17.3322 11.6056 18.3596 12.6317C18.7504 13.0219 19.3836 13.0215 19.7738 12.6307C20.1641 12.2399 20.1637 11.6067 19.7729 11.2165C17.8379 9.28413 15.1836 8.06747 12.247 8.00272L14.6363 10.392Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.46887 5.05301C4.55047 5.81449 2.82645 6.96012 1.39244 8.39441C1.00195 8.78497 1.00201 9.41813 1.39257 9.80862C1.78313 10.1991 2.4163 10.199 2.80678 9.80849C4.2533 8.36169 6.03797 7.25476 8.03226 6.6164L6.46887 5.05301ZM10.3482 6.10389C10.8891 6.03533 11.4404 6 12 6C15.5906 6 18.8396 7.45434 21.1933 9.80849C21.5838 10.199 22.217 10.1991 22.6075 9.80862C22.9981 9.41813 22.9981 8.78497 22.6077 8.39441C19.8942 5.68044 16.1424 4 12 4C10.8398 4 9.71026 4.13183 8.62556 4.38126L10.3482 6.10389Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11.8358",
    y1: "12",
    x2: "11.8358",
    y2: "15.7628",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "8.00272",
    x2: "12",
    y2: "12.9241",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "10.1014",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Wifi = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "18",
    r: "2",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 14C10.6167 14 9.36624 14.5604 8.45996 15.469C8.06993 15.86 7.43676 15.8608 7.04574 15.4708C6.65472 15.0807 6.65392 14.4476 7.04395 14.0566C8.31009 12.7872 10.0641 12 12 12C13.9359 12 15.6899 12.7872 16.9561 14.0566C17.3461 14.4476 17.3453 15.0807 16.9543 15.4708C16.5632 15.8608 15.9301 15.86 15.54 15.469C14.6338 14.5604 13.3833 14 12 14Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 10C9.5167 10 7.26988 11.0045 5.64046 12.6317C5.24967 13.0219 4.61651 13.0215 4.22625 12.6307C3.83599 12.2399 3.83642 11.6067 4.22721 11.2165C6.21631 9.2301 8.96548 8 12 8C15.0346 8 17.7838 9.2301 19.7729 11.2165C20.1637 11.6067 20.1641 12.2399 19.7738 12.6307C19.3836 13.0215 18.7504 13.0219 18.3596 12.6317C16.7302 11.0045 14.4834 10 12 10Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 6C8.40947 6 5.16048 7.45434 2.80678 9.80849C2.4163 10.199 1.78313 10.1991 1.39257 9.80862C1.00201 9.41813 1.00195 8.78497 1.39244 8.39441C4.10589 5.68044 7.85767 4 12 4C16.1424 4 19.8942 5.68044 22.6077 8.39441C22.9981 8.78497 22.9981 9.41813 22.6075 9.80862C22.217 10.1991 21.5838 10.199 21.1933 9.80849C18.8396 7.45434 15.5906 6 12 6Z",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "15.7628",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12.9241",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "10.1014",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Wind = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 5C8.63112 5 8.30758 5.19922 8.13317 5.50073C7.85663 5.97879 7.2449 6.14215 6.76684 5.86561C6.28878 5.58906 6.12542 4.97733 6.40196 4.49927C6.91916 3.60518 7.88832 3 9 3C10.6569 3 12 4.34315 12 6C12 7.65685 10.6569 9 9 9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H9C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 19C13.6311 19 13.3076 18.8008 13.1332 18.4993C12.8566 18.0212 12.2449 17.8579 11.7668 18.1344C11.2888 18.4109 11.1254 19.0227 11.402 19.5007C11.9192 20.3948 12.8883 21 14 21C15.6569 21 17 19.6569 17 18C17 16.3431 15.6569 15 14 15H4C3.44772 15 3 15.4477 3 16C3 16.5523 3.44772 17 4 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 7C16.1307 7 15.3886 7.5551 15.1135 8.33325C14.9295 8.85396 14.3582 9.12689 13.8375 8.94284C13.3167 8.75879 13.0438 8.18747 13.2279 7.66675C13.7765 6.11451 15.2568 5 17 5C19.2091 5 21 6.79086 21 9C21 11.2091 19.2091 13 17 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17C18.1046 11 19 10.1046 19 9C19 7.89543 18.1046 7 17 7Z",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "7.5",
    y1: "3",
    x2: "7.5",
    y2: "9",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "10",
    y1: "21",
    x2: "10",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const Window = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "3",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V8H2V5Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "5",
    cy: "5",
    r: "1",
    fill: "url(#paint2_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "8",
    cy: "5",
    r: "1",
    fill: "url(#paint3_linear)"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "11",
    cy: "5",
    r: "1",
    fill: "url(#paint4_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint2_linear",
    x1: "5",
    y1: "4",
    x2: "5",
    y2: "6",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint3_linear",
    x1: "8",
    y1: "4",
    x2: "8",
    y2: "6",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint4_linear",
    x1: "11",
    y1: "4",
    x2: "11",
    y2: "6",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const YouTube = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2.62305 8.2617C2.84605 6.92367 3.93069 5.89659 5.27887 5.74679L5.80914 5.68787C9.92372 5.2307 14.0763 5.2307 18.1909 5.68787L18.7211 5.74679C20.0693 5.89659 21.1539 6.92367 21.3769 8.2617V8.2617C21.7895 10.7368 21.7895 13.2632 21.3769 15.7383V15.7383C21.1539 17.0763 20.0693 18.1034 18.7211 18.2532L18.1909 18.3121C14.0763 18.7693 9.92372 18.7693 5.80914 18.3121L5.27887 18.2532C3.93069 18.1034 2.84605 17.0763 2.62305 15.7383V15.7383C2.21053 13.2632 2.21053 10.7368 2.62305 8.2617V8.2617Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.7519 11.1679C15.3457 11.5638 15.3457 12.4362 14.7519 12.8321L11.5547 14.9635C10.8901 15.4066 10 14.9302 10 14.1315V9.86852C10 9.06982 10.8901 8.59343 11.5547 9.03647L14.7519 11.1679Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "13",
    y1: "8",
    x2: "13",
    y2: "16",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  }))));
});

const Zap = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M15.0034 4.69724C15.451 2.17765 12.2728 0.692639 10.6273 2.65246L3.58895 11.0353C2.22322 12.6619 3.37965 15.1429 5.50357 15.1429H9.7351L8.99616 19.3027C8.54859 21.8223 11.7267 23.3073 13.3722 21.3475L20.4107 12.9647C21.7764 11.3381 20.62 8.85714 18.496 8.85714H14.2645L15.0034 4.69724Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11.9998",
    y1: "1.75031",
    x2: "11.9998",
    y2: "22.2497",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ZoomIn = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 8C12 7.44772 11.5523 7 11 7C10.4477 7 10 7.44772 10 8V10H8C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12H10V14C10 14.5523 10.4477 15 11 15C11.5523 15 12 14.5523 12 14V12H14C14.5523 12 15 11.5523 15 11C15 10.4477 14.5523 10 14 10H12V8Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L18.0319 16.6177ZM18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11",
    y1: "7",
    x2: "11",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11.5",
    y1: "2",
    x2: "11.5",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

const ZoomOut = react.exports.memo((props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 11C7 10.4477 7.44772 10 8 10H14C14.5523 10 15 10.4477 15 11C15 11.5523 14.5523 12 14 12H8C7.44772 12 7 11.5523 7 11Z",
    fill: "url(#paint0_linear)"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L18.0319 16.6177ZM18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z",
    fill: "url(#paint1_linear)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "11",
    y1: "10",
    x2: "11",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#6073D8"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#5C5ACA"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: "11.5",
    y1: "2",
    x2: "11.5",
    y2: "21",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#D1DAEE"
  }))));
});

var DualLightIcons = /* @__PURE__ */ ((DualLightIcons2) => {
  DualLightIcons2["Activity"] = "dual-light/Activity";
  DualLightIcons2["AddCircle"] = "dual-light/AddCircle";
  DualLightIcons2["Add"] = "dual-light/Add";
  DualLightIcons2["Alarm"] = "dual-light/Alarm";
  DualLightIcons2["AlertCircle"] = "dual-light/AlertCircle";
  DualLightIcons2["Anchor"] = "dual-light/Anchor";
  DualLightIcons2["Android"] = "dual-light/Android";
  DualLightIcons2["Apple"] = "dual-light/Apple";
  DualLightIcons2["Archive"] = "dual-light/Archive";
  DualLightIcons2["ArrowLeft"] = "dual-light/ArrowLeft";
  DualLightIcons2["ArrowDown"] = "dual-light/ArrowDown";
  DualLightIcons2["ArrowRight"] = "dual-light/ArrowRight";
  DualLightIcons2["ArrowUpDown"] = "dual-light/ArrowUpDown";
  DualLightIcons2["ArrowUp"] = "dual-light/ArrowUp";
  DualLightIcons2["AtSign"] = "dual-light/AtSign";
  DualLightIcons2["Attachment"] = "dual-light/Attachment";
  DualLightIcons2["Badge"] = "dual-light/Badge";
  DualLightIcons2["Bank"] = "dual-light/Bank";
  DualLightIcons2["BarChart"] = "dual-light/BarChart";
  DualLightIcons2["Basket"] = "dual-light/Basket";
  DualLightIcons2["BatteryCharging"] = "dual-light/BatteryCharging";
  DualLightIcons2["BatteryFull"] = "dual-light/BatteryFull";
  DualLightIcons2["BatteryHalf"] = "dual-light/BatteryHalf";
  DualLightIcons2["BatteryLow"] = "dual-light/BatteryLow";
  DualLightIcons2["Battery"] = "dual-light/Battery";
  DualLightIcons2["BluetoothOff"] = "dual-light/BluetoothOff";
  DualLightIcons2["Bluetooth"] = "dual-light/Bluetooth";
  DualLightIcons2["Bold"] = "dual-light/Bold";
  DualLightIcons2["Book"] = "dual-light/Book";
  DualLightIcons2["Bookmark"] = "dual-light/Bookmark";
  DualLightIcons2["Box"] = "dual-light/Box";
  DualLightIcons2["Briefcase"] = "dual-light/Briefcase";
  DualLightIcons2["Brush"] = "dual-light/Brush";
  DualLightIcons2["Building"] = "dual-light/Building";
  DualLightIcons2["Bulb"] = "dual-light/Bulb";
  DualLightIcons2["Calendar"] = "dual-light/Calendar";
  DualLightIcons2["Camera"] = "dual-light/Camera";
  DualLightIcons2["Cart"] = "dual-light/Cart";
  DualLightIcons2["Cast"] = "dual-light/Cast";
  DualLightIcons2["Category"] = "dual-light/Category";
  DualLightIcons2["CenterAlign"] = "dual-light/CenterAlign";
  DualLightIcons2["CheckAll"] = "dual-light/CheckAll";
  DualLightIcons2["CheckCircle"] = "dual-light/CheckCircle";
  DualLightIcons2["Check"] = "dual-light/Check";
  DualLightIcons2["ChevronLeft"] = "dual-light/ChevronLeft";
  DualLightIcons2["ChevronDoubleLeft"] = "dual-light/ChevronDoubleLeft";
  DualLightIcons2["ChevronDoubleRight"] = "dual-light/ChevronDoubleRight";
  DualLightIcons2["ChevronDoubleDown"] = "dual-light/ChevronDoubleDown";
  DualLightIcons2["ChevronDoubleUp"] = "dual-light/ChevronDoubleUp";
  DualLightIcons2["ChevronDown"] = "dual-light/ChevronDown";
  DualLightIcons2["ChevronRight"] = "dual-light/ChevronRight";
  DualLightIcons2["ChevronUp"] = "dual-light/ChevronUp";
  DualLightIcons2["Chip"] = "dual-light/Chip";
  DualLightIcons2["Chrome"] = "dual-light/Chrome";
  DualLightIcons2["Clipboard"] = "dual-light/Clipboard";
  DualLightIcons2["Clock"] = "dual-light/Clock";
  DualLightIcons2["CloseCircle"] = "dual-light/CloseCircle";
  DualLightIcons2["Close"] = "dual-light/Close";
  DualLightIcons2["CloudDownload"] = "dual-light/CloudDownload";
  DualLightIcons2["CloudOff"] = "dual-light/CloudOff";
  DualLightIcons2["CloudUpload"] = "dual-light/CloudUpload";
  DualLightIcons2["Cloud"] = "dual-light/Cloud";
  DualLightIcons2["Code"] = "dual-light/Code";
  DualLightIcons2["Coffee"] = "dual-light/Coffee";
  DualLightIcons2["Collapse"] = "dual-light/Collapse";
  DualLightIcons2["ColorPalette"] = "dual-light/ColorPalette";
  DualLightIcons2["Command"] = "dual-light/Command";
  DualLightIcons2["Compass"] = "dual-light/Compass";
  DualLightIcons2["Crop"] = "dual-light/Crop";
  DualLightIcons2["Crosshairs"] = "dual-light/Crosshairs";
  DualLightIcons2["Cursor"] = "dual-light/Cursor";
  DualLightIcons2["Dashboard"] = "dual-light/Dashboard";
  DualLightIcons2["Database"] = "dual-light/Database";
  DualLightIcons2["Design"] = "dual-light/Design";
  DualLightIcons2["Diamond"] = "dual-light/Diamond";
  DualLightIcons2["Document"] = "dual-light/Document";
  DualLightIcons2["Dollar"] = "dual-light/Dollar";
  DualLightIcons2["DonutChart"] = "dual-light/DonutChart";
  DualLightIcons2["Download"] = "dual-light/Download";
  DualLightIcons2["Drop"] = "dual-light/Drop";
  DualLightIcons2["Edit"] = "dual-light/Edit";
  DualLightIcons2["EventAdd"] = "dual-light/EventAdd";
  DualLightIcons2["EventScheduled"] = "dual-light/EventScheduled";
  DualLightIcons2["Expand"] = "dual-light/Expand";
  DualLightIcons2["Facebook"] = "dual-light/Facebook";
  DualLightIcons2["FastLeft"] = "dual-light/FastLeft";
  DualLightIcons2["FastRight"] = "dual-light/FastRight";
  DualLightIcons2["Figma"] = "dual-light/Figma";
  DualLightIcons2["FileAdd"] = "dual-light/FileAdd";
  DualLightIcons2["File"] = "dual-light/File";
  DualLightIcons2["Files"] = "dual-light/Files";
  DualLightIcons2["Film"] = "dual-light/Film";
  DualLightIcons2["Filter"] = "dual-light/Filter";
  DualLightIcons2["Fire"] = "dual-light/Fire";
  DualLightIcons2["Flag"] = "dual-light/Flag";
  DualLightIcons2["Flashlight"] = "dual-light/Flashlight";
  DualLightIcons2["Flight"] = "dual-light/Flight";
  DualLightIcons2["FolderAdd"] = "dual-light/FolderAdd";
  DualLightIcons2["Folder"] = "dual-light/Folder";
  DualLightIcons2["Frown"] = "dual-light/Frown";
  DualLightIcons2["Fuel"] = "dual-light/Fuel";
  DualLightIcons2["Gamepad"] = "dual-light/Gamepad";
  DualLightIcons2["Gift"] = "dual-light/Gift";
  DualLightIcons2["Grid"] = "dual-light/Grid";
  DualLightIcons2["Group"] = "dual-light/Group";
  DualLightIcons2["Growth"] = "dual-light/Growth";
  DualLightIcons2["HandCursor"] = "dual-light/HandCursor";
  DualLightIcons2["Headphone"] = "dual-light/Headphone";
  DualLightIcons2["Heart"] = "dual-light/Heart";
  DualLightIcons2["Help"] = "dual-light/Help";
  DualLightIcons2["Hide"] = "dual-light/Hide";
  DualLightIcons2["Home"] = "dual-light/Home";
  DualLightIcons2["Hourglass"] = "dual-light/Hourglass";
  DualLightIcons2["Image"] = "dual-light/Image";
  DualLightIcons2["Inbox"] = "dual-light/Inbox";
  DualLightIcons2["Info"] = "dual-light/Info";
  DualLightIcons2["Instagram"] = "dual-light/Instagram";
  DualLightIcons2["Internet"] = "dual-light/Internet";
  DualLightIcons2["Italics"] = "dual-light/Italics";
  DualLightIcons2["Justify"] = "dual-light/Justify";
  DualLightIcons2["Key"] = "dual-light/Key";
  DualLightIcons2["Laptop"] = "dual-light/Laptop";
  DualLightIcons2["Laugh"] = "dual-light/Laugh";
  DualLightIcons2["Layers"] = "dual-light/Layers";
  DualLightIcons2["Layout"] = "dual-light/Layout";
  DualLightIcons2["Leaderboard"] = "dual-light/Leaderboard";
  DualLightIcons2["LeftAlign"] = "dual-light/LeftAlign";
  DualLightIcons2["LineChart"] = "dual-light/LineChart";
  DualLightIcons2["Link"] = "dual-light/Link";
  DualLightIcons2["LinkedIn"] = "dual-light/LinkedIn";
  DualLightIcons2["List"] = "dual-light/List";
  DualLightIcons2["Live"] = "dual-light/Live";
  DualLightIcons2["Loader"] = "dual-light/Loader";
  DualLightIcons2["Location"] = "dual-light/Location";
  DualLightIcons2["Lock"] = "dual-light/Lock";
  DualLightIcons2["Login"] = "dual-light/Login";
  DualLightIcons2["Logout"] = "dual-light/Logout";
  DualLightIcons2["Mail"] = "dual-light/Mail";
  DualLightIcons2["Map"] = "dual-light/Map";
  DualLightIcons2["Meh"] = "dual-light/Meh";
  DualLightIcons2["Menu"] = "dual-light/Menu";
  DualLightIcons2["Message"] = "dual-light/Message";
  DualLightIcons2["Messages"] = "dual-light/Messages";
  DualLightIcons2["MicOff"] = "dual-light/MicOff";
  DualLightIcons2["Mic"] = "dual-light/Mic";
  DualLightIcons2["Mobile"] = "dual-light/Mobile";
  DualLightIcons2["Moon"] = "dual-light/Moon";
  DualLightIcons2["MoreHorizontal"] = "dual-light/MoreHorizontal";
  DualLightIcons2["MoreVertical"] = "dual-light/MoreVertical";
  DualLightIcons2["Mouse"] = "dual-light/Mouse";
  DualLightIcons2["Music"] = "dual-light/Music";
  DualLightIcons2["New"] = "dual-light/New";
  DualLightIcons2["Next"] = "dual-light/Next";
  DualLightIcons2["Note"] = "dual-light/Note";
  DualLightIcons2["Notes"] = "dual-light/Notes";
  DualLightIcons2["NotificationOff"] = "dual-light/NotificationOff";
  DualLightIcons2["Notification"] = "dual-light/Notification";
  DualLightIcons2["Open"] = "dual-light/Open";
  DualLightIcons2["PaintRoller"] = "dual-light/PaintRoller";
  DualLightIcons2["Pause"] = "dual-light/Pause";
  DualLightIcons2["Payment"] = "dual-light/Payment";
  DualLightIcons2["Pen"] = "dual-light/Pen";
  DualLightIcons2["Percent"] = "dual-light/Percent";
  DualLightIcons2["Person"] = "dual-light/Person";
  DualLightIcons2["PhoneCallIncoming"] = "dual-light/PhoneCallIncoming";
  DualLightIcons2["PhoneCallOutgoing"] = "dual-light/PhoneCallOutgoing";
  DualLightIcons2["PhoneCallRejected"] = "dual-light/PhoneCallRejected";
  DualLightIcons2["Phone"] = "dual-light/Phone";
  DualLightIcons2["Photos"] = "dual-light/Photos";
  DualLightIcons2["PieChart"] = "dual-light/PieChart";
  DualLightIcons2["Pin"] = "dual-light/Pin";
  DualLightIcons2["Pinterest"] = "dual-light/Pinterest";
  DualLightIcons2["PlayCircle"] = "dual-light/PlayCircle";
  DualLightIcons2["Play"] = "dual-light/Play";
  DualLightIcons2["Playlist"] = "dual-light/Playlist";
  DualLightIcons2["Power"] = "dual-light/Power";
  DualLightIcons2["Presentation"] = "dual-light/Presentation";
  DualLightIcons2["Previous"] = "dual-light/Previous";
  DualLightIcons2["Printer"] = "dual-light/Printer";
  DualLightIcons2["ProfileCircle"] = "dual-light/ProfileCircle";
  DualLightIcons2["Promotion"] = "dual-light/Promotion";
  DualLightIcons2["Rain"] = "dual-light/Rain";
  DualLightIcons2["Receipt"] = "dual-light/Receipt";
  DualLightIcons2["Reload"] = "dual-light/Reload";
  DualLightIcons2["Remove"] = "dual-light/Remove";
  DualLightIcons2["Repeat"] = "dual-light/Repeat";
  DualLightIcons2["RightAlign"] = "dual-light/RightAlign";
  DualLightIcons2["Rocket"] = "dual-light/Rocket";
  DualLightIcons2["Ruler"] = "dual-light/Ruler";
  DualLightIcons2["Sad"] = "dual-light/Sad";
  DualLightIcons2["Save"] = "dual-light/Save";
  DualLightIcons2["Scan"] = "dual-light/Scan";
  DualLightIcons2["Schedule"] = "dual-light/Schedule";
  DualLightIcons2["Scissors"] = "dual-light/Scissors";
  DualLightIcons2["Search"] = "dual-light/Search";
  DualLightIcons2["Send"] = "dual-light/Send";
  DualLightIcons2["Settings"] = "dual-light/Settings";
  DualLightIcons2["Share"] = "dual-light/Share";
  DualLightIcons2["ShieldCheck"] = "dual-light/ShieldCheck";
  DualLightIcons2["Shield"] = "dual-light/Shield";
  DualLightIcons2["Ship"] = "dual-light/Ship";
  DualLightIcons2["ShoppingBag"] = "dual-light/ShoppingBag";
  DualLightIcons2["Show"] = "dual-light/Show";
  DualLightIcons2["Shuffle"] = "dual-light/Shuffle";
  DualLightIcons2["Size"] = "dual-light/Size";
  DualLightIcons2["Slack"] = "dual-light/Slack";
  DualLightIcons2["Smile"] = "dual-light/Smile";
  DualLightIcons2["Snapchat"] = "dual-light/Snapchat";
  DualLightIcons2["Snowflake"] = "dual-light/Snowflake";
  DualLightIcons2["Sort"] = "dual-light/Sort";
  DualLightIcons2["Spotify"] = "dual-light/Spotify";
  DualLightIcons2["Star"] = "dual-light/Star";
  DualLightIcons2["Stop"] = "dual-light/Stop";
  DualLightIcons2["Store"] = "dual-light/Store";
  DualLightIcons2["Sun"] = "dual-light/Sun";
  DualLightIcons2["Sync"] = "dual-light/Sync";
  DualLightIcons2["Tablet"] = "dual-light/Tablet";
  DualLightIcons2["Tag"] = "dual-light/Tag";
  DualLightIcons2["Target"] = "dual-light/Target";
  DualLightIcons2["Thermometer"] = "dual-light/Thermometer";
  DualLightIcons2["ThumbsDown"] = "dual-light/ThumbsDown";
  DualLightIcons2["ThumbsUp"] = "dual-light/ThumbsUp";
  DualLightIcons2["Ticket"] = "dual-light/Ticket";
  DualLightIcons2["Timer"] = "dual-light/Timer";
  DualLightIcons2["ToggleOff"] = "dual-light/ToggleOff";
  DualLightIcons2["ToggleOn"] = "dual-light/ToggleOn";
  DualLightIcons2["Tool"] = "dual-light/Tool";
  DualLightIcons2["Train"] = "dual-light/Train";
  DualLightIcons2["Trash"] = "dual-light/Trash";
  DualLightIcons2["TrendingDown"] = "dual-light/TrendingDown";
  DualLightIcons2["TrendingUp"] = "dual-light/TrendingUp";
  DualLightIcons2["Trophy"] = "dual-light/Trophy";
  DualLightIcons2["Truck"] = "dual-light/Truck";
  DualLightIcons2["TV"] = "dual-light/TV";
  DualLightIcons2["Twitch"] = "dual-light/Twitch";
  DualLightIcons2["Twitter"] = "dual-light/Twitter";
  DualLightIcons2["Umbrella"] = "dual-light/Umbrella";
  DualLightIcons2["Underline"] = "dual-light/Underline";
  DualLightIcons2["Unlock"] = "dual-light/Unlock";
  DualLightIcons2["Update"] = "dual-light/Update";
  DualLightIcons2["Upload"] = "dual-light/Upload";
  DualLightIcons2["Utensils"] = "dual-light/Utensils";
  DualLightIcons2["VideoOff"] = "dual-light/VideoOff";
  DualLightIcons2["VideoRecorder"] = "dual-light/VideoRecorder";
  DualLightIcons2["VolumeHigh"] = "dual-light/VolumeHigh";
  DualLightIcons2["VolumeOff"] = "dual-light/VolumeOff";
  DualLightIcons2["Volume"] = "dual-light/Volume";
  DualLightIcons2["Wallet"] = "dual-light/Wallet";
  DualLightIcons2["Warning"] = "dual-light/Warning";
  DualLightIcons2["Watch"] = "dual-light/Watch";
  DualLightIcons2["WifiOff"] = "dual-light/WifiOff";
  DualLightIcons2["Wifi"] = "dual-light/Wifi";
  DualLightIcons2["Wind"] = "dual-light/Wind";
  DualLightIcons2["Window"] = "dual-light/Window";
  DualLightIcons2["YouTube"] = "dual-light/YouTube";
  DualLightIcons2["Zap"] = "dual-light/Zap";
  DualLightIcons2["ZoomIn"] = "dual-light/ZoomIn";
  DualLightIcons2["ZoomOut"] = "dual-light/ZoomOut";
  return DualLightIcons2;
})(DualLightIcons || {});

var DualLight = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DualLightIcons: DualLightIcons,
  Activity: Activity,
  AddCircle: AddCircle,
  Add: Add,
  Alarm: Alarm,
  AlertCircle: AlertCircle,
  Anchor: Anchor,
  Android: Android,
  Apple: Apple,
  Archive: Archive,
  ArrowLeft: ArrowLeft,
  ArrowDown: ArrowDown,
  ArrowRight: ArrowRight,
  ArrowUpDown: ArrowUpDown,
  ArrowUp: ArrowUp,
  AtSign: AtSign,
  Attachment: Attachment,
  Badge: Badge,
  Bank: Bank,
  BarChart: BarChart,
  Basket: Basket,
  BatteryCharging: BatteryCharging,
  BatteryFull: BatteryFull,
  BatteryHalf: BatteryHalf,
  BatteryLow: BatteryLow,
  Battery: Battery,
  BluetoothOff: BluetoothOff,
  Bluetooth: Bluetooth,
  Bold: Bold,
  Book: Book,
  Bookmark: Bookmark,
  Box: Box,
  Briefcase: Briefcase,
  Brush: Brush,
  Building: Building,
  Bulb: Bulb,
  Calendar: Calendar,
  Camera: Camera,
  Cart: Cart,
  Cast: Cast,
  Category: Category,
  CenterAlign: CenterAlign,
  CheckAll: CheckAll,
  CheckCircle: CheckCircle,
  Check: Check,
  ChevronLeft: ChevronLeft,
  ChevronDoubleLeft: ChevronDoubleLeft,
  ChevronDoubleRight: ChevronDoubleRight,
  ChevronDoubleDown: ChevronDoubleDown,
  ChevronDoubleUp: ChevronDoubleUp,
  ChevronDown: ChevronDown,
  ChevronRight: ChevronRight,
  ChevronUp: ChevronUp,
  Chip: Chip,
  Chrome: Chrome,
  Clipboard: Clipboard,
  Clock: Clock,
  CloseCircle: CloseCircle,
  Close: Close,
  CloudDownload: CloudDownload,
  CloudOff: CloudOff,
  CloudUpload: CloudUpload,
  Cloud: Cloud,
  Code: Code,
  Coffee: Coffee,
  Collapse: Collapse,
  ColorPalette: ColorPalette,
  Command: Command,
  Compass: Compass,
  Crop: Crop,
  Crosshairs: Crosshairs,
  Cursor: Cursor,
  Dashboard: Dashboard,
  Database: Database,
  Design: Design,
  Diamond: Diamond,
  Document: Document,
  Dollar: Dollar,
  DonutChart: DonutChart,
  Download: Download,
  Drop: Drop,
  Edit: Edit,
  EventAdd: EventAdd,
  EventScheduled: EventScheduled,
  Expand: Expand,
  Facebook: Facebook,
  FastLeft: FastLeft,
  FastRight: FastRight,
  Figma: Figma,
  FileAdd: FileAdd,
  File: File,
  Files: Files,
  Film: Film,
  Filter: Filter,
  Fire: Fire,
  Flag: Flag,
  Flashlight: Flashlight,
  Flight: Flight,
  FolderAdd: FolderAdd,
  Folder: Folder,
  Frown: Frown,
  Fuel: Fuel,
  Gamepad: Gamepad,
  Gift: Gift,
  Grid: Grid,
  Group: Group,
  Growth: Growth,
  HandCursor: HandCursor,
  Headphone: Headphone,
  Heart: Heart,
  Help: Help,
  Hide: Hide,
  Home: Home,
  Hourglass: Hourglass,
  Image: Image,
  Inbox: Inbox,
  Info: Info,
  Instagram: Instagram,
  Internet: Internet,
  Italics: Italics,
  Justify: Justify,
  Key: Key,
  Laptop: Laptop,
  Laugh: Laugh,
  Layers: Layers,
  Layout: Layout,
  Leaderboard: Leaderboard,
  LeftAlign: LeftAlign,
  LineChart: LineChart,
  Link: Link,
  LinkedIn: LinkedIn,
  List: List,
  Live: Live,
  Loader: Loader,
  Location: Location,
  Lock: Lock,
  Login: Login,
  Logout: Logout,
  Mail: Mail,
  Map: Map,
  Meh: Meh,
  Menu: Menu,
  Message: Message,
  Messages: Messages,
  MicOff: MicOff,
  Mic: Mic,
  Mobile: Mobile,
  Moon: Moon,
  MoreHorizontal: MoreHorizontal,
  MoreVertical: MoreVertical,
  Mouse: Mouse,
  Music: Music,
  New: New,
  Next: Next,
  Note: Note,
  Notes: Notes,
  NotificationOff: NotificationOff,
  Notification: Notification,
  Open: Open,
  PaintRoller: PaintRoller,
  Pause: Pause,
  Payment: Payment,
  Pen: Pen,
  Percent: Percent,
  Person: Person,
  PhoneCallIncoming: PhoneCallIncoming,
  PhoneCallOutgoing: PhoneCallOutgoing,
  PhoneCallRejected: PhoneCallRejected,
  Phone: Phone,
  Photos: Photos,
  PieChart: PieChart,
  Pin: Pin,
  Pinterest: Pinterest,
  PlayCircle: PlayCircle,
  Play: Play,
  Playlist: Playlist,
  Power: Power,
  Presentation: Presentation,
  Previous: Previous,
  Printer: Printer,
  ProfileCircle: ProfileCircle,
  Promotion: Promotion,
  Rain: Rain,
  Receipt: Receipt,
  Reload: Reload,
  Remove: Remove,
  Repeat: Repeat,
  RightAlign: RightAlign,
  Rocket: Rocket,
  Ruler: Ruler,
  Sad: Sad,
  Save: Save,
  Scan: Scan,
  Schedule: Schedule,
  Scissors: Scissors,
  Search: Search,
  Send: Send,
  Settings: Settings,
  Share: Share,
  ShieldCheck: ShieldCheck,
  Shield: Shield,
  Ship: Ship,
  ShoppingBag: ShoppingBag,
  Show: Show,
  Shuffle: Shuffle,
  Size: Size,
  Slack: Slack,
  Smile: Smile,
  Snapchat: Snapchat,
  Snowflake: Snowflake,
  Sort: Sort,
  Spotify: Spotify,
  Star: Star,
  Stop: Stop,
  Store: Store,
  Sun: Sun,
  Sync: Sync,
  Tablet: Tablet,
  Tag: Tag,
  Target: Target,
  Thermometer: Thermometer,
  ThumbsDown: ThumbsDown,
  ThumbsUp: ThumbsUp,
  Ticket: Ticket,
  Timer: Timer,
  ToggleOff: ToggleOff,
  ToggleOn: ToggleOn,
  Tool: Tool,
  Train: Train,
  Trash: Trash,
  TrendingDown: TrendingDown,
  TrendingUp: TrendingUp,
  Trophy: Trophy,
  Truck: Truck,
  TV: TV,
  Twitch: Twitch,
  Twitter: Twitter,
  Umbrella: Umbrella,
  Underline: Underline,
  Unlock: Unlock,
  Update: Update,
  Upload: Upload,
  Utensils: Utensils,
  VideoOff: VideoOff,
  VideoRecorder: VideoRecorder,
  VolumeHigh: VolumeHigh,
  VolumeOff: VolumeOff,
  Volume: Volume,
  Wallet: Wallet,
  Warning: Warning,
  Watch: Watch,
  WifiOff: WifiOff,
  Wifi: Wifi,
  Wind: Wind,
  Window: Window,
  YouTube: YouTube,
  Zap: Zap,
  ZoomIn: ZoomIn,
  ZoomOut: ZoomOut
}, Symbol.toStringTag, { value: 'Module' }));

function getIcon(name) {
  const { BasicIcons: notUsedBasic, ...otherBasicIcons } = Basic;
  const { DualLightIcons: notUsedDualLight, ...otherDualLightIcons } = DualLight;
  const matchedIcon = [...Object.entries(name.includes("basic/") ? { ...BasicIcons } : { ...DualLightIcons })].find(([key, value]) => value === name);
  if (matchedIcon && matchedIcon[0]) {
    return name.includes("basic/") ? otherBasicIcons[matchedIcon[0]] : otherDualLightIcons[matchedIcon[0]];
  }
  return null;
}

export { Basic, BasicIcons, DualLight, DualLightIcons, getIcon };
//# sourceMappingURL=index.mjs.map
