import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useForm from '../customHooks/useForm';
import {Link} from 'react-router-dom';


function Login() {

    const loginUser = () => {
        axios.post('http://localhost:5001/api/auth', {
            email: values.email,
            password: values.password
        })
    }

    const {
        values,
        handleChange,
        handleSubmit
    } = useForm(loginUser);


    return ( 
        <form className='content' onSubmit = {handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input 
                    type="email" 
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange = {handleChange}
                    name="email"
                    defaultValue = {values.email}
                    required = {true}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    name = "password"
                    onChange = {handleChange}
                    defaultValue = {values.password}
                    required = {true}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to='/register'>
              <a>Register</a>
            </Link>
        </form>
    );
}

export default Login;