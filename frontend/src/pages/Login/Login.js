import React from 'react'

/* Components */
import Navbar from '../../components/Navbar/Navbar.js';
import LoginForm from '../../components/LoginForm/LoginForm.js';
import SignupForm from '../../components/SignupForm/SignupForm.js';

/* Others */
import './Login.css';

function App(props) {
  let form;
  if(props.showLogin) form = <LoginForm />;
  else form = <SignupForm/>;

  return (
    <div>
      <Navbar></Navbar>
      {form}
    </div>
  );
}

export default App;
