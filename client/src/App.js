import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Navigate} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import BookingCar from './pages/BookingCar';
import AddCar from './pages/AddCar';

import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>}/>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/booking/:carid" element={<PrivateRoute><BookingCar /></PrivateRoute>}/>
           <Route exact path='/userbookings' element={<PrivateRoute><UserBookings/></PrivateRoute>}/>
           <Route exact path='/addcar' element={<PrivateRoute><AddCar/></PrivateRoute>}/>
           <Route exact path='/admin' element={<PrivateRoute><AdminHome/></PrivateRoute>}/>
           <Route exact path='/editcar/:carid' element={<PrivateRoute><EditCar/></PrivateRoute>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

 export function PrivateRoute({ children }) {
  
  return localStorage.getItem('user') ? children : <Navigate to="/login" />;
}