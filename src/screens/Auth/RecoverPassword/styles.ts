import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  width: 220px;
  align-items: center;
`;
export const RecoverPasswordWrapper = styled.SafeAreaView`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.Text`
  font-size: 13px;
  margin-bottom: 50px;
`;
export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #bababa;
  height: 40px;
  width: 300px;
  margin-bottom: 15px;
  font-size: 16px;
  padding-left: 15px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #cc3333;
  border-radius: 90px;
  width: 50%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;
