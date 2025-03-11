import React from "react";
import { useAuthContext } from "../../context/AuthContextProvider";
import FetchedTrailerData from "../../api/fetchTrailersData";

const YoutubeVideo = () => {
  const { state } = useAuthContext();
  const { trailerData, trailerLoading, trailerError } = state;

  return (
    <div>
      <FetchedTrailerData />
      {trailerLoading && <div>Loading...</div>}
      {trailerError && (
        <div>
          Error:{" "}
          {typeof trailerError === "object"
            ? JSON.stringify(trailerError)
            : trailerError}
        </div>
      )}
      {trailerData ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerData}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        />
      ) : (
        !trailerLoading && <div>No trailer available.</div>
      )}
    </div>
  );
};

export default YoutubeVideo;
