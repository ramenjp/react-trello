import * as React from 'react';
import { connect } from 'react-redux';
import CreatingBoard from './CreatingBoard';
import ActiveCreatingBoard from './ActiveCreatingBoard';
import { IAllState } from './../../../Interface/IAllState';
import INewBoard from './../../../Interface/INewBoard';


//Propsにわざわざ継承させてるのはPropsにさらに型を追加したい場合のため
interface Props extends INewBoard{}

class CreateBoardContainer extends React.Component<Props> {
    render() {
        return (
            <div>
                {this.props.isOpen ? <ActiveCreatingBoard /> : <CreatingBoard />}
            </div>
            // isOpenの初期値false。trueならActiveCreatingBoardを表示、falseならCreatingBoard
        );
    }
}

/* createBoardは引数、INewBoardは返り値の型、ICreateBoardはfucntionの返り値 */
/* ぱっと見でどんなものが返ってきてるかわかりやすい */
/* functionには必ず型をつける！ */


//titleいらないのでINewBoardじゃなくて普通にPropsでいい？
const mapStateToProps = (state: IAllState): INewBoard => {
    return {
        isOpen: state.createBoard.isOpen,
        title: state.createBoard.title
    }
}

//mapStateToPropsはアプリケーション全部のstateが返ってくるので全体の型定義をしたものをstateの型にする（のが無難）
export default connect(mapStateToProps)(CreateBoardContainer)