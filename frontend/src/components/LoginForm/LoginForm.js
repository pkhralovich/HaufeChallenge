/*External or react libraries*/
import React, { useRef } from 'react';
import { Link, useHistory } from "react-router-dom";

/*Services*/
import AuthService from '../../services/AuthService';

/* Others */
import './LoginForm.css';
import loginImage from '../../assets/images/form-header.png';
import {addError, clearError} from '../../helpers/ui';

function LoginForm(props) {
    const history = useHistory();
    const service = new AuthService();

    const passwordInput = useRef(null);
    const usernameInput = useRef(null);

    const passwordError = useRef(null);
    const usernameError = useRef(null);

    function onClickLogin() {
        clearError(passwordInput, passwordError);
        clearError(usernameInput, usernameError);

        let password = passwordInput.current.value;
        let username = usernameInput.current.value;

        if (username && password) {
            service.login({ username, password }, onLoginSuccess, onLoginError);
        } else {
            if(!username) addError(usernameInput, usernameError, "Compulsory value");
            if (!password) addError(passwordInput, passwordError, "Compulsory value");
        }
    }

    function onLoginSuccess(response) {
        switch (response.status) {
            case 200: {
                localStorage.setItem("token", response.data.token);
                history.push("/characters");
                break;
            }
            case 400: {
                if (response.data.username) {
                    addError(usernameInput, usernameError, response.data.username);
                }
                if (response.data.password) {
                    addError(passwordInput, passwordError, response.data.password);
                }

                break;
            }
            case 401: {
                addError(usernameInput, usernameError, "Invalid username or password");
                break;
            }
            default: onLoginError();
        }
    }

    function onLoginError() {
        addError(usernameInput, usernameError, "Ups... Something happened");
    }

    return (
        <div className="login-container center-absolute">
            <img src={loginImage} alt="Morty"/>
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="input-username">Username</label>
                <input ref={usernameInput} id="input-password" type="text" placeholder="Rick&Morty2021"/>
                <p ref={usernameError} className="input-error"></p>

                <label htmlFor="input-password">Password</label>
                <input ref={passwordInput} id="input-password" type="password" placeholder="Best password in the world!"/>
                <p ref={passwordError} className="input-error"></p>

                <button onClick={onClickLogin} type="button">Login</button>
            </form>
            <Link className="link" to="/signup">I don't have an account</Link>
        </div>
    )
}

export default LoginForm;