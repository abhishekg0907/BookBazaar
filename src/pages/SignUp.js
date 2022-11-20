import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import React from 'react';

function SignUp() {
  const navigate = useNavigate();
  function addNewUser(userData) {
    fetch("https://bookbazaar-cc648-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
      alert("SignUp Successful");
    });
  }
  return <SignUpForm addNewUser={addNewUser} />;
}

export default SignUp;
