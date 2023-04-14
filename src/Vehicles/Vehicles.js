import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

function Vehicles (){

    return(
        <div>
            <Dropdown>
                <Dropdown.Toggle variant='alert' id='dropdown-basic'>
                    select your vehicle type : 
                </Dropdown.Toggle>
                <DropdownMenu>
                    <DropdownItem>{Two Wheeler , Four Wheeler}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>

    )
}