import {
  GET_INITIAL_POSTS,
  REMOVE_POST,
  SET_LOADING,
  SET_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_LOGIN_STATUS
} from "../constants/PostContextConstants";


export const initialState = {
  posts: [],
  loading: false,
  error: "",
  isModalOpen: false,
  selectedPostId: null,
  isLoggedIn:false
};

export const postReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOGIN_STATUS:
      return{ ...state,isLoggedIn:payload }
    case GET_INITIAL_POSTS:
      return { ...state, posts: payload, loading: false };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== payload),
      };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    case OPEN_MODAL:
      return { ...state, isModalOpen: true, selectedPostId: payload };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};
