import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

// import {Link} from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className='login_wrapper'>
                <div className='login_title'>
                    <Link to='/browse'>Login</Link>
                    {/* <a href={process.env.REACT_APP_LOGIN} className='login_btn'><div>Login/Register</div></a> */}
                    </div>
            </div>
        )
    }
}

export default Login;