import { } from 'react-native';
import { InputUser } from '../SignIn/styles';

import { SignInContainer,
   SignInWrapper,
    Title, 
    Text,
   Input, 
  
  Button,
  TextButton, 
  Header
} from './styles';

export function RecoverPassword() {
  return (
    <SignInContainer>
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
      
       
      
   
    </SignInContainer>
  );
}
