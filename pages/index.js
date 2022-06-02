import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/todos.module.css";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: inputValue,
      },
    ]);
    setInputValue("");
  };

  const handleDelete = (todoId) => {
    const todosClone = [...todos];
    const todoIndex = todosClone.findIndex((item) => item.id === todoId);
    todosClone.splice(todoIndex, 1);
    setTodos(todosClone);
  };

  return (
    <>
      <div className={styles.todosContainer}>
        <input
          className={styles.input}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          value={inputValue}
        />
        <button className={styles.button} onClick={handleAddTodo}>
          Add Todo
        </button>
        <div className={styles.todosList}>
          {todos.length === 0 && <h3>THERE ARE NO TODOS</h3>}
          {todos.map((todo) => (
            <div className={styles.todo} key={todo.id}>
              <p>{todo.title}</p>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
