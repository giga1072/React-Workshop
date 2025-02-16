import { useEffect, useContext } from "react";

import {
  getInitialPosts,
  setErrors,
  setLoading
} from '../ProductsActions/ProductsActions'
import { ProductContext } from "../context/ProductsContext";

function FetchPosts() {
  const {state, dispatch } = useContext(ProductContext);
const {page} = state;
  useEffect(() => {
    dispatch(setLoading(true));

    fetch(`https://dummyjson.com/products?limit=10&skip=${(page-1)*10}`)
      .then((res) => res.json())
      .then((data) => {dispatch(getInitialPosts(data.products))
      dispatch(setLoading(false))
    })

      .catch((err) => dispatch(setErrors(err.message)));
  }, [dispatch,page]);
  return null
}

export default FetchPosts;
