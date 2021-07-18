import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, FlatList, TouchableOpacity, View, ActivityIndicator  } from 'react-native';
import { AxiosError, AxiosResponse } from 'axios';
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
    NothingFound,
    TextNothingFound,
    Info,
    Avatar
} from './styles';
import Record_card from '../../../../components/Record_card';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Alert2Options from '../../../../components/Alert2Options';
import api from '../../../../services/api';
import LineChartComponent from '../../../../components/LineChartComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import RadioButtonsComponent from '../../../../components/RadioButtonsComponent';
import { ThemeConsumer } from 'styled-components/native';


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

    const [records, setRecords] = useState<Record[]|undefined>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
    const [clientRegisters, setClientRegisters] = useState();
    const [clientRegistersFiltered, setClientRegistersFiltered] = useState();

    async function getEmotionalReactions() {

        try {
            setLoading(true)
            const reaponse = await api.get(`/professionals/client-reactions/${params.id}`);

           const data = reaponse.data as [any];

           if(data.length < 1){
               setRecords(undefined)
               setLoading(false);
                return
           }
           
           const records_from_user = data.map(record => {

                const fields = Object.entries(record);

                const fields_cont = fields.filter( field => (field[1] !== "")).length -3;

                const fields_completed = Math.round(fields_cont / (fields.length-3) * 100);

               return {
                id:record.id.toString(),
                title:record.title,
                date:record.date,
                completed:fields_completed,
                what_the_client_felt: record.what_did_you_feel,
                what_the_client_thought: record.what_did_you_think,
                what_the_client_did: record.what_did_you_do,
                when_this_usually_occurs: record.when_does_tb_usually_occur,
                where_this_occurs: record.where_does_tb_occur,
                who_is_present_when_this_occurs: record.who_is_present_when_tb_occurs,
                what_happened_before_that: record.which_activitie_precede_tb,
                what_other_people_say_or_do_before_that_happens: record.wd_other_people_sod_before_tb,
                does_the_client_engage_in_any_other_behavior_before_this_happens: record.do_you_engage_other_behavior_before_tb_occurs,
                what_happened_after_that: record.what_happens_after_tb,
                what_the_client_did_when_this_occurred: record.wdyd_when_tb_occurs,
                what_other_people_did_when_this_occurred: record.wd_other_people_do_when_tb_occurs,
                what_changed_after_that_happened: record.what_changes_after_tb_occurs,
                what_the_customer_got_after_it_happened: record.wd_you_get_after_tb, 
                what_the_customer_did_or_avoided_after_it_happened: record.wdyd_or_avoid_after_tb
               }
           });

           setRecords(records_from_user);
           setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getEmotionalReactions();
    }, []);

    function onPressCard(id_record: string) {
        navigation.navigate('AcompanharComportamento', records?.filter(record => record['id'] === id_record)[0]);
    }

    function unbindClient() {
        setModalIsVisible(true);
    }

    function handleUnbind() {
        try {
            api.put("clients/unbind", {id: params.id}).
                then((response: AxiosResponse) => { Alert.alert(response.data.message); navigation.goBack() }).
                catch((error: AxiosError) => Alert.alert(error.message));
        }
        catch (error) {
            console.log(error);
        }
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

    return (
        <BackGroundPage>
            <HeaderContainer>
                <GoBackText onPress={() => navigation.goBack()}><FontAwesomeIcon name="chevron-left" />   Voltar</GoBackText>
                <SettingsContainer>
                    <Row>
                        <Avatar source={profilePicture}></Avatar>
                        <Column>
                            <HeaderBaseText style={{ fontSize: 18, lineHeight: 21, marginLeft: 10 }}>{params.name}</HeaderBaseText>
                            <HeaderBaseText style={{ fontSize: 12, lineHeight: 16, marginLeft: 14 }}>{params.nickname}</HeaderBaseText>
                        </Column>
                    </Row>
                    <TouchableOpacity onPress={() => unbindClient()}>
                        <FeatherIcon name="settings" style={{ color: '#FCFCFF', fontSize: 24 }} />
                    </TouchableOpacity>
                </SettingsContainer>
                <ContactContainer>
                    <Row>
                        <IconContainer><FeatherIcon name="file-text" style={{ color: '#FCFCFF', fontSize: 24 }} /></IconContainer>
                        <Column>
                            <HeaderBaseText style={{ fontSize: 14, lineHeight: 14, margin: 2 }}>{params.user.email}</HeaderBaseText>
                            <HeaderBaseText style={{ fontSize: 12, lineHeight: 11, margin: 2 }}>{params.phone}</HeaderBaseText>
                        </Column>
                    </Row>
                    <Row>
                        <IconContainer><FeatherIcon name="link" style={{ color: '#FCFCFF', fontSize: 20 }} /></IconContainer>
                        <Column>
                            <HeaderBaseText style={{ fontSize: 14, lineHeight: 14, margin: 2 }}>Consultório Virtual</HeaderBaseText>
                            <HeaderBaseText style={{ fontSize: 12, lineHeight: 11, margin: 2 }}>Ter/Qui 14:30h</HeaderBaseText>
                        </Column>
                    </Row>
                </ContactContainer>
            </HeaderContainer>
            <RegistersContainer>
                <Info>
                    <RegistersBaseText style={{ fontSize: 14, lineHeight: 18, fontWeight: 'normal', color: '#292B2D' }}>Registros</RegistersBaseText>
                    <RegistersBaseText style={{ fontSize: 11, lineHeight: 14, fontWeight: 'bold', color: '#91919F' }}>Total 10</RegistersBaseText>
                </Info>
                

                { 
                loading ?
                <NothingFound>
                    <ActivityIndicator size={80} color="#fad2d2" />  
                </NothingFound>
                :
                records && records.length > 0 ?
                <FlatList
                    data={records}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                    <Record_card 
                        id={item.id} 
                        title={item.title} 
                        date={item.date} 
                        completed={item.completed} 
                        onPress={() => onPressCard(item.id)}
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
                :
                <NothingFound>
                    <TextNothingFound>
                        Nenhum registo foi encontrado :(
                    </TextNothingFound>
                </NothingFound>
                }
            </RegistersContainer>
            <Alert2Options
                visible={modalIsVisible}
                close={() => setModalIsVisible(false)}
                onConfirm={handleUnbind}
                title={"Atenção!"}
                content="Você tem certeza de que deseja desvincular este paciente?"
            />
        </BackGroundPage>
    )
}

export default Client;