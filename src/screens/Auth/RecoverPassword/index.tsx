import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  RecoverPasswordWrapper,
  Title,
  Subtitle,
  Input,
  Button,
  TextButton
} from './styles';
import { CaretLeft } from 'phosphor-react-native';
import { BackButton } from 'src/components/BackButton';

export function RecoverPassword() {
  const navigation = useNavigation();
  function handleAcessibility() {
    navigation.navigate('Accessibility');
  }
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <RecoverPasswordWrapper>
      <BackButton />
      <View>
        <Title>Esqueceu sua Senha?</Title>
        <Subtitle>Seu e-mail pode ajudar a recuperar</Subtitle>
      </View>

      <Input placeholder="Insira seu e-mail" placeholderTextColor="#bababa" />

      <Button activeOpacity={0.7} Onpress={handleAcessibility}>
        <TextButton>Recuperar senha</TextButton>
      </Button>
    </RecoverPasswordWrapper>
  );
}
