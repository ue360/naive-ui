"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../../_utils/cssr"); // vars:
// --bezier
// --border
// --border-active
// --border-focus
// --border-hover
// --border-radius
// --box-shadow-active
// --box-shadow-focus
// --box-shadow-hover
// --caret-color
// --color
// --color-active
// --color-disabled
// --font-size
// --height
// --padding-single
// --placeholder-color
// --placeholder-color-disabled
// --text-color
// --text-color-disabled
// --arrow-color
// --arrow-size
// --loading-color
// ...clear vars
// ...form item vars


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('base-selection', `
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--border-radius);
 min-height: var(--height);
 line-height: 1.5;
 font-size: var(--font-size);
 `, [(0, cssr_1.cB)('base-loading', `
 color: var(--loading-color);
 `), (0, cssr_1.cB)('base-selection-tags', {
  minHeight: 'var(--height)'
}), (0, cssr_1.cE)('border, state-border', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--bezier),
 border-color .3s var(--bezier);
 `), (0, cssr_1.cE)('state-border', `
 z-index: 1;
 border-color: #0000;
 `), (0, cssr_1.cB)('base-suffix', `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [(0, cssr_1.cE)('arrow', `
 font-size: var(--arrow-size);
 color: var(--arrow-color);
 transition: color .3s var(--bezier);
 `)]), (0, cssr_1.cB)('base-selection-overlay', `
 display: flex;
 align-items: center;
 white-space: nowrap;
 overflow: hidden;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--padding-single);
 transition: color .3s var(--bezier);
 `), (0, cssr_1.cB)('base-selection-placeholder', `
 color: var(--placeholder-color);
 `), (0, cssr_1.cB)('base-selection-tags', `
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: 3px 26px 0 14px;
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--color);
 border-radius: inherit;
 transition:
 color .3s var(--bezier),
 box-shadow .3s var(--bezier),
 background-color .3s var(--bezier);
 `), (0, cssr_1.cB)('base-selection-label', `
 height: var(--height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--bezier),
 box-shadow .3s var(--bezier),
 background-color .3s var(--bezier);
 border-radius: inherit;
 background-color: var(--color);
 align-items: center;
 `, [(0, cssr_1.cB)('base-selection-input', `
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--padding-single);
 background-color: #0000;
 color: var(--text-color);
 transition: color .3s var(--bezier);
 caret-color: var(--caret-color);
 `, [(0, cssr_1.cE)('content', `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), (0, cssr_1.cE)('render-label', `
 color: var(--text-color);
 `)]), (0, cssr_1.cNotM)('disabled', [(0, cssr_1.c)('&:hover', [(0, cssr_1.cE)('state-border', `
 box-shadow: var(--box-shadow-hover);
 border: var(--border-hover);
 `)]), (0, cssr_1.cM)('focus', [(0, cssr_1.cE)('state-border', `
 box-shadow: var(--box-shadow-focus);
 border: var(--border-focus);
 `)]), (0, cssr_1.cM)('active', [(0, cssr_1.cE)('state-border', `
 box-shadow: var(--box-shadow-active);
 border: var(--border-active);
 `), (0, cssr_1.cB)('base-selection-label', {
  backgroundColor: 'var(--color-active)'
}), (0, cssr_1.cB)('base-selection-tags', {
  backgroundColor: 'var(--color-active)'
})])]), (0, cssr_1.cM)('disabled', {
  cursor: 'not-allowed'
}, [(0, cssr_1.cE)('arrow', `
 color: var(--arrow-color-disabled);
 `), (0, cssr_1.cB)('base-selection-label', `
 cursor: not-allowed;
 background-color: var(--color-disabled);
 `, [(0, cssr_1.cB)('base-selection-input', `
 cursor: not-allowed;
 color: var(--text-color-disabled);
 `), (0, cssr_1.cE)('render-label', `
 color: var(--text-color-disabled);
 `)]), (0, cssr_1.cB)('base-selection-tags', `
 cursor: not-allowed;
 background-color: var(--color-disabled);
 `), (0, cssr_1.cB)('base-selection-placeholder', `
 cursor: not-allowed;
 color: var(--placeholder-color-disabled);
 `)]), (0, cssr_1.cB)('base-selection-input-tag', `
 height: calc(var(--height) - 6px);
 line-height: calc(var(--height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [(0, cssr_1.cE)('input', `
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--text-color);
 caret-color: var(--caret-color);
 `), (0, cssr_1.cE)('mirror', `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)])]), (0, cssr_1.cB)('base-selection-popover', `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 `), (0, cssr_1.cB)('base-selection-tag-wrapper', `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [(0, cssr_1.c)('&:last-child', {
  paddingRight: 0
}), (0, cssr_1.cB)('tag', `
 font-size: 14px;
 max-width: 100%;
 `, [(0, cssr_1.cE)('content', `
 text-overflow: ellipsis;
 overflow: hidden;
 `)])]), ['warning', 'error'].map(status => (0, cssr_1.insideFormItem)(status, (0, cssr_1.cB)('base-selection', [(0, cssr_1.cE)('state-border', {
  border: `var(--border-${status})`
}), (0, cssr_1.cNotM)('disabled', [(0, cssr_1.c)('&:hover', [(0, cssr_1.cE)('state-border', `
 box-shadow: var(--box-shadow-hover-${status});
 border: var(--border-hover-${status});
 `)]), (0, cssr_1.cM)('active', [(0, cssr_1.cE)('state-border', `
 box-shadow: var(--box-shadow-active-${status});
 border: var(--border-active-${status});
 `), (0, cssr_1.cB)('base-selection-label', {
  backgroundColor: `var(--color-active-${status})`
}), (0, cssr_1.cB)('base-selection-tags', {
  backgroundColor: `var(--box-shadow-active-${status})`
})]), (0, cssr_1.cM)('focus', [(0, cssr_1.cE)('state-border', `
 box-shadow: var(--box-shadow-focus-${status});
 border: var(--border-focus-${status});
 `)])])])))]);