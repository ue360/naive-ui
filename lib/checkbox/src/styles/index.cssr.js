"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr");

const icon_switch_cssr_1 = __importDefault(require("../../../_styles/transitions/icon-switch.cssr")); // vars:
// --bezier
// --size
// --border
// --border-focus
// --border-checked
// --border-disabled
// --border-disabled-checked
// --box-shadow-focus
// --color
// --color-checked
// --color-table-header
// --color-table-header-modal
// --color-disabled
// --color-disabled-checked
// --text-color
// --text-color-disabled
// --check-mark-color
// --check-mark-color-disabled
// --check-mark-color-disabled-checked
// --border-radius
// --font-size
// --label-padding


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('checkbox', `
 line-height: 1;
 font-size: var(--font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 align-items: center;
 white-space: nowrap;
 vertical-align: middle;
 --merged-color-table-header: var(--color-table-header);
 `, [(0, cssr_1.c)('&:hover', [(0, cssr_1.cB)('checkbox-box', [(0, cssr_1.cE)('border', {
  border: 'var(--border-checked)'
})])]), (0, cssr_1.c)('&:focus:not(:active)', [(0, cssr_1.cB)('checkbox-box', [(0, cssr_1.cE)('border', {
  border: 'var(--border-focus)',
  boxShadow: 'var(--box-shadow-focus)'
})])]), (0, cssr_1.cM)('table-header', [(0, cssr_1.cB)('checkbox-box', {
  backgroundColor: 'var(--merged-color-table-header)'
})]), (0, cssr_1.cM)('checked', [(0, cssr_1.cB)('checkbox-box', {
  backgroundColor: 'var(--color-checked)'
}, [(0, cssr_1.cB)('checkbox-icon', [// if not set width to 100%, safari & old chrome won't display the icon
(0, cssr_1.c)('.check-icon', `
 width: 100%;
 opacity: 1;
 transform: scale(1);
 `)])])]), (0, cssr_1.cM)('indeterminate', [(0, cssr_1.cB)('checkbox-box', [(0, cssr_1.cB)('checkbox-icon', [(0, cssr_1.c)('.check-icon', `
 opacity: 0;
 transform: scale(.5);
 `), (0, cssr_1.c)('.line-icon', `
 opacity: 1;
 transform: scale(1);
 `)])])]), (0, cssr_1.cM)('checked, indeterminate', [(0, cssr_1.c)('&:focus:not(:active)', [(0, cssr_1.cB)('checkbox-box', [(0, cssr_1.cE)('border', {
  border: 'var(--border-checked)',
  boxShadow: 'var(--box-shadow-focus)'
})])]), (0, cssr_1.cB)('checkbox-box', `
 background-color: var(--color-checked);
 border-left: 0;
 border-top: 0;
 `, [(0, cssr_1.cE)('border', {
  border: 'var(--border-checked)'
})])]), (0, cssr_1.cM)('disabled', {
  cursor: 'not-allowed'
}, [(0, cssr_1.cM)('checked', [(0, cssr_1.cB)('checkbox-box', `
 background-color: var(--color-disabled-checked);
 `, [(0, cssr_1.cE)('border', {
  border: 'var(--border-disabled-checked)'
}), (0, cssr_1.cB)('checkbox-icon', [(0, cssr_1.c)('.check-icon, .line-icon', {
  fill: 'var(--check-mark-color-disabled-checked)'
})])])]), (0, cssr_1.cB)('checkbox-box', `
 background-color: var(--color-disabled);
 `, [(0, cssr_1.cE)('border', {
  border: 'var(--border-disabled)'
}), (0, cssr_1.cB)('checkbox-icon', [(0, cssr_1.c)('.check-icon, .line-icon', {
  fill: 'var(--check-mark-color-disabled)'
})])]), (0, cssr_1.cE)('label', {
  color: 'var(--text-color-disabled)'
})]), (0, cssr_1.cB)('checkbox-box', `
 height: var(--size);
 width: var(--size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--border-radius);
 background-color: var(--color);
 position: relative;
 transition:
 background-color 0.3s var(--bezier);
 `, [(0, cssr_1.cE)('border', `
 transition:
 border-color .3s var(--bezier),
 box-shadow .3s var(--bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--border);
 `), (0, cssr_1.cB)('checkbox-icon', `
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `, [(0, cssr_1.c)('.check-icon, .line-icon', `
 fill: var(--check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--bezier),
 transform 0.3s var(--bezier),
 opacity 0.3s var(--bezier),
 border-color 0.3s var(--bezier);
 `), (0, icon_switch_cssr_1.default)({
  left: '1px',
  top: '1px'
})])]), (0, cssr_1.cE)('label', `
 color: var(--text-color);
 transition: color .3s var(--bezier);
 user-select: none;
 padding: var(--label-padding);
 `, [(0, cssr_1.c)('&:empty', {
  display: 'none'
})])]), // modal table header checkbox
(0, cssr_1.insideModal)((0, cssr_1.cB)('checkbox', `
 --merged-color-table-header: var(--color-table-header-modal);
 `)), // popover table header checkbox
(0, cssr_1.insidePopover)((0, cssr_1.cB)('checkbox', `
 --merged-color-table-header: var(--color-table-header-popover);
 `))]);