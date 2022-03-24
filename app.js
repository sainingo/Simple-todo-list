const addButton = document.querySelector('.add-todo');
const inputValue = document.querySelector('.input-field');
const todoContainer = document.querySelector('.to-do-list');

const storeData = [];
let storageData;

addButton.addEventListener('click', () => {
    const todoValue = inputValue.value.toLowerCase();
    if(todoValue !== ''){  
        const h3 = document.createElement('h3');
        h3.classList.add('todo-items');
        h3.textContent = todoValue;
        todoContainer.appendChild(h3);
        
       
    } else {
        alert('You need to Enter a Todo List');
    }
    storeData.push(inputValue.value.toLowerCase());     
    inputValue.value = '';
    localStorage.setItem('todos', JSON.stringify(storeData));
    // pageReload()
    
})
console.log(storeData);

function pageReload() {
        window.addEventListener('DOMContentLoaded', (event) => {
            if(localStorage.getItem('todos') !== null) {
            console.log('local contains some data');
          const localData = JSON.parse(localStorage.getItem('todos')) 
          localData.forEach((data) => {
            const h3 = document.createElement('h3');
            h3.classList.add('todo-items');
            h3.textContent = data;
            todoContainer.appendChild(h3);
          }) 
            
        }else {
            console.log('No Data found');
        }
        });
   
}

pageReload()