import * as React from 'react';
import styled from 'styled-components';
import CreateBoardContainer from './CreatingBoard/CreateBoardContainer';

const Wrapper = styled.div`
  display: flex;
  padding: 60px 35px;
  flex-wrap: wrap;
`
class BoardContainer extends React.Component {
    render() {
        return (
            // 新しくBoardを作る用
            <Wrapper>
                {/* 新しいBoardを作るコンポーネント */}
                <CreateBoardContainer />
                {/* 作られたコンポーネントを並べる */}

            </Wrapper>
            );
    }
}

export default BoardContainer;