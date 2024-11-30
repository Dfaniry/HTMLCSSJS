// Variables
let addbtn = document.getElementById("addbtn");
let inputText = document.getElementById("taskinput");
let todoList = document.getElementById("tasklist");


// Après le clic
addbtn.addEventListener("click", function () {
    let todoText = inputText.value.trim();

    // Quand rien n'est écrit dans le champ
    if (todoText === "") {
        alert("Please add a task!");
        return;
    }

    // Création de la tâche
    let newTask = document.createElement("li");
    newTask.className = "item";

    // Création de la checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    // Ajout d'un événement pour surligner la tâche
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            newTask.classList.add("highlighted"); // Ajoute la classe pour le surlignage
        } else {
            newTask.classList.remove("highlighted"); // Supprime la classe
        }
    });

    // Ajout du texte de la tâche
    let taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = todoText;

    // Création de l'élément contenant les icônes
    let iconContainer = document.createElement("span");
    iconContainer.className = "icon";

    // Création de l'icône d'édition
    let iconEdit = document.createElement("span");
    iconEdit.className = "iconedit";
    let editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pen-to-square";
    iconEdit.appendChild(editIcon);

    // Ajout d'un événement pour l'édition
    iconEdit.addEventListener("click", function () {
        let newText = prompt("Edit your task:", todoText);
        if (newText !== null) {
            taskText.textContent = newText.trim() || todoText;
        }
    });

    // Création de l'icône de suppression
    let iconDelete = document.createElement("span");
    iconDelete.className = "icondelete";
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash";
    iconDelete.appendChild(deleteIcon);

    // Ajout d'un événement pour la suppression
    iconDelete.addEventListener("click", function () {
        todoList.removeChild(newTask);
    });

    // Ajout des icônes au conteneur
    iconContainer.appendChild(iconEdit);
    iconContainer.appendChild(iconDelete);

    // Ajout des éléments au <li>
    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    newTask.appendChild(iconContainer);

    // Ajout de la tâche à la liste
    todoList.appendChild(newTask);

    // Réinitialisation de l'input
    inputText.value = "";
});