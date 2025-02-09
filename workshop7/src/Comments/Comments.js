import React from "react";
import { useState } from "react";
import useCustomHook from "../Hooks/useCustomHook";
import { getRandomUsername, randomUsers } from "./RandomUsers";
import Modal from "../Modal/Modal"; 

function Comments() {
  const [posts, setPosts] = useCustomHook(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    console.log("Opening modal for post", post)
    console.log("isModalOpen state after set:", isModalOpen);
  };
  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };
  const removeComment = () => {
   const updatedComments=  setPosts(posts.filter((post) => post.id !== selectedPost.id));
   setPosts(updatedComments);
    closeModal();
  };

  return (
    <div>
      <ul>
        {posts.map((postsData) => (
          
             
            <li key={postsData.id} >
            <img
              src={`https://picsum.photos/100/100?random=${postsData.id}`}
              alt="random"
            />
            <u>
              <p>
                <strong>{getRandomUsername(randomUsers)}</strong>
              </p>
            </u>
            <p>{postsData.title}</p>
            <p>{postsData.body}</p>
            <button onClick={() => openModal(postsData)}>Delete Post</button>
          
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
