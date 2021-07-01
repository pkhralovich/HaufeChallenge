import React from 'react'

/* Components */
import Navbar from '../../components/Navbar/Navbar.js';
import LoginForm from '../../components/LoginForm/LoginForm.js';
import SignupForm from '../../components/SignupForm/SignupForm.js';

/* Others */
import './Login.css';

function App(props) {
  function handleLogin() {
    //TODO: Service call
  }

  function handleSignup() {
    //TODO: Service call
  }

  let form;
  if(props.showLogin) form = <LoginForm onClickLogin={handleLogin}/>;
  else form = <SignupForm onClickSignup={handleSignup}/>;

  return (
    <div>
      <Navbar></Navbar>
      {form}
    </div>
  );
}

export default App;
