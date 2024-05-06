import React from "react";
import "./App.css";
// import Login from './Components/Auth/Login';
import Dao from "./pages/dao/Dao";
import Dashboard from '../src/pages/Home/Dashboard'
import Navbar from "./Components/layouts/Navbar";
import Error404 from "./Components/utils/Error404";
import Footer from "./Components/layouts/Footer";
import FeedPage from "./pages/FeedPage/FeedPage";
import CreateDao from "./pages/CreateDao/CreateDao";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proposals from "./pages/Proposals/Proposals";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/social-feed" element={<FeedPage />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/dao" element={<Dao />} />
        <Route path="/create-dao" element={<CreateDao />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
