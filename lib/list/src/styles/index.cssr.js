"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --font-size
// --bezier
// --text-color
// --color
// --border-radius
// --border-color
// --border-color-modal
// --border-color-popover
// --color-modal
// --color-popover


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('list', `
 --merged-border-color: var(--border-color);
 --merged-color: var(--color)
 font-size: var(--font-size);
 transition:
 background-color .3s var(--bezier),
 color .3s var(--bezier),
 border-color .3s var(--bezier);
 padding: 0;
 list-style-type: none;
 color: var(--text-color);
 background-color: var(--merged-color);
 `, [(0, cssr_1.cM)('bordered', `
 border-radius: var(--border-radius);
 border: 1px solid var(--merged-border-color);
 `, [(0, cssr_1.cB)('list-item', `
 padding: 12px 20px;
 `, [(0, cssr_1.c)('&:not(:last-child)', `
 border-bottom: 1px solid var(--merged-border-color);
 `)]), (0, cssr_1.cE)('header, footer', `
 padding: 12px 20px;
 `, [(0, cssr_1.c)('&:not(:last-child)', `
 border-bottom: 1px solid var(--merged-border-color);
 `)])]), (0, cssr_1.cE)('header, footer', `
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--bezier);
 `, [(0, cssr_1.c)('&:not(:last-child)', `
 border-bottom: 1px solid var(--merged-border-color);
 `)]), (0, cssr_1.cB)('list-item', `
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: border-color .3s var(--bezier);
 `, [(0, cssr_1.cE)('prefix', `
 margin-right: 20px;
 flex: 0;
 `), (0, cssr_1.cE)('suffix', `
 margin-left: 20px;
 flex: 0;
 `), (0, cssr_1.cE)('main', `
 flex: 1;
 `), (0, cssr_1.c)('&:not(:last-child)', `
 border-bottom: 1px solid var(--merged-border-color);
 `)])]), (0, cssr_1.insideModal)((0, cssr_1.cB)('list', `
 --merged-color: var(--color-modal);
 --merged-border-color: var(--border-color-modal);
 `)), (0, cssr_1.insidePopover)((0, cssr_1.cB)('list', `
 --merged-color: var(--color-popover);
 --merged-border-color: var(--border-color-popover);
 `))]);