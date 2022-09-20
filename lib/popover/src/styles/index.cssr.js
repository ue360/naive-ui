"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr");

const oppositePlacement = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left'
}; // vars:
// --bezier
// --bezier-ease-in
// --bezier-ease-out
// --font-size
// --text-color
// --color
// --border-radius
// --arrow-height
// --arrow-offset
// --arrow-offset-vertical
// --padding
// --space
// --space-arrow
// --divider-color

exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('popover', `
 transition:
 box-shadow .3s var(--bezier),
 background-color .3s var(--bezier),
 color .3s var(--bezier);
 transform-origin: inherit;
 position: relative;
 font-size: var(--font-size);
 color: var(--text-color);
 box-shadow: var(--box-shadow);
 `, [// body transition
(0, cssr_1.c)('&.popover-transition-enter-from, &.popover-transition-leave-to', `
 opacity: 0;
 transform: scale(.85);
 `), (0, cssr_1.c)('&.popover-transition-enter-to, &.popover-transition-leave-from', `
 transform: scale(1);
 opacity: 1;
 `), (0, cssr_1.c)('&.popover-transition-enter-active', `
 transition:
 opacity .15s var(--bezier-ease-out),
 transform .15s var(--bezier-ease-out);
 `), (0, cssr_1.c)('&.popover-transition-leave-active', `
 transition:
 opacity .15s var(--bezier-ease-in),
 transform .15s var(--bezier-ease-in);
 `), (0, cssr_1.cNotM)('raw', `
 background-color: var(--color);
 border-radius: var(--border-radius);
 `, [(0, cssr_1.cNotM)('show-header', 'padding: var(--padding);')]), (0, cssr_1.cE)('header', `
 padding: var(--padding);
 border-bottom: 1px solid var(--divider-color);
 transition: border-color .3s var(--bezier);
 `), (0, cssr_1.cE)('content', `
 padding: var(--padding);
 `), (0, cssr_1.cB)('popover-arrow-wrapper', `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [(0, cssr_1.cB)('popover-arrow', `
 transition: background-color .3s var(--bezier);
 position: absolute;
 display: block;
 width: calc(var(--arrow-height) * 1.414);
 height: calc(var(--arrow-height) * 1.414);
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--color);
 pointer-events: all;
 `)])]), placementStyle('top-start', `
 top: calc(-0.707 * var(--arrow-height));
 left: var(--arrow-offset);
 `), placementStyle('top', `
 top: calc(-0.707 * var(--arrow-height));
 transform: translateX(calc(-0.707 * var(--arrow-height))) rotate(45deg);
 left: 50%;
 `), placementStyle('top-end', `
 top: calc(-0.707 * var(--arrow-height));
 right: var(--arrow-offset);
 `), placementStyle('bottom-start', `
 bottom: calc(-0.707 * var(--arrow-height));
 left: var(--arrow-offset);
 `), placementStyle('bottom', `
 bottom: calc(-0.707 * var(--arrow-height));
 transform: translateX(calc(-0.707 * var(--arrow-height))) rotate(45deg);
 left: 50%;
 `), placementStyle('bottom-end', `
 bottom: calc(-0.707 * var(--arrow-height));
 right: var(--arrow-offset);
 `), placementStyle('left-start', `
 left: calc(-0.707 * var(--arrow-height));
 top: var(--arrow-offset-vertical);
 `), placementStyle('left', `
 left: calc(-0.707 * var(--arrow-height));
 transform: translateY(calc(-0.707 * var(--arrow-height))) rotate(45deg);
 top: 50%;
 `), placementStyle('left-end', `
 left: calc(-0.707 * var(--arrow-height));
 bottom: var(--arrow-offset-vertical);
 `), placementStyle('right-start', `
 right: calc(-0.707 * var(--arrow-height));
 top: var(--arrow-offset-vertical);
 `), placementStyle('right', `
 right: calc(-0.707 * var(--arrow-height));
 transform: translateY(calc(-0.707 * var(--arrow-height))) rotate(45deg);
 top: 50%;
 `), placementStyle('right-end', `
 right: calc(-0.707 * var(--arrow-height));
 bottom: var(--arrow-offset-vertical);
 `)]);

function placementStyle(placement, arrowStyleLiteral) {
  const position = placement.split('-')[0];
  const sizeStyle = ['top', 'bottom'].includes(position) ? 'height: var(--space-arrow);' : 'width: var(--space-arrow);';
  return (0, cssr_1.c)(`[v-placement="${placement}"] >`, [(0, cssr_1.cB)('popover', `
 margin-${oppositePlacement[position]}: var(--space);
 `, [(0, cssr_1.cM)('show-arrow', `
 margin-${oppositePlacement[position]}: var(--space-arrow);
 `), (0, cssr_1.cM)('overlap', `
 margin: 0;
 `), (0, cssr_1.cCB)('popover-arrow-wrapper', `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${position}: 100%;
 ${oppositePlacement[position]}: auto;
 ${sizeStyle}
 `, [(0, cssr_1.cB)('popover-arrow', arrowStyleLiteral)])])]);
}