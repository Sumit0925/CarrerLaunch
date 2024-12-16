import React, { useState } from 'react';
import "./assets/Sidebar.css"
import GcetLogo from "../assets/gcet_logo.png";
import { Link } from 'react-router-dom';
import { BsFileEarmarkPostFill, BsFillPersonVcardFill, BsPersonFillAdd } from "react-icons/bs";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { TbDatabaseSearch } from "react-icons/tb";
import { IoIosPaper } from "react-icons/io";
import { BsWrench } from "react-icons/bs";
import axios from 'axios';



function Sidebar(props) {
  const role = localStorage.getItem("role")
  return (
    <aside className={(props.showSidebar ? "sidenav active " : "sidenav")}>
      {/* <img src={GcetLogo} style={{width : "60px"}} alt="gect-logo" /> */}
      <ul onClick={props.ToggleSidebar}>
        <li className=''>
          { role=='admin' && (<Link to='/dashboard'>
          <div className='sidebar-links'>
          <BsWrench />
            <h1>Admin</h1>
            </div></Link>)}
          <Link to="/posts">
            <div className='sidebar-links'>
              <IoIosPaper />
              <h1>Posts</h1>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/connect">
            <div className='sidebar-links'>
              {/* <MdOutlineConnectWithoutContact className='big-svg'/> */}
              <BsPersonFillAdd />
              <h1>Connect</h1>
            </div>


          </Link>


        </li>
        <li>
          <Link to="/faculty">
            <div className='sidebar-links'>
              <BsFillPersonVcardFill />
              <h1>Faculty</h1>
            </div>

          </Link>
        </li>
        <li>
          <Link to="/explore">
            <div className='sidebar-links'>
              <TbDatabaseSearch />
              <h1>Explore</h1>
            </div>

          </Link>
        </li>
      </ul>

    </aside>
  )
}

export default Sidebar