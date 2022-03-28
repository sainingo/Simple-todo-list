const addButton = document.querySelector('.add-todo');
const inputValue = document.querySelector('.input-field');
const todoContainer = document.querySelector('.to-do-list');


addButton.addEventListener('click', () => {
 
    if(inputValue.value.trim() !== '') {
        let localData = JSON.parse(localStorage.getItem('todos'));
    if(localData === null) {
        storeData = []
    }else {
       storeData = localData
    }
    storeData.push(inputValue.value)
    localStorage.setItem('todos', JSON.stringify(storeData))
    inputValue.value = ''
    }
    displayContent();
})


function displayContent() {
    let output = '';
    let localData = JSON.parse(localStorage.getItem('todos'));
   if(localData !== null) {
    localData.forEach((data) =>  {
        output += `
        <h3 class="todo-items" >${data} </h3>
        `
        todoContainer.innerHTML = output;
    });
   }else {
       console.log('No data found');
   }
}

displayContent()

