import { } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text,
OtherText, Header, SingUpText, SingInContainer, Input, Title,Button, SignInWrapper, TextButton,ButtonText,TextInput } from './styles'
export function SignUp() {
  const navigation = useNavigation();

  function handleAccessibility() {
    navigation.navigate('Accessibility')
  }

    return (
      <SingInContainer>
        <Header>
          <Title>Cadastro</Title>
          <SingUpText>Conte-nos um pouco mais sobre você para realizarmos o seu cadastro</SingUpText>
          <Text >Usuário</Text>
          <Input placeholder="     Usuário" placeholderTextColor="#bababa"></Input>
          <Text >E-mail</Text>
          <Input placeholder="     Insira seu e-mail" placeholderTextColor="#bababa"></Input>
          <Text >Senha </Text>
          <Input placeholder="     Senha" placeholderTextColor="#bababa"></Input>
          <Text >Confirmação da senha </Text>
          <Input >
            <TextInput>Senha</TextInput>

          </Input>
          </Header>
          <SignInWrapper>
          
         
           <Button activeOpacity={0.3}  onPress={handleAccessibility}>
            <TextButton>Próximo  </TextButton>
            
          </Button>
            
  
          </SignInWrapper>
        
         
        
     
      </SingInContainer>
    );
  }
  