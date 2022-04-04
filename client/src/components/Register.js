import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useForm from '../customHooks/useForm';
import jwtDecode from 'jwt-decode';


function Register() {
    const [user, setUser] = useState({});

    const registerUser = () => {
        axios.post('http://localhost:5001/api/users', {
            name: values.name,
            email: values.email,
            password: values.password,
            isAdmin: false
        })
        .then((res) => {
            localStorage.setItem("token", res.data)
            const user = jwtDecode(localStorage.getItem("token"));
            console.log(res.data)
        })
        // .catch((error) => console.log(error))
    }

    const {
        values,
        handleChange,
        handleSubmit
    } = useForm(registerUser);


    return ( 
        <form className='content' onSubmit = {handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input 
                    type="name" 
                    className="form-control" 
                    name = "name"
                    onChange = {handleChange}
                    defaultValue = {values.name}
                    required = {true}
                />
            </div>
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
        </form>
    );
}

export default Register;