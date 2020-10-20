var listElemnt = document.querySelector('#app ul');
var inputElemnt = document.querySelector('#app input');
var buttonElemnt = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElemnt.innerHTML = '';
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo +' | ');
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var position = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ position +')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElemnt.appendChild(todoElement);

    }
}

renderTodos();

function addTodo() {
    var todoText = inputElemnt.value;
    todos.push(todoText);
    inputElemnt.value = '';
    renderTodos();
    saveToStorage();
}

buttonElemnt.onclick = addTodo;

function deleteTodo(position) {
    todos.splice(position, 1);
    renderTodos();
    saveToStorage()
}

function saveToStorage() {

    localStorage.setItem('list_todos', JSON.stringify(todos));
}

