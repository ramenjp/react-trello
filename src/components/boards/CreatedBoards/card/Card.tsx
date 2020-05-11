import * as React from 'react';
import styled from 'styled-components';
import { DragSource } from "react-dnd"
import * as reactDnd from 'react-dnd';
// import { 
//     ConnectDragSource,
//     // DragSourceSpec,
//     // DragSourceCollector,
//     // DragSourceConnector,
//     // DragSourceMonitor,
//     // DragElementWrapper,
// } from 'react-dnd'; 
//import PropTypes from 'prop-types'


const CardName = styled.div`
    display:flex;
    background-color:white;
    border-radius:5px;
    margin:7px 0px;
    padding: 0px 10px;
    font-weight:lighter;
    font-size:80%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

// interface Props {
//     cardName: string;
//     listid: string;
//     cardid: string;
// }

// interface DragDropProps {
//     connectDragSource: ConnectDragSource
//     connectDragPreview: any
//     isDragging: boolean
// }

//dragアイテムの持つデータを示す
const dragSource = {
    beginDrag(props:any) {
        console.log("beginDrag.props",props);
        const { cardName, cardid, listid }: { cardName: string, cardid: string, listid: string } = props;
        return { cardName, cardid, listid }
    }
    // beginDrag({ cardName, cardid, listid }: { cardName:string,cardid:string,listid:string }) {
    //     return [cardName,cardid,listid];
    // }
}

//react-dndのstateをcomponentのpropsに渡す役割
const collect: reactDnd.DragSourceCollector<{}, {}> = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

//Drag中のスタイル変更用
// const getItemStyles = (isDragging: boolean) => {
//     return {
//         opacity: isDragging ? "0.4" : "1"
//     }
// }

const itemType = "CARD";


@DragSource(itemType, dragSource, collect)
class Card extends React.Component<any>{

    // const propTypes = {
    //     connectDragSource: PropTypes.func.isRequired,
    //     connectDragPreview: PropTypes.func.isRequired,
    //     isDragging: PropTypes.bool.isRequired,
    // }

    render() {
        //通常のprops
        const { cardName } = this.props;

        //ReactDnD props
        const { connectDragSource, isDragging } = this.props;
        console.log("isDragging", isDragging);
        // console.log("connectDragSource", connectDragSource);

        return connectDragSource(
            <div>
                <CardName >
                    {cardName}
                </CardName>
            </div>
        );
    }
}

export default Card; 