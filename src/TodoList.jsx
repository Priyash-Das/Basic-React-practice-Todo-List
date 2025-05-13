import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Sample-todo", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let markAsDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <h4>Todo List</h4>
      <hr />
      <hr />
      <input
        type="text"
        placeholder="Add a task.."
        style={{ padding: "20px", fontSize: "17px" }}
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button
        onClick={addNewTask}
        style={{ fontSize: "20px", marginBottom: "10px" }}
      >
        Add
      </button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks Todo</h4> <hr />
      <ul style={{ marginLeft: "30px" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={
                todo.isDone
                  ? { textDecorationLine: "line-through", color: "green" }
                  : null
              }
            >
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                fontSize: "10px",
                marginBottom: "15px",
                padding: "8px",
              }}
            >
              Delete
            </button>
            <button
              onClick={() => markAsDone(todo.id)}
              style={{
                fontSize: "10px",
                marginLeft: "5px",
                padding: "8px",
              }}
            >
              Mark As Done
            </button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={markAsDoneAll}>Mark as completed all</button>
    </div>
  );
}
