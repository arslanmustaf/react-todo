// import React from 'react';
// import "./App.css";
// import {Task} from "./Task";
// import { useState ,  useEffect } from 'react';

// const App = () => {
//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState("");
  
//  //use for fetching from server
//    useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//     setTodoList(storedTasks);
//   }, []);
// // use for saving 
//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(todoList));
//   }, [todoList]);

//   const handleChange = (event) => {
//     setNewTask(event.target.value)
//   }
//   const addTask = () => {
//     setNewTask('');
//     if(newTask.trim() !== "") {
//     const newTodoList = [...todoList, newTask]
//     setTodoList(newTodoList);
//     }
//   }
//   const delTask = (id) => {
//     setTodoList(todoList.filter((_,i)=>{
//        return i !== id;
//       }))
//   };
//   return (
//     <div >
//       <h1>Todo List</h1>
//       <input value={newTask} type="text" required onChange={handleChange} placeholder='Task' />
//       <button onClick={addTask} >Add Task</button>
//       <Task   todoList={todoList} delTask ={delTask} />
//       {/* <div className="list">
//         {todoList.map((task) => {
//           return <div>
//             <h1>{task}</h1> <button onClick={() => delTask(task)} >Delete Task</button>
//           </div>;
//         })}
//       </div> */}
//     </div>

//   )
// }

// export default App



import React, { useState, useEffect } from 'react';
import {Task} from './Task';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  // Load tasks from local storage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage when tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
console.log(tasks)
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div >
      <h1>Todo List</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <Task tasks={tasks} handleDeleteTask={handleDeleteTask} />
      {/* <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;

