import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext.js";
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';

function Register() {
    const { user, actions } = useContext(MovieContext);

    // useEffect(() => {
    //     if (!movies) { // Ensures we only fetch if movies haven't been loaded
    //         actions.getNowPlaying();
    //     }
    // }, [movies, actions]);



}

export default Register;