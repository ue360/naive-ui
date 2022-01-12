"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --font-size
// --bezier
// --item-text-color
// --item-text-color-hover
// --item-text-color-pressed
// --item-text-color-active
// --separator-color
// --font-weight-active


exports.default = (0, cssr_1.cB)('breadcrumb', `
 white-space: nowrap;
`, [(0, cssr_1.c)('ul', `
 list-style: none;
 padding: 0;
 margin: 0;
 `), (0, cssr_1.c)('a', `
 color: inherit;
 text-decoration: inherit;
 `), (0, cssr_1.cB)('breadcrumb-item', {
  fontSize: 'var(--font-size)',
  transition: 'color .3s var(--bezier)',
  display: 'inline-block'
}, [(0, cssr_1.cB)('icon', `
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--bezier);
 color: var(--item-text-color);
 `), (0, cssr_1.cE)('link', {
  cursor: 'pointer',
  transition: 'color .3s var(--bezier)',
  color: 'var(--item-text-color)'
}), (0, cssr_1.cE)('separator', {
  margin: '0 8px',
  color: 'var(--separator-color)',
  transition: 'color .3s var(--bezier)'
}), (0, cssr_1.c)('&:hover', [(0, cssr_1.cB)('icon', {
  color: 'var(--item-text-color-hover)'
}), (0, cssr_1.cE)('link', {
  color: 'var(--item-text-color-hover)'
})]), (0, cssr_1.c)('&:active', [(0, cssr_1.cB)('icon', {
  color: 'var(--item-text-color-pressed)'
}), (0, cssr_1.cE)('link', {
  color: 'var(--item-text-color-pressed)'
})]), (0, cssr_1.c)('&:last-child', [(0, cssr_1.cE)('link', `
 font-weight: var(--font-weight-active);
 cursor: unset;
 color: var(--item-text-color-active);
 `), (0, cssr_1.cB)('icon', {
  color: 'var(--item-text-color-active)'
}), (0, cssr_1.cE)('separator', {
  display: 'none'
})])])]);