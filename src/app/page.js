'use client'; 

import { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { task, isCompleted: false }]);
      setTask('');
    }
  };

 
  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTasks(updatedTasks);
  };

 
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      
      { }
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
      </div>

      <button onClick={addTask}>Add a Task</button>
      
      { }
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className={t.isCompleted ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={t.isCompleted}
              onChange={() => toggleCompletion(index)}
            />
            {t.task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <style jsx>{`

        .todo-container {
          padding: 20px;
          max-width: 750px;
          margin: auto;
          background-color: #6a5acd;
          border-radius: 8px;

        }
        .input-container {
          display: flex;
          margin-bottom: 15px;
        }
        button {
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 6px 14px;
         font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
         border-radius: 6px;
         border: none;
        }  
        button:hover {
          background-color: #b4b4b4
        }
        li {
          display: flex;
          align-items: center;
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }
        li.completed {
          text-decoration: line-through;
          color: grey;
        }

        :global(body) {
          background: url('https://marketplace.canva.com/EAE4zByjCKI/1/0/900w/canva-black-and-white-simple-motivation-phone-wallpaper-OKXDbZ05FS0.jpg') center fixed;
          background-size: cover;
        }

      
      
      `}</style>

     
    </div>
  );
};

export default TodoList;
