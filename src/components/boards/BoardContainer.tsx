import * as React from 'react';
import CreateBoardContainer from './CreatingBoard/CreateBoardContainer';
//import createNewBoard from './../../Actions/createNewBoard';

//?をつけると入れても入れなくてもいい（null許可）
type Props = {
    name?:string;
}

type State = {
    isOpen: boolean;
};

class BoardContainer extends React.Component<Props, State> {
    //stateはjson
    constructor(props:Props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
//stateで管理じゃなくてstoreで管理するためにactionを使わないといけない
    render() {
        return (
            <CreateBoardContainer />
            //新しいBoardを作るコンポーネント
                
            /* 作られたコンポーネントを並べる （まだ作ってない）*/
        );
    }
}

export default BoardContainer;