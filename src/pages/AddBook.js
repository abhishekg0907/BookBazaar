import { useNavigate } from "react-router-dom";
import React from 'react';

import AddBookForm from "../components/AddBookForm";

function AddBook() {
  const navigate = useNavigate();
  function addNewBook(bookData) {
    fetch("https://bookbazaar-cc648-default-rtdb.firebaseio.com/books.json", {
      method: "POST",
      body: JSON.stringify(bookData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
      alert("Book Added");
    });
  }
  return <AddBookForm addNewBook={addNewBook} />;
}

export default AddBook;
