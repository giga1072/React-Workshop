import { closeModal } from "../../context/actionCreators";
import { useAuthContext } from "../../context/AuthContextProvider";
import YoutubeVideo from "../Trailers/YoutubeVideo";
import "./Modal.css";
const Modal = () => {
  const { dispatch, state } = useAuthContext();
  const { modalData } = state;
  if (!state.isModalOpen) return null;
  return (
    <div
      className="modal-overlay"
      onClick={() => {
        dispatch(closeModal());
      }}
    >
      <div className="modal-container">
        <button className="modal-close-btn">X</button>
        <div className="modal-image-container">
          <img
            className="modal-image"
            src={modalData.primaryImage}
            alt="Movie poster"
            width={100}
          />
        </div>
        <div className="modal-content-container">
          <strong>
            <div className="modal-title">{modalData.originalTitle}</div>
          </strong>
          <strong>
            <div className="modal-date">{modalData.releaseDate}</div>
          </strong>
          <strong>
            {" "}
            <div className="modal-rating">⭐{modalData.averageRating}</div>
          </strong>

          <div className="video-description-body">
            <div className="youtube-video-container">
              <YoutubeVideo className="youtube-video" />
            </div>
            <strong>
              <div className="modal-description">
                Description:{modalData.description}
              </div>
            </strong>
          </div>
          <div className="modal-budget">
            <b>Budget:</b>
            {modalData.budget}💲
          </div>
          <div className="film-icon-container">
            {modalData.externalLinks?.[1] && (
              <a
                href={modalData.externalLinks?.[1]}
                target="blank"
                rel="noopener noreferrer"
                className="links"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                  />
                  <path
                    fillRule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </a>
            )}
            <a
              href={modalData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="film-icon-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-film"
                viewBox="0 0 16 16"
              >
                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
