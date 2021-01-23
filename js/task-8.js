{/* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Створити</button>
  <button type="button" data-action="destroy">Очистити</button>
</div>

<div id="boxes"></div> */}

const boxesRef = document.querySelector('#boxes');

const controlsRef = document.querySelector('#controls');
const inputRef = document.querySelector('#controls>input');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef =document.querySelector('[data-action="destroy"]');



controlsRef.addEventListener('submit', (event) => {
	event.preventDefault();
	boxCreator(inputRef.value);
	inputRef.value = '';
})

destroyBtnRef.addEventListener('click', (event) => {
	boxesRef.innerHTML = '';
})

function boxCreator(number) {
	boxesRef.innerHTML = '';
	let boxSize = 30;
	for (let i = 1; i <= number; i++) {
		const boxRef = document.createElement('div');
		boxRef.classList.add('box');
		boxRef.style.width = `${boxSize}px`;
		boxRef.style.height = `${boxSize}px`;
		boxRef.style.backgroundColor = boxColorizer();
		boxesRef.insertAdjacentElement("afterbegin", boxRef)
		boxSize += 10;
	}
}

function boxColorizer() {
	const rgb = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`
	return rgb
}





