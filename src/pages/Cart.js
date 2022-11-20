import { useContext } from "react";
import { Link } from "react-router-dom";
import React from 'react';

import InCartContext from "../store/favorites-context";
import BookList from "../components/BookList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const favoritesCtx = useContext(InCartContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <div className="face">
        <div>
          <FontAwesomeIcon icon={faFaceFrown} size="5x" />
        </div>

        <div >You haven't added anything in Cart !</div>
      </div>
    );
  } else {
    content = (
      <div>
        <BookList books={favoritesCtx.favorites} />
        <div className="bill">Total Bill is : ₹{favoritesCtx.totalBill}</div>
        <Link to="/checkout">
          <div className="checkout">
            <button className="button buttonPayment">Checkout</button>
          </div>
        </Link>
      </div>
    );
  }

  return <section>{content}</section>;
}

export default Cart;
