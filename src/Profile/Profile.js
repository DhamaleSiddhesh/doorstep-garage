import axios from "axios";
import "./Profile.css";
function Profile() {
    return (
        <div class="Pbox">
            <strong className="Profile">PROFILE :</strong>
            <div className="details">
                <div className="my-3">name</div>
                <div className="my-3">Contact number</div>
                <div className="my-3">History</div>
                <div className="my-3">Logout</div> 
            </div>
        </div>
    )
}
export default Profile;