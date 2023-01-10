import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const MotelName = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xs};

  margin-bottom: 4px;
`;

export const ButtonOpenMotelDetails = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 150px;

  background-color: ${({ theme }) => theme.colors.red_900};

  border-top-left-radius: 17px;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;

  position: relative;
  bottom: 6px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xs};
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};
`;

export const styles = StyleSheet.create({
  marker: {
    alignItems: 'center'
  },

  markerCallout: {
    width: 235,
    alignItems: 'flex-end'
  }
});
