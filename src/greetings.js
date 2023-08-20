const loginForm = document.querySelector('.login__form');
const loginInput = document.querySelector('.login__form input');
const greeting = document.querySelector('.greeting');
const loginComponents = document.querySelectorAll('.login--component');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const savedUserName = localStorage.getItem(USERNAME_KEY);

function showLoginComponent() {
  loginComponents.forEach((component) =>
    component.classList.remove(HIDDEN_CLASSNAME)
  );
  greeting.classList.add('hidden');
}

if (savedUserName === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginComponents.forEach((component) =>
    component.classList.add(HIDDEN_CLASSNAME)
  );
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // show the greetings
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginComponents.forEach((component) =>
    component.classList.add(HIDDEN_CLASSNAME)
  );
  showGreeting(savedUserName);
  setTimeout(showLoginComponent, 1500);
}

function onLoginSubmit(event) {
  event.preventDefault();

  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  showGreeting(userName);
  setTimeout(showLoginComponent, 1500);
}

function showGreeting(userName) {
  greeting.innerText = `Hello ${userName} :)`;
  greeting.classList.remove('hidden');
}
