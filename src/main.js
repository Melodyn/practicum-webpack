import './style.css';
import favicon from './practicum.png'; /* подключаем изображение в HTML */
import iconClose from './close.svg'; /* подключаем изображение в JS */
import { join } from './join.js'; /* подключаем JS-модуль */

function component() {
  const elementHello = document.createElement('span');
  const elementImage = document.createElement('img');

  elementHello.innerHTML = join(['Hello', 'webpack'], ' ');
  elementHello.classList.add('hello');

  elementImage.src = iconClose; /* вычисляется путь к изображению */
  elementImage.classList.add('background');

  elementHello.append(elementImage);

  return elementHello;
}

document.body.append(component());
