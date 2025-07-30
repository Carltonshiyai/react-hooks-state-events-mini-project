import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(textToRemove) {
    setTasks(tasks.filter((t) => t.text !== textToRemove));
  }

  function handleSelectCategory(category) {
    setSelectedCategory(category);
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((t) => t.category === selectedCategory);

  return (
    <div className="App">
      <h2>My Tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;