import { MagnifyingGlass } from 'phosphor-react-native';
import { useState } from 'react';

import { SearchContainer, SearchInput } from './styles';

import { theme } from '../../../styles/theme';
import { TouchableOpacity } from 'react-native';

export function InputSearch() {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchContainer style={{ shadowOpacity: 0.29, elevation: 3 }}>
      <SearchInput
        value={searchText}
        onChangeText={(text: string) => setSearchText(text)}
        accessibilityLabel={'Campo de busca de estabelecimento'}
        placeholder="Buscar Motel..."
        onEndEditing={() => console.log('pequisar..')}
        returnKeyType="search"
      />
      <TouchableOpacity
        accessible={true}
        accessibilityLabel={'Buscar estabelecimentos'}
        accessibilityRole={'button'}
        onPress={() => console.log('pesquisar...')}>
        <MagnifyingGlass
          size={16}
          weight="bold"
          color={theme.colors.gray_500}
        />
      </TouchableOpacity>
    </SearchContainer>
  );
}
