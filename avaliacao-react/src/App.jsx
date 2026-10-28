import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="app">
      <Header />

      <main className="container">
        <TaskForm onAddTask={addTask} />

        <TaskList
          tasks={tasks}
          onRemoveTask={removeTask}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;