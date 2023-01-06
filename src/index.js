import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/ui/Layout";
import Welcome from "./components/pages/general/Welcome";
import Register from "./components/pages/general/Register";
import Login from "./components/pages/general/Login";
import Logout from "./components/pages/general/Logout";
import AboutUs from "./components/pages/general/AboutUs";
import UserProfile from "./components/pages/read/UserProfile";
import UpdateUser from "./components/pages/update/user/UpdateUser";
import UpdatePassword from "./components/pages/update/user/UpdatePassword";
import AddComponent from "./components/pages/create/AddComponent";
import AllSpaces from "./components/pages/read/AllSpaces";
import AllTotesBySpaceId from "./components/pages/read/AllTotesBySpaceId";
import AllItemsByToteId from "./components/pages/read/AllItemsByToteId";
import AllItemsByUserId from "./components/pages/read/AllItemsByUserId";
import Search from "./components/pages/general/Search";
import PageNotFound from "./components/pages/error pages/PageNotFound";
import axios from "axios";
import GeneralError from "./components/pages/error pages/GeneralError";
import {AuthContextProvider} from "./storage/auth-context";
// TODO: Configure for redirect based on login
let router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}
               errorElement={<GeneralError/>}>
            <Route path="/" element={<Welcome/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='logout' element={<Logout/>}/>
            <Route path='aboutUs' element={<AboutUs/>}/>
            {/*----User Related Paths----*/}
            <Route path='profile' element={<UserProfile/>}/>
            <Route path='updateUser' element={<UpdateUser/>}/>
            <Route path='updatePassword' element={<UpdatePassword/>}/>
            <Route path='addComponent' element={<AddComponent/>}/>

            {/*/!*---- Spaces Paths ----*!/*/}
            <Route path='allSpaces' element={<AllSpaces/>}/>

            {/*/!*---- Totes Paths ----*!/*/}
            <Route path='allTotesBySpace' element={<AllTotesBySpaceId/>}/>

            {/*---- Item Paths ----*/}
            <Route path='allItemsByToteId' element={<AllItemsByToteId/>}/>
            <Route path='allItems' element={<AllItemsByUserId/>}/>

            {/*---- Extra Features Path ----*/}
            <Route path='search' element={<Search/>}/>
            {/*---- When no page matching route is found ----*/}
            <Route path="*" element={<PageNotFound/>}/>

        </Route>
    ))
axios.defaults.baseURL = "https://traqura.xyz:8080/api/";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthContextProvider>
            <RouterProvider router={router}/>
        </AuthContextProvider>
    </React.StrictMode>
);
