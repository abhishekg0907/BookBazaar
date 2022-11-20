import "./BookList.css";
import React from 'react';
import { useContext } from "react";

import InCartContext from "../store/favorites-context";

function Book(props) {
  const favoritesCtx = useContext(InCartContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        Name: props.Name,
        Image: props.Image,
        Price: props.Price,
      });
    }
  }

  return (
    <div className="card">
      <div className="name">{props.Name}</div>
      <img className="bookcover" src={props.Image} alt={props.Price} />
      <div className="price">₹{props.Price}</div>
      <div onClick={toggleFavoriteStatusHandler}>
        {itemIsFavorite ? (
          <div className="add2cart remove">Remove from Cart</div>
        ) : (
          <div className="add2cart">Add to Cart</div>
        )}
      </div>
    </div>
  );
}

export default Book;
