import React from 'react';

function Details(props) {
    return ( 
        <div>
            <div className="offcanvas offcanvas-bottom" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Details</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="row">
                        <div className="col">
                            <img src="https://source.unsplash.com/bsLXJsucvxc" className="card-img-top" alt="album art" />
                        </div>
                        <div className="col">
                            <h1>{props.books[props.currentBook].title}</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Details;