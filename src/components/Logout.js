import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext.js";
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const { user, actions } = useContext(UserContext);
    const navigate = useNavigate();

    function handleLogout() {
        actions.logoutUser();
        navigate('/');
    }
    return (
        <button onClick={handleLogout}>Logout</button>
    );


}

export default Logout;