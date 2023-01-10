import { ButtonBack } from "src/components/Button/ButtonBack";
import { InputForm } from "src/components/Input/InputForm";

import {
  RecoverPasswordWrapper,
  Title,
  Subtitle,
  Button,
  TextButton,
  FormWrapper,
  Header,
} from "./styles";

export function RecoverPassword() {
  return (
    <RecoverPasswordWrapper>
      <ButtonBack />
      <Header>
        <Title>Esqueceu sua Senha?</Title>
        <Subtitle>Seu e-mail pode ajudar a recuperar</Subtitle>
      </Header>

      <FormWrapper>
        <InputForm
          icon="mail"
          label="E-mail"
          placeholder="john@doe.com"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="done"
        />
      </FormWrapper>

      <Button activeOpacity={0.7}>
        <TextButton>Recuperar senha</TextButton>
      </Button>
    </RecoverPasswordWrapper>
  );
}
