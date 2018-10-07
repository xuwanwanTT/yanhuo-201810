import './index.css';
import Fire from './fire/Fire';

let fire = new Fire();

document.querySelector('#canvas-wrap').appendChild(fire.dom);
