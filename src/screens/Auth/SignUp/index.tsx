import {} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  OtherText,
  Header,
  SingUpText,
  SingInContainer,
  Input,
  Title,
  Button,
  SignInWrapper,
  TextButton,
  ButtonText,
  TextInput,
  BackButton,
  Container, 
  
} from './styles';
import { CaretDoubleRight, CaretLeft } from 'phosphor-react-native';
export function SignUp() {
  const navigation = useNavigation();

  function handleAccessibility() {
    navigation.navigate('Accessibility');
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    
    <SingInContainer>
      <BackButton onPress={handleGoBack}>
        <CaretLeft size={32}  />
        <Title>     Cadastro</Title>
        </BackButton>
      <Header>
       
        
    
        
       
       
        <SingUpText>
          Conte-nos um pouco mais sobre você para realizarmos o seu cadastro
        </SingUpText>
        <Text>Usuário</Text>
        <Input
          placeholder="     Usuário"
          placeholderTextColor="#bababa"></Input>
        <Text>E-mail</Text>
        <Input
          placeholder="     Insira seu e-mail"
          placeholderTextColor="#bababa"></Input>
        <Text>Senha </Text>
        <Input placeholder="     Senha" placeholderTextColor="#bababa" secureTextEntry></Input>
        <Text>Confirmação da senha </Text>
       
        <Input placeholder="     Senha" placeholderTextColor="#bababa" secureTextEntry ></Input>
        <Button activeOpacity={0.7} onPress={handleAccessibility}>
          <TextButton >Próximo     <CaretDoubleRight size={32} color="#FFF" font-weight="bold" /></ TextButton> 
        </Button>
      </Header>
      
       
     
    </SingInContainer>
  );
}
