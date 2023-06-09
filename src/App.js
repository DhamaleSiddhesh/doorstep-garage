import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SelectVehicle from './SelectVehicle/SelectVehicle';
import Home from './Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelectGarage from './SelectGarage/SelectGarage';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import GarageResponce from './GarageResponce/GarageResponce';
import Header from './Header/Header';
import Profile from './Profile/Profile';


function App() {
  return (

    <div>
      <BrowserRouter>
        <Header name="abc"/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='SelectVehicle' element={<SelectVehicle />} />
          <Route path='/SelectGarage' element={<SelectGarage />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/GarageResponce' element={<GarageResponce />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
