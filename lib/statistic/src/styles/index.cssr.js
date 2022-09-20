"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --bezier
// --label-font-size
// --label-font-weight
// --label-text-color
// --value-font-weight
// --value-prefix-text-color
// --value-suffix-text-color
// --value-text-color


exports.default = (0, cssr_1.cB)('statistic', [(0, cssr_1.cE)('label', `
 font-weight: var(--label-font-weight);
 transition: .3s color var(--bezier);
 font-size: var(--label-font-size);
 color: var(--label-text-color);
 `), (0, cssr_1.cB)('statistic-value', `
 margin-top: 4px;
 font-weight: var(--value-font-weight);
 `, [(0, cssr_1.cE)('prefix', `
 margin: 0 4px 0 0;
 font-size: 24px;
 transition: .3s color var(--bezier);
 color: var(--value-prefix-text-color);
 `, [(0, cssr_1.cB)('icon', {
  verticalAlign: '-0.125em'
})]), (0, cssr_1.cE)('content', `
 font-size: 24px;
 transition: .3s color var(--bezier);
 color: var(--value-text-color);
 `), (0, cssr_1.cE)('suffix', `
 margin: 0 0 0 4px;
 font-size: 24px;
 transition: .3s color var(--bezier);
 color: var(--value-suffix-text-color);
 `, [(0, cssr_1.cB)('icon', {
  verticalAlign: '-0.125em'
})])])]);