import React from 'react'

export const Task = (props) => {
  return (
      <ul className="task-list">
        {props.tasks.map((task, index) => (
          <li key={index}>
            <div className="taskdiv">
            {task}
            </div>
            <div className="deletebtn">
            <button onClick={() => props.handleDeleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
  )
}
