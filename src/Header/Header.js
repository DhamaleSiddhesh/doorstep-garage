import { useNavigate } from "react-router";
import "./Header.css"
function Header(props){
    console.log('props: ', props);
    const navigate = useNavigate()
    const login = () =>
    {
        navigate ('/Login')
    }
    const registration = () =>
    {
        navigate('/Registration')
    }
    const profile = () =>
    {
        navigate('/Profile')
    } 
    const logout = () => {
        navigate('/')
    }
    return(
        <>
        <div className="NavBar ">
        
        <h4><strong>DOORSTEP GARAGE</strong></h4>
        <div>
            <span onClick={login} className="mx-3">Login</span>
            <span onClick={registration} className="mx-3">Register</span>
            <span onClick={profile} className="mx-3">Profile</span>
            <span onClick={logout} className="mx-3">Logout</span>
        </div>
    </div>
    </>
        )

}
export default Header;