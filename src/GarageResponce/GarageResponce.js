import Spinner from 'react-bootstrap/Spinner';
import "./GarageResponse.css"
import { useEffect, useState } from 'react';
import axios from 'axios';

function GarageResponce() {

    const [spinner, setSpinner] = useState(true);
    const [garage, setGarage] = useState();
    const [assignMechanic, setMechanic] = useState();
    console.log('garage: ', garage);

    useEffect(() => {
        getGarageInfo()
        setSpinnerFalse()
    }, [])

    const getGarageInfo = () => {
        axios.get(`http://localhost:8080/garages/${localStorage.getItem("garage")}`).then(function (response) {
            console.log('response: ', response);

            setGarage(response.data)

            let mechanics = response.data.mechanics.filter((mechanic) => mechanic.Status === "Available"

            )
            let toAssignMechanic = mechanics[0]
            setMechanic(toAssignMechanic)
        });
    }

    const setSpinnerFalse = () => {
        setTimeout(() => {
            setSpinner(false)
        }, 20000)
    }
    return (
        <>
            {spinner && <div className="Registration">
                <strong>Thank You for your request, we will respond in just 2 min...</strong>
                <div className='spinner'><Spinner animation="border" /></div>
            </div>}
            {!spinner && < div className='bodycolor'>
                <div className='Rborder '>
                    <div>{`Your Selected Service is ${localStorage.getItem("serviceName")} and price for that service is ${localStorage.getItem("servicePrice")}`}</div>
                    <strong>Mechanic Details...</strong>
                    <div>Name : {assignMechanic.Name} </div>
                    <div>Contact no. : {assignMechanic.ContactNo} </div>
                    <div>Garage name : {garage.Name}  </div>
                </div>
            </div>}
        </>
    )

}
export default GarageResponce;