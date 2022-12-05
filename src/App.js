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

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Welcome />}/> 
        <Route path='/register' element={<Register />}/> 
        <Route path='/login' element={<Login />}/> 

        <Route path='/userlanding' element={
          <PrivateRoute>
            <UserLanding />
          </PrivateRoute> }>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
