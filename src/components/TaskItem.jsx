import React, { useState } from 'react';

const TaskItem = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, { ...task, title: newTitle });
    }
    setIsEditing(!isEditing);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          task.title
        )}
      </td>
      <td>{task.dueDate || 'No Due Date'}</td>
      <td className="task-buttons">
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;