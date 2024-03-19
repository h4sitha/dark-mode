const root = document.documentElement;
const text = document.querySelector('#theme');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    if (text.textContent.toLowerCase() === "light") {
        text.textContent = "Dark";
    } else {
        text.textContent = "Light";
    }
})