import{s as p}from"./micromark-util-chunked-7cee8b40.js";import{c as k}from"./micromark-util-classify-character-728b5235.js";import{r as d}from"./micromark-util-resolve-all-8a85a8df.js";function j(y={}){let l=y.singleTilde;const g={tokenize:S,resolveAll:m};return l==null&&(l=!0),{text:{[126]:g},insideSpan:{null:[g]},attentionMarkers:{null:[126]}};function m(r,i){let e=-1;for(;++e<r.length;)if(r[e][0]==="enter"&&r[e][1].type==="strikethroughSequenceTemporary"&&r[e][1]._close){let t=e;for(;t--;)if(r[t][0]==="exit"&&r[t][1].type==="strikethroughSequenceTemporary"&&r[t][1]._open&&r[e][1].end.offset-r[e][1].start.offset===r[t][1].end.offset-r[t][1].start.offset){r[e][1].type="strikethroughSequence",r[t][1].type="strikethroughSequence";const s={type:"strikethrough",start:Object.assign({},r[t][1].start),end:Object.assign({},r[e][1].end)},u={type:"strikethroughText",start:Object.assign({},r[t][1].end),end:Object.assign({},r[e][1].start)},o=[["enter",s,i],["enter",r[t][1],i],["exit",r[t][1],i],["enter",u,i]];p(o,o.length,0,d(i.parser.constructs.insideSpan.null,r.slice(t+1,e),i)),p(o,o.length,0,[["exit",u,i],["enter",r[e][1],i],["exit",r[e][1],i],["exit",s,i]]),p(r,t-1,e-t+3,o),e=t+o.length-2;break}}for(e=-1;++e<r.length;)r[e][1].type==="strikethroughSequenceTemporary"&&(r[e][1].type="data");return r}function S(r,i,e){const t=this.previous,s=this.events;let u=0;return o;function o(n){return t===126&&s[s.length-1][1].type!=="characterEscape"?e(n):(r.enter("strikethroughSequenceTemporary"),f(n))}function f(n){const h=k(t);if(n===126)return u>1?e(n):(r.consume(n),u++,f);if(u<2&&!l)return e(n);const c=r.exit("strikethroughSequenceTemporary"),a=k(n);return c._open=!a||a===2&&Boolean(h),c._close=!h||h===2&&Boolean(a),i(n)}}}export{j as g};
