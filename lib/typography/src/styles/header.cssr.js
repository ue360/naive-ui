"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --font-size
// --margin
// --bar-color
// --bar-width
// --font-weight
// --text-color
// --prefix-width


exports.default = (0, cssr_1.cB)('h', `
 font-size: var(--font-size);
 font-weight: var(--font-weight);
 margin: var(--margin);
 transition: color .3s var(--bezier);
 color: var(--text-color);
`, [(0, cssr_1.c)('&:first-child', {
  marginTop: 0
}), (0, cssr_1.cM)('prefix-bar', {
  position: 'relative',
  paddingLeft: 'var(--prefix-width)'
}, [(0, cssr_1.cM)('align-text', {
  paddingLeft: 0
}, [(0, cssr_1.c)('&::before', {
  left: 'calc(-1 * var(--prefix-width))'
})]), (0, cssr_1.c)('&::before', `
 content: "";
 width: var(--bar-width);
 border-radius: calc(var(--bar-width) / 2);
 transition: background-color .3s var(--bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `), (0, cssr_1.c)('&::before', {
  backgroundColor: 'var(--bar-color)'
})])]);