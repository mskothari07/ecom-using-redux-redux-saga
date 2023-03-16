import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch  } from "../redux/productAction";




const Header = () => {
  const result = useSelector((state) => state.cartData);

  const dispatach = useDispatch()

  console.log("redux data in header", result);
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <h1 className="logo">Happy Place</h1>
      </Link>
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="Add to cart icon"
          />
        </div>
      </Link>
      <div className="search-box">
      <input type="text" placeholder="Search product" onChange={(event)=>dispatach(productSearch(event.target.value))
      }></input>

      </div>
    </div>
  );
};

export default Header;
