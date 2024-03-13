// TaskList.js
import React from 'react';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name}
              </span>
            </td>
            <td>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
