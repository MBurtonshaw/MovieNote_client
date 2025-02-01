import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext.js";
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';

function ComingSoon() {
    const { movies, actions } = useContext(MovieContext);

    useEffect(() => {
        if (!movies) { // Ensures we only fetch if movies haven't been loaded
            actions.getComingSoon();
        }
    }, [movies, actions]);

    function comingSoonMapper() {
        if (movies) {
            return (
                movies.map((movie, i) => {
                    return <h5 key={i} ><a href={`/title/${movie.id}`}>{movie.title}</a></h5>
                })
            );
        } else {
            return (
                <NotFound />
            )
        }
    }

    if (movies) {
        return (
            <div>
                <h1 className="text-center mt-5">Coming Soon</h1>
                {comingSoonMapper()}
            </div>
        );
    } else {
        return (
            <Loading />
        )
    }
}

export default ComingSoon;