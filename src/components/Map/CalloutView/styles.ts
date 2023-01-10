import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const CalloutViewContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 235px;
  height: 97px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`;

export const MotelLogo = styled.Image`
  height: 71px;
  width: 71px;

  border-radius: 16px;
`;

export const CalloutViewWrapper = styled.View`
  width: 130px;
`;

export const MotelName = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.red_900};
  text-transform: uppercase;
`;

export const Distance = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.red_900};
`;

export const PriceWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;
export const styles = StyleSheet.create({
  rating: {
    paddingVertical: 1.8,
    alignSelf: 'flex-start'
  }
});
