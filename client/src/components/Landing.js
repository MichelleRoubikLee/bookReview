import React from 'react';
import {Link} from 'react-router-dom';


function Landing(props) {
    return ( 
        <div className='content'>
            <h1>Landing Page</h1>
            <Link to='/register'>
                <button className="btn btn-info">Register</button>
            </Link>
            <Link to='/login'>
                <button className="btn btn-success">Login</button>
            </Link>
        </div>
    );
} 
export default Landing;