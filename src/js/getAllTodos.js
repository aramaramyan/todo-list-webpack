"use strict";

import { getStorage } from "./storage";

export default function getAllTodos() {
  const todoList = getStorage();

  if(todoList) {
    return todoList;
  }

  return [];
}