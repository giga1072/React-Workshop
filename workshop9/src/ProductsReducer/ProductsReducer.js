import {
  GET_INITIAL_POSTS,
  SET_LOGIN_STATUS,
  SET_ERROR,
  SET_LOADING,
  SET_PAGE,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "../constants/ProductsContextConst";

export const initialState = {
  posts: [],
  error: "",
  isLoggedIn: false,
  loading: false,
  page:1,
cart:[]
};
export const productsReducer = (state, action) => {
    const { type, payload } = action;
   switch(type){
    case SET_LOGIN_STATUS:
        return{...state,isLoggedIn:payload}
   case GET_INITIAL_POSTS:
    return{...state, posts: payload, }
    case SET_ERROR:
        return{...state,error:payload}
        case SET_LOADING:
            return{...state,loading:payload}
            case SET_PAGE:
              return{...state,page:payload}
              case ADD_TO_CART:
                return{...state,cart:[...state.cart,payload]}
                case REMOVE_FROM_CART:
                  return{...state,cart:state.cart.filter((item)=>item.id!==action.payload)}
    default:
        return state
   }
}