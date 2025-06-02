const form = document.forms.myForm;
const myFormElements = form.elements;

const nameInput = myFormElements.name;
const emailInput = myFormElements.email;
const ageInput = myFormElements.age;
const genderRadio = myFormElements.gender;
const professionOption = myFormElements.profession;
const passwordInput = myFormElements.password;
const agreeTermsCheckbox = myFormElements.agreeTerms;
const submitBtn = document.getElementById('submitBtn');

const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorAge = document.getElementById('errorAge');
const errorRadio = document.getElementById('errorRadio');
const errorProfession = document.getElementById('errorProfession');
const errorPassword = document.getElementById('errorPassword');
const errorAgreeTerms = document.getElementById('errorAgreeTerms');

const validateEmail = (email) => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
};

const showErrors = () => {
    let hasError = false;

    if (!nameInput.value.trim()) {
        errorName.textContent = 'Введите имя пользователя.';
        errorName.style.display = 'block';
        hasError = true;
    } else {
        errorName.style.display = 'none';
    }

    if (!validateEmail(emailInput.value)) {
        errorEmail.textContent = 'Введите корректный email.';
        errorEmail.style.display = 'block';
        hasError = true;
    } else {
    errorEmail.style.display = 'none';
    }

    if (!ageInput.value.trim()) {
        errorAge.textContent = 'Введите возраст.';
        errorAge.style.display = 'block';
        hasError = true;
    } else {
        errorAge.style.display = 'none';
    }

    let genderSelected = false;
    for (let radio of genderRadio) {
        if (radio.checked) {
        genderSelected = true;
        }
    }
    if (!genderSelected) {
        errorRadio.textContent = 'Выберите свой пол.';
        errorRadio.style.display = 'block';
        hasError = true;
    } else {
        errorRadio.style.display = 'none';
    }

    if (!professionOption.value) {
        errorProfession.textContent = 'Выберите профессию.';
        errorProfession.style.display = 'block';
        hasError = true;
    } else {
        errorProfession.style.display = 'none';
    }

    if (!passwordInput.value || !passwordInput.validity.valid) {
        errorPassword.textContent = 'Введите корректный пароль.';
        errorPassword.style.display = 'block';
        hasError = true;
    } else {
        errorPassword.style.display = 'none';
    }

    if (!agreeTermsCheckbox.checked) {
        errorAgreeTerms.textContent = 'Необходимо согласие с условиями.';
        errorAgreeTerms.style.display = 'block';
        hasError = true;
    } else {
        errorAgreeTerms.style.display = 'none';
    }

    return !hasError;
    };

    submitBtn.disabled = true;

    agreeTermsCheckbox.addEventListener('change', () => {
    const valid = showErrors();
    submitBtn.disabled = !valid;
    });

    form.addEventListener('input', () => {
    if (agreeTermsCheckbox.checked) {
        const valid = showErrors();
        submitBtn.disabled = !valid;
    }
    });

    form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (showErrors()) {
        console.log('Форма отправлена!');
        form.reset();
        submitBtn.disabled = true;
    }
    });
