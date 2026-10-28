import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (task.trim() === "") return;

    onAddTask(task);
    setTask("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;