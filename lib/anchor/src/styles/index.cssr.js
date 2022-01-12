"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --link-color
// --link-font-size
// --link-text-color
// --link-text-color-hover
// --link-text-color-active
// --link-text-color-pressed
// --bezier
// --rail-color
// --rail-color-active
// --rail-width
// --link-padding
// --link-border-radius


exports.default = (0, cssr_1.cB)('anchor', `
 position: relative;
`, [(0, cssr_1.cNotM)('block', `
 padding-left: var(--rail-width);
 `, [(0, cssr_1.cB)('anchor-link', [(0, cssr_1.c)('+, >', [(0, cssr_1.cB)('anchor-link', `
 margin-top: .5em;
 `)])]), (0, cssr_1.cB)('anchor-link-background', `
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `), (0, cssr_1.cNotM)('show-rail', [(0, cssr_1.c)('>', [(0, cssr_1.cB)('anchor-link', 'padding-left: 0;')])])]), (0, cssr_1.cM)('block', [(0, cssr_1.cB)('anchor-link', `
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--bezier);
 background-color: transparent;
 border-radius: var(--link-border-radius);
 `, [(0, cssr_1.cM)('active', `
 background-color: var(--link-color);
 `)])]), (0, cssr_1.cB)('anchor-link-background', `
 position: absolute;
 left: calc(var(--rail-width) / 2);
 width: 100%;
 background-color: var(--link-color);
 transition:
 top .15s var(--bezier),
 max-width .15s var(--bezier),
 background-color .3s var(--bezier);
 `), (0, cssr_1.cB)('anchor-rail', `
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--rail-width);
 border-radius: calc(var(--rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--bezier);
 background-color: var(--rail-color);
 `, [(0, cssr_1.cE)('bar', `
 position: absolute;
 left: 0;
 width: var(--rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--bezier),
 background-color .3s var(--bezier);
 `, [(0, cssr_1.cM)('active', {
  backgroundColor: 'var(--rail-color-active)'
})])]), (0, cssr_1.cB)('anchor-link', `
 padding: var(--link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `, [(0, cssr_1.cM)('active', [(0, cssr_1.cE)('title', `
 color: var(--link-text-color-active);
 `)]), (0, cssr_1.c)('&:hover, &:focus', [(0, cssr_1.cE)('title', `
 color: var(--link-text-color-hover);
 `)]), (0, cssr_1.c)('&:active', [(0, cssr_1.cE)('title', `
 color: var(--link-text-color-pressed);
 `)]), (0, cssr_1.cE)('title', `
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--bezier);
 color: var(--link-text-color);
 `)])]);