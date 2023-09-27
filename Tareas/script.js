function AddTask() {
    if(document.getElementById('TextTask').value != ''){
        const Lista = document.getElementById('TaskList');
  
        // Crear un nueva div <div>
        const div = document.createElement('div');
        div.className += "Task";
        div.id += 'Lista';
        Lista.appendChild(div);

        // Crear elementos dentro del div 
        const input = document.createElement('input');
        input.className = 'myCheck';
        input.type = 'checkbox';
        const text = document.createElement('p');
        text.textContent = document.getElementById('TextTask').value;
        const Delete = document.createElement('button');
        Delete.className = 'btnDelete';
        Delete.id= 'btnDelete';
        Delete.onclick = 'DeleteTask()';

        div.appendChild(input);
        div.appendChild(text);
        div.appendChild(Delete);
    }
}

function DeleteTask() {

}


const btnAddTask = document.getElementById('NewTask');
btnAddTask.addEventListener('click', AddTask);
