import { useRef } from "react";
import React from 'react';
import classes from "./SignInForm.module.css";

function SignInForm(props) {
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  function submit(event) {
    event.preventDefault();

    const userEmail = enteredEmail.current.value;
    const userPassword = enteredPassword.current.value;

    const userData = {
      Email: userEmail,
      Password: userPassword,
    };
    props.checkExistingUser(userData);
  }
  return (
    <div className={classes.body}>
      <form className={classes.form} onSubmit={submit}>
        <div className={classes.heading}>Sign In</div>
        <div>
          <label className={classes.entry} htmlFor="email">
            Email
          </label>
          <input
            className={classes.textarea}
            type="email"
            required
            id="email"
            spellCheck="off"
            ref={enteredEmail}
          />
        </div>
        <div>
          <label className={classes.entry} htmlFor="password">
            Password
          </label>
          <input
            className={classes.textarea}
            type="password"
            required
            id="password"
            ref={enteredPassword}
          />
        </div>
        <div className={classes.btn}>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
