"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr");

const lineHeight = 1.25; // vars:
// --bezier
// --circle-border
// --content-font-size
// --content-text-color
// --line-color
// --meta-text-color
// --title-font-size
// --title-font-weight
// --title-margin
// --title-text-color
// --icon-size

exports.default = (0, cssr_1.cB)('timeline', `
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${lineHeight};
`, [(0, cssr_1.cM)('horizontal', `
 flex-direction: row;
 `, [(0, cssr_1.cB)('timeline-item', `
 flex-shrink: 0;
 padding-right: 40px;
 `, [(0, cssr_1.cB)('timeline-item-content', `
 margin-top: calc(var(--icon-size) + 12px);
 `, [(0, cssr_1.cE)('meta', `
 margin-top: 6px;
 margin-bottom: unset;
 `)]), (0, cssr_1.cB)('timeline-item-timeline', `
 width: 100%;
 height: calc(var(--icon-size) + 12px);
 `, [(0, cssr_1.cE)('line', `
 left: var(--icon-size);
 top: calc(var(--icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])]), (0, cssr_1.cM)('right-placement', [(0, cssr_1.cB)('timeline-item', [(0, cssr_1.cB)('timeline-item-content', `
 text-align: right;
 margin-right: calc(var(--icon-size) + 12px);
 `), (0, cssr_1.cB)('timeline-item-timeline', `
 width: var(--icon-size);
 right: 0;
 `)])]), (0, cssr_1.cM)('left-placement', [(0, cssr_1.cB)('timeline-item', [(0, cssr_1.cB)('timeline-item-content', `
 margin-left: calc(var(--icon-size) + 12px);
 `), (0, cssr_1.cB)('timeline-item-timeline', `
 left: 0;
 `)])]), (0, cssr_1.cB)('timeline-item', `
 position: relative;
 `, [(0, cssr_1.c)('&:last-child', [(0, cssr_1.cB)('timeline-item-timeline', [(0, cssr_1.cE)('line', `
 display: none;
 `)]), (0, cssr_1.cB)('timeline-item-content', [(0, cssr_1.cE)('meta', `
 margin-bottom: 0;
 `)])]), (0, cssr_1.cB)('timeline-item-content', [(0, cssr_1.cE)('title', `
 margin: var(--title-margin);
 font-size: var(--title-font-size);
 transition: color .3s var(--bezier);
 font-weight: var(--title-font-weight);
 margin-bottom: 6px;
 color: var(--title-text-color);
 `), (0, cssr_1.cE)('content', `
 transition: color .3s var(--bezier);
 font-size: var(--content-font-size);
 color: var(--content-text-color);
 `), (0, cssr_1.cE)('meta', `
 transition: color .3s var(--bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--meta-text-color);
 `)]), (0, cssr_1.cB)('timeline-item-timeline', `
 width: calc(var(--icon-size) + 12px);
 position: absolute;
 top: calc(var(--title-font-size) * ${lineHeight} / 2 - var(--icon-size) / 2);
 height: 100%;
 `, [(0, cssr_1.cE)('circle', `
 border: var(--circle-border);
 transition:
 background-color .3s var(--bezier),
 border-color .3s var(--bezier);
 width: var(--icon-size);
 height: var(--icon-size);
 border-radius: var(--icon-size);
 box-sizing: border-box;
 `), (0, cssr_1.cE)('icon', `
 color: var(--icon-color);
 font-size: var(--icon-size);
 height: var(--icon-size);
 width: var(--icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `), (0, cssr_1.cE)('line', `
 transition: background-color .3s var(--bezier);
 position: absolute;
 top: var(--icon-size);
 left: calc(var(--icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--line-color);
 `)])])]);