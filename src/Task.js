import React from 'react'

export const Task = (props) => {
  return (
      <ul className="task-list">
        {props.tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => props.handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
  )
}
