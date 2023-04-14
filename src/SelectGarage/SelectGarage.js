import { useNavigate } from 'react-router-dom';
import './SelectGarage.css'

function SelectGarage() {
    const navigate = useNavigate()
    const selectgarage = () => {
        navigate('/registration')
    }
    const garage = [
        { Name: "Viki cars and bike services", Rating: "****", charges: "***", Adress: "Otur"},
        { Name: "Viki cars and bike services", Rating: "****", charges: "***", Adress: "Otur"},
        { Name: "Viki cars and bike services", Rating: "****", charges: "***", Adress: "Otur"},
        { Name: "Viki cars and bike services", Rating: "****", charges: "***", Adress: "Otur"},
        { Name: "Viki cars and bike services", Rating: "****", charges: "***", Adress: "Otur"}]
    return (
        <div className='align'>
            <h3 className='txt'>These garages provide the service you selected </h3>
            <hr />

            {garage.map((element) => {
                console.log('element: ', element);
                return (
                    <div className="border mt-5 mx-3 border-3 border-primary" >
                        <dt>{element.Name}</dt>
                        <div>Rating : {element.Rating}</div>
                        <div>Location : {element.Adress}</div>
                        <dt>Charges:-{element.charges}</dt>
                        <button type='button' className='mt-2 mb-3' onClick={selectgarage}>Buy Service</button>

                    </div>
                )

            })

            }

        </div>
    )
}

export default SelectGarage;