"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // --bezier
// --font-size
// --icon-size
// --line-height
// --text-color
// --title-font-size
// --title-font-weight
// --title-text-color


exports.default = (0, cssr_1.cB)('result', `
 color: var(--text-color);
 line-height: var(--line-height);
 font-size: var(--font-size);
 transition:
 color .3s var(--bezier);
`, [(0, cssr_1.cB)('result-icon', `
 height: 1em;
 display: flex;
 justify-content: center;
 transition: color .3s var(--bezier);
 color: var(--icon-color);
 font-size: var(--icon-size);
 `, [(0, cssr_1.cE)('status-image', {
  width: '1em'
}), (0, cssr_1.c)('svg', {
  height: '1em'
})]), (0, cssr_1.cB)('result-content', {
  marginTop: '24px'
}), (0, cssr_1.cB)('result-footer', `
 margin-top: 24px;
 text-align: center;
 `), (0, cssr_1.cB)('result-header', [(0, cssr_1.cE)('title', `
 margin-top: 16px;
 font-weight: var(--title-font-weight);
 transition: color .3s var(--bezier);
 text-align: center;
 color: var(--title-text-color);
 font-size: var(--title-font-size);
 `), (0, cssr_1.cE)('description', `
 margin-top: 4px;
 text-align: center;
 font-size: var(--font-size);
 `)])]);