import React from 'react';
import RecordProgressBar from '../RecordProgressBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container,Title,Date,DeleteButton,Row,DataContainer } from './styles';

interface Props {
    id:string;
    title: string;
    date: string;
    completed:number;
    hasDeleteIcon?:boolean;
    onPressDelete(id:string): void ;
    onPress(): void ;
}

export default function Record_card({id,title,date,completed,hasDeleteIcon,onPressDelete,onPress}:Props) {
    return (
        <Container onPress={onPress} >
            <Row>
                <DataContainer>
                    <Title> {title} </Title>
                    <Date> {date} </Date>
                </DataContainer>

            {hasDeleteIcon && <DeleteButton onPress={(e) => onPressDelete(id)}>
                <MaterialCommunityIcons name="trash-can-outline" color="#E1948B" size={20} />
            </DeleteButton>}

            </Row>

            <Row>
                <RecordProgressBar completed={completed} />
            </Row>
            

            
        </Container>
    );
}

