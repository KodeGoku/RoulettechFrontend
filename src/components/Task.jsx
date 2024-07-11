import React from 'react'

const Task = ({ task: { id, title, description } }) => {
  return (
    <li>{ id } - {title} - {description}</li>
  )
}

export default Task