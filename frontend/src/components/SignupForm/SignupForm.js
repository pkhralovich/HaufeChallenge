/*External or react libraries*/
import React, { useRef } from 'react';
import { Link, useHistory } from "react-router-dom";

/*Services*/
import AuthService from '../../services/AuthService';

/* Others */
import './SignupForm.css';
import signupImage from '../../assets/images/form-header-2.png';
import {addError, clearError} from '../../helpers/ui';
import { pages } from "../../helpers/api"; 

function SignupForm(props) {
    const history = useHistory();
    const service = new AuthService();

    const confirmationInput = useRef(null);
    const passwordInput = useRef(null);
    const usernameInput = useRef(null);

    const passwordError = useRef(null);
    const usernameError = useRef(null);
    const confirmationError = useRef(null);

    function onClickSignup() {
        clearError(passwordInput, passwordError);
        clearError(usernameInput, usernameError);
        clearError(confirmationInput, confirmationError);

        let password = passwordInput.current.value;
        let username = usernameInput.current.value;
        let confirmation = confirmationInput.current.value;

        if (username && password && confirmation) {
            if (password === confirmation) 
                service.signup({ 
                    username, 
                    password, 
                    confirmation 
                }, onSignupSuccess, onSignupError);
            else {
                addError(passwordInput, passwordError, "Passwords not matching");
                addError(confirmationInput, confirmationError, "Passwords not matching");
            }
        } else {
            if(!username) addError(usernameInput, usernameError, "Compulsory value");
            if (!password) addError(passwordInput, passwordError, "Compulsory value");
            if (!confirmation) addError(confirmationInput, confirmationError, "Compulsory value");
        }
    }

    function onSignupSuccess(response) {
        switch (response.status) {
            case 200: {
                history.push(pages.LOGIN);
                break;
            }
            case 400: {
                if (response.data.username) {
                    addError(usernameInput, usernameError, response.data.username);
                }
                if (response.data.password) {
                    addError(passwordInput, passwordError, response.data.password);
                }
                if(response.data.confirmation) {
                    addError(confirmationInput, confirmationError, response.data.confirmation);
                }

                break;
            }
            case 409: {
                addError(usernameInput, usernameError, "User already signed up");
                break;
            }
            default: onSignupError();
        }
    }

    function onSignupError() {
        addError(usernameInput, usernameError, "Ups... Something happened");
    }

    return (
        <div className="signup-container center-absolute">
            <img src={signupImage} alt="Morty"/>
            <h2>Sign up</h2>
            <form className="signup-form">
            <label htmlFor="input-username">Username</label>
                <input ref={usernameInput} id="input-password" type="text" placeholder="Rick&Morty2021"/>
                <p ref={usernameError} className="input-error"></p>

                <label htmlFor="input-password">Password</label>
                <input ref={passwordInput} id="input-password" type="password" placeholder="Best password in the world!"/>
                <p ref={passwordError} className="input-error"></p>

                <label htmlFor="input-password-confirmation">Confirmation password</label>
                <input ref={confirmationInput} id="input-password-confirmation" type="password" placeholder="Best password in the world!"/>
                <p ref={confirmationError} className="input-error"></p>

                <button onClick={onClickSignup} type="button">Sign up</button>
            </form>
            <Link className="link" to={pages.LOGIN}>Already signed up?</Link>
        </div>
    )
}

export default SignupForm;