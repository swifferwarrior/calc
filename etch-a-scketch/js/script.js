const div = document.createElement('div');
const main = document.createElement('main');
const body = document.getElementById('body');
// const div = Document.createElement('div');
// const main = Document.createElement('main');
// const body = Document.getElementByName('body');
// html.querySelector(body);
// let main = document.getElementsByTagName('main');

body.appendChild(main);
body.style.backgroundColor = "black";

main.appendChild(div);
// main.style.backgroundColor = 'grey';

div.setAttribute('id', 'sketchboard')
div.style.display = 'grid';
// div.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, fr); border: 1px solid white');
div.style.gridTemplateColumns = 'repeat(16, 50px)';
div.style.gridTemplateRows = '50px repeat(15, 50px)';
div.style.border = '1px solid white';
div.style.rowGap = '1px';
div.style.columnGap = '1px';