"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../../_utils/cssr");

const fade_in_scale_up_cssr_1 = __importDefault(require("../../../../_styles/transitions/fade-in-scale-up.cssr")); // --loading-color
// --loading-size


exports.default = (0, cssr_1.cB)('base-select-menu', `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--border-radius);
 transition:
 background-color .3s var(--bezier),
 box-shadow .3s var(--bezier);
 background-color: var(--color);
`, [(0, cssr_1.cM)('multiple', [(0, cssr_1.cB)('base-select-option', `
 padding-right: 28px;
 `)]), (0, cssr_1.cB)('scrollbar', `
 max-height: var(--height);
 `), (0, cssr_1.cB)('virtual-list', `
 max-height: var(--height);
 `), (0, cssr_1.cB)('base-select-option', `
 min-height: var(--option-height);
 font-size: var(--option-font-size);
 display: flex;
 align-items: center;
 `, [(0, cssr_1.cE)('content', `
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), (0, cssr_1.cB)('base-select-group-header', `
 min-height: var(--option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), (0, cssr_1.cB)('base-select-menu-option-wrapper', `
 position: relative;
 width: 100%;
 `), (0, cssr_1.cE)('loading, empty', `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), (0, cssr_1.cE)('loading', `
 color: var(--loading-color);
 font-size: var(--loading-size);
 `), (0, cssr_1.cE)('action', `
 padding: 8px var(--option-padding-left);
 font-size: var(--option-font-size);
 transition: 
 color .3s var(--bezier);
 border-color .3s var(--bezier);
 border-top: 1px solid var(--action-divider-color);
 color: var(--action-text-color);
 `), (0, cssr_1.cB)('base-select-group-header', `
 position: relative;
 cursor: default;
 padding: var(--option-padding);
 color: var(--group-header-text-color);
 `), (0, cssr_1.cB)('base-select-option', `
 cursor: pointer;
 position: relative;
 padding: var(--option-padding);
 transition:
 background-color .3s var(--bezier),
 color .3s var(--bezier),
 opacity .3s var(--bezier);
 box-sizing: border-box;
 color: var(--option-text-color);
 opacity: 1;
 `, [(0, cssr_1.c)('&:active', `
 color: var(--option-text-color-pressed);
 `), (0, cssr_1.cM)('grouped', `
 padding-left: calc(var(--option-padding-left) * 1.5);
 `), (0, cssr_1.cM)('pending', `
 background-color: var(--option-color-pending);
 `), (0, cssr_1.cM)('selected', `
 color: var(--option-text-color-active);
 background-color: var(--option-color-active);
 `), (0, cssr_1.cM)('disabled', `
 cursor: not-allowed;
 `, [(0, cssr_1.cNotM)('selected', `
 color: var(--option-text-color-disabled);
 `), (0, cssr_1.cM)('selected', `
 opacity: var(--option-opacity-disabled);
 `)]), (0, cssr_1.cE)('check', `
 font-size: 16px;
 position: absolute;
 right: 8px;
 top: calc(50% - 7px);
 color: var(--option-check-color);
 transition: color .3s var(--bezier);
 `, [(0, fade_in_scale_up_cssr_1.default)({
  enterScale: '0.5'
})])])]);