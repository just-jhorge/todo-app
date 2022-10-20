import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const Todos = () => {
    const { todos, deleteTodo } = useContext(TodoContext);

    return (
        <div className="h-3/4 w-2/3 md:w-1/2 lg:w-[40%] rounded-lg bg-black text-white p-4 shadow-lg overflow-y-auto">
            <h2 className="text-center font-bold text-4xl pb-2 border-b-2 border-gray-500 mb-5">
                My Todo List
            </h2>
            <TodoForm />
            {todos.length === 0 ? (
                <div className="w-full flex items-center justify-center text-gray-500 text-2xl">
                    Items empty, Please start adding
                </div>
            ) : (
                todos.map((todoItem) => (
                    <Todo
                        todo={todoItem.todo}
                        key={todoItem.id}
                        removeTodo={() => deleteTodo(todoItem.id)}
                    />
                ))
            )}
        </div>
    );
};

export default Todos;
