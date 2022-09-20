"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --font-size
// --line-height
// --margin
// --text-color


exports.default = (0, cssr_1.cB)('p', `
 box-sizing: border-box;
 transition: color .3s var(--bezier);
 margin: var(--margin);
 font-size: var(--font-size);
 line-height: var(--line-height);
 color: var(--text-color);
`, [(0, cssr_1.c)('&:first-child', 'margin-top: 0;'), (0, cssr_1.c)('&:last-child', 'margin-bottom: 0;')]);