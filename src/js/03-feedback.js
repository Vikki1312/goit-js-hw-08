import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.input.setAttribute('required', '');

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormDate, 500));

let formData = {};

populateTextarea();

function onFormDate(evt) {
  formData.email = refs.input.value;
  formData.message = refs.textarea.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedSaveMessage = JSON.parse(savedMessage);
  console.log(parsedSaveMessage);
  if (savedMessage) {
    refs.input.value = parsedSaveMessage.email;
    refs.textarea.value = parsedSaveMessage.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
