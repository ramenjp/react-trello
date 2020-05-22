import * as React from 'react';
import styled from 'styled-components';
import { DragSource } from "react-dnd"
import * as reactDnD from 'react-dnd';
import { ICard } from '../../../../Interface/IStatus';

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


//dragアイテムの持つデータを示す
const dragSource: reactDnD.DragSourceSpec<ICard, {}> = {
    beginDrag(props: ICard):ICard {
        console.log("beginDrag.props", props);
        const { cardName, cardid, listid }: { cardName: string, cardid: string, listid: string } = props;
        return { cardName, cardid, listid }
    }
}

//react-dndのstateをcomponentのpropsに渡す役割
const collect: reactDnD.DragSourceCollector<{}, {}> = (connect) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
    }
}

const itemType: string = "CARD";

@DragSource(itemType, dragSource, collect)
class Card extends React.Component<any>{

    render() {
        //通常のprops
        const { cardName } = this.props;
        //ReactDnD props
        const { connectDragSource } = this.props;

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