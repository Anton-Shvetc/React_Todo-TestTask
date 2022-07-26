import React, { useState, useEffect } from "react";
import "./App.scss";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const buttons = [
    { name: "All", status: "all" },
    { name: "Active", status: false },
    { name: "Completed", status: true },
  ];

  const [todos, setTodos] = useState<Array<Todo>>([
    { text: "Тестово задание", complete: false },
    { text: "Прекрасный код", complete: true },
    { text: "Покрытие тестами", complete: false },
  ]);
  const [filtered, setFilter] = useState(todos);
  const [active, setActive] = useState<number>(0);

  const count = todos.filter((e) => e.complete === false);

  useEffect(() => {
    setFilter(todos);
  }, [todos]);

  const clearCompleted = () => {
    let clearTodos = todos.map((todo) => {
      return { text: todo.text, complete: false };
    });
    setTodos(clearTodos);
    setActive(0);
  };

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setActive(0);
  };

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.text !== todoToRemove.text
    );
    setTodos(updatedTodos);
  };

  const todoFilter: FilterTodo = (status, index) => {
    if (status === "all") {
      setFilter(todos);
    } else {
      let newTodo = [...todos].filter((item) => item.complete === status);
      setFilter(newTodo);
    }
    setActive(index);
  };

  return (
    <div className="todo-app">
      <header>
        <h1 className="todo-title">todos</h1>
      </header>
      <div className="wrapper">
        <div>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={filtered}
            toggleComplete={toggleComplete}
            onRemoveTodo={removeTodo}
          />
        </div>

        <div className="todo-actions">
          <div className="todo-count">{`${count.length} items left`}</div>
          <div>
            {buttons.map((button, idx) => (
              <button
                key={idx}
                className={`todo-button ${active === idx ? "active" : ""}`}
                onClick={() => todoFilter(button.status, idx)}
              >
                {button.name}
              </button>
            ))}
          </div>

          <button className="todo-button" onClick={() => clearCompleted()}>
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
