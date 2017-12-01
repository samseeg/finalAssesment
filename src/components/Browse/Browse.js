import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Browse.css';

// import {Link} from 'react-router-dom';

class Browse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hi: ''
        }
        this.hiThereBindMe = this.hiThereBindMe.bind(this)
    }

    componentDidMount() {
        this.setState({
            hi: 'yay!'
        })
    }

    hiThereBindMe() {

    }

    render() {
        console.log('match', this.props.match)
        return (
            <div className='Browse_wrapper'>
                <Nav/>
                <div className='Browse_title'>
                    Browse
                    {this.state.hi}
                    </div>
            </div>
        )
    }
}

export default Browse;