import * as React from 'react';
import styled from 'styled-components';
//import BoardContainer from './BoardContainer';
import { Link } from 'react-router-dom';

const BoardWrapper = styled.div`
    width: 245px;
    height: auto;
    margin: 20px;
    background-color: white;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    transition: 200ms ease-in-out;
    font-weight: 900;
    text-shadow: 0px 0px 3px #white;

    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transition: 200ms ease-in-out;
        transform: scale(1.10);
    }
`

const Title = styled.h2`
    color: black;
    word-break: break-all;
    padding: 10px;
`
interface allBoards {
    title: string;
    id: string;
}

const ShowAllBoards: React.FC<allBoards> = (props) => {
    return (
        <Link to={`/b/${props.id}`}>
            <BoardWrapper>
                <Title>{props.title}</Title>
            </BoardWrapper>
        </Link>
    );
}

export default ShowAllBoards;