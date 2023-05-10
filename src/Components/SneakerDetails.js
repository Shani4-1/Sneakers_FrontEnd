import {useState, useEffect} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

// import Reviews from "../Components/Reviews.js"


const API = process.env.REACT_APP_API_URL;

const SneakerDetails = () => {
    const [sneaker, setSneaker] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/sneakers/${id}`)
        .then((response) => {
            console.log(response.data)
            setSneaker(response.data);
        })
        .catch((error) => {
            console.log(error)
            console.warn("catch", error);
        })
    }, [id]);
    return 'In SneakerDetails.js';
};
// const deleteSneaker = () => {
//     axios
//     .delete(`${API}/sneakers/${id}`)
//     .then(() => {
//         navigate(`/sneakers`)
//     })
// }
export default SneakerDetails;


