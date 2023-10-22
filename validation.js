//function to validate first name of the two forms
function validateFirstName(formId) {
    var firstNameInput;
    var firstNameError;
    if(formId === "form1"){
        //set form1 fields to the variables
        firstNameInput = document.getElementById('firstName1');
        firstNameError = document.getElementById('first-name1-error');
    }
    else{
        //set form2 fields to the variables
        firstNameInput = document.getElementById('firstName2');
        firstNameError = document.getElementById('first-name2-error');
    }

    const namePattern = /^[a-zA-Z\s]+$/; //regex validation for names to accept only a-z and A-Z letters
    const isValidFirstName = namePattern.test(firstNameInput.value);//validate input

    if (!isValidFirstName) {
        //if  notvalid
        firstNameError.textContent = 'Invalid First Name'; //set error messege
        firstNameInput.classList.add('error-message'); //set style 'error-messsge' for the input field
        return false;
    } else {
        //if valid
        firstNameError.textContent = ''; //set error messege
        firstNameInput.classList.remove('error-message');//remove added style 'error-messsge' from the input field
        return true;
    }
}

//function to validate last name of the two forms
function validateLastName(formId) {
    var lastNameInput;
    var lastNameError;
    if(formId === "form1"){
        //set form1 fields to the variables
        lastNameInput = document.getElementById('lastName1');
        lastNameError = document.getElementById('last-name1-error');
    }
    else{
        //set form2 fields to the variables
        lastNameInput = document.getElementById('lastName2');
        lastNameError = document.getElementById('last-name2-error');
    }

    const namePattern = /^[a-zA-Z\s]+$/; //regex validation for names to accept only a-z and A-Z letters
    const isValidLastName = namePattern.test(lastNameInput.value);//validate input

    if (!isValidLastName) {
        //if  notvalid
        lastNameError.textContent = 'Invalid Last Name';//set error messege
        lastNameInput.classList.add('error-message'); //set style 'error-messsge' for the input field
        return false;
    } else {
        //if valid
        lastNameError.textContent = '';//set error messege
        lastNameInput.classList.remove('error-message');//remove added style 'error-messsge' from the input field
        return true;
    }
}

//function to validate email of the two forms
function validateEmail(formId) {
    var emailInput;
    var emailError;
    if(formId === "form1"){
        //set form1 fields to the variables
        emailInput = document.getElementById('email1');
        emailError = document.getElementById('email1-error');
    }
    else{
        //set form2 fields to the variables
        emailInput = document.getElementById('email2');
        emailError = document.getElementById('email2-error');
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //regex validation for an email
    const isValid = emailPattern.test(emailInput.value);//validate input

    if (!isValid) {
        //if  notvalid
        emailError.textContent = 'Invalid Email Address';//set error messege
        emailInput.classList.add('error-message');//set style 'error-messsge' for the input field
        return false;
    } else {
        //if valid
        emailError.textContent = '';//set error messege
        emailInput.classList.remove('error-message');//remove added style 'error-messsge' from the input field
        return true;
    }
}

//function to validate address of the two forms
function validateAddress(formId) {
    var addressInput;
    var addressError;
    if(formId === "form1"){
        //set form1 fields to the variables
        addressInput = document.getElementById('address1');
        addressError = document.getElementById('address1-error');
    }
    else{
        //set form2 fields to the variables
        addressInput = document.getElementById('address2');
        addressError = document.getElementById('address2-error');
    }

    //check input is not empty
    if(addressInput.value !== ''){
        addressError.textContent = '';//set error messege
        return true;
    }
    else{
        addressError.textContent = 'Address Required';//set error messege
        return false;
    }

    
}

function validateForm(event) {
    const form = event.target;
    //to identify which form is submitted, we can get the form id from the event listener

    const isFirstNameValid = validateFirstName(form.id); //form.id will return form1 or form2
    const isLastNameValid = validateLastName(form.id);
    const isEmailValid = validateEmail(form.id);
    const isAddressValid = validateAddress(form.id);

    if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isAddressValid) { //if these fields are not valid, prevent form submission
        event.preventDefault();
    }
}

//event listeners for input fields in the two forms
document.getElementById('firstName1').addEventListener('input', function(event) {
    validateFirstName('form1');
});
document.getElementById('lastName1').addEventListener('input', function(event) {
    validateLastName('form1');
});
document.getElementById('email1').addEventListener('input', function(event) {
    validateEmail('form1');
});
document.getElementById('address1').addEventListener('input', function(event) {
    validateAddress('form1');
});
document.getElementById('firstName2').addEventListener('input', function(event) {
    validateFirstName('form2');
});
document.getElementById('lastName2').addEventListener('input', function(event) {
    validateLastName('form2');
});
document.getElementById('email2').addEventListener('input', function(event) {
    validateEmail('form2');
});
document.getElementById('address2').addEventListener('input', function(event) {
    validateAddress('form2');
});

//event listeners for two submit buttons forms
document.getElementById('form1').addEventListener('submit', validateForm);
document.getElementById('form2').addEventListener('submit', validateForm);