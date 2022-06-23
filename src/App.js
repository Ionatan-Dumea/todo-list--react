import React, { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useLocalStorage("todos", []);

  return (
    <main>
      <Form input={input} setInput={setInput} setTodos={setTodos} />
      <Todo todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default App;
