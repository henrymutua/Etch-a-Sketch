const body  = document.body;

const container = document.createElement('div');

container.setAttribute('class', 'container');
body.appendChild(container);

const div1 = document.createElement('div');
div1.setAttribute('id', 'one');
container.appendChild(div1);

const div2 = document.createElement('div');
div2.setAttribute('id', 'two');
container.appendChild(div2);

const div3 = document.createElement('div');
div3.setAttribute('id', 'three');
container.appendChild(div3);

const div4 = document.createElement('div');
div4.setAttribute('id', 'four');
container.appendChild(div4);

const div5 = document.createElement('div');
div5.setAttribute('id', 'five');
container.appendChild(div5);

const div6 = document.createElement('div');
div6.setAttribute('id', 'six');
container.appendChild(div6);

console.log(container);