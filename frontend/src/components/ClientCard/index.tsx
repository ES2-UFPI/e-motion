import React from 'react';
import { Container, Row, DataContainer, Name, ContactInformations } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    id:string;
    name: string;
    nickname: string;
    email: string;
    phone: string;
    onPress(id:string): void ;
}

export default function ClientCard({id, name, nickname, email, phone, onPress}: Props) {
    return (
        <Container>
            <Row>
                <DataContainer>
                    <Name>{name}</Name>
                    <ContactInformations>{nickname} | {email}</ContactInformations>
                    <ContactInformations>{phone}</ContactInformations>
                </DataContainer>
                <Icon name="chevron-right" onPress={(e) => onPress(id)}/>
            </Row>
        </Container>
    )
}