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
// --font-size
// --padding
// --border-radius
// --option-height
// --option-prefix-width
// --option-icon-prefix-width
// --option-suffix-width
// --option-icon-suffix-width
// --color
// --option-color-hover
// --option-color-active
// --divider-color
// --option-text-color
// --option-text-color-hover
// --option-text-color-active
// --option-text-color-child-active
// --prefix-color
// --suffix-color
// --option-icon-size
// --option-opacity-disabled
// shared with popover
// --box-shadow


exports.default = (0, cssr_1.cB)('dropdown-menu', `
 transform-origin: inherit;
 padding: var(--padding);
 background-color: var(--color);
 border-radius: var(--border-radius);
 box-shadow: var(--box-shadow);
 transition:
 background-color .3s var(--bezier),
 box-shadow .3s var(--bezier);
`, [(0, fade_in_scale_up_cssr_1.default)(), (0, cssr_1.cB)('dropdown-option', `
 position: relative;
 `, [(0, cssr_1.c)('a', `
 text-decoration: none;
 color: inherit;
 `, [(0, cssr_1.c)('&::before', `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), (0, cssr_1.cB)('dropdown-option-body', `
 display: flex;
 cursor: pointer;
 height: var(--option-height);
 line-height: var(--option-height);
 font-size: var(--font-size);
 color: var(--option-text-color);
 transition:
 background-color .3s var(--bezier),
 color .3s var(--bezier);
 `, [(0, cssr_1.cM)('pending', [(0, cssr_1.cNotM)('disabled', {
  color: 'var(--option-text-color-hover)',
  backgroundColor: 'var(--option-color-hover)'
}), (0, cssr_1.cE)('prefix, suffix', {
  color: 'var(--option-text-color-hover)'
})]), (0, cssr_1.cM)('active', [(0, cssr_1.cNotM)('disabled', {
  color: 'var(--option-text-color-active)',
  backgroundColor: 'var(--option-color-active)'
}), (0, cssr_1.cE)('prefix, suffix', {
  color: 'var(--option-text-color-active)'
})]), (0, cssr_1.cM)('disabled', {
  cursor: 'not-allowed',
  opacity: 'var(--option-opacity-disabled)'
}), (0, cssr_1.cM)('child-active', {
  color: 'var(--option-text-color-child-active)'
}, [(0, cssr_1.cE)('prefix, suffix', {
  color: 'var(--option-text-color-child-active)'
})]), (0, cssr_1.cM)('group', {
  fontSize: 'calc(var(--font-size) - 1px)',
  color: 'var(--group-header-text-color)'
}, [(0, cssr_1.cE)('prefix', {
  width: 'calc(var(--option-prefix-width) / 2)'
}, [(0, cssr_1.cM)('show-icon', {
  width: 'calc(var(--option-icon-prefix-width) / 2)'
})])]), (0, cssr_1.cE)('prefix', `
 width: var(--option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--prefix-color);
 transition: color .3s var(--bezier);
 `, [(0, cssr_1.cM)('show-icon', {
  width: 'var(--option-icon-prefix-width)'
}), (0, cssr_1.cB)('icon', {
  fontSize: 'var(--option-icon-size)'
})]), (0, cssr_1.cE)('label', {
  whiteSpace: 'nowrap',
  flex: 1
}), (0, cssr_1.cE)('suffix', `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--bezier);
 color: var(--suffix-color);
 `, [(0, cssr_1.cM)('has-submenu', {
  width: 'var(--option-icon-suffix-width)'
}), (0, cssr_1.cB)('icon', {
  fontSize: 'var(--option-icon-size)'
})]), (0, cssr_1.cB)('dropdown-menu', {
  pointerEvents: 'all'
})]), (0, cssr_1.cB)('dropdown-offset-container', `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), (0, cssr_1.cB)('dropdown-divider', `
 transition: background-color .3s var(--bezier);
 background-color: var(--divider-color);
 height: 1px;
 margin: 4px 0;
 `), (0, cssr_1.cB)('dropdown-menu-wrapper', `
 transform-origin: inherit;
 width: fit-content;
 `)]);