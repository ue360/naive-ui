"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --border-color
// --border-color-modal
// --border-color-popover
// --border-radius
// --text-color
// --title-font-weight
// --title-font-size
// --title-text-color
// --day-text-color
// --font-size
// --line-height
// --date-color-current
// --cell-color
// --cell-color-hover
// --cell-color-hover-modal
// --cell-color-hover-popover
// --bar-color


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('calendar', `
 line-height: var(--line-height);
 font-size: var(--font-size);
 color: var(--text-color);
 height: 720px;
 display: flex;
 flex-direction: column;
 `, [(0, cssr_1.cB)('calendar-prev-btn', `
 cursor: pointer;
 `), (0, cssr_1.cB)('calendar-next-btn', `
 cursor: pointer;
 `), (0, cssr_1.cB)('calendar-header', `
 display: flex;
 align-items: center;
 line-height: 1;
 font-size: var(--title-font-size);
 padding: 0 0 18px 0;
 justify-content: space-between;
 `, [(0, cssr_1.cE)('title', `
 color: var(--title-text-color);
 font-weight: var(--title-font-weight);
 transition: color .3s var(--bezier);
 `), (0, cssr_1.cE)('extra', `
 display: flex;
 align-items: center;
 `)]), (0, cssr_1.cB)('calendar-dates', `
 display: grid;
 grid-template-columns: repeat(7, minmax(0, 1fr));
 grid-auto-rows: 1fr;
 border-radius: var(--border-radius);
 flex: 1;
 border-top: 1px solid;
 border-left: 1px solid;
 border-color: var(--border-color);
 transition: border-color .3s var(--bezier);
 `), (0, cssr_1.cB)('calendar-cell', `
 box-sizing: border-box;
 padding: 10px;
 border-right: 1px solid;
 border-bottom: 1px solid;
 border-color: var(--border-color);
 cursor: pointer;
 position: relative;
 transition:
 color .3s var(--bezier),
 border-color .3s var(--bezier),
 background-color .3s var(--bezier);
 `, [(0, cssr_1.c)('&:nth-child(7)', `
 border-top-right-radius: var(--border-radius);
 `), (0, cssr_1.c)('&:nth-last-child(7)', `
 border-bottom-left-radius: var(--border-radius);
 `), (0, cssr_1.c)('&:last-child', `
 border-bottom-right-radius: var(--border-radius);
 `), (0, cssr_1.c)('&:hover', `
 background-color: var(--cell-color-hover);
 `), (0, cssr_1.cE)('bar', `
 position: absolute;
 left: 0;
 right: 0;
 bottom: -1px;
 height: 3px;
 background-color: #0000;
 transition: background-color .3s var(--bezier);
 `), (0, cssr_1.cM)('selected', [(0, cssr_1.cE)('bar', `
 background-color: var(--bar-color);
 `)]), (0, cssr_1.cB)('calendar-date', `
 transition:
 color .3s var(--bezier),
 border-color .3s var(--bezier),
 background-color .3s var(--bezier);
 color: var(--text-color);
 `, [(0, cssr_1.cE)('date', `
 color: var(--text-color);
 `)]), (0, cssr_1.cM)('disabled', 'color: var(--day-text-color);', [(0, cssr_1.cB)('calendar-date', [(0, cssr_1.cE)('date', `
 color: var(--day-text-color);
 `)])]), (0, cssr_1.cM)('current', [(0, cssr_1.cB)('calendar-date', [(0, cssr_1.cE)('date', `
 color: var(--date-text-color-current);
 background-color: var(--date-color-current);
 `)])]), (0, cssr_1.cB)('calendar-date', `
 position: relative;
 line-height: 1;
 display: flex;
 align-items: center;
 height: 1em;
 justify-content: space-between;
 padding-bottom: .75em;
 `, [(0, cssr_1.cE)('date', `
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-left: -0.4em;
 width: 1.8em;
 height: 1.8em;
 transition:
 color .3s var(--bezier),
 background-color .3s var(--bezier);
 `), (0, cssr_1.cE)('day', `
 color: var(--day-text-color);
 transition: color .3s var(--bezier);
 `)])])]), (0, cssr_1.insideModal)((0, cssr_1.cB)('calendar', [(0, cssr_1.cB)('calendar-dates', `
 border-color: var(--border-color-modal);
 `), (0, cssr_1.cB)('calendar-cell', `
 border-color: var(--border-color-modal);
 `, [(0, cssr_1.c)('&:hover', `
 background-color: var(--cell-color-hover-modal);
 `)])])), (0, cssr_1.insidePopover)((0, cssr_1.cB)('calendar', [(0, cssr_1.cB)('calendar-dates', `
 border-color: var(--border-color-popover);
 `), (0, cssr_1.cB)('calendar-cell', `
 border-color: var(--border-color-popover);
 `, [(0, cssr_1.c)('&:hover', `
 background-color: var(--cell-color-hover-popover);
 `)])]))]);