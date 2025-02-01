import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { MovieContext } from "../contexts/MovieContext.js";
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';

function Title() {
    const { movies, actions } = useContext(MovieContext);
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (!movies || movies.id !== Number(id)) { // Check if movie by this id is already fetched
            setMovie(actions.getMovieById(id));
        }
    }, [id, movies, actions]);

    function titleMapper() {
        if (movies) {
            return (
                <div className='text-center'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt={`${movies.title} poster`} />
                </div>
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
                <h1 className="text-center mt-5">{movies.title}</h1>
                {titleMapper()}
            </div>
        );
    } else {
        return (
            <Loading />
        )
    }

}

export default Title;