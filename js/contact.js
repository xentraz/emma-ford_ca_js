const submit = document.querySelector('#submit');

const nameError = document.querySelector('.nameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const addressError = document.querySelector('.addressError');

submit.onclick = function (event) {
	event.preventDefault();

	const name = document.querySelector('#name').value.trim();
  const subject = document.querySelector('#subject').value;
  const email = document.querySelector('#email').value.trim();
  const address = document.querySelector('#address').value;

	if (testLen(name, 0)) {
		nameError.style.display = 'none';
	} else {
		nameError.style.display = 'block';
	}

  if (testLen(subject, 10)) {
		subjectError.style.display = 'none';
	} else {
		subjectError.style.display = 'block';
	}

	if (testEmail(email)) {
		emailError.style.display = 'none';
	} else {
		emailError.style.display = 'block';
	}

  if (testLen(address, 25)) {
		addressError.style.display = 'none';
	} else {
		addressError.style.display = 'block';
	}

	if (testLen(name, 0) && testLen(subject, 10) && testEmail(email) && testLen(address, 25)) {
		document.querySelector('.val_comp').innerHTML = 
		`
		<p>Thank you for contacting us. We will get back to you shortly!</p>
		`;
	} 
};

function testLen(val, lenToTest) {
	if (val.length > lenToTest) {
		return true;
	} else {
		return false;
	}
}

function testEmail(emailAddress) {
	console.log(emailAddress);
	const expression =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const result = expression.test(emailAddress); 
	console.log(result);
	return result;
}

// Why is the error message there before you start typing.. this does not happen when I try this on another repo?