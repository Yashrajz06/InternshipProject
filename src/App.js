import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import React, { useState,useEffect } from "react";
import Labtest from "./Pages/Labtest";
import './App.css';
import './main1.css'
import { CartProvider } from "./Logic/Context";
import ProjectCart from "./Pages/ProjectCart";
import NewMain from "./Pages/NewMain";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Labinfo from "./Components/Labinfo";
import axios from "axios";
  
function App() {

  const [setData,getData]=useState("");
const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchTestDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/labtest`);
      getData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  fetchTestDetails();
}, []);

  return (
    <CartProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/cart" element={<ProjectCart/>}/>
        <Route path="/labtest" element={<NewMain/>}/>
        <Route path="/labtest/:srno" element={<Labtest/>}/>
      </Routes>                       
      <Footer/>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
