import { React } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginControl from './LoginControl';

const UpperBar = styled.div`
    display: flex;
    background-color: rgb(0, 1, 76);
    padding: 15px;
`

const Headerimage = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-left: 100px;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
`

const Menulist = styled.ul`
    list-style: none;
`

const List = styled.li`
    float: left;
    color: white;
    font-weight: bold;
    margin-left: 30px;
`

export default function Header(props) {
    return (
        <UpperBar>
            <Headerimage>
                <Link to="/">
                    <img
                        style={{ width: "154px", height: "20px" }}
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                        alt="로고"
                    />
                </Link>
            </Headerimage>
            <Menu>
                <Menulist>
                    <Link to="/movies"> <List> 영화 </List> </Link>
                    <Link to="/tv"> <List> TV 프로그램 </List> </Link>
                    <Link to="/celebrity"><List> 인물 </List> </Link>
                </Menulist>
            </Menu>
            <LoginControl />
        </UpperBar>
    );
}