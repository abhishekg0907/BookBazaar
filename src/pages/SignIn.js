import { useContext, useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";

import SignInForm from "../components/SignInForm";
import InCartContext from "../store/favorites-context";
import "../components/SignIn.css";

function SignIn() {
  const favoritesCtx = useContext(InCartContext);
  const navigate = useNavigate();
  const [warning, setWarning] = useState(<div></div>);

  function checkExistingUser(userData) {
    fetch("https://bookbazaar-cc648-default-rtdb.firebaseio.com/users.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const key in data) {
          const user = {
            id: key,
            ...data[key],
          };
          if (
            user.Email === userData.Email &&
            user.Password === userData.Password
          ) {
            favoritesCtx.toggleLogin(user.Name, user.Email);
            favoritesCtx.setAccess(user.AdminAccess);
            navigate("/", { replace: true });
          }
        }
        if (favoritesCtx.isLoggedIn === false) {
          setWarning(
            <div className="alert unsuccessful">
              SignIn Unsuccessful...Try Again
            </div>
          );
        }
      });
  }
  return (
    <div>
      {warning}
      <SignInForm checkExistingUser={checkExistingUser} />
    </div>
  );
}

export default SignIn;
