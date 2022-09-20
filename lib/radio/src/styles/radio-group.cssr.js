"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --button-border-color
// --height
// --opacity-disabled
// --font-size


exports.default = (0, cssr_1.cB)('radio-group', `
 display: inline-block;
 font-size: var(--font-size);
`, [(0, cssr_1.cE)('splitor', `
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--bezier),
 opacity .3s var(--bezier);
 background: var(--button-border-color);
 `, [(0, cssr_1.cM)('checked', {
  backgroundColor: 'var(--button-border-color-active)'
}), (0, cssr_1.cM)('disabled', {
  opacity: 'var(--opacity-disabled)'
})]), (0, cssr_1.cM)('button-group', `
 white-space: nowrap;
 height: var(--height);
 line-height: var(--height);
 `, [(0, cssr_1.cB)('radio-button', {
  height: 'var(--height)',
  lineHeight: 'var(--height)'
}), (0, cssr_1.cE)('splitor', {
  height: 'var(--height)'
})]), (0, cssr_1.cB)('radio-button', `
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--bezier),
 opacity .3s var(--bezier),
 border-color .3s var(--bezier),
 color .3s var(--bezier);
 color: var(--button-text-color);
 border-top: 1px solid var(--button-border-color);
 border-bottom: 1px solid var(--button-border-color);
 `, [(0, cssr_1.cE)('radio-input', `
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `), (0, cssr_1.cE)('state-border', `
 pointer-events: none;
 position: absolute;
 box-shadow: var(--button-box-shadow);
 transition: box-shadow .3s var(--bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `), (0, cssr_1.c)('&:first-child', `
 border-top-left-radius: var(--button-border-radius);
 border-bottom-left-radius: var(--button-border-radius);
 border-left: 1px solid var(--button-border-color);
 `, [(0, cssr_1.cE)('state-border', `
 border-top-left-radius: var(--button-border-radius);
 border-bottom-left-radius: var(--button-border-radius);
 `)]), (0, cssr_1.c)('&:last-child', `
 border-top-right-radius: var(--button-border-radius);
 border-bottom-right-radius: var(--button-border-radius);
 border-right: 1px solid var(--button-border-color);
 `, [(0, cssr_1.cE)('state-border', `
 border-top-right-radius: var(--button-border-radius);
 border-bottom-right-radius: var(--button-border-radius);
 `)]), (0, cssr_1.cNotM)('disabled', `
 cursor: pointer;
 `, [(0, cssr_1.c)('&:hover', [(0, cssr_1.cE)('state-border', `
 transition: box-shadow .3s var(--bezier);
 box-shadow: var(--button-box-shadow-hover);
 `), (0, cssr_1.cNotM)('checked', {
  color: 'var(--button-text-color-hover)'
})]), (0, cssr_1.cM)('focus', [(0, cssr_1.c)('&:not(:active)', [(0, cssr_1.cE)('state-border', {
  boxShadow: 'var(--button-box-shadow-focus)'
})])])]), (0, cssr_1.cM)('checked', `
 background: var(--button-color-active);
 color: var(--button-text-color-active);
 border-color: var(--button-border-color-active);
 `), (0, cssr_1.cM)('disabled', `
 cursor: not-allowed;
 opacity: var(--opacity-disabled);
 `)])]);