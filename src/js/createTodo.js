"use strict";

import newElement from "./newElement";
import video from "./video";
import createTodoItem from "./task";
import saveTodoItem from "./saveTodoItem";
import getAllTodos from "./getAllTodos";

function createTodo() {
  const addIcon = newElement("i", {class: "fa-solid fa-circle-plus"}, []);
  const btnAdd = newElement("button", {type: "submit", class: "btn_add"}, [addIcon]);
  const input = newElement("input", {name: "todo", id: "todo", placeholder: "add new todo", autoComplete: "off"}, []);
  const label = newElement("label", {for: "todo"}, ["TO DO"]);
  const form = newElement("form", {}, [label, input, btnAdd]);
  const title = newElement("div", {class: "title"}, [form]);
  const playIcon = newElement("i", {class: "fa-solid fa-pause"}, []);
  const play = newElement("div", {class: "play"}, [playIcon]);
  const headerDiv = newElement("div", {class: "header"}, [play, title]);
  const tasks = newElement("div", {class: "tasks"}, [])
  const h2 = newElement("h2", {}, ["TASK LIST"]);
  const taskList = newElement("div", {class: "task-list"}, [h2, tasks]);

  form.addEventListener("click", e => {
    e.preventDefault();
  });

  btnAdd.addEventListener("click", () => {
    const id = saveTodoItem(input.value);
    const task = createTodoItem(input.value, id);

    if(!input.value) {
      input.placeholder = "Please fill out the task";
      return;
    }

    input.value = "";

    if(input.placeholder === "Please fill out the task") {
      input.placeholder = "add new todo";
    }

    tasks.append(task);
  });

  playIcon.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
    } else {
      video.pause();
      playIcon.classList.remove("fa-pause");
      playIcon.classList.add("fa-play");
    }
  });

  const todoList = getAllTodos();

  todoList.forEach(item => {
    tasks.append(createTodoItem(item.text, item.id));
  });


  return   newElement("div", {class: "box"}, [headerDiv, taskList]);
}

const todo = createTodo();

export default todo;