"use strict";

import { getStorage, setStorage } from "./storage";

export default function deleteTodoItem(id) {
  const todoList = getStorage();
  const array = todoList.filter(item => item.id !== id);

  setStorage(array);

  return true;
}