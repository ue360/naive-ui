"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr");

const liStyle = (0, cssr_1.c)('li', {
  transition: 'color .3s var(--bezier)',
  lineHeight: 'var(--line-height)',
  margin: 'var(--li-margin)',
  marginBottom: 0,
  color: 'var(--text-color)'
});
const childStyle = [(0, cssr_1.c)('&:first-child', `
 margin-top: 0;
 `), (0, cssr_1.c)('&:last-child', `
 margin-bottom: 0;
 `)]; // vars:
// --bezier
// --font-size
// --line-height
// --text-color
// --li-margin
// --ol-padding
// --ul-padding

exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('ol', {
  fontSize: 'var(--font-size)',
  padding: 'var(--ol-padding)'
}, [(0, cssr_1.cM)('align-text', {
  paddingLeft: 0
}), liStyle, childStyle]), (0, cssr_1.cB)('ul', {
  fontSize: 'var(--font-size)',
  padding: 'var(--ul-padding)'
}, [(0, cssr_1.cM)('align-text', {
  paddingLeft: 0
}), liStyle, childStyle])]);