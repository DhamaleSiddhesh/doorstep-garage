import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import logoImage from "../resources/Assets/mechanic.png"


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    const login = () => {
        let users = []

        if ((email !== "") && (password !== "")) {
            axios.get("http://localhost:8080/users").then(function (response) {
                users = response.data
                let matchedUsers = users.find((user) => {
                    if (user.email === email) {
                        
                        
                        return user;
                    }
                    

                })
               var pass = localStorage.getItem("password")
               console.log('pass: ', pass);
                if (pass === password) {

                    alert("Login Succesful")
                    localStorage.setItem("email", matchedUsers.email)
                    localStorage.setItem("userId", matchedUsers.id)

                    navigate('/GarageResponce')
                
                }
            
                else {
                    alert("Invalid Password")
                }


            })

        }

        else {
            alert("Please enter email and Password ")
        }
    }

    const reset = () => {
        setEmail("")
        setPassword("")
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    return (
        <div>
            < div className='bodycolor'>
                <div className='Registration mt-3'>Login here ...</div>
                <div className='Rborder '>
                <div> <img className="mx-3 mb-3" src={logoImage} alt="eror" width="40" height="45"/>
           <strong className='ml-3'> Doorstep Garage</strong>
           </div>

                    <form >

                        <label><strong>Email :</strong></label>
                        <Form.Control type="email" placeholder="name@example.com" className='mb-3' onChange={handleEmailChange} value={email} />

                        <label><strong>Password:</strong></label>
                        <Form.Control type="email" className='mb-3' onChange={handlePasswordChange} value={password} />

                        <button type='button' className='mx-3 mt-3 Rbutton' onClick={login}>Login</button>
                        <button type='button' className='mx-3 mt-3 Rbutton' onClick={reset}>Reset</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;