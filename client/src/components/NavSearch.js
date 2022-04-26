import React from 'react';
import {Link} from 'react-router-dom';

function NavSearch(props) {
  
    return ( 
      <nav className="nav-bar__container">
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
          
        </ul>
        <div className="nav-bar__search">
            <form className="nav-bar__form">
              <input 
                name="search" 
                className="" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                onChange={props.handleChange}
                value={props.search}/>
              <button className="btn btn__navsearch" type="submit">Search</button>
            </form>
          </div>
      </nav>
    );
}

export default NavSearch;