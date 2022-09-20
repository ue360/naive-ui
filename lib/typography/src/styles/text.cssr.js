"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --text-color
// --font-weight-strong
// --font-famliy-mono
// --code-border-radius
// --code-text-color
// --code-color
// --code-border


exports.default = (0, cssr_1.cB)('text', `
 transition: color .3s var(--bezier);
 color: var(--text-color);
`, [(0, cssr_1.cM)('strong', `
 font-weight: var(--font-weight-strong);
 `), (0, cssr_1.cM)('italic', {
  fontStyle: 'italic'
}), (0, cssr_1.cM)('underline', {
  textDecoration: 'underline'
}), (0, cssr_1.cM)('code', `
 line-height: 1.4;
 display: inline-block;
 font-family: var(--font-famliy-mono);
 transition: 
 color .3s var(--bezier),
 border-color .3s var(--bezier),
 background-color .3s var(--bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--code-border-radius);
 font-size: .9em;
 color: var(--code-text-color);
 background-color: var(--code-color);
 border: var(--code-border);
 `)]);