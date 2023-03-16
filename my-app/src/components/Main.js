import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useEffect } from "react";

function Main() {
  const dispatach = useDispatch();
  const data = useSelector((state) => state.ProductData);
  console.log("data in main component from saga", data);

  useEffect(() => {
    dispatach(productList());
  }, [dispatach]);

  return (
    <div>
      <br></br>
      <button onClick={() => dispatach(emptyCart([]))}>Empty Cart</button>

      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.photo} alt="products"></img>
            <div>Name : {item.name}</div>
            <div>Brand : {item.brand}</div>
            <div>Price : {item.price}</div>
            <div>Color : {item.color}</div>
            <div className="cart-button">
              <button onClick={() => dispatach(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatach(removeFromCart(item.id))}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
