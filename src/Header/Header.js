import { useNavigate } from "react-router";
import "./Header.css"

function Header(props) {
    // const dispatch = useDispatch()
    // const user = useSelector(state => state.user)
    // console.log('user: ', user);
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
                <img src="src\resources\Assets\mechanic.png"></img>
                <h4><strong>DOORSTEP GARAGE</strong></h4>
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