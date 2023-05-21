import { useNavigate } from "react-router";
import "./Header.css"
import logoImage from "../resources/Assets/mechanic.png"

function Header(props) {
    const navigate = useNavigate()
    const login = () => {
        navigate('/Login')
    }
    const registration = () => {
        navigate('/Registration')
    }
    const profile = () => {
        navigate('/Profile')
    }
    const logout = () => {
        localStorage.removeItem("email")
        navigate('/')
    }
    return (
        <>
            <div className="NavBar ">
                <div>
                <img className="mx-3" src={logoImage} alt="eror" width="30" height="35"/>
                <strong className="Htitle">DOORSTEP GARAGE</strong>
                </div>
                <div>

                    {!localStorage.getItem("email") && <span onClick={login} className="mx-3"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</span>}
                    {!localStorage.getItem("email") && <span onClick={registration} className="mx-3"><i className="fa fa-address-book-o" aria-hidden="true"></i>
                        Register</span>}
                    {localStorage.getItem("email") && <span className="mx-3">{localStorage.getItem("email")}</span>}
                    {localStorage.getItem("email") && <span onClick={profile} className="mx-3"><i className="fa fa-user" aria-hidden="true"></i> Profile</span>}
                    {localStorage.getItem("email") && <span onClick={logout} className="mx-3"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</span>}
                </div>
            </div>
        </>
    )

}
export default Header;