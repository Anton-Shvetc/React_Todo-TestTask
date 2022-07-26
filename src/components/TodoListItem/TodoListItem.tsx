import "./TodoListItem.scss";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  onRemoveTodo,
}) => {

  const onDelete = () => {
    onRemoveTodo(todo);
  };

  return (
    <li className={"todo-row"}>
      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
          className={todo.complete ? "checked" : ""}
        />
        <span className={todo.complete ? "completed" : ""}>{todo.text}</span>
      </label>

      <div>
        <button onClick={() => onDelete()} className="todo-button delete">
          {"\u00D7"}
        </button>
      </div>
    </li>
  );
};
