import { } from 'react-native';
import { InputUser } from '../SignIn/styles';
import { useNavigation } from '@react-navigation/native';

import { RecoverPasswordContainer,
  RecoverPasswordWrapper,
    Title, 
    Text,
   Input, 
  Button,
  TextButton, 
  Header, 
  BackButton
} from './styles';
import { CaretLeft } from 'phosphor-react-native';

export function RecoverPassword() {
  const navigation = useNavigation();
  function handleAcessibility(){
    navigation.navigate('Accessibility')
  }
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <RecoverPasswordContainer>
      <BackButton onPress={handleGoBack}>
          <CaretLeft size={32} font-weight="bold" />
          <Title>Esqueceu sua Senha?</Title>
        </BackButton>
      
        
        <Text >Seu e-mail pode ajudar a recuperar</Text>
      
        <RecoverPasswordWrapper>
        <Input placeholder="     Insira seu e-mail" placeholderTextColor="#bababa">
        
       </Input>
         
         <Button activeOpacity={0.3} Onpress={handleAcessibility}>
          <TextButton>Recuperar senha</TextButton>
        </Button>
          

        </RecoverPasswordWrapper>
    </RecoverPasswordContainer>
  );
}
