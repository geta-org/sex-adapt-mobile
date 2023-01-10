import styled from 'styled-components/native';

interface ButtonBaseProps {
  active: boolean;
}

export const ButtonBaseContainer = styled.TouchableOpacity<ButtonBaseProps>`
  align-self: center;
  padding: 11px 30px;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 20px;
  background: ${({ active, theme }) =>
    active ? theme.colors.red_900 : theme.colors.white};
`;
export const ButtonBaseText = styled.Text<ButtonBaseProps>`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xs};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.gray_500};
`;
