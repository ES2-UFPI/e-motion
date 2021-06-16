import React from 'react';
import {
    Container,
    Title,
    Button,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
    children: string
}

const Header = (props: Props) => {

    const { children } = props;

    const navigation = useNavigation();

    return (
        <Container>
            <Button onPress={() => navigation.goBack()}>
                <Feather name="chevron-left" color="#FCFCFF" size={Dimensions.get('window').width*0.05}/>
                <Title>
                    {children}
                </Title>
            </Button>
        </Container>
    )
}

export default Header;