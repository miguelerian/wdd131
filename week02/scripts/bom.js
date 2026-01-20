const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {

    if (input.value.trim() !== '') {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = '';
    }

    input.focus();
});

list.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        list.removeChild(e.target.parentElement);
        input.focus();
    }
});
