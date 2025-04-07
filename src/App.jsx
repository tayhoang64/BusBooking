import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import HomeContainer from './pages/home_container/HomeContainer';
import Bus from './pages/bus/Bus';
import Detail from './pages/bus/Detail';
import Checkout from './pages/checkout/Checkout';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = ['/login', '/register'].includes(location.pathname);


  return (
    <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
      {!isLoginPage && <Navbar />}

      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/bus/bus-details" element={<Detail />} />
        <Route path="/bus/bus-details/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
