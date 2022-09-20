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
// --color
// --ripple-color
// --bezier
// --ripple-bezier
// --font-size
// --font-family


exports.default = (0, cssr_1.c)([(0, cssr_1.c)('@keyframes badge-wave-spread', {
  from: {
    boxShadow: '0 0 0.5px 0px var(--ripple-color)',
    opacity: 0.6
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: '0 0 0.5px 4.5px var(--ripple-color)',
    opacity: 0
  }
}), (0, cssr_1.cB)('badge', `
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--color);
 font-family: var(--font-family);
 `, [(0, cssr_1.cM)('as-is', [(0, cssr_1.cB)('badge-sup', {
  position: 'static',
  transform: 'translateX(0)'
}, [(0, fade_in_scale_up_cssr_1.default)({
  transformOrigin: 'left bottom',
  originalTransform: 'translateX(0)'
})])]), (0, cssr_1.cM)('dot', [(0, cssr_1.cB)('badge-sup', {
  height: '8px',
  width: '8px',
  padding: 0,
  minWidth: '8px',
  left: '100%',
  bottom: 'calc(100% - 4px)'
}, [(0, cssr_1.c)('::before', {
  borderRadius: '4px'
})])]), (0, cssr_1.cB)('badge-sup', `
 background: var(--color);
 transition:
 background-color .3s var(--bezier),
 color .3s var(--bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 `, [(0, fade_in_scale_up_cssr_1.default)({
  transformOrigin: 'left bottom',
  originalTransform: 'translateX(-50%)'
}), (0, cssr_1.cB)('base-wave', {
  zIndex: 1,
  animationDuration: '2s',
  animationIterationCount: 'infinite',
  animationDelay: '1s',
  animationTimingFunction: 'var(--ripple-bezier)',
  animationName: 'badge-wave-spread'
}), (0, cssr_1.c)('&::before', `
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]);