"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --font-size
// --line-height
// --prefix-color
// --text-color


exports.default = (0, cssr_1.cB)('blockquote', `
 font-size: var(--font-size);
 line-height: var(--line-height);
 margin: 0;
 margin-top: 12px;
 margin-bottom: 12px;
 box-sizing: border-box;
 padding-left: 12px;
 border-left: 4px solid var(--prefix-color);
 color: var(--text-color);
 transition:
 color .3s var(--bezier),
 border-color .3s var(--bezier);
`, [(0, cssr_1.c)('&:first-child', {
  marginTop: 0
}), (0, cssr_1.c)('&:last-child', {
  marginBottom: 0
}), (0, cssr_1.cM)('align-text', {
  marginLeft: '-16px'
})]);