"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --box-shadow
// --box-shadow-active
// --box-shadow-disabled
// --box-shadow-focus
// --box-shadow-hover
// --color
// --color-disabled
// --dot-color-active
// --dot-color-disabled
// --font-size
// --radio-size
// --text-color
// --text-color-disabled
// --label-padding


exports.default = (0, cssr_1.cB)('radio', `
 line-height: 1;
 outline: none;
 position: relative;
 user-select: none;
 display: inline-flex;
 vertical-align: middle;
 align-items: center;
 font-size: var(--font-size);
`, [(0, cssr_1.cE)('dot', `
 height: var(--radio-size);
 width: var(--radio-size);
 `), (0, cssr_1.cE)('radio-input', `
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `), (0, cssr_1.cE)('dot', `
 background: var(--color);
 box-shadow: var(--box-shadow);
 transition:
 background-color .3s var(--bezier),
 box-shadow .3s var(--bezier);
 position: relative;
 border-radius: 50%;
 `, [(0, cssr_1.c)('&::before', `
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--dot-color-active);
 transition: 
 opacity .3s var(--bezier),
 background-color .3s var(--bezier),
 transform .3s var(--bezier);
 `), (0, cssr_1.cM)('checked', {
  boxShadow: 'var(--box-shadow-active)'
}, [(0, cssr_1.c)('&::before', `
 opacity: 1;
 transform: scale(1);
 `)])]), (0, cssr_1.cE)('label', `
 color: var(--text-color);
 padding: var(--label-padding);
 display: inline-block;
 white-space: nowrap;
 transition: color .3s var(--bezier);
 `), (0, cssr_1.cNotM)('disabled', `
 cursor: pointer;
 `, [(0, cssr_1.c)('&:hover', [(0, cssr_1.cE)('dot', {
  boxShadow: 'var(--box-shadow-hover)'
})]), (0, cssr_1.cM)('focus', [(0, cssr_1.c)('&:not(:active)', [(0, cssr_1.cE)('dot', {
  boxShadow: 'var(--box-shadow-focus)'
})])])]), (0, cssr_1.cM)('disabled', `
 cursor: not-allowed;
 `, [(0, cssr_1.cE)('dot', {
  boxShadow: 'var(--box-shadow-disabled)',
  backgroundColor: 'var(--color-disabled)'
}, [(0, cssr_1.c)('&::before', {
  backgroundColor: 'var(--dot-color-disabled)'
}), (0, cssr_1.cM)('checked', `
 transform: scale(1);
 opacity: 1;
 `)]), (0, cssr_1.cE)('label', {
  color: 'var(--text-color-disabled)'
})])]);