import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
    const [inputText, setInputText] = useState("");
    const { addTodo } = useContext(TodoContext);

    return (
        <div className="my-10 px-3 flex items-center justify-center gap-5">
            <input
                type="text"
                name="todo"
                placeholder="Add a Todo"
                id="todo"
                value={inputText}
                className="flex-1 px-1 bg-transparent border-b-2 border-white outline-none"
                onChange={(e) => setInputText(e.target.value)}
            />
            <button
                className="border-2 border-green-300 focus:border-blue-600 px-3 py-1.5 rounded-md text-sm"
                onClick={() => {
                    if (inputText === "") {
                        alert("Field cannot be empty");
                    } else {
                        setInputText("");
                        addTodo(inputText);
                    }
                }}
            >
                Add Todo
            </button>
        </div>
    );
};

export default TodoForm;
