import { Link } from "react-router-dom";
import React from 'react';
import "./Modal.css";

function Modal(props) {
  function back2MainNav() {
    props.changeState(false);
  }

  return (
    <div className="modal">
      <p>Choose One option</p>
      <Link to="/sign-in">
        <button className="button" onClick={back2MainNav}>
          Sign In
        </button>
      </Link>
      <Link to="/sign-up">
        <button className="button" onClick={back2MainNav}>
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default Modal;
