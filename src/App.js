import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Welcome from './components/pages/general/Welcome';
import Register from './components/pages/general/Register';
import Login from './components/pages/general/Login';
import PrivateRoutes from './components/private_route/PrivateRoutes';
import AllSpaces from './components/pages/read/AllSpaces';
import AboutUs from "./components/pages/general/AboutUs";
import AllItems from "./components/pages/read/AllItems";
import AllTotesBySpaceId from "./components/pages/read/AllTotesBySpaceId";
import UserProfile from "./components/pages/read/UserProfile";
import Logout from './components/pages/general/Logout';
import UpdateUser from './components/pages/update/user/UpdateUser';
import UpdatePassword from './components/pages/update/user/UpdatePassword';
import AddSpace from "./components/pages/create/AddSpace";
import AllItemsByToteId from "./components/pages/read/AllItemsByToteId";
import AddItem from "./components/pages/create/AddItem";
import ItemDetails from "./components/pages/read/ItemDetails";
import AddTote from './components/pages/create/AddTote';
import Scan from "./components/pages/FUTURE USE/Scan";
import Search from "./components/pages/FUTURE USE/Search";
import axios from "axios";
import UpdateItem from "./components/pages/update/UpdateItem";

function App() {

  axios.defaults.baseURL = "/api/";

    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path='/' element={<Welcome/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/aboutUs' element={<AboutUs/>}/>

                {/* Private Routes */}
                <Route element={<PrivateRoutes />}>
                    {/*----User Related Paths----*/}
                    <Route path='/profile' element={<UserProfile/>}/>
                    <Route path='/updateUser' element={<UpdateUser/>}/>
                    <Route path='/updatePassword' element={<UpdatePassword/>}/>

                    {/*---- Spaces Paths ----*/}
                    <Route path='/allSpaces' element={<AllSpaces/>}/>
                    <Route path='/space/add' element={<AddSpace/>}/>

                    {/*---- Totes Paths ----*/}
                    <Route path='/allTotesBySpace' element={<AllTotesBySpaceId/>}/>
                    <Route path='/tote/add' element={<AddTote />}/>

                    {/*---- Item Paths ----*/}
                    <Route path='/allItemsByToteId' element={<AllItemsByToteId />}/>
                    <Route path='/itemDetails' element={<ItemDetails />}/>
                    <Route path='/item/add' element={<AddItem />}/>
                    <Route path='/allItems' element={<AllItems />}/>
                    <Route path='/updateItem' element={<UpdateItem />}/>

                    {/*---- Extra Features Path ----*/}
                    <Route path='/scan' element={<Scan />}/>
                    <Route path='/search' element={<Search />}/>
                </Route>

            </Routes>
        </Router>
    );
};

export default App;
