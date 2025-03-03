import React from "react";
import { useContext } from "react";
// import Login from "../LoginPage/Login";
import { ProductContext } from "../context/ProductsContext";
import FetchPosts from "../api/fetchData";
import { addToCart, setPage } from "../ProductsActions/ProductsActions";
import "./Home.css";
import Cart from "../Cart/Cart";
const Home = () => {
  const { state, dispatch } = useContext(ProductContext);

  // if (!state.isLoggedIn) {
  //   return <Login />;
  // }
  return (
    <div>
      <FetchPosts />

      <h2>Products:</h2>
      <>
        {state.posts?.map((post) => (
          <div className="product-item" key={post.id}>
            <b>{post.title}:</b>
            {post.description}
            <p>
              <b>Category:</b> {post.category}
            </p>
            <p>
              <b>Price:</b> {post.price}
            </p>
            <p>
              <b>Rating:</b>
              {post.rating}
            </p>
            <button onClick={() => dispatch(addToCart(post))}>
              Add To Cart
            </button>
          </div>
        ))}
      </>
      <Cart />

      <div className="page-div">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button key={num} onClick={() => dispatch(setPage(num))}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
