import { useNavigate } from 'react-router';
import './Registration.css'
import Form from 'react-bootstrap/Form';

function Registration() {
    const navigate = useNavigate()
    const registration = () =>{
        navigate('/login')
    }
    return (
        < div className='bodycolor'>
            <div className='Registration mt-3'>Register for further process</div>
            <div className='Rborder '>
                <form >
                   <label><strong>Full Name : </strong></label>
                    <Form.Control type="name" placeholder="abc pqr xyz" className='mb-3' />

                   <label><strong>Email :</strong></label>
                    <Form.Control type="email" placeholder="name@example.com" className='mb-3' />

                   <lable><strong>Phone no :</strong></lable>
                    <Form.Control type="email" placeholder="***********" className='mb-3'  />

                    <lable><strong>Address :</strong></lable>
                    <Form.Control type="adress" placeholder="address" className='mb-3' />

                    <button type='button' className='mx-3 mt-3 Rbutton' onClick={registration}>Submit</button>
                    <button type='button' className='mx-3 mt-3 Rbutton'>Reset</button>
                </form>
            </div>
        </div>


    )
}
export default Registration;