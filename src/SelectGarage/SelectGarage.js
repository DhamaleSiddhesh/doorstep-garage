import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import './SelectGarage.css'
import mechanicImage from "../resources/Assets/pexels-cottonbro-studio-4489794.jpg";
import { useEffect, useState } from 'react';
import axios from 'axios';


function SelectGarage() {
    const navigate = useNavigate()
    const { state } = useLocation()
    console.log('state: ', state);
    const [selectedGarages, setSelectedGarages] = useState();
    const [garages, setGarages] = useState([]);

    useEffect(() => {
        console.log("useEffect");
        getGarages()
    },[])

    const getGarages = () => {
        console.log("gt Garages");
        axios.get("http://localhost:8080/garages").then(function (response) {
            console.log('Grg', response);
            setGarages(response.data)
        });
    }
    const selectgarage = () => {
        navigate('/registration')
    }
    // const garage = [
    //     { Name: "omsai cars and bike services", Rating: "****", charges: "***", Adress: "Otur" },
    //     { Name: "Viki cars and bike services", Rating: "****", charges: "***", Adress: "Otur" },
    //     { Name: "shree cars and bike services", Rating: "****", charges: "***", Adress: "Otur" },
    //     { Name: "moraya cars and bike services", Rating: "****", charges: "***", Adress: "Otur" },
    //     { Name: "swaraj cars and bike services", Rating: "****", charges: "***", Adress: "Otur" },
    //     { Name: "shinde brothers cars and bike services", Rating: "****", charges: "***", Adress: "Otur" },
    //     { Name: "All Solution cars and bike services", Rating: "****", charges: "***", Adress: "Rajuri" },
    //     { Name: "Empire auto Garage", Rating: "****", charges: "***", Adress: "Alephata" },
    //     { Name: "Echo tech car services", Rating: "****", charges: "***", Adress: "Belhe" },
    //     { Name: "Ride 4 life", Rating: "****", charges: "***", Adress: "Ale" }]

    let city = state.city
    let filteredGarages = garages.filter((element) => city === element.Adress)
    return (
        <div className='align'>
            <h3 className='txt'>These garages provide the service you selected ...</h3>
            <img src={mechanicImage} alt='Error to load' height={500} width={"100%"} />

            {filteredGarages.map((element) => {
                console.log('element: ', element);

                return (

                    <div className="border mt-3 mx-3 cardColor cards" >
                        <dt>{element.Name}</dt>
                        <div><strong>Rating :</strong> {element.Rating}</div>
                        <div><strong>Location :</strong> {element.Adress}</div>
                        <button type='button' className='mt-2 mb-3 px-3' onClick={selectgarage}>Buy Service</button>

                    </div>
                )

            })

            }

        </div >
    )
}

export default SelectGarage;