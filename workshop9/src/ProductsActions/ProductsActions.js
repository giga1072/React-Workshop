import {
    GET_INITIAL_POSTS,
    SET_LOGIN_STATUS,
    SET_ERROR,
    SET_LOADING,
    SET_PAGE,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../constants/ProductsContextConst';
function addToCart(product){
  return{
    type: ADD_TO_CART,
    payload:product
  }
}
  function removeFromCart(id){
    return{
      type:REMOVE_FROM_CART,
      payload:id
    }
  }

function setPage(page){
  return{
    type: SET_PAGE,
    payload:page
  }
}
function setLoginStatus(status) {
    return {
      type: SET_LOGIN_STATUS,
      payload: status,
    };
}


    function getInitialPosts(posts) {
        return {
          type: GET_INITIAL_POSTS,
          payload: posts,
        };
    };
    function setErrors(message) {
        return {
          type: SET_ERROR,
          payload: message,
        };
    }
    function setLoading(status) {
        return {
          type: SET_LOADING,
          payload: status,
        };
      }
    export{
        setLoginStatus,
        getInitialPosts,
        setLoading,
        setErrors,
        setPage,
        addToCart,
        removeFromCart
    }