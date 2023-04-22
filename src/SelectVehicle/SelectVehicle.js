import './SelectVehicles.css'
import { useNavigate } from 'react-router-dom';
import selectvehicleImage from "../resources/Assets/pexels-cottonbro-studio-4488660.jpg"
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';



function SelectVehicle() {
    const [city, setCity] = useState();
    const [vehicleType, setVehicleType] = useState();
    const [brand, setBrand] = useState();
    const [cities, setCities] = useState([]);
    const [twoWheelerBrand, setTwoWheelerBrand] = useState([]);
    const [fourwheelerBrand, setFourWheelerBrand] = useState([]);
    const [fourWheelerService, setFourWheelerService] = useState([])

    useEffect(() => {
        getCities()
        getTwoWheelerBrand()
    })
    const getCities = () => {
        axios.get("http://localhost:8080/cities").then(function (response) {
            // console.log('response: ', response);
            setCities(response.data)
        });
    }
    const getTwoWheelerBrand = () => {
        axios.get("http://localhost:8080/twoWheelerBrand").then(function (response) {
            console.log('abcd', response);
            setTwoWheelerBrand(response.data)
        });
    }
    const getFourWheelerBrand = () => {
        axios.get("http://localhost:8080/fourWheelerBrand").then(function (response) {
            console.log('response: ', response);
            setFourWheelerBrand(response.data)

        });

    }

        const navigate = useNavigate()
        const selectvehicle = () => {

            navigate("/selectgarage", { state: { city: city } })

        }

        // const twoWheelerBrand = ["Honda", "Hero", "Tvs", "Bajaj", "Yamaha", "Royal Enfield"]
        const FourWheelerBrand = ["Toyota", "Ford", "Mahindra", "Tata", "Maruti Suzuki", "Nisan", "Hyundai", "Kia", "BMW", "Mercedes", "Audi",]
        const fourWheelerServices = [{ Name: "Washing", Rate: "250 RS" },
        { Name: "Regular servicing", Rate: "2500 RS" },
        { Name: "Oil change", Rate: "1000 RS" },
        { Name: "Puncture", Rate: "100 RS" },
        { Name: "Engine work", Rate: "min. 10000 RS" },
        { Name: "Filter change", Rate: "5000 RS" },
        { Name: "Electric Problem", Rate: "min. 500 RS" },
        { Name: "Starter Problem", Rate: "min. 1000 RS" },
        { Name: "Not turning on ?", Rate: "min. 1000 RS" },
        { Name: "Battery", Rate: "min. 4000 RS" },
        { Name: "Denting", Rate: "min. 2500 RS" },
        { Name: "Penting", Rate: "25000 RS" }]

        const twoWheelerServices = [{ Name: "Washing1", Rate: "100 RS" },
        { Name: "Regular servicing", Rate: "1000 RS" },
        { Name: "Oil change", Rate: "500 RS" },
        { Name: "Puncture", Rate: "100 RS" },
        { Name: "Engine work", Rate: "min. 10000 RS" },
        { Name: "Filter change", Rate: "500 RS" },
        { Name: "Electric Problem", Rate: "min. 500 RS" },
        { Name: "Starter Problem", Rate: "min. 1000 RS" },
        { Name: "Not turning on ?", Rate: "min. 1000 RS" },
        { Name: "Battery", Rate: "min. 2000 RS" },
        { Name: "denting", Rate: "min. 2500 RS" },
        { Name: "Penting", Rate: "25000 RS" }]
        const type = ["Two Wheeler", "Four Wheeler"]


        const handleCityChange = (event) => {
            setCity(event.target.value)
        }

        const handleTypeChange = (event) => {
            setVehicleType(event.target.value)
        }

        const handleBrandChange = (event) => {
            setBrand(event.target.value)
        }
        console.log("50", city);
        console.log("50", vehicleType);
        console.log("50", brand);

        let vehicleBrand = [];
        if (vehicleType === "Two Wheeler") {
            vehicleBrand = twoWheelerBrand;
        }
        else if (vehicleType === "Four Wheeler") {

            vehicleBrand = FourWheelerBrand;
        }
        let services = [];
        if (vehicleType === "Four Wheeler") {
            services = fourWheelerServices;
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

                        <Form.Select className='mt-3 dropdown' onChange={handleTypeChange} value={vehicleType}>
                            <option>Type of Your Vehicle</option>
                            {
                                type.map((T) => {
                                    return <option>{T}</option>
                                })
                            }

                        </Form.Select>

                        <Form.Select className='mt-3 dropdown' onChange={handleBrandChange} value={brand} >
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
                                console.log('element:', element);
                                return (
                                    <div className='border  my-2 mx-3  cards'>
                                        <dt>{element.Name}</dt>
                                        <div>{element.Rate}</div>
                                        <button className='my-2 select' type='button' onClick={selectvehicle}>Select</button>
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