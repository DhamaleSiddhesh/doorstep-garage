import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SelectVehicle from './SelectVehicle/SelectVehicle';
import Home from './Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelectGarage from './SelectGarage/SelectGarage';
import Registration from './Registration/Registration';

function App() {
  return (
    <>
<div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='SelectVehicle' element={<SelectVehicle/>}/>
    <Route path='/SelectGarage' element={<SelectGarage/>}/>
    <Route path='/Registration' element={<Registration/>}/>
    </Routes>
    </BrowserRouter>
</div>
    </>

  );
}

export default App;
