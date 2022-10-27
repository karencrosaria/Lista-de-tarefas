const form = document.getElementById('lista-tarefas');
const listaTarefas = document.getElementById('tarefas');
const btnDelete = document.querySelector('#delete')

btnDelete.onclick =() => { 
    tarefas.innerHTML = ""
    alert('lista deletada!');
}

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('tarefa-input');
	addTarefa(inputField.value);
	form.reset();
};

function addTarefa(description) {
	const containerTarefa = document.createElement('div');
	const novaTarefa = document.createElement('input');
	const labelTarefa = document.createElement('label');
	const descriptionNode = document.createTextNode(description);

	novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', description);
	novaTarefa.setAttribute('id', description);

	labelTarefa.setAttribute('for', description);
	labelTarefa.appendChild(descriptionNode);

	containerTarefa.classList.add('tarefa-item');
	containerTarefa.appendChild(novaTarefa);
	containerTarefa.appendChild(labelTarefa);

	listaTarefas.appendChild(containerTarefa);
}
