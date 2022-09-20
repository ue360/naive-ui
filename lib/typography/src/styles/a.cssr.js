"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --text-color
// --bezier


exports.default = (0, cssr_1.cB)('a', `
 cursor: pointer;
 transition:
 color .3s var(--bezier),
 text-decoration-color .3s var(--bezier);
 text-decoration-color: var(--text-color);
 color: var(--text-color);
`);