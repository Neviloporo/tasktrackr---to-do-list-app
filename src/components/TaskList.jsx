import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p> Add a task</p>
      ) : (
        <table className="task-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;