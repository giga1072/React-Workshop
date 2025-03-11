import { toggleLocalStorage } from "../utilities/jwt.js";
import {
  GET_INITIAL_DATA,
  AUTHENTICATE,
  LOG_IN,
  LOG_OUT,
  SET_LOADING,
  OPEN_MODAL,
  CLOSE_MODAL,
  FETCH_TRAILER_START,
  FETCH_TRAILER_SUCCESS,
} from "./actions.jsx";
import { jwtDecode } from "jwt-decode";
const initialState = {
  posts: [],
  isAuthenticated: false,
  user: null,
  loading: false,
  isModalOpen: false,
  selectedPostId: null,
  modalData: null,
  trailerData: null,
  trailerLoading: false,
  trailerError: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOG_IN:
      const { token } = payload;
      const user = jwtDecode(token);
      toggleLocalStorage(token);
      return { isAuthenticated: true, user };
    case AUTHENTICATE:
      return { isAuthenticated: true, user: jwtDecode(payload) };
    case LOG_OUT:
      toggleLocalStorage(null);
      return { isAuthenticated: false, user: null };
    case GET_INITIAL_DATA:
      return { ...state, posts: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    case OPEN_MODAL:
      return { ...state, isModalOpen: true, selectedPostId: payload, modalData: payload };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false, selectedPostId: null, modalData: null };
      case FETCH_TRAILER_START:
        return{...state,trailerLoading:true, trailerData:null, trailerError:null};
        case FETCH_TRAILER_SUCCESS:
          return{...state,trailerLoading:false,trailerData:payload,trailerError:null}
    default:
      return state;
  }
};

export { initialState, reducer };
