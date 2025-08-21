document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todolist = document.getElementById('todo-list');
    console.log(todoInput)

    addButton.addEventListener('click', addTodo);

    document.addEventListener('keypress', (event) => {
        if (event.key == 'Enter') {
            addTodo();
        }
    })


    function addTodo() {

        //pegar o que está escrito (value pega o que o usuário digitou trim() para eliminar espaços)
        const texto = todoInput.value.trim()
        //verificar se tem algo
        if (texto !== '') {

            //criar uma TAG li
            const li = document.createElement('li')
            li.textContent = texto;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Deletar";
            deleteButton.className = "delete-button";
            //colocando uma ação no botão
            deleteButton.addEventListener('click', () => {

                //remover  li do todo list
                todolist.removeChild(li);
            })
            li.appendChild(deleteButton);

            todolist.appendChild(li);
            todoInput.value = '';
            todoInput.focus();

        }
        //add na lista
    }
})
