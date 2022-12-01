import './App.css';
import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
} from 'react-router-dom'
import Welcome from './components/pages/Welcome';
import Register from './components/pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />}/> 
        <Route path='/register' element={<Register />}/> 
      </Routes>
    </Router>
  );
}

export default App;
