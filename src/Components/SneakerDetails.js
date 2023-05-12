import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Reviews from "./Reviews.js";

const API = process.env.REACT_APP_API_URL;

const SneakerDetails = () => {
  const [sneaker, setSneaker] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/sneakers/${id}`)
      .then((response) => {
        console.log(response.data);
        setSneaker(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.warn("catch:", error);
      });
  }, [id]);

  const handleDelete = () => {
    console.log("I clicked delete");
    deleteSneaker();
  };

  const deleteSneaker = () => {
    axios
      .delete(`${API}/sneakers/${id}`)
      .then(() => {
        navigate(`/sneakers`);
      })
      .catch((error) => {
        console.warn("catch:", error);
      });
  };

  return (
    <article>
      <h3>
        {sneaker.is_favorite ? <span>⭐️</span> : null} {sneaker.name}
      </h3>
      <img src={sneaker.image_url} alt={sneaker.name} />
      <h5>
        <span>
          <a href={sneaker.purchase_url}>Purchase Here</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {sneaker.purchase_url}
      </h5>
      <h6>{sneaker.brand}</h6>
      <h6>{sneaker.release_date}</h6>
      <div className="showNavigation">
        <div>
          <Link to={`/sneakers`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/sneakers/id/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <Reviews />
    </article>
  );
};

export default SneakerDetails;
