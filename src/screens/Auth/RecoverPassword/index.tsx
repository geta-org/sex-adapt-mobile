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
import { BackButton } from 'src/components/BackButton';

export function RecoverPassword() {
  const navigation = useNavigation();
  function handleAccessibility() {
    navigation.navigate('Accessibility');
  }

  return (
    <RecoverPasswordWrapper>
      <BackButton/>
      <View>
        <Title>Esqueceu sua Senha?</Title>
        <Subtitle>Seu e-mail pode ajudar a recuperar</Subtitle>
      </View>

      <Input placeholder="Insira seu e-mail" placeholderTextColor="#bababa" />

      <Button activeOpacity={0.7} onPress={handleAccessibility}>
        <TextButton>Recuperar senha</TextButton>
      </Button>
    </RecoverPasswordWrapper>
  );
}
