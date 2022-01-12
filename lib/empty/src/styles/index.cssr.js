"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --font-size
// --icon-size
// --icon-color
// --bezier
// --text-color
// --extra-text-color


exports.default = (0, cssr_1.cB)('empty', `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--font-size);
`, [(0, cssr_1.cE)('icon', `
 width: var(--icon-size);
 height: var(--icon-size);
 font-size: var(--icon-size);
 line-height: var(--icon-size);
 color: var(--icon-color);
 transition:
 color .3s var(--bezier);
 `), (0, cssr_1.cE)('description', `
 margin-top: 8px;
 transition: color .3s var(--bezier);
 color: var(--text-color);
 `), (0, cssr_1.cE)('extra', `
 text-align: center;
 transition: color .3s var(--bezier);
 margin-top: 12px;
 color: var(--extra-text-color);
 `)]);