import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to={`/`}>👟 Sneaker App 👟</Link>
      </h1>
      <button>
        <Link to={`/sneakers`}>All Sneakers</Link>
      </button>
      <button>
        <Link to={`/sneakers/new`}>Add New Sneaker</Link>
      </button>
    </nav>
  );
};

export default Navbar;
