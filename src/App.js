import React, { useState } from "react";
import Form from "./components/Form";
import EditForm from "./components/EditForm";
import Todo from "./components/Todo";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useLocalStorage("todos", []);

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  return (
    <main>
      <h1 className="title">To-do list</h1>
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
          setIsEditing={setIsEditing}
          setTodos={setTodos}
        />
      ) : (
        <Form input={input} setInput={setInput} setTodos={setTodos} />
      )}
      <Todo
        todos={todos}
        setTodos={setTodos}
        setIsEditing={setIsEditing}
        setCurrentTodo={setCurrentTodo}
      />
      <p className="created-by">&copy; Created by Ionatan Dumea</p>
    </main>
  );
}

export default App;
