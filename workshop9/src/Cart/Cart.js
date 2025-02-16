import { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";
import "./Cart.css"
import { removeFromCart } from "../ProductsActions/ProductsActions";
const Cart = () => {
  const { state, dispatch } = useContext(ProductContext);

  return (
    <div className="cart-container">
    <h3>🛒 Cart</h3>
    <ul className="cart-items">
      {state.cart.length > 0 ? (
        state.cart.map((item) => (
          <li key={item.id}>
            {item.title}
            <button
              className="cart-clear-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              ❌ Remove
            </button>
          </li>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </ul>
      
    </div>
  );
};

export default Cart;
