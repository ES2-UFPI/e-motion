import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'react-native';
import {
    Container,
    ModalContainer,
    Title,
    Content,
    ContainerButton,
    Button,
    TextButton
} from './styles';

interface Props {
    title: string
    content: string
    textButton: string
    onConfirm(): void
}

const Alert = ((props: Props, ref: any) => {

    const { title, content, textButton, onConfirm } = props;

    const [visible, setVisible] = useState<boolean>(false);

    const show = () => setVisible(true);

    const close = () => setVisible(false);

    useImperativeHandle(ref, () => ({
        show: () => show(),
        close: () => close()
    }))

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
                        <Button onPress={() => {ref.current.close(); onConfirm()}}>
                            <TextButton>
                                {textButton}
                            </TextButton>
                        </Button>
                    </ContainerButton>
                </ModalContainer>
            </Container>
        </Modal>
    )
})

export default forwardRef(Alert);