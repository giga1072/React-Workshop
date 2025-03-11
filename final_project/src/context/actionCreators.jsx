import {
  SET_LOADING,
  GET_INITIAL_DATA,
  AUTHENTICATE,
  LOG_IN,
  LOG_OUT,
  OPEN_MODAL,
  CLOSE_MODAL,
  FETCH_TRAILER_START,
  FETCH_TRAILER_SUCCESS,
  FETCH_TRAILER_ERROR
} from "./actions";

const logInAction = (data) => {
  return {
    type: LOG_IN,
    payload: data,
  };
};
const logOutAction = () => {
  return {
    type: LOG_OUT,
  };
};
const authenticateAction = (token) => {
  return {
    type: AUTHENTICATE,
    payload: token,
  };
};
const getInitialData = (posts) => {
  return {
    type: GET_INITIAL_DATA,
    payload: posts,
  };
};
const setLoadingStatus = (status) => {
  return {
    type: SET_LOADING,
    payload: status,
  };
};

const openModal = (postId) => {
  return {
    type: OPEN_MODAL,
    payload: postId,
  };
};
const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

const  trailerFetchStart=() =>{
  return{
    type:FETCH_TRAILER_START
  }
};
const trailerFetchSuccess = (data) => {
  return{
    type:FETCH_TRAILER_SUCCESS,
    payload:data
  }
};
const trailerFetchError = (error) =>{
  return{
    type:FETCH_TRAILER_ERROR,
    payload:error
  }
};


export {
  openModal,
  closeModal,
  setLoadingStatus,
  getInitialData,
  logInAction,
  authenticateAction,
  logOutAction,
  trailerFetchStart,
  trailerFetchSuccess,
  trailerFetchError
};
