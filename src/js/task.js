"use strict";

import newElement from "./newElement";
import updateTodoItem from "./updateTodoItem";
import deleteTodoItem from "./deleteTodoItems";

export default function createTodoItem(text, id) {
  const trashIcon = newElement("i", {class: "fa-solid fa-trash-can"}, []);
  const editIcon = newElement("i", {class: "fa-solid fa-pen-to-square"}, []);
  const btnTrash = newElement("button", {class: "btn_trash"}, [trashIcon])
  const btnEdit = newElement("button", {class: "btn_edit"}, [editIcon]);
  const actions = newElement("div", {class: "actions"}, [btnEdit, btnTrash]);
  const input = newElement("input", {type: "text", class: "text", value: text, readonly: "readonly"}, []);
  const content = newElement("div", {class: "content"}, [input]);
  const task = newElement("div", {class: "task"}, [content, actions]);

  btnEdit.addEventListener("click", () => {
    if(btnEdit.innerText === "save") {
      if(!input.value) {
        input.placeholder = "Please fill out the task"
        return;
      }

      input.setAttribute("readonly", "readonly");
      btnEdit.innerHTML = "<i class=\"fa-solid fa-pen-to-square\"></i>";
      updateTodoItem(input.value, id);
    } else {
      input.removeAttribute("readonly");
      input.focus();
      btnEdit.innerText = "save";
    }
  });

  btnTrash.addEventListener("click", () => {
    const isDeleted = deleteTodoItem(id);

    if(isDeleted) {
      task.parentElement.removeChild(task);
    } else {
      alert("Failed Deleted");
    }
  })

  return task;
}