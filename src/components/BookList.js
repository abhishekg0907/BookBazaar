import Book from "./Book";
import React from 'react';

function BookList(props) {
  return (
    <div className="flex">
      {props.books.map((dd) => {
        return (
          <div key={dd.id}>
            <Book id={dd.id} Name={dd.Name} Image={dd.Image} Price={dd.Price} />
          </div>
        );
      })}
    </div>
  );
}

export default BookList;
