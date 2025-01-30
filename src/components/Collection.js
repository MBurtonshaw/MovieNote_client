import { useContext } from 'react';
import { ScreenContext } from '../contexts/ScreenContext.js';

function Collection() {

    const { width } = useContext(ScreenContext);

    if (width) {
        return (
            <h1 className='text-center mt-5'>Collection</h1>
        );
    }

}

export default Collection;