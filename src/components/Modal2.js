import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import InCartContext from "../store/favorites-context";
import "./Modal.css";

function Modal2(props) {
  const favoritesCtx = useContext(InCartContext);
  const navigate = useNavigate();

  function back2MainNav() {
    props.changeState(false);
  }
  function Toggle() {
    favoritesCtx.toggleLogin("", "");
    favoritesCtx.setAccess(false);
    back2MainNav();
    navigate("/", { replace: true });
  }
  return (
    <div className="modal">
      <p>Are you sure you wanna Logout ?</p>
      <button className="button" onClick={Toggle}>
        Yes
      </button>
      <button className="button" onClick={back2MainNav}>
        No
      </button>
    </div>
  );
}

export default Modal2;
