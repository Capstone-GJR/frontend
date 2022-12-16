import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Welcome from './components/pages/general/Welcome';
import Register from './components/pages/general/Register';
import Login from './components/pages/general/Login';
import PrivateRoute from './components/private_route/PrivateRoute';
import AllSpaces from './components/pages/read/AllSpaces';
import AboutUs from "./components/pages/general/AboutUs";
import AllItems from "./components/pages/read/AllItems";
import AllTotesBySpaceId from "./components/pages/read/AllTotesBySpaceId";
import UserProfile from "./components/pages/read/UserProfile";
import Logout from './components/pages/general/Logout';
import UpdateUser from './components/pages/update/user/UpdateUser';
import UpdatePassword from './components/pages/update/user/UpdatePassword';
import AddSpace from "./components/pages/create/AddSpace";
import UpdateTote from './components/pages/update/UpdateTote'


import axios from "axios";
import AllItemsByToteId from "./components/pages/read/AllItemsByToteId";
import AddItem from "./components/pages/create/AddItem";
import ItemDetails from "./components/pages/read/ItemDetails";
import AddTote from './components/pages/create/AddTote';
import Scan from "./components/pages/FUTURE USE/Scan";
import Search from "./components/pages/FUTURE USE/Search";


function App() {

    axios.defaults.baseURL = "/api/";

    return (
        <Router>
            <Routes>

                <Route path='/' element={<Welcome/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/aboutus' element={<AboutUs/>}/>

                {/*----User Related Paths----*/}
                <Route path='/profile' element={
                    <PrivateRoute>
                        <UserProfile/>
                    </PrivateRoute>}>
                </Route>
                <Route path='/updateUser' element={
                    <PrivateRoute> <UpdateUser/> </PrivateRoute>
                }>
                </Route>
                <Route path='/updatePassword' element={
                    <PrivateRoute>
                        <UpdatePassword/>
                    </PrivateRoute>
                }>
                </Route>
                {/*---- Spaces Paths ----*/}
                <Route path='/allSpaces' element={
                    <PrivateRoute>
                        <AllSpaces/>
                    </PrivateRoute>}>
                </Route>
                <Route path='/space/add' element={
                    <PrivateRoute>
                        <AddSpace/>
                    </PrivateRoute>}>
                </Route>
                {/*---- Totes Paths ----*/}
                <Route path='/allTotesBySpace' element={
                    <PrivateRoute>
                        <AllTotesBySpaceId/>
                    </PrivateRoute>}>
                </Route>
                <Route path='/tote/add' element={
                    <PrivateRoute>
                        <AddTote />
                    </PrivateRoute>}>
                </Route>
                {/*---- Item Paths ----*/}
                <Route path='/allItemsByToteId' element={
                    <PrivateRoute>
                        <AllItemsByToteId />
                    </PrivateRoute>}>
                </Route>
                <Route path='/itemDetails' element={
                    <PrivateRoute>
                        <ItemDetails />
                    </PrivateRoute>}>
                </Route>
                <Route path='/item/add' element={
                    <PrivateRoute>
                        <AddItem />
                    </PrivateRoute>}>
                </Route>
                <Route path='/allItems' element={
                    <PrivateRoute>
                        <AllItems />
                    </PrivateRoute>}>
                </Route>
                {/*---- Extra Features Path ----*/}
                <Route path='/scan' element={
                    <PrivateRoute>
                        <Scan />
                    </PrivateRoute>}>
                </Route>
                <Route path='/search' element={
                    <PrivateRoute>
                        <Search />
                    </PrivateRoute>}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
