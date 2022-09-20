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
// --menu-height
// --menu-border-radius
// --menu-box-shadow
// --menu-color


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('tree-select', `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `), (0, cssr_1.cB)('tree-select-menu', `
 position: relative;
 overflow: hidden;
 margin: 4px 0;
 max-height: var(--menu-height);
 transition: box-shadow .3s var(--bezier), background-color .3s var(--bezier);
 border-radius: var(--menu-border-radius);
 box-shadow: var(--menu-box-shadow);
 background-color: var(--menu-color);
 outline: none;
 `, [(0, cssr_1.cB)('tree', 'max-height: inherit;'), (0, cssr_1.cE)('empty', `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), (0, fade_in_scale_up_cssr_1.default)()])]);