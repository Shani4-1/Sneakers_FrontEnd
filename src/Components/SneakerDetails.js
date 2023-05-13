import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Reviews from "./Reviews.js";

const API = process.env.REACT_APP_API_URL;

const SneakerDetails = () => {
  const [sneaker, setSneaker] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/sneakers/${id}`)
      .then((response) => {
        console.log(response.data);
        setSneaker(response.data[0]);
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
    <article className="sneaker-details">
      <img
        src={sneaker.image_url}
        alt={sneaker.name}
        className="sneaker-details__image"
      />
      <div className="sneaker-details__details">
        <h2 className="sneaker-details__name">
          {sneaker.is_favorite && <span>⭐️</span>} {sneaker.name}
        </h2>
        <h5 className="sneaker-details__purchase">
          <span>
            <a href={sneaker.purchase_url}>Purchase Here!</a>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h5>
        <h6 className="sneaker-details__brand">{sneaker.brand}</h6>
        <h6 className="sneaker-details__release">
           Released: {sneaker.release_date} 👟 Original Price: $
          {sneaker.price}.00 
        </h6>
      </div>
      <div className="sneaker-details__navigation">
        <div className="button-container">
          <div>
            <Link to="/sneakers">
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/sneakers/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
      <br></br>
      <Reviews />
    </article>
  );
};

export default SneakerDetails;
