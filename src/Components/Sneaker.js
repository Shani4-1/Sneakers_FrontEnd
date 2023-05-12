import { Link } from "react-router-dom";

const Sneaker = ({ sneaker }) => {
  return (
    <tr>
      <td>
        {sneaker.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={sneaker.url} target="_blank" rel="noreferrer">
          {sneaker.name}
        </a>
      </td>
      <td>
        <img className="Sneaker-Img" src={sneaker.image_url} alt={sneaker.name}></img>
        <Link to={`/sneakers/${sneaker.id}`}>👟</Link>
      </td>
      </tr>
  );
}
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

export default Sneaker;
