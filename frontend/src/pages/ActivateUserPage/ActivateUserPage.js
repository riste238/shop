import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthService from '../../services/AuthService';


function ActivateUserPage() {
    
    const navigate = useNavigate();
    const params = useParams();

    const [isActivated, setIsActivated] = useState(false);
    const [isApiFinished, setIsApiFinished] = useState(false);
    useEffect(() => {
        if (localStorage.hasOwnProperty('user')) {
            navigate('/');
        }
        else {
       
            AuthService.completeRegistration({ userId: params.id })
                .then(response => {
                    if (response) {
                          
                    setIsActivated(true);
                 
                    setTimeout(()=> {
                            navigate('/authPage');
                    },3000)
                    }

                })
                .catch(error => {
                   
                    setIsActivated(false);

                })
               
                .finally(() => {
                    setIsApiFinished(true);
                })
        }
    }, [])


    const responseMsgLayout = () => {
        return isActivated ?

            <p>Successfully activated</p> :
            <p>User not activated</p>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Activate page</h1>
                    {isApiFinished && responseMsgLayout()}
                </div>
            </div>
        </div>
    )
}
export default ActivateUserPage;
