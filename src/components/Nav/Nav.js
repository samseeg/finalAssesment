import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

// import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className='Nav_wrapper'>
                <div className='Nav_menu'>
                    <Link to='/browse'>Browse</Link>
                    <Link to='/Cart'>Cart</Link>
                    <Link to='Shelf'>My Shelf</Link>
                    </div>
            </div>
        )
    }
}

export default Nav;