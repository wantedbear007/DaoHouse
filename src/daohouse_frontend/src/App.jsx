import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import Login from './Components/Auth/Login';
import Navbar from './Components/layouts/Navbar';
import Error404 from './Components/utils/Error404';
import Dashboard from './Components/Home/Dashboard';
import "./App.css"
import Footer from './Components/layouts/Footer';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </Router>
  );
};


export default App;
