import React from 'react';
import {Link} from 'react-router-dom';


function Landing(props) {
    return ( 
        <>
            <h1>Landing Page</h1>
            <Link to='/register'>
                <button className="btn btn__landing">Register</button>
            </Link>
            <Link to='/login'>
                <button className="btn btn__landing">Login</button>
            </Link>
        </>
    );
} 
export default Landing;