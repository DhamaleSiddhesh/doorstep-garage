import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import './SelectGarage.css'
import mechanicImage from "../resources/Assets/pexels-cottonbro-studio-4489794.jpg";
import { useEffect, useState } from 'react';
import axios from 'axios';

function SelectGarage() {
    const navigate = useNavigate()
    const { state } = useLocation()

    const [selectedGarages, setSelectedGarages] = useState();
    const [garages, setGarages] = useState([]);

    useEffect(() => {
        getGarages()
    }, [])

    const getGarages = () => {
        axios.get("http://localhost:8080/garages").then(function (response) {
            setGarages(response.data)
        });
    }
    const selectgarage = (garage) => {
        localStorage.setItem("garage", garage.id)
        console.log('garage.Name: ', garage.id);
        if (localStorage.getItem("email")) {
            navigate('/GarageResponce')
        }
        else {
            navigate('/registration')
        }
    }

    let city = state.city
    let filteredGarages = garages.filter((element) => city === element.Adress)
    return (
        <div className='align'>
            <h3 className='txt'>These garages provide the service you selected ...</h3>
            <img src={mechanicImage} alt='Error to load' height={500} width={"100%"} />

            {filteredGarages.map((element) => {

                return (

                    <div className="border mt-3 mx-3 cardColor cards" >
                        <dt>{element.Name}</dt>
                        <div><strong>Rating :</strong> {element.Rating}</div>
                        <div><strong>Location :</strong> {element.Adress}</div>
                        <button type='button' className='mt-2 mb-3 px-3' onClick={() => selectgarage(element)}>Buy Service</button>

                    </div>
                )

            })

            }

        </div >
    )
}

export default SelectGarage;