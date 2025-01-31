import { useContext } from 'react';
import { ScreenContext } from '../contexts/ScreenContext.js';

function GenreFilms() {

    const { width } = useContext(ScreenContext);

    if (width) {
        return (
            <h1 className='text-center mt-5'>Genre Films</h1>
        );
    }
}

export default GenreFilms;