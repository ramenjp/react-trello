import * as React from 'react';
import { connect } from 'react-redux';
// import styled from 'styled-components';
// import ActiveCreatingBoard from  './ActiveCreatingBoard';
import CreatingBoard from './CreatingBoard';
import ActiveCreatingBoard from './ActiveCreatingBoard';
// import INewBoard from './../../../Interface/INewBoard';
import { IAllState } from './../../../Interface/IAllState';
import INewBoard from './../../../Interface/INewBoard';

interface ICreateBoard {
    isOpen: boolean;
}

//Propsにわざわざ継承させてるのはPropsにさらに型を追加したい場合のため
interface Props extends ICreateBoard{ }

interface State { }

class CreateBoardContainer extends React.Component<Props, State> {
    render() {
        console.log('open', this.props.isOpen)
        return (
            <div>
                {this.props.isOpen ? <ActiveCreatingBoard/> : <CreatingBoard />}
            </div>
            // isOpenの初期値false。trueならActiveCreatingBoardを表示、falseならCreatingBoard
        );
    }
}

/* createBoardは引数、INewBoardは返り値の型、ICreateBoardはfucntionの返り値 */
/* ぱっと見でどんなものが返ってきてるかわかりやすい */
/* functionには必ず型をつける！ */

const mapStateToProps = (state: IAllState): INewBoard => {
    return {
        isOpen: state.createBoard.isOpen,
        title: state.createBoard.title
    }
}

//mapStateToPropsはアプリケーション全部のstateが返ってくるので全体の型定義をしたものをstateの型にする（のが無難）
export default connect(mapStateToProps)(CreateBoardContainer)