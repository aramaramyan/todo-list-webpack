"use strict";

const getStorage = () => JSON.parse(localStorage.getItem("todoList"));
const setStorage = (list) => localStorage.setItem("todoList", JSON.stringify(list));

export { getStorage, setStorage };