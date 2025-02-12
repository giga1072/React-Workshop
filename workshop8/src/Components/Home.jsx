import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { openModal } from "../PostActions/PostActionsCreators";
import FetchPosts from "../api/Fetch";
import Modal from "../Modal/Modal";
import { getRandomUsername } from "./RandomUserName";
import "../App.css";
import Login from "../LogIn/LogIn";
const Home = () => {
  const { state, dispatch } = useContext(PostsContext);
  if (!state.isLoggedIn) {
    return <Login />;
  }
  return (
    <>
      <h1 className="header">Posts</h1>
      <FetchPosts />

      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <div>
        {state.posts.map((post) => (
          <li key={post.id}>
            <p>
              <strong>{getRandomUsername()}</strong>
            </p>
            <img
              src={`https://picsum.photos/100/100?random=${post.id}`}
              alt="random"
            />
            {post.title}
            {""}
            <button onClick={() => dispatch(openModal(post.id))}>
              Remove Post
            </button>
          </li>
        ))}
      </div>
      <Modal />
    </>
  );
};
export default Home;
