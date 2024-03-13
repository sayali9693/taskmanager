// App.js
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [lists, setLists] = useState(['Personal', 'Work', 'Shopping']);
  const [filter, setFilter] = useState('All');

  // Load tasks from local storage on initial render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, list) => {
    const newTask = { id: Date.now(), name, completed: false, list };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') {
      return true;
    } else if (filter === 'Completed') {
      return task.completed;
    } else {
      return !task.completed;
    }
  });

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onSubmit={addTask} lists={lists} />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      {lists.map((list) => (
        <div key={list}>
          <h2>{list}</h2>
          <TaskList
            tasks={filteredTasks.filter((task) => task.list === list)}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
