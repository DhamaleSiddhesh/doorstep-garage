// import axios from "axios";
import { useEffect, useState } from "react";
import "./Profile.css";
import Accordion from 'react-bootstrap/Accordion'
import axios from "axios";
import { useNavigate } from "react-router";
import logoImage from "../resources/Assets/mechanic.png"

// import _ from "lodash";

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

    return (

        <div className="Pbox">
            <i classname="fa fa-address-book" aria-hidden="true"></i>
            <div> <img className="mx-2 mb-3" src={logoImage} alt="eror" width="50" height="60"/>
            <strong className="Profile">Profile</strong>

           </div>

            <p className="mx-3">Doorstep Garage...</p>
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
                        <div>Last Activity</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div>Service you ordered last time: {localStorage.getItem("serviceName")}</div>

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
                        <div className="logout" onClick={logout} >logout</div>
                    </Accordion.Body>
                </Accordion>

            </div>
        </div>

    )
}
export default Profile;