import React from 'react';
import './App.css';

const todoList = [
  {
    content: 'task 1', priority: 2, completed: true
  },
  {
    content: 'task 2', priority: 1, completed: true
  },
  {
    content: 'task 3', priority: 3, completed: false
  }

]

function TodoItem(props) {
  return <p> {props.content}</p>
}

function App() {
const todoListFiltered = todoList.filter((value) => value.completed)

let todoArray = todoListFiltered.map(
  (value) => <TodoItem content = {value.content}/>
)


 /* const todoArray = [
    <todoItem content = "Item 1"/>
    <todoItem content = "Item 2"/>
    <todoItem content = "Item 3"/>
  ]*/
  return (
    todoList.filter((v) => v.completed).map(
      (v) => <TodoItem priority = {v.priority} content = {v.content} completed = {v.completed}/>)
  
    
  );
}

export default App;
