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
// --bezier
// --border-radius
// --height
// --width
// --box-shadow
// --box-shadow-hover
// --box-shadow-pressed
// --color
// --icon-size
// --icon-color
// --icon-color-hover
// --icon-color-pressed
// --text-color


exports.default = (0, cssr_1.cB)('back-top', `
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--text-color);
 transition:
 color .3s var(--bezier),
 box-shadow .3s var(--bezier),
 background-color .3s var(--bezier);
 border-radius: var(--border-radius);
 height: var(--height);
 min-width: var(--width);
 box-shadow: var(--box-shadow);
 background-color: var(--color);
`, [(0, fade_in_scale_up_cssr_1.default)(), (0, cssr_1.cM)('transition-disabled', {
  transition: 'none !important'
}), (0, cssr_1.cB)('base-icon', `
 font-size: var(--icon-size);
 color: var(--icon-color);
 transition: color .3s var(--bezier);
 `), (0, cssr_1.c)('svg', {
  pointerEvents: 'none'
}), (0, cssr_1.c)('&:hover', {
  boxShadow: 'var(--box-shadow-hover)'
}, [(0, cssr_1.cB)('base-icon', {
  color: 'var(--icon-color-hover)'
})]), (0, cssr_1.c)('&:active', {
  boxShadow: 'var(--box-shadow-pressed)'
}, [(0, cssr_1.cB)('base-icon', {
  color: 'var(--icon-color-pressed)'
})])]);