const form = document.getElementById('form');
const username = document.getElementById('username');

const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}



//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}


//check input Length
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
    }else {
        showSucces(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}
{

    const
        intRx = /\d/,
        integerChange = (event) => {
            if (
                (event.key.length > 1) ||
                ( (event.key === "-") && (!event.currentTarget.value.length) ) ||
                intRx.test(event.key)
            ) return;
            event.preventDefault();
        };

    for (let input of document.querySelectorAll(
        'input[type="number"][step="1"]'
    )) input.addEventListener("keydown", integerChange);

}

//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([username,  password, password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);

    checkPasswordMatch(password, password2);
});