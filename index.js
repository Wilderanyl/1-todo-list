const inputBox = document.getElementById("input");
const buttonBox = document.getElementById("button");
const todoList = document.getElementById("todo-list");
const todoListLength = document.getElementById("todo-list-length");

function storedTodoList() {
  localStorage.setItem("data", todoList.innerHTML);
  localStorage.setItem("length", todoList.children.length);
}

function getTodoList() {
  todoList.innerHTML = localStorage.getItem("data");
  todoListLength.innerHTML = localStorage.getItem("length");
}

function updateLength() {
  todoListLength.innerHTML = todoList.children.length;
}

function singleTodo() {
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = inputBox.value;
  let div = document.createElement("div");
  div.classList.add("icon");
  let spanX = document.createElement("span");
  spanX.innerHTML = "&times;";
  let spanT = document.createElement("span");
  spanT.innerHTML = "&check;";

  div.appendChild(spanT);
  div.appendChild(spanX);

  li.appendChild(p);
  li.appendChild(div);
  todoList.appendChild(li);
  inputBox.value = "";

  updateLength();
}

function main() {
  buttonBox.addEventListener("click", function () {
    if (inputBox.value === "") {
      alert("Hello");
    } else {
      singleTodo();
    }
    storedTodoList();
  });

  inputBox.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      if (inputBox.value === "") return;
      else {
        singleTodo();
      }
    }
    storedTodoList();
  });

  todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
      if (e.target.innerHTML === "×") {
        e.target.parentElement.parentElement.remove();
        storedTodoList();
        updateLength();
      } else if (e.target.innerHTML === "✓") {
        e.target.parentElement.parentElement.classList.toggle("checked");
        storedTodoList();
      } else;
    }
  });
}

getTodoList();

main();
