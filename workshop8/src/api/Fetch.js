// export const fetchPosts = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (response.ok) {
//     return await response.json();
//   }
//   throw new Error("Fetching Failed");
// };

import { useEffect, useContext } from "react";

import { getInitialPosts, setErrors, setLoading } from "../PostActions/PostActionsCreators";
import { PostsContext } from "../context/PostsContext";


function FetchPosts() {
  const { dispatch } = useContext(PostsContext);

  useEffect(() => {
    dispatch(setLoading());

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => dispatch(getInitialPosts(data)))
      .catch((err) => dispatch(setErrors(err.message)));
  }, [dispatch]);

  
}

export default FetchPosts;