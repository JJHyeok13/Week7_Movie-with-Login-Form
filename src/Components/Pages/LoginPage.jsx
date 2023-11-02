import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 20px;
`

const InputLabel = styled.label`
    text-align: left;
`

const Inputemail = styled.input`
    width: 100%;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const InputPassword = styled.input`
    width: 100%;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const LoginButton = styled.button`
    width: 100%;
    height: 30px;
`


export default function LoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log("Email: ", email);
        console.log("Password: ", password);

        if (email === "example@naver.com" && password === "1234"){
            setIsLoggedIn(true);
            navigate(`/`);
        }
        else {
            alert("잘못된 입력입니다.");
        }
        
    }

    return (
        <div>
            <LoginForm onSubmit={onSubmitHandler}>
                <h1> 이메일과 비밀번호를 입력해주세요 </h1>
                <InputLabel> 이메일 주소 </InputLabel>
                <Inputemail type="email" value={email} onChange={onEmailHandler} />
                <InputLabel> 비밀번호 </InputLabel>
                <InputPassword type="password" value={password} onChange={onPasswordHandler} />
                <br />
                <LoginButton type="submit"> 로그인 </LoginButton>
            </LoginForm>
        </div>
    )
}
