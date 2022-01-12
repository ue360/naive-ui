import { cB, c } from '../../../_utils/cssr';
import fadeInTransition from '../../../_styles/transitions/fade-in.cssr';
import fadeInScaleUpTransition from '../../../_styles/transitions/fade-in-scale-up.cssr'; // vars:
// --bezier-ease-out
// --box-shadow
// --color
// --text-color

export default c([cB('modal-container', `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), cB('modal-mask', `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [fadeInTransition({
  enterDuration: '.25s',
  leaveDuration: '.25s',
  enterCubicBezier: 'var(--bezier-ease-out)',
  leaveCubicBezier: 'var(--bezier-ease-out)'
})]), cB('modal-body-wrapper', `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [cB('modal-scroll-content', `
 min-height: 100%;
 display: flex;
 position: relative;
 `)]), cB('modal', `
 align-self: center;
 color: var(--text-color);
 margin: auto;
 box-shadow: var(--box-shadow);
 `, [fadeInScaleUpTransition({
  duration: '.25s',
  enterScale: '.5'
})])]);