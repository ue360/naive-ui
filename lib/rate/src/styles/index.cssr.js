"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --item-color
// --item-color-active


exports.default = (0, cssr_1.cB)('rate', {
  display: 'inline-flex',
  flexWrap: 'nowrap'
}, [(0, cssr_1.c)('&:hover', [(0, cssr_1.cE)('item', `
 transition:
 transform .1s var(--bezier),
 color .3s var(--bezier);
 `)]), (0, cssr_1.cE)('item', `
 position: relative;
 display: flex;
 transition:
 transform .1s var(--bezier),
 color .3s var(--bezier);
 transform: scale(1);
 font-size: var(--item-size);
 color: var(--item-color);
 `, [(0, cssr_1.c)('&:not(:first-child)', {
  marginLeft: '6px'
}), (0, cssr_1.cM)('active', {
  color: 'var(--item-color-active)'
})]), (0, cssr_1.cNotM)('readonly', `
 cursor: pointer;
 `, [(0, cssr_1.cE)('item', [(0, cssr_1.c)('&:hover', {
  transform: 'scale(1.05)'
}), (0, cssr_1.c)('&:active', {
  transform: 'scale(0.96)'
})])]), (0, cssr_1.cE)('half', `
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `, [(0, cssr_1.cM)('active', {
  color: 'var(--item-color-active)'
})])]);