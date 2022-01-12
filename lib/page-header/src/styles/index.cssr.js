"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --title-font-size
// --title-text-color
// --font-size
// --subtitle-text-color
// --back-color
// --back-color-hover
// --back-color-pressed
// --back-size
// --title-font-weight
// --bezier


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('page-header-header', `
 margin-bottom: 20px;
 `), (0, cssr_1.cB)('page-header', `
 display: flex;
 align-items: center;
 justify-content: space-between;
 line-height: 1.5;
 font-size: var(--font-size);
 `, [(0, cssr_1.cE)('main', `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 `), (0, cssr_1.cE)('back', `
 display: flex;
 margin-right: 16px;
 font-size: var(--back-size);
 cursor: pointer;
 color: var(--back-color);
 transition: color .3s var(--bezier);
 `, [(0, cssr_1.c)('&:hover', 'color: var(--back-color-hover);'), (0, cssr_1.c)('&:active', 'color: var(--back-color-pressed);')]), (0, cssr_1.cE)('avatar', `
 display: flex;
 margin-right: 12px
 `), (0, cssr_1.cE)('title', `
 margin-right: 16px;
 transition: color .3s var(--bezier);
 font-size: var(--title-font-size);
 font-weight: var(--title-font-weight);
 color: var(--title-text-color);
 `), (0, cssr_1.cE)('subtitle', `
 font-size: 14px;
 transition: color .3s var(--bezier);
 color: var(--subtitle-text-color);
 `)]), (0, cssr_1.cB)('page-header-content', `
 margin-top: 20px;
 font-size: var(--font-size);
 `), (0, cssr_1.cB)('page-header-footer', `
 margin-top: 20px;
 font-size: var(--font-size);
 `)]);