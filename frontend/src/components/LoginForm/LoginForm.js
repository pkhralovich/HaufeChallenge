import React from 'react'

/*External or react libraries*/
import { Link } from "react-router-dom";

/* Others */
import './LoginForm.css';
import loginImage from '../../assets/images/form-header.png';

function LoginForm(props) {
    return (
        <div className="login-container center-absolute">
            <img src={loginImage} alt="Morty "/>
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="input-username">Username</label>
                <input id="input-password" type="text" placeholder="Rick&Morty2021" required/>

                <label htmlFor="input-password">Password</label>
                <input id="input-password" type="password" placeholder="Best password in the world!" required/>

                <button onClick={props.onClickLogin}>Login</button>
            </form>
            <Link className="link" to="/signup">I don't have an account</Link>
        </div>
    )
}

export default LoginForm;