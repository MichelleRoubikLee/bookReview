import React from 'react';
import "../App.css";
import Details from "./Details";

//add want to read functionality
//add book cover picture
function BookDisplay(props){

    return ( 
        <div className='col'>
            <div className='card book_card'>
                <div className='card-body'>
                    <h5 className='card-title book_title'>{props.book.title}</h5> 
                    <p className='card-text'>Author: {props.book.author}</p>
                    <button className='btn'>Want to Read</button>
                    <Details handleClick={props.handleClick} book={props.book}/>
                </div>
            </div>
        </div>
    );
}
 
export default BookDisplay;