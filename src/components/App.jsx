import React from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const App = () => {
    return (
        <div className="h-screen w-screen overflow-hidden bg-gradient-to-r from-violet-700 to-red-500 flex items-center justify-center">
            <Todos />
        </div>
    );
};

export default App;
