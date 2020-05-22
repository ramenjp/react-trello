import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IBoard } from '../../Interface/IStatus';

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

const StyledLink = styled.div`
    a{
        text-decoration: none;
    }
`;

const ShowAllBoards: React.FC<IBoard> = (props) => {
    const listid = props.id;
    console.log("ShowAllBoards listid" , listid)
    return (
        <StyledLink>
        <Link to={`/b/${listid}`}>
            <BoardWrapper>
                <Title>{props.title}</Title>
            </BoardWrapper>
        </Link>
        </StyledLink>
    );
}

export default ShowAllBoards;