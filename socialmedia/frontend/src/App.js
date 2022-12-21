
import './App.css';
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/home' element={<Home/>} />

      </Routes>


    </div>
  );
}

export default App;
