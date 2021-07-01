import React from 'react'

/*External or react libraries*/
import { Link } from "react-router-dom";

/* Others */
import './SignupForm.css';
import signupImage from '../../assets/images/form-header-2.png';

function SignupForm(props) {
    return (
        <div className="signup-container center-absolute">
            <img src={signupImage}/>
            <h2>Sign up</h2>
            <form className="signup-form">
                <label htmlFor="input-username">Username</label>
                <input id="input-password" type="text" placeholder="Rick&Morty2021" required/>

                <label htmlFor="input-password">Password</label>
                <input id="input-password" type="password" required/>

                <label htmlFor="input-password-confirmation">Confirmation password</label>
                <input id="input-password-confirmation" type="password" required/>

                <button onClick={props.onClickSignup}>Sign up</button>
            </form>
            <Link className="link" to="/login">Already signed up?</Link>
        </div>
    )
}

export default SignupForm;