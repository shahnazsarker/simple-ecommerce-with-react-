import React from 'react';
import {Link} from "react-router-dom";
import "../Login/login.css"

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2 className="login-header">Register</h2>
                <form className="login-header">
                    <button className="btn-regular"> Google Sign-In </button>
                </form>
                <p>Already have an account?<Link to="/login"> Login </Link></p>


            </div>

        </div>
    );
};

export default Register;