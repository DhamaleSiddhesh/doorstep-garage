import axios from "axios";
import "./Profile.css";
import Accordion from 'react-bootstrap/Accordion'
function Profile() {
    return (


        <div class="Pbox">
            <strong className="Profile">NAME </strong>
            <p className="mx-3">email</p>
            <hr></hr>
            <div className="details">
                <div className="my-3"></div>
                <div className="my-3">Contact number</div>
                <Accordion
                    defaultActiveKey="0">
                    <Accordion.Item
                        eventKey="0"></Accordion.Item>
                    <Accordion.Header className="acrdian">
                        <div>History</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        abc
                        abc
                    </Accordion.Body>
                    </Accordion>
                    

                    <div className="my-3">Logout</div>
            </div>
        </div>

    )
}
export default Profile;