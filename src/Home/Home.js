import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate()
    const home = ()=>{
        navigate("/selectvehicle")
    }
    return (
        <div>
            <div className="bgimg"></div>
            <div className="text">
                <div className="title">DOORSTEP GARAGE</div>
                <div className="slogan">we take care of your vehicles</div>
                <button className="my-2 p-2" onClick={home}>Get Started</button>
            </div>
        </div>
    )

}
export default Home;
