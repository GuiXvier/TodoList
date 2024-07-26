// Elemento ul do documento HTML
let ulTarfeas = document.getElementById("task-list");
// Input que sera colocado as tarefas
let toDoInput = document.getElementById("task-input");
// Botao de submissao do formuladrio
let submitButton = document.getElementById("submit-button");

let imprimeTodo = function (event) {
  // Previne o comprotamento padrao do formulario
  event.preventDefault();

  // Armazena o valor digitado pelo usuario
  let taskText = toDoInput.value;
  let toDoModelo = document.createElement("li");

  let completeButton = document.createElement("button");
  completeButton.textContent = "complete";
  completeButton.classList.add("completeButton");

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";

  toDoModelo.textContent = taskText;

  ulTarfeas.appendChild(toDoModelo);
  toDoModelo.appendChild(completeButton);
  toDoModelo.appendChild(deleteButton);

  // Marcar Tarefas como Concluídas
  completeButton.addEventListener("click", function (event) {
    toDoModelo.classList.add("completed");
  });

  // Remover uma tarefa
  deleteButton.addEventListener("click", function (event) {
    toDoModelo.parentNode.removeChild(toDoModelo);
  });

  toDoInput.value = "";
};

submitButton.addEventListener("click", imprimeTodo);
