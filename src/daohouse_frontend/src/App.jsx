import React from "react";
// import Login from './Components/Auth/Login';
import Dao from "./pages/dao/Dao";
import Dashboard from "../src/pages/Home/Dashboard";
import Navbar from "./Components/layouts/Navbar";
import Error404 from "./Components/utils/Error404";
import Footer from "./Components/layouts/Footer";
import FeedPage from "./pages/FeedPage/FeedPage";
import CreateDao from "./pages/CreateDao/CreateDao";

import Proposals from "./pages/Proposals/Proposals";
import MyProfile from "./pages/MyProfile/MyProfile";
import EditProfile from "./pages/EditProfile/EditProfile";
import CreateProposal from "./pages/Proposals/CreateProposal";
import MyPosts from "./Components/MyProfile/MyPosts/MyPosts";
import AboutMe from "./Components/MyProfile/AboutMe/AboutMe";
import Followers from "./Components/MyProfile/Followers/Followers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/social-feed" element={<FeedPage />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/create-proposal" element={<CreateProposal />} />
        <Route path="/dao" element={<Dao />} />
        <Route path="/dao/create-dao" element={<CreateDao />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route
          path="/my-profile"
          element={<MyProfile childComponent={<AboutMe />} />}
        />
        <Route
          path="/my-profile/my-post"
          element={<MyProfile childComponent={<MyPosts />} />}
        />
        <Route
          path="/my-profile/followers"
          element={<MyProfile childComponent={<Followers />} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
