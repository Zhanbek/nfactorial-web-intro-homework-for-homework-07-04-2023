/*
Скрыть элемент по нажатию кнопки

Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
*/

const btn = document.getElementById('myButton');
console.log(btn);

const myText = document.getElementById('text');
console.log(myText);

btn.addEventListener('click', function() {
    myText.remove();
});