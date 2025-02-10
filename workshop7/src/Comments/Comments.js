import React, { useState } from "react";
import useCustomHook from "../Hooks/useCustomHook";
import { getRandomUsername } from "./RandomUsers";
import Modal from "../Modal/Modal";

function Comments() {
  
  const [posts, setPosts] = useCustomHook("https://jsonplaceholder.typicode.com/posts");
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);


  const handleDeletePost = () => {
    setPosts(posts.filter((post) => post.id !== selectedPost.id));
    setShowModal(false);
  };

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
           
            <p><strong>{getRandomUsername()}</strong></p>
            <img
              src={`https://picsum.photos/100/100?random=${post.id}`}
              alt="random"
            />
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button
              onClick={() => {
                setSelectedPost(post);
                setShowModal(true);
              }}
            >
              Delete Post
            </button>
          </li>
        ))}
      </ul>

     
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Are you sure you want to delete this post?</h1>
          <button onClick={() => setShowModal(false)}>Cancel</button>
          <button onClick={handleDeletePost}>Yes, Delete</button>
        </Modal>
      )}
    </div>
  );
}

export default Comments;
