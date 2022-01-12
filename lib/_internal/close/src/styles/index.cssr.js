"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../../_utils/cssr"); // vars:
// --close-color
// --close-color-hover
// --close-color-pressed
// --close-color-disabled


exports.default = (0, cssr_1.cB)('base-close', `
 cursor: pointer;
 color: var(--close-color);
`, [(0, cssr_1.c)('&:hover', {
  color: 'var(--close-color-hover)'
}), (0, cssr_1.c)('&:active', {
  color: 'var(--close-color-pressed)'
}), (0, cssr_1.cM)('disabled', {
  cursor: 'not-allowed!important',
  color: 'var(--close-color-disabled)'
})]);