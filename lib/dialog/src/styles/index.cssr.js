"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --icon-color
// --bezier
// --close-margin
// --icon-margin
// --icon-size
// --close-size
// --close-color
// --close-color-hover
// --close-color-pressed
// --color
// --text-color
// --border-radius
// --padding
// --line-height
// --border
// --content-margin
// --title-font-size
// --title-font-weight
// --title-text-color
// --action-space


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('dialog', `
 line-height: var(--line-height);
 position: relative;
 background: var(--color);
 color: var(--text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--border-radius);
 padding: var(--padding);
 transition: 
 border-color .3s var(--bezier),
 background-color .3s var(--bezier),
 color .3s var(--bezier);
 `, [(0, cssr_1.cE)('icon', {
  color: 'var(--icon-color)'
}), (0, cssr_1.cM)('bordered', {
  border: 'var(--border)'
}), (0, cssr_1.cM)('icon-top', [(0, cssr_1.cE)('close', {
  margin: 'var(--close-margin)'
}), (0, cssr_1.cE)('icon', {
  margin: 'var(--icon-margin)'
}), (0, cssr_1.cE)('content', {
  textAlign: 'center'
}), (0, cssr_1.cE)('title', {
  justifyContent: 'center'
}), (0, cssr_1.cE)('action', {
  justifyContent: 'center'
})]), (0, cssr_1.cM)('icon-left', [(0, cssr_1.cE)('icon', {
  margin: 'var(--icon-margin)'
})]), (0, cssr_1.cE)('close', `
 font-size: var(--close-size);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--close-margin);
 transition: .3s color var(--bezier);
 z-index: 1;
 `), (0, cssr_1.cE)('content', `
 font-size: var(--font-size);
 margin: var(--content-margin);
 position: relative;
 word-break: break-word;
 `, [(0, cssr_1.c)('&:last-child', 'margin-bottom: 0;')]), (0, cssr_1.cE)('action', `
 display: flex;
 justify-content: flex-end;
 `, [(0, cssr_1.c)('> *:not(:last-child)', {
  marginRight: 'var(--action-space)'
})]), (0, cssr_1.cE)('icon', {
  fontSize: 'var(--icon-size)',
  transition: 'color .3s var(--bezier)'
}), (0, cssr_1.cE)('title', `
 transition: color .3s var(--bezier);
 display: flex;
 align-items: center;
 font-size: var(--title-font-size);
 font-weight: var(--title-font-weight);
 color: var(--title-text-color);
 `), (0, cssr_1.cB)('dialog-icon-container', {
  display: 'flex',
  justifyContent: 'center'
})]), (0, cssr_1.insideModal)((0, cssr_1.cB)('dialog', `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), (0, cssr_1.cB)('dialog', [(0, cssr_1.asModal)(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]);