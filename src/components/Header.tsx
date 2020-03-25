import * as React from 'react';
import styled from 'styled-components';
import DashboardIcon from '@material-ui/icons/Dashboard';

export const Wrapper = styled.div`
    display:flex;
    justify-content:center;
`

class Header extends React.Component{
render(){
    return(
        <Wrapper>
            <DashboardIcon/>Trello Clone
        </Wrapper>
    );
}
}
export default Header;