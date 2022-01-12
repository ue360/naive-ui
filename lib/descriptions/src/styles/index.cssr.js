"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --th-padding
// --td-padding
// --font-size
// --bezier
// --th-font-weight
// --line-height
// --th-text-color
// --td-text-color
// --th-color
// --th-color-modal
// --th-color-popover
// --td-color
// --td-color-modal
// --td-color-popover
// --border-radius
// --border-color
// --border-color-modal
// --border-color-popover


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('descriptions', {
  fontSize: 'var(--font-size)'
}, [(0, cssr_1.cB)('descriptions-separator', `
 display: inline-block;
 margin: 0 8px 0 2px;
 `), (0, cssr_1.cB)('descriptions-table-wrapper', [(0, cssr_1.cB)('descriptions-table', [(0, cssr_1.cB)('descriptions-table-row', [(0, cssr_1.cB)('descriptions-table-header', {
  padding: 'var(--th-padding)'
}), (0, cssr_1.cB)('descriptions-table-content', {
  padding: 'var(--td-padding)'
})])])]), (0, cssr_1.cNotM)('bordered', [(0, cssr_1.cB)('descriptions-table-wrapper', [(0, cssr_1.cB)('descriptions-table', [(0, cssr_1.cB)('descriptions-table-row', [(0, cssr_1.c)('&:last-child', [(0, cssr_1.cB)('descriptions-table-content', {
  paddingBottom: 0
})])])])])]), (0, cssr_1.cM)('left-label-placement', [(0, cssr_1.cB)('descriptions-table-content', [(0, cssr_1.c)('> *', {
  verticalAlign: 'top'
})])]), (0, cssr_1.cM)('left-label-align', [(0, cssr_1.c)('th', {
  textAlign: 'left'
})]), (0, cssr_1.cM)('center-label-align', [(0, cssr_1.c)('th', {
  textAlign: 'center'
})]), (0, cssr_1.cM)('right-label-align', [(0, cssr_1.c)('th', {
  textAlign: 'right'
})]), (0, cssr_1.cM)('bordered', [(0, cssr_1.cB)('descriptions-table-wrapper', `
 border-radius: var(--border-radius);
 overflow: hidden;
 background: var(--merged-td-color);
 border: 1px solid var(--merged-border-color);
 `, [(0, cssr_1.cB)('descriptions-table', [(0, cssr_1.cB)('descriptions-table-row', [(0, cssr_1.c)('&:not(:last-child)', [(0, cssr_1.cB)('descriptions-table-content', {
  borderBottom: '1px solid var(--merged-border-color)'
}), (0, cssr_1.cB)('descriptions-table-header', {
  borderBottom: '1px solid var(--merged-border-color)'
})]), (0, cssr_1.cB)('descriptions-table-header', `
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--merged-th-color);
 `, [(0, cssr_1.c)('&:not(:last-child)', {
  borderRight: '1px solid var(--merged-border-color)'
})]), (0, cssr_1.cB)('descriptions-table-content', [(0, cssr_1.c)('&:not(:last-child)', {
  borderRight: '1px solid var(--merged-border-color)'
})])])])])]), (0, cssr_1.cB)('descriptions-header', `
 font-weight: var(--th-font-weight);
 font-size: 18px;
 transition: color .3s var(--bezier);
 line-height: var(--line-height);
 margin-bottom: 16px;
 color: var(--th-text-color);
 `), (0, cssr_1.cB)('descriptions-table-wrapper', `
 transition:
 background-color .3s var(--bezier),
 border-color .3s var(--bezier);
 `, [(0, cssr_1.cB)('descriptions-table', `
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `, [(0, cssr_1.cB)('descriptions-table-row', `
 box-sizing: border-box;
 transition: border-color .3s var(--bezier);
 `, [(0, cssr_1.cB)('descriptions-table-header', `
 font-weight: var(--th-font-weight);
 line-height: var(--line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--th-text-color);
 transition:
 color .3s var(--bezier),
 background-color .3s var(--bezier),
 border-color .3s var(--bezier);
 `), (0, cssr_1.cB)('descriptions-table-content', `
 vertical-align: top;
 line-height: var(--line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--td-text-color);
 transition:
 color .3s var(--bezier),
 background-color .3s var(--bezier),
 border-color .3s var(--bezier);
 `, [(0, cssr_1.cE)('content', `
 transition: color .3s var(--bezier);
 display: inline-block;
 color: var(--td-text-color);
 `)]), (0, cssr_1.cE)('label', `
 font-weight: var(--th-font-weight);
 transition: color .3s var(--bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--th-text-color);
 `)])])])]), (0, cssr_1.cB)('descriptions-table-wrapper', `
 --merged-th-color: var(--th-color);
 --merged-td-color: var(--td-color);
 --merged-border-color: var(--border-color);
 `), (0, cssr_1.insideModal)((0, cssr_1.cB)('descriptions-table-wrapper', `
 --merged-th-color: var(--th-color-modal);
 --merged-td-color: var(--td-color-modal);
 --merged-border-color: var(--border-color-modal);
 `)), (0, cssr_1.insidePopover)((0, cssr_1.cB)('descriptions-table-wrapper', `
 --merged-th-color: var(--th-color-popover);
 --merged-td-color: var(--td-color-popover);
 --merged-border-color: var(--border-color-popover);
 `))]);