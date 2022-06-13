import React from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import "./login.css";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const{ signInWithGoogle}= useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const googleLoginHandler = () =>{
        signInWithGoogle()
            .then(result =>{
                history.push(redirect_uri);
            });



    }
    return (
        <div className="login-form card border-primary border-1 ">
            <div>
                <h2 className="login-header">Login</h2>
                <form className=" login-header">
                    <button className="btn-regular" onClick={googleLoginHandler}> Google Sign-In </button>
                </form>
                <p>New here?<Link to="/register"> Create Account </Link></p>

            </div>
            
        </div>
    );
};

export default Login;