import "./style.css";
import "reactjs-popup/dist/index.css";

const Card = (movie) => {
  let img_path = "https://image.tmdb.org/t/p/w500";
  let value = [];

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTViZWJkMWY4MzRmMDhlYzM3ZmU5OWNhNjJlMGRjZiIsInN1YiI6IjY1MDVlMTU3MTA5ZGVjMDBjYTA2YmYxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Ui66eVlwZomTDz4D2yArVG6jccvKhNmoU8QfVZBemg",
    },
  };

  function playVideo() {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.info.id}/videos?&api_key=be5bebd1f834f08ec37fe99ca62e0dcf`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        value = response.results[0];
        if (value) {
          window.open(`https://youtu.be/${value.key}?si=SFa7hCXD5QPBVdhp`);
        } else {
          alert("Video Not avialable");
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div className="movie" onClick={playVideo}>
        <img src={img_path + movie.info.poster_path} className="poster"></img>
        <div className="movie-details">
          <div className="box">
            <h4 className="title" style={{ color: "black" }}>
              {movie.info.title}
            </h4>
            <p className="rating">{movie.info.vote_average}</p>
          </div>
          <div className="overview" style={{ color: "black" }}>
            <h1>overview</h1>
            {movie.info.overview}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
