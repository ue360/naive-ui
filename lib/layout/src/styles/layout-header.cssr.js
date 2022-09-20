"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --text-color
// --color
// --border-color


exports.default = (0, cssr_1.cB)('layout-header', `
 transition:
 color .3s var(--bezier),
 background-color .3s var(--bezier),
 box-shadow .3s var(--bezier),
 border-color .3s var(--bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--color);
 color: var(--text-color);
`, [(0, cssr_1.cM)('absolute-positioned', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `), (0, cssr_1.cM)('bordered', `
 border-bottom: solid 1px var(--border-color);
 `)]);