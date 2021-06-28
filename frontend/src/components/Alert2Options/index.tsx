import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'react-native';
import {
    Container,
    ModalContainer,
    Title,
    Content,
    ContainerButton,
    Cancel,
    Confirm,
    TextButton
} from './styles';


interface ModalProps {
    visible: boolean;
    close: () => void;
    onConfirm:() => void;
    title: string;
    content: string;
}

const Alert2Options = ({title,content,visible,close,onConfirm}:ModalProps) => {

    return (
        <Modal
            animationType="fade"
            transparent
            statusBarTranslucent
            visible={visible}
        >
            <Container>
                <ModalContainer>
                    <Title>
                        {title}
                    </Title>
                    
                    <Content>
                        {content}
                    </Content>

                    <ContainerButton>
                        <Confirm onPress={async () => { await onConfirm(); close();}}>
                            <TextButton>
                                Confirmar
                            </TextButton>
                        </Confirm>

                        <Cancel onPress={() => {close()}}>
                            <TextButton>
                                Cancelar
                            </TextButton>
                        </Cancel>

                    </ContainerButton>
                </ModalContainer>
            </Container>
        </Modal>
    )
}

export default Alert2Options;