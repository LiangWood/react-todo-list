import { useState } from 'react';
import './Todo.css';

const Todo = ({ todo, remove, update, toggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);

    const handleChange = (event) => {
        setTask(event.target.value);
     };

    const handleUpdate = (event) => {
        event.preventDefault();
        update(todo.id, task);
        toggleForm();
    };

    const handleRemove = (event) => { 
        remove(event.target.id);
    };

    const toggleForm = () => { 
        setIsEditing(!isEditing);
    };

    const toggleCompleted = (event) => {
        toggleComplete(event.target.id);
    };

    return isEditing ? (
      <div className="todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    ) : (
      <div className="todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleForm}>
            <i className="fas fa-pen" />
          </button>
          <button onClick={handleRemove}>
            <i id={todo.id} className="fas fa-trash" />
          </button>
        </div>
      </div>
    );
};

export default Todo;