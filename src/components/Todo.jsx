import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = ({ todo, removeTodo }) => {
    const { editTodo } = useContext(TodoContext);

    return (
        <div className="w-full flex items-center justify-between gap-5 my-3 px-3">
            <p className="flex-1">{todo}</p>
            <div className="flex gap-3">
                <button
                    className="text-sm px-3 py-1 border-2 border-sky-600 hover:bg-sky-600 transition-colors duration-200 rounded-md"
                    onClick={() => editTodo()}
                >
                    Edit
                </button>
                <button
                    className="text-sm px-3 py-1 border-2 border-red-600 hover:bg-red-600 transition-colors duration-200 rounded-md"
                    onClick={removeTodo}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Todo;
