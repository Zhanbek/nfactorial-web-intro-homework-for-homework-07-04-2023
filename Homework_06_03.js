/*
Добавить кнопку закрытия

Есть список сообщений.

При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

*/

elements = document.querySelectorAll('.pane');

for (let i = 0; i < elements.length; i++) {
    const elem = elements[i];
    const btnClose = document.createElement("button");
    btnClose.className = 'remove-button';
    btnClose.innerHTML = '[x]';
    btnClose.addEventListener('click', ()=>elem.remove());
    elem.prepend(btnClose);
    
}
