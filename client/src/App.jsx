import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Greetings from "./components/Greetings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Pages/Posts";
import Connect from "./components/Pages/Connect";
import Faculty from "./components/Pages/Faculty";
import Explore from "./components/Pages/Explore";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Events from "./components/Events";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Placement from "./components/Pages/Placement";
import Recruiter from "./components/Pages/Recruiter";
import PlacementYear from "./components/Pages/PlacementYear";
import User from "./components/User";
import Privateroute from "./components/Privateroute";
import Activities from "./components/Pages/Activities";
import UpcomingActivities from "./components/Pages/UpcomingActivities";
import Placement2022 from "./components/Pages/Placement2022";
import Placement2021 from "./components/Pages/Placement2021";
import Placement2020 from "./components/Pages/Placement2020";
import Placement2023 from "./components/Pages/Placement2023";
import Footer from "./components/Footer";

function App() {
  const [showSidebar, SetShowSidebar] = useState(true);

  function ToggleSidebar() {
    SetShowSidebar(!showSidebar);
  }

  return (
    <>
      <Router>
        <div className="">
          <Navbar ToggleSidebar={ToggleSidebar} />
        </div>
        <div className="main">
          <div className={showSidebar ? "sidebar  " : "sidebar sidebar-wrap"}>
            <Sidebar showSidebar={showSidebar} ToggleSidebar={ToggleSidebar} />
          </div>

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path='/home' element={<Home />} /> */}
              <Route path='/events' element={<Events />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts" exact={true} element={<Posts />} />
              <Route path="/connect" exact={true} element={<Connect />} />
              <Route path="/faculty" exact={true} element={<Faculty />} />
              <Route path="/explore" exact={true} element={<Explore />} />
              <Route path="/register" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/placement-year"
                exact={true}
                element={<PlacementYear />}
              />
              <Route path="/recruiter" exact={true} element={<Recruiter />} />
              <Route path="/placement-24" exact={true} element={<Placement />} />
              <Route path="/placement-23" exact={true} element={<Placement2023 />} />
              <Route path="/placement-22" exact={true} element={<Placement2022 />} />
              <Route path="/placement-21" exact={true} element={<Placement2021 />} />
              <Route path="/placement-20" exact={true} element={<Placement2020 />} />
              <Route path="/activities" exact={true} element={<Activities />} />
              <Route path="/upcoming-activities" exact={true} element={<UpcomingActivities />} />
            
              
            </Routes>
            
          </div>
          
        </div>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
