//DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";

//FILE IMPORTS
import Sneaker from "./Sneaker.js";

//API
const API = process.env.REACT_APP_API_URL;

const Sneakers = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/sneakers`)
      .then((response) => {
        setSneakers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Sneakers">
      <section className="Heading">
        <h1>All Sneakers</h1>
      </section>
      <section className="Sneakers-List">
        <ul>
          {sneakers.map((sneaker) => {
            return <Sneaker key={sneaker.id} sneaker={sneaker} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Sneakers;
