import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SneakerNewForm() {
  let navigate = useNavigate();

  const addSneaker = (newSneaker) => {
    axios
      .post(`${API}/sneakers`, newSneaker)
      .then(
        () => {
          navigate(`/sneakers`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [sneaker, setSneaker] = useState({
    name: "",
    image_url: "",
    brand: "",
    release_date: "",
    price: 0,
    purchase_url: "",
    rating: 0,
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSneaker({ ...sneaker, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSneaker({ ...sneaker, is_favorite: !sneaker.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSneaker(addSneaker);
  };

  return (
    <div className="New">
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
        <label htmlFor="name">Image URL:</label>
        <input
          id="image_url"
          value={sneaker.image_url}
          type="text"
          onChange={handleTextChange}
          placeholder="Image"
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
        <label htmlFor="purchase_url">Where can we buy them?:</label>
        <input
          id="purchase_url"
          type="number"
          name="purchase_url"
          value={sneaker.price}
          placeholder="0"
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
    </div>
  );
}

export default SneakerNewForm;
