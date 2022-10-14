import React, { useState } from "react";
// import AuthService from "../services/AuthService";
import './authPages.scss';
import LoginForm from "../components/loginForm/LoginForm";
import Register from '../components/registerForm/Register';



function AuthPages() {
    const [isLogin, setIsLogin] = useState(true);


    return (
        <div className="auth-wrapper container">
            <div className="row auth-row">
                <div className="col-md-6">
                    {isLogin ? <LoginForm showLoginForm={setIsLogin} /> : <Register showLoginForm={setIsLogin} />}
                </div>
            </div>
        </div>
    )
}
export default AuthPages;
