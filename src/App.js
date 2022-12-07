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
import Items from "./components/pages/Items";
import Scan from "./components/pages/Scan";
import Search from "./components/pages/Search";
import Profile from "./components/pages/Profile";
import SpaceLanding from "./components/pages/space-crud/SpaceLanding";

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Welcome />}/> 
        <Route path='/register' element={<Register />}/> 
        <Route path='/login' element={<Login />}/> 
        <Route path='/aboutus' element={<AboutUs />}/>

        <Route path='/allSpaces' element={
          <PrivateRoute>
            <AllSpaces />
          </PrivateRoute> }>
        </Route>
        <Route path='/profile' element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute> }>
        </Route>
        <Route path='/spaceLanding' element={
          <PrivateRoute>
            <SpaceLanding />
          </PrivateRoute> }>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
