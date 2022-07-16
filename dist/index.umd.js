!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("stylelint"),require("shortcss"),require("shortcss/lib/list"),require("css-values"),require("path")):"function"==typeof define&&define.amd?define(["exports","stylelint","shortcss","shortcss/lib/list","css-values","path"],r):r((e=e||self).stylelintDeclarationStrictValue={},e.stylelint,e.shortcss,e.list,e.cssValues,e.path)}(this,function(e,r,t,n,o,i){function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach(function(r){s(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;var c="scale-unlimited/declaration-strict-value",f=function(e,r){return"object"==typeof e&&Object.hasOwnProperty.call(e,r)},p={ignoreVariables:!0,ignoreFunctions:!0,ignoreKeywords:null,ignoreValues:null,expandShorthand:!1,recurseLonghand:!1,severity:"error",message:void 0,disableFix:!1,autoFixFunc:null};function y(e){var r=typeof e;return"string"===r||"number"===r}function d(e){return y(e)||Array.isArray(e)&&e.every(function(e){return y(e)})}function g(e){return!("object"!=typeof e||!e)&&Object.keys(e).every(function(r){return d(e[r])})}function v(e){return!("object"!=typeof e||!e)&&Object.keys(e).every(function(r){return"boolean"==typeof e[r]})}function b(e){if("object"!=typeof e)return!1;var r=Object.keys(p);return!(!Object.keys(e).every(function(e){return r.indexOf(e)>-1})||"ignoreVariables"in e&&"boolean"!=typeof e.ignoreVariables&&!v(e.ignoreVariables)&&null!==e.ignoreVariables||"ignoreFunctions"in e&&"boolean"!=typeof e.ignoreFunctions&&!v(e.ignoreFunctions)&&null!==e.ignoreFunctions||"severity"in e&&"string"!=typeof e.severity&&null!==e.severity||"ignoreKeywords"in e&&!d(e.ignoreKeywords)&&!g(e.ignoreKeywords)||"ignoreValues"in e&&!d(e.ignoreValues)&&!g(e.ignoreValues)||"expandShorthand"in e&&"boolean"!=typeof e.expandShorthand&&null!==e.expandShorthand||"recurseLonghand"in e&&"boolean"!=typeof e.recurseLonghand&&null!==e.recurseLonghand||"message"in e&&"string"!=typeof e.message&&null!==e.message||"disableFix"in e&&"boolean"!=typeof e.disableFix&&null!==e.disableFix||"autoFixFunc"in e&&"function"!=typeof e.autoFixFunc&&"string"!=typeof e.autoFixFunc&&null!==e.autoFixFunc)}function h(e,r){return"boolean"==typeof e?e:"object"==typeof e&&e&&{}.hasOwnProperty.call(e,r)?e[r]:!!e}function x(e,r){if(!e)return null;var t=e;return f(t,r)?t=t[r]:f(t,"")&&(t=t[""]),Array.isArray(t)?t:[t]}function m(e,r){if(!e)return null;var t=e;return f(t,r)?t=t[r]:f(t,"")&&(t=t[""]),Array.isArray(t)?t:[t]}var O=r.utils,w=O.ruleMessages(c,{expected:function(e,r,t,n){var o;if(void 0===n&&(n=""),Array.isArray(e)){var i=e.pop();o=e.length?e.join(", ")+" or "+i:i}else o=e;return"string"==typeof n&&n.length?n.replace("${types}",o).replace("${value}",r).replace("${property}",t):"Expected "+o+' for "'+r+'" of "'+t+'"'},failedToFix:function(e,r,t){return e&&("string"==typeof e||e instanceof Error)?"string"==typeof e?e:e.message:'Property "'+t+'" with value "'+r+"\" can't be autofixed"}}),j=/^(?:@|\$|--).+$/,F=/^-?(?:@.+|(?:(?:[a-zA-Z_-]|[^\x20-\x7F])+(?:[a-zA-Z0-9_-]|[^\x20-\x7F])*\.)?\$.+|var\(\s*--[\s\S]+\))$/,A=/^(?!var\(\s*--)[\s\S]+\([\s\S]*\)$/,P=/^\/(.*)\/([a-zA-Z]*)$/,V=/color/,S=function(e){return P.test(e)},E=function(e){var r,t=function(e){if(Array.isArray(e))return e}(r=function(e){return e.match(P).slice(1)}(e))||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),2!==i.length);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return i}}(r)||function(e,r){if(e){if("string"==typeof e)return u(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,2):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return new RegExp(t[0],t[1])},$=function(e){return S(""+e)?E(""+e):new RegExp("^"+e+"$")},k=function(e,r,a){return void 0===a&&(a={}),function(s,u){if(u&&u.stylelint&&u.stylelint.customMessages&&u.stylelint.customMessages[c]&&delete u.stylelint.customMessages[c],O.validateOptions(u,c,{actual:e,possible:d},{actual:r,possible:b,optional:!0})){Array.isArray(e)||(e=[e]);var f,y=l(l({},p),r),g=y.ignoreVariables,v=y.ignoreFunctions,P=y.ignoreKeywords,k=y.ignoreValues,q=y.message,K=y.disableFix,R=y.expandShorthand,D=y.recurseLonghand,L=function(e,r,t){if("function"==typeof e)return e;if("string"==typeof e){var n;try{n=require.resolve(e)}catch(r){n=require.resolve(i.join(process.cwd(),e))}return require(n)}return!r&&t&&console.warn('No `autoFix` function provided, consider using `disableFix` for "'+c+'"'),null}(y.autoFixFunc,K,a.fix),M=P?{}:null,N=k?{}:null;if(g){var T=[];s.walkAtRules("value",function(e){var r=e.params.split(":")[0].trim();T.push(r)}),f=new RegExp("^-?(:?"+T.join("|")+")$")}e.forEach(function(e){var r=e;function i(r,t,n,i){void 0===i&&(i=!1);var l=r.prop,p=n||r.value,d=!1,b=!1,j=!1,S=!1;if(g&&h(g,e)&&(d=F.test(p)||f.test(p)),v&&!d&&h(v,e)&&(b=A.test(p)),i&&(!g||g&&!d)&&(!v||v&&!b)&&!0!==function(e,r){return V.test(e)&&"transparent"===r||F.test(r)||A.test(r)||o(e,r)}(t,n))return!1;if(P&&(!d||!b)){var E=M[e];if(!E){var R=x(P,e);R&&(E=new RegExp("^"+R.join("$|^")+"$"),M[e]=E)}E&&(j=E.test(p))}if(k&&(!d||!b||!j)){var D=N[e];if(!D){var T=m(k,e);T&&(D=T.map($),N[e]=D)}D&&(S=D.filter(function(e){return e.test(p)}).length>0)}if(!(d||b||j||S)){var z=function(e,r){var t=e.ignoreFunctions,n=e.ignoreKeywords,o=e.ignoreValues,i=[];return e.ignoreVariables&&i.push("variable"),t&&i.push("function"),n&&x(n,r)&&i.push("keyword"),-1===i.indexOf("keyword")&&o&&m(o,r)&&i.push("keyword"),i}(y,e);if(a.fix&&!K&&L)try{var I=L(r,{validVar:d,validFunc:b,validKeyword:j,validValue:S,longhandProp:t,longhandValue:n},s,y);I&&(r.value=I)}catch(e){console.error(e,w.failedToFix(e,p,l));var Z=r.source.start;O.report({ruleName:c,result:u,node:r,line:Z.line,column:Z.column+l.length+r.raws.between.length,message:w.failedToFix(e,p,l)})}else{var _=r.source.start;O.report({ruleName:c,result:u,node:r,line:_.line,column:_.column+l.length+r.raws.between.length,message:w.expected(z,p,l,q)})}return!0}return!1}S(r)&&(r=E(r)),s.walkDecls(function(e){var o=e.value,a=e.prop;if(!j.test(a)){var l=R&&t.isShorthand(a);if(a===r||!l&&r instanceof RegExp&&r.test(a)){var s=n.space(o);if(s.length>1){var u=!1;s.forEach(function(r){u||(u=i(e,a,r))})}else i(e)}else if(l){var c=t.expand(a,o,D),f=!1;Object.keys(c).forEach(function(t){var n=c[t];!f&&(t===r||r instanceof RegExp&&r.test(t))&&(f=i(e,t,n,!0))})}}})})}}};k.primaryOptionArray=!0;var q=r.createPlugin(c,k);e.default=q,e.messages=w,e.ruleName=c});
//# sourceMappingURL=index.umd.js.map
