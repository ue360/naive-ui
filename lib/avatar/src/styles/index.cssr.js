"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --font-size
// --border-radius
// --color
// --bezier
// --size


exports.default = (0, cssr_1.cB)('avatar', `
 width: var(--merged-size);
 height: var(--merged-size);
 color: #FFF;
 font-size: var(--font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border-radius: var(--border-radius);
 background-color: var(--color);
 transition:
 background-color .3s var(--bezier),
 color .3s var(--bezier);
`, [(0, cssr_1.c)('img', `
 width: 100%;
 height: 100%;
 `), (0, cssr_1.cE)('text', `
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `), (0, cssr_1.cB)('icon', `
 vertical-align: bottom;
 font-size: var(--size);
 `), (0, cssr_1.cE)('text', {
  lineHeight: 1.25
})]);