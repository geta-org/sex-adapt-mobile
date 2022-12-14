import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 245px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};

  padding-right: ${({ theme }) => theme.margins.sm};

  border-color: ${({ theme }) => theme.colors.gray_800};
  border-radius: 26px;

  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.black};
`;

export const SearchInput = styled.TextInput`
  width: 213px;
  padding-left: ${({ theme }) => theme.margins.md};

  font-size: ${({ theme }) => theme.font_size.xs};
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.gray_900};
`;
