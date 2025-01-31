import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext.js";
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';

function Result() {
    const { movies, actions } = useContext(MovieContext);

    function resultMapper() {
        if (movies.length > 0) {
            return (
                movies.map((movie, i) => {
                    return <h5 key={i} >{movie.title}</h5>
                })
            );
        } else {
            return(
                <NotFound />
            );
        }
    }

    if (movies) {
        return (
            <div>
                <h1 className="text-center mt-5">Results</h1>
                {resultMapper()}
            </div>
        );
    } else {
        return (
            <Loading />
        )
    }

}

export default Result;