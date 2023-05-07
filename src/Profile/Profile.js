// import axios from "axios";
import { useEffect, useState } from "react";
import "./Profile.css";
import Accordion from 'react-bootstrap/Accordion'
import axios from "axios";
import { useNavigate } from "react-router";
import _ from "lodash";

function Profile() {
    console.log('localStorage.getItem("userId"): ', localStorage.getItem("userId"));

    const navigate = useNavigate()


    const [user, setUser] = useState({})
    useEffect(() => {
        getProfile()
    }, [3])

    const getProfile = () => {
        axios.get(`http://localhost:8080/users/${localStorage.getItem("userId")}`).then(function (response) {
            console.log('response: ', response);

            setUser(response.data)
        });
    }

    const logout = () => {
        localStorage.removeItem("email")
        navigate('/')
    }

    console.log('user: ', user);
    console.log('user.address[: ', user.address);
    return (

        <div className="Pbox">
            <i classname="fa fa-address-book" aria-hidden="true"></i>
            <strong className="Profile">Profile</strong>
            <p className="mx-3">Doorstep Garage</p>
            <hr></hr>
            <div className="details">


                <Accordion className="my-3"
                    defaultActiveKey={['0']} >
                    <Accordion.Item
                        eventKey="0"></Accordion.Item>
                    <Accordion.Header className="acrdian">
                        <div>Personal Details</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div>name : {user.name}</div>
                        <div>mobile number : {user.phoneNo}</div>
                        <div>email : {user.email}</div>
                        <div>city : {user.address}</div>
                    </Accordion.Body>
                </Accordion>


                <Accordion className="my-3"
                    defaultActiveKey="0">
                    <Accordion.Item
                        eventKey="0"></Accordion.Item>
                    <Accordion.Header className="acrdian">
                        <div>History</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div>Services you ordered :</div>

                    </Accordion.Body>
                </Accordion>

                <Accordion className="my-3"
                    defaultActiveKey="0">
                    <Accordion.Item
                        eventKey="0"></Accordion.Item>
                    <Accordion.Header className="acrdian">
                        <div>Other Activities</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div onClick={logout}>logout</div>
                    </Accordion.Body>
                </Accordion>

            </div>
        </div>

    )
}
export default Profile;