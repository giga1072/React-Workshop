import { useState, useEffect } from "react";
import { fetchData } from "../api/fetchData";

const useCustomHook = (url) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData(url)
      .then((data) => setPosts(data))
      .catch((error) => console.log(error.message))
      .finally(() => console.log("I am done"));
  }, [url]);

  return [posts, setPosts];
};

export default useCustomHook;
