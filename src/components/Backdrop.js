import "./Backdrop.css";
import React from 'react';

function Backdrop(props) {
  function back2MainNav() {
    props.changeState(false);
  }
  return <div className="backdrop" onClick={back2MainNav} />;
}

export default Backdrop;
