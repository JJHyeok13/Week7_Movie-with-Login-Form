import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
`

const ButtonStyle = styled.button`
    font-size: 12px;
    background-color: white;
    color: black;
    border: none;
    padding: 5px 15px;
    border-radius: 10px;
`

export default function LoginControl() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setIsLoggedIn(true);
        navigate('/loginpage', {});
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
            <Container>
                    <ButtonStyle onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}>
                        {isLoggedIn ? '로그아웃' : '로그인'}
                    </ButtonStyle>
            </Container>

    );
}
