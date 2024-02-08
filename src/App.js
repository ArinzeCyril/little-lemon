import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Reservation from './components/Reservation';
import SignUp from './components/SignUp';
import Login from './components/Login';
import DailySpecials from './components/DailySpecials';
import Confirmation from './components/Confirmation';
import { useState } from 'react';

function App() {
  const login = true
  const { signup, setSignup } = useState(false)
  const { cart, setCart } = useState(false)
  return (
    <>
    <Router>
      <Header
        signup={signup}
        setSignup={setSignup}
        cart={cart}
      />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login setSignup={setSignup} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reservation' element={login ? <Reservation setCart={setCart} /> : <Navigate to='/signup' />} />
        <Route path='/order' element={login ? <DailySpecials /> : <Navigate to='/signup' />} />
        <Route path='/confirmation' element={<Confirmation setCart={setCart} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
