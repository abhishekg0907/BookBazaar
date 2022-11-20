import { useState, useEffect } from "react";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faSearch } from "@fortawesome/free-solid-svg-icons";

import BookList from "../components/BookList";
import classes from '../components/Home.module.css';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBooks, setLoadedBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    fetch("https://bookbazaar-cc648-default-rtdb.firebaseio.com/books.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const books = [];

        for (const key in data) {
          const book = {
            id: key,
            ...data[key],
          };
          books.push(book);
        }
        setIsLoading(false);
        setLoadedBooks(books);
        setNewBooks(books);
      });
  }, []);
  useEffect(() => {
    setNewBooks(
      // eslint-disable-next-line
      loadedBooks.filter((product) => {
        if (searchTerm === "") {
          return product;
        } else if (
          product.Name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return product;
        }
      })
    );
  }, [searchTerm, loadedBooks]);
  if (isLoading)
    return (
      <div className="App App-header App-logo">
        <FontAwesomeIcon icon={faCircleNotch} size="5x" />
      </div>
    );

  return (
    <div>
      <div className={classes.searchBox}>
      <input
        type="text"
        placeholder="Search here..."
        className={classes.searchInput}
        spellCheck={false}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <FontAwesomeIcon className={classes.searchButton} icon={faSearch} />
      </div>

      <div className="flex">
        <BookList books={newBooks} />
      </div>
    </div>
  );
}

export default Home;
