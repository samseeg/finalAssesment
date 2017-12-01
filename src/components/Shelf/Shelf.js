import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Shelf.css';

// import {Link} from 'react-router-dom';

class Shelf extends Component {
    render() {
        return (
            <div className='Shelf_wrapper'>
                <Nav/>
                <div className='Shelf_title'>
                    Shelf
                    </div>
            </div>
        )
    }
}

export default Shelf;