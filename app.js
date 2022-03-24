const addButton = document.querySelector('.add-todo');
const inputValue = document.querySelector('.input-field');
const todoContainer = document.querySelector('.to-do-list');


addButton.addEventListener('click', () => {
    const todoValue = inputValue.value.toLowerCase();
    if(todoValue !== ''){
        const h3 = document.createElement('h3');
        h3.classList.add('todo-items');
        h3.textContent = todoValue;
        todoContainer.appendChild(h3);
        inputValue.value = '';
    } else {
        alert('You need to Enter a Todo List');
    }
   
})