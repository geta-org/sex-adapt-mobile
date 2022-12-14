import { TouchableWithoutFeedback, View } from 'react-native';
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
  CardSupport,
  CardText,
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

export function Support() {
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

          <TouchableWithoutFeedback onPress={() => console.log('abri modal')}>
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
          {/* TODO: CREATE BUTTON COMPONENT */}
          <TouchableWithoutFeedback onPress={() => console.log('abrir')}>
            <CardSupport>
              <Buildings />
              <CardText>Sugerir Motel</CardText>
            </CardSupport>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => console.log('abrir')}>
            <CardSupport>
              <Sliders />
              <CardText>Preferências</CardText>
            </CardSupport>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => console.log('abrir')}>
            <CardSupport>
              <PencilSimpleLine />
              <CardText>Editar Perfil</CardText>
            </CardSupport>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => console.log('abrir')}>
            <CardSupport>
              <Headset />
              <CardText>Suporte</CardText>
            </CardSupport>
          </TouchableWithoutFeedback>
        </CardContent>
      </IconContext.Provider>
    </SupportContainer>
  );
}
