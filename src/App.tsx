import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import Login from './pages/Login';
import Sensors from './pages/Sensors';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='login' replace />} />
        <Route path='login' element={<Login />} />
        <Route path='sensors' element={<Sensors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
