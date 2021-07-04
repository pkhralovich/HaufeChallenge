/*External or react libraries*/
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

/* Components */
import Navbar from "../../components/Navbar/Navbar.js";
import LoginForm from "../../components/LoginForm/LoginForm.js";
import SignupForm from "../../components/SignupForm/SignupForm.js";

/* Others */
import './Login.css';

function App(props) {
  const history = useHistory();

  function renderContent() {
    let form;
    if(props.showLogin) form = <LoginForm />;
    else form = <SignupForm/>;

    return form;
  }
  
  useEffect(() => {
    if (localStorage.getItem("token")) history.push("/characters");
  });

  return (
    <div>
      <Navbar></Navbar>
      {renderContent()}
    </div>
  );
}

export default App;
