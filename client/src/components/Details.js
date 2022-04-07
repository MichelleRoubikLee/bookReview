import React from 'react';

function Details(props) {
    let text = props.book.title.split(" ").join("")
    const target= "#"+text;

    return ( 
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={target}>
            Toggle Details
            </button>

            <div className="modal fade" id={text} tabIndex="-1" aria-labelledby="{props.book}detailsLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="{props.book}detailsLabel">{props.book.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>Author: {props.book.author}</div>
                            <div>Description: {props.book.description}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Details;