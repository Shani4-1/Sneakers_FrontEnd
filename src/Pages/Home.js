import axios from "axios";
import { useState, useEffect } from "react";
import Sneaker from "../Components/Sneaker.js";


const API = process.env.REACT_APP_API_URL
const Home = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    axios.get(`${API}/sneakers`)
      .then(response => {
        const sneakerArray = response.data;
        const randomSneakers = sneakerArray.sort(() => 0.5 - Math.random()).slice(0, 2);
        setSneakers(randomSneakers);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <div className="Home">
      <h1>Welcome to Marangely and Shaniqua's Sneaker App</h1>  
      <h2>Featured Sneakers</h2>
      <div className="Sneaker-Grid">
        {sneakers.map((sneaker) => (
          <div className="Sneaker-Card" key={sneaker.id}>
            <Sneaker sneaker={sneaker} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

