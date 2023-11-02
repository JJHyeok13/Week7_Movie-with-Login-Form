import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    margin-left: 30px;
    margin-top: 50px;
    margin-right: 30px;
`

const MoviePoster = styled.img`
    width: 400px;
    height: 450px;
    position: relative;
    z-index: 1;
    margin-right: 50px;
`

const Detail = styled.p`
    word-break: keep-all;

`

export default function MovieDetail() {
    const { title } = useParams();
    const { state } = useLocation();

    return (
        <Wrapper>
            <MoviePoster src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} alt={{ title }} />
            <div>
                <h1>{title}</h1>
                <Detail>{state.overview}</Detail>
            </div>
        </Wrapper>
    )
}
