import { useState } from 'react';
import { Keyboard, TouchableOpacity } from 'react-native';

import { MagnifyingGlass } from 'phosphor-react-native';

import { SearchContainer, SearchInput } from './styles';

import { theme } from '../../../styles/theme';

export interface InputProps {
  onChangeText: (value: string) => void;
}

export function InputSearch({ onChangeText }: InputProps) {
  const [searchMotel, setSearchMotel] = useState('');

  function handleSearch(Text: string) {
    setSearchMotel((prev) => {
      onChangeText(prev);
      return Text;
    });
    Keyboard.dismiss;
  }

  return (
    <SearchContainer style={{ shadowOpacity: 0.29, elevation: 3 }}>
      <SearchInput
        value={searchMotel}
        onChangeText={(text: string) => handleSearch(text)}
        accessibilityLabel={'Campo de busca de estabelecimento'}
        placeholder="Buscar Motel..."
        onEndEditing={() => handleSearch}
        returnKeyType="search"
      />
      <TouchableOpacity
        accessible={true}
        accessibilityLabel={'Buscar estabelecimentos'}
        accessibilityRole={'button'}
        onPress={Keyboard.dismiss}>
        <MagnifyingGlass
          size={16}
          weight="bold"
          color={theme.colors.gray_500}
        />
      </TouchableOpacity>
    </SearchContainer>
  );
}
