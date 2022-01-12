"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --color
// --font-size
// --border-radius
// --height
// --padding-left
// --padding-right
// --text-color
// --text-color-disabled
// --caret-color
// --text-decoration-color
// --border
// --border-disabled
// --border-hover
// --border-focus
// --placeholder-color
// --placeholder-color-disabled
// --line-height-textarea
// --color-disabled
// --color-focus
// --box-shadow-focus
// --clear-color
// --clear-size
// --clear-color-hover
// --clear-color-pressed
// --suffix-text-color
// --icon-color
// --icon-color-hover
// --icon-color-pressed
// --icon-color-disabled
// --count-text-color
// --loading-color
// ...form item vars


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('input', `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--border-radius);
 background-color: var(--color);
 transition: background-color .3s var(--bezier);
 font-size: var(--font-size);
 --padding-vertical: calc((var(--height) - 1.5 * var(--font-size)) / 2);
 `, [// common
(0, cssr_1.cE)('input, textarea', `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `), (0, cssr_1.cE)('input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder', `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 caret-color .3s var(--bezier),
 color .3s var(--bezier),
 text-decoration-color .3s var(--bezier);
 `), (0, cssr_1.cE)('input-el, textarea-el', `
 -webkit-appearance: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--text-decoration-color);
 color: var(--text-color);
 caret-color: var(--caret-color);
 background-color: transparent;
 `, [(0, cssr_1.c)('&::placeholder', {
  color: '#0000'
})]), (0, cssr_1.cM)('round', [(0, cssr_1.cNotM)('textarea', {
  borderRadius: 'calc(var(--height) / 2)'
})]), (0, cssr_1.cE)('placeholder', `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--placeholder-color);
 `, [(0, cssr_1.c)('span', {
  width: '100%',
  display: 'inline-block'
})]), (0, cssr_1.cNotM)('autosize', {
  width: '100%'
}), (0, cssr_1.cM)('autosize', [(0, cssr_1.cE)('textarea-el, input-el', `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]), // input
(0, cssr_1.cB)('input-wrapper', `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--padding-left);
 padding-right: var(--padding-right);
 `), (0, cssr_1.cE)('input-mirror', `
 padding: 0;
 height: var(--height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `), (0, cssr_1.cE)('input-el', `
 padding: 0;
 height: var(--height);
 line-height: var(--height);
 `, [(0, cssr_1.c)('+', [(0, cssr_1.cE)('placeholder', `
 display: flex;
 align-items: center; 
 `)])]), (0, cssr_1.cNotM)('textarea', [(0, cssr_1.cE)('placeholder', {
  whiteSpace: 'nowrap'
})]), (0, cssr_1.cE)('eye', `
 transition: color .3s var(--bezier);
 `), // textarea
(0, cssr_1.cM)('textarea', {
  width: '100%'
}, [(0, cssr_1.cB)('input-word-count', `
 position: absolute;
 right: var(--padding-right);
 bottom: var(--padding-vertical);
 `), (0, cssr_1.cM)('resizable', [(0, cssr_1.cB)('input-wrapper', `
 resize: vertical;
 overflow: auto;
 min-height: var(--height);
 `)]), (0, cssr_1.cE)('textarea-el, textarea-mirror, placeholder', `
 width: 100%;
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--padding-vertical);
 padding-bottom: var(--padding-vertical);
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--line-height-textarea);
 margin: 0;
 resize: none;
 `), (0, cssr_1.cE)('textarea-mirror', `
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]), // pair
(0, cssr_1.cM)('pair', [(0, cssr_1.cE)('input-el, placeholder', {
  textAlign: 'center'
}), (0, cssr_1.cE)('separator', `
 display: flex;
 align-items: center;
 transition: color .3s var(--bezier);
 color: var(--text-color);
 `, [(0, cssr_1.cB)('icon', `
 color: var(--icon-color);
 `), (0, cssr_1.cB)('base-icon', `
 color: var(--icon-color);
 `)])]), (0, cssr_1.cM)('disabled', {
  cursor: 'not-allowed',
  backgroundColor: 'var(--color-disabled)'
}, [(0, cssr_1.cE)('border', {
  border: 'var(--border-disabled)'
}), (0, cssr_1.cE)('input-el, textarea-el', {
  cursor: 'not-allowed',
  color: 'var(--text-color-disabled)',
  textDecorationColor: 'var(--text-color-disabled)'
}), (0, cssr_1.cE)('placeholder', {
  color: 'var(--placeholder-color-disabled)'
}), (0, cssr_1.cE)('separator', {
  color: 'var(--text-color-disabled)'
}, [(0, cssr_1.cB)('icon', `
 color: var(--icon-color-disabled);
 `), (0, cssr_1.cB)('base-icon', `
 color: var(--icon-color-disabled);
 `)]), (0, cssr_1.cE)('suffix, prefix', {
  color: 'var(--text-color-disabled)'
}, [(0, cssr_1.cB)('icon', `
 color: var(--icon-color-disabled);
 `), (0, cssr_1.cB)('internal-icon', `
 color: var(--icon-color-disabled);
 `)])]), (0, cssr_1.cNotM)('disabled', [(0, cssr_1.cE)('eye', `
 color: var(--icon-color);
 cursor: pointer;
 `, [(0, cssr_1.c)('&:hover', `
 color: var(--icon-color-hover);
 `), (0, cssr_1.c)('&:active', `
 color: var(--icon-color-pressed);
 `)]), (0, cssr_1.cM)('focus', {
  backgroundColor: 'var(--color-focus)'
}, [(0, cssr_1.cE)('state-border', {
  border: 'var(--border-focus)',
  boxShadow: 'var(--box-shadow-focus)'
})]), (0, cssr_1.c)('&:hover', [(0, cssr_1.cE)('state-border', {
  border: 'var(--border-hover)'
})])]), (0, cssr_1.cE)('border, state-border', `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--border);
 transition:
 box-shadow .3s var(--bezier),
 border-color .3s var(--bezier);
 `), (0, cssr_1.cE)('state-border', `
 border-color: #0000;
 z-index: 1;
 `), (0, cssr_1.cE)('prefix', {
  marginRight: '4px'
}), (0, cssr_1.cE)('suffix', `
 margin-left: 4px;
 `), (0, cssr_1.cE)('suffix, prefix', `
 transition: color .3s var(--bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--suffix-text-color);
 `, [(0, cssr_1.cB)('base-loading', `
 font-size: var(--icon-size);
 margin-left: 4px;
 color: var(--loading-color);
 `), (0, cssr_1.cB)('base-clear', `
 font-size: var(--icon-size);
 margin-left: 4px;
 `, [(0, cssr_1.cE)('placeholder', [(0, cssr_1.cB)('base-icon', `
 transition: color .3s var(--bezier);
 color: var(--icon-color);
 font-size: var(--icon-size);
 `)])]), (0, cssr_1.cB)('icon', `
 transition: color .3s var(--bezier);
 color: var(--icon-color);
 font-size: var(--icon-size);
 `), (0, cssr_1.cB)('base-icon', `
 font-size: var(--icon-size);
 `)]), (0, cssr_1.cB)('input-word-count', `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--count-text-color);
 transition: color .3s var(--bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `)]), ['warning', 'error'].map(status => (0, cssr_1.insideFormItem)(status, (0, cssr_1.cB)('input', [(0, cssr_1.cNotM)('disabled', [(0, cssr_1.cB)('base-loading', `
 color: var(--loading-color-${status})
 `), (0, cssr_1.cE)('input-el, textarea-el', {
  caretColor: `var(--caret-color-${status})`
}), (0, cssr_1.cE)('state-border', {
  border: `var(--border-${status})`
}), (0, cssr_1.c)('&:hover', [(0, cssr_1.cE)('state-border', `
 border: var(--border-hover-${status});
 `)]), (0, cssr_1.c)('&:focus', {
  backgroundColor: `var(--color-focus-${status})`
}, [(0, cssr_1.cE)('state-border', `
 box-shadow: var(--box-shadow-focus-${status});
 border: var(--border-focus-${status});
 `)]), (0, cssr_1.cM)('focus', {
  backgroundColor: `var(--color-focus-${status})`
}, [(0, cssr_1.cE)('state-border', `
 box-shadow: var(--box-shadow-focus-${status});
 border: var(--border-focus-${status});
 `)])])])))]);