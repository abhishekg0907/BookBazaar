import { useRef } from "react";
import classes from "./SignUpForm.module.css";
import React from 'react';

function SignUpForm(props) {
  const enteredName = useRef();
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  function submit(event) {
    event.preventDefault();

    const userName = enteredName.current.value;
    const userEmail = enteredEmail.current.value;
    const userPassword = enteredPassword.current.value;

    const userData = {
      Name: userName,
      Email: userEmail,
      Password: userPassword,
      AdminAccess: false,
    };
    props.addNewUser(userData);
  }
  return (
    <div className={classes.body}>
      <form className={classes.form} onSubmit={submit}>
        <div className={classes.heading}>Sign Up</div>
        <div>
          <label className={classes.entry} htmlFor="name">
            Name
          </label>
          <input
            className={classes.textarea}
            type="text"
            required
            id="name"
            autoComplete="off"
            spellCheck="off"
            ref={enteredName}
          />
        </div>
        <div>
          <label className={classes.entry} htmlFor="email">
            Email
          </label>
          <input
            className={classes.textarea}
            type="email"
            required
            id="email"
            autoComplete="off"
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
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
