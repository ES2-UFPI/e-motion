import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import SearchBarComponent from '../../components/SearchBar';
import ClientCardComponent from '../../components/ClientCard';
import { BackGroundPage, ContainerMain, Item, NothingFound, TextNothingFound } from './styles';

const ClientList = (props: any) => {
    const professional_id = "0"
    const [clients, setClients] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const dimensions = Dimensions.get('window');

    const navigation = useNavigation();

    async function getClients() {
        try {
            setLoading(true);

            const response = await api.get(`professionals/clients`);
            setClients(response.data.clients);
            //console.log(response.data)
            setLoading(false);
        } catch(error) {
            console.log(error);

            setLoading(false);
        }
    }

    useEffect(() => {
        getClients();
    }, []);

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
        navigation.navigate('Acompanhamento', clients.filter(user => user['id'] === id)[0]);
    }

    return (
        <>
        <BackGroundPage>
            <ContainerMain>
                <SearchBarComponent placeholder={'Busque pelo paciente'} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                {
                    loading ?
                    <NothingFound>
                        <ActivityIndicator size={80} color="#fad2d2" />  
                    </NothingFound>
                    :
                    clients && clients.length > 0 ?
                    <FlatList
                    data={clients}
                    keyExtractor={(item) => item['id']}
                    renderItem={({ item }) => 
                    <Item>
                        <ClientCardComponent 
                            id={item['id']} 
                            name={item['name']} 
                            nickname={item['name']} 
                            email={item['user']['email']} 
                            phone={item['phone']}  
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
                    :
                    <NothingFound>
                        <TextNothingFound>
                            Nenhum cliente foi encontrado :(
                        </TextNothingFound>  
                    </NothingFound>
                }
            </ContainerMain>
        </BackGroundPage>
        </>
    )
}

export default ClientList;