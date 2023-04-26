import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

function Login() {
    const [email, setEmail] = useState("");
    const [otp, setOTP] = useState("");

    const navigate = useNavigate()
    const login = () => {
        let users = []

        if ((email !== "") && (otp !== "")) {
            axios.get("http://localhost:8080/users").then(function (response) {
                users = response.data
                console.log('users: ', users);
                let matchedUsers = users.find((user) => {
                    console.log('user: ', user.email);
                    console.log('email: ', email);
                    if (user.email === email) {
                        // if (user.otp === otp) {
                        //     alert("Login Succesful")
                        //     navigate('/garageresponce')
                        //     return user;

                        // }
                        // else {
                        //     alert("Invalid OTP")
                        //     return;
                        // }
                        return user;
                    }
                    // else {
                    //     alert("Invalid Email address")
                    //     return;
                    // }

                })
                console.log('matchedUsers: ', matchedUsers);
                console.log('otp: ', otp);
                if (matchedUsers.otp == otp) {
                    alert("Login Succesful")
                    navigate('/garageresponce')

                }
                else{
                    alert("Invalid OTP")
                }


            })
            console.log(email);
            console.log(otp)
        }
        else {
            alert("Please enter email and otp ")
        }
    }

    const reset = () => {
        setEmail("")
        setOTP("")
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleOTPChange = (event) => {
        setOTP(event.target.value)
    }
    return (
        <div>
            < div className='bodycolor'>
                <div className='Registration mt-3'>Login here ...</div>
                <div className='Rborder '>
                    <form >

                        <label><strong>Email :</strong></label>
                        <Form.Control type="email" placeholder="name@example.com" className='mb-3' onChange={handleEmailChange} value={email} />

                        <label><strong>OTP:</strong></label>
                        <Form.Control type="email" className='mb-3' onChange={handleOTPChange} value={otp} />

                        <button type='button' className='mx-3 mt-3 Rbutton' onClick={login}>Submit</button>
                        <button type='button' className='mx-3 mt-3 Rbutton' onClick={reset}>Reset</button>
                    </form>
                </div>
            </div>

        </div>
    )

}
export default Login;