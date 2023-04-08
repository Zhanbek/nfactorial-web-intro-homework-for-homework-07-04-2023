/*
Какой обработчик запустится?

В переменной button находится кнопка. Изначально на ней нет обработчиков.

Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

*/

const button = document.getElementById('mySecondButton');

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

/*
Ответ: сработают обработчики из строк 12 и 16, потому что в строке 14 методу removeEventListener передаётся другая callback-функция,
идентичная той, что была указана в строке 12 в методе addEventListener.
*/