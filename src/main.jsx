import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import TodoContextWrappper from "./context/TodoContext";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <TodoContextWrappper>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </TodoContextWrappper>
);
