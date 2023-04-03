import Dropdown from 'react-bootstrap/Dropdown';

function SelectVehicle() {
    const cities = ["Otur", "Alephata", "Rajuri", "Ale"]
    return (
        <div>
            {/* <div>Enter your city</div> */}
            <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    Enter your city
                </Dropdown.Toggle>

                <Dropdown.Menu>{
                    cities.map((city) => {

                        return <Dropdown.Item href="#/action-1">{city}</Dropdown.Item>
                    })
                }
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}
export default SelectVehicle;