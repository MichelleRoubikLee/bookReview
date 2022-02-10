import axios from 'axios';
import React from 'react';
import useForm from '../customHooks/useForm';

function AddBook(props) {

    const newBook = () => {
        axios.post('http://localhost:5001/api/books', {
            title: values.title,
            author: values.author,
            description: values.description
        })
    }

    const {
        values,
        handleChange,
        handleSubmit
    } = useForm(newBook);



    return ( 
        <form onSubmit = {handleSubmit} >
            <div className = "mb-3" >
                <label className = "form-label" > Title </label> 
                <input 
                    type = "title"
                    className = "form-control"
                    name = "title"
                    onChange = {handleChange}
                    defaultValue = {values.title}
                    required = {true}
                /> 
            </div> 
            <div className = "mb-3" >
                <label className = "form-label" > Author </label> 
                <input type = "author"
                    className = "form-control"
                    name = "author"
                    onChange = {handleChange}
                    defaultValue = {values.author}
                    required = {true}
                /> 
            </div> 
            <div className = "mb-3" >
                <label className = "form-label" > Description </label> 
                <input type = "description"
                    className = "form-control"
                    name = "description"
                    onChange = {handleChange}
                    defaultValue = {values.description}
                    required = {true}
                /> 
            </div> 
        <button type = "submit" className = "btn btn-primary" > Submit </button> 
    </form>
    );
}

export default AddBook;