import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import Welcome from './components/pages/welcome/Welcome';
import Register from './components/pages/welcome/Register';
import Login from './components/pages/welcome/Login';
import PrivateRoute from './components/private_route/PrivateRoute';
import AllSpaces from './components/pages/user-crud/AllSpaces';
import AboutUs from "./components/pages/welcome/AboutUs";
import AllItems from "./components/pages/AllItems";
import AllTotesBySpaceId from "./components/pages/space-crud/AllTotesBySpaceId";
import UserProfile from "./components/pages/user-crud/UserProfile";
import Logout from './components/pages/Logout';
import UpdateUser from './components/pages/user-crud/UpdateUser';
import UpdatePassword from './components/pages/user-crud/UpdatePassword';
import AddSpace from "./components/pages/space-crud/AddSpace";
import axios from "axios";
import AllItemsByToteId from "./components/pages/box-crud/AllItemsByToteId";
import AddItem from "./components/pages/item-crud/AddItem";
import ItemDetails from "./components/pages/item-crud/ItemDetails";


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

            </Routes>
        </Router>
    );
}

export default App;
