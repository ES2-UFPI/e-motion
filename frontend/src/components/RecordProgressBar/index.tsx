import React from 'react';

import { Container,Progress,ProgressText } from './styles';


interface Props {
    completed:number
}

export default function RecordProgressBar({completed}:Props) {
    return (
        <Container >
           <Progress style={{width:`${completed}%`}} />

           <ProgressText>
                    {completed} %
            </ProgressText>
            
        </Container>
    );
}

