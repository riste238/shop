import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthService from "../../services/AuthService";


function LoginForm() {

    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);
    const navigate = useNavigate();


    const changeName = (e) => { setName(e.target.value) };
    const changePassword = (e) => { setPassword(e.target.value) };
    const changeEmail = (e) => { setEmail(e.target.value)};


    const onSubmitForm = e => {
        e.preventDefault();
        // console.log('form submit -> ', username, password);
        if (!username || !password || !email) {
            setIsFormValid(false)
            return;
        }
        setIsFormValid(true);

        //    here we'll write API call to backend.
        let body = { username: username, password: password, email: email};
        AuthService.login(body)
            .then(response =>  {
                if(response && response.status === 200)
                    console.log('API RESPONSE' , response) 
                  localStorage.setItem("user", JSON.stringify(response.data));
                  navigate('/shop');
                   
                }
            )
            .catch((error) => {
                console.log(error);
            })

    }


    return (
        <form onSubmit={event => { onSubmitForm(event) }}>
            <label htmlFor={username} /> Username:
            <input type="text" id="name" name="name" onChange={(event) => { changeName(event) }} />


            <br />
            <label htmlFor={password}>Password: </label>
            <input type="password" id="password" name="password" onChange={(event) => { changePassword(event) }} />

            <br />
            <label htmlFor={email}>Email:</label>
            <input type="email"  id="email" name="email" onChange= {(event)=> {changeEmail(event)}}/>

            <br/>

            {!isFormValid ? <p>All fileds are required!</p> : null}
            <input type="submit" id="submit" name="submit" value="Login" />
        </form>

    )
}

export default LoginForm;