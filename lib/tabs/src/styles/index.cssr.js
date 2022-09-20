"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --close-color
// --close-color-hover
// --close-color-pressed
// --bar-color
// --tab-font-size
// --tab-text-color
// --tab-text-color-active
// --tab-text-color-disabled
// --tab-text-color-hover
// --pane-text-color
// --tab-border-color
// --tab-border-radius
// --tab-color
// --tab-font-weight
// --tab-font-weight-active
// --tab-gap
// --tab-padding
// --pane-padding
// --color-segment
// --font-weight-strong
// --tab-color-segment


exports.default = (0, cssr_1.cB)('tabs', `
 width: 100%;
 transition:
 background-color .3s var(--bezier),
 border-color .3s var(--bezier);
`, [(0, cssr_1.cB)('tabs-rail', `
 padding: 3px;
 border-radius: var(--tab-border-radius);
 width: 100%;
 background-color: var(--color-segment);
 transition: background-color .3s var(--bezier);
 display: flex;
 align-items: center;
 `, [(0, cssr_1.cB)('tabs-tab-wrapper', `
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [(0, cssr_1.cB)('tabs-tab', `
 overflow: hidden;
 border-radius: var(--tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [(0, cssr_1.cM)('active', `
 font-weight: var(--font-weight-strong);
 background-color: var(--tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `)])])]), (0, cssr_1.cM)('flex', [(0, cssr_1.cB)('tabs-nav', {
  width: '100%'
}, [(0, cssr_1.cB)('tabs-wrapper', {
  width: '100%'
}, [(0, cssr_1.cB)('tabs-tab', {
  marginRight: 0
})])])]), (0, cssr_1.cB)('tabs-nav', `
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--bezier);
 `, [(0, cssr_1.cE)('prefix, suffix', `
 display: flex;
 align-items: center;
 `), (0, cssr_1.cE)('prefix', 'padding-right: 16px;'), (0, cssr_1.cE)('suffix', 'padding-left: 16px;')]), (0, cssr_1.cB)('tabs-nav-scroll-wrapper', `
 flex: 1;
 position: relative;
 overflow: hidden;
 `, [(0, cssr_1.cM)('shadow-before', [(0, cssr_1.c)('&::before', `
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]), (0, cssr_1.cM)('shadow-after', [(0, cssr_1.c)('&::after', `
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]), (0, cssr_1.c)('&::before, &::after', `
 transition: box-shadow .3s var(--bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `), (0, cssr_1.c)('&::before', `
 left: 0;
 `), (0, cssr_1.c)('&::after', `
 right: 0;
 `)]), (0, cssr_1.cB)('tabs-nav-scroll-content', `
 display: flex;
 position: relative;
 `), (0, cssr_1.cB)('tabs-wrapper', `
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `), (0, cssr_1.cB)('tabs-tab-wrapper', `
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `), (0, cssr_1.cB)('tabs-tab', `
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--tab-text-color);
 font-size: var(--tab-font-size);
 background-clip: padding-box;
 padding: var(--tab-padding);
 transition:
 box-shadow .3s var(--bezier),
 color .3s var(--bezier),
 background-color .3s var(--bezier),
 border-color .3s var(--bezier);
 `, [(0, cssr_1.cM)('disabled', {
  cursor: 'not-allowed'
}), (0, cssr_1.cE)('close', `
 margin-left: 8px;
 font-size: 14px;
 transition: color .3s var(--bezier);
 `), (0, cssr_1.cE)('label', `
 display: flex;
 align-items: center;
 `)]), (0, cssr_1.cB)('tabs-bar', `
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--bar-color);
 transition:
 left .2s var(--bezier),
 max-width .2s var(--bezier),
 background-color .3s var(--bezier);
 `, [(0, cssr_1.cM)('transition-disabled', `
 transition: none;
 `), (0, cssr_1.cM)('disabled', `
 background-color: var(--tab-text-color-disabled)
 `)]), (0, cssr_1.cB)('tab-pane', `
 color: var(--pane-text-color);
 width: 100%;
 padding: var(--pane-padding);
 transition:
 color .3s var(--bezier),
 background-color .3s var(--bezier);
 `), (0, cssr_1.cB)('tabs-tab-pad', `
 width: var(--tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `), (0, cssr_1.cM)('line-type, bar-type', [(0, cssr_1.cB)('tabs-tab', `
 font-weight: var(--tab-font-weight-active);
 box-sizing: border-box;
 vertical-align: bottom;
 `, [(0, cssr_1.c)('&:hover', {
  color: 'var(--tab-text-color-hover)'
}), (0, cssr_1.cM)('active', {
  color: 'var(--tab-text-color-active)'
}), (0, cssr_1.cM)('disabled', {
  color: 'var(--tab-text-color-disabled)'
})])]), (0, cssr_1.cB)('tabs-nav', [(0, cssr_1.cM)('line-type', [(0, cssr_1.cE)('prefix, suffix', `
 transition: border-color .3s var(--bezier);
 border-bottom: 1px solid var(--tab-border-color);
 `), (0, cssr_1.cB)('tabs-nav-scroll-content', `
 transition: border-color .3s var(--bezier);
 border-bottom: 1px solid var(--tab-border-color);
 `), (0, cssr_1.cB)('tabs-bar', `
 border-radius: 0;
 bottom: -1px;
 `)]), (0, cssr_1.cM)('card-type', [(0, cssr_1.cE)('prefix, suffix', `
 transition: border-color .3s var(--bezier);
 border-bottom: 1px solid var(--tab-border-color);
 `), (0, cssr_1.cB)('tabs-pad', `
 flex-grow: 1;
 transition: border-color .3s var(--bezier);
 border-bottom: 1px solid var(--tab-border-color);
 `), (0, cssr_1.cB)('tabs-tab-pad', `
 transition: border-color .3s var(--bezier);
 border-bottom: 1px solid var(--tab-border-color);
 `), (0, cssr_1.cB)('tabs-tab', `
 font-weight: var(--tab-font-weight);
 border: 1px solid var(--tab-border-color);
 border-top-left-radius: var(--tab-border-radius);
 border-top-right-radius: var(--tab-border-radius);
 background-color: var(--tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--tab-font-size);
 color: var(--tab-text-color);
 `, [(0, cssr_1.cM)('addable', `
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `, [(0, cssr_1.cNotM)('disabled', [(0, cssr_1.c)('&:hover', `
 color: var(--tab-text-color-active);
 `)])]), (0, cssr_1.cM)('closable', 'padding-right: 6px;'), (0, cssr_1.cM)('active', `
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--tab-font-weight-active);
 color: var(--tab-text-color-active);
 `), (0, cssr_1.cM)('disabled', 'color: var(--tab-text-color-disabled);')]), (0, cssr_1.cB)('tabs-scroll-padding', 'border-bottom: 1px solid var(--tab-border-color);')])])]);