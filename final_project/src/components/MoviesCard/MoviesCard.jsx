import { useEffect, useState } from "react";
import FetchData from "../../api/fetchData";
import { openModal } from "../../context/actionCreators";
import { Spinner, Button } from "react-bootstrap";
import { useAuthContext } from "../../context/AuthContextProvider";
import Modal from "../Modal/Modal";
import "./MoviesCard.css";

const MoviesCard = () => {
  const { state, dispatch } = useAuthContext();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (state.posts && state.posts.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [state.posts]);

  const filteredPosts = (state.posts || []).filter((post) => {
    const searchTerm = search.trim().toLowerCase();
    const matchesGenre = post.genres.some((genre) =>
      genre.toLowerCase().includes(searchTerm)
    );
    const matchesName = post.originalTitle.toLowerCase().includes(searchTerm);

    return matchesGenre || matchesName;
  });

  const handleOpenModal = (post) => {
    dispatch(openModal(post));
  };

  return (
    <div className="movies-card-container">
      <FetchData />
      <div className="movies-wrapper">
        {!isLoading ? (
          <>
            <div className="search-bar">
              <input
                className="filter-input"
                type="text"
                placeholder="Search by genre or name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="movies-list">
              {filteredPosts?.length > 0 ? (
                filteredPosts.map((post) => (
                  <div className="posts-item" key={post.id}>
                    <div
                      className="post-header"
                      onClick={() => handleOpenModal(post)}
                    >
                      <img
                        src={post.primaryImage}
                        alt="Movie poster"
                        className="movie-image"
                      />
                      <h3 className="movie-title">{post.originalTitle}</h3>
                    </div>
                    <div className="post-details">
                      <p>
                        <b>Release Date:</b> {post.releaseDate}
                      </p>
                      <p>
                        <b>Runtime:</b> {post.runtimeMinutes} minutes
                      </p>
                      <p>
                        <b>Genres:</b> {post.genres.join(", ")}
                      </p>
                      <p>
                        <b>Category:</b> {post.interests}
                      </p>
                      <p>
                        <b>Rating:</b> {post.averageRating}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-movies-found">
                  No movies found for the selected criteria.
                </p>
              )}
            </div>
            <Modal />
          </>
        ) : (
          <div className="spinner-container">
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                className="spinner"
              />
              Loading...
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesCard;
