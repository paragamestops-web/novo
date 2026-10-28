import TaskItem from "./TaskItem";

function TaskList({ tasks, onRemoveTask }) {
  return (
    <section className="task-list">
      <h2>Lista de tarefas</h2>

      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onRemove={() => onRemoveTask(index)}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;