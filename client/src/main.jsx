import ReactDOM from "react-dom/client";
import Routing from "./router/routing.conifg";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
    <Routing/>
</React.StrictMode>)