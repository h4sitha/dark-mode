const root = document.documentElement;
const text = document.querySelector('#theme');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    if (!root.classList.contains("dark-mode")) {
        text.textContent = "Dark";
        root.classList.toggle("dark-mode");
    } else {
        text.textContent = "Light";
        root.classList.toggle("dark-mode");
    }
})