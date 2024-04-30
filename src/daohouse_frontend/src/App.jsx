<<<<<<< Updated upstream
import React from "react";
import "./App.css";
// import Login from './Components/Auth/Login';
import Navbar from "./Components/layouts/Navbar";
import Error404 from "./Components/utils/Error404";
import Dashboard from "./Components/Home/Dashboard";
import Footer from "./Components/layouts/Footer";
import FeedPage from "./Components/FeedPage/FeedPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import Login from './Components/Auth/Login';
import Navbar from './Components/layouts/Navbar';
import Error404 from './Components/utils/Error404';
import Dashboard from './pages/Home/Dashboard';
import "./App.css"
import Footer from './Components/layouts/Footer';
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
import Dao from './pages/dao/Dao';
>>>>>>> main

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route path="/" element={<Dashboard />} />
<<<<<<< HEAD
<<<<<<< Updated upstream

        <Route path="/feed" element={<FeedPage />} />
      </Routes>
      <Footer />
=======
=======
        <Route path="/dao" element={<Dao />} />
>>>>>>> main
      </Routes>
      <Footer/>
>>>>>>> Stashed changes
    </Router>
  );
};

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
export default App;
