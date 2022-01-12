"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const fade_in_scale_up_cssr_1 = __importDefault(require("../../../_styles/transitions/fade-in-scale-up.cssr"));

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --button-border-radius
// --button-box-shadow
// --button-color
// --button-width
// --button-width-pressed
// --height
// --offset
// --rail-border-radius
// --rail-color
// --rail-color-active
// --rail-height
// --rail-width
// --width
// --box-shadow-focus
// --loading-color
// --text-color


exports.default = (0, cssr_1.cB)('switch', `
 height: var(--height);
 min-width: var(--width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`, [(0, cssr_1.cE)('children-placeholder', `
 height: var(--rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `), (0, cssr_1.cE)('rail-placeholder', `
 display: flex;
 flex-wrap: none;
 `), (0, cssr_1.cE)('button-placeholder', `
 width: calc(1.75 * var(--rail-height));
 height: var(--rail-height);
 `), (0, cssr_1.cB)('base-loading', `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--button-width) - 4px);
 color: var(--loading-color);
 transition: color .3s var(--bezier);
 `, [(0, fade_in_scale_up_cssr_1.default)({
  originalTransform: 'translateX(-50%) translateY(-50%)'
})]), (0, cssr_1.cE)('checked, unchecked', `
 transition: color .3s var(--bezier);
 color: var(--text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `), (0, cssr_1.cE)('checked', `
 right: 0;
 padding-right: calc(1.25 * var(--rail-height) - var(--offset));
 `), (0, cssr_1.cE)('unchecked', `
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--rail-height) - var(--offset));
 `), (0, cssr_1.c)('&:focus', [(0, cssr_1.cE)('rail', `
 box-shadow: var(--box-shadow-focus);
 `)]), (0, cssr_1.cM)('round', [(0, cssr_1.cE)('rail', {
  borderRadius: 'calc(var(--rail-height) / 2)'
}, [(0, cssr_1.cE)('button', {
  borderRadius: 'calc(var(--button-height) / 2)'
})])]), (0, cssr_1.cNotM)('disabled', [(0, cssr_1.cM)('pressed', [(0, cssr_1.cE)('rail', [(0, cssr_1.cE)('button', {
  maxWidth: 'var(--button-width-pressed)'
})])]), (0, cssr_1.cE)('rail', [(0, cssr_1.c)('&:active', [(0, cssr_1.cE)('button', {
  maxWidth: 'var(--button-width-pressed)'
})])]), (0, cssr_1.cM)('active', [(0, cssr_1.cM)('pressed', [(0, cssr_1.cE)('rail', [(0, cssr_1.cE)('button', {
  left: 'calc(100% - var(--offset) - var(--button-width-pressed))'
})])]), (0, cssr_1.cE)('rail', [(0, cssr_1.c)('&:active', [(0, cssr_1.cE)('button', {
  left: 'calc(100% - var(--offset) - var(--button-width-pressed))'
})])])])]), (0, cssr_1.cM)('active', [(0, cssr_1.cE)('rail', [(0, cssr_1.cE)('button', {
  left: 'calc(100% - (var(--rail-height) + var(--button-width)) / 2)'
})])]), (0, cssr_1.cE)('rail', `
 overflow: hidden;
 height: var(--rail-height);
 min-width: var(--rail-width);
 border-radius: var(--rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background .3s var(--bezier),
 box-shadow .3s var(--bezier);
 background-color: var(--rail-color);
 `, [(0, cssr_1.cE)('button', `
 top: var(--offset);
 left: var(--offset);
 height: var(--button-width);
 width: var(--button-width-pressed);
 max-width: var(--button-width);
 border-radius: var(--button-border-radius);
 background-color: var(--button-color);
 box-shadow: var(--button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--bezier),
 left .3s var(--bezier),
 opacity .3s var(--bezier),
 max-width .3s var(--bezier),
 box-shadow .3s var(--bezier);
 `)]), (0, cssr_1.cM)('active', [(0, cssr_1.cE)('rail', {
  backgroundColor: 'var(--rail-color-active)'
})]), (0, cssr_1.cM)('disabled', [(0, cssr_1.cE)('rail', `
 cursor: not-allowed;
 opacity: .5;
 `)])]);