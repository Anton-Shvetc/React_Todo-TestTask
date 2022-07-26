import React, { useState, ChangeEvent, FormEvent } from 'react';
import "./TodoForm.scss"

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <form className="todo-form">
      <button className="todo-button" type="submit" onClick={handleSubmit}>
        {"\u2771"}
      </button>
      <input
        type="text"
        value={newTodo}
        className="todo-input"
        placeholder="What needs to be done?"
        onChange={handleChange}
      />
    </form>
  );
};
