import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App';
import Navbar from "./components/ui/Navbar";
import NavbarLink from "./components/ui/NavbarLink";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>
            <App/>
        </>

    </React.StrictMode>
);
//TODO: On login ---
//    error handling/message for if no username exists?