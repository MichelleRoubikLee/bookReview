import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import NavSearch from "./components/NavSearch";
import BookViewer from "./components/BookViewer";
import Details from "./components/Details";
import AddBook from "./components/AddBook"

function App() {

  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState();
  const [search, setSearch] = useState("");

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
        {books.length > 0 ? 
          <BookViewer 
            books={books} 
            search={search}
            handleClick={handleClick}
          />
        :null} 
        {/* {books.length > 0 ? 
          <Details 
            books={books} 
            currentBook={currentBook}
          />
        :null} */}
        <AddBook />
      </div>
  );
}

export default App;



