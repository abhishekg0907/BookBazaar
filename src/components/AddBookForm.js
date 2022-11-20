import { useRef } from "react";
import React from 'react';

import classes from "./AddBookForm.module.css";

function AddBookForm(props) {
  const enteredName = useRef();
  const enteredLink = useRef();
  const enteredPrice = useRef();
  function submit(event) {
    event.preventDefault();

    const bookName = enteredName.current.value;
    const imageLink = enteredLink.current.value;
    const bookprice = enteredPrice.current.value;

    const bookData = {
      Name: bookName,
      Image: imageLink,
      Price: bookprice,
    };
    props.addNewBook(bookData);
  }
  return (
    <div className={classes.body}>
      <form className={classes.form} onSubmit={submit}>
        <div className={classes.heading}>Add New Book</div>
        <div>
          <label className={classes.entry} htmlFor="name">
            Book Name
          </label>
          <input
            className={classes.textarea}
            type="text"
            required
            id="name"
            autoComplete="off"
            ref={enteredName}
          />
        </div>
        <div>
          <label className={classes.entry} htmlFor="imageLink">
            Image Link
          </label>
          <input
            className={classes.textarea}
            type="link"
            required
            id="link"
            autoComplete="off"
            spellCheck="off"
            ref={enteredLink}
          />
        </div>
        <div>
          <label className={classes.entry} htmlFor="price">
            Price
          </label>
          <input
            className={classes.textarea}
            type="text"
            required
            id="price"
            autoComplete="off"
            ref={enteredPrice}
          />
        </div>
        <div className={classes.btn}>
          <button>ADD TO COLLECTION</button>
        </div>
      </form>
    </div>
  );
}

export default AddBookForm;
