import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

function Login() {
    const navigate = useNavigate()
    const login = () =>{
    navigate('/garageresponce')
    }
    return (
        <div>
            < div className='bodycolor'>
                <div className='Registration mt-3'>Login here ...</div>
                <div className='Rborder '>
                    <form >

                        <label><strong>Email :</strong></label>
                        <Form.Control type="email" placeholder="name@example.com" className='mb-3' />

                        <lable><strong>OTP:</strong></lable>
                        <Form.Control type="email" className='mb-3' />

                        <button type='button' className='mx-3 mt-3 Rbutton' onClick={login}>Submit</button>
                        <button type='button' className='mx-3 mt-3 Rbutton'>Reset</button>
                    </form>
                </div>
            </div>

        </div>
    )

}
export default Login;