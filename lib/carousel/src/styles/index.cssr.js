"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --dot-color
// --dot-color-active
// --dot-size
// --arrow-color


exports.default = (0, cssr_1.cB)('carousel', `
 overflow: hidden;
 position: relative;
`, [(0, cssr_1.cE)('slides', `
 transition: transform .3s var(--bezier);
 display: flex;
 `, [(0, cssr_1.c)('> div', `
 overflow: hidden;
 `, [(0, cssr_1.c)('> img', `
 display: block;
 `)])]), (0, cssr_1.cE)('dots', `
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `), (0, cssr_1.cE)('dot', `
 height: var(--dot-size);
 width: var(--dot-size);
 background-color: var(--dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--bezier),
 background-color .3s var(--bezier);
 outline: none;
 `, [(0, cssr_1.c)('&:focus', `
 background-color: var(--dot-color-active);
 `), (0, cssr_1.cM)('active', `
 background-color: var(--dot-color-active);
 `), (0, cssr_1.c)('&:last-child', `
 margin-right: 0;
 `)]), (0, cssr_1.cE)('arrow', `
 position: absolute;
 transition: transform .3s var(--bezier);
 transform: scale(1);
 cursor: pointer;
 height: 48px;
 width: 48px;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--arrow-color);
 `, [(0, cssr_1.cM)('right', `
 transform: translateY(-50%);
 top: 50%;
 right: 0;
 `, [(0, cssr_1.c)('&:hover', {
  transform: 'translateY(-50%) scale(1.1)'
}), (0, cssr_1.c)('&:active', {
  transform: 'translateY(-50%) scale(1)'
})]), (0, cssr_1.cM)('left', `
 transform: translateY(-50%);
 top: 50%;
 left: 0;
 `, [(0, cssr_1.c)('&:hover', {
  transform: 'translateY(-50%) scale(1.1)'
}), (0, cssr_1.c)('&:active', {
  transform: 'translateY(-50%) scale(1)'
})]), (0, cssr_1.cM)('top', `
 transform: translateX(-50%) rotate(90deg);
 top: 0;
 left: 50%;
 `, [(0, cssr_1.c)('&:hover', {
  transform: 'translateX(-50%) scale(1.1) rotate(90deg)'
}), (0, cssr_1.c)('&:active', {
  transform: 'translateX(-50%) scale(1) rotate(90deg)'
})]), (0, cssr_1.cM)('bottom', `
 transform: translateX(-50%) rotate(90deg);
 bottom: 0;
 left: 50%;
 `, [(0, cssr_1.c)('&:hover', {
  transform: 'translateX(-50%) scale(1.1) rotate(90deg)'
}), (0, cssr_1.c)('&:active', {
  transform: 'translateX(-50%) scale(1) rotate(90deg)'
})]), (0, cssr_1.c)('svg', {
  height: '100%',
  width: '100%'
})]), (0, cssr_1.cM)('left', [(0, cssr_1.cE)('slides', `
 flex-direction: column;
 `), (0, cssr_1.cE)('dots', `
 transform: translateY(-50%);
 top: 50%;
 left: 16px;
 flex-direction: column;
 `), (0, cssr_1.cE)('dot', `
 margin-bottom: 12px;
 `)]), (0, cssr_1.cM)('right', [(0, cssr_1.cE)('slides', `
 flex-direction: column;
 `), (0, cssr_1.cE)('dots', `
 transform: translateY(-50%);
 top: 50%;
 right: 16px;
 flex-direction: column;
 `), (0, cssr_1.cE)('dot', `
 margin-bottom: 12px;
 `)]), (0, cssr_1.cM)('top', [(0, cssr_1.cE)('dots', `
 transform: translateX(-50%);
 top: 16px;
 left: 50%;
 `), (0, cssr_1.cE)('dot', `
 margin-right: 12px;
 `)]), (0, cssr_1.cM)('bottom', [(0, cssr_1.cE)('dots', `
 transform: translateX(-50%);
 bottom: 16px;
 left: 50%;
 `), (0, cssr_1.cE)('dot', `
 margin-right: 12px;
 `)])]);