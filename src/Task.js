import React from 'react'

export const Task = (props) => {
  return (
    <div className="list">
      <li key={props}>
        {props.todoList.map((task) => {
          return <div>
            <h1>{task}</h1> <button onClick={() => props.delTask(props)} >Delete Task</button>
          </div>;
        })}
        </li>
      </div>
  )
}
