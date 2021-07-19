import React, { useRef, useState } from 'react';
import { Image, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { 
    ContainerAll,
    Container,
    ContainerLogo,
    Title,
    Input,
    Button,
    TextButton,
    Column,
    Row,
    AvatarContainer
} from './styles';
import Alert from '../../../../components/AlertConfirm';
import Avatar from '../../../../components/Avatar/avatar';
import api from   '../../../../services/api';

const background = require('../../../../assets/background.png');
const Logo = require('../../../../assets/logo-with-name.png');

const AvatarAndNickname = (props: any) => {

    const SCREEN_WIDTH = Dimensions.get("window").width;
    const PROFILE_PICTURE_DIMENSION = SCREEN_WIDTH * 0.25;
    const SCREEN_HEIGHT = Dimensions.get("window").height;

    const alertRef = useRef<any>();

    const [alertErrorMessage, setAlertErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [nickName, setNickname] = useState<string>("");
    const [chosedAvatar, setChosedAvatar] = useState<string>("");

    const idImages1 = ['1', '2', '3'];
    const idImages2 = ['4', '5', '6'];

    async function handleChange(){

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
                        padding: SCREEN_HEIGHT*0.05                 
                     }}
                     showsVerticalScrollIndicator={false}
                >   
                    <Column>                 
                        <Title> 
                            Como você gostaria de ser chamado?
                        </Title>

                        <Input 
                            placeholder="Apelido"
                            onChangeText={(text) => setNickname(text)}
                        />

                        <Title> 
                            Escolha um avatar para você
                        </Title>

                        <AvatarContainer>
                            <Row>
                                {
                                    idImages1.map(image => {
                                    return(
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: chosedAvatar === image ? '#61C08C' : 'transparent',
                                                width: PROFILE_PICTURE_DIMENSION,
                                                height: PROFILE_PICTURE_DIMENSION,
                                                borderRadius: PROFILE_PICTURE_DIMENSION/2
                                            }}
                                            onPress={() => setChosedAvatar(image)}
                                        >
                                            <Avatar
                                                profilePicture = {image}
                                                dimension = {PROFILE_PICTURE_DIMENSION}
                                            />
                                        </TouchableOpacity>
                                    )
                                })
                                }
                            </Row>
                            <Row>
                            {
                                idImages2.map(image => {
                                return(
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: chosedAvatar === image ? '#61C08C' : 'transparent',
                                            width: PROFILE_PICTURE_DIMENSION,
                                            height: PROFILE_PICTURE_DIMENSION,
                                            borderRadius: PROFILE_PICTURE_DIMENSION/2
                                        }}
                                        onPress={() => setChosedAvatar(image)}
                                    >
                                        <Avatar
                                            profilePicture = {image}
                                            dimension = {PROFILE_PICTURE_DIMENSION}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                                }
                            </Row>
                        </AvatarContainer>
                    </Column>

                    <Button onPress={() => {handleChange}}  >
                        {
                            !loading ?
                                <TextButton>Continuar</TextButton>
                                :
                                <ActivityIndicator size={28} color="#fad2d2" /> 
                        }
                    </Button>

                </ScrollView>
            </Container>
        </ContainerAll>
    );
}

export default AvatarAndNickname;