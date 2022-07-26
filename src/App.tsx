import React, { useState, useEffect} from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([
    { text: "todo-1", complete: false },
    { text: "todo-2", complete: true },
    { text: "todo-3", complete: false },
  ]);
  const [filtered, setFilter] = useState(todos);
   const count = todos.filter((e) => e.complete === false);

  useEffect(() => {
    setFilter(todos)
  }, [todos])


  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.text != todoToRemove.text
    );
    setTodos(updatedTodos);
  };

  const editTodo: EditTodo = (todoToEdit) => {
    let todoToUpdateIndex: number = todos.findIndex(
      (todo) => todo.text == todoToEdit.text
    );
  };

  const todoFilter: FilterTodo = (status) => {
    if (status === 'all') {
      setFilter(todos)
    } else {
      let newTodo = [...todos].filter(item => item.complete === status)
      setFilter(newTodo)
    }
  }
    

  return (
    <div className="todo-app">
      <header>
        <h1>Todos</h1>
      </header>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={filtered}
        toggleComplete={toggleComplete}
        onRemoveTodo={removeTodo}
        editTodo={editTodo}
      />
      <button onClick={() => todoFilter("all")}>All</button>
      <button onClick={() => todoFilter(false)}>Active </button>
      <button onClick={() => todoFilter(true)}>Completed</button>
      <button>Clear completed</button>
      <div>{`${count.length} items left`}</div>
    </div>
  );
}

export default App;
