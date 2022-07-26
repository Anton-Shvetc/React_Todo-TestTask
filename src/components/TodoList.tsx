import React from "react";
import { TodoListItem } from './TodoListItem/TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, onRemoveTodo }) => {
  

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleComplete={toggleComplete}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    </>
  );
};
