import React from "react";
import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { closeModal, removePost } from "../PostActions/PostActionsCreators";
import "./Modal.css"
const Modal = () => {
  const { state, dispatch } = useContext(PostsContext);
  if (!state.isModalOpen) return null;
  return (
    <div className='modal-overlay'>
      <div className="modal-container">
        <p>Are you sure you want to Delete post?</p>

        <button
          onClick={() => {
            dispatch(removePost(state.selectedPostId));
            dispatch(closeModal());
          }}
        >
          Delete Post
        </button>
        <button onClick={() => dispatch(closeModal())}>Cancel</button>
      </div>
    </div>
  );
};
export default Modal;
