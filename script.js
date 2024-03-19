const root = document.documentElement;
const text = document.querySelector('#theme');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    let theme;
    if (!root.classList.contains("dark-mode")) {
        theme = "Dark"
        root.classList.toggle("dark-mode");
    } else {
        theme = "Light";
        root.classList.toggle("dark-mode");
    }
    text.textContent = theme;
})