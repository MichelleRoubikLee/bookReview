import React from 'react';
// import "../App.css";

function NavSearch(props) {
    return ( 
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <h1>Book Review Site</h1>
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Toggle Player</button> */}
            <form className="d-flex">
              <input 
                name="search" 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                onChange={props.handleChange}
                value={props.search}/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
     );
}

export default NavSearch;