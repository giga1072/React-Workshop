import React, { createContext, useReducer } from "react";
import { initialState, postReducer } from "../PostReducer/PostReducer";



export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};


export default PostsProvider;
