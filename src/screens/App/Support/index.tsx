import { TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Buildings,
  Headset,
  IconContext,
  PencilSimpleLine,
  SignOut,
  Sliders,
} from "phosphor-react-native";

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
  UserText,
} from "./styles";

import { WomenA } from "@assets";
import { StatusBar } from "expo-status-bar";
import { theme } from "src/styles/theme";

export function Support() {
  const navigation = useNavigation();

  function handleOpenMotel() {
    navigation.navigate("MotelSuggestion");
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

          <TouchableWithoutFeedback onPress={() => console.log("abri modal")}>
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
          size: 57,
        }}
      >
        <CardContent>
          {/* TODO: CREATE BUTTON COMPONENT */}
          <TouchableWithoutFeedback onPress={() => Suggestion()}>
            <CardSupport>
              <Buildings />
              <CardText>Sugerir Motel</CardText>
            </CardSupport>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => console.log("abrir")}>
            <CardSupport>
              <Sliders />
              <CardText>Preferências</CardText>
            </CardSupport>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => console.log("abrir")}>
            <CardSupport>
              <PencilSimpleLine />
              <CardText>Editar Perfil</CardText>
            </CardSupport>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => console.log("abrir")}>
            <CardSupport>
              <Headset />
              <CardText>Suporte</CardText>
            </CardSupport>
          </TouchableWithoutFeedback>
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

import React from "react";
import { ScrollView } from "react-native";
import {
  SuggestionContainer,
  InputContainer,
  Title,
  Input,
  Name,
  Subtitle,
  SuggestionWrapper,
  Header,
  Button,
  TextButton,
} from "./styles";
export function Suggestion() {
  return (
    <SuggestionContainer>
      <ScrollView>
        <Header>
          <Title>Sugerir Motel</Title>
          <Subtitle>Conhece algum motel? Conte para nós.</Subtitle>
        </Header>
        <SuggestionWrapper>
          <Name>Nome</Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>Endereço</Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>Telefone</Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>Website</Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>Categoria</Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>Quanto você gastou?</Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>
            O estabelecimento apresenta desníveis na extensão do piso?
          </Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>O estabelecimento quartos no térreo?</Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>Qual o nível de acessibilidade dos elevadores?</Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>O estabelecimento dispõe de quais formas de comunicação?</Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>Quais as sinalizações presentes no ambiente?</Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>Qual o nível de acessibilidade dos banheiros?</Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>
            A cama possibilita um cadeirante realizar a transferência?
          </Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>O tamanho das portas são acessíveis para cadeirantes?</Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Name>
            Os interfones, interruptores e sinalizadores estão localizados ao
            alcance manual de uma pessoa?
          </Name>
          <InputContainer>
            <Input />
          </InputContainer>

          <Button>
            <TextButton>Enviar sugestão</TextButton>
          </Button>
        </SuggestionWrapper>
      </ScrollView>
    </SuggestionContainer>
  );
}
