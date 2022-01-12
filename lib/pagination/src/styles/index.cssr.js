"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --item-font-size
// --select-width
// --input-width
// --input-margin
// --item-size
// --item-text-color
// --item-text-color-disabled
// --item-text-color-hover
// --item-text-color-active
// --item-color
// --item-color-hover
// --item-color-disabled
// --item-color-active
// --item-color-active-hover
// --item-border
// --item-border-hover
// --item-border-disabled
// --item-border-active
// --item-padding
// --item-font-size
// --item-border-radius
// --bezier
// --jumper-font-size
// --jumper-text-color
// --jumper-text-color-disabled
// --item-margin
// --button-icon-size
// --button-icon-color
// --button-icon-color-hover
// --button-icon-color-pressed
// --prefix-margin
// --suffix-margin
// --button-color
// --button-color-hover
// --button-color-pressed


exports.default = (0, cssr_1.cB)('pagination', `
 display: flex;
 vertical-align: middle;
 font-size: var(--item-font-size);
 flex-wrap: nowrap;
`, [(0, cssr_1.cB)('pagination-prefix', `
 display: flex;
 align-items: center;
 margin: var(--prefix-margin);
 `), (0, cssr_1.cB)('pagination-suffix', `
 display: flex;
 align-items: center;
 margin: var(--suffix-margin);
 `), (0, cssr_1.c)('> *:not(:first-child)', {
  margin: 'var(--item-margin)'
}), (0, cssr_1.cB)('select', {
  width: 'var(--select-width)'
}), (0, cssr_1.c)('&.transition-disabled', [(0, cssr_1.cB)('pagination-item', {
  transition: 'none!important'
})]), (0, cssr_1.cB)('pagination-quick-jumper', `
 white-space: nowrap;
 display: flex;
 color: var(--jumper-text-color);
 transition: color .3s var(--bezier);
 align-items: center;
 font-size: var(--jumter-font-size);
 `, [(0, cssr_1.cB)('input', `
 margin: var(--input-margin);
 width: var(--input-width);
 `)]), (0, cssr_1.cB)('pagination-item', `
 position: relative;
 cursor: pointer;
 user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--item-size);
 height: var(--item-size);
 padding: var(--item-padding);
 background-color: var(--item-color);
 color: var(--item-text-color);
 border-radius: var(--item-border-radius);
 border: var(--item-border);
 fill: var(--button-icon-color);
 transition:
 color .3s var(--bezier),
 border-color .3s var(--bezier),
 background-color .3s var(--bezier),
 fill .3s var(--bezier);
 `, [(0, cssr_1.cM)('button', `
 background: var(--button-color);
 color: var(--button-icon-color);
 border: var(--button-border);
 `, [(0, cssr_1.cB)('base-icon', `
 font-size: var(--button-icon-size);
 `)]), (0, cssr_1.cNotM)('disabled', [(0, cssr_1.c)('&:hover', {
  background: 'var(--item-color-hover)',
  color: 'var(--item-text-color-hover)',
  border: 'var(--item-border-hover)'
}, [(0, cssr_1.cM)('button', {
  background: 'var(--button-color-hover)',
  border: 'var(--button-border-hover)',
  color: 'var(--button-icon-color-hover)'
})]), (0, cssr_1.c)('&:active', {
  background: 'var(--item-color-pressed)',
  color: 'var(--item-text-color-pressed)',
  border: 'var(--item-border-pressed)'
}, [(0, cssr_1.cM)('button', {
  background: 'var(--button-color-pressed)',
  border: 'var(--button-border-pressed)',
  color: 'var(--button-icon-color-pressed)'
})]), (0, cssr_1.cM)('active', {
  background: 'var(--item-color-active)',
  color: 'var(--item-text-color-active)',
  border: 'var(--item-border-active)'
}, [(0, cssr_1.c)('&:hover', {
  background: 'var(--item-color-active-hover)'
})])]), (0, cssr_1.cM)('disabled', `
 cursor: not-allowed;
 color: var(--item-text-color-disabled);
 `, [(0, cssr_1.cM)('active, button', {
  backgroundColor: 'var(--item-color-disabled)',
  border: 'var(--item-border-disabled)'
})])]), (0, cssr_1.cM)('disabled', {
  cursor: 'not-allowed'
}, [(0, cssr_1.cB)('pagination-quick-jumper', {
  color: 'var(--jumper-text-color-disabled)'
})])]);