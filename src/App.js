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
import Scan from "./components/pages/Scan";
import Search from "./components/pages/Search";
import AllTotesBySpaceId from "./components/pages/space-crud/AllTotesBySpaceId";
import ToteLanding from './components/pages/box-crud/ToteLanding';
import ItemLanding from './components/pages/item-crud/ItemLanding';
import UserProfile from "./components/pages/user-crud/UserProfile";
import Logout from './components/pages/Logout';
import UpdateUser from './components/pages/user-crud/UpdateUser';
import UpdatePassword from './components/pages/user-crud/UpdatePassword';

import AddForm from "./components/forms/AddForm";
import AddSpace from "./components/pages/space-crud/AddSpace";


import axios from "axios";


function App() {

  axios.defaults.baseURL = "https://traqura.xyz:8080/api/";
  axios.defaults.headers.post['Content-Type'] = '*';

  return (
      <Router>
        <Routes>

          <Route path='/' element={<Welcome />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='/aboutus' element={<AboutUs />}/>

          <Route path='/allSpaces' element={
            <PrivateRoute>
              <AllSpaces />
            </PrivateRoute> }>
          </Route>
          <Route path='/space/add' element={
            <PrivateRoute>
              <AddSpace />
            </PrivateRoute> }>
          </Route>
          <Route path='/profile' element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute> }>
          </Route>
          <Route path='/updateUser' element= {
            <PrivateRoute> <UpdateUser /> </PrivateRoute>
          }>
          </Route>
          <Route path='/updatePassword' element= {
            <PrivateRoute> <UpdatePassword /> </PrivateRoute>
          }>
          </Route>
          <Route path='/allTotesBySpace' element={
            <PrivateRoute>

              <AllTotesBySpaceId />

            </PrivateRoute> }>
          </Route>
          <Route path='/toteLanding' element={
            <PrivateRoute>
              <ToteLanding />
            </PrivateRoute> }>
          </Route>
          <Route path='/itemLanding' element={
            <PrivateRoute>
              <ItemLanding />
            </PrivateRoute> }>
          </Route>
          <Route path='/allItems' element={
            <PrivateRoute>
              <AllItems />
            </PrivateRoute> }>
          </Route>

        </Routes>
      </Router>
  );
}

export default App;
