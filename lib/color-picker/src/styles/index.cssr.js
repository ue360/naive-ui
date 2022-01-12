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
// --text-color
// --border-radius
// --panel-font-size
// --font-size
// --bezier
// --height
// --box-shadow
// --divider-color


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('color-picker', `
 display: inline-block;
 box-sizing: border-box;
 height: var(--height);
 font-size: var(--font-size);
 width: 100%;
 position: relative;
 `), (0, cssr_1.cB)('color-picker-panel', `
 margin: 4px 0;
 width: 240px;
 font-size: var(--panel-font-size);
 color: var(--text-color);
 background-color: var(--color);
 transition:
 box-shadow .3s var(--bezier),
 color .3s var(--bezier),
 background-color .3s var(--bezier);
 border-radius: var(--border-radius);
 box-shadow: var(--box-shadow);
 `, [(0, fade_in_scale_up_cssr_1.default)(), (0, cssr_1.cB)('input', `
 text-align: center;
 `)]), (0, cssr_1.cB)('color-picker-checkboard', `
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [(0, cssr_1.c)('&::after', `
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), (0, cssr_1.cB)('color-picker-slider', `
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `, [(0, cssr_1.cE)('image', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `), (0, cssr_1.c)('&::after', `
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]), (0, cssr_1.cB)('color-picker-handle', `
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `, [(0, cssr_1.cE)('fill', `
 box-sizing: border-box;
 border: 2px solid white;
 `)]), (0, cssr_1.cB)('color-picker-pallete', `
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 `, [(0, cssr_1.cE)('layer', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [(0, cssr_1.cM)('shadowed', `
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]), (0, cssr_1.cB)('color-picker-preview', `
 display: flex;
 `, [(0, cssr_1.cE)('sliders', `
 flex: 1 0 auto;
 `), (0, cssr_1.cE)('preview', `
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `), (0, cssr_1.cE)('fill', `
 display: block;
 width: 30px;
 height: 30px;
 `), (0, cssr_1.cE)('input', `
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]), (0, cssr_1.cB)('color-picker-input', `
 display: flex;
 align-items: center;
 `, [(0, cssr_1.cB)('input', `
 flex-grow: 1;
 flex-basis: 0;
 `), (0, cssr_1.cE)('mode', `
 width: 72px;
 text-align: center;
 `)]), (0, cssr_1.cB)('color-picker-control', `
 padding: 12px;
 `), (0, cssr_1.cB)('color-picker-action', `
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `, [(0, cssr_1.cB)('button', 'margin-left: 8px;')]), (0, cssr_1.cB)('color-picker-trigger', `
 border: var(--border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--border-radius);
 transition: border-color .3s var(--bezier);
 cursor: pointer;
 `, [(0, cssr_1.cE)('value', `
 white-space: nowrap;
 position: relative;
 `), (0, cssr_1.cE)('fill', `
 border-radius: var(--border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `), (0, cssr_1.cB)('color-picker-checkboard', `
 border-radius: var(--border-radius);
 `, [(0, cssr_1.c)('&::after', `
 --block-size: calc((var(--height) - 8px) / 3);
 background-size: calc(var(--block-size) * 2) calc(var(--block-size) * 2);
 background-position: 0 0, 0 var(--block-size), var(--block-size) calc(-1 * var(--block-size)), calc(-1 * var(--block-size)) 0px; 
 `)])]), (0, cssr_1.cB)('color-picker-swatches', `
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `, [(0, cssr_1.cB)('color-picker-swatch', `
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `, [(0, cssr_1.cE)('fill', `
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `), (0, cssr_1.c)('&:focus', `
 outline: none;
 `, [(0, cssr_1.cE)('fill', [(0, cssr_1.c)('&::after', `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);