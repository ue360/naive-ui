"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --font-size
// --icon-size
// --bezier
// --icon-color


exports.default = (0, cssr_1.cB)('popconfirm', [(0, cssr_1.cE)('body', `
 font-size: var(--font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `, [(0, cssr_1.cE)('icon', `
 display: flex;
 font-size: var(--icon-size);
 color: var(--icon-color);
 transition: color .3s var(--bezier);
 margin: 0 8px 0 0;
 `)]), (0, cssr_1.cE)('action', `
 margin-top: 8px;
 display: flex;
 justify-content: flex-end;
 `, [(0, cssr_1.cB)('button', [(0, cssr_1.c)('&:not(:last-child)', {
  marginRight: '8px'
})])])]);