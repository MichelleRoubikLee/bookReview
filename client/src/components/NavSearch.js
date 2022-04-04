import React from 'react';
import {Link} from 'react-router-dom';

function NavSearch(props) {
  
    return ( 
      <div className="container navigation">
        <div id="navigation-bar">
          <nav>
            <ul>
              <li><a href="#" id="logo">LOGO</a></li>
              <li>
                <Link to='/'>
                  <a>Landing</a>
                </Link>
              </li>
              <li>
                <Link to='/books'>
                  <a>View Books</a>
                </Link>
              </li>
              <li>
                <Link to='/addBook'>
                  <a>Add Book</a>
                </Link>
              </li>
              <li>
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
              </li>
            </ul>
            
          </nav>
      </div>
    </div>
        
    );
}

export default NavSearch;