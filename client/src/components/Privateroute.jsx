import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Privateroute = () => {

    const navigate = useNavigate()

    let loggedIn=true;

    if(loggedIn){
        return <Outlet />
    }else{
        return ('user not loggedIN')
    }
    
}

export default Privateroute