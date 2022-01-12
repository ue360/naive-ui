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

const fade_in_scale_up_cssr_1 = __importDefault(require("../../../_styles/transitions/fade-in-scale-up.cssr")); // vars:
// --icon-color
// --icon-color-disabled
// --bezier
// --border-radius
// --item-color-hover
// --item-font-size
// --item-height
// --item-opacity-disabled
// --item-text-color
// --item-text-color-active
// --item-width
// --panel-action-padding
// --panel-box-shadow
// --panel-color
// --panel-divider-color
// --item-border-radius


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('time-picker', `
 z-index: auto;
 position: relative;
 `, [(0, cssr_1.cB)('time-picker-icon', `
 color: var(--icon-color);
 transition: color .3s var(--bezier);
 `), (0, cssr_1.cM)('disabled', [(0, cssr_1.cB)('time-picker-icon', {
  color: 'var(--icon-color-disabled)'
})])]), (0, cssr_1.cB)('time-picker-panel', `
 transition:
 box-shadow .3s var(--bezier),
 background-color .3s var(--bezier);
 outline: none;
 font-size: var(--item-font-size);
 border-radius: var(--border-radius);
 margin: 4px 0;
 min-width: 104px;
 overflow: hidden;
 background-color: var(--panel-color);
 box-shadow: var(--panel-box-shadow);
 `, [(0, fade_in_scale_up_cssr_1.default)(), (0, cssr_1.cB)('time-picker-actions', `
 padding: var(--panel-action-padding);
 align-items: center;
 display: flex;
 justify-content: space-evenly;
 `), (0, cssr_1.cB)('time-picker-cols', `
 height: calc(var(--item-height) * 6);
 display: flex;
 position: relative;
 transition: border-color .3s var(--bezier);
 border-bottom: 1px solid var(--panel-divider-color);
 `), (0, cssr_1.cB)('time-picker-col', `
 flex-grow: 1;
 min-width: var(--item-width);
 height: calc(var(--item-height) * 6);
 flex-direction: column;
 transition: box-shadow .3s var(--bezier);
 `, [(0, cssr_1.cM)('transition-disabled', [(0, cssr_1.cE)('item', 'transition: none;', [(0, cssr_1.c)('&::before', 'transition: none;')])]), (0, cssr_1.cE)('padding', {
  height: 'calc(var(--item-height) * 5)'
}), (0, cssr_1.c)('&:first-child', 'min-width: calc(var(--item-width) + 4px);', [(0, cssr_1.cE)('item', [(0, cssr_1.c)('&::before', 'left: 4px;')])]), (0, cssr_1.cE)('item', `
 cursor: pointer;
 height: var(--item-height);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: 
 color .3s var(--bezier),
 background-color .3s var(--bezier),
 opacity .3s var(--bezier),
 text-decoration-color .3s var(--bezier);
 background: #0000;
 text-decoration-color: #0000;
 color: var(--item-text-color);
 z-index: 0;
 box-sizing: border-box;
 padding-top: 4px;
 position: relative;
 `, [(0, cssr_1.c)('&::before', `
 content: "";
 transition: background-color .3s var(--bezier);
 z-index: -1;
 position: absolute;
 left: 0;
 right: 4px;
 top: 4px;
 bottom: 0;
 border-radius: var(--item-border-radius);
 `), (0, cssr_1.cNotM)('disabled', [(0, cssr_1.c)('&:hover::before', {
  backgroundColor: 'var(--item-color-hover)'
})]), (0, cssr_1.cM)('active', `
 color: var(--item-text-color-active);
 `, [(0, cssr_1.c)('&::before', `
 background-color: var(--item-color-hover);
 `)]), (0, cssr_1.cM)('disabled', `
 opacity: var(--item-opacity-disabled);
 cursor: not-allowed;
 `)]), (0, cssr_1.cM)('invalid', [(0, cssr_1.cE)('item', [(0, cssr_1.cM)('active', `
 text-decoration: line-through;
 text-decoration-color: var(--item-text-color-active);
 `)])])])])]);