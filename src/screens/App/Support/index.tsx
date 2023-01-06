import { TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Buildings,
  Headset,
  IconContext,
  PencilSimpleLine,
  SignOut,
  Sliders
} from 'phosphor-react-native';

import {
  CardContent,
  DisconnectButton,
  DisconnectText,
  ProfileContainer,
  SupportContainer,
  UserContent,
  UserStatistic,
  UserStatisticText,
  UserText
} from './styles';

import { WomenA } from '@assets';
import { StatusBar } from 'expo-status-bar';
import { theme } from 'src/styles/theme';
import { ModalConfirmation } from 'src/components/Modal/ModalConfirmation';
import { useState } from 'react';
import { ButtonSupport } from 'src/components/Button/ButtonSupport';

export function Support() {
  const navigation = useNavigation();
  const [modalConfirmationOpen, setModalConfirmationOpen] = useState(false);

  function changeStateModal() {
    setModalConfirmationOpen((curr) => !curr);
  }

  function disconnectUser() {
    navigation.navigate('Home');
  }

  return (
    <SupportContainer>
      <StatusBar style="light" />
      <ProfileContainer>
        <WomenA width={90} />

        <View>
          <UserContent>
            <UserText>John Doe</UserText>
          </UserContent>
          <UserStatistic>
            <UserStatisticText>13 Motéis Visitados</UserStatisticText>
            <UserStatisticText>13 Avaliações</UserStatisticText>
            <UserStatisticText>13 Comentários</UserStatisticText>
            <UserStatisticText>13 Sugestões</UserStatisticText>
          </UserStatistic>

          <TouchableWithoutFeedback onPress={changeStateModal}>
            <DisconnectButton>
              <DisconnectText>Desconectar</DisconnectText>
              <SignOut color="white" weight="bold" size={16} />
            </DisconnectButton>
          </TouchableWithoutFeedback>
        </View>
      </ProfileContainer>

      <IconContext.Provider
        value={{
          color: theme.colors.red_900,
          size: 57
        }}>
        <CardContent>
          <ButtonSupport
            title="Sugerir Motel"
            icon={<Buildings />}
            onPress={() => Suggestion()}
          />

          <ButtonSupport
            title="Preferências"
            icon={<Sliders />}
            onPress={() => Suggestion()}
          />

          <ButtonSupport
            title="Editar Perfil"
            icon={<PencilSimpleLine />}
            onPress={() => Suggestion()}
          />

          <ButtonSupport
            title="Suporte"
            icon={<Headset />}
            onPress={() => Suggestion()}
          />
        </CardContent>
      </IconContext.Provider>

      <ModalConfirmation
        title="Você tem certeza que quer desconectar?"
        isModalOpen={modalConfirmationOpen}
        changeStateModal={changeStateModal}
        redirectTo={disconnectUser}
      />
    </SupportContainer>
  );
}
