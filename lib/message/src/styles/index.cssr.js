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

const icon_switch_cssr_1 = __importDefault(require("../../../_styles/transitions/icon-switch.cssr"));

const fade_in_height_expand_cssr_1 = __importDefault(require("../../../_styles/transitions/fade-in-height-expand.cssr")); // vars:
// --margin
// --bezier
// --padding
// --max-width
// --font-size
// --icon-margin
// --icon-size
// --close-size
// --close-margin
// --text-color
// --color
// --box-shadow
// --icon-color-info
// --icon-color-success
// --icon-color-warning
// --icon-color-error
// --icon-color-loading
// --close-color
// --close-color-pressed
// --close-color-hover
// --border-radius


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('message-wrapper', `
 margin: var(--margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [(0, fade_in_height_expand_cssr_1.default)({
  overflow: 'visible',
  originalTransition: 'transform .3s var(--bezier)',
  enterToProps: {
    transform: 'scale(1)'
  },
  leaveToProps: {
    transform: 'scale(0.85)'
  }
})]), (0, cssr_1.cB)('message', `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--bezier),
 box-shadow .3s var(--bezier),
 background-color .3s var(--bezier),
 opacity .3s var(--bezier),
 transform .3s var(--bezier),
 margin-bottom .3s var(--bezier);
 padding: var(--padding);
 border-radius: var(--border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--max-width);
 color: var(--text-color);
 background-color: var(--color);
 box-shadow: var(--box-shadow);
 `, [(0, cssr_1.cE)('content', `
 display: inline-block;
 line-height: var(--line-height);
 font-size: var(--font-size);
 `), (0, cssr_1.cE)('icon', `
 position: relative;
 margin: var(--icon-margin);
 height: var(--icon-size);
 width: var(--icon-size);
 font-size: var(--icon-size);
 flex-shrink: 0;
 `, [['info', 'success', 'warning', 'error', 'loading'].map(type => (0, cssr_1.cM)(`${type}-type`, [(0, cssr_1.c)('> *', `
 color: var(--icon-color-${type});
 transition: color .3s var(--bezier);
 `)])), (0, cssr_1.c)('> *', `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [(0, icon_switch_cssr_1.default)()])]), (0, cssr_1.cE)('close', `
 font-size: var(--close-size);
 margin: var(--close-margin);
 transition: color .3s var(--bezier);
 flex-shrink: 0;
 `, [(0, cssr_1.c)('&:hover', `
 color: var(--close-color-hover);
 `), (0, cssr_1.c)('&:active', `
 color: var(--close-color-pressed);
 `)])]), (0, cssr_1.cB)('message-container', `
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `, [(0, cssr_1.cM)('top', `
 top: 12px;
 left: 0;
 right: 0;
 `), (0, cssr_1.cM)('top-left', `
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `), (0, cssr_1.cM)('top-right', `
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `), (0, cssr_1.cM)('bottom', `
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `), (0, cssr_1.cM)('bottom-left', `
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `), (0, cssr_1.cM)('bottom-right', `
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]);