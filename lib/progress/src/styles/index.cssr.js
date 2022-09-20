"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars
// --bezier
// --fill-color
// --font-size
// --font-size-circle
// --font-weight-circle
// --icon-color
// --icon-size-circle
// --icon-size-line
// --line-bg-processing
// --rail-color
// --rail-height
// --text-color-circle
// --text-color-line-inner
// --text-color-line-outer


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('progress', {
  display: 'inline-block'
}, [(0, cssr_1.cB)('progress-icon', `
 color: var(--icon-color);
 transition: color .3s var(--bezier);
 `), (0, cssr_1.cM)('line', `
 width: 100%;
 display: block;
 `, [(0, cssr_1.cB)('progress-content', `
 display: flex;
 align-items: center;
 `, [(0, cssr_1.cB)('progress-graph', {
  flex: 1
})]), (0, cssr_1.cB)('progress-custom-content', {
  marginLeft: '14px'
}), (0, cssr_1.cB)('progress-icon', `
 width: 30px;
 padding-left: 14px;
 height: var(--icon-size-line);
 line-height: var(--icon-size-line);
 font-size: var(--icon-size-line);
 `, [(0, cssr_1.cM)('as-text', `
 color: var(--text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--font-size);
 padding-left: 4px;
 transition: color .3s var(--bezier);
 `)])]), (0, cssr_1.cM)('circle', {
  width: '120px'
}, [(0, cssr_1.cB)('progress-custom-content', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `), (0, cssr_1.cB)('progress-text', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--font-size-circle);
 color: var(--text-color-circle);
 font-weight: var(--font-weight-circle);
 transition: color .3s var(--bezier);
 white-space: nowrap;
 `), (0, cssr_1.cB)('progress-icon', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--icon-color);
 font-size: var(--icon-size-circle);
 `)]), (0, cssr_1.cM)('multiple-circle', {
  width: '200px',
  color: 'inherit'
}, [(0, cssr_1.cB)('progress-text', `
 font-weight: var(--font-weight-circle);
 color: var(--text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--bezier);
 `)]), (0, cssr_1.cB)('progress-content', {
  position: 'relative'
}), (0, cssr_1.cB)('progress-graph', {
  position: 'relative'
}, [(0, cssr_1.cB)('progress-graph-circle', [(0, cssr_1.c)('svg', {
  verticalAlign: 'bottom'
}), (0, cssr_1.cB)('progress-graph-circle-fill', `
 stroke: var(--fill-color);
 transition:
 opacity .3s var(--bezier),
 stroke .3s var(--bezier),
 stroke-dasharray .3s var(--bezier);
 `, [(0, cssr_1.cM)('empty', {
  opacity: 0
})]), (0, cssr_1.cB)('progress-graph-circle-rail', `
 transition: stroke .3s var(--bezier);
 overflow: hidden;
 stroke: var(--rail-color);
 `)]), (0, cssr_1.cB)('progress-graph-line', [(0, cssr_1.cM)('indicator-inside', [(0, cssr_1.cB)('progress-graph-line-rail', {
  height: '16px',
  borderRadius: '10px'
}, [(0, cssr_1.cB)('progress-graph-line-fill', {
  height: 'inherit',
  borderRadius: '10px'
}), (0, cssr_1.cB)('progress-graph-line-indicator', `
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 line-height: 16px;
 font-size: 12px;
 color: var(--text-color-line-inner);
 transition: color .3s var(--bezier);
 `)])]), (0, cssr_1.cM)('indicator-inside-label', `
 height: 16px;
 display: flex;
 align-items: center;
 `, [(0, cssr_1.cB)('progress-graph-line-rail', {
  flex: 1,
  transition: 'background-color .3s var(--bezier)'
}), (0, cssr_1.cB)('progress-graph-line-indicator', `
 background: var(--fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--text-color-line-inner);
 transition:
 right .2s var(--bezier),
 color .3s var(--bezier),
 background-color .3s var(--bezier);
 `)]), (0, cssr_1.cB)('progress-graph-line-rail', `
 position: relative;
 overflow: hidden;
 height: var(--rail-height);
 border-radius: 5px;
 background-color: var(--rail-color);
 transition: background-color .3s var(--bezier);
 `, [(0, cssr_1.cB)('progress-graph-line-fill', `
 background: var(--fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--bezier),
 max-width .2s var(--bezier);
 `, [(0, cssr_1.cM)('processing', [(0, cssr_1.c)('&::after', `
 content: "";
 background-image: var(--line-bg-processing);
 animation: progress-processing-animation 2s var(--bezier) infinite;
 `)])])])])])]), (0, cssr_1.c)('@keyframes progress-processing-animation', `
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]);