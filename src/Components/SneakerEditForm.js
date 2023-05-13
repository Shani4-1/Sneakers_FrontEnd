import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SneakerEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [sneaker, setSneaker] = useState({});

  const updateSneaker = (updatedSneaker) => {
    axios
      .put(`${API}/sneakers/${id}`, updatedSneaker)
      .then(
        () => {
          navigate(`/sneakers/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSneaker({ ...sneaker, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSneaker({ ...sneaker, is_favorite: !sneaker.is_favorite });
  };

  useEffect(() => {
    axios
      .get(`${API}/sneakers/${id}`)
      .then((response) => setSneaker(response.data))
      .catch(() => navigate(`/not-found`));
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSneaker(sneaker, id);
  };

return (
  <div className="Edit">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={sneaker.name}
        type="text"
        onChange={handleTextChange}
        placeholder="Name of Sneaker"
        required
      />
      <label htmlFor="image_url">Image URL:</label>
      <input
        id="image_url"
        value={sneaker.image_url}
        type="text"
        onChange={handleTextChange}
        placeholder="Image Link"
      />

      <label htmlFor="brand">Brand:</label>
      <input
        id="brand"
        type="text"
        name="brand"
        value={sneaker.brand}
        placeholder="jordans, adidas, ..."
        onChange={handleTextChange}
      />

      <label htmlFor="release_date">Release Date:</label>
      <input
        id="release_date"
        type="text"
        name="release_date"
        value={sneaker.release_date}
        placeholder="Release Date"
        onChange={handleTextChange}
      />

      <label htmlFor="price">Price:</label>
      <input
        id="price"
        type="number"
        name="price"
        value={sneaker.price}
        placeholder="0"
        onChange={handleTextChange}
      />
      <label htmlFor="purchase_url">Can We Buy Them?? Drop The Link!</label>
      <input
        id="purchase_url"
        type="text"
        name="purchase_url"
        value={sneaker.purchase_url}
        placeholder="http://......"
        onChange={handleTextChange}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        id="rating"
        type="number"
        name="rating"
        required
        value={sneaker.rating}
        placeholder="0"
        onChange={handleTextChange}
      />

      <label htmlFor="is_favorite">Favorite:</label>
      <input
        id="is_favorite"
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={sneaker.is_favorite}
      />

      <br />

      <input type="submit" />
    </form>
    <Link to={`/sneakers/${id}`}>
      <button>Cancel</button>
    </Link>
  </div>
);

}

export default SneakerEditForm;
