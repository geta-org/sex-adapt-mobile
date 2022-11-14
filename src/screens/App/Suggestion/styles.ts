import styled from 'styled-components/native';
export const SuggestionContainer = styled.View`
  margin-top: 60px;
`;
export const Header = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 50px;
  margin-bottom: 20px;
`;
export const SuggestionWrapper = styled.View`
  align-items: initial;
  margin-left: 12%;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 42px;
  width: 300px;
`;

export const Subtitle = styled.Text`
  width: 300px;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  margin-right: 10px;
  font-size: 17px;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 320px;
  font-size: 16px;
`;

export const InputContainer = styled.View`
  background-color: #f1f1f1;
  border-radius: 30px;
  margin: 15px 0 15px 0;
`;
export const Button = styled.TouchableOpacity`
  background-color: #cc3333;
  border-radius: 90px;
  width: 300px;
  height: 50px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px;
  margin-left: 5px;
`;
export const TextButton = styled.Text`
  color: white;
  font-weight: bold;
`;
