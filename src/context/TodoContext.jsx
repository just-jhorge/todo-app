import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext({
    todos: [],
    deleteTodo: () => {},
    editTodo: () => {},
    addTodo: () => {},
});

const TodoContextWrappper = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 2, todo: "Go home" },
        { id: 3, todo: "Sleep" },
    ]);

    const addTodo = (todoText) => {
        setTodos([...todos, { id: uuidv4(), todo: todoText }]);
        console.log(todos);
    };

    const editTodo = () => {
        console.log("Todo Edited");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todoItem) => todoItem.id !== id));
        console.log(todos);
    };

    const todoData = {
        todos,
        setTodos,
        deleteTodo,
        addTodo,
        editTodo,
    };

    return (
        <TodoContext.Provider value={todoData}>{children}</TodoContext.Provider>
    );
};

export default TodoContextWrappper;
