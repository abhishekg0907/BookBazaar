import { useContext } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import classes from "../components/Checkout.module.css";
import InCartContext from "../store/favorites-context";

function Checkout() {
  const navigate = useNavigate();
  const favoritesCtx = useContext(InCartContext);
  function checkoutDone(event) {
    event.preventDefault();
    const time = new Date();

    const userHistory = {
      Email: favoritesCtx.userEmail,
      PurchaseHistory: favoritesCtx.favorites,
      Time: time,
    };

    fetch(
      "https://bookbazaar-cc648-default-rtdb.firebaseio.com/userHistory.json",
      {
        method: "POST",
        body: JSON.stringify(userHistory),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      for (const key in favoritesCtx.favorites) {
        const book = {
          id: key,
          ...favoritesCtx.favorites[key],
        };
        favoritesCtx.removeFavorite(book);
      }

      navigate("/", { replace: true });
      alert("Purchase Successful");
    });
  }

  return (
    <div className={classes.body}>
      <form className={classes.form} onSubmit={checkoutDone}>
        <div className={classes.heading}>Shipping Address</div>
        <div>
          <label className={classes.entry}>Name*</label>
          <input
            className={classes.textarea}
            type="text"
            required
            id="name"
            autoComplete="off"
            spellCheck="off"
          />
        </div>
        <div>
          <label className={classes.entry}>Address*</label>
          <input
            className={classes.textarea}
            type="address"
            required
            id="address"
            autoComplete="off"
            spellCheck="off"
          />
        </div>
        <div>
          <label className={classes.entry}>Contact No.1*</label>
          <input
            className={classes.textarea}
            type="number"
            required
            id="contact"
            autoComplete="off"
            spellCheck="off"
          />
        </div>
        <div>
          <label className={classes.entry}>Contact No.2</label>
          <input
            className={classes.textarea}
            type="number"
            id="contact2"
            autoComplete="off"
            spellCheck="off"
          />
        </div>
        <div>
          <label className={classes.entry}>ZIP / Postal Code*</label>
          <input
            className={classes.textarea}
            type="pin"
            required
            id="pin"
            autoComplete="off"
            spellCheck="off"
          />
        </div>
        <div className={classes.btn}>
          <button>Checkout</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
