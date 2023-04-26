import { useNavigate } from 'react-router';
import './Registration.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { Alert } from 'bootstrap';


function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate()
    const registration = () => {
        if ((name !== "") && (email !== "") && (phoneNo !== "") && (address !== "")) {

            axios.get("http://localhost:8080/users").then(function (response) {
                console.log('Uid ', response.data[response.data.length - 1].id + 1);

                let user = { id: response.data[response.data.length - 1].id + 1, name: name, email: email, phoneNo: phoneNo, address: [address] }
                console.log(user);
                axios.post("http://localhost:8080/users", user).then(function (response) {
                    console.log('usr ', response);
                    navigate('/login')

                });
            })
        }
        else {
            alert("Please Fill All The Required Fields ＞﹏＜")
        }
    }

    const reset = () => {
        setName("")
        setEmail("")
        setPhoneNo("")
        setAddress("")
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePhoneNoChange = (event) => {
        setPhoneNo(event.target.value)
    }

    const handleAddressChange = (event) => {
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
                    <Form.Control type="number" placeholder="***********" className='mb-3' onChange={handlePhoneNoChange} value={phoneNo} />

                    <label><strong>Address :</strong></label>
                    <Form.Control type="adress" placeholder="address" className='mb-3' onChange={handleAddressChange} value={address} />

                    <button type='button' className='mx-3 mt-3 Rbutton' onClick={registration}>Submit</button>
                    <button type='button' className='mx-3 mt-3 Rbutton' onClick={reset}> Reset</button>
                </form>
            </div>
        </div>


    )
}
export default Registration;