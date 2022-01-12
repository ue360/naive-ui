"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --color
// --text-color
// --description-text-color
// --action-text-color
// --title-text-color
// --title-font-weight
// --bezier
// --bezier-ease-out
// --bezier-ease-in
// --border-radius
// --box-shadow
// --close-margin
// --close-size
// --close-color
// --close-color-hover
// --close-color-pressed
// --line-height
// --icon-color
// --width
// --padding-top
// --padding-bottom
// --padding-left
// --padding-right


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('notification-container', `
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `, [(0, cssr_1.c)('>', [(0, cssr_1.cB)('scrollbar', `
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [(0, cssr_1.c)('>', [(0, cssr_1.cB)('scrollbar-container', `
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [(0, cssr_1.cB)('scrollbar-content', `
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]), (0, cssr_1.cM)('top-right, bottom-right', [(0, cssr_1.cB)('notification', `
 margin-left: 28px;
 margin-right: 16px;
 `)]), (0, cssr_1.cM)('top-left, bottom-left', [(0, cssr_1.cB)('notification', `
 margin-left: 16px;
 margin-right: 28px;
 `)]), (0, cssr_1.cM)('top-right', `
 right: 0;
 top: 12px;
 `, [placementTransformStyle('top-right')]), (0, cssr_1.cM)('top-left', `
 left: 0;
 top: 12px;
 `, [placementTransformStyle('top-left')]), (0, cssr_1.cM)('bottom-right', `
 right: 0;
 bottom: 12px;
 `, [placementTransformStyle('bottom-right')]), (0, cssr_1.cM)('bottom-left', `
 left: 0;
 bottom: 12px;
 `, [placementTransformStyle('bottom-left')]), (0, cssr_1.cM)('scrollable', [(0, cssr_1.cM)('top-right', `
 top: 0;
 `), (0, cssr_1.cM)('top-left', `
 top: 0;
 `), (0, cssr_1.cM)('bottom-right', `
 bottom: 0;
 `), (0, cssr_1.cM)('bottom-left', `
 bottom: 0;
 `)]), (0, cssr_1.cB)('notification', [(0, cssr_1.c)('&.notification-transition-enter-from, &.notification-transition-leave-to', `
 opacity: 0;
 margin-bottom: 0 !important;
 `), (0, cssr_1.c)('&.notification-transition-leave-from, &.notification-transition-enter-to', `
 opacity: 1;
 `), (0, cssr_1.c)('&.notification-transition-leave-active', `
 transition:
 background-color .3s var(--bezier),
 color .3s var(--bezier),
 opacity .3s var(--bezier),
 transform .3s var(--bezier-ease-in),
 max-height .3s var(--bezier),
 margin-bottom .3s linear,
 box-shadow .3s var(--bezier);
 `)]), (0, cssr_1.cB)('notification', `
 background-color: var(--color);
 color: var(--text-color);
 transition:
 background-color .3s var(--bezier),
 color .3s var(--bezier),
 opacity .3s var(--bezier),
 transform .3s var(--bezier-ease-out),
 max-height .3s var(--bezier),
 margin-bottom .3s linear,
 box-shadow .3s var(--bezier);
 font-family: inherit;
 font-size: var(--font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 margin-bottom: 12px;
 padding-left: var(--padding-left);
 padding-right: var(--padding-right);
 width: var(--width);
 border-radius: var(--border-radius);
 box-shadow: var(--box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `, [// TODO: refactor type styles & transition
(0, cssr_1.cE)('avatar', [(0, cssr_1.cB)('icon', {
  color: 'var(--icon-color)'
}), (0, cssr_1.cB)('base-icon', {
  color: 'var(--icon-color)'
})]), (0, cssr_1.cM)('show-avatar', [(0, cssr_1.cB)('notification-main', `
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]), (0, cssr_1.cM)('closable', [(0, cssr_1.cB)('notification-main', [(0, cssr_1.c)('> *:first-child', {
  paddingRight: '20px'
})]), (0, cssr_1.cE)('close', `
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--close-margin);
 font-size: var(--close-size);
 transition: color .3s var(--bezier);
 `)]), (0, cssr_1.cE)('avatar', `
 position: absolute;
 top: var(--padding-top);
 left: var(--padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 `, [(0, cssr_1.cB)('icon', {
  transition: 'color .3s var(--bezier)'
})]), (0, cssr_1.cB)('notification-main', `
 padding-top: var(--padding-top);
 padding-bottom: var(--padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `, [(0, cssr_1.cB)('notification-main-footer', `
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `, [(0, cssr_1.cE)('meta', `
 font-size: 12px;
 transition: color .3s var(--bezier-ease-out);
 color: var(--description-text-color);
 `), (0, cssr_1.cE)('action', `
 cursor: pointer;
 transition: color .3s var(--bezier-ease-out);
 color: var(--action-text-color);
 `)]), (0, cssr_1.cE)('header', `
 font-weight: var(--title-font-weight);
 font-size: 16px;
 transition: color .3s var(--bezier-ease-out);
 color: var(--title-text-color);
 `), (0, cssr_1.cE)('description', `
 margin-top: 8px;
 font-size: 12px;
 transition: color .3s var(--bezier-ease-out);
 color: var(--description-text-color);
 `), (0, cssr_1.cE)('content', `
 line-height: var(--line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--bezier-ease-out);
 color: var(--text-color);
 `, [(0, cssr_1.c)('&:first-child', {
  margin: 0
})])])])])]);

function placementTransformStyle(placement) {
  const [position, direction] = placement.split('-');
  const transformYEnter = position === 'top' ? '-100%' : '100%';
  const transformYLeave = position === 'top' ? '0' : '0';
  const transformXEnter = direction === 'left' ? 'calc(-100%)' : 'calc(100%)';
  const transformXLeave = '0';
  return (0, cssr_1.cB)('notification', [(0, cssr_1.c)('&.notification-transition-enter-from, &.notification-transition-leave-to', `
 transform: translate(${transformXEnter}, ${transformYEnter});
 `), (0, cssr_1.c)('&.notification-transition-leave-from, &.notification-transition-enter-to', `
 transform: translate(${transformXLeave}, ${transformYLeave});
 `)]);
}