import * as React from 'react';
import styled from 'styled-components';

const CardName= styled.div`
    display:flex;
`

interface Props{
    cardName:string;
}

class Card extends React.Component<Props>{
    render(){
        return(
        <CardName>{this.props.cardName}</CardName>
        );
    }
}

export default Card; 