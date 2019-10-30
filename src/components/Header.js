import React from 'react';
import {Link} from 'react-router-dom';


function Header(){
    return(
        <header>
            <h1>You had me at Aloe</h1>
            <nav>
            <Link to='/'>
                <button className='homeBtn'>
                    Home
                </button>
            </Link>
            <Link to='/myplants'>
                <button className='myPlantBtn'>
                    My Plants
                </button>
            </Link>
            <Link to='/wishlist'>
                <button className='wishListBtn'>
                    Wishlist
                </button>
            </Link>
            </nav>
        </header>
    )
}

export default Header;