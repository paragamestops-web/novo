function TaskItem({ task, onRemove }) {
  return (
    <li className="task-item">
      <span>{task}</span>
      <button onClick={onRemove}>Excluir</button>
    </li>
  );
}

export default TaskItem;