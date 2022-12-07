import './App.css';
import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
} from 'react-router-dom'
import Welcome from './components/pages/Welcome';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import PrivateRoute from './components/private_route/PrivateRoute';
import UserLanding from './components/pages/UserLanding';
import AboutUs from "./components/pages/AboutUs";
import Items from "./components/pages/Items";
import Scan from "./components/pages/Scan";
import Search from "./components/pages/Search";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Welcome />}/> 
        <Route path='/register' element={<Register />}/> 
        <Route path='/login' element={<Login />}/> 
        <Route path='/aboutus' element={<AboutUs />}/>

        <Route path='/userlanding' element={
          <PrivateRoute>
            <UserLanding />
          </PrivateRoute> }>
        </Route>
        <Route path='/profile' element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute> }>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
