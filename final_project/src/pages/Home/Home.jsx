import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";
import routes from "../../constants/routes";

const Home = () => {
  const { state } = useAuthContext();
  const navigate = useNavigate();
  const handleClick = () => {
    if (state.isAuthenticated) {
      navigate(routes.moviesList);
    } else {
      navigate(routes.signIn);
    }
  };

  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="carousel-image"
            src="https://pbs.twimg.com/media/GYQiNRGXoAAGkO0.jpg:large"
            alt="Batman : The Dark Knight Rises"
          />
          <Carousel.Caption>
            <h3>Batman Trilogy</h3>
            <p>
              Batman Begins (2005) The Dark Knight (2008) The Dark Knight Rises
              (2012) The trilogy explores themes of fear, justice, and
              redemption.
            </p>
            <Button onClick={handleClick} variant="primary">
              View More Movies
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="carousel-image"
            src="https://wallpapercave.com/wp/wp12086611.jpg"
            alt="Fight Club"
          />
          <Carousel.Caption>
            <h3>Fight Club</h3>
            <p>A psychological thriller directed by David Fincher.</p>
            <Button onClick={handleClick} variant="primary">
              View More Movies
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="carousel-image"
            src="https://www.dking-gallery.com/pix/Alamo/AlamoGoodBadUgly.jpg"
            alt="The Good, the Bad and the Ugly"
          />
          <Carousel.Caption>
            <h3>The Good, the Bad and the Ugly</h3>
            <p>A classic western by Sergio Leone.</p>
            <Button onClick={handleClick} variant="primary">
              View More Movies
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="carousel-image"
            src="https://assets.bigcartel.com/product_images/216189826/LOTR_Trilogy.png?auto=format&fit=max&w=2000"
            alt="Fight Club"
          />
          <Carousel.Caption>
            <h3>The Lord Of The Rings</h3>
            <p>
              *The Lord of the Rings* trilogy (2001–2003), directed by Peter
              Jackson, adapts J.R.R. Tolkien’s epic tale of Frodo Baggins' quest
              to destroy the One Ring and defeat Sauron. A cinematic
              masterpiece, it won 17 Oscars and remains one of the greatest film
              trilogies ever made.
            </p>
            <Button onClick={handleClick} variant="primary">
              View More Movies
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
