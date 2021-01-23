const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', (e) => {
	if (e.target.value.length >= e.target.dataset.length) {
		inputRef.classList.add('valid');
		inputRef.classList.remove('invalid');
	} else {
		inputRef.classList.add('invalid');
		inputRef.classList.remove('valid');
	}
})