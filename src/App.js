import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import About from './About';
import { Outlet, Link } from "react-router-dom";



function App() {
  return (
    <>
   
   <Outlet/>
   
    </>
  );
}

export default App;
