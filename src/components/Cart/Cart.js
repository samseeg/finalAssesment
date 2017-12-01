import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Cart.css';

// import {Link} from 'react-router-dom';

class Cart extends Component {
    render() {
        return (
            <div className='Cart_wrapper'>
                <Nav/>
                <div className='Cart_title'>
                    Cart
                    </div>
            </div>
        )
    }
}

export default Cart;