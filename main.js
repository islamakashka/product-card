// Покраска всех карточек 

const productCards = document.querySelectorAll('.product-card');
const changeColorCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorCardButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card')

changeColorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = blueColorHash;
})

// Open Google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click' , openGoogle)

function openGoogle() {
    const question = confirm('Вы действительно хотите открыть Google?');

    if (question == true) {
        window.open('https://google.com');
    } else {
        return;
    }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('Дз №4'))

function outputConsoleLog(message) {
    alert(message)
    console.log(message)
}

// Дз №6: Вывод заголовка в консоль

const outputTitleButton = document.querySelector('.products__title');

outputTitleButton.addEventListener('mouseover', () => {
    console.log(outputTitleButton.textContent);
});

// Смена цвета заголовка

const changeTitleColorButton = document.querySelector('#change-title-color');

changeTitleColorButton.addEventListener('click', () => {
    outputTitleButton.classList.toggle('products__title--red');
});