import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContextProvider";
import {
  trailerFetchStart,
  trailerFetchSuccess,
  trailerFetchError,
} from "../context/actionCreators";

const FetchedTrailerData = () => {
  const { state,dispatch } = useAuthContext();
const movieTitle = state.modalData?.originalTitle;;
  useEffect(() => {
    if (!movieTitle) return;
    dispatch(trailerFetchStart());

    const query = `${movieTitle} trailer`;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
      query
    )}&key=AIzaSyCJV7KuG3GXRlmL9iUD-tSySN1VWyQ0M1k`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched trailer data:", data);
       
        const videoItem = data.items.find(
          (item) =>
            item.id &&
            item.id.kind === "youtube#video" &&
            item.id.videoId
        );
        if (videoItem) {
          
          dispatch(trailerFetchSuccess(videoItem.id.videoId));
        } else {
          dispatch(trailerFetchError("No video found"));
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        dispatch(trailerFetchError(err.message));
      });
  }, [dispatch,movieTitle]);

  
  return null;
};

export default FetchedTrailerData;
