import {} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  Header,
  Subtitle,
  SingUpContainer,
  Input,
  Title,
  Button,
  TextButton,
  Container
} from './styles';
import { CaretDoubleRight } from 'phosphor-react-native';
import { BackButton } from 'src/components/BackButton';
export function SignUp() {
  const navigation = useNavigation();

  function handleAccessibility() {
    navigation.navigate('Accessibility');
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <SingUpContainer>
      <BackButton />
      <Container>
        <Title> Cadastro</Title>
        <Subtitle>
          Conte-nos um pouco mais sobre você para realizarmos o seu cadastro
        </Subtitle>
      </Container>

      <Header>
        <Text>Usuário</Text>
        <Input
          placeholder="     Usuário"
          placeholderTextColor="#bababa"></Input>
        <Text>E-mail</Text>
        <Input
          placeholder="     Insira seu e-mail"
          placeholderTextColor="#bababa"></Input>
        <Text>Senha </Text>
        <Input
          placeholder="     Senha"
          placeholderTextColor="#bababa"
          secureTextEntry></Input>
        <Text>Confirmação da senha </Text>

        <Input
          placeholder="     Senha"
          placeholderTextColor="#bababa"
          secureTextEntry></Input>
        <Button activeOpacity={0.7} onPress={handleAccessibility}>
          <TextButton>Próximo</TextButton>
          <CaretDoubleRight size={32} color="#FFF" weight="bold" />
        </Button>
      </Header>
    </SingUpContainer>
  );
}
