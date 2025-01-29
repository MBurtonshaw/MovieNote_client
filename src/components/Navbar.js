import { useContext, useState, useEffect } from 'react';
import { ScreenContext } from '../contexts/ScreenContext.js';

function Navbar() {

    const { width } = useContext(ScreenContext);

    if (width >= 1450) {
        console.log('xl')
    }
    else if ( width >= 1280 && width < 1450 ) {
        console.log('large')
    } else if ( width < 1280 && width >= 1000 ) {
        console.log('medium')
    } else {
        console.log('small')
    }

    return (
        <div id='navbar'>
            <h1>MovieNote</h1>
            <h5 id='coming_soon'>Coming Soon</h5>
            <h5>|</h5>
            <h5>New Releases</h5>
            <h5>|</h5>
            <h5>By Genre</h5>
            <h5>|</h5>
            <h5 id='collections'>Collections</h5>
            <input className='nav_input' type='text' placeholder='Search'></input>
            <div className='nav_button_div'>
                <button>Go</button>
            </div>

            <div className='nav_popcorn_div'>
                <img className='nav_popcorn' src='/images/icons/popcorn_color.png' />
            </div>
            <h5>My List</h5>
            <h5>|</h5>
            <h5>Logout</h5>
        </div>
    );
}

export default Navbar;