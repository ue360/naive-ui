"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --color
// --border-color
// --text-color


exports.default = (0, cssr_1.cB)('layout-footer', `
 transition:
 box-shadow .3s var(--bezier),
 color .3s var(--bezier),
 background-color .3s var(--bezier),
 border-color .3s var(--bezier);
 color: var(--text-color);
 background-color: var(--color);
 box-sizing: border-box;
`, [(0, cssr_1.cM)('absolute-positioned', `
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `), (0, cssr_1.cM)('bordered', `
 border-top: solid 1px var(--border-color);
 `)]);