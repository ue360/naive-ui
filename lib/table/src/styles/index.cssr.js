"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --td-color
// --td-color-modal
// --td-color-popover
// --td-text-color
// --border-color
// --border-color-modal
// --border-color-popover
// --border-radius
// --font-size
// --th-color
// --th-color-modal
// --th-color-popover
// --th-font-weight
// --th-text-color
// --line-height
// --td-padding
// --th-padding


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('table', `
 font-size: var(--font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--line-height);
 width: 100%;
 border-radius: var(--border-radius) var(--border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--td-color);
 transition:
 background-color .3s var(--bezier),
 border-color .3s var(--bezier),
 color .3s var(--bezier);
 --merged-border-color: var(--border-color);
 `, [(0, cssr_1.c)('th', `
 white-space: nowrap;
 transition:
 background-color .3s var(--bezier),
 border-color .3s var(--bezier),
 color .3s var(--bezier);
 text-align: inherit;
 padding: var(--th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: none;
 font-weight: var(--th-font-weight);
 color: var(--th-text-color);
 background-color: var(--th-color);
 border-color: var(--merged-border-color);
 border-bottom: 1px solid var(--merged-border-color);
 border-right: 1px solid var(--merged-border-color);
 `, [(0, cssr_1.c)('&:last-child', `
 border-right: none;
 `)]), (0, cssr_1.c)('td', `
 transition:
 background-color .3s var(--bezier),
 border-color .3s var(--bezier),
 color .3s var(--bezier);
 padding: var(--td-padding);
 color: var(--td-text-color);
 background-color: var(--td-color);
 border-right: 1px solid var(--merged-border-color);
 border-bottom: 1px solid var(--merged-border-color);
 `, [(0, cssr_1.c)('&:last-child', `
 border-right: none;
 `)]), (0, cssr_1.cM)('bordered', `
 border: 1px solid var(--merged-border-color);
 border-radius: var(--border-radius);
 `, [(0, cssr_1.c)('tr', [(0, cssr_1.c)('&:last-child', [(0, cssr_1.c)('td', `
 border-bottom: none;
 `)])])]), (0, cssr_1.cM)('single-line', [(0, cssr_1.c)('th', `
 border-right: none;
 `), (0, cssr_1.c)('td', `
 border-right: none;
 `)]), (0, cssr_1.cM)('single-column', [(0, cssr_1.c)('tr', [(0, cssr_1.c)('&:not(:last-child)', [(0, cssr_1.c)('td', `
 border-bottom: none;
 `)])])]), (0, cssr_1.cM)('striped', [(0, cssr_1.c)('tr:nth-of-type(even)', [(0, cssr_1.c)('td', 'background-color: var(--td-color-striped)')])]), (0, cssr_1.cNotM)('bottom-bordered', [(0, cssr_1.c)('tr', [(0, cssr_1.c)('&:last-child', [(0, cssr_1.c)('td', `
 border-bottom: none;
 `)])])])]), (0, cssr_1.insideModal)((0, cssr_1.cB)('table', `
 background-color: var(--td-color-modal);
 --merged-border-color: var(--border-color-modal);
 `, [(0, cssr_1.c)('th', `
 background-color: var(--th-color-modal);
 `), (0, cssr_1.c)('td', `
 background-color: var(--td-color-modal);
 `)])), (0, cssr_1.insidePopover)((0, cssr_1.cB)('table', `
 background-color: var(--td-color-popover);
 --merged-border-color: var(--border-color-popover);
 `, [(0, cssr_1.c)('th', `
 background-color: var(--th-color-popover);
 `), (0, cssr_1.c)('td', `
 background-color: var(--td-color-popover);
 `)]))]);