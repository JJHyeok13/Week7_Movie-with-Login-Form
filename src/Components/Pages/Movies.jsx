import { useNavigate } from 'react-router-dom';
import { movieDummy } from "../../movieDummy.js";
import styled from "styled-components";

const MovieContainer = styled.div`
  display : flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const MovieBox = styled.div`
  width: 250px;
  height: 400px;
  margin: 10px;
  text-align: center;
  background-color: rgb(51, 58, 163);
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  transition: filter 0.3s ease;
`

const MoviePoster = styled.img`
  width: 100%;
  height: 85%;
  position: relative;
  z-index: 1;
`

const MovieTitle = styled.p`
  text-align: left;
  margin-top: 10px;
  color: white;
  font-size: 13px;
`

const MovieGrade = styled.p`
  text-align: right;
  color: white;
  font-size: 12px;
`

export default function Movies() {
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    navigate(`/movie/${encodeURIComponent(movie.title)}`, {
      state: movie,
    });
  };

  return (
    <div>
      <MovieContainer>
        {movieDummy.results.map((movie, index) => (
            <MovieBox key={index}>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onClick={() => handleMovieClick(movie)}
              />
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieGrade>{movie.vote_average}</MovieGrade>
            </MovieBox>
        ))}
      </MovieContainer>
    </div>
  )
}