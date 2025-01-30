import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext.js';

function Home() {

    const { movies } = useContext(MovieContext);

    if (movies) {
        return (
            <h1 className='text-center mt-5'>Home</h1>
        );
    } else {
        return(
            <h1 className='text-center mt-5'>Home</h1>
        );
    }

}

export default Home;