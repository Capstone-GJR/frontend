import './App.css';
import Layout from "./components/ui/Layout";
import React from "react";
import {Outlet} from "react-router-dom";
import NavbarLink from "./components/ui/NavbarLink";


function App() {

    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default App;
``