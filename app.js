const changeText = document.querySelector('.change');
const clickButton = document.getElementById('hi_button');

clickButton.addEventListener('click', () => {
    const promt = prompt('Say your name');
    changeText.textContent = promt;
})