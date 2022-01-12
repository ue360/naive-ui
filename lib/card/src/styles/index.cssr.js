"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --border-radius
// --color
// --color-modal
// --color-popover
// --text-color
// --line-height
// --padding-top
// --padding-bottom
// --padding-left
// --font-size
// --action-color
// --title-font-weight
// --title-font-size
// --title-text-color
// --close-color
// --close-color-hover
// --close-color-pressed
// --border-color
// --close-size
// --box-shadow


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('card', `
 font-size: var(--font-size);
 line-height: var(--line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--border-radius);
 background-color: var(--color);
 color: var(--text-color);
 transition: 
 color .3s var(--bezier),
 background-color .3s var(--bezier),
 box-shadow .3s var(--bezier),
 border-color .3s var(--bezier);
 `, [(0, cssr_1.cM)('hoverable', [(0, cssr_1.c)('&:hover', 'box-shadow: var(--box-shadow);')]), (0, cssr_1.cM)('content-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('content', {
  paddingTop: 'var(--padding-bottom)'
})])]), (0, cssr_1.cM)('content-soft-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('content', `
 margin: 0 var(--padding-left);
 padding: var(--padding-bottom) 0;
 `)])]), (0, cssr_1.cM)('footer-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('footer', {
  paddingTop: 'var(--padding-bottom)'
})])]), (0, cssr_1.cM)('footer-soft-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('footer', `
 padding: var(--padding-bottom) 0;
 margin: 0 var(--padding-left);
 `)])]), (0, cssr_1.c)('>', [(0, cssr_1.cB)('card-header', `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--title-font-size);
 padding:
 var(--padding-top)
 var(--padding-left)
 var(--padding-bottom)
 var(--padding-left);
 `, [(0, cssr_1.cE)('main', `
 font-weight: var(--title-font-weight);
 transition: color .3s var(--bezier);
 flex: 1;
 color: var(--title-text-color);
 `), (0, cssr_1.cE)('extra', `
 display: flex;
 align-items: center;
 font-size: var(--font-size);
 font-weight: 400;
 transition: color .3s var(--bezier);
 color: var(--text-color);
 `), (0, cssr_1.cE)('close', `
 font-size: var(--close-size);
 transition: color .3s var(--bezier);
 `)]), (0, cssr_1.cE)('action', `
 box-sizing: border-box;
 transition:
 background-color .3s var(--bezier),
 border-color .3s var(--bezier);
 background-clip: padding-box;
 background-color: var(--action-color);
 `), (0, cssr_1.cE)('content', 'flex: 1;'), (0, cssr_1.cE)('content, footer', `
 box-sizing: border-box;
 padding: 0 var(--padding-left) var(--padding-bottom) var(--padding-left);
 font-size: var(--font-size);
 `, [(0, cssr_1.c)('&:first-child', {
  paddingTop: 'var(--padding-bottom)'
})]), (0, cssr_1.cE)('action', `
 background-color: var(--action-color);
 padding: var(--padding-bottom) var(--padding-left);
 `)]), (0, cssr_1.cB)('card-cover', `
 overflow: hidden;
 width: 100%;
 border-radius: var(--border-radius) var(--border-radius) 0 0;
 `, [(0, cssr_1.c)('img', `
 display: block;
 width: 100%;
 `)]), (0, cssr_1.cM)('bordered', `
 border: 1px solid var(--border-color);
 `, [(0, cssr_1.c)('&:target', 'border-color: var(--color-target);')]), (0, cssr_1.cM)('action-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('action', [(0, cssr_1.c)('&:not(:first-child)', {
  borderTop: '1px solid var(--border-color)'
})])])]), (0, cssr_1.cM)('content-segmented, content-soft-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('content', {
  transition: 'border-color 0.3s var(--bezier)'
}, [(0, cssr_1.c)('&:not(:first-child)', {
  borderTop: '1px solid var(--border-color)'
})])])]), (0, cssr_1.cM)('footer-segmented, footer-soft-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('footer', {
  transition: 'border-color 0.3s var(--bezier)'
}, [(0, cssr_1.c)('&:not(:first-child)', {
  borderTop: '1px solid var(--border-color)'
})])])])]), (0, cssr_1.insideModal)((0, cssr_1.cB)('card', {
  background: 'var(--color-modal)'
})), (0, cssr_1.insidePopover)((0, cssr_1.cB)('card', {
  background: 'var(--color-popover)'
})), (0, cssr_1.cB)('card', [(0, cssr_1.asModal)({
  background: 'var(--color-modal)'
})])]);