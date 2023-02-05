const input = document.querySelector('#input');
const itemsContainer = document.querySelector('#items');

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemText = input.value;       

        const itemNew = document.createElement('div');
        itemNew.classList.add('element');
        itemNew.textContent = itemText;

        itemNew.addEventListener('click', function() {
            itemNew.classList.toggle('done');
        })

        itemsContainer.append(itemNew);

        input.value = '';
    }
})




/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
