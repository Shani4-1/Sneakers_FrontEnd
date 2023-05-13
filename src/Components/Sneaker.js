import { Link } from "react-router-dom";

const Sneaker = ({ sneaker }) => {
  return (
    <div className="Sneaker-Card">
      <img
        className="Sneaker-Img"
        src={sneaker.image_url}
        alt={sneaker.name}
      />
      <div className="Sneaker-Details">
        <h3>{sneaker.name}</h3>
        <p>Brand: {sneaker.brand}</p>
        <p>Original Release Date: {sneaker.release_date}</p>
        <p>Original Price: ${sneaker.price}.00</p>
        <p>
          Is Favorite?{" "}
          {sneaker.is_favorite ? (
            <span>⭐️</span>
          ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
          )}
        </p>
        <Link to={`/sneakers/${sneaker.id}`}>👟Details👟</Link>
      </div>
    </div>
  );
};

export default Sneaker;

//     { </tr>
//     <div className="Sneaker-Container">
//       <li>
//         <img className="Sneaker-Img" src={sneaker.image_url} alt={sneaker.name}></img>
//         <div className="Sneaker-Details">
//           <Link to={`/sneakers/${sneaker.id}`}>
//           <h3>{sneaker.name}</h3>
//           </Link>
// {/*
//           <p>Brand: {sneaker.brand}</p>
//           <p>Original Release Date: {sneaker.release_date}</p>
//           <p>Original Price: {sneaker.price}</p> }
//           <p>
//             Is Favorite?{" "}
//             {sneaker.is_favorite ? (
//               <span>⭐️</span>
//             ) : (
//               <span>&nbsp; &nbsp; &nbsp;</span>
//             )}
//           </p>
//         </div>
//       </li>
//     </div> */}
//   );
// };

