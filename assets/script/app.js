'use strict';

class Shape{
  //constructor
  constructor(name, colour){
    this._name = name;
    this._colour = colour;
  }
  //getter
  get name() { return this._name; }
  get colour() { return this._colour; }

  //methods
  getInfo(){
    const info = document.querySelector('.info');
    info.innerText = `Unit ${shapeIndex + 1}: ${this._colour} ${this._name}`;
  }
}

const shapes = [];
let shapeIndex = 0;

function createShape(){
  const colourSelect = document.getElementById('colourselect');
  const shapeSelect = document.getElementById('shapeselect');
  const boxes = document.querySelectorAll('.box');
  const create = document.getElementById('push');

  if(shapeIndex >= boxes.length){
      alert('Box is full!');
      create.innerText = 'Reset';
      create.onclick = reset;
      create.classList.remove('reset');
      return;
    }
  const currentShape = shapeSelect.value;
  const currentColor = colourSelect.value;

  const shape = new Shape(currentShape, currentColor);
  shapes.push(shape);
  shape.getInfo();

  const box = boxes[shapeIndex];
  box.classList.remove('circle', 'square', 'blue', 'green', 'orange', 'pink', 'purple');
  box.classList.add(`${currentShape}`, `${currentColor}`);
  box.onclick = () => shape.getInfo();
  shapeIndex++;
}

function reset(){
    const create = document.getElementById('push');
    const boxes = document.querySelectorAll('.box');
    const info = document.querySelector('.info');
    boxes.forEach(box => {
      box.classList.remove('circle', 'square', 'blue', 'green', 'orange', 'pink', 'purple');
    })
    shapeIndex = 0;
    shapes.length = 0;
    create.innerText = 'Create';
    create.onclick = createShape;
    info.innerText = '';
    return;
  }

document.addEventListener('DOMContentLoaded', () => {
  const create = document.getElementById('push');
  create.onclick = createShape;
});
