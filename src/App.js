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
import AllItemsByUserId from "./components/pages/read/AllItemsByUserId";
import AllTotesBySpaceId from "./components/pages/read/AllTotesBySpaceId";
import UserProfile from "./components/pages/read/UserProfile";
import Logout from './components/pages/general/Logout';
import UpdateUser from './components/pages/update/user/UpdateUser';
import UpdatePassword from './components/pages/update/user/UpdatePassword';
import AllItemsByToteId from "./components/pages/read/AllItemsByToteId";
import Scan from "./components/pages/FUTURE USE/Scan";
import Search from "./components/pages/FUTURE USE/Search";
import axios from "axios";
import AddComponent from './components/pages/create/AddComponent';
import Layout from "./components/ui/Layout";
import PageNotFound from "./components/ui/PageNotFound";

function App() {

    axios.defaults.baseURL = "https://traqura.xyz:8080/api/";

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Welcome />} />
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
                    <Route path='allItemsByToteId' element={<AllItemsByToteId />}/>
                    <Route path='allItems' element={<AllItemsByUserId />}/>

                    {/*---- Extra Features Path ----*/}
                    <Route path='scan' element={<Scan />}/>
                    <Route path='search' element={<Search />}/>
                    {/*---- When no page matching route is found ----*/}
                    <Route path="*" element={<PageNotFound />} />

                </Route>
            </Routes>
        </Router>

    );
};

export default App;
