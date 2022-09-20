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

const fade_in_height_expand_cssr_1 = __importDefault(require("../../../_styles/transitions/fade-in-height-expand.cssr")); // vars:
// --color
// --group-text-color
// --bezier
// --font-size
// --border-color-horizontal
// --border-radius
// --item-color-active
// --item-color-active-collapsed
// --arrow-color
// --arrow-color-hover
// --arrow-color-active
// --arrow-color-child-active
// --item-text-color
// --item-text-color-hover
// --item-text-color-active
// --item-text-color-child-active
// --item-icon-color
// --item-icon-color-hover
// --item-icon-color-active
// --item-icon-color-collapsed
// --item-icon-color-child-active
// --item-height


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('menu', `
 background-color: var(--color);
 color: var(--item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--bezier);
 box-sizing: border-box;
 font-size: var(--font-size);
 padding-bottom: 6px;
 `, [(0, cssr_1.cM)('horizontal', {
  display: 'inline-flex',
  paddingBottom: 0
}, [(0, cssr_1.cB)('submenu', {
  margin: 0
}), (0, cssr_1.cB)('menu-item', {
  margin: 0
}, [(0, cssr_1.c)('&::before', {
  backgroundColor: '#0000 !important'
}), (0, cssr_1.cM)('selected', [(0, cssr_1.cB)('menu-item-content', {
  borderBottom: '2px solid var(--border-color-horizontal)'
})])]), (0, cssr_1.cB)('menu-item-content', {
  padding: '0 20px',
  borderBottom: '2px solid #0000'
}, [(0, cssr_1.cM)('child-active', {
  borderBottom: '2px solid var(--border-color-horizontal)'
}), (0, cssr_1.cNotM)('disabled', [hoverStyle({
  borderBottom: '2px solid var(--border-color-horizontal)'
}, null)])])]), (0, cssr_1.cM)('collapsed', [(0, cssr_1.cB)('menu-item', [(0, cssr_1.cM)('selected', [(0, cssr_1.c)('&::before', {
  backgroundColor: 'var(--item-color-active-collapsed) !important'
})])]), (0, cssr_1.cB)('menu-item-content', [(0, cssr_1.cB)('menu-item-content-header', {
  opacity: 0
}), (0, cssr_1.cE)('arrow', {
  opacity: 0
}), (0, cssr_1.cE)('icon', {
  color: 'var(--item-icon-color-collapsed)'
})])]), (0, cssr_1.cB)('menu-item', `
 transition: background-color .3s var(--bezier);
 height: var(--item-height);
 margin-top: 6px;
 position: relative;
 `, [(0, cssr_1.c)('&::before', `
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--border-radius);
 transition: background-color .3s var(--bezier);
 `), (0, cssr_1.cNotM)('disabled', [(0, cssr_1.c)('&:active::before', {
  backgroundColor: 'var(--item-color-active)'
})]), (0, cssr_1.cM)('selected', [(0, cssr_1.c)('&::before', {
  backgroundColor: 'var(--item-color-active)'
}), (0, cssr_1.cB)('menu-item-content', [(0, cssr_1.cE)('arrow', {
  color: 'var(--arrow-color-active)'
}), (0, cssr_1.cE)('icon', {
  color: 'var(--item-icon-color-active)'
}), (0, cssr_1.cB)('menu-item-content-header', {
  color: 'var(--item-text-color-active)'
}, [(0, cssr_1.cE)('extra', {
  color: 'var(--item-text-color-active)'
})])])])]), (0, cssr_1.cB)('menu-item-content', `
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 z-index: auto;
 padding-right: 18px;
 transition:
 background-color .3s var(--bezier),
 padding-left .3s var(--bezier),
 border-color .3s var(--bezier);
 `, [(0, cssr_1.cM)('disabled', {
  opacity: '.45',
  cursor: 'not-allowed'
}), (0, cssr_1.cM)('collapsed', [(0, cssr_1.cE)('arrow', {
  transform: 'rotate(0)'
})]), (0, cssr_1.cM)('child-active', [(0, cssr_1.cB)('menu-item-content-header', {
  color: 'var(--item-text-color-child-active)'
}, [(0, cssr_1.cE)('extra', {
  color: 'var(--item-text-color-child-active)'
})]), (0, cssr_1.cE)('arrow', {
  color: 'var(--arrow-color-child-active)'
}), (0, cssr_1.cE)('icon', {
  color: 'var(--item-icon-color-child-active)'
})]), (0, cssr_1.cNotM)('disabled', [hoverStyle(null, [(0, cssr_1.cE)('arrow', {
  color: 'var(--arrow-color-hover)'
}), (0, cssr_1.cE)('icon', {
  color: 'var(--item-icon-color-hover)'
}), (0, cssr_1.cB)('menu-item-content-header', {
  color: 'var(--item-text-color-hover)'
}, [(0, cssr_1.cE)('extra', {
  color: 'var(--item-text-color-hover)'
})])])]), (0, cssr_1.cE)('icon', `
 grid-area: icon;
 color: var(--item-icon-color);
 transition:
 color .3s var(--bezier),
 font-size .3s var(--bezier),
 margin-right .3s var(--bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `), (0, cssr_1.cE)('arrow', `
 grid-area: arrow;
 font-size: 16px;
 color: var(--arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--bezier),
 transform 0.2s var(--bezier),
 opacity 0.2s var(--bezier);
 `), (0, cssr_1.cB)('menu-item-content-header', `
 grid-area: content;
 transition:
 color .3s var(--bezier),
 opacity .3s var(--bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--item-text-color);
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
 `)]), (0, cssr_1.cE)('extra', `
 font-size: .93em;
 color: var(--group-text-color);
 transition: color .3s var(--bezier);
 `)])]), (0, cssr_1.cB)('submenu', {
  cursor: 'pointer',
  position: 'relative',
  marginTop: '6px'
}, [(0, cssr_1.cB)('menu-item-content', `
 height: var(--item-height);
 `), (0, cssr_1.cB)('submenu-children', {
  overflow: 'hidden',
  padding: 0
}, [(0, fade_in_height_expand_cssr_1.default)({
  duration: '.2s'
})])]), (0, cssr_1.cB)('menu-item-group', [(0, cssr_1.cB)('menu-item-group-title', `
 margin-top: 6px;
 color: var(--group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--bezier),
 color .3s var(--bezier);
 `)])]), (0, cssr_1.cB)('menu-tooltip', [(0, cssr_1.c)('a', `
 color: inherit;
 text-decoration: none;
 `)]), (0, cssr_1.cB)('menu-divider', `
 transition: background-color .3s var(--bezier);
 background-color: var(--divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);

function hoverStyle(props, children) {
  return [(0, cssr_1.cM)('hover', props, children), (0, cssr_1.c)('&:hover', props, children)];
}