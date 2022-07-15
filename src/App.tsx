import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import AuthProvider from './Contexts/AuthContext';
import Login from './pages/Login';
import Sensors from './pages/Sensors';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='login' replace />} />
          <Route path='login' element={<Login />} />
          <Route path='sensors' element={<Sensors />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
