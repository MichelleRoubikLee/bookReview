import React from 'react';
import BookDisplay from './BookDisplay';
import "../App.css";

function BookViewer(props) {
    return ( 
        <div className='row book_row'>
            {props.books.filter(book => book.title.includes(props.search)).map((book)=> <BookDisplay book={book} key={book.title} handleClick={props.handleClick}/>) }
        </div>
    );
} 
export default BookViewer;