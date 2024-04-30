import React from "react";
import "./App.css";
// import Login from './Components/Auth/Login';
import Navbar from "./Components/layouts/Navbar";
import Error404 from "./Components/utils/Error404";
import Dashboard from "./Components/Home/Dashboard";
import Footer from "./Components/layouts/Footer";
import FeedPage from "./Components/FeedPage/FeedPage";
import Dao from './pages/dao/Dao';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route path="/" element={<Dashboard />} />

        <Route path="/feed" element={<FeedPage />} />
        <Route path="/dao" element={<Dao />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
