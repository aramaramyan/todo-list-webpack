"use strict";

import { getStorage, setStorage} from "./storage";

export default function saveTodoItem(text) {
  const id = new Date().getTime() % 10000;
  const todoItem = {
    id: id,
    text: text,
    completed: false
  };

  const todoList = getStorage();

  if(!todoList) {
    setStorage([todoItem]);
  } else {
    const array = todoList;

    array.push(todoItem);

    setStorage(array);
  }

  return id;
}