import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
