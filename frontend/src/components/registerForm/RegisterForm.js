// import React,{useState} from "react";
// import AuthService from "../../services/AuthService";

// function RegisterForm() {
//     const [userObj, setUserObj]= useState({
//         username: '',
//         password: '',
//         email: '',
//         firstName:'',
//         lastname: ''
//     });
//     const [isFormValid, setIsFormValid] = useState(true);
//     const [isApiFinish, setIsApiFinish] = useState(false);
//     const [isApiError, setIsApiError] = useState(false);

//     const setUser = (e) =>{
//         let newUser = userObj;
//      newUser[e.target.name] = e.target.value;
//      setUserObj(newUser);
//     }

//     //CONTEXT
//   // const showLoginForm = useContext(ShowLoginFormContext)

//     const onSubmitForm = (e) => {
//         e.preventDefault();
//         // console.log('form submit -> ', username, password);
//         if (!userObj.username || !userObj.password || !userObj.email) {
//             setIsFormValid(false);
//             console.log(" invalid form " +userObj.email);
//             return;
//         }

//         setIsFormValid(true);

//         //    here we'll write API call to backend.
//         AuthService.register(userObj)
//             .then(response =>  {
//                 if(response.status === 200)
//                     setIsApiFinish(true);
//                     setIsApiError(false);
//             //        ako response status is right === 200 than, you send me to login page;
//             //      samo ako status response e 200, relocate to login form;
//             }
//             )
//             .catch(error => {
//                 console.log(error);
//                 if(error) setIsApiError(true);
//             })

//     }
// return (
//         <div>
//             <form onSubmit={event => { onSubmitForm(event) }}>
//                 <label htmlFor="username" /> Username:
//                 <input type="text"
//                        id="name"
//                        name="name"
//                        onChange={(event) => { setUser(event) }} />


//                 <br />
//                 <label htmlFor="password">Password: </label>
//                 <input type="text"
//                        id="password"
//                        name="password"
//                        onChange={(event) => { setUser(event) }} />

//                 <br />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email"
//                        id="email"
//                        name="email"
//                        onChange= {(event) => { setUser(event) }}/>

//                 <br/>
//                 <label htmlFor="firstName">Firstname:</label>
//                 <input type="text"
//                        id="firstName"
//                        name="firstName"
//                        onChange= {(event) => { setUser(event) }}/>

//                 <br/>
//                 <label htmlFor="lastname">Lastname:</label>
//                 <input type="text"
//                        id="lastname"
//                        name="lastname"
//                        onChange= {(event) => { setUser(event) }}/>

//                 <br/>


//                 <input type="submit" id="submit" name="submit" value="Register" />
//             </form>

//             {!isFormValid ? <p>All fileds are required!</p> : null}
//             {isApiFinish ? <p>Successfully registered!</p> : null}
//             {isApiError ? <p>Error, please try later</p> : null}
//         </div>


//     )
// }

// export default RegisterForm;