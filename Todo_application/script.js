let todoItemsContainer = document.getElementById("todoItemsContainer");
let addButton = document.getElementById("addButton");
let saveButton = document.getElementById("clickOnSave");

/**
 * This function retrieves data from local storage and returns it as a parsed list or an empty array if
 * there is no data.
 * @returns The function `fetchDataFromLocalStorage` returns an array of todo items that are stored in
 * the local storage. If there are no items in the local storage, it returns an empty array.
 */
function fetchDataFromLocalStorage() {
    let localData = localStorage.getItem("todoList");
    let parsedList = JSON.parse(localData);

    if (parsedList === null) {
        return [];
    } else {
        return parsedList;
    }
}

/**
 * The function removes an item from a to-do list stored in local storage and also removes the
 * corresponding HTML element from the page.
 * @param todoId - a string representing the unique identifier of a todo item in the HTML element. It
 * is used to locate the corresponding todo item in the todoList array and remove it.
 * @returns The code is not returning anything. It is defining a function called `removeItem` that
 * removes an HTML element from the `todoItemsContainer` and also removes the corresponding item from
 * the `todoList` array. It is also setting an onclick event listener on a button with the id
 * `saveButton` that saves the `todoList` array to local storage as a JSON string.
 */
let todoList = fetchDataFromLocalStorage();

saveButton.onclick = function () {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

function removeItem(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);

    /* This code is removing an item from the todoList array and also removing the corresponding HTML
   element from the todoItemsContainer. */
    let deleteIndex = todoList.findIndex(function (eachTodo) {
        let eachTodoId = "todo" + eachTodo.unqid;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });
    todoList.splice(deleteIndex, 1);
}

/**
 * The function toggles the "checked" class of a label element based on the checked state of a checkbox
 * element.
 * @param inputId - The ID of the checkbox input element that triggers the status change function.
 * @param labelId - The ID of the label element that is associated with the checkbox input element.
 */
function statusChange(inputId, labelId, todoId) {
    let checkboxEl = document.getElementById(inputId);
    checkboxEl.checked;

    let labelEl = document.getElementById(labelId);
    labelEl.classList.toggle("checked");

    let objectIndex = todoList.findIndex(function (eachItem) {
        let eachTodoId = "todo" + eachItem.unqid;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });

    let todoObject = todoList[objectIndex];

    if (todoObject.isChecked === true) {
        todoObject.isChecked = false;
    } else {
        todoObject.isChecked = true;
    }
}
/* The `addAndAppendTodo` function is creating a new HTML element for a todo item and appending it to
the `todoItemsContainer`. It takes an argument `item` which is an object representing a todo item
with properties `name` and `unqid`. */
function addAndAppendTodo(item) {
    let inputId = "input" + item.unqid;
    let labelId = "label" + item.unqid;
    let todoId = "todo" + item.unqid;

    let todoElement = document.createElement("li");
    todoElement.classList.add("d-flex", "flex-row", "list-container");
    todoElement.setAttribute("id", todoId);
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "checkbox");
    inputElement.setAttribute("id", inputId);
    inputElement.classList.add("check-box");

    inputElement.checked = item.isChecked;

    inputElement.onclick = function () {
        statusChange(inputId, labelId, todoId);
    };

    todoElement.appendChild(inputElement);
    /* This code is creating and appending HTML elements for a todo item's label and delete icon. */

    let labelContainerElement = document.createElement("div");
    labelContainerElement.classList.add(
        "d-flex",
        "flex-row",
        "label-container"
    );
    todoElement.appendChild(labelContainerElement);

    let labelElement = document.createElement("label");
    labelElement.classList.add("label-element");
    labelElement.textContent = item.name;
    labelElement.setAttribute("for", inputId);
    labelElement.setAttribute("id", labelId);

    if (item.isChecked) {
        labelElement.classList.add("checked");
    }

    labelContainerElement.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainerElement.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash", "delete-icon");
    deleteIcon.onclick = function () {
        removeItem(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

/* This code is iterating over each item in the `todoList` array and calling the `addAndAppendTodo`
function for each item. The `addAndAppendTodo` function creates a new HTML element for each item and
appends it to the `todoItemsContainer`. This code is responsible for rendering the initial list of todos-when-the-page-load. */

for (let item of todoList) {
    addAndAppendTodo(item);
}

unqid = todoList.length;

/* This code is adding an event listener to the `addButton` element. When the button is clicked, it
retrieves the value of the user input field, checks if it is empty, creates a new todo object with a
unique id, adds the new todo to the `todoList` array, and appends the new todo to the HTML
`todoItemsContainer`. Finally, it resets the value of the user input field to an empty string. */
addButton.onclick = function () {
    let userInputElement = document.getElementById("userInput");
    let userInput = userInputElement.value;

    if (userInput === "") {
        alert("Please enter a user input");
        return;
    }
    unqid += 1;
    let newTodo = {
        name: userInput,
        unqid: unqid,
        isChecked: false,
    };
    addAndAppendTodo(newTodo);
    todoList.push(newTodo);
    userInputElement.value = "";
};
