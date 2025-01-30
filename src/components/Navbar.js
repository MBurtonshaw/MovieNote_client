import { useContext, useState, useEffect } from 'react';
import { ScreenContext } from '../contexts/ScreenContext.js';
import { UserContext } from '../contexts/UserContext.js';

function Navbar() {
    const [size, setSize] = useState(null);
    const { width } = useContext(ScreenContext);
    const { user } = useContext(UserContext);

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

        // Only update state if `size` is actually changing
        if (size !== newSize) {
            setSize(newSize);
        }
    }, [width, size]); // Added `size` to the dependency array

    if (size === 'large') {
        return (
            <div id={`navbar_${size}`}>
                <h1 className={`title_${size}`}>MovieNote</h1>
                <h5 id={`coming_soon_${size}`}>Coming Soon</h5>
                <h5>|</h5>
                <h5 className={`new_releases_${size}`}>New Releases</h5>
                <h5>|</h5>
                <h5 className={`by_genre_${size}`}>By Genre</h5>
                <h5>|</h5>
                <h5 id={`collections_${size}`}>Collections</h5>
                <div className={`nav_input_div`}>
                    <input className={`nav_input_${size}`} type='text' placeholder='Search' />
                    <div className={`nav_button_div_${size}`}>
                        <button className={`nav_button_${size}`}>Go</button>
                    </div>
                </div>
                <div className={`nav_popcorn_div_${size}`}>
                    <img className={`nav_popcorn`} src='/images/icons/popcorn_color.png' alt='bag of popcorn' />
                </div>
                <h5 className={`my_list_${size}`}>My List</h5>
                <h5>|</h5>
                <h5 className={`logout_${size}`}>Logout</h5>
            </div>
        );
    } else if (size === 'medium') {
        return (
            <div id={`navbar_${size}`}>
                <h1 className={`title_${size}`}>MovieNote</h1>
                <div className="dropdown">
                    <button
                        className="dropdown-toggle p-0 border-0 bg-transparent w-100 text-start h5-style mb-2"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Browse Titles
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Home</a></li>
                        <li><a className="dropdown-item" href="/">Now Playing</a></li>
                        <li><a className="dropdown-item" href="/">Coming Soon</a></li>
                        <li><a className="dropdown-item" href="/genre">By Genre</a></li>
                        <li><a className="dropdown-item" href="/collection">Collections</a></li>
                    </ul>
                </div>
                <div className={`nav_input_div`}>
                    <input className={`nav_input_${size}`} type='text' placeholder='Search' />
                    <div className={`nav_button_div_${size}`}>
                        <button className={`nav_button_${size}`}>Go</button>
                    </div>
                </div>
                <div className={`nav_popcorn_div_${size}`}>
                    <img className={`nav_popcorn`} src='/images/icons/popcorn_color.png' alt='bag of popcorn' />
                </div>
                <h5 className={`my_list_${size}`}>My List</h5>
                <h5>|</h5>
                <h5 className={`logout_${size}`}>Logout</h5>
            </div>
        );
    } else if (size === 'small') {
        return (
            <div id={`navbar_${size}`}>
                <h1 className={`title_${size}`}>MovieNote</h1>
                <div className="dropdown">
                    <button
                        className="dropdown-toggle btn p-0 border-0 bg-transparent h5-style mb-2"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Browse Titles
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Home</a></li>
                        <li><a className="dropdown-item" href="/">Now Playing</a></li>
                        <li><a className="dropdown-item" href="/">Coming Soon</a></li>
                        <li><a className="dropdown-item" href="/genre">By Genre</a></li>
                        <li><a className="dropdown-item" href="/collection">Collections</a></li>
                    </ul>
                </div>
                <div className={`nav_input_div`}>
                    <input className={`nav_input_${size}`} type='text' placeholder='Search' />
                    <div className={`nav_button_div_${size}`}>
                        <button className={`nav_button_${size}`}>Go</button>
                    </div>
                </div>
                <div className={`nav_popcorn_div_${size}`}>
                    <img className={`nav_popcorn`} src='/images/icons/popcorn_color.png' alt='bag of popcorn' />

                </div>
                <div className={`user_icon_link_${size} dropdown`}>
                    <button
                        className="user_icon border-0 bg-transparent p-0" // Removed dropdown-toggle class
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ cursor: 'pointer' }} // Make it clear it's clickable
                    >
                        <img src='/images/icons/user.png' className='user_icon' alt='User Icon' />
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/list">My List</a></li>
                        <li><a className="dropdown-item" href="/logout">Log Out</a></li>
                    </ul>
                </div>
            </div>
        );
    } else if (size === 'tablet') {
        return (
            <div id={`navbar_${size}`}>
                <h1 className={`title_${size}`}>MovieNote</h1>
                <div className="dropdown">
                    <button className="dropdown-toggle border-0 bg-transparent p-0 h5-style mb-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Browse Titles
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Home</a></li>
                        <li><a className="dropdown-item" href="/">Now Playing</a></li>
                        <li><a className="dropdown-item" href="/">Coming Soon</a></li>
                        <li><a className="dropdown-item" href="/genre">By Genre</a></li>
                        <li><a className="dropdown-item" href="/collection">Collections</a></li>
                    </ul>
                </div>
                <div className={`nav_input_div`}>
                    <input className={`nav_input_${size}`} type='text' placeholder='Search' />
                    <div className={`nav_button_div_${size}`}>
                        <button className={`nav_button_${size}`}>Go</button>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className={`nav_popcorn_div_${size}`}>
                        <img className='nav_popcorn' src='/images/icons/popcorn_color.png' alt='bag of popcorn' />
                    </div>
                    <div className={`user_icon_link_${size} dropdown`}>
                        <button className="border-0 bg-transparent p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/images/icons/user.png" className="user_icon" alt="User icon" />
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/list">My List</a></li>
                            <li><a className="dropdown-item" href="/logout">Log Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div id={`navbar_${size}`}>
                <h1 >MovieNote</h1>
                <div className='w-100'>
                    <div className={`nav_popcorn_div_${size}`}>
                        <img className={`nav_popcorn_${size} w-100`} src='/images/icons/popcorn_color.png' alt='bag of popcorn' />
                    </div>
                </div>
                <div className='mobile_icon_div'>
                    <div className={`dropdown_${size} dropdown`}>
                        <button className="border-0 bg-transparent p-0 w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/images/icons/menu.png" className={`title_${size} w-100`} alt="Menu" />
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Home</a></li>
                            <li><a className="dropdown-item" href="/">Now Playing</a></li>
                            <li><a className="dropdown-item" href="/">Coming Soon</a></li>
                            <li><a className="dropdown-item" href="/genre">By Genre</a></li>
                            <li><a className="dropdown-item" href="/collection">Collections</a></li>
                        </ul>
                    </div>
                    <div className={`nav_input_div_${size} dropdown`}>
                        <div className="w-100" role="button" tabIndex="0" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className="w-100" src="/images/icons/magnifying_glass.png" alt="Search" />
                        </div>
                        <div className="dropdown-menu p-2" data-bs-auto-close="false">
                            <input className="form-control" type="text" placeholder="Search..." />
                        </div>
                    </div>
                    <div className={`user_icon_link_${size} dropdown`}>
                        <button className="bg-transparent border-0 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src='/images/icons/user.png' className='user_icon' alt="User Menu" />
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/list">My List</a></li>
                            <li><a className="dropdown-item" href="/logout">Log Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;