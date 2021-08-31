const formElement = document.querySelector('.form');
const inputElement = document.querySelector('#email-input');
const errorMessageElement = document.querySelector('.error-message');

formElement.addEventListener('submit', (e) => {
	e.preventDefault();

	const inputValue = inputElement.value;
	if (inputValue === '') {
		formElement.className = 'form error';
		errorMessageElement.innerText = 'This field cannot be blank';
	} else if (!inputValue.includes('@')) {
		formElement.className = 'form error';
		errorMessageElement.innerText = 'Please provide a valid email';
	} else {
		formElement.className = 'form';
	}
});
