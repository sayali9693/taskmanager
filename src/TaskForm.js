import React, { useState } from 'react';

const TaskForm = ({ onSubmit, lists }) => {
  const [name, setName] = useState('');
  const [selectedList, setSelectedList] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !selectedList) return;
    onSubmit(name, selectedList);
    setName('');
    setSelectedList('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <select value={selectedList} onChange={(e) => setSelectedList(e.target.value)}>
        <option value="">Select List</option>
        {lists.map((list) => (
          <option key={list} value={list}>
            {list}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
