import{f as C}from"./micromark-factory-space-2547bc30.js";import{m as h,j as x}from"./micromark-util-character-ccb466e5.js";import{n as b}from"./micromark-util-normalize-identifier-dfdf0387.js";import{b as D}from"./micromark-core-commonmark-ab113acc.js";const L={tokenize:E,partial:!0};function G(){return{document:{[91]:{tokenize:d,continuation:{tokenize:j},exit:O}},text:{[91]:{tokenize:z},[93]:{add:"after",tokenize:y,resolveTo:M}}}}function y(n,a,e){const o=this;let l=o.events.length;const u=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let r;for(;l--;){const g=o.events[l][1];if(g.type==="labelImage"){r=g;break}if(g.type==="gfmFootnoteCall"||g.type==="labelLink"||g.type==="label"||g.type==="image"||g.type==="link")break}return f;function f(g){if(!r||!r._balanced)return e(g);const m=b(o.sliceSerialize({start:r.end,end:o.now()}));return m.charCodeAt(0)!==94||!u.includes(m.slice(1))?e(g):(n.enter("gfmFootnoteCallLabelMarker"),n.consume(g),n.exit("gfmFootnoteCallLabelMarker"),a(g))}}function M(n,a){let e=n.length;for(;e--;)if(n[e][1].type==="labelImage"&&n[e][0]==="enter"){n[e][1];break}n[e+1][1].type="data",n[e+3][1].type="gfmFootnoteCallLabelMarker";const o={type:"gfmFootnoteCall",start:Object.assign({},n[e+3][1].start),end:Object.assign({},n[n.length-1][1].end)},l={type:"gfmFootnoteCallMarker",start:Object.assign({},n[e+3][1].end),end:Object.assign({},n[e+3][1].end)};l.end.column++,l.end.offset++,l.end._bufferIndex++;const u={type:"gfmFootnoteCallString",start:Object.assign({},l.end),end:Object.assign({},n[n.length-1][1].start)},r={type:"chunkString",contentType:"string",start:Object.assign({},u.start),end:Object.assign({},u.end)},f=[n[e+1],n[e+2],["enter",o,a],n[e+3],n[e+4],["enter",l,a],["exit",l,a],["enter",u,a],["enter",r,a],["exit",r,a],["exit",u,a],n[n.length-2],n[n.length-1],["exit",o,a]];return n.splice(e,n.length-e+1,...f),n}function z(n,a,e){const o=this,l=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let u=0,r;return f;function f(i){return n.enter("gfmFootnoteCall"),n.enter("gfmFootnoteCallLabelMarker"),n.consume(i),n.exit("gfmFootnoteCallLabelMarker"),g}function g(i){return i!==94?e(i):(n.enter("gfmFootnoteCallMarker"),n.consume(i),n.exit("gfmFootnoteCallMarker"),n.enter("gfmFootnoteCallString"),n.enter("chunkString").contentType="string",m)}function m(i){let k;return i===null||i===91||u++>999?e(i):i===93?r?(n.exit("chunkString"),k=n.exit("gfmFootnoteCallString"),l.includes(b(o.sliceSerialize(k)))?F(i):e(i)):e(i):(n.consume(i),x(i)||(r=!0),i===92?s:m)}function s(i){return i===91||i===92||i===93?(n.consume(i),u++,m):m(i)}function F(i){return n.enter("gfmFootnoteCallLabelMarker"),n.consume(i),n.exit("gfmFootnoteCallLabelMarker"),n.exit("gfmFootnoteCall"),a}}function d(n,a,e){const o=this,l=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let u,r=0,f;return g;function g(t){return n.enter("gfmFootnoteDefinition")._container=!0,n.enter("gfmFootnoteDefinitionLabel"),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(t),n.exit("gfmFootnoteDefinitionLabelMarker"),m}function m(t){return t===94?(n.enter("gfmFootnoteDefinitionMarker"),n.consume(t),n.exit("gfmFootnoteDefinitionMarker"),n.enter("gfmFootnoteDefinitionLabelString"),s):e(t)}function s(t){let p;return t===null||t===91||r>999?e(t):t===93?f?(p=n.exit("gfmFootnoteDefinitionLabelString"),u=b(o.sliceSerialize(p)),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(t),n.exit("gfmFootnoteDefinitionLabelMarker"),n.exit("gfmFootnoteDefinitionLabel"),k):e(t):h(t)?(n.enter("lineEnding"),n.consume(t),n.exit("lineEnding"),r++,s):(n.enter("chunkString").contentType="string",F(t))}function F(t){return t===null||h(t)||t===91||t===93||r>999?(n.exit("chunkString"),s(t)):(x(t)||(f=!0),r++,n.consume(t),t===92?i:F)}function i(t){return t===91||t===92||t===93?(n.consume(t),r++,F):F(t)}function k(t){return t===58?(n.enter("definitionMarker"),n.consume(t),n.exit("definitionMarker"),C(n,S,"gfmFootnoteDefinitionWhitespace")):e(t)}function S(t){return l.includes(u)||l.push(u),a(t)}}function j(n,a,e){return n.check(D,a,n.attempt(L,a,e))}function O(n){n.exit("gfmFootnoteDefinition")}function E(n,a,e){const o=this;return C(n,l,"gfmFootnoteDefinitionIndent",4+1);function l(u){const r=o.events[o.events.length-1];return r&&r[1].type==="gfmFootnoteDefinitionIndent"&&r[2].sliceSerialize(r[1],!0).length===4?a(u):e(u)}}export{G as g};