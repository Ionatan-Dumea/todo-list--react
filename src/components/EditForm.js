import React, { useEffect, useRef } from "react";
import { IoRefreshCircleOutline } from "react-icons/io5";

export default function EditForm({
  currentTodo,
  setCurrentTodo,
  setIsEditing,
  setTodos,
}) {
  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const handleUpdateBtn = () => {
    setIsEditing(false);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === currentTodo.id
          ? { ...todo, text: currentTodo.text }
          : todo;
      })
    );
  };

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleUpdateBtn();
    }
  };

  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        placeholder="update to do ..."
        onChange={(e) => handleEditInputChange(e)}
        value={currentTodo.text}
        onKeyDown={handleKeypress}
        ref={inputRef}
        spellcheck="false"
      />
      <div className="form__update center">
        <IoRefreshCircleOutline onClick={handleUpdateBtn} />
      </div>
    </form>
  );
}
