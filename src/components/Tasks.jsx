import React, { useState } from 'react'
import Task from './Task'
import { useGetTasks } from '../react-query/queries.tasks'

const Tasks = () => {
  const { data: tasks, isPending } = useGetTasks()

  if (isPending) {
    return <h3>Loading...</h3>
  }
  return (
    <ul>
      {
        tasks.length > 0 && tasks.map(task => (
          <Task task={task} key={task.id} />
        ))
      }
    </ul>
  )
}

export default Tasks