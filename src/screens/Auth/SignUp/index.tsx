import { } from 'react-native';
import { Text,
OtherText, Header, TextDados, SingInContainer, Input, Title,Button, SignInWrapper, TextButton} from './styles'
export function SignUp() {
    return (
      <SingInContainer>
        <Header>
          <Title>Esqueceu sua Senha?</Title>
          <Text >Seu e-mail pode ajudar a recuperar</Text>
          </Header>
          <SignInWrapper>
          <Input placeholder="     Insira seu e-mail" placeholderTextColor="#bababa">
          
         </Input>
         
           <Button activeOpacity={0.3} >
            <TextButton>Recuperar senha</TextButton>
          </Button>
            
  
          </SignInWrapper>
        
         
        
     
      </SingInContainer>
    );
  }
  