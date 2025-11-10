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
  const create = document.getElementById('push');
  const grid = document.querySelector('.grid-container');

  if(shapeIndex >= 20){
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

  
  const box = document.createElement("div");
  box.classList.add("box", currentShape, currentColor);
  box.onclick = () => shape.getInfo(shapeIndex);
  grid.appendChild(box);
  shape.getInfo(shapeIndex);
  shapeIndex++;
}

function reset(){
    const create = document.getElementById('push');
    const grid = document.querySelector('.grid-container');
    const info = document.querySelector('.info');
    grid.innerHTML = '';
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
