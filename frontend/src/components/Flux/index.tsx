import React from 'react';
import {
    Container,
    ContainerFlux,
    Circle,
    CircleText,
    Line
} from './styles';

interface Props {
    selected: number
}

const Flux = (props: Props) => {
    return (
        <Container>
            <ContainerFlux>
                <Circle isSelect={props.selected === 1}>
                    <CircleText>
                        1
                    </CircleText>
                </Circle>
                <Line />
                <Circle isSelect={props.selected === 2}>
                    <CircleText>
                        2
                    </CircleText>
                </Circle>
                <Line />
                <Circle isSelect={props.selected === 3}>
                    <CircleText>
                        3
                    </CircleText>
                </Circle>
            </ContainerFlux>
        </Container>
    )
}

export default Flux;