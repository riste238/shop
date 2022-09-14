import React, { useState } from "react";
// import AuthService from "../services/AuthService";
import LoginForm from "../components/loginForm/LoginForm";
import Register from '../components/registerForm/Register';



function AuthPages() {
    const [isFormLogin, setIsFormLogin] = useState(true);

    function setLoginForm(){
        setIsFormLogin(true);
    }
    function setRegisterForm(){
        setIsFormLogin(false);
    }

    return (
      <div>
          <button onClick={setLoginForm}>Login</button>
          <button onClick={setRegisterForm}>Register</button>
          {(isFormLogin ?  <LoginForm /> : <Register/>)}


      </div>
    )
}
export default AuthPages;