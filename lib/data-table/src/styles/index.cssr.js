"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const fade_in_scale_up_cssr_1 = __importDefault(require("../../../_styles/transitions/fade-in-scale-up.cssr"));

const cssr_1 = require("../../../_utils/cssr");

const fixedColumnStyle = createFixedColumnStyle(); // vars:
// --font-size
// --th-padding
// --td-padding
// --bezier
// --border-radius
// --line-height
// --border-color
// --border-color-modal
// --border-color-popover
// --th-color
// --th-color-hover
// --th-color-modal
// --th-color-hover-modal
// --th-color-popover
// --th-color-hover-popover
// --td-color
// --td-color-hover
// --td-color-modal
// --td-color-hover-modal
// --td-color-popover
// --td-color-hover-popover
// --th-text-color
// --td-text-color
// --th-font-weight
// --th-button-color-hover
// --th-icon-color
// --th-icon-color-active
// --filter-size
// --action-divider-color
// --action-padding
// --action-button-margin
// --pagination-margin
// --empty-padding
// --sorter-size
// --loading-size
// --loading-color
// --opacity-loading
// --box-shadow-before used in Body.tsx
// --box-shadow-after used in Body.tsx

exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('data-table', `
 width: 100%;
 font-size: var(--font-size);
 display: flex;
 flex-direction: column;
 position: relative;
 --merged-th-color: var(--th-color);
 --merged-td-color: var(--td-color);
 --merged-border-color: var(--border-color);
 --merged-th-color-hover: var(--th-color-hover);
 --merged-td-color-hover: var(--td-color-hover);
 --merged-td-color-striped: var(--td-color-striped);
 `, [(0, cssr_1.cM)('flex-height', [(0, cssr_1.c)('>', [(0, cssr_1.cB)('data-table-wrapper', `
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 `, [(0, cssr_1.c)('>', [(0, cssr_1.cB)('data-table-base-table', `
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 `, [(0, cssr_1.c)('>', [(0, cssr_1.cB)('data-table-base-table-body', 'flex-basis: 0;', [// last-child means there is no empty icon
// body is a scrollbar, we need to override height 100%
(0, cssr_1.c)('&:last-child', 'flex-grow: 1;')])])])])])])]), (0, cssr_1.c)('>', [(0, cssr_1.cB)('base-loading', `
 color: var(--loading-color);
 font-size: var(--loading-size);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 transition: color .3s var(--bezier);
 `, [(0, fade_in_scale_up_cssr_1.default)({
  originalTransform: 'translateX(-50%) translateY(-50%)'
})])]), (0, cssr_1.cB)('data-table-expand-trigger', 'cursor: pointer;'), (0, cssr_1.cB)('data-table-expand-placeholder', `
 margin-right: 8px;
 display: inline-block;
 width: 16px;
 height: 1px;
 `), (0, cssr_1.cB)('data-table-indent', `
 display: inline-block;
 height: 1px;
 `), (0, cssr_1.cB)('data-table-expand-trigger', `
 margin-right: 8px;
 cursor: pointer;
 font-size: 16px;
 vertical-align: -0.2em;
 `), (0, cssr_1.cB)('data-table-thead', {
  transition: 'background-color .3s var(--bezier)',
  backgroundColor: 'var(--merged-th-color)'
}), (0, cssr_1.cB)('data-table-tr', `
 box-sizing: border-box;
 background-clip: padding-box;
 transition: background-color .3s var(--bezier);
 `, [(0, cssr_1.cM)('striped', 'background-color: var(--merged-td-color-striped);', [(0, cssr_1.cB)('data-table-td', 'background-color: var(--merged-td-color-striped);')]), (0, cssr_1.c)('&:hover', 'background-color: var(--merged-td-color-hover);', [(0, cssr_1.cB)('data-table-td', 'background-color: var(--merged-td-color-hover);')])]), (0, cssr_1.cB)('data-table-th', `
 padding: var(--th-padding);
 position: relative;
 text-align: start;
 box-sizing: border-box;
 background-color: var(--merged-th-color);
 border-color: var(--merged-border-color);
 border-bottom: 1px solid var(--merged-border-color);
 color: var(--th-text-color);
 transition:
 border-color .3s var(--bezier),
 color .3s var(--bezier),
 background-color .3s var(--bezier);
 font-weight: var(--th-font-weight);
 `, [(0, cssr_1.cM)('filterable', {
  paddingRight: '36px'
}), fixedColumnStyle, (0, cssr_1.cM)('selection', `
 padding: 0;
 text-align: center;
 line-height: 0;
 z-index: 3;
 `), (0, cssr_1.cE)('ellipsis', `
 display: inline-block;
 vertical-align: bottom;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 `), (0, cssr_1.cM)('hover', {
  backgroundColor: 'var(--merged-th-color-hover)'
}), (0, cssr_1.cM)('sortable', {
  cursor: 'pointer'
}, [(0, cssr_1.cE)('ellipsis', {
  maxWidth: 'calc(100% - 18px)'
}), (0, cssr_1.c)('&:hover', {
  backgroundColor: 'var(--merged-th-color-hover)'
})]), (0, cssr_1.cB)('data-table-sorter', `
 height: var(--sorter-size);
 width: var(--sorter-size);
 margin-left: 4px;
 position: relative;
 display: inline-flex;
 vertical-align: -0.2em;
 color: var(--th-icon-color);
 transition: 
 transform .3s var(--bezier),
 color .3s var(--bezier);
 `, [(0, cssr_1.cM)('desc', {
  transform: 'rotate(0)'
}), (0, cssr_1.cM)('asc', {
  transform: 'rotate(-180deg)'
}), (0, cssr_1.cM)('asc, desc', {
  color: 'var(--th-icon-color-active)'
})]), (0, cssr_1.cB)('data-table-filter', `
 position: absolute;
 z-index: auto;
 right: 0;
 width: 36px;
 top: 0;
 bottom: 0;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition:
 background-color .3s var(--bezier),
 color .3s var(--bezier);
 font-size: var(--filter-size);
 color: var(--th-icon-color);
 `, [(0, cssr_1.c)('&:hover', `
 background-color: var(--th-button-color-hover);
 `), (0, cssr_1.cM)('show', `
 background-color: var(--th-button-color-hover);
 `), (0, cssr_1.cM)('active', `
 background-color: var(--th-button-color-hover);
 color: var(--th-icon-color-active);
 `)])]), (0, cssr_1.cB)('data-table-td', `
 padding: var(--td-padding);
 text-align: start;
 box-sizing: border-box;
 border: none;
 background-color: var(--merged-td-color);
 color: var(--td-text-color);
 border-bottom: 1px solid var(--merged-border-color);
 transition:
 box-shadow .3s var(--bezier),
 background-color .3s var(--bezier),
 border-color .3s var(--bezier),
 color .3s var(--bezier);
 `, [(0, cssr_1.cM)('last-row', {
  borderBottom: '0 solid var(--merged-border-color)'
}, [// make sure there is no overlap between bottom border and
// fixed column box shadow
(0, cssr_1.c)('&::after', {
  bottom: '0 !important'
}), (0, cssr_1.c)('&::before', {
  bottom: '0 !important'
})]), (0, cssr_1.cM)('summary', `
 background-color: var(--merged-th-color);
 `), (0, cssr_1.cM)('hover', {
  backgroundColor: 'var(--merged-td-color-hover)'
}), (0, cssr_1.cM)('ellipsis', `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 `), (0, cssr_1.cM)('selection, expand', `
 text-align: center;
 padding: 0;
 line-height: 0;
 `), fixedColumnStyle]), (0, cssr_1.cB)('data-table-empty', `
 padding: var(--empty-padding);
 flex-grow: 1;
 flex-shrink: 0;
 opacity: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: opacity .3s var(--bezier);
 `, [(0, cssr_1.cM)('hide', {
  opacity: 0
})]), (0, cssr_1.cE)('pagination', `
 margin: var(--pagination-margin);
 display: flex;
 justify-content: flex-end;
 `), (0, cssr_1.cB)('data-table-wrapper', `
 position: relative;
 opacity: 1;
 transition: opacity .3s var(--bezier), border-color .3s var(--bezier);
 border-top-left-radius: var(--border-radius);
 border-top-right-radius: var(--border-radius);
 line-height: var(--line-height);
 `), (0, cssr_1.cM)('loading', [(0, cssr_1.cB)('data-table-wrapper', 'opacity: var(--opacity-loading);')]), (0, cssr_1.cM)('single-column', [(0, cssr_1.cB)('data-table-td', {
  borderBottom: '0 solid var(--merged-border-color)'
}, [(0, cssr_1.c)('&::after, &::before', {
  bottom: '0 !important'
})])]), (0, cssr_1.cNotM)('single-line', [(0, cssr_1.cB)('data-table-th', {
  borderRight: '1px solid var(--merged-border-color)'
}, [(0, cssr_1.cM)('last', {
  borderRight: '0 solid var(--merged-border-color)'
})]), (0, cssr_1.cB)('data-table-td', {
  borderRight: '1px solid var(--merged-border-color)'
}, [(0, cssr_1.cM)('last-col', {
  borderRight: '0 solid var(--merged-border-color)'
})])]), (0, cssr_1.cM)('bordered', [(0, cssr_1.cB)('data-table-wrapper', `
 border: 1px solid var(--merged-border-color);
 border-bottom-left-radius: var(--border-radius);
 border-bottom-right-radius: var(--border-radius);
 overflow: hidden;
 `)]), (0, cssr_1.cB)('data-table-base-table', [(0, cssr_1.cM)('transition-disabled', [(0, cssr_1.cB)('data-table-th', [(0, cssr_1.c)('&::after, &::before', {
  transition: 'none'
})]), (0, cssr_1.cB)('data-table-td', [(0, cssr_1.c)('&::after, &::before', {
  transition: 'none'
})])])]), (0, cssr_1.cM)('bottom-bordered', [(0, cssr_1.cB)('data-table-td', [(0, cssr_1.cM)('last-row', {
  borderBottom: '1px solid var(--merged-border-color)'
})])]), (0, cssr_1.cB)('data-table-table', `
 font-variant-numeric: tabular-nums;
 width: 100%;
 word-wrap: break-word;
 word-break: break-all;
 transition: background-color .3s var(--bezier);
 border-collapse: separate;
 border-spacing: 0;
 background-color: var(--merged-td-color);
 `), (0, cssr_1.cB)('data-table-base-table-header', `
 border-top-left-radius: calc(var(--border-radius) - 1px);
 border-top-right-radius: calc(var(--border-radius) - 1px);
 z-index: 3;
 overflow: scroll;
 flex-shrink: 0;
 transition: border-color .3s var(--bezier);
 scrollbar-width: none;
 `, [(0, cssr_1.c)('&::-webkit-scrollbar', {
  width: 0,
  height: 0
})]), (0, cssr_1.cB)('data-table-check-extra', `
 transition: color .3s var(--bezier);
 color: var(--th-icon-color);
 position: absolute;
 font-size: 14px;
 right: -4px;
 top: 50%;
 transform: translateY(-50%);
 z-index: 1;
 `)]), (0, cssr_1.cB)('data-table-filter-menu', [(0, cssr_1.cB)('scrollbar', {
  maxHeight: '240px'
}), (0, cssr_1.cE)('group', {
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 12px 0 12px'
}, [(0, cssr_1.cB)('checkbox', {
  marginBottom: '12px',
  marginRight: 0
}), (0, cssr_1.cB)('radio', {
  marginBottom: '12px',
  marginRight: 0
})]), (0, cssr_1.cE)('action', `
 padding: var(--action-padding);
 display: flex;
 flex-wrap: nowrap;
 justify-content: space-evenly;
 border-top: 1px solid var(--action-divider-color);
 `, [(0, cssr_1.cB)('button', [(0, cssr_1.c)('&:not(:last-child)', {
  margin: 'var(--action-button-margin)'
}), (0, cssr_1.c)('&:last-child', {
  marginRight: 0
})])]), (0, cssr_1.cB)('divider', {
  margin: '0!important'
})]), (0, cssr_1.insideModal)((0, cssr_1.cB)('data-table', `
 --merged-th-color: var(--th-color-modal);
 --merged-td-color: var(--td-color-modal);
 --merged-border-color: var(--border-color-modal);
 --merged-th-color-hover: var(--th-color-hover-modal);
 --merged-td-color-hover: var(--td-color-hover-modal);
 --merged-td-color-striped: var(--td-color-striped-modal);
 `)), (0, cssr_1.insidePopover)((0, cssr_1.cB)('data-table', `
 --merged-th-color: var(--th-color-popover);
 --merged-td-color: var(--td-color-popover);
 --merged-border-color: var(--border-color-popover);
 --merged-th-color-hover: var(--th-color-hover-popover);
 --merged-td-color-hover: var(--td-color-hover-popover);
 --merged-td-color-striped: var(--td-color-striped-popover);
 `))]);

function createFixedColumnStyle() {
  return [(0, cssr_1.cM)('fixed-left', `
 left: 0;
 position: sticky;
 z-index: 2;
 `, [(0, cssr_1.c)('&::after', `
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--bezier);
 right: -36px;
 `)]), (0, cssr_1.cM)('fixed-right', {
    right: 0,
    position: 'sticky',
    zIndex: 1
  }, [(0, cssr_1.c)('&::before', `
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--bezier);
 left: -36px;
 `)])];
}