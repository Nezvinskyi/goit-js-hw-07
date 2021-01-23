
const decrementBtnRef = document.querySelector("[data-action='decrement']");
const incrementBtnRef = document.querySelector("[data-action='increment']");
const valueRef = document.querySelector('#value')

let counterValue = 0;

const onMinusClick = () => {
	counterValue -= 1;
	valueRef.textContent = counterValue;
}
const onPlusClick = () => {
	counterValue += 1;
	valueRef.textContent = counterValue;
}

decrementBtnRef.addEventListener('click', onMinusClick);
incrementBtnRef.addEventListener('click', onPlusClick);


