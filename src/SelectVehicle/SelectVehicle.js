import Dropdown from 'react-bootstrap/Dropdown';
import './SelectVehicles.css'
import { useNavigate } from 'react-router-dom';
// import image from 'D:\React\routing-demo\src\resources\Assets\pexels-pixabay-162553.jpg';

function SelectVehicle() {
    const navigate = useNavigate()
    const selectvehicle = () => {
        navigate("/selectgarage")

    }

    const cities = ["Otur", "Alephata", "Rajuri", "Ale", "Belhe"]
    const bikeCompanies = ["Hero", "Honda", "Bajaj", "Yamaha", "Tvs", "Suzuki", "Royal Enfield"]
    const carCompanies = ["Toyota", "Ford", "Mahindra", "Tata", "Maruti Suzuki", "Honda", "Hyundai", "Kia", "BMW", "Mercedes", "Audi",]
    const services = [{ Name: "Washing", Rate: "250 RS" },
    { Name: "Regular servicing", Rate: "2500 RS" },
    { Name: "Oil change", Rate: "1000 RS" },
    { Name: "Puncture", Rate: "100 RS" },
    { Name: "Engine work", Rate: "min. 10000 RS" },
    { Name: "Filter change", Rate: "5000 RS" },
    { Name: "Electric Problem", Rate: "min. 500 RS" },
    { Name: "Starter Problem", Rate: "min. 1000 RS" },
    { Name: "Not turning on ?", Rate: "min. 1000 RS" },
    { Name: "Battery" , Rate:"min. 4000 RS"},
    { Name: "Denting" ,Rate: "min. 2500 RS"},
    { Name: "Penting", Rate: "25000 RS"}]
    return (
        <div >
            <div className='display'>
                <div>
                    <img src='./resources/Assets/pexels-pixabay-162553.jpg' alt='error'></img>
                </div>
                <div>
                    <Dropdown className='drop'>
                        <Dropdown.Toggle className='mt-5 drop' variant="warning" id="dropdown-basic">
                            choose your city :
                        </Dropdown.Toggle>

                        <Dropdown.Menu>{
                            cities.map((city) => {

                                return <Dropdown.Item href="#/action-1">{city}</Dropdown.Item>
                            })
                        }
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='drop'>
                        <Dropdown.Toggle className='mt-3 drop' variant='warning' id='dropdown-basic'>
                            choose your vehicle type :
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href='#action-1'>Two Wheeler</Dropdown.Item>
                            <Dropdown.Item href='#action-2'>Four Wheeler</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='drop'>
                        <Dropdown.Toggle className='mt-3 drop' variant='warning' id='dropdown-bsic'>
                            Company of your two wheeler :
                        </Dropdown.Toggle>
                        <Dropdown.Menu>{
                            bikeCompanies.map((company) => {
                                return <Dropdown.Item href='#/action-1'>{company}</Dropdown.Item>
                            })
                        }
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='drop'>
                        <Dropdown.Toggle className='mt-3 drop' variant='warning' id='dropdown-bsic'>
                            Company of your Four wheeler :
                        </Dropdown.Toggle>
                        <Dropdown.Menu>{
                            carCompanies.map((company) => {
                                return <Dropdown.Item href='#/action-1'>{company}</Dropdown.Item>
                            })
                        }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className='center mt-5 mx-5'>
                {services.map((element) => {
                    console.log('element:', element);
                    return (
                        <div className='border  mt-2 mx-3 border-2 border-warning'>
                            <dt>{element.Name}</dt>
                            <div>{element.Rate}</div>
                            <button className='my-2 p-2 button ' type='button' onClick={selectvehicle}>Select</button>
                        </div>
                    )
                })
                }
            </div>

        </div >

    )
}
export default SelectVehicle;