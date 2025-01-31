import { useContext, useState, useEffect } from 'react';
import { ScreenContext } from '../contexts/ScreenContext.js';
import { MovieContext } from '../contexts/MovieContext.js';

function Genres() {

    const { width } = useContext(ScreenContext);
    const { actions } = useContext(MovieContext);
    const [size, setSize] = useState(null);

        useEffect(() => {
            let newSize = null;
            if (width >= 1250) {
                newSize = 'large';
            } else if (width >= 1120) {
                newSize = 'medium';
            } else if (width >= 985) {
                newSize = 'small';
            } else if (width > 840) {
                newSize = 'tablet';
            } else {
                newSize = 'mobile';
            }
            if (size !== newSize) {
                setSize(newSize);
            }
        }, [width, size]);

        const genresList = [
            'romance',
            'comedy',
            'horror',
            'action',
            'drama',
            'crime',
            'animation',
            'documentary',
            'family',
            'fantasy',
            'history',
            'music',
            'mystery',
            'science_fiction',
            'tv_movie',
            'thriller',
            'war',
            'western'
        ];

        function genreMapper() {
            return genresList.map(
                (genre, i) => {
                    if (genre === 'science_fiction') {
                        return <h5 key={i}><a href={`/genres/science%20fiction`}>{'Science Fiction'}</a></h5>
                    } else if (genre === 'tv_movie') {
                        return <h5 key={i}><a href={`/genres/tv%20movie`}>{'TV Movie'}</a></h5>
                    }
                    return <h5 key={i}><a href={`/genres/${genre}`}>{actions.capitalizeFirstLetter(genre)}</a></h5>
                }
            )
        }

    if (size === 'large') {
        return (
            <div>
                <h1 className='text-center mt-5'>Genres</h1>
                {
                    genreMapper()
                }
            </div>

        );
    } else if (size === 'medium') {
        return (
            <div>
                <h1 className='text-center mt-5'>Genres</h1>
                {
                    genreMapper()
                }
            </div>
        );
    } else if (size === 'small') {
        return (
            <div>
                <h1 className='text-center mt-5'>Genres</h1>
                {
                    genreMapper()
                }
            </div>
        );
    } else if (size === 'tablet') {
        return (
            <div>
                <h1 className='text-center mt-5'>Genres</h1>
                {
                    genreMapper()
                }
            </div>
        );
    } else {
        return (
            <div>
                <h1 className='text-center mt-5'>Genres</h1>
                {
                    genreMapper()
                }
            </div>
        );
    }
}

export default Genres;