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

const fade_in_height_expand_cssr_1 = __importDefault(require("../../../_styles/transitions/fade-in-height-expand.cssr")); // vars:
// --bezier
// --color
// --close-color
// --close-color-hover
// --close-color-pressed
// --icon-color
// --border
// --title-text-color
// --content-text-color
// --line-height
// --border-radius
// --font-size
// --title-font-weight
// --icon-size
// --icon-margin
// --close-size
// --close-margin
// --padding
// --icon-margin-left
// --icon-margin-right


exports.default = (0, cssr_1.cB)('alert', `
 line-height: var(--line-height);
 border-radius: var(--border-radius);
 position: relative;
 transition: background-color .3s var(--bezier);
 background-color: var(--color);
 text-align: start;
`, [(0, cssr_1.cE)('icon', {
  color: 'var(--icon-color)'
}), (0, cssr_1.cB)('alert-body', {
  border: 'var(--border)',
  padding: 'var(--padding)'
}, [(0, cssr_1.cE)('title', {
  color: 'var(--title-text-color)'
}), (0, cssr_1.cE)('content', {
  color: 'var(--content-text-color)'
})]), (0, fade_in_height_expand_cssr_1.default)({
  originalTransition: 'transform .3s var(--bezier)',
  enterToProps: {
    transform: 'scale(1)'
  },
  leaveToProps: {
    transform: 'scale(0.9)'
  }
}), (0, cssr_1.cE)('icon', `
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--icon-size);
 height: var(--icon-size);
 font-size: var(--icon-size);
 margin: var(--icon-margin);
 `), (0, cssr_1.cE)('close', `
 transition: color .3s var(--bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--close-margin);
 font-size: var(--close-size);
 `), (0, cssr_1.cM)('show-icon', [(0, cssr_1.cB)('alert-body', {
  paddingLeft: 'calc(var(--icon-margin-left) + var(--icon-size) + var(--icon-margin-right))'
})]), (0, cssr_1.cB)('alert-body', `
 border-radius: var(--border-radius);
 transition: border-color .3s var(--bezier);
 `, [(0, cssr_1.cE)('title', `
 transition: color .3s var(--bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--title-font-weight);
 `, [(0, cssr_1.c)('& +', [(0, cssr_1.cE)('content', {
  marginTop: '9px'
})])]), (0, cssr_1.cE)('content', {
  transition: 'color .3s var(--bezier)',
  fontSize: 'var(--font-size)'
})]), (0, cssr_1.cE)('icon', {
  transition: 'color .3s var(--bezier)'
})]);