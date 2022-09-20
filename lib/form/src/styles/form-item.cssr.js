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

const fade_down_cssr_1 = __importDefault(require("../../../_styles/transitions/fade-down.cssr")); // vars:
// --line-height
// --blank-height
// --feedback-padding
// --feedback-font-size
// --label-font-size-left
// --label-font-size-top
// --label-height
// --label-padding
// --asterisk-color
// --label-text-color
// --bezier
// --feedback-text-color
// --feedback-text-color-warning
// --feedback-text-color-error
// --label-text-align
// --label-padding


exports.default = (0, cssr_1.cB)('form-item', {
  display: 'grid',
  lineHeight: 'var(--line-height)'
}, [(0, cssr_1.cB)('form-item-label', `
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--label-text-align);
 font-size: var(--label-font-size);
 height: var(--label-height);
 padding: var(--label-padding);
 color: var(--label-text-color);
 transition: color .3s var(--bezier);
 box-sizing: border-box;
 `, [(0, cssr_1.cE)('asterisk', `
 color: var(--asterisk-color);
 transition: color .3s var(--bezier);
 `)]), (0, cssr_1.cB)('form-item-blank', {
  gridArea: 'blank',
  minHeight: 'var(--blank-height)'
}), (0, cssr_1.cM)('left-labelled', `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 `, [(0, cssr_1.cB)('form-item-label', `
 height: var(--blank-height);
 line-height: var(--blank-height);
 box-sizing: border-box;
 white-space: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `)]), (0, cssr_1.cM)('top-labelled', `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: var(--label-height) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [(0, cssr_1.cM)('no-label', `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), (0, cssr_1.cB)('form-item-label', {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'var(--label-text-align)'
})]), (0, cssr_1.cB)('form-item-blank', `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), (0, cssr_1.cB)('form-item-feedback-wrapper', `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--feedback-height);
 font-size: var(--feedback-font-size);
 padding: var(--feedback-padding);
 line-height: 1.25;
 transform-origin: top left;
 `, [(0, cssr_1.cB)('form-item-feedback', {
  transition: 'color .3s var(--bezier)',
  color: 'var(--feedback-text-color)'
}, [(0, cssr_1.cM)('warning', {
  color: 'var(--feedback-text-color-warning)'
}), (0, cssr_1.cM)('error', {
  color: 'var(--feedback-text-color-error)'
}), (0, fade_down_cssr_1.default)({
  fromOffset: '-3px',
  enterDuration: '.3s',
  leaveDuration: '.2s'
})])])]);