import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedbackFormState';

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onFormSubmit);

onSavedTextareaInput();

function onFormSubmit(e) {
  e.preventDefault();

  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (!email || !message) return alert('Все поля должны быть заполнены');

  console.log({ email, message });

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputForm(e) {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  if (e.target.name === 'email') {
    data.email = e.target.value;
  } else if (e.target.name === 'message') {
    data.message = e.target.value;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function onSavedTextareaInput(e) {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (data) {
    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';
  }
}
