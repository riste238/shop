import React, { useState } from "react";
// import AuthService from "../services/AuthService";
import LoginForm from "../components/loginForm/LoginForm";
import Register from '../components/registerForm/Register';



function AuthPages() {
    // const [isFormLogin, setIsFormLogin] = useState(true);
    const [isLogin, setIsLogin] = useState(true);

    // function setLoginForm(){
    //     setIsFormLogin(true);
    // }
    // function setRegisterForm(){
    //     setIsFormLogin(false);
    // }

    return (
        <div className="auth-wrapper container-fluid">
            <div className="row">
                <div className="col-md-6 p-md-5">
                    {isLogin ? <LoginForm showLoginForm={setIsLogin} /> : <Register showLoginForm={setIsLogin} />}
                </div>
            </div>
        </div>
    )
}
export default AuthPages;