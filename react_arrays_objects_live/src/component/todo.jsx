import React, { useState } from "react";

export default function Todo() {

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    const addTodo = () => {
        if (text === "") return;
        setTodos([...todos, text]);
        setText("");
    };
    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };
    return (
        <div>
            <h2>Simple Todo App</h2>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter todo"
            />

            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => deleteTodo(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
