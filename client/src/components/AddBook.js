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
        <form className = "addBook" onSubmit = {handleSubmit} >
            <label className = "addBook__label" > Title: </label> 
            <input 
                type = "title"
                className = "addBook__input"
                name = "title"
                onChange = {handleChange}
                defaultValue = {values.title}
                required = {true}
            /> 
        
        
            <label className = "addBook__label" > Author: </label> 
            <input type = "author"
                className = "addBook__input"
                name = "author"
                onChange = {handleChange}
                defaultValue = {values.author}
                required = {true}
            /> 
        
        
            <label className = "addBook__label" > Description: </label> 
            <input type = "description"
                className = "addBook__input"
                name = "description"
                onChange = {handleChange}
                defaultValue = {values.description}
                required = {true}
            /> 
         
        <button type = "submit" className = "btn btn-primary" > Submit </button> 
    </form>
    );
}

export default AddBook;