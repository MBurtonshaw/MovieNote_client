function Navbar() {
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