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

const fade_in_width_expand_cssr_1 = __importDefault(require("../../../_styles/transitions/fade-in-width-expand.cssr"));

const icon_switch_cssr_1 = __importDefault(require("../../../_styles/transitions/icon-switch.cssr")); // vars:
// --bezier
// --ripple-duration
// --opacity-disabled
// --text-color
// --text-color-hover
// --text-color-pressed
// --text-color-focus
// --text-color-disabled
// --color
// --color-hover
// --color-pressed
// --color-focus
// --color-disabled
// --border
// --border-hover
// --border-pressed
// --border-focus
// --border-disabled
// --ripple-color
// --border-radius
// --height
// --width
// --font-size
// --padding
// --icon-size
// --icon-margin
// --wave-opacity
// --font-weight
//
// private-vars:
// --border-color-xxx, used for custom color


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('button', `
 font-weight: var(--font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--padding);
 height: var(--height);
 font-size: var(--font-size);
 border-radius: var(--border-radius);
 color: var(--text-color);
 background-color: var(--color);
 width: var(--width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--bezier),
 background-color .3s var(--bezier),
 opacity .3s var(--bezier),
 border-color .3s var(--bezier);
 `, [(0, cssr_1.cM)('color', [(0, cssr_1.cE)('border', {
  borderColor: 'var(--border-color)'
}), (0, cssr_1.cM)('disabled', [(0, cssr_1.cE)('border', {
  borderColor: 'var(--border-color-disabled)'
})]), (0, cssr_1.cNotM)('disabled', [(0, cssr_1.c)('&:focus', [(0, cssr_1.cE)('state-border', {
  borderColor: 'var(--border-color-focus)'
})]), (0, cssr_1.c)('&:hover', [(0, cssr_1.cE)('state-border', {
  borderColor: 'var(--border-color-hover)'
})]), (0, cssr_1.c)('&:active', [(0, cssr_1.cE)('state-border', {
  borderColor: 'var(--border-color-pressed)'
})]), (0, cssr_1.cM)('pressed', [(0, cssr_1.cE)('state-border', {
  borderColor: 'var(--border-color-pressed)'
})])])]), (0, cssr_1.cM)('disabled', {
  backgroundColor: 'var(--color-disabled)',
  color: 'var(--text-color-disabled)'
}, [(0, cssr_1.cE)('border', {
  border: 'var(--border-disabled)'
})]), (0, cssr_1.cNotM)('disabled', [(0, cssr_1.c)('&:focus', {
  backgroundColor: 'var(--color-focus)',
  color: 'var(--text-color-focus)'
}, [(0, cssr_1.cE)('state-border', {
  border: 'var(--border-focus)'
})]), (0, cssr_1.c)('&:hover', {
  backgroundColor: 'var(--color-hover)',
  color: 'var(--text-color-hover)'
}, [(0, cssr_1.cE)('state-border', {
  border: 'var(--border-hover)'
})]), (0, cssr_1.c)('&:active', {
  backgroundColor: 'var(--color-pressed)',
  color: 'var(--text-color-pressed)'
}, [(0, cssr_1.cE)('state-border', {
  border: 'var(--border-pressed)'
})]), (0, cssr_1.cM)('pressed', {
  backgroundColor: 'var(--color-pressed)',
  color: 'var(--text-color-pressed)'
}, [(0, cssr_1.cE)('state-border', {
  border: 'var(--border-pressed)'
})])]), (0, cssr_1.cB)('base-wave', `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--ripple-duration);
 animation-timing-function: var(--bezier-ease-out), var(--bezier-ease-out);
 `, [(0, cssr_1.cM)('active', {
  zIndex: 1,
  animationName: 'button-wave-spread, button-wave-opacity'
})]), typeof window !== 'undefined' && 'MozBoxSizing' in document.createElement('div').style ? (0, cssr_1.c)('&::moz-focus-inner', {
  border: 0
}) : null, (0, cssr_1.cE)('border, state-border', `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--bezier);
 pointer-events: none;
 `), (0, cssr_1.cE)('border', {
  border: 'var(--border)'
}), (0, cssr_1.cE)('state-border', {
  border: 'var(--border)',
  borderColor: '#0000',
  zIndex: 1
}), (0, cssr_1.cE)('icon', `
 margin: var(--icon-margin);
 margin-left: 0;
 height: var(--icon-size);
 width: var(--icon-size);
 max-width: var(--icon-size);
 font-size: var(--icon-size);
 position: relative;
 flex-shrink: 0;
 `, [(0, cssr_1.cB)('icon-slot', `
 height: var(--icon-size);
 width: var(--icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 `, [(0, icon_switch_cssr_1.default)({
  top: '50%',
  originalTransform: 'translateY(-50%)'
})]), (0, fade_in_width_expand_cssr_1.default)()]), (0, cssr_1.cE)('content', `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `, [(0, cssr_1.c)('~', [(0, cssr_1.cE)('icon', {
  margin: 'var(--icon-margin)',
  marginRight: 0
})])]), (0, cssr_1.cM)('block', `
 display: flex;
 width: 100%;
 `), (0, cssr_1.cM)('dashed', [(0, cssr_1.cE)('border, state-border', {
  borderStyle: 'dashed !important'
})]), (0, cssr_1.cM)('disabled', {
  cursor: 'not-allowed',
  opacity: 'var(--opacity-disabled)'
})]), (0, cssr_1.c)('@keyframes button-wave-spread', {
  from: {
    boxShadow: '0 0 0.5px 0 var(--ripple-color)'
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: '0 0 0.5px 4.5px var(--ripple-color)'
  }
}), (0, cssr_1.c)('@keyframes button-wave-opacity', {
  from: {
    opacity: 'var(--wave-opacity)'
  },
  to: {
    opacity: 0
  }
})]);