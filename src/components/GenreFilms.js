import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ScreenContext } from '../contexts/ScreenContext.js';
import { MovieContext } from '../contexts/MovieContext.js';
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';

function GenreFilms() {

    const { width } = useContext(ScreenContext);
    const { movies, actions } = useContext(MovieContext);
    const { genre } = useParams();
    function capitalizedGenre2(style) {
        if (style === "science fiction" || style === "science%20ficion") {
            return "Science Fiction";
        } else if (style === "tv movie" || style === "tv%20movie") {
            return "TV Movie"
        }
        return actions.capitalizeFirstLetter(style);
    }

    useEffect(() => {
        if (!movies) { // Ensures we only fetch if movies haven't been loaded
            actions.getMoviesByGenre(genre);
        }
    }, [movies, actions]);

    function movie_mapper() {
        if (movies) {
            return movies.map(
                (movie, i) => {
                    return <h5 key={i}><a href={`/title/${movie.id}`}>{movie.title}</a></h5>
                }
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
                <h1 className='text-center mt-5'>{capitalizedGenre2(genre)}</h1>
                {movie_mapper()}
            </div>
        );
    } else {
        return (
            <Loading />
        )
    }
}

export default GenreFilms;