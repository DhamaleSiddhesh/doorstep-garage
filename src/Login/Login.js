import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

function Login() {
    const [email, setEmail] = useState();
    const [otp, setOTP] = useState();

    const navigate = useNavigate()
    const login = () =>{
    navigate('/garageresponce')
    console.log(email);
    console.log(otp)
    }
    const handleEmailChange =(event)=>{
        setEmail(event.target.value)
    }
    const handleOTPChange = (event)=>{
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
                        <Form.Control type="email" className='mb-3' onChange={handleOTPChange} value={otp}/>

                        <button type='button' className='mx-3 mt-3 Rbutton' onClick={login}>Submit</button>
                        <button type='button' className='mx-3 mt-3 Rbutton'>Reset</button>
                    </form>
                </div>
            </div>

        </div>
    )

}
export default Login;