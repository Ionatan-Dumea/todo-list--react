import React from "react";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function Todo({ id, todos, setTodos }) {
  const handleMarkBtn = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };
  const handleRemoveBtn = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return todos.map((todo) => (
    <div className="todo" key={todo.id}>
      <div className="todo__mark center" onClick={() => handleMarkBtn(todo.id)}>
        {todo.isDone ? <BsCheckCircle /> : <BsCircle />}
      </div>

      <p
        className="todo__text center"
        onClick={() => handleMarkBtn(todo.id)}
        style={
          todo.isDone
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {todo.text}
      </p>

      <div className="todo__icons">
        <AiOutlineEdit className="todo__edit center" />
        <AiOutlineDelete
          className="todo__remove center"
          onClick={() => handleRemoveBtn(todo.id)}
        />
      </div>
    </div>
  ));
}
