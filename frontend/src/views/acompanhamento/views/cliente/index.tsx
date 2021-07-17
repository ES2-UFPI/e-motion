import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View } from 'react-native';
import { 
    BackGroundPage, 
    RegistersContainer, 
    Row,
    Column,
    RegistersBaseText, 
    GoBackText, 
    HeaderContainer,
    SettingsContainer,
    ContactContainer,
    HeaderBaseText,
    IconContainer,
    Info,
    Avatar
} from './styles';
import Record_card from '../../../../components/Record_card';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LineChartComponent from '../../../../components/LineChartComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import RadioButtonsComponent from '../../../../components/RadioButtonsComponent';


interface RadioButtons{
    name:string;
    isSelected:boolean;
    onSelect:()=>void;
}

interface Record{
    id:string;
    title:string;
    date:string;
    completed:number;
}

interface RecordGraph{
    data:string;
    value:number;

}

interface UserRecordList{
    records:Record[];
    graphData:any;
}



const Client = (props: any) => {

    const params = props.route.params;
    const navigation = useNavigation();
    const profilePicture = require('../../../../assets/profile.png');

    const [loading, setLoading] = useState<boolean>(true);
    const [clientRegisters, setClientRegisters] = useState();
    const [clientRegistersFiltered, setClientRegistersFiltered] = useState();

    function onPressCard(){
        navigation.navigate('AcompanharComportamento');
    }

    const [filter, setFilter] = useState<RadioButtons[]>([
        {
            name:"Dia",
            isSelected:true,
            onSelect:() =>{}
        },
        {
            name:"Semana",
            isSelected:false,
            onSelect:() => {}
        } 
        ,
        {
            name:"Mês",
            isSelected:false,
            onSelect:() => {}
        }
        ,
        {
            name:"Tudo",
            isSelected:false,
            onSelect:() => {}
        }       
    ]);

    
    const staticRegisters = [
        {
            id: "0",
            title: "Vi uma bela cena",
            date: "24/05/2021 às 14:30",
            completed: 50
        },
        {
            id: "1",
            title: "Me senti sozinho na faculdade",
            date: "31/04/2021 às 08:00",
            completed: 80
        },
        {
            id: "2",
            title: "Feliz com os amigos",
            date: "12/05/2021 às 20:00",
            completed: 100
        },
        {
            id: "3",
            title: "Chateado com fome",
            date: "23/06/2021 às 14:00",
            completed: 20
        },
        {
            id: "32",
            title: "ffff com fome",
            date: "23/06/2021 às 14:00",
            completed: 20
        }
    ]

    return (
        <BackGroundPage>
            <HeaderContainer>
                <GoBackText onPress={() => navigation.goBack()}><FontAwesomeIcon name="chevron-left"/>   Voltar</GoBackText>
                <SettingsContainer>
                        <Row>
                            <Avatar source={profilePicture}></Avatar>
                            <Column>
                                <HeaderBaseText style={{fontSize: 18, lineHeight: 21, marginLeft: 10}}>{params.name}</HeaderBaseText>
                                <HeaderBaseText style={{fontSize: 12, lineHeight: 16, marginLeft: 14}}>{params.nickname}</HeaderBaseText>
                            </Column>
                        </Row>
                        <FeatherIcon name="settings" style={{color: '#FCFCFF', fontSize: 24}}/>
                </SettingsContainer>
                <ContactContainer>
                    <Row>
                        <IconContainer><FeatherIcon name="file-text" style={{color: '#FCFCFF', fontSize: 24}}/></IconContainer>
                        <Column>
                            <HeaderBaseText style={{fontSize: 14, lineHeight: 14, margin: 2}}>{params.email}</HeaderBaseText>
                            <HeaderBaseText style={{fontSize: 12, lineHeight: 11, margin: 2}}>{params.phone}</HeaderBaseText>
                        </Column>
                    </Row>
                    <Row>
                        <IconContainer><FeatherIcon name="link" style={{color: '#FCFCFF', fontSize: 20}}/></IconContainer>
                        <Column>
                            <HeaderBaseText style={{fontSize: 14, lineHeight: 14, margin: 2}}>Consultório Virtual</HeaderBaseText>
                            <HeaderBaseText style={{fontSize: 12, lineHeight: 11, margin: 2}}>Ter/Qui 14:30h</HeaderBaseText>
                        </Column>
                    </Row>
                </ContactContainer>
            </HeaderContainer>
            <RegistersContainer>
                <Info>
                    <RegistersBaseText style={{fontSize: 14, lineHeight: 18, fontWeight:'normal',  color: '#292B2D'}}>Registros</RegistersBaseText>
                    <RegistersBaseText style={{fontSize: 11, lineHeight: 14, fontWeight:'bold', color: '#91919F'}}>Total 10</RegistersBaseText>
                </Info>
                

                <FlatList
                    data={staticRegisters}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                    <Record_card 
                        id={item.id} 
                        title={item.title} 
                        date={item.date} 
                        completed={item.completed} 
                        onPress={onPressCard}
                    />
                    }
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal:30,
                        paddingBottom:15,
                        marginTop:0,
                        paddingTop:0
                    }}
                    ListHeaderComponentStyle={{
                        marginTop:0,
                        paddingBottom:0,
                        marginBottom:0
                    }}
                    ListHeaderComponent={
                        <View 
                            style={{     
                                alignItems:"center",
                                justifyContent: 'center',
                                marginTop:Dimensions.get('window').width/30,
                                paddingBottom:0,
                                marginBottom:0,
                                marginHorizontal:0
                            }}
                        >
                             <View 
                                style={{
                                    width:"100%",
                                    alignItems:"center",
                                    justifyContent: 'center',
                                    marginBottom:Dimensions.get('window').width/20,
                                }}
                            >
                                <RadioButtonsComponent radioButtons={filter} />
                            </View>
                    
                            <View 
                                style={{
                                    flex:2,
                                }}
                            >
                                
                            <ScrollView                                    
                                    contentContainerStyle={{ 
                                        alignItems:"center", 
                                        justifyContent: 'center',                
                                    }}
                                    horizontal={true}
                                > 
                                    <LineChartComponent 
                                        labels={['January', 'February', 'March', 'April', 'May', 'June']} 
                                        data={[20, 45, 28, 80, 99, 43]} 
                                    />
                                </ScrollView>
                            </View>
                            
                        </View>
                    }
                />
            </RegistersContainer>
        </BackGroundPage>
    )
}

export default Client;