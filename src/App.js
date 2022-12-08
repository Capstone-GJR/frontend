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
import SpaceLanding from "./components/pages/space-crud/SpaceLanding";
import ToteLanding from './components/pages/box-crud/ToteLanding';
import ItemLanding from './components/pages/item-crud/ItemLanding';
import UserProfile from "./components/pages/user-crud/UserProfile";
import Logout from './components/pages/Logout';


function App() {
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
          <Route path='/profile' element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute> }>
          </Route>
          <Route path='/spaceLanding' element={
            <PrivateRoute>
              <SpaceLanding />
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
