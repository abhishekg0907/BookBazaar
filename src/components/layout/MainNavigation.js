import { Link } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faPlus,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";
import Modal2 from "../Modal2";
// import SearchBar from "./SearchBar";
import Backdrop from "../Backdrop";
import { useContext } from "react";

import "./MainNavigation.css";

import InCartContext from "../../store/favorites-context";
// import TextField from "@mui/material/TextField";
// import List from "./Components/List";

function MainNavigation() {
  const favoritesCtx = useContext(InCartContext);

  const [currState, changeState] = useState(false);

  let loginInfo;
  let modalContent;

  if (currState) {
    if (favoritesCtx.isLoggedIn) {
      modalContent = (
        <div>
          <Backdrop changeState={changeState} />
          <Modal2 changeState={changeState} />
        </div>
      );
    } else {
      modalContent = (
        <div>
          <Backdrop changeState={changeState} />
          <Modal changeState={changeState} />
        </div>
      );
    }
  }

  function login() {
    changeState(true);
  }

  function logout() {
    changeState(true);
  }

  if (favoritesCtx.isLoggedIn) {
    loginInfo = <button title="Logout" className="button buttonLight" onClick={logout}>{favoritesCtx.userName}</button>;
  } else {
    loginInfo = (
      <div className="login">
        <button className="button" onClick={login}>
          <FontAwesomeIcon title="Login" icon={faUser} />
        </button>
      </div>
    );
  }

  let content;
  if (favoritesCtx.totalFavorites !== 0)
    content = <span className="badge">{favoritesCtx.totalFavorites}</span>;

  let cartAndBook = (
    <div className="search">
      <Link to="/add-book">
        <div>
          <button className="button">
            <FontAwesomeIcon title="Add New Book" icon={faPlus} />
          </button>
        </div>
      </Link>

      <Link to="/purchase-history">
        <div>
          <button className="button">
            <FontAwesomeIcon title="Purchase History" icon={faHistory} />
          </button>
        </div>
      </Link>

      <Link to="/cart">
        <div className="cart">
          <button className="button">
            <FontAwesomeIcon title="Cart" icon={faShoppingCart} />
          </button>
          {content}
        </div>
      </Link>
    </div>
  );

  return (
    <div>
      <header>
        <div className="left">
          <Link to="/">
            <div id="logo"></div>
          </Link>
        </div>

        <div className="right">
          {favoritesCtx.isLoggedIn && cartAndBook}
          {loginInfo} 
        </div>

      </header>
      {modalContent}
      <div className="seperation" />
    </div>
  );
}

export default MainNavigation;
