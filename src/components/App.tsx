import * as React from 'react';
import styled from 'styled-components';
import BoardContainer from './boards/BoardContainer';

const Wrapper = styled.div`
  display: flex;
  padding: 60px 35px;
  flex-wrap: wrap;
`
class App extends React.Component {
    render() {
        return (
            <Wrapper>
              <BoardContainer/>
            </Wrapper>
        );
    }
}

export default App;