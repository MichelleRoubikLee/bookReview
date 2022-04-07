import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Routes, Route} from 'react-router-dom';
import "./sass/main.scss";

import NavSearch from "./components/NavSearch";
import BookViewer from "./components/BookViewer";
import AddBook from "./components/AddBook";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import SideBar from "./components/SideBar";

function App() {

  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState();
  const [search, setSearch] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    getAllBooks()
  }, [books]);

  const getAllBooks = async () => {
    try{
      let response = await axios.get('http://localhost:5001/api/books');
      setBooks(response.data)
    }catch{
      console.log("file not found")
    }
  }

  const handleClick = (event) => {
    console.log("click handled " + event.target.name);
    setCurrentBook(event.target.name);
  }

  const handleChange = (event) => {
    console.log("change handled");
    let searchTerm = event.target.value;
    setSearch(searchTerm);
  }

  return ( 
    <div className="App">
      <NavSearch 
        books={books} 
        search={search} 
        handleChange={handleChange} 
      />

      <SideBar/>

      <div className='content'>

      
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        <Route path="books" 
            element={
            <BookViewer
              books={books} 
              search={search}
              handleClick={handleClick}
            />
          }
        />
        <Route path="addBook" element={<AddBook />}/>
        
      </Routes>
      </div>
    </div>
  );
}

export default App;



