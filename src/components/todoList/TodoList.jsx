import React, { useState } from 'react';
import uuid from "react-uuid";
import './TodoList.css';
import Todo from '../todo/Todo';
import Input from '../input/Input';
import Search from '../search/Search';

const defaultTodos = [
  { id: uuid(), task: "task1", completed: true },
  { id: uuid(), task: "task2", completed: false },
];

const Todolist = () => { 
    const [todos, setTodos] = useState(defaultTodos);

    const create = (newTodo) => {
        console.log('newTodo', newTodo);
        setTodos([...todos, newTodo]);
    };

    const update = (id, updateTask) => {
        const updateTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: updateTask };
            }
            return todo
        });
        setTodos(updateTodos);
    };

    const remove = (id) => { 
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => { 
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const search = (value) => {
        const tempValue = value.toLowerCase();
        const filteredTodos = todos.filter((todo) => todo.task.toLowerCase().includes(tempValue));
        setTodos(filteredTodos);
    };

    const todoList = todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        update={update}
        remove={remove}
        toggleComplete={toggleComplete}
      />
    ));

    return (
      <div className="todoList">
        <div className='todoList-header'>
          <h1>Todo List</h1>
          <Search search={search} />
        </div>
        <Input createTodo={create} />
        <ul>{todoList}</ul>
      </div>
    );
};

export default Todolist;