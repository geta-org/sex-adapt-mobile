import React from "react";
import { ScrollView } from "react-native";

import { BackButton } from "src/components/BackButton";

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
      <BackButton />
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
