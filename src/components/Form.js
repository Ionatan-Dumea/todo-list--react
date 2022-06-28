import React, { useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { IoAddCircleOutline } from "react-icons/io5";

export default function Form({ input, setInput, setTodos }) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddBtn = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    setTodos((prevTodos) => [...prevTodos, newTodo()]);
    setInput("");
  };

  const newTodo = () => {
    return {
      id: nanoid(),
      text: input,
      isDone: false,
    };
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setTodos((prevTodos) => [...prevTodos, newTodo()]);
      setInput("");
    }
  };

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        placeholder="add to do ..."
        onChange={handleChange}
        value={input}
        onKeyDown={handleKeypress}
        ref={inputRef}
        spellcheck="false"
      />
      <div className="form__add center" onClick={(e) => handleAddBtn(e)}>
        <IoAddCircleOutline />
      </div>
    </form>
  );
}
