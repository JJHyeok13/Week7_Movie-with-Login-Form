import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Description = styled.div`
  margin-top: 50px;
  margin-left: 100px;
`

export default function NotFound() {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate("/");
  };

  return (
    <Description>
      <h1> 해당 페이지를 찾지 못했습니다. </h1>
      <p> 주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다. </p>
      <p onClick={handleLinkClick} style={{ cursor: 'pointer', color: 'red' }}> 메인 페이지로 이동 </p>
    </Description>
  );
};