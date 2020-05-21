import * as React from 'react';
import styled from 'styled-components';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display:flex;
    justify-content:center;
`

const StyledLink = styled.div`
    a{
        text-decoration: none;
        color:black;
    };
    
`;

class Header extends React.Component {
    render() {
        return (
            <Wrapper>
                <StyledLink>
                    <Link to="/">
                        <DashboardIcon />Trello Clone
                    </Link>
                </StyledLink>
            </Wrapper>
        );
    }
}
export default Header;