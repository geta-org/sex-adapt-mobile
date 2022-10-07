import { FunnelSimple } from 'phosphor-react-native';
import { theme } from '../../styles/theme';
import { ButtonRound } from '../Button/ButtonRound';
import { InputSearch } from '../Input/InputSearch';
import { HeaderContainer } from './styles';

export function HeaderMotel() {
  return (
    <HeaderContainer>
      <InputSearch />
      <ButtonRound
        label="Filtro"
        subtitle="Navega para página de filtro"
        icon={
          <FunnelSimple size={20} weight="bold" color={theme.colors.gray_500} />
        }
      />
    </HeaderContainer>
  );
}
