import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext.js";
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';

function List() {
    const { user, actions } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) { // Ensures we only fetch if movies haven't been loaded
            navigate('/login');
        }
    }, [user, actions]);

    if (user) {
        return (
            <div>
                <h1 className="text-center mt-5">My List</h1>
            </div>
        );
    } else {
        return (
            <Loading />
        )
    }

}

export default List;