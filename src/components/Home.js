import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext.js";
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';

function Home() {
    const { movies, actions } = useContext(MovieContext);

    useEffect(() => {
        if (!movies) { // Ensures we only fetch if movies haven't been loaded
            actions.getNowPlaying();
        }
    }, [movies, actions]);

    function nowPlayingMapper() {
        if (movies) {
            return (
                movies.map((movie, i) => {
                    return <h5 key={i} ><a href={`/title/${movie.id}`}>{movie.title}</a></h5>
                })
            );
        } else {
            return (
                <NotFound />
            );
        }
    }

    if (movies) {
        return (
            <div>
                <h1 className="text-center mt-5">Now Playing</h1>
                {nowPlayingMapper()}
            </div>
        );
    } else {
        return (
            <Loading />
        )
    }

}

export default Home;