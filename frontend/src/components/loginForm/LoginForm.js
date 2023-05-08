import React, {useState} from 'react';
import AuthService from "../../services/AuthService";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/userSlice";

function LoginForm({showLoginForm}) {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });
    const [isValidForm, setIsValidForm] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onHandleInput = (e) => {
        let newInput = userData;
        newInput[e.target.name] = e.target.value;
        setUserData(newInput);
    };
    const loginForm = () => showLoginForm(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (!userData.username || !userData.password) {
            setIsValidForm(false)
            return
        }
        setIsValidForm(true);
        AuthService.login(userData)
            .then(res => {
                console.log(res.data);
                if (res && res.status === 200) {
                    // var decoded = jwt.verify(JSON.stringify(res.data), 'shhhhh');
                    // console.log(decoded);
                    localStorage.setItem('user', JSON.stringify(res.data));
                    dispatch(setUser(res.data));
                     navigate('/');
            } 
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        
        <form onSubmit={onSubmitForm} method="post">
            <h1>Login</h1>
            <label htmlFor="username">User name</label>
            <input className="form-control" name="username" type="text" id="username" onInput={onHandleInput}/>
            <label htmlFor="password">Password</label>
            <input className="form-control mb-3" name="password" type="password" id="password" onInput={onHandleInput}/>

            <button type="button" className="btn btn-primary px-5 form-control mb-3" onClick={loginForm}>Go to register</button>
            <button className="btn btn-success px-5 ms-auto form-control">OK</button>
            {!isValidForm && <p>Username and password is required!</p>}
         
        </form>
    );
}

export default LoginForm;