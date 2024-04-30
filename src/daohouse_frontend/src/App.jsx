import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import Login from './Components/Auth/Login';
import Navbar from './Components/layouts/Navbar';
import Error404 from './Components/utils/Error404';
import Dashboard from './pages/Home/Dashboard';
import "./App.css"
import Footer from './Components/layouts/Footer';
import Dao from './pages/dao/Dao';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dao" element={<Dao />} />
      </Routes>
      <Footer/>
    </Router>
  );
};


export default App;
