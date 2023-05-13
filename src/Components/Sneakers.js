import axios from "axios";
import { useState, useEffect } from "react";
import Sneaker from "./Sneaker.js";

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
      <h1>All Sneakers</h1>
      <section className="Sneaker-Grid">
        {sneakers.map((sneaker) => {
          return <Sneaker key={sneaker.id} sneaker={sneaker} />;
        })}
      </section>
    </div>
  );
};

export default Sneakers;
