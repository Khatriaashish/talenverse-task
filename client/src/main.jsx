import ReactDOM from "react-dom/client";
import Routing from "./router/routing.conifg";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import "@fortawesome/fontawesome-free/css/all.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
    <Routing/>
</React.StrictMode>)