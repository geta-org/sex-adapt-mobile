import styled from 'styled-components/native';
export const AccessibilityContainer = styled.View`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  padding: 0 62px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: column;

  margin-bottom: ${({ theme }) => theme.margins.lg};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xs};
`;

export const AccessibilityWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardsWrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.margins.sm};
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  width: 120px;
  height: 38px;

  border-radius: 26px;

  background-color: ${({ theme }) => theme.colors.red_900};
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`;
