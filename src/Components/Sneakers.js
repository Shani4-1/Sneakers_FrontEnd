// DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";

// FILE IMPORTS
import Sneaker from "./Sneaker.js";

// API
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
        console.warn("catch", error);
      });
  }, []);

  return (
    <div className="Sneakers">
      <h1>All Sneakers</h1>
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sneaker Name</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {sneakers.map((sneaker) => {
              return <Sneaker key={sneaker.id} sneaker={sneaker} />;
            })}
          </tbody>
        </table>    
      </section>
    </div>
  );
};

export default Sneakers;
