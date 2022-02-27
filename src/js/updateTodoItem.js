"use strict";

import { getStorage, setStorage } from "./storage";

export default function updateTodoItem(text, id) {
  const todoList = getStorage();

  todoList.forEach(item => {
    if(item.id === id) {
      item.text = text;
    }
  });

  setStorage(todoList);
}