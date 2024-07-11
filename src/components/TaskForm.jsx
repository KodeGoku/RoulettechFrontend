import React, { useState } from 'react';
import { useCreateTaskMutation } from '../react-query/mutation.tasks';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { mutate, isPending, isError, error, isSuccess } = useCreateTaskMutation()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const task = { title, description };
    mutate(task)
    console.log("🚀 ~ handleSubmit ~ task:", task)
  };

  if (isError) {
    return <div>An error occurred: {error.message}</div>
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Create a New Task</h2>
      <span>{isSuccess ? "Task added" : null}</span>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">
        {
          isPending ? "Adding task..." : "Add task"
        }
      </button>
    </form>
  );
};

export default TaskForm;
