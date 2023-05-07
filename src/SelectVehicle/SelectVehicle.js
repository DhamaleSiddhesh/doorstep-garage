import './SelectVehicles.css'
import { useNavigate } from 'react-router-dom';
import selectvehicleImage from "../resources/Assets/pexels-cottonbro-studio-4488660.jpg"
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';



function SelectVehicle() {
    const [city, setCity] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [brand, setBrand] = useState("");
    const [cities, setCities] = useState([]);
    const [vehicleTypes, setVehicleTypes] = useState([]);
    const [twoWheelerBrand, setTwoWheelerBrand] = useState([]);
    const [fourwheelerBrand, setFourWheelerBrand] = useState([]);
    const [fourWheelerService, setFourWheelerService] = useState([]);
    const [twoWheelerServices, setTwoWheelerService] = useState([]);

    useEffect(() => {
        getCities()
        getTwoWheelerBrand()
        getFourWheelerBrand()
        getTwoWheelerServices()
        getFourWheelerServices()
        getVehicleTypes()
    }, [])
    const getCities = () => {
        axios.get("http://localhost:8080/cities").then(function (response) {
            setCities(response.data)
        });
    }
    const getVehicleTypes = () => {
        axios.get("http://localhost:8080/type").then(function (response) {
            setVehicleTypes(response.data)
        })
    }
    const getTwoWheelerBrand = () => {
        axios.get("http://localhost:8080/twoWheelerBrand").then(function (response) {
            setTwoWheelerBrand(response.data)
        });
    }
    const getFourWheelerBrand = () => {
        axios.get("http://localhost:8080/fourWheelerBrand").then(function (response) {
            setFourWheelerBrand(response.data)

        });

    }
    const getFourWheelerServices = () => {
        axios.get("http://localhost:8080/fourWheelerServices").then(function (response) {
            setFourWheelerService(response.data)

        });
    }
    const getTwoWheelerServices = () => {
        axios.get("http://localhost:8080/twoWheelerServices").then(function (response) {
            setTwoWheelerService(response.data)

        });
    }

    const navigate = useNavigate()
    const selectvehicle = (service) => {
        localStorage.setItem("serviceName", service.name)
        localStorage.setItem("servicePrice", service.rate)

        navigate("/selectgarage", { state: { city: city } })

    }

    const handleCityChange = (event) => {
        setCity(event.target.value)
    }

    const handleTypeChange = (event) => {
        setVehicleType(event.target.value)
    }

    const handleBrandChange = (event) => {
        setBrand(event.target.value)
    }

    let vehicleBrand = [];
    if (vehicleType === "Two Wheeler") {
        vehicleBrand = twoWheelerBrand;
    }
    else if (vehicleType === "Four Wheeler") {

        vehicleBrand = fourwheelerBrand;
    }
    let services = [];
    if (vehicleType === "Four Wheeler") {
        services = fourWheelerService;
    }
    else if (vehicleType === "Two Wheeler") {
        services = twoWheelerServices
    }
    return (
        <div >
            <div className='display'>
                <div className='w-100 blur'>
                    <img src={selectvehicleImage} alt='error' height={500} width={"100%"} />
                </div>
                <div className='dbox'>

                    <Form.Select className='mt-3 dropdown' onChange={handleCityChange} value={city}>
                        <option>Your City</option>
                        {
                            cities.map((city) => {
                                return <option>{city} </option>
                            })
                        }
                    </Form.Select>

                    <Form.Select className='mt-3 dropdown' onChange={handleTypeChange} value={vehicleType} disabled={city === ""}>
                        <option>Type of Your Vehicle</option>
                        {
                            vehicleTypes && vehicleTypes.map((Type) => {
                                return <option>{Type}</option>
                            })
                        }

                    </Form.Select>

                    <Form.Select className='mt-3 dropdown' onChange={handleBrandChange} value={brand} disabled={vehicleType === ""} >
                        <option> {vehicleBrand.length !== 0 ? "Your Vehicle Brand" : "Please select vehicle type"}</option>
                        {
                            vehicleBrand.map((B) => {
                                return <option>{B}</option>
                            })

                        }</Form.Select>

                </div>
            </div >

            <div className='center mx-5 mt-3'>

                {
                    services.length !== 0 ?
                        services.map((element) => {
                            return (
                                <div className='border  my-2 mx-3  cards'>
                                    <dt>{element.name}</dt>
                                    <div>{element.rate}</div>
                                    <button className='my-2 select' type='button' onClick={() => selectvehicle(element)}>Select</button>
                                </div>
                            )
                        }) :
                        <div className='text-center'>"Please select vehicle type"</div>
                }
            </div>

        </div >

    )
}
export default SelectVehicle;