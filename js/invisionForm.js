(function(){
	'use strict';
	
	var signInForm = document.invForm,
			userNameInput = signInForm.userName,
			userEmailInput = signInForm.userEmail,
			userPassInput = signInForm.userPass,
			submitBtn = signInForm.formSubmit,
			required = signInForm.querySelectorAll("[required]"),
			flag;
	
	signInForm.addEventListener('submit', function(e){
		
		if(userEmailInput.value){
				if (!/\S+@\S+\.\S+/.test(userEmailInput.value)){
					console.log('Field email is not correct format');
					flag = true;
				}
		}
		
			Array.prototype.forEach.call(required, function(element){
				if(!element.value) {
					var placeholder = element.getAttribute('placeholder');
					console.log('Required Field! ' + element.name);
					element.placeholder = 'Required field!';
					element.classList.add('required');
				} else {
					element.classList.add('success');
				}
			});
		
		if(flag){
			userEmailInput.classList.remove('success');
			userEmailInput.classList.add('required');
			userEmailInput.value = '';
			userEmailInput.placeholder = 'Wrong email format!';
			flag = false;
		}
	
	
	e.preventDefault();
	return false;	
	});
	
	signInForm.addEventListener('keypress', function(e){
		e.target.classList.remove('required');
		e.target.classList.remove('success');
	});
		
})();