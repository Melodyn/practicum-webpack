import './style.css';
import iconClose from './close.svg';
import { join } from './join.js';

function component() {
  const elementHello = document.createElement('span');
  const elementImage = document.createElement('img');

  elementHello.innerHTML = join(['Hello', 'webpack'], ' ');
  elementHello.classList.add('hello');

  elementImage.src = iconClose;
  elementImage.classList.add('background');

  elementHello.appendChild(elementImage);

  return elementHello;
}

document.body.appendChild(component());
