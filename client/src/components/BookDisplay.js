import React from 'react';
import "../App.css";
import Details from "./Details";


function BookDisplay(props){

    return ( 
        <div className='col'>
            <div className='card book_card'>
                <div className='card-body'>
                    <h5 className='card-title book_title'>{props.book.title}</h5> 
                    <p className='card-text'>Author: {props.book.author}</p>
                    {/* <p className='card-text'>Description: {props.book.description}</p> */}
                    {/* <button onClick={props.handleClick} name={props.book.id} type="button" className='btn btn-outline-info'>Details</button> */}
                    <Details handleClick={props.handleClick} book={props.book}/>
                </div>
            </div>
        </div>
    );
}
 
export default BookDisplay;