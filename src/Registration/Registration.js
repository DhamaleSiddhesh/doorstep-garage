import { useNavigate } from 'react-router';
import './Registration.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Registration() {
    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[phoneNo, setPhoneNo] = useState();
    const[address, setAddress] = useState();

    const navigate = useNavigate()
    const registration = () =>{
        navigate('/login')
        console.log(name);
        console.log(email);
        console.log(phoneNo);
        console.log(address);
    }
    
    const handleNameChange =(event) =>{
        setName(event.target.value)
    }

    const handleEmailChange =(event) =>{
        setEmail(event.target.value)
    }

    const handlePhoneNoChange =(event) =>{
        setPhoneNo(event.target.value)
    }

    const handleAddressChange =(event) =>{
        setAddress(event.target.value)
    }
    return (
        < div className='bodycolor'>
            <div className='Registration mt-3'>Register for further process</div>
            <div className='Rborder '>
                <form >
                   <label><strong>Full Name : </strong></label>
                    <Form.Control type="name" placeholder="abc pqr xyz" className='mb-3' onChange={handleNameChange} value={name} />

                   <label><strong>Email :</strong></label>
                    <Form.Control type="email" placeholder="name@example.com" className='mb-3' onChange={handleEmailChange} value={email} />

                   <label><strong>Phone no :</strong></label>
                    <Form.Control type="number" placeholder="***********" className='mb-3' onChange={handlePhoneNoChange} value={phoneNo}  />

                    <label><strong>Address :</strong></label>
                    <Form.Control type="adress" placeholder="address" className='mb-3' onChange={handleAddressChange} value={address} />

                    <button type='button' className='mx-3 mt-3 Rbutton' onClick={registration}>Submit</button>
                    <button type='button' className='mx-3 mt-3 Rbutton'>Reset</button>
                </form>
            </div>
        </div>


    )
}
export default Registration;