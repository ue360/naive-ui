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

const fade_in_cssr_1 = __importDefault(require("../../../../_styles/transitions/fade-in.cssr")); // vars:
// --scrollbar-bezier
// --scrollbar-color
// --scrollbar-color-hover
// --scrollbar-width
// --scrollbar-height
// --scrollbar-border-radius


exports.default = (0, cssr_1.cB)('scrollbar', `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [(0, cssr_1.c)('>', [(0, cssr_1.cB)('scrollbar-container', `
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `, [(0, cssr_1.c)('&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb', `
 width: 0;
 height: 0;
 display: none;
 `), (0, cssr_1.c)('>', [(0, cssr_1.cB)('scrollbar-content', `
 box-sizing: border-box;
 min-width: 100%;
 `)])]), (0, cssr_1.cB)('scrollbar-rail', `
 position: absolute;
 pointer-events: none;
 user-select: none;
 `, [(0, cssr_1.cM)('horizontal', `
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--scrollbar-height);
 `, [(0, cssr_1.c)('>', [(0, cssr_1.cE)('scrollbar', `
 height: var(--scrollbar-height);
 border-radius: var(--scrollbar-border-radius);
 right: 0;
 `)])]), (0, cssr_1.cM)('vertical', `
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--scrollbar-width);
 `, [(0, cssr_1.c)('>', [(0, cssr_1.cE)('scrollbar', `
 width: var(--scrollbar-width);
 border-radius: var(--scrollbar-border-radius);
 bottom: 0;
 `)])]), (0, cssr_1.cM)('disabled', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('scrollbar', {
  pointerEvents: 'none'
})])]), (0, cssr_1.c)('>', [(0, cssr_1.cE)('scrollbar', `
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--scrollbar-color);
 transition: background-color .2s var(--scrollbar-bezier);
 `, [(0, fade_in_cssr_1.default)(), (0, cssr_1.c)('&:hover', {
  backgroundColor: 'var(--scrollbar-color-hover)'
})])])])])]);