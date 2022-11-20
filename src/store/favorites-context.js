import { createContext, useState } from "react";
import React from 'react';

const InCartContext = createContext({
  favorites: [],
  isLoggedIn: false,
  totalFavorites: 0,
  totalBill: 0,
  userName: "",
  adminAccess: false,
  userEmail: "",
  addFavorite: (itemInCart) => {},
  removeFavorite: (itemId) => {},
  itemIsFavorite: (itemId) => {},
  toggleLogin: (name, email) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  const [userBill, setUserBill] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [adminAccess, setAdminAccess] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function addFavoriteHandler(itemInCart) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(itemInCart);
    });
    setUserBill((prevBill) => {
      return Number(prevBill) + Number(itemInCart.Price);
    });
  }

  function removeFavoriteHandler(itemId) {
    setUserBill((prevBill) => {
      return Number(prevBill) - Number(itemId.Price);
    });
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((item) => item.id !== itemId.id);
    });
  }

  function itemIsFavoriteHandler(itemId) {
    return userFavorites.some((item) => item.id === itemId);
  }

  function setAccess(access) {
    setAdminAccess(access);
  }

  function toggleLogin(name, email) {
    setUserName(name);
    setUserEmail(email);
    setLoggedIn(!loggedIn);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    totalBill: userBill,
    isLoggedIn: loggedIn,
    userName: userName,
    userEmail: userEmail,
    adminAccess: adminAccess,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
    toggleLogin: toggleLogin,
    setAccess: setAccess,
  };

  return (
    <InCartContext.Provider value={context}>
      {props.children}
    </InCartContext.Provider>
  );
}

export default InCartContext;
