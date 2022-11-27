import { Modal, View } from "react-native";

import {
  ModalContainer,
  ModalWrapper,
  Title,
  TextButton,
  Button,
} from "./styles";

interface ModalConfirmation {
  isModalOpen: boolean;
  title: string;
  redirectTo: () => void;
  changeStateModal: () => void;
}

export function ModalConfirmation({
  isModalOpen,
  title,
  redirectTo,
  changeStateModal,
}: ModalConfirmation) {
  return (
    <ModalContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={changeStateModal}
      >
        <ModalContainer>
          <View>
            <Title>{title}</Title>
          </View>
          <ModalWrapper>
            <Button onPress={redirectTo}>
              <TextButton>Sim</TextButton>
            </Button>
            <Button onPress={changeStateModal}>
              <TextButton>Não</TextButton>
            </Button>
          </ModalWrapper>
        </ModalContainer>
      </Modal>
    </ModalContainer>
  );
}
