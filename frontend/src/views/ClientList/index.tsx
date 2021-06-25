import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import { BackGroundPage, ContainerMain, Item } from './styles';
import SearchBarComponent from '../../components/SearchBar';
import ClientCardComponent from '../../components/ClientCard';
import { useNavigation } from '@react-navigation/native';

const ClientList = (props: any) => {
    const { clients } = props;
    const [searchQuery, setSearchQuery] = useState<string>("");

    const dimensions = Dimensions.get('window');

    const navigation = useNavigation();

    const staticClients = [
        {
            id: "0",
            name: "Júlia Silva",
            nickname: "lulu",
            email: "julia@gmail.com",
            phone: "(86) 99503-3945"
        },
        {
            id: "1",
            name: "João Soares",
            nickname: "jaum",
            email: "joao@gmail.com",
            phone: "(86) 99999-3945"
        },
        {
            id: "2",
            name: "Miguel Marques",
            nickname: "miguel",
            email: "miguel@gmail.com",
            phone: "(86) 99503-3945"
        },
        {
            id: "3",
            name: "Gisele Ribeiro",
            nickname: "gigi",
            email: "gisele@gmail.com",
            phone: "(86) 99503-3945"
        },
        {
            id: "4",
            name: "Lucas Sales",
            nickname: "lucas",
            email: "lucas@gmail.com",
            phone: "(86) 99503-3945"
        }
    ]

    function onPressClientCard(id:string){
        navigation.navigate('Acompanhamento', {id});
    }

    return (
        <>
        <BackGroundPage>
            <ContainerMain>
                <SearchBarComponent placeholder={'Busque pelo paciente'} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <FlatList
                    data={staticClients}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => 
                    <Item>
                        <ClientCardComponent 
                            id={item.id} 
                            name={item.name} 
                            nickname={item.nickname} 
                            email={item.email} 
                            phone={item.phone} 
                            onPress={onPressClientCard}
                        />
                    </Item>
                    }
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={{
                        paddingLeft: dimensions.width/20,
                        paddingRight: dimensions.width/20,
                        marginTop: dimensions.height/10,
                        width: dimensions.width,
                    }}
                />
            </ContainerMain>
        </BackGroundPage>
        </>
    )
}

export default ClientList;