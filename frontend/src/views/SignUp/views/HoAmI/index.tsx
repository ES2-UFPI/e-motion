import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView,Image,ActivityIndicator } from 'react-native';
import { AxiosError, AxiosResponse } from 'axios';

import InputValidator from '../../../../components/InputValidator';
import RadioButtonsComponent from '../../../../components/RadioButtonsComponent';
import Alert from '../../../../components/AlertConfirm';
import { 
    ContainerAll,
    Container,
    ContainerLogo,
    Title,
    WarningText,
    Button,
    TextButton
} from './styles';

import api from '../../../../services/api';
import { Dimensions } from 'react-native';

const background = require('../../../../assets/background.png');
const Logo = require('../../../../assets/logo-with-name.png');

interface RadioButtons{
    name:string;
    isSelected:boolean;
    onSelect:()=>void;
}

interface InputUser{
    name_database:string;
    placeholder:string;
    value:string;
    pattern?:string;
    error_message?:string;
    isPassword?:boolean;
    isConfirmPassword?:boolean;
    isValid?:boolean;
}

interface InputUserForm{
    cliente:InputUser[]
    profissional:InputUser[]
}


const HoAmI = () => {

    const SCREEN_WIDTH = Dimensions.get("window").width;
    const SCREEN_HEIGHT = Dimensions.get("window").height;

    const alertRef = useRef<any>();
    const [allFieldsFilled, setAllFieldsFilled] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [alertErrorMessage, setAlertErrorMessage] = useState<string>("");
    const navigate = useNavigation();
    const [inputUserForm, setInputUserForm] = useState<InputUserForm>({
        'cliente':[
            {
                'name_database':"name",
                'placeholder':"Nome",
                'value':"",
                'error_message':""
            },
            {
                'name_database':"email",
                'placeholder':"Email",
                'value':"",
                'pattern':"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
                'error_message':"Email inválido!"
            },
            {
                'name_database':"phone",
                'placeholder':"Telefone",
                'value':"",
                'error_message':"Telefone inválido!"
            }
            ,
            {
                'name_database':"password",
                'placeholder':"Senha",
                'value':"",
                'isPassword':true
            },
            {
                'name_database':"password2",
                'placeholder':"Confirme sua senha",
                'value':"",
                'isPassword':true,
                'isConfirmPassword':true,
                'error_message':"As senhas são diferentes"
            }
        ],
        'profissional':[
            {
                'name_database':"name",
                'placeholder':"Nome",
                'value':"",
                'error_message':""
            },
            {
                'name_database':"email",
                'placeholder':"Email",
                'value':"",
                'pattern':".+@.+\.\w{2,3}$",
                'error_message':"Email inválido!",
                'isValid':true
            },
            {
                'name_database':"crm_crp",
                'placeholder':"CRP",
                'value':"",
                'pattern':"",
                'error_message':""
            },
            {
                'name_database':"speciality",
                'placeholder':"Especialidade",
                'value':"",
                'error_message':""
            },
            {
                'name_database':"phone",
                'placeholder':"Telefone",
                'value':"",
                'pattern':".?\d{2}.?\s\d\s\d{4}-\d{4}",
                'error_message':"Telefone inválido!",
                'isValid':true
            }
            ,
            {
                'name_database':"password",
                'placeholder':"Senha",
                'value':"",
                'isPassword':true
            },
            {
                'name_database':"password3",
                'placeholder':"Confirme sua senha6",
                'value':"",
                'isPassword':true,
                'isConfirmPassword':true,
                'error_message':"As senhas são diferentes",
                'isValid':true
            }
        ]
    } );

    const [typeOfUser, setTypeOfUser] = useState<RadioButtons[]>([
        {
            name:"cliente",
            isSelected:true,
            onSelect:setUserUserType
        },
        {
            name:"profissional",
            isSelected:false,
            onSelect:setUserUserType
        }       
    ]);

    const [type, setType] = useState(getInputSelectd(typeOfUser));

    function formatPhoneNumber(text:string){
        const re = new RegExp(/(\d{2})(\d{4,5})(\d{4})/, 'g');
        return text.replace(re, (_, a, b, c) => `(${a}) ${b}-${c}`);
    }

    function onChangeText(value:string,index:number,isValid:boolean){
        const inputUserSelected = inputUserForm[type];
        
        if(index != inputUserSelected.length -3){
            inputUserSelected[index].value = value;
            inputUserSelected[index].isValid = isValid;
        }else{
            inputUserSelected[index].value = formatPhoneNumber(value);
            inputUserSelected[index].isValid = isValid;
        }
        setInputUserForm({
            ...inputUserForm,
            [type]:inputUserSelected
        });
    }
 

    function setUserUserType(){        
        let clone = typeOfUser;
        clone[0].isSelected = !clone[0].isSelected;
        clone[1].isSelected = !clone[1].isSelected;       
        setTypeOfUser(clone);
        setType(getInputSelectd(typeOfUser));      
    }

    function getInputSelectd(itens:RadioButtons[]){
        return itens.filter((option)=> option.isSelected)[0].name as keyof typeof inputUserForm
    }

    function getInputSelectdFields(){
        const fields = {} as any;

        const filteredFilter = inputUserForm[type].filter((option)=> option.isConfirmPassword != true);

        filteredFilter.map((field) => {
            fields[field.name_database] = field.value;
        })

        return fields;
    }


    useEffect(() => {
        const fields_filled = inputUserForm[type].filter(
            (option)=> option.value !== "" && option.isValid)
        
        setAllFieldsFilled(fields_filled.length === inputUserForm[type].length);

    }, [inputUserForm]);

    
    async function registerUser() {
            
        if(!allFieldsFilled ) {
            setAlertErrorMessage("Você deve preencher todos os campos de forma correta para concluir seu cadastro!");
            alertRef.current.show();

            return 1;
        }
        setLoading(true);
        const userData = getInputSelectdFields();
        const userRoute =  type !== 'cliente' ? "professionals" : "clients";
        
        api.post(userRoute, userData).then((res: AxiosResponse) => {
            setLoading(false); 
            navigateToNextStep(res.data.accessToken);
        })
        .catch((err: AxiosError) => { 
            setLoading(false); 
            console.log(err.response?.data);
            setAlertErrorMessage(err.response?.data.message);
            alertRef.current.show();
        });   

    }

    async function navigateTologin() {
       navigate.navigate("Authentication")
    }
    async function navigateToNextStep(accessToken: string) {
        navigate.navigate("AvatarAndNickname", { type, accessToken });
    }

    return (
        <ContainerAll source={background}>
          
            <ContainerLogo>
                <Image source={Logo} style={{ width: SCREEN_WIDTH*0.4, height: SCREEN_HEIGHT*0.16,}} resizeMode='contain'  />
            </ContainerLogo>

            <Container >
                <Alert
                    ref={alertRef}
                    title="Ops, um erro"
                    content={alertErrorMessage}
                    textButton="Ok"
                    onConfirm={()=>alertRef.current.close()}
                />

                

                <ScrollView 
                    style={{
                        width:"100%"  
                    }}
                    contentContainerStyle={{ 
                        alignItems:"center", 
                        justifyContent: 'center',
                        paddingHorizontal:0,
                        width:"100%",
                        padding: SCREEN_HEIGHT*0.08                 
                     }}
                     showsVerticalScrollIndicator={false}
                >
                    <Title>Eu sou </Title>

                    <RadioButtonsComponent radioButtons={typeOfUser} />
                    {
                        inputUserForm[type].map((input,index)=>(
                            <InputValidator 
                                key={input.name_database+type}
                                index={index} 
                                value={input.value}
                                pattern={input.pattern}
                                onChangeText={onChangeText}
                                placeholder={input.placeholder} 
                                isPassword={input.isPassword}
                                error_message={input.error_message}
                                isConfirmPassword={input.isConfirmPassword}
                                password={inputUserForm[type][inputUserForm[type].length-2].value}
                            />
                        ))
                    }
                                           
                    <WarningText> 
                        Ao criar uma conta, você concorda com os termos de uso e a política de privacidade do e-motion.
                    </WarningText>

                    <Button onPress={registerUser}  >
                        {
                            !loading ?
                                <TextButton>Criar Conta</TextButton>
                                :
                                <ActivityIndicator size={28} color="#fad2d2" /> 
                        }
                    </Button>

                    <Button style={{backgroundColor:"#fff"}} onPress={navigateTologin}>
                        <TextButton style={{color:"#E1948B",fontWeight:"bold"}}>
                            Já possuo uma conta
                        </TextButton>
                    </Button>
                    

                </ScrollView>
            </Container>

        </ContainerAll>
    );
}

export default HoAmI;