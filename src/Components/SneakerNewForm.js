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
        url: "",
        brand: "",
        release_date: "",
        price: 0,  
        is_favorite: false,
    });

    const handleTextChange = (event) => {
        setSneaker({...sneaker, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setSneaker({ ...sneaker, is_favorite: !sneaker.is_favorite});
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
    
            <label htmlFor="url">URL:</label>
            <input
              id="url"
              type="text"
              pattern="http[s]*://.+"
              required
              value={sneaker.url}
              placeholder="http://"
              onChange={handleTextChange}
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
    )
}

export default SneakerNewForm;