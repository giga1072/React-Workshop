import {
  GET_INITIAL_POSTS,
  REMOVE_POST,
  SET_LOADING,
  SET_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_LOGIN_STATUS
} from "../constants/PostContextConstants";
function setLoginStatus(status){
    return {
        type:SET_LOGIN_STATUS,
        payload:status
    }
}
function openModal(postId) {
  return {
    type: OPEN_MODAL,
    payload: postId,
  };
}
function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

function getInitialPosts(posts) {
  return {
    type: GET_INITIAL_POSTS,
    payload: posts,
  };
}
function removePost(id) {
  return {
    type: REMOVE_POST,
    payload: id,
  };
}
function setLoading(status) {
  return {
    type: SET_LOADING,
    payload: status,
  };
}
function setErrors(message) {
  return {
    type: SET_ERROR,
    payload: message,
  };
}
export {
  getInitialPosts,
  removePost,
  setLoading,
  setErrors,
  openModal,
  closeModal,
  setLoginStatus
};
