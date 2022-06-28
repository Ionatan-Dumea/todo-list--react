import React from "react";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function Todo({
  todos,
  setTodos,
  setIsEditing,
  setCurrentTodo,
}) {
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

  const handleEditBtn = (id_) => {
    setIsEditing(true);
    const currentTodo_ = todos.filter((todo) => todo.id === id_)[0];
    const currentId = currentTodo_.id;
    const currentText = currentTodo_.text;
    setCurrentTodo({ id: currentId, text: currentText });
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
            ? {
                textDecorationLine: "line-through",
                textDecorationThickness: ".15rem",
              }
            : { textDecoration: "none" }
        }
      >
        {todo.text}
      </p>

      <div className="todo__icons">
        <AiOutlineEdit
          className="todo__edit center"
          onClick={() => handleEditBtn(todo.id)}
        />
        <AiOutlineDelete
          className="todo__remove center"
          onClick={() => handleRemoveBtn(todo.id)}
        />
      </div>
    </div>
  ));
}
