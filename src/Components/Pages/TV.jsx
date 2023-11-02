import { useNavigate } from 'react-router-dom';
import { tvDummy } from "../../tvDummy.js";
import styled from "styled-components";

const TVContainer = styled.div`
  display : flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const TVBox = styled.div`
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

const TVPoster = styled.img`
  width: 100%;
  height: 85%;
  position: relative;
  z-index: 1;
`

const TVTitle = styled.p`
  text-align: left;
  margin-top: 10px;
  color: white;
  font-size: 13px;
`

const TVGrade = styled.p`
  text-align: right;
  color: white;
  font-size: 12px;
`

export default function TV() {
  const navigate = useNavigate();

  const handleTVClick = (tv) => {
    navigate(`/tv/${encodeURIComponent(tv.name)}`, {
      state: tv,
    });
  };

  return (
    <div>
      <TVContainer>
        {tvDummy.results.map((tv, index) => (
            <TVBox key={index}>
              <TVPoster
                src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                alt={tv.name}
                onClick={() => handleTVClick(tv)}
              />
              <TVTitle>{tv.name}</TVTitle>
              <TVGrade>{tv.vote_average}</TVGrade>
            </TVBox>
        ))}
      </TVContainer>
    </div>
  )
}