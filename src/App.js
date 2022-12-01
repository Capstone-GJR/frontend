import './App.css';
import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
} from 'react-router-dom'
import Welcome from './components/pages/Welcome';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />}/> 
        <Route path='/register' element={<Register />}/> 
        <Route path='/login' element={<Login />}/> 
      </Routes>
    </Router>
  );
}

export default App;
