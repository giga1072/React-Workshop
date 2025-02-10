import React, { useState } from "react";
import useCustomHook from "../Hooks/useCustomHook";
import { getRandomUsername, randomUsers } from "./RandomUsers";
import Modal from "../Modal/Modal";

function Comments() {
  const [posts, setPosts] = useCustomHook("https://jsonplaceholder.typicode.com/posts");
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const openModal = (post) => {
    setSelectedPost(post); 
    setIsModalOpen(true); 
  };


  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false); 
  };

 
  const removeComment = () => {
    const updatedPosts = posts.filter((post) => post.id !== selectedPost.id); 
    setPosts(updatedPosts)
    closeModal(); 
  };

 
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <img
              src={`https://picsum.photos/100/100?random=${post.id}`}
              alt="random"
            />
            <u>
              <p>
                <strong>{getRandomUsername(randomUsers)}</strong>
              </p>
            </u>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button onClick={() => openModal(post)}>Delete Post</button>
          </li>
        ))}
      </ul>

      
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={removeComment}
      />
    </div>
  );
}

export default Comments;
