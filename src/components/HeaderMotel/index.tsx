import { FunnelSimple } from 'phosphor-react-native';
import { theme } from '../../styles/theme';
import { ButtonRound } from '../Button/ButtonRound';
import { InputProps, InputSearch } from '../Input/InputSearch';
import { HeaderContainer } from './styles';

export function HeaderMotel({ onChangeText }: InputProps) {
  return (
    <HeaderContainer>
      <InputSearch onChangeText={onChangeText} />
      <ButtonRound
        accessibilityLabel="Filtro"
        accessibilityHint="Navega para página de filtro"
        icon={
          <FunnelSimple size={20} weight="bold" color={theme.colors.gray_500} />
        }
      />
    </HeaderContainer>
  );
}
