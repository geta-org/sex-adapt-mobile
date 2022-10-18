import styled from 'styled-components/native';

export const Text = styled.Text`
  font-weight: bold;
  margin-right: 10px;
  margin-top: 10px;
  font-size: 15px;
`;
export const OtherText = styled.Text``;
export const SingUpContainer = styled.SafeAreaView`
  margin-top: 60px;
`;
export const Header = styled.View`
  align-items: initial;
  margin-left: 70px;
  margin-bottom: 100px;
`;
export const Subtitle = styled.Text`

`;
export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #bababa;
  height: 50px;
  width: 300px;
  font-size: 16px;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-right: 50%;
`;

export const Button = styled.TouchableOpacity`
  background-color: #cc3333;
  border-radius: 90px;
  width: 60%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px;
  margin-left: 45px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const TextButton = styled.Text`
  flex-direction: row;
  align-items: center;
  color: #fff;
  font-weight: bold;
  width: 70%;
`;

export const TextInput = styled.Text`
  font-size: 13px;
  margin-left: 100px;
`;

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 50px;
`;
