import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link>👟Sneaker App👟</Link>
      </h1>
      <button>
        <Link>All Sneakers</Link>
      </button>
      <button>
        <Link>Add New Sneaker</Link>
      </button>
    </nav>
  );
};

export default Navbar;
