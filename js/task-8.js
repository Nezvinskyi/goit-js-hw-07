const boxesRef = document.querySelector('#boxes');

const controlsRef = document.querySelector('#controls');
const inputRef = document.querySelector('#controls>input');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef =document.querySelector('[data-action="destroy"]');

controlsRef.addEventListener('submit', (event) => {
	event.preventDefault();
	createBoxes(inputRef.value);
	inputRef.value = '';
})

destroyBtnRef.addEventListener('click', destroyBoxes)

function createBoxes(number) {
	destroyBoxes();
	let boxSize = 30;
	for (let i = 1; i <= number; i++) {
		const boxRef = document.createElement('div');
		boxRef.classList.add('box');
		boxRef.style.cssText = `width: ${boxSize}px; height: ${boxSize}px`;

		boxRef.style.backgroundColor = boxColorizer();
		boxesRef.insertAdjacentElement("afterbegin", boxRef)
		boxSize += 10;
	}
}

function boxColorizer() {
	const rgb = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`
	return rgb
}

function destroyBoxes() {
	boxesRef.innerHTML = '';
}





