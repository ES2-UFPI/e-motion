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
    Info
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
import Avatar from '../../../../components/Avatar/avatar';
import moment from 'moment';

interface RadioButtons{
    name:string;
    id:string;
    isSelected:boolean;
    onSelect:(id?:string)=>void;
    isAll?:boolean;
}

interface Record{
    id:string;
    title:string;
    emotions?:string;
    data_registro:string;
    completed:number;
}


const Client = (props: any) => {

    const params = props.route.params;
    const navigation = useNavigation();

    const [records, setRecords] = useState<Record[]|undefined>([]);
    const [graphData, setGraphData] = useState<number[]>([1,2,2,0,1,1,1,1]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loading2, setLoading2] = useState<boolean>(true);
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
    const labels = ["Felicidade", "Tristeza", "Alívio","Angústia","Raiva","Medo","Aflição","Indiferença"];

    const [recordsFiltered, setRecordsFiltered] = useState<Record[]|undefined>([]);
    const [recordsFilteredEmotion, setRecordsFilteredEmotion] = useState<Record[]|undefined>(undefined);

    const SCREEN_WIDTH = Dimensions.get("window").width;
    const PROFILE_PICTURE_DIMENSION = SCREEN_WIDTH * 0.175;

    const [filter, setFilter] = useState<RadioButtons[]>([
        {
            id:"1",
            name:"Dia",
            isSelected:false,
            onSelect:setUserUserType
        },
        {
            id:"2",
            name:"Semana",
            isSelected:false,
            onSelect:setUserUserType
        } 
        ,
        {
            id:"3",
            name:"Mês",
            isSelected:false,
            onSelect:setUserUserType
        }
        ,
        {
            id:"4",
            name:"Tudo",
            isSelected:true,
            onSelect:setUserUserType,
            isAll:true
        }       
    ]);

    async function getEmotionalReactions() {
        
        try {
            setLoading(true)
            const reaponse = await api.get(`/professionals/client-reactions`,{
                headers:{
                    client_id:params.id
            }});

           const data = reaponse.data as [any];

           if(data.length < 1){
               setRecords(undefined)
                return
           }
           
           const records_from_user = data.map(record => {

                const fields = Object.entries(record);

                const fields_cont = fields.filter( field => (field[1] !== "")).length -3;

                const fields_completed = Math.round(fields_cont / (fields.length-3) * 100);

               return {
                id:record.id.toString(),
                title:record.title,
                data_registro:record.data_registro,
                completed:fields_completed,
                emotions:record.emotions,
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

           setRecordsFiltered(records_from_user);
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

    useEffect(() => {
        //faz o processamento e transformação dos dadso para o gráfico
        setGraphData(process_data())
        setRecordsFilteredEmotion(undefined)
    }, [recordsFiltered,records,loading2]);

    function onPressCard(id_record: string) {
        navigation.navigate('AcompanharComportamento', recordsFiltered?.filter(record => record['id'] === id_record)[0]);
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

    function setUserUserType(id:string|undefined){  
         if(id){
             const clone = filter.map((filtro) =>{
                if(filtro.isAll) setLoading2(!loading2) 
                if(id === filtro.id)
                    filtro.isSelected = true;
                  else
                    filtro.isSelected = false;

                
                 return filtro
             })
             setFilter(clone)
         }
    }

    function getWeekDates() {
        let now = new Date();
        let dayOfWeek = now.getDay(); //0-6
        let numDay = now.getDate();
      
        let start = new Date(now); //copy
        start.setDate(numDay - dayOfWeek);
        start.setHours(0, 0, 0, 0);
      
      
        let end = new Date(now); //copy
        end.setDate(numDay + (7 - dayOfWeek));
        end.setHours(0, 0, 0, 0);
      
        return [start, end];
    }

    function getMonthDates() {
        let now = new Date();
        let dayOfWeek = now.getDay(); //0-6
        let numDay = now.getDate();
      
        let start = new Date(now); //copy
        start.setDate(numDay - 30);
        start.setHours(0, 0, 0, 0);
      
      
        let end = new Date(now); //copy
        end.setDate(numDay + (7 - dayOfWeek));
        end.setHours(0, 0, 0, 0);
      
        return [start, end];
    }

    useEffect(() => {
        setLoading(true)
        const filter_selected = filter.filter((filtro) => filtro.isSelected)[0];
        const today = new Date().getTime(); 

        if(filter_selected.id === "1"){
            setRecordsFiltered(records?.filter((record) => {
                return new Date(record.data_registro).getTime() - today > 0.1
            })); 

        }else if(filter_selected.id === "2"){
            const  [start, end] = getWeekDates();

            setRecordsFiltered(records?.filter(
                (record) => {
                    return new Date(record.data_registro).getTime() >= start.getTime() 
                    && new Date(record.data_registro).getTime() <= end.getTime() 
                }
            )); 

        }else if(filter_selected.id === "3"){
            const  [start, end] = getMonthDates() ;
            const result = records?.filter(
                (record) => new Date(record.data_registro).getTime() >= start.getTime() 
                && new Date(record.data_registro).getTime() <= end.getTime() 
            )   
            setRecordsFiltered(result); 

        }else if(filter_selected.id === "4"){
            setRecordsFiltered(records);  
        }
        setTimeout(function(){ setLoading(false) }, 100);
        
    }, [filter])

    function onPressDataPoint(index:number){
        setRecordsFilteredEmotion(filterEmotion(labels[index]))
    }

    function process_data(){
        return labels.map((emotion)=> {
            const result = filterEmotion(emotion);
            return result ? result.length : 0
        })
    }

    function filterEmotion(emotion:string){
        return recordsFiltered?.filter((record)=> {
            const result = record.emotions?.toLocaleLowerCase()?.search(emotion.toLocaleLowerCase()) ;
            return result !=  undefined && result >= 0;
        })
    }

    return (
        <BackGroundPage>
            <HeaderContainer>
                <GoBackText onPress={() => navigation.goBack()}><FontAwesomeIcon name="chevron-left" />   Voltar</GoBackText>
                <SettingsContainer>
                    <Row>
                        <Avatar profilePicture={params.user.avatar} dimension={PROFILE_PICTURE_DIMENSION}></Avatar>
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
                    {/*<Row>
                        <IconContainer><FeatherIcon name="link" style={{ color: '#FCFCFF', fontSize: 20 }} /></IconContainer>
                        <Column>
                            <HeaderBaseText style={{ fontSize: 14, lineHeight: 14, margin: 2 }}>Consultório Virtual</HeaderBaseText>
                            <HeaderBaseText style={{ fontSize: 12, lineHeight: 11, margin: 2 }}>Ter/Qui 14:30h</HeaderBaseText>
                        </Column>
                    </Row>*/}
                </ContactContainer>
            </HeaderContainer>
            <RegistersContainer>
                <Info>
                    <RegistersBaseText style={{ fontSize: 14, lineHeight: 18, fontWeight: 'normal', color: '#292B2D' }}>Registros</RegistersBaseText>
                    <RegistersBaseText style={{ fontSize: 11, lineHeight: 14, fontWeight: 'bold', color: '#91919F' }}>
                        Total {recordsFilteredEmotion !== undefined ? recordsFilteredEmotion.length : 
                        recordsFiltered !== undefined ? recordsFiltered.length :0}
                    </RegistersBaseText>
                </Info>
                

                { 
                loading ?
                <NothingFound>
                    <ActivityIndicator size={80} color="#fad2d2" />  
                </NothingFound>
                :
                records && records.length > 0 ?
                <FlatList
                    data={recordsFilteredEmotion !== undefined ? recordsFilteredEmotion : recordsFiltered }
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                    <Record_card 
                        id={item.id} 
                        title={item.title} 
                        date={moment(item.data_registro).format('DD/MM/YYYY _ HH:mm').replace("_","às")} 
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
                                        labels={labels} 
                                        data={graphData} 
                                        onPressDataPoint={onPressDataPoint}
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